import StoreTable from '@/components/Table/StoreTable/index.StoreTable';
import { Stores } from '@/graphql/__generated__/graphql';
import { useModalStore } from '@/store/modalStore';
import React, { useEffect, useState } from 'react';
import { Col, List, Modal, Row } from 'antd';
import { useStoreEmployee } from '@/hooks/store_employee.hook';
import { CloseOutlined } from '@ant-design/icons';
import DeletableList from '@/components/List/DeletableList';

interface AddStoreModalProps {
  visible: boolean;
}

const AddStoreModal: React.FC<AddStoreModalProps> = ({ visible }) => {
  const [selectedRows, setSelectedRows] = useState<Stores[]>([]);
  const { closeModal, currentEmployee } = useModalStore((state) => ({
    closeModal: state.closeModal,
    currentEmployee: state.modals.addStoreModal.currentEmployee,
  }));
  const { storeEmployeeData, storeEmployeeLoading } = useStoreEmployee({
    employee_id: { _eq: currentEmployee?.id },
  });
  useEffect(() => {
    if (storeEmployeeData?.store_employee) {
      setSelectedRows(
        storeEmployeeData.store_employee.map((e) => e.store) as Stores[]
      );
    }
  }, [storeEmployeeData]);
  return (
    <Modal
      open={visible}
      onCancel={() => {
        closeModal('addStoreModal');
        setSelectedRows([]);
      }}
      title={`添加/修改 ${currentEmployee?.name} 管理的门店`}
      width={900}
      onOk={() => console.log(selectedRows)}
    >
      <Row gutter={24}>
        <Col span={12}>
          <StoreTable
            scroll={{ y: 300 }}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          />
        </Col>
        <Col span={12}>
          <div className="tw-h-[300px] tw-overflow-y-auto">
            <DeletableList list={selectedRows} setList={setSelectedRows} />
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default AddStoreModal;
