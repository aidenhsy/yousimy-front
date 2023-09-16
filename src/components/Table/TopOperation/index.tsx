import { useDebounce } from "@/lib/hooks";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { ReactNode } from "react";
interface TopOperationProps {
  addName?: string; //新建按钮的名称
  searchPlaceholder?: string; //搜索的提示
  onAdd?: () => void;
  onSearch?: (value: string) => void;
  leftChildren?: ReactNode; //添加左边按钮
  children?: ReactNode; // 添加右边按钮
}
export default function TopOperation({
  addName = "新建",
  searchPlaceholder = "请输入关键字",
  onAdd,
  onSearch,
  children,
  leftChildren,
}: TopOperationProps) {
  return (
    <div className="tw-flex tw-items-center tw-mb-4">
      <div className="tw-flex tw-items-center">
        <Button type="primary" onClick={onAdd} icon={<PlusOutlined />}>
          {addName}
        </Button>
        {leftChildren}
      </div>

      <div className="tw-flex tw-items-center tw-ml-auto">
        <Input
          placeholder={searchPlaceholder}
          prefix={<SearchOutlined style={{ fontSize: "18px" }} />}
          onChange={useDebounce((event) => onSearch?.(event.target.value), 500)}
        />
        {children}
      </div>
    </div>
  );
}
