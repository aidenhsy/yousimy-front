import React, { useEffect, useState } from "react";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
//antd
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
import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
//own libraries
import { withDashItems } from "../../../../../hoc/withDashItems";
import { gpsRangeOptions, mapLabelValue } from ".";

//types
import { DashItems } from "@/components/Layout/Dashboard/types";
import { AttGroup } from "@/gql/graphql";

import ModalMap from "./modalMap";
import { headerTitle } from "@/lib/tools/headerTitle";
import MapDetail from "./MapDetail";
import Info from "./info";
import SinglePageHeader from "@/components/Header/singlePageHeader";
import {
  useAttendnceGroupById,
  useUpdateAttendanceGroup,
} from "@/hooks/attendance.hooks";
import { nanoid } from "nanoid";
import { useUpdateDepartment } from "@/hooks/departments.hooks";
import {
  useCreateAttendanceGroupLeaders,
  useDeleteAttendanceGroupLeaders,
} from "@/hooks/attendance-leader.hooks";
import {
  useCreateAttendanceGroupSubLeaders,
  useDeleteAttendanceGroupSubLeaders,
} from "@/hooks/attendance-sub_leader.hooks";
import {
  useCreateAttendanceLocation,
  useDeleteAttendanceLocation,
  useUpdateAttendanceLocation,
} from "@/hooks/attendance-location.hooks";

type FormType = Pick<
  AttGroup,
  "name" | "bind_employees" | "leaders" | "locations" | "sub_leaders"
>;
export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);
const { confirm } = Modal;

