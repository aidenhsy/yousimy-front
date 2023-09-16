import { useCreateLeaveTypes } from "@/hooks/leave_types.hooks";
import { useModalStore } from "@/store/modalStore";
import { Form, Input, Modal } from "antd";
import { nanoid } from "nanoid";

const InsertLeaveTypes: React.FC<{
  open: boolean;
  refetch: () => void;
}> = ({ open, refetch }) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const [form] = Form.useForm();
  const { createLeaveTypes } = useCreateLeaveTypes();

  return (
    <Modal
      title="添加假期类型"
      open={open}
      width={600}
      onCancel={() => closeModal("insertLeaveTypes")}
      onOk={async () => {
        const values = await form.validateFields();
        await createLeaveTypes({
          id: nanoid(),
          name: values?.name,
        });
        refetch();
        closeModal("insertLeaveTypes");
      }}
    >
      <Form layout="vertical" form={form}>
        <Form.Item required label="假期类型名字" name="name">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default InsertLeaveTypes;
