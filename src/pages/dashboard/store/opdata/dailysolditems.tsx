import { DashBoard } from '@/components/Layout/Dashboard';
import { DashItems } from '@/components/Layout/Dashboard/types';
import { withDashItems } from '../../../../hoc/withDashItems';
import { GetServerSidePropsContext } from 'next';
import { fetchBrandsAndStores } from '@/lib/tools/api';
import { useEffect, useState } from 'react';
import { Button, Select } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import SoldItemsDailyTable from '@/components/Table/SoldItemsDailyTable';
import { View_Daily_Items_Sold_Bool_Exp } from '@/graphql/__generated__/graphql';
import dayjs, { Dayjs } from 'dayjs';
import DateWIcons from '@/components/Date/DateWIcons';
import dailySoldItemsColumns from '@/components/Table/SoldItemsDailyTable/columns/dailySoldItemsColumns';
import { useDrawerStore } from '@/store/drawerStore';
import FoodItemDrawer from '@/components/Drawer/FoodItemDrawer';

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {
    const { req } = context;
    const access_token = req.cookies.access_token;
    const { brandsData, storesData } = await fetchBrandsAndStores(
      access_token!
    );
    return {
      props: { brandsData, storesData },
    };
  }
);

const DailySoldItems = ({
  dashItems,
  brandsData,
  storesData,
}: {
  dashItems: DashItems;
  brandsData: string[];
  storesData: { [key: string]: string[] };
}) => {
  const [stores, setStores] = useState(storesData[brandsData[0]]);
  const [selectedStore, setSelectedStore] = useState(
    storesData[brandsData[0]][0]
  );
  const [date, setDate] = useState<Dayjs>(dayjs().subtract(1, 'day'));
  const openDrawer = useDrawerStore((state) => state.openDrawer);

  const [filter, setFilter] = useState<View_Daily_Items_Sold_Bool_Exp>({
    settle_biz_date: { _eq: date },
    store: {
      name: {
        _eq: selectedStore,
      },
    },
  });

  useEffect(() => {
    setFilter({
      settle_biz_date: { _eq: date },
      store: {
        name: {
          _eq: selectedStore,
        },
      },
    });
  }, [date, selectedStore]);

  const handleBrandChange = (value: any) => {
    setStores(storesData[value]);
    setSelectedStore(storesData[value][0]);
  };

  const handleStoreChange = (value: any) => {
    setSelectedStore(value);
  };
  return (
    <>
      <DashBoard dashItems={dashItems}>
        <div className="tw-flex tw-flex-col tw-space-y-4 tw-p-4">
          <div className="tw-flex tw-justify-between">
            <div className="tw-flex tw-items-center tw-space-x-2">
              <DateWIcons
                format="YYYY-MM-DD"
                date={date}
                setDate={setDate}
                mode="day"
              />
              <Select
                defaultValue={brandsData[0]}
                style={{ width: 160 }}
                onChange={handleBrandChange}
                options={brandsData.map((b) => ({ label: b, value: b }))}
              />
              <Select
                value={selectedStore}
                style={{ width: 200 }}
                onChange={handleStoreChange}
                options={stores.map((store) => ({
                  label: store,
                  value: store,
                }))}
              />
            </div>
            <div className="tw-flex tw-items-center tw-space-x-2">
              <Button icon={<FilterOutlined />} />
            </div>
          </div>
          <SoldItemsDailyTable
            columns={dailySoldItemsColumns()}
            filter={filter}
            scroll={{ y: 400 }}
            onRow={(record: any) => {
              return {
                onClick: () => {
                  openDrawer('foodItemDrawer', { item_id: record.item_id });
                },
              };
            }}
          />
        </div>
      </DashBoard>

      <FoodItemDrawer
        open={useDrawerStore((state) => state.drawers.foodItemDrawer.isOpen)}
      />
    </>
  );
};

export default DailySoldItems;
