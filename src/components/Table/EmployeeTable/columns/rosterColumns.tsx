import { Employees } from "@/graphql/__generated__/graphql";
import { StatusMap } from "@/lib/mapping";
import { useModalStore } from "@/store/modalStore";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Space } from "antd";
import { ColumnsType } from "antd/es/table";

const rosterColumns = (): ColumnsType<any> => {
  const openModal = useModalStore((state) => state.openModal);

  return [
    {
      title: "姓名",
      width: 200,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (val: any, record: Employees) => (
        <div style={{ cursor: "pointer" }}>
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
    { title: "职位", dataIndex: "job_title", key: "job_title" },
    { title: "入职日期", dataIndex: "hire_date", key: "hire_date" },
    {
      title: "部门",
      dataIndex: ["department", "name"],
      key: "status",
      fixed: "right",
    },
  ];
};

export default rosterColumns;
