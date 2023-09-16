import { DashBoard } from '@/components/Layout/Dashboard';
import { DashItems } from '@/components/Layout/Dashboard/types';
import { withDashItems } from '../../../../hoc/withDashItems';
import { GetServerSidePropsContext } from 'next';
import { Select, Space } from 'antd';
import { useState } from 'react';
import { fetchBrandsAndStores } from '@/lib/tools/api';

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

const Page = ({
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

  const handleBrandChange = (value: any) => {
    setStores(storesData[value]);
    setSelectedStore(storesData[value][0]);
  };

  const handleStoreChange = (value: any) => {
    setSelectedStore(value);
  };

  return (
    <DashBoard dashItems={dashItems}>
      <Space wrap>
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
      </Space>
    </DashBoard>
  );
};

export default Page;
