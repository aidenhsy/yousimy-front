import { useUpdateAttendance } from "@/hooks/attendance.hooks";
import { useUpdateEmployee } from "@/hooks/employees.hooks";
import { useModalStore } from "@/store/modalStore";
import { DatePicker, Form, Input, Modal, TimePicker, message } from "antd";
import dayjs from "dayjs";
import React, { useMemo, useState } from "react";

interface StatisticsDayModalProps {
  open: boolean;
  refetch: () => void;
  date: any;
}

const StatisticsDayModal: React.FC<StatisticsDayModalProps> = ({
  open,
  refetch,
  date,
}) => {
  const closeModal = useModalStore((state) => state.closeModal);

  const record: any = useModalStore(
    (state) =>
      state.modals.statisticsDayModal.updateAttendanceInfo?.attendanceInfo
  );
  const clock = useModalStore(
    (state) => state.modals.statisticsDayModal.updateAttendanceInfo?.clock
  );
  const time = useModalStore(
    (state) => state.modals.statisticsDayModal.updateAttendanceInfo?.time
  );

  const { updateAttendance, updateAttendanceError } = useUpdateAttendance();

  const [selectTime, setSelectTime] = useState<any>(undefined);

  const handleOk = async () => {
    const data: any = {};
    const clockTime = dayjs(selectTime).format("HH:mm:ss");
    if (clock === "in") {
      data.clock_in_time = clockTime;
    } else {
      data.clock_out_time = clockTime;
    }
    if (record?.id) {
      await updateAttendance(record.id, {
        date,
        ...data,
      });
      if (!updateAttendanceError) {
        refetch();
        setSelectTime(undefined);
        closeModal("statisticsDayModal");
        message.success("修改成功");
      }
    }
  };

  return (
    <Modal
      title="修改打卡记录"
      width={600}
      open={open}
      onCancel={() => {
        setSelectTime(undefined);
        closeModal("statisticsDayModal");
      }}
      onOk={handleOk}
    >
      <div className="tw-mb-1">
        将{record?.employee?.name}的{clock === "in" ? "上班" : "下班"}
        记录修改为
      </div>
      <TimePicker
        value={
          selectTime
            ? dayjs(selectTime, "HH:mm:ss")
            : time
            ? dayjs(time, "HH:mm:ss")
            : undefined
        }
        onChange={(value) => setSelectTime(dayjs(value, "HH:mm:ss"))}
      />
    </Modal>
  );
};

export default StatisticsDayModal;
