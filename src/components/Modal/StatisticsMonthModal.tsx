import React, { useMemo } from "react";
import { useUpdateAttendance } from "@/hooks/attendance.hooks";
import { useModalStore } from "@/store/modalStore";
import { Form, Modal, TimePicker, message } from "antd";
import dayjs from "dayjs";

interface StatisticsDayModalProps {
  open: boolean;
  refetch: () => void;
}

const StatisticsMonthModal: React.FC<StatisticsDayModalProps> = ({
  open,
  refetch,
}) => {
  const closeModal = useModalStore((state) => state.closeModal);

  const record: any = useModalStore(
    (state) => state.modals.statisticsMonthModal.updateEmployeeAttendanceInfo
  );

  const [form] = Form.useForm();
  const { updateAttendance, updateAttendanceError } = useUpdateAttendance();

  const getMinutes = (time: string) => {
    if (!time) {
      return 0;
    }
    const [hour, minute] = time?.split(":").map(Number);
    return hour * 60 + minute;
  };

  const handleOk = async () => {
    const values = await form.validateFields();
    const data: any = {};
    const clock_in_time = dayjs(values.clock_in_time).format("HH:mm:ss");
    const clock_out_time = dayjs(values.clock_out_time).format("HH:mm:ss");
    data.clock_in_time = clock_in_time;
    data.clock_out_time = clock_out_time;

    if (record?.id) {
      await updateAttendance(record.id, data);
      if (!updateAttendanceError) {
        refetch();
        form.resetFields();
        closeModal("statisticsMonthModal");
        message.success("修改成功");
      }
    }
  };

  useMemo(() => {
    if (!record) return;
    const { clock_in_time, clock_out_time } = record;
    form.setFieldsValue({
      clock_in_time: clock_in_time
        ? dayjs(clock_in_time, "HH:mm:ss")
        : undefined,
      clock_out_time: clock_out_time
        ? dayjs(clock_out_time, "HH:mm:ss")
        : undefined,
    });
  }, [record]);

  return (
    <Modal
      title="修改打卡记录"
      width={600}
      open={open}
      onCancel={() => {
        form.resetFields();
        closeModal("statisticsMonthModal");
      }}
      onOk={handleOk}
    >
      <div style={{ padding: "20px 0" }}>
        修改{record?.name}
        {record?.date}的打卡记录
      </div>
      <Form form={form} layout="vertical">
        <Form.Item
          label="上班打卡记录为"
          name="clock_in_time"
          rules={[{ required: true, message: "请输入上班打卡时间" }]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item
          label="下班打卡记录为"
          name="clock_out_time"
          rules={[{ required: true, message: "请输入下班打卡时间" }]}
        >
          <TimePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default StatisticsMonthModal;
