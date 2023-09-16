import { Button, Input, Popconfirm, Space, message } from "antd";
import { GetServerSidePropsContext } from "next";
// components
import { DashBoard } from "@/components/Layout/Dashboard";
import { DashItems } from "@/components/Layout/Dashboard/types";
import { withDashItems } from "../../../../hoc/withDashItems";
import { useDebounce } from "@/lib/hooks";
import { useState } from "react";
import AttendanceGroupModal from "@/components/Modal/Attendance";
import { useCreateEmployeesRole, useDeleteRole } from "@/hooks/role.hooks";
import AuthTable from "@/components/Table/AuthTable";
import authColumns from "@/components/Table/AuthTable/columns/authColumns";
import { Roles_Bool_Exp } from "@/graphql/__generated__/graphql";
import CreateAuthDrawer from "@/components/Drawer/CreateAuthDrawer";
import { useDrawerStore } from "@/store/drawerStore";
import RoleDetailDrawer from "@/components/Drawer/RoleDetailDrawer";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const Auth = ({ dashItems }: { dashItems: DashItems }) => {
  const openDrawer = useDrawerStore((state) => state.openDrawer);

  // state

  const [roleRecord, setRoleRecord] = useState<any>({});

  const [filter, setFilter] = useState<Roles_Bool_Exp>({});
  const [messageApi, contextHolder] = message.useMessage();
  //hooks
  // 角色列表

  // 添加管理员至角色
  const { createEmployeesRole, createEmployeesRoleError } =
    useCreateEmployeesRole();

  // 删除角色
  const { deleteRole, deleteRoleError } = useDeleteRole();

  // 过滤已选择的树节点 用作展示
  const filterTreeNodes = (treeData: any, selectedKeys: string[]) => {
    return treeData.filter((node: any) => {
      if (selectedKeys.includes(node.key)) {
        return true;
      } else if (node.children && node.children.length > 0) {
        node.children = filterTreeNodes(node.children, selectedKeys);
        return node.children.length > 0;
      }
      return false;
    });
  };

  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-p-5">
        <div className="tw-flex tw-justify-between tw-mb-5">
          <Input
            style={{ width: 240 }}
            placeholder="请输入角色名称"
            onChange={useDebounce((e) => {
              setFilter({
                name: {
                  _like: `%${e.target.value}%`,
                },
              });
            }, 500)}
          />
          <Button type="primary" onClick={() => openDrawer("createAuthDrawer")}>
            创建角色
          </Button>
        </div>
        <AuthTable
          columns={authColumns({
            title: "操作",
            dataIndex: "action",
            key: "action",
            fixed: "right",
            render: (val: any, record: any) => {
              return (
                <Space>
                  <Button
                    style={{ padding: 0 }}
                    type="link"
                    onClick={() => {
                      setRoleRecord(record);
                      openDrawer("roleDetailDrawer", { roleId: record.id });
                    }}
                  >
                    详情
                  </Button>
                  <AttendanceGroupModal
                    title="添加管理员"
                    isButton
                    isButtonChildren={{
                      type: "link",
                      className: "tw-p-0",
                    }}
                    onChange={async (employees) => {
                      await createEmployeesRole(
                        employees.map((item: any) => ({
                          role_id: record.id,
                          employee_id: item.value,
                        }))
                      );
                      if (!createEmployeesRoleError) {
                        messageApi.open({
                          type: "success",
                          content: "添加成功",
                        });
                        setFilter({});
                      }
                    }}
                  />
                  <Popconfirm
                    title="确定要删除该角色吗?"
                    onConfirm={() => {
                      deleteRole(record.id);
                      if (!deleteRoleError) {
                        messageApi.open({
                          type: "success",
                          content: "删除角色成功",
                        });
                        setFilter({});
                      }
                    }}
                    okText="确定"
                    cancelText="取消"
                  >
                    <Button type="link" danger style={{ padding: 0 }}>
                      删除角色
                    </Button>
                  </Popconfirm>
                </Space>
              );
            },
          })}
          filter={filter}
        />
      </div>
      {/* 创建管理员 */}
      <CreateAuthDrawer
        open={useDrawerStore((state) => state.drawers.createAuthDrawer.isOpen)}
        refetch={() => setFilter({})}
      />
      {/* 角色详情 */}
      <RoleDetailDrawer
        open={useDrawerStore((state) => state.drawers.roleDetailDrawer.isOpen)}
      />
    </DashBoard>
  );
};

export default Auth;
