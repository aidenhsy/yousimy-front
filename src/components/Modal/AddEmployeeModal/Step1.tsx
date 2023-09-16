import Manager from "@/components/Select/Manager";
import { useCreateEmployee, useEmployees } from "@/hooks/employees.hooks";
import { useStoreDepartmentsTree } from "@/hooks/store-departments-tree.hooks";
import { useStoreDepartments } from "@/hooks/store.hooks";
import { useModalStore } from "@/store/modalStore";
import { Button, Form, Input, Select, TreeSelect, message } from "antd";
import { useRouter } from "next/router";
import React from "react";

interface Step1Props {
  next: () => void;
  clearCurrent: () => void;
}

const Step1: React.FC<Step1Props> = ({ next, clearCurrent }) => {
  const [form] = Form.useForm();
  const { createEmployee, createEmployee_error } = useCreateEmployee();
  const { employeesRefetch } = useEmployees(0, 0);
  // 门店部门
  const { storeDepartmentsTreeData, storeDepartmentsTreeLoading } =
    useStoreDepartmentsTree();
  const router = useRouter();

  const { closeModal, setEmployee } = useModalStore((state) => ({
    closeModal: state.closeModal,
    setEmployee: state.setEmployee,
  }));

  const createNewEmployee = async () => {
    try {
      const values = await form.validateFields();
      const { mobile } = values;
      if (!/^1[3-9]\d{9}$/.test(mobile)) {
        return message.error("手机号格式不正确");
      }
      const { data } = await createEmployee({
        ...values,
        mobile: `+86 ${mobile}`,
        status: 7,
      });
      const newEmployee = data?.insert_employees?.returning;
      setEmployee({
        id: newEmployee![0].id,
        name: newEmployee![0].name,
        mobile: newEmployee![0].mobile,
        department: newEmployee![0].department,
      });
      if (!createEmployee_error) {
        next();
      }
    } catch (error: any) {
      if (error?.message?.includes("unique_mobile27")) {
        const values = await form.validateFields();
        const { mobile } = values;
        const refetchData = await employeesRefetch({
          limit: 1,
          offset: 0,
          where: {
            mobile: {
              _eq: `+86 ${mobile}`,
            },
          },
        });
        message.error({
          duration: 3,
          content: (
            <div className="tw-flex tw-flex-col tw-space-y-5 tw-px-10 tw-py-2">
              <span>该手机号以存在</span>
              <Button
                onClick={() =>
                  router.push(`/employee/${refetchData.data.employees[0].id}`)
                }
              >
                查看人员信息
              </Button>
            </div>
          ),
        });
      } else {
        message.error("添加人员失败");
      }
    }
  };
  return (
    <>
      <Form style={{ padding: 20 }} form={form} layout="vertical">
        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: "姓名不能为空" }]}
        >
          <Input placeholder="请输入名字" />
        </Form.Item>
        <Form.Item
          label="手机号码"
          name="mobile"
          rules={[{ required: true, message: "姓名不能为空" }]}
        >
          <Input placeholder="请输入名字" />
        </Form.Item>
        <Form.Item
          label="直属上级"
          name="manager_id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Manager />
        </Form.Item>
        <Form.Item
          label="部门"
          name="department_id"
          rules={[
            { required: true, message: "部门不能为空" },
            {
              pattern: /^od-/,
              message: "选项不是部门，请重选",
            },
          ]}
        >
          {/* 需要选择门店相关的子部门 */}
          <TreeSelect
            placeholder="请选择部门"
            loading={storeDepartmentsTreeLoading}
            treeData={storeDepartmentsTreeData?.storeDepartments as []}
          />
        </Form.Item>
      </Form>
      <Button
        className="tw-ml-[20px]"
        onClick={() => {
          clearCurrent();
          closeModal("addEmployeeModal");
        }}
      >
        取消
      </Button>
      <Button
        type="primary"
        className="tw-ml-[10px]"
        onClick={createNewEmployee}
      >
        下一步
      </Button>
    </>
  );
};

export default Step1;
