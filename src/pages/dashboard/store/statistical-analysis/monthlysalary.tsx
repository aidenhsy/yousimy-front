import { DashBoard } from '@/components/Layout/Dashboard';
import { DashItems } from '@/components/Layout/Dashboard/types';
import { withDashItems } from '../../../../hoc/withDashItems';
import { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';
import { useDrawerStore } from '@/store/drawerStore';
import dayjs, { Dayjs } from 'dayjs';
import { View_Monthly_Salary_Bool_Exp } from '@/graphql/__generated__/graphql';
import DateWIcons from '@/components/Date/DateWIcons';
import { Button, Select } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import RosterFilterDrawer from '@/components/Drawer/RosterFilterDrawer';
import { fetchBrandsAndStores } from '@/lib/tools/api';
import storeColumns from '@/components/Table/MonthlySalaryTable/columns/storeColumns';
import ViewMonthlySalaryTable from '@/components/Table/ViewMonthlySalaryTable';

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

const MonthlySalaryPage = ({
  dashItems,
  brandsData,
  storesData,
}: {
  dashItems: DashItems;
  brandsData: string[];
  storesData: { [key: string]: string[] };
}) => {
  const [stores, setStores] = useState(storesData?.[brandsData?.[0]]);
  const [selectedStore, setSelectedStore] = useState(
    storesData?.[brandsData?.[0]]?.[0]
  );
  const [date, setDate] = useState<Dayjs>(
    dayjs().add(-1, 'month').startOf('month')
  );
  const openDrawer = useDrawerStore((state) => state.openDrawer);

  const [filter, setFilter] = useState<View_Monthly_Salary_Bool_Exp>({
    month: { _eq: date },
    attendance_department: {
      name: {
        _like: `%${selectedStore}%`,
      },
    },
  });

  const handleBrandChange = (value: any) => {
    setStores(storesData[value]);
    setSelectedStore(storesData[value][0]);
  };

  const handleStoreChange = (value: any) => {
    setSelectedStore(value);
  };

  useEffect(() => {
    // Update the filter state whenever selectedStore changes
    setFilter((prevFilter) => ({
      ...prevFilter,
      attendance_department: {
        name: {
          _like: `%${selectedStore}%`,
        },
      },
    }));
  }, [selectedStore]);
  useEffect(() => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      month: {
        _eq: date,
      },
    }));
  }, [date]);

  return (
    <>
      <DashBoard dashItems={dashItems}>
        <div className="tw-flex tw-flex-col tw-space-y-4 tw-p-5">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className="tw-flex tw-space-x-2">
              <DateWIcons
                format="YYYY-MM"
                date={date}
                setDate={setDate}
                mode="month"
              />
              {Boolean(brandsData.length) && (
                <Select
                  defaultValue={brandsData[0]}
                  style={{ width: 160 }}
                  onChange={handleBrandChange}
                  options={brandsData?.map((b) => ({ label: b, value: b }))}
                />
              )}
              {Boolean(stores?.length) && (
                <Select
                  value={selectedStore}
                  style={{ width: 200 }}
                  onChange={handleStoreChange}
                  options={stores?.map((store) => ({
                    label: store,
                    value: store,
                  }))}
                />
              )}
            </div>
            <Button
              icon={<FilterOutlined />}
              onClick={() => openDrawer('filterRosterDrawer')}
            />
          </div>
          <ViewMonthlySalaryTable
            columns={storeColumns(date.format('YYYY-MM'))}
            filter={filter}
          />
        </div>
      </DashBoard>
      <RosterFilterDrawer
        setFilter={setFilter}
        open={useDrawerStore(
          (state) => state.drawers.filterRosterDrawer.isOpen
        )}
      />
    </>
  );
};

export default MonthlySalaryPage;
