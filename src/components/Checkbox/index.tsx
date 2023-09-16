import React, { ReactNode, useEffect, useState } from "react";
import { Checkbox, Col, Row } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";

interface checkboxOptions {
  label: string | ReactNode;
  value?: string | number | boolean | null | undefined;
  colSpan?: number;
  colSpanSty?: string;
  disabled?: boolean;
}

const CheckboxComponents: React.FC<{
  id?: string;
  value?: any;
  options: checkboxOptions[];
  onChange?: (value: object) => void;
  noSpan?: boolean;
  disabled?: boolean;
}> = ({ id, value, options, onChange, noSpan = false, disabled = false }) => {
  return (
    <Checkbox.Group
      key={id}
      value={value}
      onChange={(checkedValues: CheckboxValueType[]) =>
        onChange && onChange(checkedValues)
      }
      disabled={disabled}
    >
      <Row>
        {options.map((item, index) => {
          const {
            label,
            value,
            colSpan = 24,
            colSpanSty,
            disabled = false,
          } = item;
          return (
            <Col
              key={`${index}_${value}`}
              className={colSpanSty}
              span={!noSpan ? colSpan : undefined}
            >
              {value ? (
                <Checkbox
                  key={`${index}_${value}`}
                  value={value}
                  disabled={disabled}
                >
                  {label}
                </Checkbox>
              ) : (
                label
              )}
            </Col>
          );
        })}
      </Row>
    </Checkbox.Group>
  );
};

export default CheckboxComponents;
