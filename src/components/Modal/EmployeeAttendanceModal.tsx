import { useModalStore } from "@/store/modalStore";
import { Form, Modal, TimePicker, TreeSelect, message } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useUpdateAttendance } from "@/hooks/attendance.hooks";
import { useDrawerStore } from "@/store/drawerStore";
import { useStoreDepartmentsTree } from "@/hooks/store-departments-tree.hooks";

interface EmployeeAttendanceModalModalType {
  open: boolean;
  refetch?: () => void;
}

const EmployeeAttendanceModal: React.FC<EmployeeAttendanceModalModalType> = ({
  open,
  refetch,
}) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const openDrawer = useDrawerStore((state) => state.openDrawer);

  const record: any = useModalStore(
    (state) => state.modals.employeeAttendanceModal.employeeAttendanceInfo
  );

  const [form] = Form.useForm();
  const { updateAttendance, updateAttendanceError } = useUpdateAttendance();
  const { storeDepartmentsTreeData, storeDepartmentsTreeLoading } =
    useStoreDepartmentsTree();

  useEffect(() => {
    if (!record) return;
    const { clock_in_time, clock_out_time, department } = record;
    form.setFieldsValue({
      clock_in_time: clock_in_time
        ? dayjs(clock_in_time, "HH:mm:ss")
        : undefined,
      clock_out_time: clock_out_time
        ? dayjs(clock_out_time, "HH:mm:ss")
        : undefined,
      department: department ? department.id : undefined,
    });
  }, [record]);

  return (
    <Modal
      title={`${record?.name} ${record?.date}日的考勤记录`}
      width={600}
      open={open}
      onCancel={() => {
        form.resetFields();
        closeModal("employeeAttendanceModal");
      }}
      onOk={async () => {
        try {
          const values = await form.validateFields();
          const clock_in_time = values?.clock_in_time
            ? dayjs(values.clock_in_time).format("HH:mm:ss")
            : null;
          const clock_out_time = values?.clock_out_time
            ? dayjs(values.clock_out_time).format("HH:mm:ss")
            : null;
          if (record?.id) {
            const { data, errors } = await updateAttendance(record.id, {
              clock_in_time,
              clock_out_time,
              department_id: values.department,
            });
            console.log(data, errors);
            if (!updateAttendanceError) {
              form.resetFields();
              openDrawer("employeeAttendanceDrawer", {
                employee_id: record?.employee_id,
                month: dayjs(record?.date).format("YYYY-MM"),
              });
              closeModal("employeeAttendanceModal");
              refetch && refetch();
              message.success("修改成功");
            }
          }
        } catch (error) {}
      }}
    >
      <div className="tw-flex tw-flex-col tw-space-y-2 tw-py-5">
        <span>考勤班次:{record?.shift_list?.shift_name}</span>
        {record?.shift_list?.shift_name !== "休息" && (
          <>
            <span>上班时间:{record?.shift_list.on_time}</span>
            <span>下班时间:{record?.shift_list.off_time}</span>
          </>
        )}
      </div>
      {record?.shift_list?.shift_name !== "休息" ? (
        <Form form={form} layout="vertical">
          <Form.Item label="上班打卡时间" name="clock_in_time">
            <TimePicker />
          </Form.Item>
          <Form.Item label="下班打卡时间" name="clock_out_time">
            <TimePicker />
          </Form.Item>
          <Form.Item
            label="考勤部门"
            name="department"
            rules={[
              {
                pattern: /^od-/,
                message: "选项不是部门，请重选",
              },
            ]}
          >
            <TreeSelect
              loading={storeDepartmentsTreeLoading}
              treeData={storeDepartmentsTreeData?.storeDepartments as []}
            />
          </Form.Item>
        </Form>
      ) : (
        <>
          班次为休息,无需更改时间
          <Form form={form} layout="vertical" style={{ marginTop: 20 }}>
            <Form.Item
              label="考勤部门"
              name="department"
              rules={[
                {
                  pattern: /^od-/,
                  message: "选项不是部门，请重选",
                },
              ]}
            >
              <TreeSelect
                loading={storeDepartmentsTreeLoading}
                treeData={storeDepartmentsTreeData?.storeDepartments as []}
              />
            </Form.Item>
          </Form>
        </>
      )}
    </Modal>
  );
};

export default EmployeeAttendanceModal;
