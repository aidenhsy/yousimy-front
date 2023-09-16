import { ReactNode } from "react";
import { classNames } from "@/lib/tools/classNames";
interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  disabled = false,
}: ButtonProps) {
  const onButtonClick = () => {
    if (disabled) return;
    onClick?.();
  };
  return (
    <div
      onClick={onButtonClick}
      className={classNames(
        "tw-inline-block tw-cursor-pointer tw-py-[2px] tw-rounded-[6px]  tw-select-none",
        !disabled
          ? "hover:tw-bg-[#3370ff1a] tw-text-[#3370ff] active:tw-bg-[#3370ff33] "
          : "tw-text-[#bbbfc4] tw-cursor-not-allowed"
      )}
    >
      {children}
    </div>
  );
}
