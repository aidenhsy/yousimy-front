import React, { useState } from "react";
//external library
import { Input, Select, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDebounce } from "@/lib/hooks";

const SearchInput: React.FC<{
  type?: "input" | "select";
  refetch: (value: object) => void;
}> = ({ type = "input", refetch }) => {
  const [selectValue, setSelectValue] = useState<string>("users");

  if (type === "input") {
    return (
      <Input
        allowClear
        placeholder="请搜索"
        prefix={<SearchOutlined />}
        onChange={useDebounce(({ target: { value } }) => {
          refetch({ value });
        }, 500)}
      />
    );
  }
  return (
    <Space.Compact>
      <Select
        value={selectValue}
        options={[
          {
            value: "users",
            label: "成员",
          },
          {
            value: "departments",
            label: "部门",
          },
        ]}
        onChange={(value) => setSelectValue(value)}
      />
      <Input
        allowClear
        className="tw-py-0"
        placeholder="请搜索"
        onChange={useDebounce(({ target: { value } }) => {
          refetch({ type: selectValue, value });
        }, 500)}
      />
    </Space.Compact>
  );
};

export default SearchInput;
