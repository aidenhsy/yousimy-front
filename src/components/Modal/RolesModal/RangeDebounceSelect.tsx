import CheckAll from "@/components/Checkbox/CheckAll";
import {
  CheckOutlined,
  CloseOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Empty, Popover, Select, SelectProps, Spin } from "antd";
import { useState } from "react";
interface OptionType {
  label?: string | null;
  value?: string | null;
}
interface DebounceSelectProps extends Omit<SelectProps, "options"> {
  options?: OptionType[];
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  loading?: boolean;
}
export default function DebounceSelect({
  options,
  placeholder,
  loading,
}: DebounceSelectProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const onCheckAllChange = (e: boolean) => {
    if (e) {
      setSelected(options?.map((item) => item.label || "") || []);
    } else {
      setSelected([]);
    }
  };
  const onOptionClick = (val: string) => {
    if (selected.includes(val)) {
      setSelected(selected.filter((item) => item !== val));
    } else {
      setSelected([...selected, val]);
    }
  };
  const onTabDelete = (val: any) => {
    setSelected(selected.filter((item) => item !== val));
  };
  return (
    <Select
      maxTagCount="responsive"
      showSearch
      value={selected}
      filterOption={false}
      placeholder={placeholder}
      mode="multiple"
      dropdownStyle={{ borderRadius: "4px", border: "1px solid #eee" }}
      tagRender={(label) => (
        <div className="tw-bg-[#ededee] tw-text-sm tw-px-1 tw-py-[1px] tw-mr-1 tw-rounded tw-text-[#676565] ">
          {label.label}&nbsp;
          <CloseOutlined
            className="hover:tw-cursor-pointer hover:tw-text-blue-500 tw-text-xs"
            onClick={() => onTabDelete(label)}
          />
        </div>
      )}
      maxTagPlaceholder={(omittedValues) => {
        // console.log(omittedValues);
        return (
          <Popover
            placement="top"
            content={
              <div className="tw-max-h-96 tw-overflow-y-auto tw-flex tw-flex-wrap tw-max-w-md">
                {omittedValues.map((item: any) => (
                  <div className="tw-bg-[#ededee] tw-text-sm tw-px-1 tw-py-[1px] tw-mr-2 tw-rounded tw-mb-2 tw-text-[#676565]">
                    {item.label}&nbsp;
                    <CloseOutlined
                      className="hover:tw-cursor-pointer hover:tw-text-blue-500 tw-text-xs"
                      onClick={() => onTabDelete(item.label)}
                    />
                  </div>
                ))}
              </div>
            }
            trigger="hover"
          >
            <div className="tw-flex tw-items-center">
              <PlusOutlined className="tw-scale-50" />
              {omittedValues.length}
            </div>
          </Popover>
        );
      }}
      dropdownRender={() => (
        <div className="tw-rounded-[2px] tw-p-0 tw-relative tw-pb-10">
          <div className="tw-max-h-64 tw-overflow-y-auto ">
            <Spin
              className="tw-flex tw-items-center tw-justify-center tw-py-4"
              spinning={loading}
              indicator={<LoadingOutlined />}
            >
              {options && options?.length > 0 ? (
                options?.map((item: any) => (
                  <p
                    key={item.value}
                    onClick={() => onOptionClick(item.label)}
                    className={`tw-px-2 tw-py-1 hover:tw-bg-[#ededee] hover:tw-cursor-pointer tw-rounded tw-flex tw-justify-between ${
                      selected.includes(item.label) ? "tw-text-[#116dfa]" : ""
                    }`}
                  >
                    {item.label}
                    {selected.includes(item.label) && <CheckOutlined />}
                  </p>
                ))
              ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              )}
            </Spin>
          </div>

          <div className="tw-absolute tw-bottom-0 tw-left-[-6px] tw-right-[-6px] tw-border-t-[1px] tw-border-solid tw-border-b-0 tw-border-gray-200 tw-h-10 tw-bg-[#fff] tw-flex tw-items-center tw-pl-4">
            <CheckAll
              onChange={onCheckAllChange}
              indeterminate={
                selected.length > 0 && options
                  ? options.length > selected.length
                  : false
              }
              checked={selected.length === options?.length}
            >
              全选
            </CheckAll>
          </div>
        </div>
      )}
    />
  );
}
