import { InputNumber, TimePicker } from "antd";
import dayjs from "dayjs";
//types
import type { Dayjs } from "dayjs";
import { useState } from "react";
interface BlockProps {
  labelLeft?: string; // 左侧描述
  labelRight?: string; // 右侧描述
  value?: number | string; // 值
  defaultValue?: number | string; //默认值
  onChange?: (value: number | string) => void; //值发生变化
}
interface MinBlockProps extends BlockProps {}
interface ClockBlockProps extends BlockProps {
  format?: string;
}
interface HourBlockProps extends BlockProps {}
// 分钟的block
const MinBlock = ({
  labelLeft,
  labelRight,
  defaultValue,
  value,
  onChange,
}: MinBlockProps) => {
  const handlerChange = (event: any) => {
    onChange?.(event);
  };
  return (
    <div className="tw-flex tw-items-center tw-mb-2">
      <p className="tw-w-36 tw-text-right tw-mr-2 tw-min-w-[70px]">
        {labelLeft}
      </p>
      <InputNumber
        defaultValue={defaultValue}
        value={value}
        onChange={handlerChange}
        min={0}
      />
      <p className="tw-ml-2 tw-mr-2">{labelRight}</p>
    </div>
  );
};
// 时钟的block
const ClockBlock = ({
  labelLeft,
  labelRight,
  defaultValue,
  value = defaultValue,
  format = "HH:mm",
  onChange,
}: ClockBlockProps) => {
  const dateOnChange = (data: Dayjs | null, dateString: string) => {
    // console.log(dateString);
    onChange?.(dateString);
  };
  return (
    <div className="dateComponent tw-flex tw-items-center tw-mb-2">
      <p className="tw-w-36 tw-text-right tw-mr-2 tw-min-w-[70px]">
        {labelLeft}
      </p>
      <TimePicker
        value={dayjs(value, format)}
        onChange={dateOnChange}
        defaultOpenValue={dayjs(defaultValue, format)}
        format={format}
      />
      <p className="tw-ml-2 tw-mr-2">{labelRight}</p>
    </div>
  );
};
// 小时分钟的block
const HourBlock = ({
  labelLeft,
  labelRight,
  defaultValue = 60,
  value = defaultValue,
  onChange,
}: HourBlockProps) => {
  const [minCount, setMinCount] = useState({
    hour: Math.floor(Number(value) / 60),
    min: Number(value) % 60,
  });
  const onHourChange = (value: number) => {
    // console.log(value);
    onChange?.(value * 60 + minCount.min);
  };
  const onMinChange = (value: number) => {
    // console.log(value);
    onChange?.(value + minCount.hour * 60);
  };
  return (
    <div className="tw-flex tw-items-center tw-mb-2">
      <p className=" tw-text-right tw-mr-2 tw-min-w-[70px]">{labelLeft}</p>
      <InputNumber
        value={minCount.hour}
        onChange={(event: any) => onHourChange?.(event?.target?.value)}
        min={0}
      />

      <p className="tw-ml-2 tw-mr-2">{labelRight}</p>
      <InputNumber
        value={minCount.min}
        onChange={(event: any) => onMinChange?.(event?.target.value)}
        min={0}
      />
      <p className="tw-ml-2">分钟</p>
    </div>
  );
};
export { MinBlock, ClockBlock, HourBlock };
