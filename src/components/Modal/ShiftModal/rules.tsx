import { PlusOutlined, RestOutlined } from "@ant-design/icons";
import { Button, Form, InputNumber } from "antd";
import dayjs from "dayjs";

export default function Rules() {
  const form = Form.useFormInstance();
  const rules = Form.useWatch("late_off_late_on_rule", form);
  const onTime = Form.useWatch("on_time", form);
  const offTime = Form.useWatch("off_time", form);
  return (
    <div className="tw-bg-[#f3f5f6] tw-p-4 tw-rounded tw-mb-4 tw-ml-4 tw-mt-2">
      <Form.List
        name="late_off_late_on_rule"
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
                      <InputNumber step={0.5} className="tw-mx-2" min={0} />
                    </Form.Item>
                    <p>小时，次日可晚到</p>
                    <Form.Item noStyle name={[field.name, "rule2"]}>
                      <InputNumber step={0.5} className="tw-mx-2" min={0} />
                    </Form.Item>
                    <p>小时，并且不算迟到</p>
                  </div>
                  {rules && (
                    <p className="tw-text-[#646a73]">
                      第一天
                      {dayjs(offTime)
                        .add(rules[field.name].rule1, "hour")
                        .format("HH:mm")}
                      {!dayjs(offTime)
                        .add(rules[field.name].rule1, "hour")
                        .isBefore(
                          dayjs("00:00:00", "HH:mm:ss").add(1, "day")
                        ) && <>(次日) </>}
                      下班，第二天
                      {dayjs(onTime)
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
  );
}
