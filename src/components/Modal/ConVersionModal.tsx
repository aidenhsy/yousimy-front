import { useModalStore } from "@/store/modalStore";
import { DatePicker, Form, Modal, message } from "antd";
import { useUpdateEmployee } from "@/hooks/employees.hooks";
import dayjs from "dayjs";

interface ConVersionModalModalType {
  open: boolean;
  refetch: () => void;
}

const ConVersionModal: React.FC<ConVersionModalModalType> = ({
  open,
  refetch,
}) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const record: any = useModalStore(
    (state) => state.modals.conversionModal.currentEmployee
  );

  const [form] = Form.useForm();
  const { updateEmployee, updateEmployee_error } = useUpdateEmployee();

  return (
    <Modal
      title="调整转正日期"
      width={600}
      open={open}
      onCancel={() => {
        form.resetFields();
        closeModal("conversionModal");
      }}
      onOk={async () => {
        try {
          const values = await form.validateFields();
          if (record?.id) {
            await updateEmployee(record.id, {
              actual_conversion_time: dayjs(
                values?.actual_conversion_time
              ).format("YYYY-MM-DD"),
            });
            if (!updateEmployee_error) {
              message.success("调整转正日期成功");
              refetch();
              closeModal("conversionModal");
            }
          }
        } catch (error) {
          console.error("调整转正日期失败:", error);
        }
      }}
    >
      <Form style={{ padding: 20 }} form={form} layout="vertical">
        <Form.Item
          label="转正日期"
          name="actual_conversion_time"
          rules={[{ required: true, message: "转正日期不能为空" }]}
        >
          <DatePicker allowClear className="tw-w-full" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ConVersionModal;
