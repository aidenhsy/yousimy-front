import { useDebounce } from "@/lib/hooks";
import { LoadingOutlined } from "@ant-design/icons";
import { Avatar, Empty, Select, SelectProps, Spin } from "antd";
import { ReactNode, createRef, useState } from "react";
interface OptionType {
  label?: any;
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
  // value,
  onChange,
  onSearch,
  placeholder,
  loading,
}: DebounceSelectProps) {
  const selectRef = createRef<any>();
  const [isFocus, setFocus] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [optionOpen, setOptionOpen] = useState(false);
  const [value, setValue] = useState<string>();
  const onSelectChange = (value: string) => {
    console.log(value);
  };
  const onOptionClick = (value: string) => {
    console.log(value);
    setValue(value);
    setSearchValue("");
    selectRef.current.blur();
  };
  return (
    <Select
      ref={selectRef}
      style={{ width: "100%", opacity: isFocus ? "0.6" : "1" }}
      showSearch
      fieldNames={{ label: "label.name", value: "value" }}
      open={searchValue !== ""}
      value={value}
      filterOption={false}
      placeholder={placeholder}
      onSearch={useDebounce((eventValue: string) => {
        // setOptionOpen(true);
        setSearchValue(eventValue);
        console.log(eventValue);
        onSearch?.(eventValue);
      }, 500)}
      // onSearch={useDebounce((eventValue: string) => {
      //   console.log(eventValue);
      //   onSearch?.(eventValue);
      // }, 500)}
      onChange={onSelectChange}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      dropdownStyle={{ borderRadius: "4px", border: "1px solid #eee" }}
      // options={searchValue === "" ? [] : options}
      dropdownRender={() => (
        <div className="tw-rounded-[2px] tw-max-h-96 tw-overflow-y-auto">
          <Spin
            className="tw-flex tw-items-center tw-justify-center tw-py-4"
            spinning={loading}
            // size="small"
            indicator={<LoadingOutlined />}
          >
            {options && options?.length > 0 ? (
              options?.map((item: any) => (
                // item.label
                <div
                  key={item.value}
                  className="tw-flex hover:tw-bg-[#ededee] tw-py-[6px] tw-px-2 tw-rounded tw-items-center hover:tw-cursor-pointer"
                  onClick={() => onOptionClick(item.label.name)}
                >
                  <Avatar />
                  <div className="tw-ml-4">
                    <p className="tw-text-sm">{item.label.name}</p>
                    <p className="tw-text-xs tw-text-[#606775]">
                      {item.label.department}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
          </Spin>
        </div>
      )}
    />
  );
}
