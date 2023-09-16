import React from "react";
import { Button, Drawer, Form, Select, TreeSelect } from "antd";
import { Employees_Bool_Exp } from "@/graphql/__generated__/graphql";
import { useDepartmentTree } from "@/hooks/departmentTree.hook";
import { StatusMap } from "@/lib/mapping";
import { useDrawerStore } from "@/store/drawerStore";

interface HrMonthlySalaryfilterDrawerType {
  open: boolean;
  setFilter: (
    updateFunction: (prevFilter: Employees_Bool_Exp) => Employees_Bool_Exp
  ) => void;
}

const HrMonthlySalaryfilterDrawer: React.FC<
  HrMonthlySalaryfilterDrawerType
> = ({ open, setFilter }) => {
  const closeDrawer = useDrawerStore((state) => state.closeDrawer);
  const { departmentTreeData } = useDepartmentTree();

  const [form] = Form.useForm();

  const handleClick = async () => {
    const values = await form.getFieldsValue();
    const filterData: any = [];
    Object.entries(values)
      .filter(([label, value]: any) => value && Boolean(value.length))
      .map(([label, value]: any) => {
        filterData.push(
          label === "attendance_department_id"
            ? {
                [label]: {
                  _in: value,
                },
              }
            : {
                employee: {
                  [label]: {
                    _in: value,
                  },
                },
              }
        );
      });
    setFilter((prevFilter) => ({
      ...prevFilter,
      _and: filterData,
    }));
    closeDrawer("hrMonthlySalaryfilterDrawer");
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
              closeDrawer("hrMonthlySalaryfilterDrawer");
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
      onClose={() => closeDrawer("hrMonthlySalaryfilterDrawer")}
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
        <Form.Item label="考勤部门" name="attendance_department_id">
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
        <Form.Item label="薪资类型" name="salary_type">
          <Select
            options={[
              {
                label: "时薪",
                value: "时薪",
              },
              {
                label: "日薪",
                value: "日薪",
              },
              {
                label: "月薪",
                value: "月薪",
              },
              {
                label: "兼职日薪",
                value: "兼职日薪",
              },
            ]}
            mode="multiple"
            style={{ width: "100%", marginTop: "10px" }}
          />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default HrMonthlySalaryfilterDrawer;
