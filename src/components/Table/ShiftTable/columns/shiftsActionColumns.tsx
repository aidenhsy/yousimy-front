import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";

const shiftsActionColumns = (action: any): ColumnsType<any> => {
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
    {
      title: "最后更新时间",
      dataIndex: "updated_at",
      render: (_) => <div>{dayjs(_).format("YYYY-MM-DD HH:mm:ss")}</div>,
    },
    {
      ...action,
    },
  ];
};

export default shiftsActionColumns;
