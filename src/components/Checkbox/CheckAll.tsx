import { CheckOutlined } from "@ant-design/icons";
import { ReactNode, useState } from "react";

interface CheckAllProps {
  children?: ReactNode;
  checked: boolean;
  indeterminate: boolean;
  onChange?: (checked: boolean) => void;
}

export default function CheckAll({
  children,
  checked,
  indeterminate,
  onChange,
}: CheckAllProps) {
  return (
    <div
      className="tw-flex tw-items-center tw-cursor-pointer tw-select-none"
      onClick={() => onChange?.(!checked)}
    >
      {!checked && !indeterminate && (
        <div className="tw-w-4 tw-h-4 tw-rounded tw-border tw-border-gray-400 tw-border-solid tw-box-border"></div>
      )}
      {checked && !indeterminate && (
        <div className="tw-w-4 tw-h-4 tw-rounded tw-bg-[#116dfa] tw-text-[#fff] tw-flex tw-items-center tw-justify-center">
          <CheckOutlined className="tw-scale-75 tw-font-black" />
        </div>
      )}
      {indeterminate && (
        <div className="tw-w-4 tw-h-4 tw-rounded tw-bg-[#116dfa] tw-text-[#fff] tw-flex tw-items-center tw-justify-center">
          <div className="tw-w-2 tw-h-[2px] tw-bg-[#fff]"></div>
        </div>
      )}
      &nbsp;
      {children}
    </div>
  );
}
