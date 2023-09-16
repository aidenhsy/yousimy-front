import { DatePicker, Form, Input, Select } from "antd";
import {
  EthnicityMap,
  GenderMap,
  HukouTypeMap,
  MartialStatusMap,
  NativeRegionMap,
} from "@/lib/mapping";

const EmployeePersonalInfo: React.FC<{
  form: any;
}> = ({ form }) => {
  return (
    <Form className="tw-p-2" form={form} layout="vertical">
      <Form.Item label="姓名" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="手机号码" name="mobile" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="性别" name="gender_id">
        <Select
          allowClear
          options={Object.keys(GenderMap).map((item) => {
            return {
              label: GenderMap[item],
              value: Number(item),
            };
          })}
        />
      </Form.Item>
      <Form.Item label="出生日期" name="birthday">
        <DatePicker allowClear className="tw-w-full" />
      </Form.Item>
      <Form.Item label="身份证号" name="id_number" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="籍贯" name="native_region">
        <Select
          allowClear
          options={Object.keys(NativeRegionMap).map((item) => {
            return {
              label: NativeRegionMap[item],
              value: item,
            };
          })}
        />
      </Form.Item>
      <Form.Item label="民族" name="ethnicity">
        <Select
          allowClear
          options={Object.keys(EthnicityMap).map((item) => {
            return {
              label: EthnicityMap[item],
              value: Number(item),
            };
          })}
        />
      </Form.Item>
      <Form.Item label="婚姻状况" name="marital_status">
        <Select
          allowClear
          options={Object.keys(MartialStatusMap).map((item) => {
            return {
              label: MartialStatusMap[item],
              value: Number(item),
            };
          })}
        />
      </Form.Item>
      <Form.Item label="户口类型" name="hukou_type">
        <Select
          allowClear
          options={Object.keys(HukouTypeMap).map((item) => {
            return {
              label: HukouTypeMap[item],
              value: Number(item),
            };
          })}
        />
      </Form.Item>
      <Form.Item label="户口所在地" name="hukou_location">
        <Input />
      </Form.Item>
      <Form.Item label="现居住地址" name="family_address">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default EmployeePersonalInfo;
