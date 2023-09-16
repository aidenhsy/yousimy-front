import React, { useEffect, useMemo, useState } from "react";
import {
  Avatar,
  Button,
  Drawer,
  Input,
  Popconfirm,
  Table,
  Tabs,
  Tree,
  message,
} from "antd";
import { useDrawerStore } from "@/store/drawerStore";
import {
  useCreateEmployeesRole,
  useCreateRoleNav,
  useDeleteEmployeesRole,
  useDeleteRoleNav,
  useNavTree,
  useRolesById,
} from "@/hooks/role.hooks";
import { useDebounce } from "@/lib/hooks";
import AttendanceGroupModal from "../Modal/Attendance";
import { UserOutlined } from "@ant-design/icons";

interface RoleDetailColumnsType {
  open: boolean;
}

const filterTreeNodes = (
  treeData: any,
  selectedKeys: any[],
  selectKey: any
) => {
  return treeData.filter((node: any) => {
    const key =
      typeof node.key === "string" &&
      node.key.split("-").length === 3 &&
      node.key.split("-")[node.key.split("-").length - 1];
    if (selectedKeys.includes(Number(key))) {
      selectKey.push(node.key);
      return true;
    } else if (node.children && node.children.length > 0) {
      node.children = filterTreeNodes(node.children, selectedKeys, selectKey);
      return node.children.length > 0;
    }
    return false;
  });
};

