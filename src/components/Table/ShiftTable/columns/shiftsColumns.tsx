import { ColumnsType } from "antd/es/table";

const shiftsColumns = (): ColumnsType<any> => {
  return [
    {
      title: "班次名称",
      dataIndex: "shift_name",
    },
    {
      title: "考勤时间",
      dataIndex: "time",
      render: (_: any, record: any) => {
        const { on_time, off_time } = record;
        if (on_time && off_time) {
          return `${on_time} ~ ${off_time}`;
        }
        return null;
      },
    },
  ];
};

export default shiftsColumns;
