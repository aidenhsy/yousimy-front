import {
  Dsstorebills,
  View_Daily_Items_Sold_Bool_Exp,
} from '@/graphql/__generated__/graphql';
import { useViewDailyItemsSold } from '@/hooks/dailyItemsSold.hooks';
import { Table } from 'antd';
import React, { useState } from 'react';
import dailySoldItemsColumns from './columns/dailySoldItemsColumns';
import { ColumnsType } from 'antd/es/table';

interface SoldItemsDailyTableProps {
  filter: View_Daily_Items_Sold_Bool_Exp;
  columns: ColumnsType<any>;
  scroll?: {
    x?: string | number | true | undefined;
    y?: string | number | undefined;
  };
  onRow?: (record: Dsstorebills) => React.HTMLAttributes<HTMLElement>;
}

const SoldItemsDailyTable: React.FC<SoldItemsDailyTableProps> = ({
  filter,
  columns,
  scroll,
  onRow,
}) => {
  const {
    viewDailyItemsSoldData,
    viewDailyItemsSoldLoading,
    viewDailyItemsSoldError,
    viewDailyItemsSoldRefetch,
  } = useViewDailyItemsSold(10, 0, filter);

  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return (
    <Table
      rowKey="item_id"
      scroll={scroll}
      columns={columns}
      dataSource={viewDailyItemsSoldData?.view_daily_items_sold as []}
      loading={viewDailyItemsSoldLoading}
      onRow={onRow}
      pagination={{
        current,
        pageSize,
        total:
          viewDailyItemsSoldData?.view_daily_items_sold_aggregate.aggregate
            ?.count,
        onChange(current, pageSize) {
          setCurrent(current);
          setPageSize(pageSize);
          viewDailyItemsSoldRefetch({
            limit: pageSize,
            offset: (current - 1) * pageSize,
          });
        },
      }}
    />
  );
};

export default SoldItemsDailyTable;
