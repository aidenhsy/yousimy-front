import { Attendance, ShiftList } from "@/gql/graphql";
import { StopOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { object } from "prop-types";

interface ChooseShift {
  list?: any;
  onSelectedBc: (value: any) => void;
  onClearBc: () => void;
}
export default function ChooseShift({
  list,
  onSelectedBc,
  onClearBc,
}: ChooseShift) {
  const handleSelect = (item: any) => {
    const newItem = Object.fromEntries(
      Object.entries(item).filter(([key, value]) => !key.includes("olor"))
    );
    onSelectedBc(newItem);
  };
  return (
    <div className="tw-relative tw-w-full">
      <div className="tw-py-2 tw-pl-2">请选择班次</div>
      <div className=" tw-h-52 tw-overflow-auto ">
        {list?.map((item: any) => {
          if (!item.shift_list) return null;
          const { shift_name, on_time, off_time } = item.shift_list;
          return (
            <div
              key={item.id}
              onClick={() => handleSelect(item)}
              className="tw-flex tw-w-11/12 tw-h-6 tw-px-2 tw-py-[5px] tw-rounded  tw-mb-2 tw-cursor-pointer hover:tw-bg-gray-200 tw-text-[#333]"
            >
              {on_time &&
                off_time &&
                shift_name.length + on_time.length + off_time.length > 25 && (
                  <Tooltip
                    placement="top"
                    title={shift_name + " " + on_time + "" + off_time}
                    color="#fff"
                    overlayInnerStyle={{ color: "#333" }}
                    overlayStyle={{ maxWidth: "400px" }}
                  >
                    <div
                      className="tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap tw-rounded tw-px-2"
                      style={{
                        backgroundColor: item.bgColor,
                        color: item.color,
                      }}
                    >
                      {shift_name}&nbsp;
                      {on_time} ~ {off_time}
                    </div>
                  </Tooltip>
                )}
              {on_time &&
                off_time &&
                shift_name.length + on_time.length + off_time.length <= 25 && (
                  <div
                    className="tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap tw-rounded tw-px-2"
                    style={{
                      backgroundColor: item.bgColor,
                      color: item.color,
                    }}
                  >
                    {shift_name}&nbsp;
                    {on_time} ~ {off_time}
                  </div>
                )}
              {!on_time && (
                <div
                  className="tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap tw-rounded tw-px-2"
                  style={{
                    backgroundColor: item.bgColor,
                    color: item.color,
                  }}
                >
                  {shift_name}&nbsp;
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div onClick={onClearBc} className="tw-pt-1">
        <div className="tw-py-1 hover:tw-bg-gray-100 tw-select-none active:tw-bg-gray-200 tw-flex tw-items-center tw-justify-center tw-cursor-pointer">
          清除
        </div>
      </div>
    </div>
  );
}
