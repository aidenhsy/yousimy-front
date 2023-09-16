import React from "react";
import { Button, DatePicker, Drawer, Form, Select, TreeSelect } from "antd";
import dayjs from "dayjs";
import { Employees_Bool_Exp } from "@/graphql/__generated__/graphql";
import { useDepartmentTree } from "@/hooks/departmentTree.hook";
import { EmployeeTypeMap, StatusMap } from "@/lib/mapping";
import { useDrawerStore } from "@/store/drawerStore";

interface RosterFilterDrawerType {
  open: boolean;
  setFilter: (
    updateFunction: (prevFilter: Employees_Bool_Exp) => Employees_Bool_Exp
  ) => void;
}

const RosterFilterDrawer: React.FC<RosterFilterDrawerType> = ({
  open,
  setFilter,
}) => {
  const closeDrawer = useDrawerStore((state) => state.closeDrawer);
  const { departmentTreeData } = useDepartmentTree();

  const [form] = Form.useForm();

  const handleClick = async () => {
    const values = await form.getFieldsValue();
    const filterData: any = [];
    Object.entries(values)
      .filter(([label, value]: any) => value && Boolean(value.length))
      .map(([label, value]: any) => {
        if (label !== "hire_Date") {
          filterData.push({
            [label]: {
              _in: value,
            },
          });
        } else {
          filterData.push({
            [label]: {
              _gte: dayjs(value[0]).format("YYYY-MM-DD"),
              _lte: dayjs(value[1]).format("YYYY-MM-DD"),
            },
          });
        }
      });
    setFilter((prevFilter) => ({
      ...prevFilter,
      _and: filterData,
    }));
    form.resetFields();
    closeDrawer("filterRosterDrawer");
  };
  return (
    <Drawer
      keyboard={false}
      title="筛选项"
      maskStyle={{ opacity: 0 }}
      footer={
        <div className="tw-flex tw-justify-end tw-space-x-4 tw-py-2">
          <Button
            onClick={() => {
              form.resetFields();
              closeDrawer("filterRosterDrawer");
            }}
          >
            取消
          </Button>
          <Button type="primary" onClick={handleClick}>
            确定
          </Button>
        </div>
      }
      open={open}
      onClose={() => closeDrawer("filterRosterDrawer")}
    >
      <Form layout="vertical" form={form}>
        <Form.Item label="人员状态" name="status">
          <Select
            options={Object.entries(StatusMap).map(([value, label]) => ({
              label,
              value,
            }))}
            mode="multiple"
            style={{ width: "100%", marginTop: "10px" }}
          />
        </Form.Item>
        <Form.Item label="人员类型" name="employee_type">
          <Select
            options={Object.entries(EmployeeTypeMap).map(([value, label]) => ({
              label,
              value,
            }))}
            mode="multiple"
            style={{ width: "100%", marginTop: "10px" }}
          />
        </Form.Item>
        <Form.Item label="部门" name="department_id">
          <TreeSelect
            allowClear
            multiple
            showSearch
            filterTreeNode
            treeCheckable
            treeNodeFilterProp="name"
            treeData={departmentTreeData?.children}
            fieldNames={{
              value: "id",
              label: "name",
            }}
            className="tw-w-full"
          />
        </Form.Item>
        <Form.Item label="入职日期" name="hire_date">
          <DatePicker.RangePicker
            style={{ width: "100%", marginTop: "10px" }}
          />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default RosterFilterDrawer;
