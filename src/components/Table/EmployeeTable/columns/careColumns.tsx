import { Employees } from "@/graphql/__generated__/graphql";
import { EmployeeTypeMap } from "@/lib/mapping";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";

const careColumns = (): ColumnsType<any> => {
  return [
    {
      title: "姓名",
      dataIndex: "name",
      render: (_: string, record: Employees) => (
        <>
          {record?.avatar ? (
            <Avatar src={<img src={record.avatar} alt="avatar" />} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
          <span style={{ marginLeft: 8 }}>{_}</span>
        </>
      ),
    },
    {
      title: "人员类型",
      dataIndex: "employee_type",
      render: (_) => EmployeeTypeMap[_],
    },
    {
      title: "部门",
      dataIndex: ["department", "name"],
    },
    {
      title: "职务",
      dataIndex: "job_title",
    },
    {
      title: "出生日期",
      dataIndex: "birthday",
    },
    {
      title: "入职日期",
      dataIndex: "hire_date",
    },
    {
      title: "司龄",
      dataIndex: "hire_date",
      render: (_) => <span>{dayjs().diff(_, "year")}</span>,
    },
    {
      title: "生日月份",
      dataIndex: "birthday",
      render: (_) => {
        if (_) {
          return <span>{dayjs(_).get("month") + 1}</span>;
        }
        return null;
      },
    },
  ];
};

export default careColumns;
