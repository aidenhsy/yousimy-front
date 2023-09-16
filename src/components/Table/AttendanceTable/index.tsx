import {
  Attendance_Groups,
  Attendance_Groups_Bool_Exp,
} from "@/graphql/__generated__/graphql";
import { useAttendnceGroups } from "@/hooks/attendance.hooks";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useMemo, useState } from "react";

interface AttendanceGroupsTableProps {
  filter?: Attendance_Groups_Bool_Exp;
  columns: ColumnsType<any>;
  scroll?: {
    x?: string | number | true | undefined;
    y?: string | number | undefined;
  };
  selectedRows?: Attendance_Groups[];
  setSelectedRows?: (attendance_Groups: Attendance_Groups[]) => void;
  disabledIds?: string[];
}

const AttendanceTable: React.FC<AttendanceGroupsTableProps> = ({
  filter,
  columns,
  scroll,
  selectedRows,
  disabledIds,
  setSelectedRows,
}) => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    attendanceGroupsData,
    attendanceGroupsLoading,
    attendanceGroupsRefetch,
  } = useAttendnceGroups(pageSize, (current - 1) * pageSize, filter);

  useMemo(() => {
    attendanceGroupsRefetch({
      limit: 10,
      offset: 0,
      where: filter,
    });
    setCurrent(1);
    setPageSize(10);
  }, [filter]);

  const tableOptions: any = selectedRows
    ? {
        rowSelection: {
          type: "checkbox",
          selectedRowKeys: selectedRows?.map((row) => row.id),
          getCheckboxProps: (record: Attendance_Groups) => ({
            disabled: disabledIds?.includes(record.id),
          }),
          onChange: (_: any, rows: any) => {
            if (setSelectedRows) {
              setSelectedRows(rows);
            }
          },
        },
      }
    : {};
  return (
    <>
      <Table
        columns={columns}
        loading={attendanceGroupsLoading}
        dataSource={
          attendanceGroupsData?.attendance_groups as Attendance_Groups[]
        }
        rowKey="id"
        scroll={scroll}
        pagination={{
          showSizeChanger: false,
          total:
            attendanceGroupsData?.attendance_groups_aggregate.aggregate?.count,
          onChange(current, pageSize) {
            setCurrent(current);
            setPageSize(pageSize);
            attendanceGroupsRefetch({
              limit: pageSize,
              offset: (current - 1) * pageSize,
              where: filter,
            });
          },
        }}
        {...tableOptions}
      />
    </>
  );
};

export default AttendanceTable;
