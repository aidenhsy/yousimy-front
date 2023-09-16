import { Roles_Bool_Exp } from "@/graphql/__generated__/graphql";
import { useRolesList } from "@/hooks/role.hooks";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";

interface AuthTableTableProps {
  filter?: Roles_Bool_Exp;
  columns: ColumnsType<any>;
  scroll?: {
    x?: string | number | true | undefined;
    y?: string | number | undefined;
  };
}

const AuthTable: React.FC<AuthTableTableProps> = ({
  filter,
  columns,
  scroll,
}) => {
  const { rolesListData, rolesListLoading } = useRolesList(filter); // 管理员角色列表

  return (
    <Table
      columns={columns}
      loading={rolesListLoading}
      dataSource={rolesListData?.roles}
      rowKey="id"
      scroll={scroll}
      pagination={{
        hideOnSinglePage: true,
      }}
    />
  );
};

export default AuthTable;
