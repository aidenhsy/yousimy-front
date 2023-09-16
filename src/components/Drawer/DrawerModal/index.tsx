import { Drawer, DrawerProps } from "antd";
import { ReactNode } from "react";
import { CloseOutlined } from "@ant-design/icons";

interface DrawerComponentProps extends DrawerProps {
  children?: ReactNode;
  title?: ReactNode;
  onClose: () => void;
}
export default function DrawerComponent({
  children,
  title,
  onClose,
  ...exa
}: DrawerComponentProps) {
  const Title = () => (
    <div className="tw-relative">
      {title}
      <div
        className="tw-absolute tw-top-0 tw-right-0 tw-text-[#999] tw-px-1 tw-py-[1px] hover:tw-bg-gray-200 hover:tw-cursor-pointer tw-rounded active:tw-bg-gray-300"
        onClick={onClose}
      >
        <CloseOutlined />
      </div>
    </div>
  );
  return (
    <div>
      <Drawer
        autoFocus={false}
        // getContainer={false}
        closable={false}
        title={<Title />}
        placement="right"
        open={true}
        onClose={onClose}
        {...exa}
      >
        {children}
      </Drawer>
    </div>
  );
}
