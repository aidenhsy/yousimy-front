import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import { useState } from "react";
interface ChooseMonthProps {
  selectedMonth: string;
  onChange: (datestring: string) => void;
}
export default function ChooseMonth({
  selectedMonth,
  onChange,
}: ChooseMonthProps) {
  const [mothSelectShow, setMonthSelectShow] = useState(false);
  // 日历的显示与隐藏方法
  const onDateSelectShow = () => {
    setMonthSelectShow(true);
    document.onmousedown = (event: any) => {
      if (!event?.target?.closest(".customPopup")) {
        setMonthSelectShow(false);
        document.onmousedown = null;
      }
    };
  };
  // datepicker日期变化的回调
  const onMonthChange = (date: any, dateString: string) => {
    onChange(dateString);
    setMonthSelectShow(false);
  };
  // 选择前一个月
  const onMonthLast = () => {
    onChange(
      dayjs(selectedMonth).add(-1, "month").format("YYYY-MM").toString()
    );
  };
  // 选择后一个月
  const onMonthNext = () => {
    onChange(dayjs(selectedMonth).add(1, "month").format("YYYY-MM").toString());
  };

  return (
    <div className="tw-flex tw-items-center tw-mb-5">
      <div className="tw-border tw-border-solid tw-border-gray-300 tw-rounded tw-h-8 tw-w-40 tw-flex tw-items-center tw-justify-between tw-mr-4">
        <div
          onClick={onMonthLast}
          className=" hover:tw-bg-[#ededee] tw-h-full tw-flex tw-items-center tw-justify-center tw-w-8 hover:tw-cursor-pointer"
        >
          <LeftOutlined />
        </div>
        <div className="tw-h-4 tw-w-[1px] tw-bg-[#ededee]" />
        <div
          className="tw-relative tw-flex-1 hover:tw-bg-[#ededee] hover:tw-cursor-pointer tw-text-center tw-rounded tw-mx-1 tw-text-sm tw-py-0.5"
          onClick={onDateSelectShow}
        >
          <span>{selectedMonth}</span>
          <DatePicker
            inputReadOnly
            picker="month"
            size="small"
            popupClassName="customPopup"
            allowClear={false}
            open={mothSelectShow}
            suffixIcon={null}
            format={"YYYY-MM"}
            onChange={onMonthChange}
            value={dayjs(selectedMonth)}
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "-40px",
              width: "100%",
              height: "100%",
              border: "none",
              zIndex: -1,
            }}
          />
        </div>
        <div className="tw-h-4 tw-w-[1px] tw-bg-[#ededee]" />
        <div
          onClick={onMonthNext}
          className=" hover:tw-bg-[#ededee] tw-h-full tw-flex tw-items-center tw-justify-center tw-w-8 hover:tw-cursor-pointer"
        >
          <RightOutlined />
        </div>
      </div>
    </div>
  );
}
