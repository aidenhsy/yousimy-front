import { useEmployees } from "@/hooks/employees.hooks";
import { useDebounce } from "@/lib/hooks";
import { LoadingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Select, Spin, Tag } from "antd";
import React, { useEffect, useRef } from "react";

const Manager: React.FC<{
  value?: any;
  onChange?: (value: any) => void;
}> = ({ value, onChange }) => {
  const { employeesData, employeesLoading, employeesRefetch } = useEmployees(
    0,
    10,
    {
      status: {
        _eq: 2,
      },
    }
  );

  useEffect(() => {
    if (value) {
      employeesRefetch({
        limit: 10,
        offset: 0,
        where: {
          id: {
            _eq: value,
          },
        },
      });
    }
  }, [value]);

  const selectRef = useRef<any>(null);
  return (
    <Select
      value={value ? value : undefined}
      allowClear
      mode="multiple"
      showArrow={false}
      filterOption={false}
      maxTagCount={1}
      placeholder="请输入姓名"
      ref={selectRef}
      notFoundContent={
        employeesLoading ? (
          <Spin
            indicator={
              <LoadingOutlined className="tw-ml-36" spin={employeesLoading} />
            }
          />
        ) : null
      }
      onSearch={useDebounce((value) => {
        employeesRefetch({
          limit: 10,
          offset: 0,
          where: {
            _and: [
              {
                status: {
                  _eq: 2,
                },
              },
              {
                name: {
                  _like: `%${value}%`,
                },
              },
            ],
          },
        });
      }, 500)}
      onSelect={(value: string | number, option: any) => {
        selectRef?.current?.blur();
        onChange && onChange(value);
      }}
      tagRender={(props) => {
        const {
          label,
        }: {
          label: any;
          closable: boolean;
          onClose: (
            event?: React.MouseEvent<HTMLElement, MouseEvent> | undefined
          ) => void;
        } = props;
        const onPreventMouseDown = (
          event: React.MouseEvent<HTMLSpanElement>
        ) => {
          event.preventDefault();
          event.stopPropagation();
        };
        const item = label?.props && label?.props["data-parameters"];
        return (
          <Tag
            className="tw-flex tw-rounded-t-full tw-rounded-b-full  tw-bg-gray-300/50"
            onMouseDown={onPreventMouseDown}
          >
            <div className="tw-cursor-pointer tw-whitespace-nowrap tw-flex">
              <Avatar
                style={{ marginLeft: "-8px", marginTop: 1 }}
                size={20}
                src={item?.avatar}
                icon={<UserOutlined />}
              />
              <span className="tw-ml-2 tw-text-sm tw-h-[22px] tw-leading-[22px]">
                {item?.name}
              </span>
            </div>
          </Tag>
        );
      }}
      onChange={(value) => {
        onChange && onChange(value);
      }}
    >
      {employeesData?.employees.map((item: any) => {
        return (
          <Select.Option value={item?.id} label={item?.name}>
            <div
              className="tw-cursor-pointer tw-whitespace-nowrap tw-flex"
              data-parameters={{
                name: item?.name,
                avatar: item?.avatar,
              }}
            >
              <Avatar src={item?.avatar} icon={<UserOutlined />} />
              <span className="tw-ml-2 tw-flex tw-flex-col">
                <span className="tw-text-sm">{item?.name}</span>
                <span className="tw-text-xs tw-font-light tw-text-gray-500">
                  {item?.department?.name}
                </span>
              </span>
            </div>
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default Manager;
