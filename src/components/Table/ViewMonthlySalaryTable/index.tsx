import { View_Monthly_Salary_Bool_Exp } from "@/graphql/__generated__/graphql";
import { Col, Row, Statistic, Table } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { useDrawerStore } from "@/store/drawerStore";
import EmployeeAttendanceDrawer from "@/components/Drawer/EmployeeAttendanceDrawer";
import { ColumnsType } from "antd/es/table";
import { useViewMonthlySalary } from "@/hooks/view-monthly-salary.hooks";
import dayjs from "dayjs";
import numeral from "numeral";

interface MonthlySalaryTableProps {
  filter: View_Monthly_Salary_Bool_Exp;
  columns: ColumnsType<any>;
}

const ViewMonthlySalaryTable: React.FC<MonthlySalaryTableProps> = ({
  filter,
  columns,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(100);
  const {
    viewMonthlySalaryData,
    viewMonthlySalaryLoading,
    viewMonthlySalaryRefetch,
  } = useViewMonthlySalary(
    pageSize,
    (currentPage - 1) * pageSize,
    filter,
    {
      month: {
        _eq: dayjs(filter.month?._eq).format("YYYY-MM"),
      },
    },
    {
      month: {
        _eq: dayjs(filter.month?._eq).format("YYYY-MM"),
      },
    }
  );

  console.log(viewMonthlySalaryData?.view_monthly_salary);

  const openDrawer = useDrawerStore((state) => state.openDrawer);

  const dataSource = useMemo(() => {
    // 过滤人为添加工资单 导致多出空部门人员薪资统计
    return (
      viewMonthlySalaryData?.view_monthly_salary.filter(
        (one) => one.attendance_department
      ) || []
    );
  }, [viewMonthlySalaryData?.view_monthly_salary]);

  console.log(viewMonthlySalaryData?.view_monthly_salary);

  return (
    <>
      <Row gutter={16}>
        <Col span={5}>
          <Statistic
            loading={viewMonthlySalaryLoading}
            title="本月企业用工成本总额"
            value={`¥ ${numeral(
              viewMonthlySalaryData?.view_monthly_salary_aggregate.aggregate
                ?.sum?.corp_salary_cost
            ).format("0,0.00")}`}
          />
        </Col>
        <Col span={5}>
          <Statistic
            loading={viewMonthlySalaryLoading}
            title="个人实得金额总额"
            value={`¥ ${numeral(
              viewMonthlySalaryData?.view_monthly_salary_aggregate.aggregate
                ?.sum?.net_salary
            ).format("0,0.00")}`}
          />
        </Col>
      </Row>

      <Table
        columns={columns}
        rowKey="employee_id"
        onRow={(record) => {
          return {
            onClick: () => {
              openDrawer("employeeAttendanceDrawer", {
                employee_id: record.employee_id,
                month: dayjs(filter.month?._eq).format("YYYY-MM"),
              });
            },
          };
        }}
        scroll={{ y: 500, x: columns.length * 200 }}
        loading={viewMonthlySalaryLoading}
        dataSource={dataSource}
        pagination={{
          showTotal: (total) => `共${total}人`,
          current: currentPage,
          pageSize,
          pageSizeOptions: [100, 200, 300, 500, 1000, 1500],
          total:
            viewMonthlySalaryData?.view_monthly_salary_aggregate.aggregate
              ?.count,
          onChange(current, pageSize) {
            setCurrentPage(current);
            setPageSize(pageSize);
            viewMonthlySalaryRefetch({
              limit: pageSize,
              offset: (current - 1) * pageSize,
              where: filter,
            });
          },
        }}
      />
      <EmployeeAttendanceDrawer
        isOpen={useDrawerStore(
          (state) => state.drawers.employeeAttendanceDrawer.isOpen
        )}
        refetch={() => {
          viewMonthlySalaryRefetch({
            limit: 100,
            offset: 0,
            where: filter,
          });
        }}
      />
    </>
  );
};

export default ViewMonthlySalaryTable;
