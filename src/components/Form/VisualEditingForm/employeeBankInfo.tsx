import { Form, Input } from "antd";

const EmployeeBankInfo: React.FC<{
  form: any;
}> = ({ form }) => {
  return (
    <Form className="tw-p-2" form={form} layout="vertical">
      <Form.Item label="开户行" name="bank_name">
        <Input />
      </Form.Item>
      <Form.Item
        label="银行卡号"
        name="bank_account_number"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default EmployeeBankInfo;
