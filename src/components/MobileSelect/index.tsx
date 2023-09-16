import { Button, CheckList, Popup, SearchBar } from "antd-mobile";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import {
  RightOutline,
  CheckCircleFill,
  CheckCircleOutline,
  CloseOutline,
} from "antd-mobile-icons";
import { classNames } from "@/lib/tools/classNames";
const MobileSelect: React.FC<{
  value?: any;
  onChange?: any;
  placeholder?: string | ReactNode;
  label?: string; // 弹出框标题
  isSearch?: boolean; // 是否具有搜索
  multiple?: boolean; // 是否多选
  onSearch?: (value: string) => void;
  options: { label: string; value: string }[]; // 下拉数据
}> = ({
  value,
  onChange,
  placeholder = "",
  label = "",
  isSearch = false,
  multiple = false,
  onSearch,
  options,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string[]>([]);

  useEffect(() => {
    if (value) {
      setSelectValue(value.split(","));
    }
  }, [value]);
  // 搜索过滤
  const filteredItems = useMemo(() => {
    if (searchText) {
      return options.filter((item) => item.label.includes(searchText));
    } else {
      return options;
    }
  }, [options, searchText]);

  return (
    <div key={label} className="tw-flex tw-justify-end">
      <div
        onClick={() => setVisible(true)}
        className="tw-flex tw-justify-between"
      >
        <div
          className={classNames(
            `${value ? "tw-text-black" : "tw-text-gray-300"} ${
              multiple ? "tw-w-[180px]" : ""
            } tw-w-[180px] tw-text-ellipsis tw-overflow-hidden tw-whitespace-nowrap tw-text-right`
          )}
        >
          {value
            ? selectValue.map((item: any, index: number) => {
                if (index !== selectValue.length - 1) {
                  return (
                    `${
                      options.filter((one) => one?.value === item)[0]?.label
                    },` || `${item},`
                  );
                }
                return (
                  options.filter((one) => one?.value === item)[0]?.label || item
                );
              })
            : placeholder}
        </div>
        <RightOutline className="tw-text-gray-300 tw-ml-2 tw-mt-1" />
      </div>
      <Popup
        visible={visible}
        onClose={() => setVisible(false)}
        onMaskClick={() => setVisible(false)}
      >
        <div className="tw-flex tw-justify-between tw-py-3 tw-px-2">
          <div>{label}</div>
          <div className="tw-flex tw-justify-between">
            {/* 搜索框 */}
            {isSearch && (
              <SearchBar
                style={{
                  "--height": "20px",
                  width: 190,
                }}
                placeholder="输入文字过滤选项"
                onChange={(v) => {
                  if (onSearch) {
                    onSearch(v);
                  } else {
                    setSearchText(v);
                  }
                }}
              />
            )}
            <CloseOutline
              onClick={() => setVisible(false)}
              style={{ fontSize: 18 }}
              className="tw-ml-6"
            />
          </div>
        </div>
        {/* 可勾选列表 */}
        <CheckList
          className="tw-max-h-[300px] tw-overflow-y-auto"
          extra={(active) =>
            multiple ? (
              active ? (
                <CheckCircleFill />
              ) : (
                <CheckCircleOutline />
              )
            ) : null
          }
          multiple={multiple}
          value={selectValue || []}
          onChange={(value: string[]) => {
            if (multiple) {
              setSelectValue(value);
            } else {
              onChange && onChange(value.join(","));
              setVisible(false);
            }
          }}
        >
          {filteredItems.map((item) => {
            return (
              <CheckList.Item
                className="tw-text-sm"
                key={item.value}
                value={item.value}
              >
                {item.label}
              </CheckList.Item>
            );
          })}
        </CheckList>
        {/* 底部操作按钮 */}
        {multiple && (
          <div className="tw-flex tw-mt-5">
            <Button
              onClick={() => {
                setVisible(false);
                setSelectValue([]);
              }}
              style={{ margin: 12 }}
              className="tw-w-[80%]"
            >
              取消
            </Button>
            <Button
              style={{ margin: 12 }}
              className="tw-w-[80%] tw-m-2"
              color="primary"
              onClick={() => {
                onChange && onChange(selectValue.join(","));
                setVisible(false);
              }}
            >
              确定
            </Button>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default MobileSelect;
