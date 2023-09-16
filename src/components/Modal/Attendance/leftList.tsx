import React from "react";
import { classNames } from "@/lib/tools/classNames";
import { Avatar, Button, Checkbox } from "antd";
import { PartitionOutlined } from "@ant-design/icons";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const LeftList: React.FC<{
  dataSource: any;
  isDepartments: boolean;
  isChildepartments?: boolean;
  selectRows: any[];
  refetch: (type: string, value: any) => void;
}> = ({
  isChildepartments = false,
  dataSource,
  isDepartments,
  selectRows,
  refetch,
}) => {
  return (
    <div
      className={classNames(
        `tw-h-[${(dataSource?.length || 1) * 48}px]`,
        "tw-w-auto tw-overflow-auto tw-relative"
      )}
    >
      {Array.isArray(dataSource) &&
        dataSource.map((item, index) => {
          const { id, name, __typename, child_departments } = item;
          return (
            <div
              onClick={() => {
                if (__typename !== "employees") {
                  return;
                }
                refetch(__typename, item);
              }}
              className="tw-h-[48px]  tw-w-full"
              key={index}
            >
              <div
                className={classNames(
                  __typename === "employees" ? "tw-cursor-pointer" : "",
                  "tw-w-full tw-pt-2 tw-pr-0 tw-pb-2 tw-pl-4  tw-h-full tw-box-border tw-rounded tw-flex tw-items-center hover:tw-bg-[#eff0f1]"
                )}
              >
                <div className="tw-flex tw-items-center tw-flex-1 tw-h-full tw-w-0">
                  {(__typename === "employees" || isDepartments) && (
                    <Checkbox
                      onChange={(e: CheckboxChangeEvent) =>
                        refetch(__typename, item)
                      }
                      checked={
                        selectRows.findIndex((one) => one?.id === item?.id) !==
                        -1
                      }
                      value={id}
                      className="tw-mr-2"
                    />
                  )}
                  {/* 根据type切换部门列表和用户列表渲染 */}
                  {__typename !== "attendance_groups" && (
                    <div className="tw-w-8 tw-h-8 tw-mr-2">
                      {__typename === "departments" ? (
                        <Avatar
                          style={{ background: "#4b54e6" }}
                          size={32}
                          src={<PartitionOutlined rotate={90} />}
                        />
                      ) : (
                        <Avatar size={32} src={item?.avatar} />
                      )}
                    </div>
                  )}
                  <div className="tw-flex-1 tw-max-w-[280px] tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap">
                    <div className="tw-w-full tw-whitespace-nowrap tw-text-ellipsis tw-overflow-hidden tw-text-[#1f2329] tw-text-sm">
                      {name}
                    </div>
                  </div>
                </div>
                {isChildepartments ? (
                  child_departments && child_departments.length !== 0 ? (
                    <div className="tw-mr-5">
                      <Button
                        disabled={
                          selectRows.findIndex(
                            (one) => one?.id === item?.id
                          ) !== -1
                        }
                        onClick={() =>
                          refetch("subordinate", {
                            id: item?.id,
                            name: item?.name,
                          })
                        }
                        className={classNames(
                          selectRows.findIndex(
                            (one) => one?.id === item?.id
                          ) === -1
                            ? " hover:tw-text-[#3370FF] hover:tw-bg-blue-500/[0.1]"
                            : "",
                          "tw-flex tw-items-center tw-text-[#1677ff] tw-px-1"
                        )}
                        type="link"
                      >
                        下级
                      </Button>
                    </div>
                  ) : null
                ) : (
                  __typename === "departments" && (
                    <div className="tw-mr-5">
                      <Button
                        disabled={
                          selectRows.findIndex(
                            (one) => one?.id === item?.id
                          ) !== -1
                        }
                        onClick={() =>
                          refetch("subordinate", {
                            id: item?.id,
                            name: item?.name,
                          })
                        }
                        className={classNames(
                          selectRows.findIndex(
                            (one) => one?.id === item?.id
                          ) === -1
                            ? " hover:tw-text-[#3370FF] hover:tw-bg-blue-500/[0.1]"
                            : "",
                          "tw-flex tw-items-center tw-text-[#1677ff] tw-px-1"
                        )}
                        type="link"
                      >
                        下级
                      </Button>
                    </div>
                  )
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default LeftList;
