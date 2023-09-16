import { DashBoard } from '@/components/Layout/Dashboard';
import { DashItems } from '@/components/Layout/Dashboard/types';
import { withDashItems } from '../../../../hoc/withDashItems';
import { GetServerSidePropsContext } from 'next';
import { fetchBrandsAndStores } from '@/lib/tools/api';
import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Button, Select } from 'antd';
import DateWIcons from '@/components/Date/DateWIcons';
import { FilterOutlined } from '@ant-design/icons';
import SupplyItemsDailyTable from '@/components/Table/SupplyItemsDailyTable';
import storeColumns from '@/components/Table/SupplyItemsDailyTable/columns/storeColumns';
import { Dsstorebills_Bool_Exp } from '@/graphql/__generated__/graphql';

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

const DailySupplyItemsPage = ({
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
  const [filter, setFilter] = useState<Dsstorebills_Bool_Exp>({
    auditDate: { _eq: date },
    store: {
      name: {
        _eq: selectedStore,
      },
    },
  });

  useEffect(() => {
    setFilter({
      auditDate: { _eq: date },
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
              options={stores.map((store) => ({ label: store, value: store }))}
            />
          </div>
          <div className="tw-flex tw-items-center tw-space-x-2">
            <Button icon={<FilterOutlined />} />
          </div>
        </div>
        <SupplyItemsDailyTable
          filter={filter}
          columns={storeColumns()}
          onRow={(record: any) => {
            return {
              onClick: () => {
                console.log('hi');
              },
            };
          }}
        />
      </div>
    </DashBoard>
  );
};

export default DailySupplyItemsPage;
