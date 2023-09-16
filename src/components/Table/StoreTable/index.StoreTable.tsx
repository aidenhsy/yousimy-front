import { Badge, Dropdown, Space, Table, TableColumnsType } from 'antd';
import React from 'react';
import { brandColumns, storeColumns } from './storeTableColumns';
import { useBrands } from '@/hooks/brand.hooks';
import {
  Brands,
  Brands_Bool_Exp,
  Stores,
} from '@/graphql/__generated__/graphql';

interface StoreTableProps {
  filter?: Brands_Bool_Exp;
  scroll?: {
    x?: string | number | true | undefined;
    y?: string | number | undefined;
  };
  selectedRows?: Stores[];
  setSelectedRows?: (stores: Stores[]) => void;
  disabledIds?: string[];
}

const StoreTable: React.FC<StoreTableProps> = ({
  filter,
  scroll,
  selectedRows,
  setSelectedRows,
  disabledIds,
}) => {
  const { brandsData, brandsLoading, brandsRefetch } = useBrands(
    0,
    100,
    filter
  );

  return (
    <Table
      dataSource={brandsData?.brands.map((brand) => ({
        ...brand,
        children: brand.stores,
      }))}
      rowKey="id"
      loading={brandsLoading}
      scroll={scroll}
      pagination={false}
      rowSelection={{
        getCheckboxProps: (record) => ({
          disabled: disabledIds?.includes(record.id),
        }),
        onSelect: (record, selected, rows, event) => {
          if (setSelectedRows) {
            if (selected) {
              if (record.__typename === 'brands') {
                const newArr = [...(selectedRows ?? []), ...record.stores];
                const uniqueMap = new Map(
                  newArr.map((item: Stores) => [item.id, item])
                );
                const uniqueArr = Array.from(uniqueMap.values());
                setSelectedRows(uniqueArr);
              } else {
                const newArr = [...(selectedRows ?? []), record];
                const uniqueMap = new Map(
                  newArr.map((item: Stores) => [item.id, item])
                );
                const uniqueArr = Array.from(uniqueMap.values());
                setSelectedRows(uniqueArr);
              }
            } else {
              if (record.__typename === 'brands') {
                const newArr = selectedRows?.filter(
                  (e) => e.brand_id !== record.id
                );
                setSelectedRows(newArr ?? []);
              } else {
                const newArr = selectedRows?.filter((e) => e.id !== record.id);
                setSelectedRows(newArr ?? []);
              }
            }
          }
        },
        selectedRowKeys: selectedRows?.map((e) => e.id),
        checkStrictly: false,
      }}
      columns={brandColumns()}
    />
  );
};

export default StoreTable;
