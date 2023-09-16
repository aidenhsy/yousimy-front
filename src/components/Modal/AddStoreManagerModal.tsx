import { useModalStore } from '@/store/modalStore';
import { Avatar, Button, Select, Steps, Tree } from 'antd';
import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { Employees_Bool_Exp } from '@/graphql/__generated__/graphql';
import { useEmployees } from '@/hooks/employees.hooks';
import { useBrandsStores } from '@/hooks/brand.hooks';
import { UserOutlined } from '@ant-design/icons';
import {
  useInsertStoreEmployee,
  useStoreEmployee,
} from '@/hooks/store_employee.hook';

interface AddManagerModalProps {
  open: boolean;
}

const AddStoreManagerModal: React.FC<AddManagerModalProps> = ({ open }) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const [filter, setFilter] = useState<Employees_Bool_Exp>({});
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const { employeesData, employeesLoading } = useEmployees(0, 10, filter);
  const { brandsStoresData, brandsStoresLoading } = useBrandsStores(
    { status: { _eq: 2 }, is_operation: { _eq: true } },
    { status: { _eq: 2 } }
  );

  const { storeEmployeeData, storeEmployeeLoading, storeEmployeeError } =
    useStoreEmployee({ employee_id: { _eq: selectedEmployee } });

  const [checkedKeys, setCheckedKeys] = useState<any[]>([]);

  useEffect(() => {
    setCheckedKeys(
      storeEmployeeData?.store_employee.map((s) => s.store.id) as any[]
    );
  }, [storeEmployeeData]);

  const handleSearch = async (value: string) => {
    setFilter({
      name: {
        _like: `%${value}%`,
      },
    });
  };

  const { insertStoreEmployee } = useInsertStoreEmployee();

  return (
    <Modal
      open={open}
      onCancel={() => {
        closeModal('addStoreManagerModal');
        setSelectedEmployee('');
      }}
      onOk={async () => {
        await insertStoreEmployee(
          checkedKeys.map((store_id) => ({
            employee_id: selectedEmployee,
            store_id: store_id,
          }))
        );
        closeModal('addStoreManagerModal');
        setSelectedEmployee('');
      }}
    >
      <div className="tw-flex tw-flex-col tw-space-y-4 tw-py-6">
        <Select
          showSearch
          style={{ width: '100%' }}
          size="large"
          placeholder="搜索人员"
          value={selectedEmployee}
          onSelect={(value) => setSelectedEmployee(value)}
          optionFilterProp="children"
          onSearch={handleSearch}
          loading={employeesLoading}
          filterOption={false}
          options={employeesData?.employees.map((e) => ({
            label: (
              <div className="tw-flex tw-justify-between tw-items-center">
                <div className="tw-flex tw-space-x-2 tw-items-center">
                  {e.avatar ? (
                    <Avatar src={e.avatar} />
                  ) : (
                    <Avatar icon={<UserOutlined />} />
                  )}
                  <span>{e.name}</span>
                </div>
                <span>{e.department?.name}</span>
              </div>
            ),
            value: e.id,
          }))}
        />
        <Tree
          disabled={selectedEmployee.length === 0}
          checkable
          onCheck={(_, e) => {
            const storeIds = e.checkedNodes
              .filter((node) => !node.children) // filter out parent nodes
              .map((node) => node.key);
            setCheckedKeys(storeIds);
          }}
          checkedKeys={checkedKeys}
          treeData={brandsStoresData?.brands.map((brand) => ({
            title: brand.name,
            key: brand.id,
            children: brand.stores.map((store) => ({
              title: store.name,
              key: store.id,
            })),
          }))}
        />
      </div>
    </Modal>
  );
};

export default AddStoreManagerModal;
