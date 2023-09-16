import { ColumnsType } from "antd/es/table";

const simpleAttendanceGroupsColumns = (): ColumnsType<any> => {
  return [
    {
      title: "考勤组名称",
      dataIndex: "name",
    },
  ];
};

export default simpleAttendanceGroupsColumns;
