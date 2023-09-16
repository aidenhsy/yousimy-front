import { ReactNode } from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const SinglePageHeader: React.FC<{
  title?: string | ReactNode;
  onReturn?: () => void;
  optionButton?: ReactNode;
}> = ({ title, onReturn, optionButton }) => {
  return (
    <header className="tw-bg-gray-100 tw-box-border tw-flex tw-min-h-0 tw-flex-col tw-h-auto tw-leading-normal tw-p-0 tw-z-10 tw-flex-shrink-0 tw-flex-grow-0 tw-basis-auto">
      <div className="tw-flex tw-items-center tw-bg-white tw-h-14 tw-pl-4 tw-relative tw-border-solid tw-border-0 tw-border-b tw-border-gray-300 tw-px-6">
        <Button
          type="text"
          className="tw-text-base tw-font-semibold tw-p-0"
          onClick={() => onReturn && onReturn()}
        >
          <ArrowLeftOutlined />
          返回
        </Button>
        <div className="tw-bg-gray-300 tw-h-4 tw-ml-3 tw-mr-4 tw-w-[1px]"></div>
        <div className="tw-text-base tw-font-semibold">{title}</div>
        <div className="tw-flex-1"></div>
        <div>{optionButton}</div>
      </div>
    </header>
  );
};

export default SinglePageHeader;
