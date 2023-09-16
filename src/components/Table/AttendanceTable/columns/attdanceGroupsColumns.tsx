import TableTagRender from "@/components/Tag/TableTagRender";
import { Attendance_Groups } from "@/graphql/__generated__/graphql";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Popover, Tag } from "antd";
import { ColumnsType } from "antd/es/table";

const attdanceGroupsColumns = (action: any): ColumnsType<any> => {
  const memberTag = (item: { [key: string]: any }) => {
    return (
      <Tag
        className=" tw-rounded-t-full tw-rounded-b-full  tw-bg-gray-300/50"
        typeof="default"
      >
        <div className=" tw-whitespace-nowrap tw-flex">
          {item?.employee?.avatar ? (
            <Avatar
              style={{ marginTop: 1, marginLeft: "-8px" }}
              size={20}
              src={<img src={item?.employee?.avatar} alt="avatar" />}
            />
          ) : (
            <Avatar
              style={{ marginTop: 1, marginLeft: "-8px" }}
              size={20}
              icon={<UserOutlined />}
            />
          )}
          <span className="tw-ml-2 tw-text-sm tw-h-[22px] tw-leading-[22px]">
            {item?.employee?.name}
          </span>
        </div>
      </Tag>
    );
  };

  return [
    {
      title: "考勤组名称",
      dataIndex: "name",
      fixed: "left",
    },
    {
      title: "考勤时间",
      dataIndex: "attendance_group_shifts",
      width: 330,
      render: (_: any, record: Attendance_Groups) => (
        <div>
          {_?.filter((item: any) => !!item?.shift_list?.on_time).map(
            (el: any) => (
              <div key={el?.shift_list?.id}>
                {el?.shift_list?.shift_name} : {el?.shift_list?.on_time} -{" "}
                {el?.shift_list?.off_time}
              </div>
            )
          )}
        </div>
      ),
    },

    {
      title: "考勤部门",
      dataIndex: "departments",
      render: (val: any) => {
        return <TableTagRender type="reserve" dataSource={val} />;
      },
    },
    {
      title: "人数",
      width: 150,
      dataIndex: "departments",
      render: (val: any, record: any) => {
        if (val.length > 0) {
          let employeeLength = 0;
          for (let dept of val) {
            employeeLength += dept.employees_aggregate.aggregate.count;
          }
          return employeeLength;
        } else {
          return 0;
        }
      },
    },
    {
      title: "主负责人",
      dataIndex: "attendance_group_leaders",
      width: 150,
      render: (val: any) => {
        if (!val || !val.length) {
          return null;
        }
        return (
          <div className="tw-flex">
            {
              <Popover
                content={
                  <>
                    {val.map((item: any, index: number) => {
                      return <div key={index}>{memberTag(item)}</div>;
                    })}
                  </>
                }
              >
                <Tag
                  className=" tw-mb-1 tw-rounded-t-full tw-rounded-b-full  tw-bg-gray-300/50"
                  typeof="default"
                >
                  {"+" + val.length}
                </Tag>
              </Popover>
            }
          </div>
        );
      },
    },
    {
      ...action,
    },
  ];
};

export default attdanceGroupsColumns;
