import { CheckResultMap } from '@/lib/mapping';
import { Button, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';

const MonthlyAttendancesColumns = (): ColumnsType<any> => {
  return [
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '班次名称',
      dataIndex: 'shift_list',
      key: 'shift_list',
      render: (val, record) => {
        return (
          <Tooltip
            placement="top"
            title={
              <div className="tw-flex tw-flex-col tw-space-y-2">
                <span>{record.shift_list.on_time}</span>
                <span>{record.shift_list.off_time}</span>
              </div>
            }
          >
            <Button>{val.shift_name}</Button>
          </Tooltip>
        );
      },
    },
    {
      title: '上班打卡',
      dataIndex: 'clock_in_time',
      key: 'clock_in_time',
      render: (val, record) => {
        if (val) {
          return (
            <span>{`${val}(${CheckResultMap[record.clockInResult]})`}</span>
          );
        } else if (record.shift_list.shift_name === '休息') {
          <span>无需打卡</span>;
        } else {
          return <span className="tw-text-red-500">未打卡</span>;
        }
      },
    },
    {
      title: '下班打卡',
      dataIndex: 'clock_out_time',
      key: 'clock_out_time',
      render: (val, record) => {
        if (val) {
          return (
            <span>{`${val}(${CheckResultMap[record.clockOutResult]})`}</span>
          );
        } else if (record.shift_list.shift_name === '休息') {
          <span>无需打卡</span>;
        } else {
          return <span className="tw-text-red-500">未打卡</span>;
        }
      },
    },
    {
      title: '考勤部门',
      dataIndex: 'department',
      key: 'department',
      render: (val: any) => {
        if (val && val.name) {
          return <span>{val.name}</span>;
        } else {
          return '';
        }
      },
    },
  ];
};

export default MonthlyAttendancesColumns;
