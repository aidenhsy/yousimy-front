import { GetServerSidePropsContext } from "next";
import { useState } from "react";
//components
import { DashBoard } from "@/components/Layout/Dashboard";
import { DashItems } from "@/components/Layout/Dashboard/types";
import OperationBtn from "@/components/Button/OperationBtn";
//lib
import { withDashItems } from "@/hoc/withDashItems";
//antd
import { Checkbox, Modal, Space, Table, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import TopOperation from "@/components/Table/TopOperation";
import shiftsColumns from "@/components/Table/ShiftTable/columns/shiftsActionColumns";
import ShiftTable from "@/components/Table/ShiftTable";
import {
  Shift_Lists,
  Shift_Lists_Bool_Exp,
} from "@/graphql/__generated__/graphql";
import ShiftsModal from "@/components/Modal/ShiftsModal";
import { useModalStore } from "@/store/modalStore";
import { useDeleteShift } from "@/hooks/shift.hooks";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const ListPage = ({ dashItems }: { dashItems: DashItems }) => {
  const openModal = useModalStore((state) => state.openModal);
  //state
  const [filter, setFilter] = useState<Shift_Lists_Bool_Exp>({});
  // hooks
  const { deleteShift } = useDeleteShift();

  const handleDelete = async (id: string, name: string | undefined | null) => {
    Modal.confirm({
      content: (
        <div className="tw-flex tw-items-start">
          <ExclamationCircleOutlined className="tw-text-[#ff7d00] tw-text-lg tw-mr-2" />
          <p>您要删除的班次是{name}，删除后无法恢复，确认删除？</p>
        </div>
      ),
      okText: "删除",
      okButtonProps: { type: "primary", danger: true },
      icon: null,
      centered: true,
      onOk: async () => {
        try {
          await deleteShift(id);
          message.success("删除成功");
          setFilter({});
        } catch (error) {
          message.error("删除失败 有考勤组在使用中");
        }
      },
      onCancel() {
        message.info("取消删除");
      },
    });
  };

  // 只展示我的
  const onCheckBox = (value: any) => {
    setFilter(
      value.target.checked
        ? {
            created_by: {
              _eq: dashItems.userInfo.id,
            },
          }
        : {}
    );
  };
  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-p-5 tw-h-full">
        <TopOperation
          addName="新建班次"
          searchPlaceholder="搜索班次名称"
          onAdd={() =>
            openModal("shiftModal", {
              shiftInfo: { shiftId: "", action: "add" },
            })
          }
          onSearch={(value) => {
            setFilter({
              shift_name: {
                _like: `%${value}%`,
              },
            });
          }}
        >
          <Checkbox
            style={{ marginLeft: 20 }}
            className="tw-w-60"
            onChange={onCheckBox}
          >
            只展示我创建的
          </Checkbox>
        </TopOperation>
        {/* 表格 */}
        <ShiftTable
          columns={shiftsColumns({
            title: "操作",
            width: 150,
            fixed: "right",
            render: (_: any, record: Shift_Lists) => (
              <Space>
                <OperationBtn
                  onClick={() =>
                    openModal("shiftModal", {
                      shiftInfo: { shiftId: record.id, action: "view" },
                    })
                  }
                >
                  查看
                </OperationBtn>
                <OperationBtn
                  onClick={() =>
                    openModal("shiftModal", {
                      shiftInfo: { shiftId: record.id, action: "edit" },
                    })
                  }
                >
                  编辑
                </OperationBtn>
                <OperationBtn
                  onClick={() => handleDelete(record.id, record.shift_name)}
                >
                  删除
                </OperationBtn>
              </Space>
            ),
          })}
          filter={filter}
        />
      </div>

      <ShiftsModal
        open={useModalStore((state) => state.modals.shiftModal.isOpen)}
        userId={dashItems.userInfo.id}
        refetch={() => setFilter({})}
      />
    </DashBoard>
  );
};

export default ListPage;
