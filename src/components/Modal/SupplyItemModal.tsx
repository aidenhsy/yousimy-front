import { useSupplyItemsByPk } from '@/hooks/supplyitem.hooks';
import { useModalStore } from '@/store/modalStore';
import { Image, List, Modal, Spin } from 'antd';
import numeral from 'numeral';
import React from 'react';

interface SupplyItemModalProps {
  open: boolean;
}

const SupplyItemModal: React.FC<SupplyItemModalProps> = ({ open }) => {
  const { item_id, closeModal } = useModalStore((state) => ({
    item_id: state.modals.supplyItemModal.item_id,
    closeModal: state.closeModal,
  }));

  const { supplyItemsData, supplyItemsLoading } = useSupplyItemsByPk(item_id);

  console.log(supplyItemsData?.supplyitems_by_pk?.ingredients);
  const latestPrice =
    Number(supplyItemsData?.supplyitems_by_pk?.dsstorebills[0].ArriveMoney) /
    Number(supplyItemsData?.supplyitems_by_pk?.dsstorebills[0].InBusAmount);

  return (
    <Modal
      closable={false}
      footer={false}
      open={open}
      onCancel={() => closeModal('supplyItemModal')}
      title={supplyItemsData?.supplyitems_by_pk?.itemName}
    >
      {supplyItemsLoading ? (
        <div className="tw-flex tw-justify-center">
          <Spin size="large" />
        </div>
      ) : (
        <Image
          src={supplyItemsData?.supplyitems_by_pk?.itemImage || '/empty.jpg'}
        />
      )}
      <List size="large">
        <List.Item>
          <span>最新报价</span>
          <span>
            ¥ {numeral(latestPrice).format('0,0.00')} /{' '}
            {supplyItemsData?.supplyitems_by_pk?.reportUnit}
          </span>
        </List.Item>
      </List>
      <List
        size="large"
        bordered
        header={<span className="tw-font-bold">在用此原材料的菜品</span>}
        dataSource={supplyItemsData?.supplyitems_by_pk?.ingredients}
        renderItem={(item) => (
          <List.Item>
            <span>{item.fooditem?.item_name}</span>
            <span>{item.fooditem?.brand?.name}</span>
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default SupplyItemModal;
