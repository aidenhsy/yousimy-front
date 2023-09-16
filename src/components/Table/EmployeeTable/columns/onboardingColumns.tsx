import { Employees } from "@/graphql/__generated__/graphql";
import { StatusMap } from "@/lib/mapping";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";

const onboardingColumns = (action: any): ColumnsType<any> => {
  return [
    {
      title: "姓名",
      width: 200,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (val: any, record: Employees) => (
        <>
          {record?.avatar ? (
            <Avatar src={<img src={record.avatar} alt="avatar" />} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
          <span style={{ marginLeft: 8 }}>{val}</span>
        </>
      ),
    },
    {
      title: "手机号码",
      dataIndex: "mobile",
      key: "mobile",
      render: (val) => {
        return val ? val : "-";
      },
    },
    {
      title: "人员状态",
      dataIndex: "status",
      key: "status",
      render: (val) => {
        return val ? StatusMap[val] : "-";
      },
    },
    {
      title: "部门",
      dataIndex: ["department", "name"],
    },
    { title: "入职日期", dataIndex: "hire_date", key: "hire_date" },
    { title: "职位", dataIndex: "job_title", key: "job_title" },

    {
      ...action,
    },
  ];
};

export default onboardingColumns;
