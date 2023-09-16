import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';

interface DateWIcons {
  date: Dayjs;
  mode: string;
  format: string;
  setDate: (newDate: Dayjs) => void;
}

const DateWIcons: React.FC<DateWIcons> = (props) => {
  const { date, setDate, mode, format } = props;
  return (
    <div className="tw-border-solid tw-border tw-flex tw-justify-between tw-items-center tw-border-gray-300 tw-rounded">
      <div
        onClick={() => {
          setDate(dayjs(date).add(-1, mode as any));
        }}
        className="tw-h-full tw-flex tw-items-center tw-justify-center tw-w-8 hover:tw-cursor-pointer"
      >
        <LeftOutlined />
      </div>
      <div className="tw-h-4 tw-w-[1px] tw-bg-[#ededee]" />
      <DatePicker
        style={{
          border: 'none',
          width: 100,
        }}
        allowClear={false}
        inputReadOnly
        value={date}
        format={format}
        picker={mode as any}
        suffixIcon={null}
        onChange={(value) => console.log(value)}
      />
      <div className="tw-h-4 tw-w-[1px] tw-bg-[#ededee]" />
      <div
        onClick={() => {
          setDate(dayjs(date).add(+1, mode as any));
        }}
        className="tw-h-full tw-flex tw-items-center tw-justify-center tw-w-8 hover:tw-cursor-pointer"
      >
        <RightOutlined />
      </div>
    </div>
  );
};

export default DateWIcons;
