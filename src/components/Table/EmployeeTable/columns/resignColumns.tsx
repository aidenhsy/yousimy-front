import { Employees } from "@/graphql/__generated__/graphql";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";

const resignColumns = (action: any): ColumnsType<any> => {
  return [
    {
      title: "姓名",
      width: 200,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (val: any, record: Employees) => (
        <div className="tw-cursor-pointer tw-whitespace-nowrap">
          {record?.avatar ? (
            <Avatar src={<img src={record.avatar} alt="avatar" />} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
          <span className="tw-ml-2">{val}</span>
        </div>
      ),
    },
    {
      title: "手机号码",
      dataIndex: "mobile",
      render: (val) => {
        return val ? val : "-";
      },
    },
    {
      title: "部门",
      dataIndex: ["department", "name"],
    },
    { title: "职位", dataIndex: "job_title", key: "job_title" },
    { title: "入职日期", dataIndex: "hire_date", key: "hire_date" },
    {
      title: "离职日期",
      dataIndex: "actual_overboard_time",
      key: "actual_overboard_time",
    },
    {
      title: "离职原因",
      dataIndex: "overboard_note",
      key: "overboard_note",
    },
    {
      ...action,
    },
  ];
};

export default resignColumns;