const RoleDetailColumns: React.FC<RoleDetailColumnsType> = ({ open }) => {
  const closeDrawer = useDrawerStore((state) => state.closeDrawer);
  const roleId: any = useDrawerStore(
    (state) => state.drawers.roleDetailDrawer.roleId
  );
  const [isNavEdit, setIsNavEdit] = useState(false);
  const [checkedKeys, setCheckedKeys]: any = useState([]);
  const [selectTreeData, setSelectTreeData] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();
  const { navTreeData } = useNavTree(); // 路由树

  const { rolesByIdData, rolesByIdLoading, rolesByIdRefetch } =
    useRolesById(roleId); // 通过id获取管理员角色列表
  // 删除角色路由
  const { deleteRoleNav, deleteRoleNavError } = useDeleteRoleNav();
  // 增加角色路由
  const { createRoleNav, createRoleNavError } = useCreateRoleNav();

  // 从一个角色删除一个人员
  const { deleteEmployeesRole, deleteEmployeesRoleError } =
    useDeleteEmployeesRole();

  // 添加管理员至角色
  const { createEmployeesRole, createEmployeesRoleError } =
    useCreateEmployeesRole();

  const keys: any = rolesByIdData?.roles_by_pk?.role_nav_sm_categories.map(
    (item) => item.nav_sm_category.id
  );

  useMemo(() => {
    if (
      !Boolean(checkedKeys.length) &&
      Boolean(rolesByIdData?.roles_by_pk?.role_nav_sm_categories.length) &&
      navTreeData
    ) {
      const selectKeys: any = [];
      const data = filterTreeNodes(navTreeData, keys, selectKeys);
      setCheckedKeys(selectKeys);
      setSelectTreeData(data);
    }
  }, [navTreeData, keys]);

  return (
    <Drawer
      title="角色详情"
      open={open}
      width={800}
      onClose={() => {
        setCheckedKeys([]);
        setIsNavEdit(false);
        closeDrawer("roleDetailDrawer");
      }}
    >
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "成员",
            children: (
              <>
                <div className="tw-flex tw-justify-between">
                  <Input
                    style={{ width: 240, marginBottom: 10 }}
                    placeholder="请输入姓名"
                    onChange={useDebounce((e) => {
                      rolesByIdRefetch({
                        id: roleId,
                        where:
                          e.target.value && e.target.value !== ""
                            ? {
                                employee: {
                                  name: {
                                    _like: `%${e.target.value}%`,
                                  },
                                },
                              }
                            : {},
                      });
                    }, 500)}
                  />
                  <AttendanceGroupModal
                    title="添加管理员"
                    isButton
                    isButtonChildren={{
                      type: "primary",
                    }}
                    onChange={async (dataSource) => {
                      await createEmployeesRole(
                        dataSource.map((item: any) => ({
                          role_id: roleId,
                          employee_id: item.value,
                        }))
                      );
                      if (!createEmployeesRoleError) {
                        messageApi.open({
                          type: "success",
                          content: "添加成功",
                        });
                        rolesByIdRefetch({
                          id: roleId,
                        });
                      }
                    }}
                  />
                </div>
                {/* 角色详情 */}
                <Table
                  loading={rolesByIdLoading}
                  dataSource={rolesByIdData?.roles_by_pk?.employees_roles.map(
                    (item) => ({ ...item.employee })
                  )}
                  columns={[
                    {
                      title: "姓名",
                      dataIndex: "name",
                      render: (val, record: any) => {
                        return (
                          <div className="tw-flex tw-items-center">
                            {record?.avatar ? (
                              <Avatar
                                style={{ marginRight: 8 }}
                                size={32}
                                src={<img src={record.avatar} alt="avatar" />}
                              />
                            ) : (
                              <Avatar
                                style={{ marginLeft: 8 }}
                                size={32}
                                icon={<UserOutlined />}
                              />
                            )}
                            <div className="tw-flex tw-flex-col">
                              <span>{val}</span>
                              <span className="tw-text-gray-400 tw-text-xs">
                                {record.mobile}
                              </span>
                            </div>
                          </div>
                        );
                      },
                    },
                    {
                      title: "部门",
                      dataIndex: ["department", "name"],
                    },
                    {
                      title: "操作",
                      dataIndex: "action",
                      render: (val, record: any) => {
                        return (
                          <Popconfirm
                            title="确定要移除该管理员吗?"
                            onConfirm={async () => {
                              await deleteEmployeesRole({
                                role_id: {
                                  _eq: roleId,
                                },
                                employee_id: {
                                  _eq: record.id,
                                },
                              });
                              if (!deleteEmployeesRoleError) {
                                rolesByIdRefetch({
                                  id: roleId,
                                });
                              }
                            }}
                            okText="确定"
                            cancelText="取消"
                          >
                            <Button style={{ padding: 0 }} type="link" danger>
                              移除
                            </Button>
                          </Popconfirm>
                        );
                      },
                    },
                  ]}
                  pagination={{
                    hideOnSinglePage: true,
                  }}
                />
              </>
            ),
          },
          {
            key: "2",
            label: "权限",
            children: (
              <>
                {!isNavEdit && (
                  <Button
                    style={{
                      marginBottom: 8,
                      position: "absolute",
                      right: 0,
                      zIndex: 10,
                    }}
                    className="tw-mb-2 tw-absolute tw-right-0 tw-z-10"
                    onClick={() => setIsNavEdit(true)}
                  >
                    编辑权限
                  </Button>
                )}
                {isNavEdit ? (
                  <Tree
                    style={{ width: "100%" }}
                    checkable
                    checkedKeys={checkedKeys}
                    defaultExpandAll
                    treeData={navTreeData}
                    fieldNames={{
                      title: "name",
                    }}
                    height={500}
                    onCheck={(checkedKeys: any) => setCheckedKeys(checkedKeys)}
                  />
                ) : (
                  <Tree
                    style={{ width: "100%" }}
                    disabled
                    checkedKeys={checkedKeys}
                    defaultExpandAll
                    treeData={selectTreeData}
                    fieldNames={{
                      title: "name",
                    }}
                    height={500}
                  />
                )}

                {isNavEdit && (
                  <div className="tw-flex tw-items-center tw-mt-5 tw-justify-end">
                    <Button
                      className="tw-mr-1"
                      onClick={() => {
                        setIsNavEdit(false);
                        setCheckedKeys([]);
                      }}
                    >
                      取消
                    </Button>
                    <Button
                      type="primary"
                      disabled={!checkedKeys.length}
                      onClick={async () => {
                        await deleteRoleNav({
                          role_id: {
                            _eq: roleId,
                          },
                        });
                        if (!deleteRoleNavError) {
                          await createRoleNav(
                            checkedKeys
                              .map((item: any) =>
                                typeof item === "string" &&
                                item.split("-").length === 3
                                  ? Number(item.split("-").pop())
                                  : undefined
                              )
                              .filter((item: any) => item !== undefined)
                              .map((item: any) => ({
                                role_id: roleId,
                                nav_sm_category_id: item,
                              }))
                          );
                          if (!createRoleNavError) {
                            await rolesByIdRefetch({
                              id: roleId,
                            });
                            setIsNavEdit(false);
                            setCheckedKeys([]);
                          }
                        }
                      }}
                    >
                      保存
                    </Button>
                  </div>
                )}
              </>
            ),
          },
        ]}
      />
    </Drawer>
  );
};

export default RoleDetailColumns;
