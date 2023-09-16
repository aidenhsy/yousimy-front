import { Employees_ActionType } from "@/graphql/__generated__/graphql";
import { useVerifyEmployee } from "@/hooks/verify-employee.hooks";
import { Table } from "antd";
import React, { useMemo } from "react";
import { ColumnsType } from "antd/es/table";

interface AbnormalEmployeeTableProps {
  columns: ColumnsType<any>;
  onRow?: (record: Employees_ActionType) => React.HTMLAttributes<HTMLElement>;
  scroll?: {
    x?: string | number | true | undefined;
    y?: string | number | undefined;
  };
  filter?: any;
}

const AbnormalEmployeeTable: React.FC<AbnormalEmployeeTableProps> = ({
  columns,
  onRow,
  scroll,
  filter,
}) => {
  const { verifyEmployeeData, verifyEmployeeLoading, verifyEmployeeRefetch } =
    useVerifyEmployee(10000, 0);
  const data = verifyEmployeeData?.verifyEmployeeFields?.filter(
    (e) => e?.employee?.name !== undefined
  ) as Employees_ActionType[];

  const dataSource = useMemo(() => {
    if (filter && Object.keys(filter).length) {
      return data.filter((e) => e?.employee?.name?.includes(filter.name));
    }
    return data;
  }, [data, filter]);

  return (
    <Table
      columns={columns}
      loading={verifyEmployeeLoading}
      scroll={scroll}
      dataSource={dataSource}
      onRow={onRow}
    />
  );
};

export default AbnormalEmployeeTable;
