import React, { useMemo } from "react";
import { useStoresEmployees } from "@/hooks/store.hooks";
import { Table } from "antd";
import { Employees, Employees_Bool_Exp } from "@/graphql/__generated__/graphql";
import { ColumnsType } from "antd/es/table";

interface StoresEmployeesTableProps {
  columns: ColumnsType<any>;
  filter?: Employees_Bool_Exp;
  scroll?: {
    x?: string | number | true | undefined;
    y?: string | number | undefined;
  };
  onRow?: (record: Employees) => React.HTMLAttributes<HTMLElement>;
}

const StoresEmployeesTable: React.FC<StoresEmployeesTableProps> = ({
  filter,
  columns,
  scroll,
  onRow,
}) => {
  const {
    storesEmployeesData,
    storesEmployeesLoading,
    storesEmployeesRefetch,
  } = useStoresEmployees(filter);

  const employeesData = storesEmployeesData?.stores
    .map((store) => {
      if (Boolean(store.department?.child_departments.length)) {
        return store.department?.child_departments?.map(
          (child_department) => child_department?.employees
        );
      }
      return store.department?.employees;
    })
    .flat(2)
    .filter((one) => one);

  useMemo(() => {
    storesEmployeesRefetch({
      where: filter,
    });
  }, [filter]);

  return (
    <Table
      dataSource={employeesData as Employees[]}
      columns={columns}
      rowKey="id"
      loading={storesEmployeesLoading}
      scroll={scroll}
      onRow={onRow}
    />
  );
};

export default StoresEmployeesTable;
