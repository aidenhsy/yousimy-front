import { Employees, Employees_Bool_Exp } from '@/graphql/__generated__/graphql';
import { useEmployees } from '@/hooks/employees.hooks';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useMemo, useState } from 'react';

interface EmployeesTableProps {
  filter?: Employees_Bool_Exp;
  columns: ColumnsType<any>;
  scroll?: {
    x?: string | number | true | undefined;
    y?: string | number | undefined;
  };
  selectedRows?: Employees[];
  setSelectedRows?: (employees: Employees[]) => void;
  disabledIds?: string[];
  onRow?: (record: Employees) => React.HTMLAttributes<HTMLElement>;
}

const EmployeeTable: React.FC<EmployeesTableProps> = ({
  filter,
  columns,
  scroll,
  selectedRows,
  setSelectedRows,
  disabledIds,
  onRow,
}) => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { employeesData, employeesLoading, employeesRefetch, employeesError } =
    useEmployees((current - 1) * pageSize, pageSize, filter);
  console.log(employeesData);

  useMemo(() => {
    setCurrent(1);
    setPageSize(10);
    employeesRefetch({
      limit: 10,
      offset: 0,
      where: filter,
    });
  }, [filter]);

  const tableOptions: any = selectedRows
    ? {
        rowSelection: {
          type: 'checkbox',
          selectedRowKeys: selectedRows?.map((row) => row.id),
          getCheckboxProps: (record: Employees) => ({
            disabled: disabledIds?.includes(record.id),
          }),
          onChange: (_: any, rows: any) => {
            if (setSelectedRows) {
              setSelectedRows(rows);
            }
          },
        },
      }
    : {};

  return (
    <Table
      columns={columns}
      rowClassName="hover:tw-cursor-pointer"
      loading={employeesLoading}
      dataSource={employeesData?.employees as Employees[]}
      rowKey="id"
      onRow={onRow}
      scroll={scroll}
      pagination={{
        current,
        pageSize,
        total: employeesData?.employees_aggregate.aggregate?.count,
        onChange(current, pageSize) {
          setCurrent(current);
          setPageSize(pageSize);
          employeesRefetch({
            limit: pageSize,
            offset: (current - 1) * pageSize,
          });
        },
      }}
      {...tableOptions}
    />
  );
};

export default EmployeeTable;
