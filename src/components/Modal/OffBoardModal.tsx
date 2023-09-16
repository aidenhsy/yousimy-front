import { DepartureTypeMap, UserAttachmentMap } from "@/lib/mapping";
import { useModalStore } from "@/store/modalStore";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Upload,
  message,
} from "antd";
import { DefaultOptionType } from "antd/es/cascader";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { useFeishuOptions } from "@/hooks/feishuSelectOptions.hook";
import { useRolesList } from "@/hooks/role.hooks";
import { useUpdateEmployee } from "@/hooks/employees.hooks";
import { feishuOptions } from "@/lib/tools/feishuOptions";
import { PlusOutlined } from "@ant-design/icons";
import { useRequest } from "@/lib/hooks/restful/axios.hook";
import { RcFile, UploadFile } from "antd/es/upload";

interface OffBoardModalType {
  open: boolean;
  openId: string;
  refetch: () => void;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const OffBoardModal: React.FC<OffBoardModalType> = ({
  open,
  openId,
  refetch,
}) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const record: any = useModalStore(
    (state) => state.modals.offBoardModal.offBoardEmployee
  );
  const [fileCode, setFileCode] = useState<any>({});
  const [fileList, setFileList] = useState<any>({
    resignation_handover: [],
    notice_termination_agreement: [],
    screenshot: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  // hooks
  const [form] = Form.useForm();
  const { loadData } = useRequest();
  const { feishuOptionsData } = useFeishuOptions(
    "9CF7DFD1-3166-4EDF-932F-14408986743C"
  );
  const { updateEmployee, updateEmployee_error } = useUpdateEmployee();

  useEffect(() => {
    if (!record) return;
    form.setFieldsValue({
      name: record.name,
    });
  }, [record]);

  // 自定义上传
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
      params: { id: record.id, kind },
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

  const handleOk = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      const submitDataSource = Object.entries(values).reduce(
        (acc: any, [key, value]) => {
          if (
            typeof value !== "undefined" &&
            value !== "" &&
            key !== "hr_approval"
          ) {
            acc[key] = value;
          }
          return acc;
        },
        {}
      );
      const formData = await feishuOption.map((item: any) => {
        const { custom_id } = item;
        const value = submitDataSource[custom_id];

        // 图片只要code码
        if (
          custom_id === "resignation_handover" ||
          custom_id === "notice_termination_agreement" ||
          custom_id === "screenshot"
        ) {
          return {
            ...item,
            value: fileCode[custom_id] ? [fileCode[custom_id]] : [],
          };
        }
        // 下拉多选数据变成数组
        if (
          custom_id === "departure_type" ||
          custom_id === "is_three_days_leave"
        ) {
          return {
            ...item,
            value: item.option.filter(
              (one: any) => Number(one.onlyValue) === value
            )[0]?.value,
          };
        }
        // 日期转成ISO 8601
        if (custom_id === "actual_overboard_time" || custom_id === "last_day") {
          const date = new Date(value);
          return {
            ...item,
            value: new Date(
              date.getTime() - date.getTimezoneOffset() * 60000
            ).toISOString(),
          };
        }

        if (custom_id === "hire_date") {
          const date = new Date(record.hire_date);
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
                name: record.department.name,
                open_id: record.department.id,
              },
            ],
          };
        }

        return {
          ...item,
          value: value || record[custom_id],
        };
      });

      delete submitDataSource.hr_approval;
      delete submitDataSource.notice_termination_agreement;
      delete submitDataSource.resignation_handover;
      delete submitDataSource.screenshot;
      if (record?.id) {
        await updateEmployee(record.id, {
          ...submitDataSource,
          actual_overboard_time: dayjs(
            submitDataSource.actual_overboard_time
          ).format("YYYY-MM-DD"),
          last_day: dayjs(submitDataSource.last_day).format("YYYY-MM-DD"),
          status: 4,
        });
        if (!updateEmployee_error) {
          await axios.post(
            `${process.env.NEXT_PUBLIC_BACK_SERVER}/new-resign-approval-instances`,
            {
              approval_code: "9CF7DFD1-3166-4EDF-932F-14408986743C", // 审批code
              open_id: openId, // 当前提交审批人
              form: formData, // 表单数据
              approver: values.hr_approval[1],
            }
          );
          message.success("发送成功");
          refetch();
          handleCancel();
          closeModal("offBoardModal");
        }
      }
    } catch (error) {
      message.success("发送失败");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setFileCode({});
    setFileList({
      resignation_handover: [],
      notice_termination_agreement: [],
      screenshot: [],
    });
    closeModal("offBoardModal");
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

  // 获取飞书审批定义
  const feishuOption = useMemo(
    () => feishuOptions(feishuOptionsData),
    [feishuOptionsData]
  );

  return (
    <>
      <Modal
        title="办理离职"
        open={open}
        onCancel={handleCancel}
        footer={[
          <Button onClick={handleCancel}>取消</Button>,
          <Button
            disabled={
              !(
                fileCode.notice_termination_agreement &&
                fileCode.resignation_handover
              )
            }
            type="primary"
            onClick={handleOk}
            loading={loading}
          >
            发送飞书审批至人事
          </Button>,
        ]}
      >
        <Form style={{ padding: 20 }} form={form} layout="vertical">
          {/* 姓名 */}
          <Form.Item label="姓名" name="name">
            <Input placeholder="请输入" disabled />
          </Form.Item>
          {/* 审批人 */}
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
          {/* 离职类型 */}
          <Form.Item
            label="离职类型"
            name="departure_type"
            rules={[{ required: true, message: "离职类型不能为空" }]}
          >
            <Select
              allowClear
              options={Object.keys(DepartureTypeMap).map((item) => {
                return {
                  label: DepartureTypeMap[item],
                  value: Number(item),
                };
              })}
            />
          </Form.Item>
          {/* 离职日期 */}
          <Form.Item
            label="离职日期"
            name="actual_overboard_time"
            rules={[{ required: true, message: "离职日期不能为空" }]}
          >
            <DatePicker allowClear className="tw-w-full" />
          </Form.Item>
          {/* 离职原因 */}
          <Form.Item
            label="离职原因"
            name="overboard_note"
            rules={[{ required: true, message: "离职原因不能为空" }]}
          >
            <Input />
          </Form.Item>
          {/* 是否为三天试岗内离职 */}
          <Form.Item
            label="是否为三天试岗内离职"
            name="is_three_days_leave"
            rules={[
              { required: true, message: "是否为三天试岗内离职不能为空" },
            ]}
          >
            <Select
              allowClear
              options={[
                {
                  label: "是",
                  value: 1,
                },
                {
                  label: "否",
                  value: 0,
                },
              ]}
            />
          </Form.Item>
          {/* 最后工作日 */}
          <Form.Item
            label="最后工作日"
            name="last_day"
            rules={[{ required: true, message: "最后工作日不能为空" }]}
          >
            <DatePicker allowClear className="tw-w-full" />
          </Form.Item>
          {/* 离职交接单 */}
          <Form.Item
            label="离职交接单"
            name="resignation_handover"
            rules={[{ required: true, message: "离职交接单不能为空" }]}
          >
            <Upload
              listType="picture-card"
              customRequest={(options) =>
                customRequest(options, "resignation_handover")
              }
              maxCount={1}
              fileList={fileList.resignation_handover}
              onDrop={(options) =>
                customRequest(options, "resignation_handover")
              }
              onPreview={handlePreview}
              onRemove={() => handleRemove("resignation_handover")}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item
            label="解除协议通知单"
            name="notice_termination_agreement"
            rules={[{ required: true, message: "解除协议通知单不能为空" }]}
          >
            <Upload
              listType="picture-card"
              customRequest={(options) =>
                customRequest(options, "notice_termination_agreement")
              }
              maxCount={1}
              fileList={fileList.notice_termination_agreement}
              onDrop={(options) =>
                customRequest(options, "notice_termination_agreement")
              }
              onPreview={handlePreview}
              onRemove={() => handleRemove("notice_termination_agreement")}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传</div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="代签微信/短信截图" name="screenshot">
            <Upload
              listType="picture-card"
              customRequest={(options) => customRequest(options, "screenshot")}
              maxCount={1}
              fileList={fileList.screenshot}
              onDrop={(options) => customRequest(options, "screenshot")}
              onPreview={handlePreview}
              onRemove={() => handleRemove("screenshot")}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传</div>
              </div>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
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

export default OffBoardModal;