const DetailbyId: React.FC<{
  dashItems: DashItems;
}> = ({ dashItems }) => {
  //router
  const router: any = useRouter();
  //state
  const [isMapOpen, setIsMapOpen] = useState(false); // 地图弹窗
  const [mapDetailOpen, setMapDetailOpen] = useState(false);
  const [dataSource, setDataSource] = useState<any>({});
  const [detail, setDetail] = useState<any>();
  const [initalDepartments, setInitalDepartments] = useState<any>([]);
  //form
  const [form] = Form.useForm<FormType>();

  const {
    attendnceGroupByIdData,
    attendnceGroupByIdLoading,
    attendnceGroupByIdRefetch,
  } = useAttendnceGroupById(router?.query?.id);
  const {
    updateAttendanceGroup,
    updateAttendanceGroupLoading,
    updateAttendanceGroupError,
  } = useUpdateAttendanceGroup();

  //更新考勤地点
  const { updateAttendanceLocation } = useUpdateAttendanceLocation();
  // 添加考勤地点
  const { createAttendanceLocation } = useCreateAttendanceLocation();
  // 删除考勤地点
  const { deleteAttendanceLocation } = useDeleteAttendanceLocation();

  //删除考勤子负责人
  const { deleteAttendanceGroupSubLeaders } =
    useDeleteAttendanceGroupSubLeaders();
  // 添加考勤子负责人
  const { createAttendanceGroupSubLeaders } =
    useCreateAttendanceGroupSubLeaders();
  //删除考勤主负责人
  const { deleteAttendanceGroupLeaders } = useDeleteAttendanceGroupLeaders();
  // 添加考勤主负责人
  const { createAttendanceGroupLeaders } = useCreateAttendanceGroupLeaders();

  // 更新打卡部门
  const { updateDepartment } = useUpdateDepartment();

  useEffect(() => {
    if (attendnceGroupByIdData) {
      const {
        name,
        attendance_locations,
        attendance_group_leaders,
        attendance_group_subleaders,
        departments,
      } = attendnceGroupByIdData;
      const bind_employees = mapLabelValue(departments);
      const newData: any = {
        name,
        locations: attendance_locations,
        bind_employees,
        leaders: mapLabelValue(
          attendance_group_leaders.map((item) => ({ ...item.employee })),
          "avatar"
        ),
        sub_leaders: mapLabelValue(
          attendance_group_subleaders.map((item) => ({ ...item.employee })),
          "avatar"
        ),
      };
      setInitalDepartments(
        bind_employees
          ?.filter((one: any) => one.label.__typename === "departments")
          ?.map((item: any) => item.value)
      );
      form.setFieldsValue(newData);
    }
  }, [attendnceGroupByIdData]);

  const onAdd = (value: any) => {
    let ls = form.getFieldValue("locations");
    form.setFieldValue("locations", ls ? [...ls, value] : [value]);
    setIsMapOpen(false);
  };
  const onDetail = (index: number) => {
    setDetail(form.getFieldValue("locations")[index]);
    setMapDetailOpen(true);
  };
  const onDel = (index: number) => {
    let arr = form.getFieldValue("locations");
    Modal.confirm({
      content: (
        <div className="tw-flex tw-items-start">
          <ExclamationCircleOutlined className="tw-text-[#ff7d00] tw-text-lg tw-mr-2" />
          <p>删除后无法恢复，确认删除？</p>
        </div>
      ),
      okText: "删除",
      okButtonProps: { type: "primary", danger: true },
      icon: null,
      centered: true,
      onOk: async () => {
        try {
          if (arr[index].id) {
            await deleteAttendanceLocation(arr[index].id);
            attendnceGroupByIdRefetch(router?.query?.id);
          } else {
            arr.splice(index, 1);
            form.setFieldValue("locations", arr);
          }
          message.success("删除成功");
        } catch (error) {
          message.error("删除失败");
        }
      },
      onCancel() {
        message.info("取消删除");
      },
    });
  };

  // 保存考勤组的确认
  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      const { name, leaders, sub_leaders, bind_employees, locations }: any =
        values;
      Object.keys({ ...dataSource, locations }).map(async (item) => {
        if (item === "leaders") {
          await deleteAttendanceGroupLeaders({
            attendance_group_id: {
              _eq: router?.query?.id,
            },
          });
          if (Boolean(leaders.length)) {
            await createAttendanceGroupLeaders(
              leaders.map((item: any) => ({
                attendance_group_id: router?.query?.id,
                employee_id: item.value,
              }))
            );
          }
        } else if (item === "sub_leaders") {
          await deleteAttendanceGroupSubLeaders({
            attendance_group_id: {
              _eq: router?.query?.id,
            },
          });

          if (Boolean(sub_leaders.length)) {
            await createAttendanceGroupSubLeaders(
              sub_leaders.map((item: any) => ({
                attendance_group_id: router?.query?.id,
                employee_id: item.value,
              }))
            );
          }
        } else if (item === "locations") {
          const insetLocations = locations
            .filter((one: any) => !one.id)
            .map((item: any) => {
              return {
                id: nanoid(),
                name: item.address,
                address: item.address,
                latitude: item.latitude,
                longitude: item.longitude,
                gps_range: item.gps_range,
                attendance_group_id: router?.query?.id,
              };
            });
          const updateLocations = locations
            .filter((one: any) => one.id)
            .map((item: any) => {
              return {
                where: {
                  id: {
                    _eq: item.id,
                  },
                },
                _set: {
                  address: item.address,
                  name: item.address,
                  latitude: item.latitude,
                  longitude: item.longitude,
                  gps_range: item.gps_range,
                },
              };
            });
          if (Boolean(updateLocations.length)) {
            await updateAttendanceLocation(updateLocations);
          }
          if (Boolean(insetLocations.length)) {
            await createAttendanceLocation(insetLocations);
          }
        }
      });

      const departmemntIds = bind_employees
        ?.filter((one: any) => one.label.__typename === "departments")
        ?.map((item: any) => item.value);

      const noDepartmemntIds = initalDepartments.filter(
        (one: any) => !departmemntIds.includes(one)
      );
      await updateAttendanceGroup(router?.query?.id, { name });
      if (!updateAttendanceGroupError) {
        // 先把之前考勤部门关联的考勤组删除掉
        await updateDepartment(noDepartmemntIds, {
          attendance_group_id: null,
        });
        // 关联考勤组 - 需要考勤部门
        await updateDepartment(departmemntIds, {
          attendance_group_id: router?.query?.id,
        });
      }
      message.success("修改成功");
      router.push("/dashboard/attendance/group/list");
    } catch {
      message.error("修改失败");
    }
  };

  return (
    <div className="tw-text-base tw-text-black tw-h-screen">
      <Spin
        spinning={attendnceGroupByIdLoading || updateAttendanceGroupLoading}
        wrapperClassName="tw-h-full tw-min-w-[840px] tw-bg-[#f2f3f5] tw-box-border tw-flex tw-min-h-0 tw-flex-col"
      >
        <SinglePageHeader
          title={attendnceGroupByIdData?.name}
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
          <main className="tw-flex tw-flex-col tw-min-w-0 tw-p-5 tw-pt-0 tw-mt-5 tw-overflow-y-auto">
            <Form
              className="w-min-w-[984px]"
              form={form}
              onValuesChange={(changeValue, allValues) => {
                setDataSource({
                  ...dataSource,
                  ...changeValue,
                });
              }}
              layout="vertical"
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
                              >
                                <Select
                                  style={{ width: 120 }}
                                  options={gpsRangeOptions}
                                />
                              </Form.Item>
                            </Col>
                            <Col span={5}>
                              <Button
                                style={{ padding: 0 }}
                                type="link"
                                onClick={() => onDetail(field.name)}
                              >
                                详情
                              </Button>
                              <Button
                                type="link"
                                onClick={() => onDel(field.name)}
                              >
                                删除
                              </Button>
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
                  保存
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
        {isMapOpen && (
          <ModalMap onCancel={() => setIsMapOpen(false)} onFinish={onAdd} />
        )}
        {mapDetailOpen && (
          <MapDetail onCancel={() => setMapDetailOpen(false)} detail={detail} />
        )}
      </Spin>
    </div>
  );
};

export default DetailbyId;
