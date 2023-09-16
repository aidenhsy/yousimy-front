import { useEmployeeByPkAttendances } from "@/hooks/employees.hooks";
import { Table } from "antd";
import React, { useEffect, useMemo } from "react";
import MonthlyAttendancesColumns from "./columns/MonthlyAttendancesColumns";
import { useModalStore } from "@/store/modalStore";

interface EmployeeMonthlyAttendanceTableProps {
  employee_id: string;
  month: string | null;
  onRow?: (record: any) => React.HTMLAttributes<HTMLElement>;
}

const EmployeeMonthlyAttendanceTable: React.FC<
  EmployeeMonthlyAttendanceTableProps
> = ({ employee_id, month, onRow }) => {
  const {
    employeeByPkAttendancesData,
    employeeByPkAttendancesLoading,
    employeeByPkAttendancesRefetch,
  } = useEmployeeByPkAttendances(employee_id, { date_yyyy_mm: { _eq: month } });
  const employeeAttendanceIsOpen = useModalStore(
    (state) => state.modals.employeeAttendanceModal.isOpen
  );

  useMemo(() => {
    if (!employeeAttendanceIsOpen) {
      employeeByPkAttendancesRefetch({
        id: employee_id,
        where: { date_yyyy_mm: { _eq: month } },
      });
    }
  }, [employeeAttendanceIsOpen]);

  return (
    <Table
      rowKey="id"
      rowClassName="hover:tw-cursor-pointer"
      columns={MonthlyAttendancesColumns()}
      loading={employeeByPkAttendancesLoading}
      dataSource={employeeByPkAttendancesData?.employees_by_pk?.attendances}
      onRow={onRow}
    />
  );
};

export default EmployeeMonthlyAttendanceTable;
