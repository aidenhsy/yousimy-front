import { Button, Popup, SearchBar } from "antd-mobile";
import { Tag, Avatar, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { AddCircleOutline, CloseOutline } from "antd-mobile-icons";
import LeftList from "@/components/Modal/Attendance/leftList";
import {
  useChildDepartmentsById,
  useDebounce,
  useDepartments,
} from "@/lib/hooks";
import { PartitionOutlined } from "@ant-design/icons";

const MobileDepartmentSelect: React.FC<{
  value?: any;
  onChange?: any;
  isSearch?: boolean; // 是否具有搜索
}> = ({ value, onChange, isSearch = false }) => {
  // state
  const [visible, setVisible] = useState<boolean>(false);
  const [searchDepartment, setSearchDepartment] = useState<boolean>(false);
  const [selectRows, setSelectRows] = useState<any>([]);
  // hooks
  const {
    childDepartmentsById_data,
    childDepartmentsById_loading,
    childDepartmentsById_refetch,
  } = useChildDepartmentsById("0");

  const { departments_data, departments_loading, departments_refetch } =
    useDepartments(10, 0, {});

  useEffect(() => {
    if (value) {
      setSelectRows(value);
    }
  }, [value]);

  const dataSource = searchDepartment
    ? departments_data?.items
    : childDepartmentsById_data?.child_departments;
  return (
    <div className="tw-flex tw-justify-end">
      <div onClick={() => setVisible(true)}>
        {value && value.length ? (
          <Tag
            className="tw-flex tw-rounded-t-full tw-rounded-b-full  tw-bg-gray-300/50"
            closable
            onClose={() => {
              setSelectRows([]);
              onChange && onChange([]);
            }}
          >
            <div className="tw-cursor-pointer tw-whitespace-nowrap tw-flex">
              <Avatar
                className="tw-bg-[#4b54e6] tw--ml-2 tw-mt-[1px]"
                size={20}
                src={<PartitionOutlined rotate={90} />}
              />
              <span className="tw-ml-2 tw-text-sm tw-h-[22px] tw-leading-[22px]">
                {selectRows[0].name}
              </span>
            </div>
          </Tag>
        ) : (
          <Button style={{ border: 0 }}>
            <AddCircleOutline fontSize={24} />
          </Button>
        )}
      </div>
      <Popup
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
        visible={visible}
        onClose={() => {
          setVisible(false);
          setSelectRows([]);
          childDepartmentsById_refetch({
            departmentByIdId: "0",
          });
        }}
      >
        <div className="tw-flex tw-justify-between tw-py-3 tw-px-2">
          <div>部门</div>
          {/* 搜索框 */}
          <div className="tw-flex tw-justify-between">
            {isSearch && (
              <SearchBar
                style={{
                  "--height": "20px",
                  width: 190,
                }}
                placeholder="搜索部门名称"
                onChange={useDebounce((value) => {
                  if (value && value !== "") {
                    departments_refetch({
                      filter: {
                        name: value,
                      },
                    });
                    return setSearchDepartment(true);
                  }

                  return setSearchDepartment(false);
                }, 500)}
              />
            )}
            <CloseOutline
              onClick={() => setVisible(false)}
              style={{ fontSize: 18 }}
              className="tw-ml-6"
            />
          </div>
        </div>
        {/* 可勾选列表 */}
        <Spin spinning={departments_loading || childDepartmentsById_loading}>
          <LeftList
            isChildepartments
            isDepartments
            dataSource={dataSource}
            selectRows={selectRows}
            refetch={(type, item) => {
              const { id } = item;
              if (type === "subordinate") {
                setSearchDepartment(false);
                childDepartmentsById_refetch({
                  departmentByIdId: id,
                });
              } else {
                // 添加选择数据
                setSelectRows([item]);
              }
            }}
          />
        </Spin>
        {/* 底部操作按钮 */}
        <div className="tw-flex tw-mt-auto">
          <Button
            onClick={() => {
              setVisible(false);
              setSelectRows([]);
              childDepartmentsById_refetch({
                departmentByIdId: "0",
              });
            }}
            block
            style={{ margin: "0 12px 12px 12px" }}
          >
            取消
          </Button>
          <Button
            style={{ margin: "0 12px 12px 12px" }}
            color="primary"
            block
            onClick={() => {
              onChange && onChange(selectRows);
              setVisible(false);
            }}
          >
            确定
          </Button>
        </div>
      </Popup>
    </div>
  );
};

export default MobileDepartmentSelect;
