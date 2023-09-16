import { InputNumber } from "antd";
import React from "react";

const SalaryDeductionNumber: React.FC<{
  value?: number;
  onChange?: (value: number | string | null) => void;
}> = ({ value, onChange }) => {
  return (
    <InputNumber
      style={{
        minWidth: 120,
      }}
      value={value}
      formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      parser={(value: any) => value!.replace(/\$\s?|(,*)/g, "")}
      onChange={onChange}
    />
  );
};

export default SalaryDeductionNumber;
