import {
  Dsstorebills,
  Dsstorebills_Bool_Exp,
} from '@/graphql/__generated__/graphql';
import { useDsStoreBills } from '@/hooks/ds-store.hooks';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';

interface SupplyItemsTableProps {
  filter?: Dsstorebills_Bool_Exp;
  columns: ColumnsType<any>;
  scroll?: {
    x?: string | number | true | undefined;
    y?: string | number | undefined;
  };
  onRow?: (record: Dsstorebills) => React.HTMLAttributes<HTMLElement>;
}

const SupplyItemsDailyTable: React.FC<SupplyItemsTableProps> = ({
  filter,
  columns,
  scroll,
  onRow,
}) => {
  const { dsStoreBillsData, dsStoreBillsLoading, dsStoreBillsError } =
    useDsStoreBills(filter);

  return (
    <Table
      dataSource={dsStoreBillsData?.dsstorebills as []}
      loading={dsStoreBillsLoading}
      columns={columns}
      scroll={scroll}
      onRow={onRow}
    />
  );
};

export default SupplyItemsDailyTable;
