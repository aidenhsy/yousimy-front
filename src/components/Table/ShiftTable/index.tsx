import {
  Shift_Lists,
  Shift_Lists_Bool_Exp,
} from "@/graphql/__generated__/graphql";
import { useShiftLists } from "@/hooks/shift.hooks";
import { inCreaseOrDeleteAry } from "@/lib/tools/increaseOrDeleteAry";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useMemo, useState } from "react";

interface ShiftTableProps {
  filter: Shift_Lists_Bool_Exp;
  columns: ColumnsType<any>;
  scroll?: {
    x?: string | number | true | undefined;
    y?: string | number | undefined;
  };
  selectedRows?: Shift_Lists[];
  setSelectedRows?: (shiftLists: Shift_Lists[]) => void;
  disabledIds?: string[];
}

const ShiftTable: React.FC<ShiftTableProps> = ({
  filter,
  columns,
  scroll,
  selectedRows,
  setSelectedRows,
  disabledIds,
}) => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { shiftListsData, shiftListsLoading, shiftListsRefetch } =
    useShiftLists(pageSize, (current - 1) * pageSize, filter);

  useMemo(() => {
    shiftListsRefetch({
      limit: pageSize,
      offset: (current - 1) * pageSize,
      where: filter,
    });
  }, [filter]);

  const tableOptions: any = selectedRows
    ? {
        rowSelection: {
          type: "checkbox",
          selectedRowKeys: selectedRows,
          onSelect: (record: any) => {
            if (!setSelectedRows) return;
            if (selectedRows.includes(record.id)) {
              setSelectedRows(
                selectedRows.filter((item: any) => item !== record.id)
              );
            } else {
              setSelectedRows([...selectedRows, record.id]);
            }
          },
        },
      }
    : {};
  return (
    <Table
      bordered
      columns={columns}
      loading={shiftListsLoading}
      dataSource={shiftListsData?.shift_lists as Shift_Lists[]}
      rowKey="id"
      scroll={scroll}
      pagination={{
        showSizeChanger: false,
        total: shiftListsData?.shift_lists_aggregate.aggregate?.count,
        onChange(current, pageSize) {
          setCurrent(current);
          setPageSize(pageSize);
          shiftListsRefetch({
            limit: pageSize,
            offset: (current - 1) * pageSize,
            where: filter,
          });
        },
      }}
      {...tableOptions}
    />
  );
};

export default ShiftTable;
