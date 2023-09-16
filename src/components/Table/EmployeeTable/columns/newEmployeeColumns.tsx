import { StatusMap } from "@/lib/mapping";
import { ColumnsType } from "antd/es/table";

const newEmployeeColumns = (action: any): ColumnsType<any> => {
  return [
    {
      title: "姓名",
      dataIndex: "name",
    },
    {
      title: "手机号码",
      dataIndex: "mobile",
    },
    {
      title: "部门",
      dataIndex: ["department", "name"],
    },
    {
      title: "入职状态",
      dataIndex: "status",
      render: (val, record) => {
        if (val) {
          return StatusMap[val];
        }
        return null;
      },
    },
    {
      title: "职位",
      dataIndex: "job_title",
    },
    {
      title: "预计入职日期",
      dataIndex: "hire_date",
    },
    {
      ...action,
    },
  ];
};

export default newEmployeeColumns;
