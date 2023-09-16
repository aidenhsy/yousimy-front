import {
  Attendance,
  Attendance_Bool_Exp,
  Employees,
} from "@/graphql/__generated__/graphql";
import { useAttendnceGroups, useAttendnceList } from "@/hooks/attendance.hooks";
import { useEmployees } from "@/hooks/employees.hooks";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useMemo, useState } from "react";

interface AttendanceGroupsTableProps {
  filter: Attendance_Bool_Exp;
  columns: ColumnsType<any>;
  scroll?: {
    x?: string | number | true | undefined;
    y?: string | number | undefined;
  };
  date: any;
}

const StatisticsMonthTable: React.FC<AttendanceGroupsTableProps> = ({
  filter,
  columns,
  scroll,
  date,
}) => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { employeesData, employeesLoading, employeesRefetch } = useEmployees(
    pageSize,
    (current - 1) * pageSize,
    filter
  );

  useMemo(() => {
    setCurrent(1);
    setPageSize(10);
    employeesRefetch({
      limit: 10,
      offset: 0,
      where: filter,
    });
  }, [filter]);

  const dataSource = useMemo(() => {
    return employeesData?.employees.map((user) => {
      return {
        ...user,
        attendances: user?.attendances?.filter((one) =>
          one?.date.includes(date)
        ),
      };
    });
  }, [employeesData, date]);
  return (
    <Table
      columns={columns}
      loading={employeesLoading}
      dataSource={dataSource}
      rowKey="id"
      bordered
      scroll={scroll}
      pagination={{
        current,
        showSizeChanger: false,
        total: employeesData?.employees_aggregate.aggregate?.count,
        onChange(current, pageSize) {
          setCurrent(current);
          setPageSize(pageSize);
          employeesRefetch({
            limit: pageSize,
            offset: (current - 1) * pageSize,
            where: filter,
          });
        },
      }}
    />
  );
};

export default StatisticsMonthTable;
