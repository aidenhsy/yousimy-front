interface FilterRadioProps {
  value?: string;
  onChange?: (value: string) => void;
  options?: DictType[];
}
interface DictType {
  label: string;
  value: string;
}
export default function FilterRadio({
  value = "1",
  onChange,
  options,
}: FilterRadioProps) {
  return (
    <div className="tw-border tw-border-solid tw-border-[#eee] tw-px-[2px] tw-py-[4px] tw-rounded-[5px] tw-inline-block tw-select-none">
      {options?.map((item) => {
        return (
          <div
            key={item.value}
            onClick={() => onChange?.(item.value)}
            className={`hover:tw-cursor-pointer hover:tw-bg-[#eee] tw-inline-block tw-py-[2px] tw-px-[5px] tw-rounded-[5px] tw-min-w-[60px] tw-text-center tw-mx-[2px]   ${
              value === item.value &&
              "tw-bg-[rgba(51,112,255,.08)] tw-text-[#3370ff]"
            }`}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
}
