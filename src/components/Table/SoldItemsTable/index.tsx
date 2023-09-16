import {
  Order_By,
  Solditems_Summary_Order_By,
  View_Solditems_Bool_Exp,
} from '@/graphql/__generated__/graphql';
import { Table } from 'antd';
import React, { useState } from 'react';
import { useSoldItemsSummary } from '@/hooks/solditems.hooks';
import SoldItemsColumns from './columns/SoldItemsColumns';

interface SoldItemsSummaryTableProps {
  start_date: string;
  end_date: string;
  store_ids: string;
  order_by: Solditems_Summary_Order_By;
  scroll?: {
    x?: string | number | true | undefined;
    y?: string | number | undefined;
  };
}

const SoldItemsSummaryTable: React.FC<SoldItemsSummaryTableProps> = ({
  start_date,
  end_date,
  store_ids,
  order_by,
  scroll,
}) => {
  const [current, setCurrent] = useState(1);
  const {
    viewSoldItemsSummaryData,
    viewSoldItemsSummaryLoading,
    viewSoldItemsSummaryError,
    viewSoldItemsSummaryRefetch,
  } = useSoldItemsSummary(50, 0, start_date, end_date, store_ids, order_by);
  return (
    <Table
      dataSource={viewSoldItemsSummaryData?.func_solditems_summary}
      scroll={scroll}
      loading={viewSoldItemsSummaryLoading}
      columns={SoldItemsColumns()}
      rowKey="item_id"
      pagination={{
        current,
        showSizeChanger: false,
        pageSize: 50,
        total:
          viewSoldItemsSummaryData?.func_solditems_summary_aggregate.aggregate
            ?.count,
        onChange(current, _pageSize) {
          setCurrent(current);
          viewSoldItemsSummaryRefetch({
            limit: 50,
            offset: (current - 1) * 50,
            start_date,
            end_date,
          });
        },
      }}
      onRow={(record: any) => {
        return {
          onClick: () => {
            console.log(record);
          },
        };
      }}
    />
  );
};

export default SoldItemsSummaryTable;
