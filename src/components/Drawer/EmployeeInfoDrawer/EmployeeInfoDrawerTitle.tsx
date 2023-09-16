import { Employees } from "@/graphql/__generated__/graphql";
import { EmployeeTypeMap, StatusMap } from "@/lib/mapping";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider } from "antd";
import router from "next/router";
import React from "react";

interface EmployeeInfoDrawerTitleType {
  employeesByPkData?: Employees;
}

const EmployeeInfoDrawerTitle: React.FC<EmployeeInfoDrawerTitleType> = ({
  employeesByPkData,
}) => {
  return (
    <div className="tw-flex tw-space-x-4">
      {employeesByPkData?.avatar ? (
        <Avatar src={employeesByPkData.avatar} size={100} />
      ) : (
        <Avatar icon={<UserOutlined />} size={100} />
      )}
      <div className="tw-flex tw-flex-col tw-justify-between">
        <span className="tw-text-lg">{employeesByPkData?.name}</span>
        <div className="tw-flex tw-items-center tw-space-x-3">
          <span className="tw-font-normal tw-text-sm tw-text-gray-500">
            {StatusMap[employeesByPkData?.status]}
          </span>
          <Divider type="vertical" />
          <span className="tw-font-normal tw-text-sm tw-text-gray-500">
            {employeesByPkData?.department?.name}
          </span>
          <Divider type="vertical" />
          <span className="tw-font-normal tw-text-sm tw-text-gray-500">
            {EmployeeTypeMap[employeesByPkData?.employee_type]}
          </span>
        </div>
        <div className="tw-flex">
          <Button
            type="link"
            style={{ padding: 0 }}
            onClick={() => router.push(`/employee/${employeesByPkData?.id}`)}
          >
            查看人员
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfoDrawerTitle;
