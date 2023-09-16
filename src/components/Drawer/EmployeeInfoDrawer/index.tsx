import { useEmployeesByPk } from "@/hooks/employees.hooks";
import { useDrawerStore } from "@/store/drawerStore";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Drawer, Layout, Tabs } from "antd";

import React from "react";
import EmployeeInfoDrawerTitle from "./EmployeeInfoDrawerTitle";
import { Employees } from "@/graphql/__generated__/graphql";
import type { TabsProps } from "antd";
import AttachmentsList from "./AttachmentsList";
import { Header } from "antd/es/layout/layout";
import VisualEditingForm from "@/components/Form/VisualEditingForm";

interface EmployeeInfoDrawerType {
  open: boolean;
}

const EmployeeInfoDrawer: React.FC<EmployeeInfoDrawerType> = ({ open }) => {
  const { closeDrawer, currentEmployee } = useDrawerStore((state) => ({
    closeDrawer: state.closeDrawer,
    currentEmployee: state.drawers.employeeInfoDrawer.currentEmployee,
  }));
  const { employeesByPkData, employeesByPkRefetch } = useEmployeesByPk(
    currentEmployee?.id
  );
  if (!employeesByPkData) {
    return null;
  }

  const {
    name,
    status,
    department_id,
    employee_type,
    job_title,
    hire_date,
    salary_type_id,
    basic_salary,
    basic_salary_monthly,
    application_status,
    work_age_type,
    manager_id,
    marital_status,
    mobile,
    hukou_type,
    hukou_location,
    gender_id,
    native_region,
    family_address,
    birthday,
    ethnicity,
    bank_name,
    bank_account_number,
    primary_emergency_contact,
    id_number,
  } = employeesByPkData as Employees;
  //工作基本信息
  const workInfoDataSource = {
    employee_type,
    status,
    department_id,
    job_title,
    hire_date,
    salary_type_id,
    basic_salary,
    basic_salary_monthly,
    application_status,
    work_age_type,
    manager: manager_id,
  };

  //个人信息
  const personalInfoDataSource = {
    name,
    mobile,
    hukou_type,
    hukou_location,
    family_address,
    birthday,
    gender_id,
    native_region: native_region?.iso_code,
    ethnicity,
    marital_status,
    id_number,
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `基本信息`,
      children: (
        <VisualEditingForm
          employeeInfo={employeesByPkData as Employees}
          refetch={employeesByPkRefetch}
          veFormAry={[
            {
              key: "workInfo",
              title: "工作信息",
              dataSource: workInfoDataSource,
            },
            {
              key: "personalInfo",
              title: "个人信息",
              dataSource: personalInfoDataSource,
            },
            //银行卡信息
            {
              key: "bankInfo",
              title: "银行卡信息",
              dataSource: {
                bank_name,
                bank_account_number,
              },
            },
            //紧急联系人信息
            {
              key: "emergencyInfo",
              title: "紧急联系人",
              dataSource: {
                name: primary_emergency_contact?.name,
                relationship: primary_emergency_contact?.relationship,
                mobile: primary_emergency_contact?.mobile,
              },
            },
          ]}
        />
      ),
    },
    {
      key: "2",
      label: `资料附件`,
      children: (
        <AttachmentsList
          employee={employeesByPkData as Employees}
          refetch={employeesByPkRefetch}
        />
      ),
    },
  ];
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Drawer
      open={open}
      closeIcon={false}
      size="large"
      headerStyle={{
        border: 0,
        margin: 0,
        paddingLeft: 0,
        paddingTop: 42,
        marginBottom: 0,
      }}
      title={
        <EmployeeInfoDrawerTitle
          employeesByPkData={employeesByPkData as Employees}
        />
      }
      onClose={() => {
        closeDrawer("employeeInfoDrawer");
      }}
    >
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        className="sticky-tabs"
      />
    </Drawer>
  );
};

export default EmployeeInfoDrawer;
