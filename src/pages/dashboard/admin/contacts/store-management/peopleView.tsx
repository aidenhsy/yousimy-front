import { Button, Input } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import EmployeeTable from '@/components/Table/EmployeeTable';
import { useState } from 'react';
import { Employees_Bool_Exp } from '@/graphql/__generated__/graphql';
import { useModalStore } from '@/store/modalStore';
import storeManagerColumns from '@/components/Table/EmployeeTable/columns/storeManagerColumns';
import AddStoreManagerModal from '@/components/Modal/AddStoreManagerModal';

const PeopleView = () => {
  const [filter, setFilter] = useState<Employees_Bool_Exp>({
    store_employees: {},
    name: { _like: `%%` },
  });

  const handleNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNameFilter = e.target.value;
    setFilter({ ...filter, name: { _like: `%${newNameFilter}%` } });
  };

  const openModal = useModalStore((state) => state.openModal);

  return (
    <>
      <main>
        <div className="tw-flex tw-justify-between tw-items-center">
          {/* 搜索人员 */}
          <Input
            className="tw-mb-2 tw-max-w-[240px]"
            placeholder="搜索人员名称"
            prefix={<SearchOutlined />}
            value={filter.name?._like ? filter.name._like.slice(1, -1) : ''}
            onChange={handleNameFilterChange}
          />
          <Button
            icon={<PlusOutlined />}
            onClick={() => openModal('addStoreManagerModal')}
          >
            添加人员
          </Button>
        </div>
        {/* 人员视图 - 管理员表格 */}
        <EmployeeTable
          columns={storeManagerColumns()}
          filter={filter}
          scroll={{ y: 500 }}
        />
      </main>
      <AddStoreManagerModal
        open={useModalStore(
          (state) => state.modals.addStoreManagerModal.isOpen
        )}
      />
    </>
  );
};

export default PeopleView;
