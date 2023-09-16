import { useWindow } from "@/lib/hooks/useWindow";
import { EditOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { useEffect, useState } from "react";

interface ShiftTags {
  list?: any[];
  setScheduleShow: () => void; // 班次抽屉方法
}
export default function ShiftTags({ list, setScheduleShow }: ShiftTags) {
  const [tabIndex, setTabIndex] = useState(0);
  const [innerWidth] = useWindow();
  // 监听屏幕变化 显示班次
  useEffect(() => {
    if (Array.isArray(list)) {
      let stringCount = getCount(innerWidth);
      let count = 0;
      list
        ?.filter((el: any) => el.shift_list.id !== "0")
        .forEach((item: any, index: any) => {
          const { shift_name, on_time, off_time } = item.shift_list;
          count =
            count + shift_name?.length + on_time?.length + off_time?.length;
          if (count <= stringCount) {
            setTabIndex(index);
          }
        });
    }
  }, [list, innerWidth]);
  // 通过屏幕尺寸改变班次显示字符数量
  const getCount = (action: number) => {
    if (action > 1824) return 210;
    if (action > 1624) return 170;
    return 120;
  };
  return (
    <div className="tw-w-full tw-bg-[#fff] tw-rounded-lg tw-py-4 tw-px-5 tw-box-border tw-mb-5 tw-text-sm">
      <div className="tw-flex tw-items-center">
        <p className="tw-text-[#1f2329] tw-font-medium">考勤班次</p>
        <div className="tw-ml-4 tw-flex tw-items-center">
          {list
            ?.filter((el: any) => el.shift_list.id !== "0")
            .slice(0, tabIndex + 1)
            .map((item: any) => {
              const { shift_list } = item;
              return (
                <div
                  style={{
                    backgroundColor: item.bgColor,
                    color: item.color,
                  }}
                  key={shift_list.id}
                  className="tw-mr-2 tw-px-1 tw-py-[1px] tw-rounded tw-text-sm "
                >
                  <span>{shift_list.shift_name}</span>
                  <span>
                    {shift_list.on_time} ~ {shift_list.off_time}
                  </span>
                </div>
              );
            })}
        </div>
        <Popover
          content={
            <div className="tw-ml-4 tw-flex">
              {list
                ?.filter((el: any) => el.shift_list.id !== "0")
                .slice(tabIndex + 1)
                .map((item: any) => {
                  const { shift_list } = item;
                  return (
                    <div
                      style={{
                        backgroundColor: item.bgColor,
                        color: item.color,
                      }}
                      key={shift_list.id}
                      className="tw-mr-2 tw-px-1 tw-py-[1px] tw-rounded tw-text-sm tw-w-auto tw-mb-2"
                    >
                      <span>{shift_list.shift_name}</span>
                      <span>
                        {shift_list.on_time} ~ {shift_list.off_time}
                      </span>
                    </div>
                  );
                })}
            </div>
          }
        >
          {list &&
            list?.filter((el: any) => el.shift_list.id !== "0")?.length -
              tabIndex -
              1 >
              0 && (
              <div className="tw-bg-gray-100 tw-mr-2 tw-px-1 tw-py-[1px] tw-rounded tw-text-sm hover:tw-bg-gray-200 hover:tw-cursor-pointer">
                +
                {list?.filter((el: any) => el.shift_list.id !== "0").length -
                  tabIndex -
                  1}
              </div>
            )}
        </Popover>
        <div
          className="tw-px-1 tw-py-[1px] tw-rounded hover:tw-bg-gray-200 hover:tw-cursor-pointer"
          onClick={setScheduleShow}
        >
          <EditOutlined />
        </div>
      </div>
    </div>
  );
}
