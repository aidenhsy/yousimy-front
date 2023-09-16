import { useEffect, useState } from "react";
//types
// components
import FormModal from "../FormModal";
import { MinBlock } from "./block";
//libs
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
//antd
import { Form, Input, TimePicker, message } from "antd";

// hook
import {
  useCreateShift,
  useShiftById,
  useUpdateShift,
} from "@/hooks/shift.hooks";
import { nanoid } from "nanoid";
interface ShiftModalProps {
  userId?: string;
  action: "add" | "edit" | "view"; //弹窗方式 新建 编辑 查看
  onCancel?: () => void; //关闭弹窗
  open: boolean; //弹窗绑定显示隐藏字段
  id?: string; // 编辑和查看时需要  ID调用接口
  onOk?: () => void; //表单提交后重新刷新列表
}
export default function ShiftModal({
  userId,
  onCancel,
  action,
  open,
  id = "",
  onOk,
}: ShiftModalProps) {
  // 初始 上班时间
  const defaultFormRule = {
    on_time: dayjs("09:00", "HH:mm"), //上班时间
    late_minutes_as_late: 0, //晚到超过？分钟迟到
    late_minutes_as_lack: 30, //晚到超过？分钟半天缺卡

    off_time: dayjs("18:00", "HH:mm"), //下班时间
    early_minutes_as_early: 0, //最早超过？早退
    early_minutes_as_lack: 30, //最早超过？半天缺卡
  };
  // state

  //hooks
  const { createShift, createShiftLoading } = useCreateShift();

  const { updateShift, updateShiftLoading } = useUpdateShift();

  const { shiftByIdData, shiftByIdLoading } = useShiftById(id);

  //from 没办法不得以any 原因：  获取详情数据类型 和创建班次时的form类型不兼容
  const [form] = Form.useForm<any>();
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
      } = shiftByIdData?.shift_lists_by_pk;
      let data = {
        shift_name,
        early_minutes_as_early,
        early_minutes_as_lack,
        late_minutes_as_lack,
        late_minutes_as_late,
        off_time: off_time ? dayjs(off_time, "HH:mm") : undefined,
        on_time: off_time ? dayjs(on_time, "HH:mm") : undefined,
      };
      form.setFieldsValue(data);
      console.log(shiftByIdData);
    }
  }, [shiftByIdData?.shift_lists_by_pk]);

  // 提交表单
  const onFinish = async (data: any) => {
    const params = {
      ...data,
      on_time: data.on_time.format("HH:mm"),
      off_time: data.off_time.format("HH:mm"),
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
      onOk?.();
      onCancel?.();
    } catch (error) {}
  };

  return (
    <FormModal
      form={form}
      open={open}
      loading={createShiftLoading || updateShiftLoading || shiftByIdLoading}
      title={
        action === "add"
          ? "新建班次"
          : action === "edit"
          ? "编辑班次"
          : "查看班次"
      }
      zIndex={1001}
      width={600}
      formProps={{
        disabled: action === "view",
        initialValues: { ...defaultFormRule },
      }}
      onCancel={() => onCancel?.()}
      onFinish={onFinish}
    >
      <Form.Item
        name="shift_name"
        label="班次名称"
        rules={[{ required: true, message: "${label}为必填" }]}
      >
        <Input
          maxLength={64}
          allowClear
          placeholder="请输入名称，不超过64个字符"
        />
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
              <MinBlock labelLeft="晚到超过" labelRight="分钟记为半天缺卡" />
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
              <MinBlock labelLeft="最早超过" labelRight="分钟记为半天缺卡" />
            </Form.Item>
          </div>
        </div>
      </div>
    </FormModal>
  );
}
