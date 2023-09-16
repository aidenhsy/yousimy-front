import React, { useState } from 'react';
import {
  Button,
  Drawer,
  Form,
  Input,
  Table,
  Timeline,
  Tree,
  message,
} from 'antd';
import { useDrawerStore } from '@/store/drawerStore';
import { useCreateRole, useNavTree } from '@/hooks/role.hooks';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import AttendanceGroupModal from '../Modal/Attendance';
import createAuthColumns from '../Table/AuthTable/columns/createAuthColumns';
import TableTagRender from '../Tag/TableTagRender';
import { nanoid } from 'nanoid';

interface CreateAuthDrawerType {
  open: boolean;
  refetch: () => void;
}

const timelineMap = [
  {
    label: '角色信息',
    children: '设置角色名称等信息',
  },
  {
    label: '选择权限',
    children: '设置角色可以管理的权限范围',
  },
  {
    label: '添加管理员',
    children: '将成员作为管理员添加到此角色',
  },
  {
    label: '检查并完成',
    children: '预览管理员角色并确认',
  },
];
const CreateAuthDrawer: React.FC<CreateAuthDrawerType> = ({
  open,
  refetch,
}) => {
  const closeDrawer = useDrawerStore((state) => state.closeDrawer);
  const [current, setCurrent] = useState(0); // 当前步骤
  const [treeNavList, setTreeNavList] = useState<string[]>([]); // 树节点key
  const [dataSource, setDataSource] = useState([]); // 管理员角色下的成员列表
  const [roleName, setRoleName] = useState('');
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  // 创建角色
  const { navTreeData } = useNavTree(); // 路由树
  const { createRole, createRoleLoading, createRoleError } = useCreateRole();

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
    <Drawer
      title="创建管理员角色"
      width="100%"
      placement="right"
      onClose={() => {
        setCurrent(0);
        setDataSource([]);
        setRoleName('');
        setTreeNavList([]);
        form.resetFields();
        closeDrawer('createAuthDrawer');
      }}
      open={open}
      destroyOnClose
      closeIcon={
        <div className="tw-text-[#1f2329] tw-font-light tw-flex tw-items-center">
          <CloseOutlined className="tw-mr-1" />
          <span style={{ fontSize: 14 }}>关闭</span>
        </div>
      }
    >
      <div className="tw-flex tw-flex-1 tw-h-[80%] tw-pb-20">
        <div className="tw-flex-grow tw-relative">
          {/* 步骤条 */}
          <Timeline
            mode="left"
            items={timelineMap.map((item, index) => {
              return {
                dot:
                  current === index ? (
                    <svg viewBox="0 0 1024 1024" width="8" height="8">
                      <path
                        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                        p-id="3263"
                        fill="#3370ff"
                      ></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 1024 1024" width="8" height="8">
                      <path
                        d="M512 64c60.5 0 119.2 11.8 174.4 35.2 53.3 22.6 101.3 54.9 142.4 96 41.2 41.2 73.5 89.1 96 142.4C948.2 392.8 960 451.5 960 512s-11.8 119.2-35.2 174.4c-22.6 53.3-54.9 101.3-96 142.4-41.2 41.2-89.1 73.5-142.4 96C631.2 948.2 572.5 960 512 960s-119.2-11.8-174.4-35.2c-53.3-22.6-101.3-54.9-142.4-96-41.2-41.2-73.5-89.1-96-142.4C75.8 631.2 64 572.5 64 512s11.8-119.2 35.2-174.4c22.6-53.3 54.9-101.3 96-142.4s89.1-73.5 142.4-96C392.8 75.8 451.5 64 512 64m0-64C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z"
                        p-id="2695"
                        fill="#8f959e"
                      ></path>
                    </svg>
                  ),
                children: (
                  <>
                    <div
                      className={
                        current === index ? 'tw-text-black' : 'tw-text-gray-400'
                      }
                    >
                      {item.label}
                    </div>
                    <div className="tw-text-gray-400">{item.children}</div>
                  </>
                ),
              };
            })}
          />
        </div>
        <div className="tw-h-full tw-w-[680px]">
          <div className="tw-w-full tw-h-full tw-flex tw-p-8 tw-pd-0 tw-relative tw-flex-col tw-overflow-y-auto">
            <p className="tw-text-[#1f2329] tw-font-medium tw-text-xl tw-mb-8">
              {timelineMap[current].label}
            </p>
            {/* 角色信息 */}
            {current === 0 && (
              <Form form={form} layout="vertical">
                <Form.Item
                  label="角色名称"
                  name="name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="请输入角色名称" />
                </Form.Item>
              </Form>
            )}
            {/* 选择权限 */}
            {current === 1 && (
              <Tree
                checkable
                defaultExpandAll
                checkedKeys={treeNavList}
                treeData={navTreeData}
                fieldNames={{
                  title: 'name',
                }}
                onCheck={(checkedKeys: any) => setTreeNavList(checkedKeys)}
              />
            )}
            {/* 添加管理员 */}
            {current === 2 && (
              <>
                <AttendanceGroupModal
                  title="添加管理员"
                  isButton
                  isButtonChildren={{
                    icon: <PlusOutlined />,
                    type: 'link',
                    className: 'tw-mb-2 tw-w-[90px]',
                  }}
                  value={dataSource}
                  onChange={(value) => setDataSource(value)}
                />
                <Table
                  dataSource={dataSource}
                  columns={createAuthColumns({
                    title: '操作',
                    dataIndex: 'action',
                    render: (val: any, record: any) => {
                      return (
                        <Button
                          style={{ padding: 0 }}
                          type="link"
                          danger
                          onClick={() =>
                            setDataSource(
                              dataSource.filter(
                                (one: any) => one.value !== record.value
                              )
                            )
                          }
                        >
                          移除
                        </Button>
                      );
                    },
                  })}
                  pagination={{
                    hideOnSinglePage: true,
                  }}
                />
              </>
            )}
            {/* 检查并完成 */}
            {current === 3 && (
              <div>
                <div className="tw-relative tw-mb-5">
                  <div className="tw-mb-2 tw-text-gray-[#646a73]">角色名称</div>
                  <div className="tw-flextw-items-center tw-text-gray-400">
                    {roleName}
                  </div>
                </div>
                <div className="tw-relative  tw-mb-5">
                  <div className="tw-mb-2 tw-text-gray-[#646a73]">管理员</div>
                  <div className="tw-flex tw-items-center tw-text-gray-400">
                    {dataSource.length !== 0 ? (
                      <TableTagRender
                        type="memberTag"
                        dataSource={dataSource}
                      />
                    ) : (
                      '无'
                    )}
                  </div>
                </div>
                <div className="tw-relative tw-mb-5">
                  <div className="tw-mb-2 tw-text-gray-[#646a73]">权限</div>
                  {treeNavList.length ? (
                    <div className=" tw-h-full tw-justify-between tw-py-4 tw-px-5 tw-bg-[#f8f9fa]">
                      <Tree
                        style={{ width: '100%' }}
                        disabled
                        defaultExpandAll
                        treeData={filterTreeNodes(navTreeData, treeNavList)}
                        fieldNames={{
                          title: 'name',
                        }}
                        height={400}
                      />
                    </div>
                  ) : (
                    '无'
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="tw-flex-grow"></div>
      </div>
      <div className="tw-flex tw-h-[64px] tw-border-t tw-border-[#dee0e3] tw-border-solid tw-mb-0 tw-items-center tw-justify-center tw-bottom-0 tw-relative">
        <div className="tw-h-[64px] tw-w-[670px] tw-flex tw-justify-end tw-items-center">
          {current !== 0 && (
            <Button className="tw-mr-2" onClick={() => setCurrent(current - 1)}>
              上一步
            </Button>
          )}
          {current !== 3 && (
            <Button
              type="primary"
              onClick={() => {
                if (current === 0) {
                  form.validateFields().then((values) => {
                    setRoleName(values.name);
                    setCurrent(current + 1);
                  });
                  return;
                }
                return setCurrent(current + 1);
              }}
            >
              下一步
            </Button>
          )}
          {current === 3 && (
            <Button
              loading={createRoleLoading}
              type="primary"
              onClick={async () => {
                // 创建角色
                await createRole([
                  {
                    id: nanoid(),
                    name: roleName,
                    employees_roles: {
                      data: dataSource.map((item: any) => ({
                        employee_id: item.value,
                      })),
                    },
                    role_nav_sm_categories: {
                      data: treeNavList
                        .map((item: any) =>
                          item?.toString()?.split('-').length === 3
                            ? Number(item.split('-').pop())
                            : undefined
                        )
                        .filter((item) => item !== undefined)
                        .map((item) => ({ nav_sm_category_id: item })),
                    },
                  },
                ]);
                if (!createRoleError) {
                  messageApi.open({
                    type: 'success',
                    content: '创建角色成功',
                  });
                  setCurrent(0);
                  setDataSource([]);
                  setRoleName('');
                  setTreeNavList([]);
                  form.resetFields();
                  closeDrawer('createAuthDrawer');
                  refetch();
                }
              }}
            >
              创建角色
            </Button>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default CreateAuthDrawer;
