import { ReactNode } from "react";

export const headerTitle = (title: string | ReactNode) => {
  return (
    <div className="tw-flex tw-items-center tw-h-6 tw-mb-4">
      <div className="tw-bg-[#3370ff] tw-h-4 tw-mr-2 tw-w-[2px]"></div>
      <div className="tw-font-medium tw-text-black tw-text-base">{title}</div>
    </div>
  );
};
