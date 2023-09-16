import {
  Attendance,
  Attendance_Bool_Exp,
} from '@/graphql/__generated__/graphql';
import { useAttendnceList } from '@/hooks/attendance.hooks';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useMemo, useState } from 'react';

interface AttendanceGroupsTableProps {
  filter: Attendance_Bool_Exp;
  columns: ColumnsType<any>;
  scroll?: {
    x?: string | number | true | undefined;
    y?: string | number | undefined;
  };
}

const StatisticsDayTable: React.FC<AttendanceGroupsTableProps> = ({
  filter,
  columns,
  scroll,
}) => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { attendnceListData, attendnceListLoading, attendnceListRefetch } =
    useAttendnceList(pageSize, (current - 1) * pageSize, filter);

  console.log(attendnceListData?.attendance);
  useMemo(() => {
    setCurrent(1);
    setPageSize(10);
    attendnceListRefetch({
      limit: 10,
      offset: 0,
      where: filter,
    });
  }, [filter]);

  return (
    <>
      <Table
        columns={columns}
        loading={attendnceListLoading}
        dataSource={attendnceListData?.attendance as Attendance[]}
        rowKey="id"
        scroll={scroll}
        pagination={{
          current,
          showSizeChanger: false,
          total: attendnceListData?.attendance_aggregate.aggregate?.count,
          onChange(current, pageSize) {
            setCurrent(current);
            setPageSize(pageSize);
            attendnceListRefetch({
              limit: pageSize,
              offset: (current - 1) * pageSize,
              where: filter,
            });
          },
        }}
      />
    </>
  );
};

export default StatisticsDayTable;
