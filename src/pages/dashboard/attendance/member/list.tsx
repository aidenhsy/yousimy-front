import { useState } from "react";
//types
import { DashItems } from "@/components/Layout/Dashboard/types";
import { ColumnsType } from "antd/es/table";
//lib
import { withDashItems } from "../../../../hoc/withDashItems";
//hooks
import { AvailableRoles, UsersFilter } from "@/gql/graphql";
import usePagination from "@/lib/hooks/usePagination";
import { useDeleteShift } from "@/lib/hooks/graphql/shift.hook";
import { useRoles } from "@/lib/hooks";
//antd
import { Modal, Space, Table, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
//components
import OperationBtn from "@/components/Button/OperationBtn";
import RolesModal from "@/components/Modal/RolesModal";
import { DashBoard } from "@/components/Layout/Dashboard";
import TopOperation from "@/components/Table/TopOperation";
import { GetServerSidePropsContext } from "next";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const Page = ({ dashItems }: { dashItems: DashItems }) => {
  //state
  const [rolesModalShow, setRolesModalShow] = useState(false);
  const [action, setAction] = useState<"add" | "edit" | "view">("add");
  const [rolesId, setRolesId] = useState("");
  const [filter, setFilter] = useState<UsersFilter>({
    search_term: "",
    roles: [AvailableRoles.AttManager, AvailableRoles.SuperManager],
  });
  // hooks
  const { pageParams, gotoPage, tableProps } = usePagination({});
  const { roles, roles_loading, roles_refetch } = useRoles(
    pageParams.take,
    pageParams.skip,
    filter
  );
  const { deleteShiftFn, delete_loading } = useDeleteShift();
  //表格列
  const columns: ColumnsType<any> = [
    {
      title: "管理员",
      dataIndex: "name",
      render: (_, record) => {
        return (
          <div className="tw-flex tw-items-center">
            <img
              className="tw-h-8 tw-w-8 tw-rounded-full tw-mr-3"
              src={record.avatar}
            />
            <span>{_}</span>
          </div>
        );
      },
    },
    {
      title: "部门",
      dataIndex: "department",
      render: (_) => <div>{_?.name}</div>,
    },
    {
      title: "角色",
      dataIndex: "roles",
      render: (_) => <div>{_?.[0].name}</div>,
    },
    {
      title: "权限",
      dataIndex: "rules",
    },
    {
      title: "操作",
      fixed: "right",
      render: (_, record) => (
        <Space>
          <OperationBtn onClick={() => onMember("edit", true, record.id)}>
            编辑
          </OperationBtn>
          <OperationBtn onClick={() => onDel(record.id, record.name)} disabled>
            删除
          </OperationBtn>
        </Space>
      ),
    },
  ];
  // 新增
  const onMember = (
    action: "add" | "edit" | "view",
    show: boolean,
    id: string
  ) => {
    setRolesId(id);
    setAction(action);
    setRolesModalShow(show);
  };
  //删除
  const onDel = async (id: string, name: string) => {
    Modal.confirm({
      content: (
        <div className="tw-flex tw-items-start">
          <ExclamationCircleOutlined className="tw-text-[#ff7d00] tw-text-lg tw-mr-2" />
          <p>您要删除的管理员是{name}，删除后无法恢复，确认删除？</p>
        </div>
      ),
      okText: "删除",
      okButtonProps: { type: "primary", danger: true },
      icon: null,
      centered: true,
      onOk: async () => {
        try {
          await deleteShiftFn(id);
          message.success("删除成功");
          roles_refetch();
        } catch (error) {
          message.error("删除失败");
        }
      },
      onCancel() {
        message.info("取消删除");
      },
    });
  };
  // 搜索
  const onSearch = (value: any) => {
    setFilter({ ...filter, search_term: value });
    gotoPage(1);
  };

  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-p-5 tw-h-full">
        <TopOperation
          addName="新增管理员"
          onAdd={() => onMember("add", true, "")}
          onSearch={onSearch}
          searchPlaceholder="搜索管理员"
        ></TopOperation>
        <Table
          bordered
          sticky={{ offsetHeader: 56 }}
          columns={columns}
          loading={roles_loading}
          rowKey="id"
          dataSource={roles?.items}
          pagination={{ ...tableProps(roles?.totalCount) }}
        />
      </div>
      {rolesModalShow && (
        <RolesModal
          onCancel={() => setRolesModalShow(false)}
          onOk={() => roles_refetch()}
          action={action}
          open={rolesModalShow}
          id={rolesId}
        />
      )}
    </DashBoard>
  );
};

export default Page;
