import Manager from "@/components/Select/Manager";
import {
  ApplicationMap,
  DepartureTypeMap,
  EmployeeTypeMap,
  GenderMap,
} from "@/lib/mapping";
import { DatePicker, Form, Select, TreeSelect } from "antd";
import { SHOW_PARENT } from "rc-tree-select";

const FilterFormSwitch = ({
  field,
  label,
  name,
  dataSource,
}: {
  field: string;
  label?: any;
  name?: any;
  dataSource?: any;
}) => {
  const month = new Array(12).fill("").map((item, index) => {
    return { label: index + 1 + "月", value: index + 1 + "" };
  });
  switch (field) {
    case "employee_type":
      return (
        <Form.Item label="人员类型" name="employee_type">
          <Select
            mode="multiple"
            allowClear
            options={Object.keys(EmployeeTypeMap).map((item) => {
              return {
                label: EmployeeTypeMap[item],
                value: Number(item),
              };
            })}
          />
        </Form.Item>
      );
    case "department_id":
      return (
        <Form.Item label="部门" name="department_id">
          <TreeSelect
            allowClear
            showSearch
            filterTreeNode
            treeNodeFilterProp="name"
            treeData={dataSource}
            treeCheckable
            showCheckedStrategy={SHOW_PARENT}
            fieldNames={{
              value: "id",
              label: "name",
            }}
            className="tw-w-full"
          />
        </Form.Item>
      );
    case "job_title":
      return (
        <Form.Item label="职务" name="job_title">
          <Select mode="multiple" allowClear />
        </Form.Item>
      );
    case "dates":
      return (
        <Form.Item label={label} name={name}>
          <DatePicker.RangePicker allowClear className="tw-w-full" />
        </Form.Item>
      );
    case "manager":
      return (
        <Form.Item label="直属上级" name="manager">
          <Manager />
        </Form.Item>
      );
    case "gender_id":
      return (
        <Form.Item label="性别" name="gender_id">
          <Select
            mode="multiple"
            allowClear
            options={Object.keys(GenderMap).map((item) => {
              return {
                label: GenderMap[item],
                value: Number(item),
              };
            })}
          />
        </Form.Item>
      );
    case "application":
      return (
        <Form.Item label="转正申请" name="application">
          <Select
            mode="multiple"
            allowClear
            options={Object.keys(ApplicationMap).map((item) => {
              return {
                label: ApplicationMap[item],
                value: Number(item),
              };
            })}
          />
        </Form.Item>
      );
    case "departure_type":
      return (
        <Form.Item label="离职类型" name="departure_type">
          <Select
            mode="multiple"
            allowClear
            options={Object.keys(DepartureTypeMap).map((item) => {
              return {
                label: DepartureTypeMap[item],
                value: Number(item),
              };
            })}
          />
        </Form.Item>
      );
    case "birthday_months":
      return (
        <Form.Item label="生日月份" name="birthday_months">
          <Select mode="multiple" allowClear options={month} />
        </Form.Item>
      );
    case "hire_months":
      return (
        <Form.Item label="入职月份" name="hire_months">
          <Select mode="multiple" allowClear options={month} />
        </Form.Item>
      );
    default:
      return null;
  }
};

export default FilterFormSwitch;
