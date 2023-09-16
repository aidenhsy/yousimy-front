import { useDeleteEmployee, useUpdateEmployee } from "@/hooks/employees.hooks";
import { useRolesList } from "@/hooks/role.hooks";
import { useStoreDepartments } from "@/hooks/store.hooks";
import { useRequest } from "@/lib/hooks/restful/axios.hook";
import {
  EmployeeTypeMap,
  MedicalInsuranceMap,
  UserAttachmentMap,
} from "@/lib/mapping";
import { useModalStore } from "@/store/modalStore";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Upload,
  UploadFile,
  message,
} from "antd";
import { DefaultOptionType } from "antd/es/cascader";
import { RcFile } from "antd/es/upload";
import axios from "axios";
import dayjs from "dayjs";
import React, { useMemo, useState } from "react";

interface Step2Props {
  clearCurrent: () => void;
  userId: string;
  feishuOption: any;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

// 填写基本信息
const Step2: React.FC<Step2Props> = ({
  userId,
  clearCurrent,
  feishuOption,
}) => {
  const { employeeId, employeeInfo, closeModal }: any = useModalStore(
    (state) => ({
      employeeId: state.modals.addEmployeeModal.employeeInfo?.id,
      employeeInfo: {
        name: state.modals.addEmployeeModal.employeeInfo?.name,
        mobile: state.modals.addEmployeeModal.employeeInfo?.mobile,
        department: state.modals.addEmployeeModal.employeeInfo?.department,
      },
      closeModal: state.closeModal,
    })
  );

  const [fileCode, setFileCode] = useState<any>({});
  const [fileList, setFileList] = useState<any>({
    id_photo_em_side: [],
    id_photo_po_side: [],
  });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [loading, setLoading] = useState(false);

  // 删除人员
  const { deleteEmployee } = useDeleteEmployee();
  // 更新人员信息
  const { updateEmployee, updateEmployee_error } = useUpdateEmployee();

  const [form] = Form.useForm();
  const { loadData } = useRequest();

  const customRequest = async (options: any, kind: string) => {
    const { file } = options;
    setFileList({
      ...fileList,
      [kind]: [
        {
          uid: kind,
          name: UserAttachmentMap[kind]?.value,
          status: "uploading",
          percent: 50,
        },
      ],
    });
    const { data } = await loadData({
      url: `${process.env.NEXT_PUBLIC_OPEN_URL}/upload-employee-photo`,
      method: "POST",
      params: { id: employeeId, kind },
      data: { image: file },
      headers: { "Content-Type": "multipart/form-data" },
    });
    const imgPath = data?.path;
    if (imgPath) {
      const formData = new FormData();
      formData.append("file", file);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BACK_SERVER}/v2/feishu_upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (data?.data) {
        setFileList({
          ...fileList,
          [kind]: [
            {
              uid: kind,
              name: UserAttachmentMap[kind]?.value,
              status: "done",
              percent: 100,
              url: `${process.env.NEXT_PUBLIC_OSS}/${imgPath}`,
            },
          ],
        });
        setFileCode({
          ...fileCode,
          [kind]: data.data.code,
        });
      }
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      if (
        !/^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}(\d|X)$/.test(
          values.id_number
        )
      ) {
        return message.error("身份证格式不正确");
      }
      const submitDataSource = Object.entries(values).reduce(
        (acc: any, [key, value]) => {
          if (value && value !== "") {
            acc[key] = value;
          }
          return acc;
        },
        {}
      );

      const formData = await feishuOption.map((item: any) => {
        const { custom_id } = item;
        const value = submitDataSource[custom_id] || employeeInfo[custom_id];
        // 图片只要code码
        if (
          custom_id === "id_photo_po_side" ||
          custom_id === "id_photo_em_side"
        ) {
          return {
            ...item,
            value: [fileCode[custom_id]],
          };
        }
        // 下拉多选数据变成数组
        if (
          custom_id === "employee_type" ||
          custom_id === "medical_insurance"
        ) {
          return {
            ...item,
            value: item.option.filter(
              (one: any) => Number(one.onlyValue) === value
            )[0]?.value,
          };
        }
        // 日期转成ISO 8601
        if (custom_id.includes("date")) {
          const date = new Date(value);
          return {
            ...item,
            value: new Date(
              date.getTime() - date.getTimezoneOffset() * 60000
            ).toISOString(),
          };
        }
        if (custom_id === "department") {
          return {
            ...item,
            value: [
              {
                name: employeeInfo[custom_id]?.name,
                open_id: employeeInfo[custom_id]?.id,
              },
            ],
          };
        }

        return {
          ...item,
          value,
        };
      });
      delete submitDataSource.hr_approval;
      delete submitDataSource.id_photo_em_side;
      delete submitDataSource.id_photo_po_side;
      if (employeeId) {
        await updateEmployee(employeeId, {
          ...submitDataSource,
          hire_date: dayjs(submitDataSource?.hire_date).format("YYYY-MM-DD"),
        });
        if (!updateEmployee_error) {
          await axios.post(
            `${process.env.NEXT_PUBLIC_BACK_SERVER}/new-approval-instances`,
            {
              approval_code: "20122797-D0CA-4343-9132-440AF7164FE6", // 审批code
              open_id: userId, // 当前提交审批人
              form: formData, // 表单数据,
              approval: values.hr_approval[1],
            }
          );
          clearCurrent();
          closeModal("addEmployeeModal");
          message.success("发送成功");
        }
      }
    } catch (error) {
      message.error("发送失败");
    } finally {
      setLoading(false);
    }
  };

  // 图片预览
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };
  // 删除图片
  const handleRemove = async (kind: string) => {
    setFileList({
      ...fileList,
      [kind]: undefined,
    });

    setFileCode({
      ...fileCode,
      [kind]: undefined,
    });
  };

  return (
    <>
      <Form style={{ padding: 20 }} form={form} layout="vertical">
        <Form.Item
          label="审批人"
          name="hr_approval"
          rules={[{ required: true, message: "审批人不能为空" }]}
        >
          <Cascader
            options={[
              {
                label: "人事部",
                value: "e0wg2xHIAANiVdLE2PVMF",
                children: [
                  {
                    label: "蔺晗",
                    value: "ou_81340254a0382432251a1c5922272c28",
                  },
                  {
                    label: "王晓濛",
                    value: "ou_b5ae57c76ab3c5bced1b9b525fd59095",
                  },
                ],
              },
            ]}
            placeholder="请选择"
            showSearch={{
              filter: (inputValue: string, path: DefaultOptionType[]) =>
                path.some(
                  (option) =>
                    (option.label as string)
                      .toLowerCase()
                      .indexOf(inputValue.toLowerCase()) > -1
                ),
            }}
          />
        </Form.Item>
        <Form.Item
          label="预计入职日期"
          name="hire_date"
          rules={[{ required: true, message: "预计入职日期不能为空" }]}
        >
          <DatePicker allowClear className="tw-w-full" />
        </Form.Item>
        <Form.Item
          label="人员类型"
          name="employee_type"
          rules={[{ required: true, message: "人员类型不能为空" }]}
        >
          <Select
            allowClear
            options={Object.keys(EmployeeTypeMap).map((item) => {
              return {
                label: EmployeeTypeMap[item],
                value: Number(item),
              };
            })}
          />
        </Form.Item>
        <Form.Item
          label="职位"
          name="job_title"
          rules={[{ required: true, message: "职位不能为空" }]}
        >
          <Input allowClear />
        </Form.Item>

        <Form.Item
          label="是否已参与医疗保险"
          name="medical_insurance"
          rules={[{ required: true, message: "是否已参与医疗保险不能为空" }]}
        >
          <Select
            placeholder="请选择"
            options={Object.keys(MedicalInsuranceMap).map((item) => {
              return {
                label: MedicalInsuranceMap[item],
                value: Number(item),
              };
            })}
          />
        </Form.Item>
        <Form.Item
          label="身份证号"
          name="id_number"
          rules={[{ required: true, message: "身份证号不能为空" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="身份证(人像面)"
          name="id_photo_po_side"
          rules={[{ required: true, message: "请上传身份证(人像面)" }]}
        >
          <Upload
            listType="picture-card"
            customRequest={(options) =>
              customRequest(options, "id_photo_po_side")
            }
            maxCount={1}
            fileList={fileList.id_photo_po_side}
            onDrop={(options) => customRequest(options, "id_photo_po_side")}
            onPreview={handlePreview}
            onRemove={() => handleRemove("id_photo_po_side")}
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>上传</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
          label="身份证(国徽面)"
          name="id_photo_em_side"
          rules={[{ required: true, message: "请上传身份证(国徽面)" }]}
        >
          <Upload
            listType="picture-card"
            customRequest={(options) =>
              customRequest(options, "id_photo_em_side")
            }
            maxCount={1}
            fileList={fileList.id_photo_em_side}
            onDrop={(options) => customRequest(options, "id_photo_em_side")}
            onPreview={handlePreview}
            onRemove={() => handleRemove("id_photo_em_side")}
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>上传</div>
            </div>
          </Upload>
        </Form.Item>
      </Form>
      {/* 取消的话，删除第一步创建的人  */}
      <Button
        className="tw-ml-[20px]"
        onClick={async () => {
          await deleteEmployee(employeeId!);
          clearCurrent();
          closeModal("addEmployeeModal");
        }}
      >
        取消
      </Button>
      <Button
        disabled={!(fileCode.id_photo_po_side && fileCode.id_photo_em_side)}
        className="tw-ml-[10px]"
        type="primary"
        onClick={handleSubmit}
        loading={loading}
      >
        发送飞书审批至人事
      </Button>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default Step2;
