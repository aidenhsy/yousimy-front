//external library
import { Button, Input, Space, Modal, message } from "antd";
import {
  ExclamationCircleOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

//types
import { GetServerSidePropsContext } from "next";

// components
import { DashBoard } from "@/components/Layout/Dashboard";
import { DashItems } from "@/components/Layout/Dashboard/types";

//own libraries
import { withDashItems } from "../../../../hoc/withDashItems";
import Link from "next/link";
import { useDebounce } from "@/lib/hooks";
import { useDeleteAttendanceShiftGroupById } from "@/hooks/attendance.hooks";
import AttendanceTable from "@/components/Table/AttendanceTable";
import { useState } from "react";
import {
  Attendance_Groups,
  Attendance_Groups_Bool_Exp,
} from "@/graphql/__generated__/graphql";
import attdanceGroupsColumns from "@/components/Table/AttendanceTable/columns/attdanceGroupsColumns";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const ListPage = ({ dashItems }: { dashItems: DashItems }) => {
  // state
  const [filter, setFilter] = useState<Attendance_Groups_Bool_Exp>({});

  // hooks
  const router = useRouter();

  const { deleteAttendanceShiftGroupById } =
    useDeleteAttendanceShiftGroupById();

  const handleDelete = (id: string) => {
    Modal.confirm({
      content: (
        <div className="tw-flex tw-items-start">
          <ExclamationCircleOutlined className="tw-text-[#ff7d00] tw-text-lg tw-mr-2" />
          <p>删除后无法恢复，确认删除？</p>
        </div>
      ),
      okText: "删除",
      okButtonProps: { type: "primary", danger: true },
      icon: null,
      centered: true,
      onOk: async () => {
        try {
          await deleteAttendanceShiftGroupById(id);
          setFilter({});
        } catch (error) {
          message.error("删除失败");
        }
      },
      onCancel() {
        message.info("取消删除");
      },
    });
  };

  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-p-5">
        {/* 表格头 */}
        <div className="tw-mb-4 tw-flex tw-justify-between">
          <div className="tw-flex tw-w-[220px] tw-justify-between">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => router.push("/dashboard/attendance/group/detail")}
            >
              新建考勤组
            </Button>
          </div>
          <div className="tw-flex tw-justify-between">
            <Input
              className="tw-w-[308px]"
              placeholder="搜索考勤组名称"
              prefix={<SearchOutlined />}
              onChange={useDebounce(({ target: { value } }) => {
                setFilter(
                  value && value !== ""
                    ? {
                        name: {
                          _like: `%${value}%`,
                        },
                      }
                    : {}
                );
              }, 500)}
            />
          </div>
        </div>
        {/* 数据表格 */}
        <AttendanceTable
          columns={attdanceGroupsColumns({
            title: "操作",
            dataIndex: "action",
            fixed: "right",
            width: 150,
            render: (val: any, record: Attendance_Groups) => {
              return (
                <Space>
                  <Link
                    href={`/dashboard/attendance/group/detail/${record.id}`}
                  >
                    详情
                  </Link>
                  <Link
                    href={`/dashboard/attendance/group/arrange/${record.id}`}
                  >
                    班次
                  </Link>
                  <a onClick={() => handleDelete(record.id)}>删除</a>
                </Space>
              );
            },
          })}
          filter={filter}
          scroll={{
            x: 1200,
          }}
        />
      </div>
    </DashBoard>
  );
};
export default ListPage;
