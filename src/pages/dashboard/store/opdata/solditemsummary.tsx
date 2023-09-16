/** @jsxImportSource @emotion/react */
import { DashBoard } from '@/components/Layout/Dashboard';
import { DashItems } from '@/components/Layout/Dashboard/types';
import SoldItemsSummaryTable from '@/components/Table/SoldItemsTable';
import {
  Order_By,
  Solditems_Summary_Order_By,
} from '@/graphql/__generated__/graphql';
import { withDashItems } from '@/hoc/withDashItems';
import { useBrands } from '@/hooks/brand.hooks';
import { FilterOutlined } from '@ant-design/icons';
import { Button, DatePicker, Select } from 'antd';
import dayjs from 'dayjs';
import { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const SoldItemSummary = ({ dashItems }: { dashItems: DashItems }) => {
  const [start_date, setStart_date] = useState(dayjs().subtract(1, 'day'));
  const [end_date, setEnd_date] = useState(dayjs().subtract(1, 'day'));
  const [order_by, setOrder_by] = useState<Solditems_Summary_Order_By>({
    income_money: Order_By.Desc,
  });
  const [selectedStores, setSelectedStores] = useState<String[]>([]);
  const { brandsData, brandsLoading, brandsError } = useBrands();
  if (!brandsLoading) {
    const store_ids = brandsData?.brands
      .map((brand) => brand.stores.map((store) => store.id))
      .flat();
  }

  useEffect(() => {
    if (brandsData !== undefined) {
      setSelectedStores(
        brandsData.brands
          .map((brand) => brand.stores.map((store) => store.id))
          .flat()
      );
    }
  }, [brandsData]);

  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-flex tw-flex-col tw-space-y-4 tw-p-3">
        <div className="tw-flex tw-justify-between">
          <div className="tw-flex tw-items-center tw-space-x-2">
            <DatePicker.RangePicker
              value={[start_date, end_date]}
              onChange={(day, _) => {
                setStart_date(day![0]!);
                setEnd_date(day![1]!);
              }}
            />
            <Select
              style={{ width: '250px' }}
              value={selectedStores}
              mode="multiple"
              maxTagCount={1}
              options={brandsData?.brands.map((brand) => ({
                label: brand.name,
                options: brand.stores.map((store) => ({
                  label: store.name,
                  value: store.id,
                })),
              }))}
              onSelect={(value) => {
                setSelectedStores([...selectedStores, value]);
              }}
              onDeselect={(value) => {
                setSelectedStores(selectedStores.filter((id) => id !== value));
              }}
            />
          </div>
          <div className="tw-flex tw-items-center tw-space-x-2">
            <Button icon={<FilterOutlined />} />
          </div>
        </div>
        {selectedStores && (
          <SoldItemsSummaryTable
            start_date={start_date.format('YYYY-MM-DD')}
            end_date={end_date.format('YYYY-MM-DD')}
            store_ids={`{${selectedStores.join()}}`}
            order_by={order_by}
            scroll={{ y: 400 }}
          />
        )}
      </div>
    </DashBoard>
  );
};

export default SoldItemSummary;
