import { useMemo, useState } from 'react';
import { withDashItems } from '../../../../hoc/withDashItems';
import { GetServerSidePropsContext } from 'next';
import { Button, Popover, Space, Tag } from 'antd';
import { DashBoard } from '@/components/Layout/Dashboard';
import { DashItems } from '@/components/Layout/Dashboard/types';
import axios from 'axios';
import { useDeleteEmployee } from '@/hooks/employees.hooks';
import { useStoreDepartments, useStoreList } from '@/hooks/store.hooks';
import { feishuOptions } from '@/lib/tools/feishuOptions';
import EmployeeTable from '@/components/Table/EmployeeTable';
import { Employees_Bool_Exp } from '@/graphql/__generated__/graphql';
import newEmployeeColumns from '@/components/Table/EmployeeTable/columns/newEmployeeColumns';
import { useModalStore } from '@/store/modalStore';
import AddEmployeeModal from '@/components/Modal/AddEmployeeModal';
import NewEmployeeDrawer from '@/components/Drawer/NewEmployeeDrawer';
import { useDrawerStore } from '@/store/drawerStore';

// SSR
export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {
    // 获取飞书审批定义下拉框数据
    const selectOption = await axios.get(
      `${process.env.NEXT_PUBLIC_BACK_SERVER}/v4/approvals`,
      {
        params: {
          definitionCode: '20122797-D0CA-4343-9132-440AF7164FE6',
        },
      }
    );
    return {
      props: { selectOption: selectOption.data.data },
    };
  }
);

const StoreNewEmployee = ({
  dashItems,
  selectOption,
}: {
  dashItems: DashItems;
  selectOption: any;
}) => {
  // Modal / 抽屉
  const openModal = useModalStore((state) => state.openModal);
  const openDrawer = useDrawerStore((state) => state.openDrawer);

  const [filter, setFilter] = useState<Employees_Bool_Exp>({});

  //获取当前人门店
  const { storesData } = useStoreList({
    employee_id: { _eq: dashItems.userInfo.id },
  });
  const { storeDepartmentsData } = useStoreDepartments();
  const { deleteEmployee } = useDeleteEmployee();

  const departmentIds: any = useMemo(() => {
    return storeDepartmentsData?.stores
      .map((store) => {
        if (store.departments[0]?.child_departments.length > 0) {
          return store.departments[0].child_departments;
        } else {
          return store.departments;
        }
      })
      .flat();
  }, [storeDepartmentsData?.stores]);

  // 部门Tag头部
  const tagRender = (dataSource: any) => {
    const tagClassName =
      'tw-mb-1 tw-rounded-t-full tw-rounded-b-full tw-bg-yellow-200/70 tw-text-xs tw-py-1 tw-px-4 ';
    const renderTags = dataSource
      ?.slice(0, 2)
      .map((item: any, index: number) => {
        const { name } = item.store;
        return (
          <Tag key={index} className={tagClassName}>
            {name}
          </Tag>
        );
      });

    if (dataSource?.length > 2) {
      const extraTags = (
        <Popover
          content={dataSource.slice(2).map((item: any, index: number) => {
            const { name } = item.store;
            return (
              <Tag key={index} className={tagClassName}>
                {name}
              </Tag>
            );
          })}
        >
          <Tag className={tagClassName}>{`+${dataSource.length - 2}`}</Tag>
        </Popover>
      );

      return (
        <div className="flex">
          {renderTags}
          {extraTags}
          店的入职申请
        </div>
      );
    }

    return <div className="flex">{renderTags}</div>;
  };

  const feishuOption = feishuOptions(selectOption);
  useMemo(() => {
    setFilter({
      _and: [
        {
          department: {
            id: { _in: departmentIds?.map((item: any) => item.id) },
          },
        },
        {
          status: {
            _in: [6, 7, 9],
          },
        },
      ],
    });
  }, [departmentIds]);

  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-pt-10 tw-px-2 tw-pb-3 tw-flex tw-items-center tw-justify-between">
        {tagRender(storesData?.store_employee)}
        <Button
          style={{ padding: '0 20px' }}
          type="primary"
          onClick={() => openModal('addEmployeeModal')}
        >
          添加新人员
        </Button>
      </div>
      {/* 表格 */}
      <EmployeeTable
        columns={newEmployeeColumns({
          title: '操作',
          dataIndex: 'action',
          render: (val: any, record: any) => {
            return (
              <Space>
                <Button
                  disabled={record.status !== 6}
                  style={{ padding: 0 }}
                  type="link"
                  onClick={() =>
                    openDrawer('newEmployeeDrawer', { employeeInfo: record })
                  }
                >
                  编辑
                </Button>
              </Space>
            );
          },
        })}
        filter={filter}
      />

      {/* 添加新人员 */}
      <AddEmployeeModal
        open={useModalStore((state) => state.modals.addEmployeeModal.isOpen)}
        userId={dashItems.userInfo.id}
        feishuOption={feishuOption}
      />

      <NewEmployeeDrawer
        open={useDrawerStore((state) => state.drawers.newEmployeeDrawer.isOpen)}
        refetch={() =>
          setFilter({
            _and: [
              {
                department: {
                  id: { _in: departmentIds?.map((item: any) => item.id) },
                },
              },
              {
                status: {
                  _in: [6, 7, 9],
                },
              },
            ],
          })
        }
      />
    </DashBoard>
  );
};

export default StoreNewEmployee;
