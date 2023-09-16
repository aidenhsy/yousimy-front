import React from "react";
import { Avatar, Button, Drawer, Spin, Tabs, Tag } from "antd";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import VisualEditingForm from "@/components/Form/VisualEditingForm";
import Attachments from "@/components/Attachments";
import { EmployeeTypeMap, StatusMap } from "@/lib/mapping";
import { useEmployees } from "@/hooks/employees.hooks";
import { useDrawerStore } from "@/store/drawerStore";
import { useRouter } from "next/router";
import { Employees } from "@/graphql/__generated__/graphql";

const EmployeeDetailsDrawer: React.FC<{
  open: boolean;
  id: string;
}> = ({ id, open }) => {
  const { employeesData, employeesLoading, employeesRefetch } = useEmployees(
    0,
    1,
    {
      id: { _eq: id },
    }
  );
  const closeDrawer = useDrawerStore((state) => state.closeDrawer);
  if (!employeesData?.employees[0]) {
    return null;
  }
  const {
    avatar,
    name,
    status,
    department,
    department_id,
    employee_type,
    job_title,
    employee_form_status,
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
    salaryType,
  } = employeesData?.employees[0] as Employees;

  const router = useRouter();
  // 详情头部
  const renderHeader = () => (
    <div className="tw-flex tw-overflow-hidden tw-pr-0">
      <Button
        className="tw-absolute tw-right-7 tw-top-5"
        type="text"
        icon={<CloseOutlined />}
      />
      <div className="tw-flex tw-items-center tw-h-[100px] tw-mt-[10px] tw-pr-[24px]">
        <div className="tw-mr-[24px]">
          <Avatar
            size={100}
            src={avatar || undefined}
            icon={<UserOutlined />}
          />
        </div>
        <div className="tw-flex tw-flex-1 tw-justify-start tw-min-w-[32px] tw-flex-col tw-space-y-1 tw-h-full">
          <span className="tw-text-2xl">{name}</span>
          <div className="tw-flex tw-items-center tw-justify-between tw-text-sm tw-text-gray-400">
            {status && (
              <Tag color={status === 2 ? "green" : "red"}>
                {StatusMap[status]}
              </Tag>
            )}
            <span className="tw-pr-2">{department?.name}</span>
            {employee_form_status && EmployeeTypeMap[employee_form_status]}
          </div>
          <Button onClick={() => router.push(`/employee/${id}`)}>
            查看人员
          </Button>
        </div>
      </div>
    </div>
  );

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

  return (
    <Drawer
      maskStyle={{ opacity: 0 }}
      width={800}
      open={open}
      onClose={() => closeDrawer("employeeDetailsDrawer")}
      closable={false}
      headerStyle={{
        border: 0,
      }}
      title={renderHeader()}
      placement="right"
    >
      <Spin spinning={employeesLoading}>
        <Tabs
          tabBarStyle={{
            marginBottom: 12,
          }}
          items={[
            {
              key: "1",
              label: "基本信息",
              children: (
                <VisualEditingForm
                  employeeInfo={employeesData?.employees[0] as Employees}
                  refetch={employeesRefetch}
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
              label: "资料附件",
              children: <Attachments personId={id} />,
            },
            {
              key: "3",
              label: "假期信息",
              children: <span>{salaryType?.name}</span>,
            },
          ]}
        />
      </Spin>
    </Drawer>
  );
};

export default EmployeeDetailsDrawer;
