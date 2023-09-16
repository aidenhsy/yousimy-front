import { PartitionOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Popover, Tag } from "antd";
import React from "react";

interface TableTagRenderType {
  type: "reserve" | "reserveMember" | "memberTag";
  dataSource: any[];
}
const TableTagRender = ({ type, dataSource }: TableTagRenderType) => {
  const tagClassName =
    "tw-mb-1 tw-rounded-t-full tw-rounded-b-full tw-bg-gray-300/50 tw-text-sm";

  const renderMemberTag = (item: any) => (
    <Tag
      className="tw-mb-1 tw-rounded-t-full tw-rounded-b-full tw-bg-gray-300/50"
      typeof="default"
    >
      <div className="tw-whitespace-nowrap tw-flex">
        {item?.__typename === "Department" ? (
          <Avatar
            className="tw-bg-[#4b54e6] tw--ml-2 tw-mt-[1px]"
            size={20}
            src={<PartitionOutlined rotate={90} />}
          />
        ) : item?.avatar ? (
          <Avatar
            style={{ marginLeft: "-8px", marginTop: 1 }}
            size={20}
            src={<img src={item?.avatar} alt="avatar" />}
          />
        ) : (
          <Avatar
            style={{ marginLeft: "-8px", marginTop: 1 }}
            size={20}
            icon={<UserOutlined />}
          />
        )}
        <span className="tw-ml-2 tw-text-sm tw-h-[22px] tw-leading-[22px]">
          {item?.name}
        </span>
      </div>
    </Tag>
  );

  if (!Array.isArray(dataSource)) return null;

  if (type === "reserve") {
    const renderTags = dataSource.slice(0, 2).map((item, index) => (
      <Tag key={index} className={tagClassName}>
        {item.name}
      </Tag>
    ));

    if (dataSource.length > 2) {
      const extraTags = (
        <Popover
          content={dataSource.slice(2).map((item, index) => (
            <Tag key={index} className={tagClassName}>
              {item.name}
            </Tag>
          ))}
        >
          <Tag className={tagClassName}>{`+${dataSource.length - 2}`}</Tag>
        </Popover>
      );

      return (
        <div className="flex">
          {renderTags}
          {extraTags}
        </div>
      );
    }

    return <div className="flex">{renderTags}</div>;
  }

  if (type === "reserveMember") {
    const renderMembers = dataSource
      .slice(0, 2)
      .map((item, index) => (
        <React.Fragment key={index}>{renderMemberTag(item)}</React.Fragment>
      ));

    if (dataSource.length > 2) {
      const extraTag = (
        <Popover
          content={dataSource
            .slice(2)
            .map((item) => item.name)
            .join(", ")}
        >
          <Tag
            className="tw-mb-1 tw-rounded-t-full tw-rounded-b-full tw-bg-gray-300/50"
            typeof="default"
          >
            {`+${dataSource.length - 2}`}
          </Tag>
        </Popover>
      );

      return (
        <div className="tw-flex">
          {renderMembers}
          {extraTag}
        </div>
      );
    }

    return <div className="tw-flex">{renderMembers}</div>;
  }

  if (type === "memberTag") {
    return (
      <div className="tw-flex tw-items-center tw-text-gray-400">
        {dataSource.map((item, index) => (
          <React.Fragment key={index}>
            {renderMemberTag(item.label)}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return null;
};

export default TableTagRender;
