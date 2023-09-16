import FormModal from "@/components/Modal/FormModal";
import { Form, Input, Select } from "antd";
interface EditModalProps {
  open: boolean;
  action: string;
  onCancel?: () => void;
  onOk?: () => void;
}
interface FormType {
  name: string;
  area: string;
}
export default function EditModal({
  open,
  action,
  onCancel,
  onOk,
}: EditModalProps) {
  const [form] = Form.useForm<FormType>();
  const onFinish = (data: FormType) => {
    onOk?.();
  };
  return (
    <FormModal
      form={form}
      loading={false}
      title={action === "add" ? "新建节假日" : "编辑节假日"}
      open={open}
      bodyStyle={{ paddingRight: "25px" }}
      onFinish={onFinish}
      onCancel={() => onCancel?.()}
    >
      <Form.Item
        name="gender"
        label="节假日名称"
        rules={[{ required: true, message: "请输入${label}" }]}
      >
        <Input allowClear />
      </Form.Item>
      <Form.Item
        name="gender"
        label="国家/地区"
        rules={[{ required: true, message: "请输入${label}" }]}
      >
        <Select placeholder="请选择" allowClear>
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
          <Select.Option value="other">other</Select.Option>
        </Select>
      </Form.Item>
    </FormModal>
  );
}
