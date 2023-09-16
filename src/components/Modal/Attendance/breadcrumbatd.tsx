import React from "react";
import { Breadcrumb, Popover, Tooltip } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const Breadcrumbatd: React.FC<{
  refetch: (value?: any) => void;
  currentBread?: { id: string; name: string }[];
  previousBread?: any;
}> = ({ refetch, currentBread, previousBread }) => {
  // 部门面包屑
  const itemsBread = [
    {
      title: (
        <span
          className="hover:tw-bg-[#3370FF]/[0.1] hover:tw-text-[#3370FF] tw-cursor-pointer tw-p-1 tw-rounded"
          onClick={() =>
            refetch({
              data: {
                limit: 10,
                offset: 0,
                where: {
                  id: {
                    _eq: "od-6eed5b2c7fe5a4126becd35c5b66c57f",
                  },
                },
              },
              currentData: [],
              previousObj: {
                id: "od-6eed5b2c7fe5a4126becd35c5b66c57f",
                name: "优思集团",
              },
            })
          }
        >
          全部
        </span>
      ),
    },
    {
      title: (
        <Popover
          content={
            <Breadcrumb
              separator=">"
              items={currentBread?.map((item) => ({
                title: (
                  <span
                    className="hover:tw-bg-[#3370FF]/[0.1] hover:tw-text-[#3370FF] tw-cursor-pointer tw-p-1 tw-rounded tw-text-gray-500"
                    onClick={() => {
                      // 如果点击的是当前面包屑则不删除
                      if (item.id !== previousBread.id) {
                        // 点击删除对应面包屑
                        const data = [...currentBread];
                        const index = data.findIndex(
                          (one) => one.id === item.id
                        );
                        data.splice(index, data.length - index);
                        refetch({
                          data: {
                            limit: 10,
                            offset: 0,
                            where: {
                              parent_department_id: {
                                _eq: item.id,
                              },
                            },
                          },
                          currentData: data,
                          previousObj: {
                            id: item.id,
                            name: item.name,
                          },
                        });
                      }
                    }}
                  >
                    {item.name}
                  </span>
                ),
              }))}
            />
          }
        >
          <EllipsisOutlined
            style={{ fontSize: 20 }}
            className="tw-text-[#646a73] tw-px-1 hover:tw-rounded hover:tw-bg-[#3370FF]/[0.1] hover:tw-text-[#3370ff] hover:tw-cursor-pointer"
          />
        </Popover>
      ),
    },
    {
      title: (
        <Tooltip
          title={previousBread?.name?.length > 10 ? previousBread?.name : ""}
        >
          <span className="tw-inline-block tw-text-ellipsis tw-max-w-[150px] tw-overflow-hidden tw-whitespace-nowrap">
            {previousBread?.name || "优思集团"}
          </span>
        </Tooltip>
      ),
    },
  ];

  return (
    <Breadcrumb
      separator=">"
      items={
        currentBread?.length
          ? itemsBread
          : itemsBread.splice(1, 1) && itemsBread
      }
    />
  );
};

export default Breadcrumbatd;
