import { useFoodItemByPk } from '@/hooks/fooditem.hooks';
import { useDrawerStore } from '@/store/drawerStore';
import { Button, Drawer, Image, List, Spin } from 'antd';
import React from 'react';
import numeral from 'numeral';
import { EditOutlined } from '@ant-design/icons';
import SupplyItemModal from '../Modal/SupplyItemModal';
import { useModalStore } from '@/store/modalStore';

interface FoodItemDrawerProps {
  open: boolean;
}

const FoodItemDrawer: React.FC<FoodItemDrawerProps> = ({ open }) => {
  const { item_id, closeDrawer } = useDrawerStore((state) => ({
    item_id: state.drawers.foodItemDrawer.item_id,
    closeDrawer: state.closeDrawer,
  }));
  const { foodItemByPkData, foodItemByPkLoading } = useFoodItemByPk(item_id);
  const openModal = useModalStore((state) => state.openModal);

  const imageUrl = foodItemByPkData?.fooditems_by_pk?.big_pic_url;

  let imageContent;
  if (foodItemByPkLoading) {
    imageContent = (
      <div className="tw-flex tw-justify-center">
        <Spin size="large" />
      </div>
    );
  } else if (imageUrl) {
    imageContent = <Image loading="eager" src={imageUrl} alt="food_image" />;
  } else {
    imageContent = <Image loading="eager" src="/empty.jpg" alt="empty_image" />;
  }
  return (
    <>
      <Drawer
        maskStyle={{ opacity: 0 }}
        open={open}
        onClose={() => closeDrawer('foodItemDrawer')}
        title={foodItemByPkData?.fooditems_by_pk?.item_name}
      >
        {imageContent}
        <List size="large" loading={foodItemByPkLoading}>
          <List.Item>
            <span>单价：</span>
            <span>
              ¥{' '}
              {numeral(foodItemByPkData?.fooditems_by_pk?.std_price).format(
                '0,0.00'
              )}
            </span>
          </List.Item>
          <List.Item>
            <span>品牌：</span>
            <span>{foodItemByPkData?.fooditems_by_pk?.brand?.name}</span>
          </List.Item>
          {/* <List.Item>
          <span>当日成本：</span>
          <span>asdf</span>
        </List.Item> */}
        </List>
        <List
          size="large"
          bordered
          loading={foodItemByPkLoading}
          header={
            <div className="tw-flex tw-space-x-1 tw-items-center">
              <span className="tw-font-bold">成本卡</span>
              <Button type="link" icon={<EditOutlined />} />
            </div>
          }
          dataSource={foodItemByPkData?.fooditems_by_pk?.ingredients}
          renderItem={(item) => (
            <List.Item>
              <Button
                onClick={() =>
                  openModal('supplyItemModal', {
                    item_id: item.supplyitem?.itemId,
                  })
                }
                type="text"
              >
                {item.supplyitem?.itemName}
              </Button>
              <span>
                {item.qty}
                {item.supplyitem?.mainUnit}
              </span>
            </List.Item>
          )}
        />
      </Drawer>
      <SupplyItemModal
        open={useModalStore((state) => state.modals.supplyItemModal.isOpen)}
      />
    </>
  );
};

export default FoodItemDrawer;
