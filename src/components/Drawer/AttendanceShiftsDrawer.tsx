import React, { useEffect, useState } from "react";
import { Button, Checkbox, Drawer, Input, Space } from "antd";
import { Shift_Lists_Bool_Exp } from "@/graphql/__generated__/graphql";
import { useDrawerStore } from "@/store/drawerStore";
import ShiftTable from "../Table/ShiftTable";
import shiftsColumns from "../Table/ShiftTable/columns/shiftsColumns";
import {
  useCreateAttendanceShiftGroupShifts,
  useDeleteAttendanceShiftGroupShifts,
} from "@/hooks/attendance.hooks";
import { useDebounce } from "@/lib/hooks";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import ShiftsModal from "../Modal/ShiftsModal";
import { useModalStore } from "@/store/modalStore";

interface AttendanceShiftsType {
  open: boolean;
  userId: string;
  selected: any;
  groupId: string;
}

const AttendanceShifts: React.FC<AttendanceShiftsType> = ({
  open,
  userId,
  selected,
  groupId,
}) => {
  const closeDrawer = useDrawerStore((state) => state.closeDrawer);
  const openModal = useModalStore((state) => state.openModal);

  const [filter, setFilter] = useState<Shift_Lists_Bool_Exp>({});
  const [selectedRows, setSelectedRows] = useState<any>([]);

  useEffect(() => {
    if (selected) {
      setSelectedRows(selected);
    }
  }, [selected]);
  const {
    deleteAttendanceShiftGroupShifts,
    deleteAttendanceShiftGroupShiftsLoading,
  } = useDeleteAttendanceShiftGroupShifts();
  const {
    createAttendanceShiftGroupShifts,
    createAttendanceShiftGroupShiftsLoading,
  } = useCreateAttendanceShiftGroupShifts();

  const handleClick = async () => {
    try {
      const data: any = selectedRows.map((item: any) => ({
        attendance_group_id: groupId,
        shift_list_id: item,
      }));

      await deleteAttendanceShiftGroupShifts({
        attendance_group_id: {
          _eq: groupId,
        },
      });
      await createAttendanceShiftGroupShifts(data);
      closeDrawer("attendanceShiftsDrawer");
      setFilter({});
    } catch (error) {}
  };
  return (
    <Drawer
      keyboard={false}
      title="考勤班次"
      width={680}
      footer={
        <Space>
          <Button onClick={() => closeDrawer("attendanceShiftsDrawer")}>
            取消
          </Button>
          <Button
            type="primary"
            loading={
              deleteAttendanceShiftGroupShiftsLoading ||
              createAttendanceShiftGroupShiftsLoading
            }
            onClick={handleClick}
          >
            确认
          </Button>
        </Space>
      }
      footerStyle={{
        display: "flex",
        justifyContent: "end",
      }}
      open={open}
      onClose={() => closeDrawer("attendanceShiftsDrawer")}
    >
      <div className="tw-flex tw-mb-4 tw-items-center">
        <Input
          placeholder="搜索班次名称"
          className="tw-w-60 tw-mr-4"
          onChange={useDebounce(({ target: { value } }) => {
            setFilter(
              value && value !== ""
                ? { shift_name: { _like: `%${value}%` } }
                : {}
            );
          }, 500)}
          prefix={<SearchOutlined />}
        />
        <Checkbox
          onChange={(e) => {
            const checked = e.target.checked;
            setFilter(
              checked
                ? {
                    created_by: {
                      _eq: userId,
                    },
                  }
                : {}
            );
          }}
        >
          只展示我创建的班次
        </Checkbox>
        <Button
          className="tw-ml-auto"
          icon={<PlusOutlined />}
          onClick={() =>
            openModal("shiftModal", {
              shiftInfo: { shiftId: "", action: "add" },
            })
          }
        >
          新建班次
        </Button>
      </div>
      <ShiftTable
        columns={shiftsColumns()}
        filter={filter}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />
      <ShiftsModal
        open={useModalStore((state) => state.modals.shiftModal.isOpen)}
        userId={userId}
        refetch={() => setFilter({})}
      />
    </Drawer>
  );
};

export default AttendanceShifts;
