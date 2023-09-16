import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useReducer,
  useState,
} from "react";
//types
import type { Dayjs } from "dayjs";
// components
import FormModal from "../FormModal";
import FilterRadio from "@/components/Radio/FilterRadio";
import { HourBlock, MinBlock, ClockBlock } from "./block";
//libs
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
//antd
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Tag,
  TimePicker,
  Tooltip,
} from "antd";
import {
  DownOutlined,
  InfoCircleOutlined,
  PlusOutlined,
  RestOutlined,
  UpOutlined,
} from "@ant-design/icons";
interface RuleType {
  rule1: number;
  rule2: number;
}
interface KqType {
  clock_on_hhmm: string; //上班时间
  late_on_mins: number; //晚到超过？分钟迟到
  serious_late_on_mins: number; //晚到超过？分钟严重迟到
  latest_on_mins: number; //晚到超过？分钟半天缺卡
  earliest_on_mins: number; //最早可提前？打卡

  clock_off_hhmm: string; //下班时间
  early_off_mins: number; //最早超过？早退
  earliest_off_mins: number; //最早超过？半天缺卡
  latest_off_mins: number; // 最晚延后？打卡
}
interface RestTimeType {
  begin_hhmm: string; //考勤开始时间
  end_hhmm: string; //考勤结束时间
}
interface bcForm {
  id: string;
  name: string; //班次名称
  shift_type: string; // 考勤方式
  no_need_clock_out: boolean; //下班免打卡
  rest_time_rule: RestTimeType[]; //休息时间  可以只是对象
  last_off_last_on_rule: RuleType[]; // 考勤规则
  shift_rule_info: KqType[]; //上班时间 及规则
}
interface ShiftModalProps {
  onCancel?: () => void; //关闭弹窗
}
// 时间数组
const HOURS = new Array(24).fill(0).map((item, index) => index);
// 分钟数组
const MINS = new Array(60).fill(0).map((item, index) => index);
export type ModalRefType = {
  open: (value: "add" | "edit" | "view", id?: string) => void;
  close: () => void;
};
const ShiftModal = forwardRef<ModalRefType, ShiftModalProps>(
  ({ onCancel }, ref) => {
    useImperativeHandle(ref, () => ({
      open: (value, id?: string) => {
        console.log(value, id);
        setAction(value);
        setOpen(true);
      },
      close: () => {
        setOpen(false);
      },
    }));
    // 初始 上班时间
    const defaultFormRule = {
      clock_on_hhmm: dayjs("09:00", "HH:mm"), //上班时间
      late_on_mins: 0, //晚到超过？分钟迟到
      serious_late_on_mins: 15, //晚到超过？分钟严重迟到
      latest_on_mins: 30, //晚到超过？分钟半天缺卡
      earliest_on_mins: 60, //最早可提前？打卡
      clock_off_hhmm: dayjs("18:00", "HH:mm"), //下班时间
      early_off_mins: 0, //最早超过？早退
      earliest_off_mins: 30, //最早超过？半天缺卡
      latest_off_mins: 480, // 最晚延后？打卡
    };
    // 上班次数发生变化 修改formlist初始值
    const reducer = (state: any, action: string) => {
      switch (action) {
        case "1":
          return [defaultFormRule];
        case "2":
          return [
            {
              ...defaultFormRule,
              clock_off_hhmm: dayjs("11:30", "HH:mm"),
              earliest_on_mins: 60,
              latest_off_mins: 60,
            },
            {
              ...defaultFormRule,
              clock_on_hhmm: dayjs("13:30", "HH:mm"),
              clock_off_hhmm: dayjs("18:00", "HH:mm"),
              earliest_on_mins: 30,
            },
          ];
        case "3":
          return [
            {
              ...defaultFormRule,
              clock_off_hhmm: dayjs("11:30", "HH:mm"),
              latest_off_mins: 60,
            },
            {
              ...defaultFormRule,
              clock_on_hhmm: dayjs("13:30", "HH:mm"),
              clock_off_hhmm: dayjs("15:30", "HH:mm"),
              earliest_on_mins: 30,
              latest_off_mins: 60,
            },
            {
              ...defaultFormRule,
              clock_on_hhmm: dayjs("19:30", "HH:mm"),
              clock_off_hhmm: dayjs("20:00", "HH:mm"),
              earliest_on_mins: 30,
            },
          ];
        default:
          return [defaultFormRule];
      }
    };
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState<"add" | "edit" | "view">("add");
    const [form] = Form.useForm<bcForm>();
    const [moreRule, setMoreRule] = useState(false);
    const [wzwd, setWzwd] = useState(false); //晚走晚到
    const [yzcd, setYzcd] = useState(false); //严重迟到
    const [sbcs, setSbcs] = useState<string>("1"); // 上班次数
    const [initRuleInfo, dispatch] = useReducer(reducer, [defaultFormRule]); // 上班时间的formlist 初始值
    const shift_type = Form.useWatch("shift_type", form); //1固定  2弹性
    const rules = Form.useWatch("last_off_last_on_rule", form);
    const shiftRules = Form.useWatch("shift_rule_info", form);

    // 上下班次数 临时数据
    const workCount = [
      {
        value: "1",
        label: "1次上班",
      },
      {
        value: "2",
        label: "2次上班",
      },
      {
        value: "3",
        label: "3次上班",
      },
    ];
    const onFinish = (data: bcForm) => {
      // console.log(data);
      // console.log(dayjs(data.xbsj).diff(data.sbsj, "hour"));
    };
    // 上班次数发生变化 上班次数暂时不需要
    // const onCsChange = async (value: string) => {
    //   if (value! == "1") {
    //     form.setFieldValue("shift_type", "1");
    //   }

    //   setSbcs(value);
    //   await dispatch(value);
    //   form.resetFields(["shift_rule_info", "shift_type"]);
    // };
    // 可选日期
    const disabledTime = (now: Dayjs, type: "start" | "end") => {
      let hour = now.get("hour");
      let min = now.get("minute");
      return {
        disabledHours: () => HOURS.slice(0, hour),
        disabledMinutes: (selectedHour: number) => {
          if (selectedHour <= hour) {
            return MINS.slice(0, min + 1);
          }
          return [];
        },
      };
    };
    return (
      <FormModal
        form={form}
        open={open}
        loading={false}
        title={
          action === "add"
            ? "新建班次"
            : action === "edit"
            ? "编辑班次"
            : "查看班次"
        }
        zIndex={1001}
        width={840}
        formProps={{
          disabled: action === "view",
          initialValues: { shift_rule_info: initRuleInfo, shift_type: "1" },
        }}
        onCancel={() => onCancel?.()}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="班次名称"
          rules={[{ required: true, message: "${label}为必填" }]}
        >
          <Input
            maxLength={64}
            allowClear
            placeholder="请输入名称，不超过64个字符"
          />
        </Form.Item>
        {/* 上班次数暂时不需要 */}
        {/* <Form.Item label="上班次数">
            <FilterRadio options={workCount} value={sbcs} onChange={onCsChange} />
          </Form.Item> */}
        <Form.Item label="考勤方式" name="shift_type">
          <Radio.Group>
            <Radio value="1">固定时间考勤</Radio>
            {/* 弹性考核暂时关闭 sbcs !== "1" */}
            <Radio value="2" disabled={true}>
              弹性考勤
            </Radio>
          </Radio.Group>
        </Form.Item>
        {/* 考勤时间 */}
        <div className="tw-bg-[#f3f5f6] tw-p-4 tw-rounded tw-mb-4">
          {/* 工作时长 */}
          <p>
            工作时长：
            {Math.floor(
              shiftRules?.reduce((pre, cur) => {
                return (
                  pre +
                  dayjs(cur.clock_off_hhmm).diff(cur.clock_on_hhmm, "minutes")
                );
              }, 0) / 60
            )}
            小时
            {shiftRules?.reduce((pre, cur) => {
              return (
                pre +
                dayjs(cur.clock_off_hhmm).diff(cur.clock_on_hhmm, "minutes")
              );
            }, 0) % 60}
            分钟
          </p>
          <Divider dashed />
          {/* 固定考核list和弹性list */}
          {shift_type === "1" && (
            <Form.List name="shift_rule_info">
              {(fields) => (
                <>
                  {fields.map(({ name }) => (
                    <div key={name}>
                      <div className="tw-flex tw-justify-between tw-mb-4">
                        <div>
                          <p className="tw-mb-2">上班时间</p>
                          <div className="tw-flex tw-items-center">
                            <Form.Item noStyle name={[name, "clock_on_hhmm"]}>
                              {name == 2 && (
                                <TimePicker
                                  format={"HH:mm"}
                                  disabledTime={() =>
                                    disabledTime(
                                      dayjs(
                                        shiftRules[name - 1].clock_off_hhmm
                                      ),
                                      "start"
                                    )
                                  }
                                />
                              )}
                              {name !== 2 && <TimePicker format={"HH:mm"} />}
                            </Form.Item>
                            {((name > 0 &&
                              dayjs(shiftRules[name].clock_on_hhmm).isBefore(
                                dayjs(shiftRules[name - 1].clock_on_hhmm)
                              )) ||
                              (name > 1 &&
                                dayjs(
                                  shiftRules[name - 1].clock_on_hhmm
                                ).isBefore(
                                  dayjs(shiftRules[name - 2].clock_on_hhmm)
                                ))) && (
                              <div className="tw-ml-2 tw-bg-[#cbd8f8] tw-rounded tw-px-[4px] tw-py-[1px] tw-text-[#1f51d6]">
                                次日
                              </div>
                            )}
                          </div>
                        </div>
                        <div>
                          <Form.Item noStyle name={[name, "late_on_mins"]}>
                            <MinBlock
                              labelLeft="晚到超过"
                              labelRight="分钟记为迟到"
                            />
                          </Form.Item>
                          <Form.Item noStyle name={[name, "latest_on_mins"]}>
                            <MinBlock
                              labelLeft="晚到超过"
                              labelRight="分钟记为半天缺卡"
                            />
                          </Form.Item>
                          <Form.Item noStyle name={[name, "earliest_on_mins"]}>
                            <MinBlock
                              labelLeft="最早可提前"
                              labelRight="分钟进行打卡"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="tw-flex tw-justify-between tw-mb-4">
                        <div>
                          <p className="tw-mb-2">下班时间</p>
                          <div className="tw-flex tw-items-center">
                            <Form.Item noStyle name={[name, "clock_off_hhmm"]}>
                              <TimePicker
                                format={"HH:mm"}
                                disabledTime={() =>
                                  disabledTime(
                                    dayjs(shiftRules[name].clock_on_hhmm),
                                    "start"
                                  )
                                }
                              />
                            </Form.Item>
                            {((name > 0 &&
                              dayjs(shiftRules[name].clock_on_hhmm).isBefore(
                                dayjs(shiftRules[name - 1].clock_on_hhmm)
                              )) ||
                              (name > 1 &&
                                dayjs(
                                  shiftRules[name - 1].clock_on_hhmm
                                ).isBefore(
                                  dayjs(shiftRules[name - 2].clock_on_hhmm)
                                ))) && (
                              <div className="tw-ml-2 tw-bg-[#cbd8f8] tw-rounded tw-px-[4px] tw-py-[1px] tw-text-[#1f51d6]">
                                次日
                              </div>
                            )}
                          </div>
                        </div>
                        <div>
                          <Form.Item noStyle name={[name, "early_off_mins"]}>
                            <MinBlock
                              labelLeft="最早超过"
                              labelRight="分钟记为早退"
                            />
                          </Form.Item>
                          <Form.Item noStyle name={[name, "earliest_off_mins"]}>
                            <MinBlock
                              labelLeft="最早超过"
                              labelRight="分钟记为半天缺卡"
                            />
                          </Form.Item>
                          <Form.Item noStyle name={[name, "latest_off_mins"]}>
                            <MinBlock
                              labelLeft="最晚可延后"
                              labelRight="分钟进行打卡"
                            />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Form.List>
          )}
          {shift_type === "2" && (
            <Form.List name="shift_rule_info">
              {(fields) => (
                <>
                  {fields.map(({ name }) => (
                    <div key={name}>
                      <div className="tw-flex tw-justify-between tw-mb-4">
                        <div>
                          <p className="tw-mb-2">上班时间</p>
                          <Form.Item noStyle name={[name, "clock_on_hhmm"]}>
                            <TimePicker format={"HH:mm"} />
                          </Form.Item>
                        </div>
                        <div>
                          <Form.Item noStyle name={[name, "latest_on_mins"]}>
                            <MinBlock
                              labelLeft="晚到超过"
                              labelRight="分钟记为半天缺卡"
                            />
                          </Form.Item>
                          <Form.Item noStyle name={[name, "latest_on_mins"]}>
                            <ClockBlock
                              labelLeft="最早"
                              labelRight="打上班卡"
                              defaultValue={"7:00"}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="tw-flex tw-justify-between tw-mb-4">
                        <div>
                          <p className="tw-mb-2">下班时间</p>
                          <Form.Item noStyle name={[name, "clock_off_hhmm"]}>
                            <TimePicker format={"HH:mm"} />
                          </Form.Item>
                        </div>
                        <div>
                          <Form.Item noStyle name={[name, "earliest_off_mins"]}>
                            <MinBlock
                              defaultValue={60}
                              labelLeft="最早超过"
                              labelRight="分钟记为半天缺卡"
                            />
                          </Form.Item>
                          <Form.Item noStyle name={[name, "latest_off_mins"]}>
                            <ClockBlock
                              defaultValue="7:00"
                              labelLeft="最晚"
                              labelRight="打下班卡"
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="tw-flex tw-items-start ">
                        <p className="tw-h-8 tw-leading-8">弹性打卡时间：</p>
                        <div>
                          <Form.Item noStyle name={[name, ""]}>
                            <HourBlock
                              labelLeft="上班最多可晚到"
                              labelRight="小时"
                              defaultValue={60}
                            />
                          </Form.Item>

                          <p className="tw-mb-2 tw-text-[#8f959e]">
                            上班晚到几分钟，下班需要晚走几分钟
                          </p>
                          <Form.Item noStyle name={[name, ""]}>
                            <HourBlock
                              labelLeft="下班最多可早走"
                              labelRight="小时"
                              defaultValue={60}
                            />
                          </Form.Item>

                          <p className="tw-mb-2 tw-text-[#8f959e]">
                            上班早到几分钟，下班可早走几分钟
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Form.List>
          )}
          {/* 休息时间 一次上班显示 */}
          {sbcs === "1" && (
            <>
              <Divider dashed />
              <div className="tw-flex tw-items-center">
                <Checkbox>休息时间</Checkbox>
                <Form.Item noStyle name="rest_time_rule">
                  <TimePicker.RangePicker format={"HH:mm"} />
                </Form.Item>
                <Tooltip
                  placement="top"
                  title="休息时间将不计入工时"
                  color="#fff"
                  overlayInnerStyle={{ color: "#333" }}
                >
                  <InfoCircleOutlined className="hover:tw-text-blue-500 tw-ml-2" />
                </Tooltip>
              </div>
            </>
          )}
        </div>
        {/* 更多规则按钮 */}
        <div
          className="tw-inline-block hover:tw-cursor-pointer tw-px-2 tw-py-1 tw-rounded hover:tw-bg-[#e9efff] tw-text-[#116dfa] tw-select-none active:tw-bg-[#d5e0ff] tw-mb-2 "
          onClick={() => setMoreRule(!moreRule)}
        >
          更多考勤规则
          {moreRule ? (
            <UpOutlined className="tw-ml-2" />
          ) : (
            <DownOutlined className="tw-ml-2" />
          )}
        </div>
        {/* 更多规则 */}
        {moreRule && (
          <div>
            <div className="tw-flex tw-items-center tw-mb-2">
              <Form.Item
                noStyle
                name="no_need_clock_out"
                valuePropName="checked"
              >
                <Checkbox>下班免打卡</Checkbox>
              </Form.Item>
              <Tooltip
                placement="top"
                title="开启后系统会自动打下班卡"
                color="#fff"
                overlayInnerStyle={{ color: "#333" }}
              >
                <InfoCircleOutlined className="hover:tw-text-blue-500 tw-ml-2" />
              </Tooltip>
            </div>
            <div className="tw-flex tw-items-center">
              <Checkbox checked={wzwd} onChange={() => setWzwd(!wzwd)} disabled>
                晚走次日晚到
              </Checkbox>
              <Tooltip
                placement="top"
                title="该规则不支持排班制和自由班制"
                color="#fff"
                overlayInnerStyle={{ color: "#333" }}
              >
                <InfoCircleOutlined className="hover:tw-text-blue-500 tw-ml-2" />
              </Tooltip>
            </div>
          </div>
        )}
        {/* 规则list */}
        {wzwd && (
          <div className="tw-bg-[#f3f5f6] tw-p-4 tw-rounded tw-mb-4 tw-ml-4 tw-mt-2">
            <Form.List
              name="last_off_last_on_rule"
              initialValue={[{ rule1: 3.0, rule2: 1.0 }]}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <div className="tw-flex tw-mb-2">
                      <span className="tw-w-14 tw-leading-8 tw-h-8 tw-text-[#1f2329] tw-font-medium">
                        规则{field.name + 1}
                      </span>
                      <div>
                        <div className="tw-flex tw-items-center tw-mb-2 tw-text-[#1f2329] tw-text-sm">
                          <p>下班晚走</p>
                          <Form.Item noStyle name={[field.name, "rule1"]}>
                            <InputNumber
                              step={0.5}
                              className="tw-mx-2"
                              min={0}
                            />
                          </Form.Item>
                          <p>小时，次日可晚到</p>
                          <Form.Item noStyle name={[field.name, "rule2"]}>
                            <InputNumber
                              step={0.5}
                              className="tw-mx-2"
                              min={0}
                            />
                          </Form.Item>
                          <p>小时，并且不算迟到</p>
                        </div>
                        {rules && (
                          <p className="tw-text-[#646a73]">
                            第一天
                            {dayjs(shiftRules[0].clock_off_hhmm)
                              .add(rules[field.name].rule1, "hour")
                              .format("HH:mm")}
                            {!dayjs(shiftRules[0].clock_off_hhmm)
                              .add(rules[field.name].rule1, "hour")
                              .isBefore(
                                dayjs("00:00:00", "HH:mm:ss").add(1, "day")
                              ) && <>(次日) </>}
                            下班，第二天
                            {dayjs(shiftRules[0].clock_on_hhmm)
                              .add(rules[field.name].rule2 * 60, "minute")
                              .format("HH:mm")}
                            上班不算迟到
                          </p>
                        )}
                      </div>
                      {fields.length > 1 && (
                        <div
                          onClick={() => remove(field.name)}
                          className="tw-ml-4 tw-mt-1 tw-w-6 tw-h-6 tw-text-center hover:tw-cursor-pointer tw-leading-6 tw-inline-block tw-text-[#1f2329] tw-font-medium hover:tw-bg-gray-200 tw-rounded active:tw-bg-gray-300"
                        >
                          <RestOutlined className="tw-text-base tw-text-[#595f68] hover:tw-text-[#26292f]" />
                        </div>
                      )}
                    </div>
                  ))}
                  {fields.length >= 10 && (
                    <Button type="text" disabled>
                      <PlusOutlined />
                      &nbsp;新增规则
                    </Button>
                  )}
                  {fields.length < 10 && (
                    <div
                      className={`${
                        fields.length >= 10 ? "" : ""
                      } tw-inline-block tw-px-1 tw-py-1 tw-text-[#116dfa] tw-cursor-pointer tw-select-none hover:tw-bg-[#e9efff] tw-rounded`}
                      onClick={() => {
                        if (rules.length >= 10) return;
                        add({
                          rule1: rules[rules.length - 1].rule1 + 1,
                          rule2: rules[rules.length - 1].rule2 + 0.5,
                        });
                      }}
                    >
                      <PlusOutlined />
                      &nbsp;新增规则
                    </div>
                  )}
                </>
              )}
            </Form.List>
          </div>
        )}
        {/* 晚到超过分钟严重迟到 */}
        {moreRule && shift_type === "1" && (
          <div className="tw-flex tw-items-center">
            <Checkbox checked={yzcd} onChange={() => setYzcd(!yzcd)}>
              晚到超过
            </Checkbox>
            <Form.Item noStyle name="serious_late_on_mins" initialValue={0}>
              <InputNumber min={0} />
            </Form.Item>
            <span className="tw-ml-2">分钟记为严重迟到</span>
            <Tooltip
              placement="top"
              title="严重迟到分钟数应大于迟到分钟数，且小于上班缺卡分钟数"
              color="#fff"
              overlayInnerStyle={{ color: "#333" }}
            >
              <InfoCircleOutlined className="hover:tw-text-blue-500 tw-ml-2" />
            </Tooltip>
          </div>
        )}
      </FormModal>
    );
  }
);
// 新建班次中 时间选择的form

export default ShiftModal;
