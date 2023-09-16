import { DepartureTypeMap } from "@/lib/mapping";
import { useModalStore } from "@/store/modalStore";
import {
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Select,
  Spin,
  TimePicker,
  message,
} from "antd";
import React, { useEffect, useMemo } from "react";
import dayjs from "dayjs";

import { MinBlock } from "./ShiftModal/block";
import {
  useCreateShift,
  useShiftById,
  useUpdateShift,
} from "@/hooks/shift.hooks";
import { nanoid } from "nanoid";

const shiftModalTitleActions: any = {
  add: "新建班次",
  edit: "编辑班次",
  view: "查看班次",
};

interface ShiftModalType {
  open: boolean;
  userId: string;
  refetch: () => void;
}

const ShiftsModal: React.FC<ShiftModalType> = ({ open, userId, refetch }) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const id: any = useModalStore(
    (state) => state.modals.shiftModal.shiftInfo?.shiftId
  );

  const action: any = useModalStore(
    (state) => state.modals.shiftModal.shiftInfo?.action
  );
  const [form] = Form.useForm();

  const { createShift } = useCreateShift();

  const { updateShift } = useUpdateShift();

  const { shiftByIdData, shiftByIdLoading } = useShiftById(id);

  useEffect(() => {
    if (shiftByIdData?.shift_lists_by_pk) {
      const {
        shift_name,
        early_minutes_as_early,
        early_minutes_as_lack,
        late_minutes_as_lack,
        late_minutes_as_late,
        off_time,
        on_time,
        scheduled_length_day,
        scheduled_length_hour,
      } = shiftByIdData?.shift_lists_by_pk;
      let data = {
        shift_name,
        early_minutes_as_early,
        early_minutes_as_lack,
        late_minutes_as_lack,
        late_minutes_as_late,
        off_time: off_time ? dayjs(off_time, "HH:mm") : undefined,
        on_time: off_time ? dayjs(on_time, "HH:mm") : undefined,
        scheduled_length_day,
        scheduled_length_hour,
      };
      form.setFieldsValue(data);
    }
  }, [shiftByIdData?.shift_lists_by_pk]);

  useMemo(() => {
    if (action === "add") {
      // 创建班次默认form模版值
      form.setFieldsValue({
        on_time: dayjs("09:00", "HH:mm"),
        late_minutes_as_late: 0,
        late_minutes_as_lack: 30,
        off_time: dayjs("18:00", "HH:mm"),
        early_minutes_as_early: 0,
        early_minutes_as_lack: 30,
        scheduled_length_day: 0,
        scheduled_length_hour: 0,
      });
    }
  }, [action]);

  const handleOk = async () => {
    const values = await form.validateFields();
    const params = {
      ...values,
      on_time: values.on_time.format("HH:mm"),
      off_time: values.off_time.format("HH:mm"),
    };
    try {
      if (action === "add") {
        await createShift({
          id: nanoid(),
          created_by: userId,
          updated_at: new Date(),
          ...params,
        });
        message.success("创建成功");
      }
      if (action === "edit" && id) {
        await updateShift(id, params);
        message.success("修改成功");
      }
      form.resetFields();
      closeModal("shiftModal");
      refetch();
    } catch (error) {}
  };
  return (
    <Modal
      title={shiftModalTitleActions[action]}
      open={open}
      width={600}
      onCancel={() => {
        form.resetFields();
        closeModal("shiftModal");
      }}
      onOk={handleOk}
    >
      <Spin spinning={shiftByIdLoading}>
        <Form
          style={{ padding: 20 }}
          disabled={action === "view"}
          form={form}
          layout="vertical"
        >
          <Form.Item
            name="shift_name"
            label="班次名称"
            rules={[{ required: true, message: "${label}为必填" }]}
          >
            <Input
              maxLength={64}
              allowClear
              placeholder="请输入名称, 不超过64个字符"
            />
          </Form.Item>
          <Form.Item
            name="scheduled_length_day"
            label="班型"
            rules={[{ required: true, message: "${label}为必填" }]}
          >
            <Radio.Group>
              <Radio value={0.5}>半天</Radio>
              <Radio value={1}>全天</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="scheduled_length_hour"
            label="班内时长"
            rules={[{ required: true, message: "${label}为必填" }]}
          >
            <InputNumber min={0} />
          </Form.Item>
          {/* 考勤时间 */}
          <div className="tw-bg-[#f3f5f6] tw-p-4 tw-rounded tw-mb-4">
            <div className="tw-flex tw-justify-between tw-mb-4">
              <div>
                <p className="tw-mb-2">上班时间</p>
                <Form.Item noStyle name="on_time">
                  <TimePicker format={"HH:mm"} allowClear={false} />
                </Form.Item>
              </div>
              <div>
                <Form.Item noStyle name="late_minutes_as_late">
                  <MinBlock labelLeft="晚到超过" labelRight="分钟记为迟到" />
                </Form.Item>
                <Form.Item noStyle name="late_minutes_as_lack">
                  <MinBlock
                    labelLeft="晚到超过"
                    labelRight="分钟记为半天缺卡"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="tw-flex tw-justify-between tw-mb-4">
              <div>
                <p className="tw-mb-2">下班时间</p>
                <div className="tw-flex tw-items-center">
                  <Form.Item noStyle name="off_time">
                    <TimePicker format={"HH:mm"} allowClear={false} />
                  </Form.Item>
                </div>
              </div>
              <div>
                <Form.Item noStyle name="early_minutes_as_early">
                  <MinBlock labelLeft="最早超过" labelRight="分钟记为早退" />
                </Form.Item>
                <Form.Item noStyle name="early_minutes_as_lack">
                  <MinBlock
                    labelLeft="最早超过"
                    labelRight="分钟记为半天缺卡"
                  />
                </Form.Item>
              </div>
            </div>
          </div>
        </Form>
      </Spin>
    </Modal>
  );
};

export default ShiftsModal;
