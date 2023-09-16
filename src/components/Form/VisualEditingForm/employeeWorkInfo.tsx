import Manager from "@/components/Select/Manager";
import {
  ApplicationStatusMap,
  EmployeeTypeMap,
  SalaryTypeIdMap,
} from "@/lib/mapping";
import { DatePicker, Form, Input, Select, TreeSelect } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { SHOW_PARENT } from "rc-tree-select";

const EmployeeWorkInfo: React.FC<{
  form: any;
}> = ({ form }) => {
  const [departmentTree, setDepartmentTree] = useState<any>([]);

  // 获取部门
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACK_SERVER}/departments`)
      .then((res) => {
        setDepartmentTree([res.data]);
      });
  }, []);

  return (
    <Form className="tw-p-2" form={form} layout="vertical">
      <Form.Item
        label="人员类型"
        name="employee_type"
        rules={[{ required: true }]}
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
      <Form.Item label="部门" name="department_id" rules={[{ required: true }]}>
        <TreeSelect
          allowClear
          showSearch
          filterTreeNode
          treeNodeFilterProp="name"
          treeData={departmentTree}
          showCheckedStrategy={SHOW_PARENT}
          fieldNames={{
            value: "id",
            label: "name",
          }}
          className="tw-w-full"
        />
      </Form.Item>
      <Form.Item label="职务" name="job_title">
        <Input allowClear />
      </Form.Item>
      <Form.Item label="薪资类型" name="salary_type_id">
        <Select
          allowClear
          options={Object.entries(SalaryTypeIdMap).map(([value, label]) => {
            return {
              label,
              value,
            };
          })}
        />
      </Form.Item>
      <Form.Item label="基本工资" name="basic_salary">
        <Input />
      </Form.Item>
      <Form.Item label="月薪固定额" name="basic_salary_monthly">
        <Input />
      </Form.Item>
      <Form.Item label="工龄" name="work_age_type">
        <Select
          allowClear
          options={[
            {
              label: "无工龄",
              value: "无工龄",
            },
            {
              label: "月计工龄经理副厨级",
              value: "月计工龄经理副厨级",
            },
            {
              label: "月计工龄管理层级",
              value: "月计工龄管理层级",
            },
            {
              label: "月计工龄职能",
              value: "月计工龄职能",
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="直属上级" name="manager" rules={[{ required: true }]}>
        <Manager />
      </Form.Item>
      <Form.Item label="入职日期" name="hire_date" rules={[{ required: true }]}>
        <DatePicker allowClear className="tw-w-full" />
      </Form.Item>
      <Form.Item label="转正状态" name="application_status">
        <Select
          allowClear
          options={Object.keys(ApplicationStatusMap).map((item) => {
            return {
              label: ApplicationStatusMap[item],
              value: Number(item),
            };
          })}
        />
      </Form.Item>
    </Form>
  );
};

export default EmployeeWorkInfo;
