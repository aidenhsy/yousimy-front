import React, { useEffect } from "react";
import { Form, Modal, TreeSelect, message } from "antd";
import { useUpdateAttendance } from "@/hooks/attendance.hooks";
import { useStoreDepartmentsTree } from "@/hooks/store-departments-tree.hooks";
import { useModalStore } from "@/store/modalStore";

interface AttendanceDepartmentProps {
  open: boolean;
  refetch: () => void;
}

const AttendanceDepartment: React.FC<AttendanceDepartmentProps> = ({
  open,
  refetch,
}) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const [form] = Form.useForm();
  const record: any = useModalStore(
    (state) => state.modals.attendanceDepartment.updateAttendanceInfo
  );

  const { updateAttendance, updateAttendanceError } = useUpdateAttendance();
  const { storeDepartmentsTreeData, storeDepartmentsTreeLoading } =
    useStoreDepartmentsTree();

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (record?.id) {
        await updateAttendance(record.id, values);
        if (!updateAttendanceError) {
          refetch();
          closeModal("attendanceDepartment");
          message.success("修改成功");
        }
      }
    } catch (error) {
      message.success("修改失败");
    }
  };

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        department_id: record.department?.id,
      });
    }
  }, [record]);
  return (
    <Modal
      title="修改打卡部门"
      width={600}
      open={open}
      onCancel={() => {
        closeModal("attendanceDepartment");
      }}
      onOk={handleOk}
    >
      <div className="tw-mb-1">
        将{record?.employee?.name}的打卡部门 记录修改为
      </div>
      <Form form={form}>
        <Form.Item
          label=""
          name="department_id"
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
    </Modal>
  );
};

export default AttendanceDepartment;
