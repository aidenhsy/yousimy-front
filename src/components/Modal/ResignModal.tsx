import { useUpdateEmployee } from "@/hooks/employees.hooks";
import { useModalStore } from "@/store/modalStore";
import { DatePicker, Form, Input, Modal, message } from "antd";
import dayjs from "dayjs";
import React, { useMemo } from "react";

interface ResignModalProps {
  open: boolean;
  refetch: () => void;
}

const ResignModal: React.FC<ResignModalProps> = ({ open, refetch }) => {
  const closeModal = useModalStore((state) => state.closeModal);

  const record: any = useModalStore(
    (state) => state.modals.resignModal.currentEmployee
  );
  const [form] = Form.useForm();

  const { updateEmployee, updateEmployee_error } = useUpdateEmployee();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (record?.id) {
        await updateEmployee(record.id, {
          ...values,
          actual_overboard_time: dayjs(values?.actual_overboard_time).format(
            "YYYY-MM-DD"
          ),
        });
        if (!updateEmployee_error) {
          message.success("调整离职信息成功");
          closeModal("resignModal");
          refetch();
        }
      }
    } catch (error) {
      console.error("调整离职信息失败:", error);
    }
  };

  useMemo(() => {
    if (record) {
      form.setFieldsValue({
        name: record.name,
      });
    }
  }, [record]);
  return (
    <Modal
      title="调整离职信息"
      width={600}
      open={open}
      onCancel={() => {
        form.resetFields();
        closeModal("resignModal");
      }}
      onOk={handleOk}
    >
      <Form style={{ padding: 20 }} form={form} layout="vertical">
        <Form.Item label="姓名" name="name">
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="离职日期"
          name="actual_overboard_time"
          rules={[{ required: true, message: "离职日期不能为空" }]}
        >
          <DatePicker allowClear className="tw-w-full" />
        </Form.Item>
        <Form.Item
          label="离职原因"
          name="overboard_note"
          rules={[{ required: true, message: "离职原因不能为空" }]}
        >
          <Input allowClear />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ResignModal;
