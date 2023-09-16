import React, { ReactNode, useEffect, useState } from "react";
import { classNames } from "@/lib/tools/classNames";
import {
  CloseOutlined,
  DeleteOutlined,
  FilterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Form, Input, Spin, Tooltip } from "antd";
import { dictionary, hrKeyReverse } from "@/lib/dictionaries/hrDictionary";
import { extractKeyValue } from "@/lib/tools/extractKeyValue";
import { translateObject } from "@/lib/tools/translateObject";
import { useDebounce, useHrDictionary } from "@/lib/hooks";
import FilterFormSwitch from "../Form/FilterFormSwitch";

const TableHeader: React.FC<{
  refetch: (value: any) => void;
  initalFilter: any;
  filter: any; // 搜索过滤条件
  listenField?: string;
  loading?: boolean;
  disabled?: boolean;
  totalCount?: number;
  children?: ReactNode;
  formChildren?: { field: string; [key: string]: any }[];
}> = ({
  refetch,
  initalFilter,
  filter,
  listenField = "",
  loading = false,
  disabled = false,
  totalCount = 0,
  children,
  formChildren,
}) => {
  // state
  const [filterDrawer, setFilterDrawer] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  // hook
  const { hrDictionary } = useHrDictionary();

  // form
  const [filterForm] = Form.useForm();

  useEffect(() => {
    const isfilter =
      Boolean(filter[listenField]?.length) ||
      Boolean(filter?.application_status?.length);
    setIsFilter(isfilter);
  }, [filter[listenField], filter?.application_status]);

  const filterKeys = Object.keys(filter).filter(
    (one) => one !== Object.keys(initalFilter)[0] && one !== "search_term"
  );

  // 通过姓名 手机号搜索人员
  const handleSearchTermChange = useDebounce((e) => {
    refetch({ ...filter, search_term: e.target.value });
  }, 500);

  // 清空筛选条件
  const clearFilters = () => {
    refetch({
      ...initalFilter,
      search_term: filter?.search_term,
    });
    setIsFilter(false);
    filterForm.resetFields();
  };

  const removeFilter = (key: string) => {
    const filters = { ...filter };
    delete filters[hrKeyReverse[key]];
    refetch({
      ...initalFilter,
      ...filters,
    });
    filterForm.resetFields([hrKeyReverse[key]]);
  };
  const dict = { ...hrDictionary, ...dictionary };
  const renderFilterTags = () => {
    return Object.entries(
      translateObject(
        extractKeyValue(
          filter,
          Object.keys(initalFilter)[0],
          Object.values(initalFilter)[0]
        ),
        dict
      )
    ).map(([key, value], index) => {
      if (
        value !== "在职" &&
        key !== "search_term" &&
        hrKeyReverse[key] !== Object.keys(initalFilter)[0]
      ) {
        return (
          <Tooltip
            title={key.length + value.length > 20 ? `${key} : ${value}` : ""}
          >
            <div className="tw-block tw-mr-[4px] tw-max-w-[296px]">
              <span className="tw-inline-block  tw-align-bottom tw-whitespace-nowrap tw-overflow-hidden tw-text-ellipsis tw-max-w-full">
                <span className="tw-bg-blue-100 tw-text-blue-900 tw-h-6 tw-py-0 tw-px-[6px] tw-max-w-full tw-align-top tw-whitespace-nowrap tw-items-center tw-inline-flex tw-cursor-text tw-rounded-b tw-rounded-t tw-m-0 tw-box-border tw-text-sm">
                  <div className="tw-inline-block tw-text-ellipsis tw-break-keep tw-overflow-hidden">
                    {`${key} : ${value}`}
                  </div>
                  <CloseOutlined
                    onClick={() => removeFilter(key)}
                    className="tw-inline-block tw-ml-1 tw-cursor-pointer"
                  />
                </span>
              </span>
            </div>
          </Tooltip>
        );
      }
    });
  };

  // 确定筛选
  const handleFilterFormSubmit = async () => {
    try {
      const values = await filterForm.validateFields();
      const filterFormValues = Object.fromEntries(
        Object.entries(values).filter(([k, v]) =>
          Array.isArray(v) ? v.length : v != null
        )
      );
      refetch({
        ...initalFilter,
        search_term: filter?.search_term,
        ...filterFormValues,
      });
      setIsFilter(
        JSON.stringify(filterFormValues) === "{}" && filter?.search_term === ""
          ? false
          : true
      );
      setFilterDrawer(false);
      filterForm.resetFields();
    } catch (error) {
      // Handle validation errors
    }
  };

  return (
    <>
      <div className="tw-flex tw-justify-between tw-my-4">
        <div className="tw-flex tw-space-x-2">
          <Input
            className="tw-w-[308px] tw-h-[30px]"
            placeholder="通过姓名，手机号码搜索人员"
            prefix={<SearchOutlined />}
            onChange={handleSearchTermChange}
          />
          {!disabled && (
            <Tooltip
              style={{ fontSize: "8px" }}
              placement="bottom"
              title="筛选"
            >
              <Button
                type="default"
                icon={<FilterOutlined style={{ fontSize: "14px" }} />}
                onClick={() => {
                  setFilterDrawer(true);
                  filterForm.setFieldsValue(filter);
                }}
                className={classNames(
                  filterKeys.length > 0 ? "selectionStatus" : "",
                  "tw-h-[30px] tw-flex tw-items-center tw-justify-center"
                )}
              >
                {filterKeys.length > 0 && `(${filterKeys.length})`}
              </Button>
            </Tooltip>
          )}
        </div>
        <div className="tw-flex tw-space-x-2">{children}</div>
      </div>

      {Object.keys(filterKeys).length > 0 &&
        JSON.stringify(filter) !== JSON.stringify(initalFilter) &&
        isFilter && (
          <div className="tw-flex tw-items-center tw-mt-4">
            {loading ? (
              <Spin />
            ) : (
              <span className="tw-text-sm tw-font-normal tw-leading-[22px] tw-min-h-fit">{`共 ${totalCount} 条`}</span>
            )}
            <span className="tw-text-gray-400 tw-px-2">|</span>
            <div className="scrollbar tw-flex tw-items-center tw-flex-nowrap tw-overflow-x-scroll">
              {renderFilterTags()}
            </div>
            <span
              onClick={clearFilters}
              className="tw-flex tw-space-x-1 tw-text-gray-500 hover:tw-text-blue-500 hover:tw-cursor-pointer"
            >
              <DeleteOutlined style={{ fontSize: 16 }} />
              <span>清空</span>
            </span>
          </div>
        )}

      <Drawer
        title="筛选项"
        placement="right"
        maskStyle={{ opacity: 0 }}
        onClose={() => {
          setFilterDrawer(false);
        }}
        open={filterDrawer}
        footer={
          <div className="tw-flex tw-justify-end tw-space-x-3 tw-mt-2">
            <Button
              onClick={() => {
                setFilterDrawer(false);
                filterForm.resetFields();
              }}
            >
              取消
            </Button>
            <Button onClick={handleFilterFormSubmit} type="primary">
              确定
            </Button>
          </div>
        }
        footerStyle={{ height: "68px" }}
      >
        <div className="tw-flex tw-flex-col tw-space-y-10">
          {Array.isArray(formChildren) && (
            <Form form={filterForm} layout="vertical">
              {formChildren.map((item) => {
                return <FilterFormSwitch {...item} />;
              })}
            </Form>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default TableHeader;
