import { Employees } from "@/graphql/__generated__/graphql";
import { ApplicationMap, ApplicationStatusMap, StatusMap } from "@/lib/mapping";
import { useModalStore } from "@/store/modalStore";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import { ColumnsType } from "antd/es/table";

const conVersionColumns = (): ColumnsType<any> => {
  const openModal = useModalStore((state) => state.openModal);

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
      title: "转正状态",
      dataIndex: "application_status",
      render: (val) => (val ? ApplicationStatusMap[val] : "-"),
    },
    {
      title: "转正日期",
      dataIndex: "actual_conversion_time",
    },
    {
      title: "转正申请",
      dataIndex: "application",
      render: (val) => (val ? ApplicationMap[val] : "-"),
    },
    {
      title: "人员状态",
      dataIndex: "status",
      key: "status",
      render: (val) => (val ? StatusMap[val] : "-"),
    },
    { title: "职位", dataIndex: "job_title", key: "job_title" },
    { title: "入职日期", dataIndex: "hire_date", key: "hire_date" },
    {
      title: "部门",
      dataIndex: ["department", "name"],
      key: "status",
    },
    {
      title: "操作",
      width: 80,
      dataIndex: "op",
      key: "op",
      fixed: "right",
      render: (_val, record: Employees) => (
        <Dropdown.Button
          size="small"
          placement="bottomRight"
          type="link"
          menu={{
            items: [
              {
                label: "调整转正日期",
                key: 1,
              },
            ],
            onClick: async (e) => {
              if (e.key === "1") {
                openModal("conversionModal", { currentEmployee: record });
              }
            },
          }}
        />
      ),
    },
  ];
};

export default conVersionColumns;
