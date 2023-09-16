import React, { useEffect, useState } from "react";
import { CloseOutlined, PartitionOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";

const RightList: React.FC<{
  type?: "input" | "select";
  selectRows: any[];
  refetch: (type: string, value?: any) => void;
}> = ({ selectRows, refetch, type = "input" }) => {
  const [selectUserCount, setSelectUserCount] = useState<number>(0);
  useEffect(() => {
    if (!selectRows || !selectRows.length) {
      return setSelectUserCount(0);
    }
    // 如果是部门则加部门下的人数
    let count = 0;
    selectRows.forEach((item) => {
      if (item?.__typename === "departments") {
        count += item?.employees_aggregate?.aggregate.count;
      } else {
        count += 1;
      }
    });
    setSelectUserCount(count);
  }, [selectRows]);

  return (
    <div className="tw-flex tw-flex-1 tw-flex-col">
      <div className="tw-flex tw-items-center tw-justify-between tw-text-[#646a73] tw-box-border tw-pt-[6px] tw-pr-0 tw-pb-4 tw-pl-4">
        已选:
        {type === "input"
          ? selectUserCount !== 0 && `${selectUserCount} 名用户`
          : `(${(selectUserCount && selectUserCount) || 0})`}
        <Button onClick={() => refetch("clear")} type="link">
          清除
        </Button>
      </div>
      <div className="tw-relative tw-flex-1 tw-pr-[2px]">
        <div className="tw-overflow-visible">
          <div className="tw-box-border tw-h-[380px] tw-relative tw-w-full tw-overflow-y-auto tw-outline-none tw-will-change-transform">
            {selectRows.length !== 0 ? (
              selectRows.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="tw-w-auto tw-h-[48px] tw-max-w-[272px] tw-overflow-hidden tw-relative"
                  >
                    <div className="tw-h-[48px]  tw-w-full">
                      <div className="tw-w-full tw-pt-2 tw-pr-0 tw-pb-2 tw-pl-4 tw-cursor-pointer tw-h-full tw-box-border tw-rounded tw-flex tw-items-center hover:tw-bg-[#eff0f1]">
                        <div className="tw-flex tw-items-center tw-flex-1 tw-h-full tw-w-0">
                          {item?.__typename !== "attendance_groups" && (
                            <div className="tw-w-8 tw-h-8 tw-mr-2">
                              {item?.__typename === "departments" ? (
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
                              {item?.name}
                            </div>
                            {item?.__typename === "employees" && (
                              <div className="tw-text-[#8f959e] tw-text-xs tw-h-[18px] tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap tw-w-full">
                                {item?.department?.name}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="tw-mr-2">
                          <Button
                            type="text"
                            className="tw-text-gray-500 tw-px-1"
                            icon={<CloseOutlined />}
                            onClick={() => refetch("deleteClick", item)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="tw-flex tw-items-center tw-text-[#8f959e] tw-h-full tw-justify-center tw-w-full">
                暂无内容,请从左侧勾选
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightList;
