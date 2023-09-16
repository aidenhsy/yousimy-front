import { useEffect, useState } from "react";
//types
import { UsersFilter } from "@/gql/graphql";
// components
import FormModal from "../FormModal";
import ManageRange from "./ManageRangeForm";
import DebounceSelect from "@/components/Modal/RolesModal/UserDebounceSelect";
//libs
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
//antd
import { Avatar, Checkbox, Form, Input, Radio, message } from "antd";
// hook
import {
  useCreateShift,
  useUpdateShift,
  useViewShift,
} from "@/lib/hooks/graphql/shift.hook";

import { useUsers } from "@/lib/hooks/graphql/user.hook";

// import MentionsInput from "@/components/Input/MentionsInput";
interface ShiftModalProps {
  action: "add" | "edit" | "view"; //弹窗方式 新建 编辑 查看
  onCancel?: () => void; //关闭弹窗
  open: boolean; //弹窗绑定显示隐藏字段
  id?: string; // 编辑和查看时需要  ID调用接口
  onOk?: () => void; //表单提交后重新刷新列表
}
export default function ShiftModal({
  onCancel,
  action,
  open,
  id = "",
  onOk,
}: ShiftModalProps) {
  // state
  const [filter, setFilter] = useState<UsersFilter>({
    status: [2],
    search_term: "",
  });
  //hooks
  const { users, users_loading, users_refetch } = useUsers(20, 0, filter);
  const { createShiftFn, create_loading } = useCreateShift();
  const { updateShiftFn, update_loading } = useUpdateShift();
  const { shift_data, shift_loading } = useViewShift(id);

  //from 没办法不得以any 原因：  获取详情数据类型 和创建班次时的form类型不兼容
  const [form] = Form.useForm<any>();
  useEffect(() => {
    if (shift_data) {
      let data = {
        shift_name: shift_data.shift_name,
        no_need_off: shift_data.no_need_off,
        // ...shift_data.punch_time_rules,
        // on_time: shift_data.punch_time_rules?.on_time
        //   ? dayjs(shift_data.punch_time_rules?.on_time, "HH:mm")
        //   : undefined,
        // off_time: shift_data.punch_time_rules?.off_time
        //   ? dayjs(shift_data.punch_time_rules?.off_time, "HH:mm")
        //   : undefined,
      };
      form.setFieldsValue(data);
    }
  }, [shift_data]);

  // 提交表单
  const onFinish = async (data: any) => {
    let params = {
      ...data,
      on_time: data.on_time.format("HH:mm"),
      off_time: data.off_time.format("HH:mm"),
    };
    try {
      if (action === "add") {
        await createShiftFn({ ...params });
        message.success("创建成功");
      }
      if (action === "edit") {
        await updateShiftFn(id, params);
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
      loading={create_loading || update_loading || shift_loading}
      title={action === "add" ? "新增管理员" : "编辑管理员"}
      formProps={{
        disabled: action === "view",
      }}
      onCancel={() => onCancel?.()}
      onFinish={onFinish}
    >
      <Form.Item
        // name="name"
        label="管理员"
        rules={[{ required: true, message: "${label}为必填" }]}
      >
        <DebounceSelect
          loading={users_loading}
          options={users?.items.map((item: any) => ({
            value: item.id,
            label: {
              avatar: item.avatar,
              department: item.department?.name,
              name: item.name,
            },
          }))}
          onSearch={(value) => setFilter({ ...filter, search_term: value })}
          placeholder="搜索你管理范围内的成员"
        />
      </Form.Item>

      <Form.Item
        label="管理范围"
        name="rules"
        rules={[{ required: true, message: "${label}为必填" }]}
      >
        <ManageRange
          options={users?.items.map((item: any) => ({
            value: item.id,
            label: item.name,
          }))}
        />
      </Form.Item>
    </FormModal>
  );
}
