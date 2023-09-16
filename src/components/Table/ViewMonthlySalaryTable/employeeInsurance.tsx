import { Employee_Insurance_Bool_Exp } from "@/graphql/__generated__/graphql";
import { useEmployeeMonthlyInsurance } from "@/hooks/employees.hooks";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useMemo, useState } from "react";

interface EmployeesTableProps {
  filter: Employee_Insurance_Bool_Exp;
  columns: ColumnsType<any>;
}

const EmployeeInsuranceTable: React.FC<EmployeesTableProps> = ({
  filter,
  columns,
}) => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    employeeMonthlyInsuranceData,
    employeeMonthlyInsuranceLoading,
    employeeMonthlyInsuranceRefetch,
  } = useEmployeeMonthlyInsurance(pageSize, (current - 1) * pageSize, filter);

  useMemo(() => {
    setCurrent(1);
    setPageSize(10);
    employeeMonthlyInsuranceRefetch({
      limit: 10,
      offset: 0,
      where: filter,
    });
  }, [filter]);

  return (
    <Table
      columns={columns}
      rowClassName="hover:tw-cursor-pointer"
      loading={employeeMonthlyInsuranceLoading}
      dataSource={employeeMonthlyInsuranceData?.employee_insurance}
      rowKey="id"
      scroll={{
        x: columns.length * 200,
      }}
      pagination={{
        current,
        pageSize,
        total:
          employeeMonthlyInsuranceData?.employee_insurance_aggregate.aggregate
            ?.count,
        onChange(current, pageSize) {
          setCurrent(current);
          setPageSize(pageSize);
          employeeMonthlyInsuranceRefetch({
            limit: pageSize,
            offset: (current - 1) * pageSize,
          });
        },
      }}
    />
  );
};

export default EmployeeInsuranceTable;
