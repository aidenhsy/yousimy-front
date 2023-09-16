import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";

const createAuthColumns = (action: any): ColumnsType<any> => {
  return [
    {
      title: "姓名",
      dataIndex: ["label", "name"],
      render: (val, record: any) => {
        return (
          <div className="tw-flex tw-items-center">
            {record?.label?.avatar ? (
              <Avatar
                style={{ marginRight: 8 }}
                size={32}
                src={<img src={record.label.avatar} alt="avatar" />}
              />
            ) : (
              <Avatar
                style={{ marginLeft: 8 }}
                size={32}
                icon={<UserOutlined />}
              />
            )}
            {val}
          </div>
        );
      },
    },
    {
      title: "部门",
      dataIndex: ["label", "department", "name"],
    },
    {
      ...action,
    },
  ];
};

export default createAuthColumns;
