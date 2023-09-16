import { useState } from "react";
import { Radio } from "antd";
//components
import {
  ExclamationCircleFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import AttendanceGroupModal from "../Attendance";

interface OptionType {
  label?: string | null;
  value?: string | null;
}
interface ManageRangeProps {
  value?: string;
  onChange?: () => void;
  onSearch?: () => void;
  options?: OptionType[];
}

export default function ManageRange({
  value,
  onChange,
  options,
  onSearch,
}: ManageRangeProps) {
  const [radioValue, setRadio] = useState<string>("1");
  const [rangeValue, setValue] = useState<any>();

  const onAttendanceChange = (value: any) => {
    console.log(value);
    setValue(value);
  };
  const onRadioChange = (val: any) => {
    console.log(val);
    setRadio(val.target.value);
  };
  return (
    <div>
      <Radio.Group
        defaultValue={"1"}
        value={radioValue}
        onChange={onRadioChange}
        className="tw-mb-2"
      >
        <Radio value="1">指定人员</Radio>
        <Radio value="2">全部人员</Radio>
      </Radio.Group>
      {radioValue === "1" && (
        <AttendanceGroupModal
          value={rangeValue}
          title="选择管理范围"
          inputSearchType="select"
          isDepartments
          onChange={onAttendanceChange}
        />
      )}
      {radioValue === "2" && (
        <p className="tw-text-[#ff7d00]">
          <ExclamationCircleFilled />
          &nbsp;管理员可以看到管理范围内的全部人员
        </p>
      )}
    </div>
  );
}
