import { Form, Input, Select } from "antd";
import { RelationshipMap } from "@/lib/mapping";

const EmployeeEmergencyInfo: React.FC<{
  form: any;
}> = ({ form }) => {
  return (
    <Form className="tw-p-2" form={form} layout="vertical">
      <Form.Item label="姓名" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="关系" name="relationship" rules={[{ required: true }]}>
        <Select
          allowClear
          options={Object.keys(RelationshipMap).map((item) => {
            return {
              label: RelationshipMap[item],
              value: Number(item),
            };
          })}
        />
      </Form.Item>
      <Form.Item label="手机号" name="mobile" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </Form>
  );
};

export default EmployeeEmergencyInfo;
