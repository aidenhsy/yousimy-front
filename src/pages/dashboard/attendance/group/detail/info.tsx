import { InfoCircleOutlined } from "@ant-design/icons";
//external library
import { Form, Input, Popover } from "antd";
import AttendanceGroupModal from "@/components/Modal/Attendance";

const Info: React.FC<{
  editAlone?: boolean;
}> = ({ editAlone = false }) => {
  // state
  const form = Form.useFormInstance();

  const attendanceGroupName = Form.useWatch("name", form);
  return (
    <div>
      {/* 考勤组名称 */}
      <Form.Item
        label="考勤组名称"
        name="name"
        rules={[
          {
            max: 64,
            required: true,
          },
        ]}
      >
        <Input
          allowClear
          suffix={
            <div className="tw-ml-0 tw-bg-[#eff0f1] tw-text-[#646a73] tw-px-[6px] tw-rounded">
              <div className="tw-block tw-text-xs tw-leading-5">
                <span
                  className={
                    attendanceGroupName?.length >= 64 ? "tw-text-red-500" : ""
                  }
                >
                  {(attendanceGroupName && attendanceGroupName.length) || 0}
                </span>
                <span>/64</span>
              </div>
            </div>
          }
        />
      </Form.Item>
      {/* 考勤组主负责人 */}
      <Form.Item
        label={
          <>
            考勤组主负责人
            <Popover content="考勤组主负责人可以编辑考勤组规则">
              <InfoCircleOutlined className="tw-ml-1" />
            </Popover>
          </>
        }
        name="leaders"
        rules={[{ required: true, message: "请选择主负责人" }]}
      >
        <AttendanceGroupModal
          title={
            <>
              <div>选择考勤组主负责人</div>
              <div className="tw-text-sm tw-text-gray-500 tw-mt-2">
                考勤组主负责人只能从企业管理员、应用管理员、考勤管理员中进行选择
              </div>
            </>
          }
          isAdmin
        />
      </Form.Item>
      {/* 考勤组子负责人 */}
      <Form.Item
        label={
          <>
            考勤组子负责人
            <Popover content="考勤组子负责人不可以编辑考勤组规则，但可以查看和导出考勤数据，可以对排班制考勤组进行排班">
              <InfoCircleOutlined className="tw-ml-1" />
            </Popover>
          </>
        }
        name="sub_leaders"
      >
        <AttendanceGroupModal title="选择考勤组子负责人" />
      </Form.Item>
      {/* 需要打卡的人员 */}
      <Form.Item label="需要打卡的部门" name="bind_employees">
        <AttendanceGroupModal
          title="选择部门"
          inputSearchType="input"
          isDepartments
        />
      </Form.Item>
    </div>
  );
};

export default Info;
