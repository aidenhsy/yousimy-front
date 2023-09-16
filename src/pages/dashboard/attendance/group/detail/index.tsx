import { useState } from "react";
//external library
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Spin,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
//types
import { GetServerSidePropsContext } from "next";
import { DashItems } from "@/types";
import { AttGroup } from "@/gql/graphql";
//own libraries
import { withDashItems } from "../../../../../hoc/withDashItems";
import { headerTitle } from "@/lib/tools/headerTitle";
//components
import OperationBtn from "@/components/Button/OperationBtn";
import Info from "./info";
import MapDetail from "./MapDetail";
import ModalMap from "./modalMap";
import SinglePageHeader from "@/components/Header/singlePageHeader";
import { useRouter } from "next/router";
import { useCreateAttendanceShiftGroup } from "@/hooks/attendance.hooks";
import { nanoid } from "nanoid";
import { useUpdateEmployee } from "@/hooks/employees.hooks";
import { useUpdateDepartment } from "@/hooks/departments.hooks";

type FormType = Pick<
  AttGroup,
  "name" | "bind_employees" | "leaders" | "locations" | "sub_leaders"
>;
export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);
const { confirm } = Modal;
const DetailPage = ({ dashItems }: { dashItems: DashItems }) => {
  //router
  const router: any = useRouter();
  //state
  const [mapDetailOpen, setMapDetailOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false); // 地图弹窗
  const [detail, setDetail] = useState<any>();
  //hooks
  const {
    createAttendanceShiftGroup,
    createAttendanceShiftGroupLoading,
    createAttendanceShiftGroupError,
  } = useCreateAttendanceShiftGroup();
  const { updateEmployee } = useUpdateEmployee();
  const { updateDepartment } = useUpdateDepartment();
  //form
  const [form] = Form.useForm<FormType>();
  // 新增考勤地点
  const onAdd = (value: any) => {
    console.log(value);
    let ls = form.getFieldValue("locations");
    form.setFieldValue("locations", ls ? [...ls, value] : [value]);
    setIsMapOpen(false);
  };
  // 点击详情
  const onDetail = (index: number) => {
    setDetail(form.getFieldValue("locations")[index]);
    setMapDetailOpen(true);
  };
  // 新建考勤组的确认
  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      const { name, leaders, sub_leaders, bind_employees, locations }: any =
        values;
      const id = nanoid();
      const data = {
        id,
        name,
        attendance_group_leaders: {
          data: leaders?.map((item: any) => {
            return {
              employee_id: item.value,
            };
          }),
        },
        attendance_group_subleaders: {
          data: sub_leaders?.map((item: any) => {
            return {
              employee_id: item.value,
            };
          }),
        },
        attendance_locations: {
          data: locations?.map((item: any) => ({
            id: nanoid(),
            address: item.address,
            name: item.name,
            latitude: item.latitude,
            longitude: item.longitude,
            gps_range: item.gps_range,
          })),
        },
      };
      const departmemntIds = bind_employees
        ?.filter((one: any) => one.label.__typename === "departments")
        ?.map((item: any) => item.value);

      await createAttendanceShiftGroup(data);
      if (!createAttendanceShiftGroupError) {
        await updateDepartment(departmemntIds, {
          attendance_group_id: router?.query?.id,
        });
        await updateDepartment(departmemntIds, {
          attendance_group_id: id,
        });
      }

      message.success("创建成功");
      router.push("/dashboard/attendance/group/list");
    } catch (error) {
      console.log(error);
      if (JSON.stringify(error).includes("attendance_groups.uk_name")) {
        return message.error("重复考勤组名称");
      } else {
        return message.error("创建失败");
      }
    }
  };
  return (
    <div className="tw-text-base tw-text-black tw-h-screen">
      <Spin
        spinning={createAttendanceShiftGroupLoading}
        wrapperClassName="tw-h-full tw-min-w-[840px] tw-bg-[#f2f3f5] tw-box-border tw-flex tw-min-h-0 tw-flex-col"
      >
        <SinglePageHeader
          title="新建考勤组"
          onReturn={() =>
            confirm({
              title: "确定离开此页面吗？",
              content: "你所做的更改尚未保存，离开后将丢失当前编辑的内容",
              onOk() {
                router.push("/dashboard/attendance/group/list");
              },
            })
          }
        />
        <section className="tw-bg-[#f2f3f5] tw-box-border tw-flex tw-min-h-0 tw-flex-col tw-pb-[50px] tw-flex-auto">
          <main className="tw-flex tw-flex-col tw-min-w-0 tw-p-5 tw-pt-0  tw-mt-5 tw-overflow-y-auto">
            <Form
              className="w-min-w-[984px]"
              form={form}
              layout="vertical"
              initialValues={{
                time_zone: "GMT+08:00 中国标准时间",
              }}
            >
              <div className="tw-relative tw-w-[840px] tw-space-y-4 tw-mx-auto">
                <div className="tw-bg-white tw-border tw-border-solid  tw-border-gray-100 tw-rounded-lg tw-box-border tw-w-full tw-p-5">
                  {headerTitle("基本信息")}
                  <Info />
                </div>
                <div className="tw-bg-white tw-relative tw-border tw-border-solid  tw-border-gray-100 tw-rounded-lg tw-box-border tw-w-full tw-p-5">
                  {headerTitle("考勤地点")}
                  <Form.List name="locations">
                    {(fields) => (
                      <>
                        <Button
                          style={{ position: "absolute", right: 20, top: 20 }}
                          icon={<PlusOutlined />}
                          onClick={() => setIsMapOpen(true)}
                        >
                          新增考勤地点
                        </Button>
                        <Row className="tw-py-2 tw-w-11/12 tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-b-[1px]  tw-mx-auto tw-my-0">
                          <Col span={14}>考勤地点</Col>
                          <Col span={5}>有效范围</Col>
                          <Col span={5}>操作</Col>
                        </Row>
                        {fields.map((field) => (
                          <Row
                            key={field.key}
                            className="tw-py-2 tw-w-11/12 tw-border-solid tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-b-[1px]  tw-mx-auto tw-my-0"
                          >
                            <Col span={14}>
                              <Form.Item noStyle name={[field.name, "address"]}>
                                <Input readOnly bordered={false} />
                              </Form.Item>
                            </Col>
                            <Col span={5}>
                              <Form.Item
                                noStyle
                                name={[field.name, "gps_range"]}
                                initialValue={100}
                              >
                                <Select
                                  style={{ width: 120 }}
                                  options={gpsRangeOptions}
                                />
                              </Form.Item>
                            </Col>
                            <Col span={5}>
                              <OperationBtn
                                onClick={() => onDetail(field.name)}
                              >
                                详情
                              </OperationBtn>
                              <OperationBtn>删除</OperationBtn>
                            </Col>
                          </Row>
                        ))}
                      </>
                    )}
                  </Form.List>
                </div>
              </div>
            </Form>
          </main>
          <footer className="tw-fixed tw-bottom-0 tw-right-0 tw-left-0 tw-h-auto tw-leading-normal tw-p-0 tw-bg-gray-200 tw-text-sm tw-box-border tw-text-black tw-flex-shrink-0 tw-flex-grow-0 tw-basis-auto">
            <div className="tw-bg-white tw-flex tw-justify-center">
              <div className="tw-relative tw-w-[840px] tw-pb-4 tw-pt-4 tw-flex tw-items-center">
                <Button className="tw-px-6" type="primary" onClick={onFinish}>
                  确定
                </Button>
                <Button
                  className="tw-ml-3 tw-px-6"
                  onClick={() =>
                    confirm({
                      title: "确定离开此页面吗？",
                      content:
                        "你所做的更改尚未保存，离开后将丢失当前编辑的内容",
                      onOk() {
                        router.back();
                      },
                    })
                  }
                >
                  取消
                </Button>
              </div>
            </div>
          </footer>
        </section>
      </Spin>
      {isMapOpen && (
        <ModalMap onCancel={() => setIsMapOpen(false)} onFinish={onAdd} />
      )}
      {mapDetailOpen && (
        <MapDetail onCancel={() => setMapDetailOpen(false)} detail={detail} />
      )}
    </div>
  );
};

export default DetailPage;

export const gpsRangeOptions = [
  { label: "100米", value: 100 },
  { label: "200米", value: 200 },
  { label: "300米", value: 300 },
  { label: "400米", value: 400 },
  { label: "500米", value: 500 },
  { label: "600米", value: 600 },
  { label: "700米", value: 700 },
  { label: "800米", value: 800 },
  { label: "900米", value: 900 },
  { label: "1000米", value: 1000 },
  { label: "1500米", value: 1500 },
  { label: "2000米", value: 2000 },
  { label: "2500米", value: 2500 },
  { label: "3000米", value: 3000 },
];

export const mapLabelValue = (items: any, avatarKey: any = null) => {
  // 生成考勤组特殊组件对象
  return items?.map((item: any) => ({
    label: {
      ...item,
      name: item?.name,
      __typename: item?.__typename,
      ...(avatarKey && { avatar: item?.avatar }),
    },
    value: item?.id,
  }));
};
