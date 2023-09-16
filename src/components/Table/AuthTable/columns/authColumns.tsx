import TableTagRender from "@/components/Tag/TableTagRender";
import { ColumnsType } from "antd/es/table";

const authColumns = (action: any): ColumnsType<any> => {
  return [
    {
      title: "角色名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "管理员",
      dataIndex: "employees_roles",
      key: "employees_roles",
      render: (val) => {
        const value = val?.map((item: any) => ({ ...item.employee }));
        if (Array.isArray(value)) {
          return <TableTagRender type="reserveMember" dataSource={value} />;
        }
        return null;
      },
    },
    {
      title: "权限范围",
      dataIndex: "role_scopes",
      key: "role_scopes",
      render: (val) => {
        const value = val?.map((item: any) => ({ ...item.scope }));
        if (Array.isArray(value)) {
          return value.map((item: any) => item.name).join(", ");
        }
        return null;
      },
    },
    {
      ...action,
    },
  ];
};

export default authColumns;
