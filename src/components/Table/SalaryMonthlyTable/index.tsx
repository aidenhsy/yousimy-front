import { Employees_Bool_Exp } from '@/graphql/__generated__/graphql';
import { useEmployeeSalaryMonthly } from '@/hooks/employees.hooks';
import { Table } from 'antd';
import React, { useState } from 'react';
import { useDrawerStore } from '@/store/drawerStore';
import EmployeeAttendanceDrawer from '@/components/Drawer/EmployeeAttendanceDrawer';
import { ColumnsType } from 'antd/es/table';

interface SalaryMonthlyTableProps {
  filter: Employees_Bool_Exp;
  columns: ColumnsType<any>;
}

const SalaryMonthlyTable: React.FC<SalaryMonthlyTableProps> = ({
  filter,
  columns,
}) => {
  const {
    employeeSalaryMonthlyData,
    employeeSalaryMonthlyLoading,
    employeeSalaryMonthlyRefetch,
  } = useEmployeeSalaryMonthly(10000, 0, filter);
  console.log(employeeSalaryMonthlyData?.employees);

  const openDrawer = useDrawerStore((state) => state.openDrawer);

  const month = filter.attendances_aggregate?.count?.filter?.date_yyyy_mm?._eq;

  return (
    <>
      <Table
        columns={columns}
        rowKey="id"
        onRow={(record) => {
          return {
            onClick: () => {
              openDrawer('employeeAttendanceDrawer', {
                employee_id: record.id,
                month,
              });
            },
          };
        }}
        scroll={{ y: 450, x: columns.length * 200 }}
        loading={employeeSalaryMonthlyLoading}
        dataSource={employeeSalaryMonthlyData?.employees}
      />
      <EmployeeAttendanceDrawer
        isOpen={useDrawerStore(
          (state) => state.drawers.employeeAttendanceDrawer.isOpen
        )}
        refetch={() => {
          employeeSalaryMonthlyRefetch({
            limit: 10000,
            offset: 0,
            where: filter,
          });
        }}
      />
    </>
  );
};

export default SalaryMonthlyTable;
