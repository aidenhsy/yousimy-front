import { Form, Modal } from "antd";
import EmployeeWorkInfo from "../Form/VisualEditingForm/employeeWorkInfo";
import EmployeePersonalInfo from "../Form/VisualEditingForm/employeePersonalInfo";
import EmployeeBankInfo from "../Form/VisualEditingForm/employeeBankInfo";
import EmployeeEmergencyInfo from "../Form/VisualEditingForm/employeeEmergencyInfo";
import { NativeRegionMap } from "@/lib/mapping";
import dayjs from "dayjs";
import { useUpdateEmployee } from "@/hooks/employees.hooks";
import { useModalStore } from "@/store/modalStore";
import { useEffect } from "react";
const EmployeeInfoModal: React.FC<{
  open: boolean;
  refetch: any;
}> = ({ open, refetch }) => {
  const [form] = Form.useForm();
  // 更新个人信息
  const { updateEmployee, updateEmployee_loading, updateEmployee_error } =
    useUpdateEmployee();

  const employeeInfo = useModalStore(
    (state) => state.modals.employeeInfoModal.employeeInfo
  );
  const closeModal = useModalStore((state) => state.closeModal);

  useEffect(() => {
    // 获取到信息进行formValues set
    if (employeeInfo) {
      form.setFieldsValue(employeeInfo?.formValue);
    }
  }, [employeeInfo]);

  // 编辑框提交数据
  const handleSaveFormValues = async () => {
    const values = await form.validateFields();
    const dataSource = {
      ...values,
      mobile:
        employeeInfo?.modalKey === "personalInfo"
          ? `+86 ${values?.mobile}`
          : values?.mobile,
      hire_date: values?.hire_date
        ? dayjs(values?.hire_date).format("YYYY-MM-DD")
        : undefined,
      birthday: values?.birthday
        ? dayjs(values?.birthday).format("YYYY-MM-DD")
        : undefined,
      native_region: values?.native_region
        ? {
            iso_code: values?.native_region,
            name: NativeRegionMap[values?.native_region],
          }
        : undefined,
      manager_id: values?.manager ? values.manager : undefined,
    };
    if (dataSource.manager) {
      delete dataSource.manager;
    }
    //过滤空数据
    const submitDataSource = Object.entries(dataSource).reduce(
      (acc: any, [key, value]) => {
        if (typeof value !== "undefined" && value !== "") {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );
    //更新个人信息
    if (employeeInfo?.id) {
      const res = await updateEmployee(
        employeeInfo.id,
        employeeInfo?.modalKey === "emergencyInfo"
          ? {
              primary_emergency_contact: submitDataSource,
            }
          : submitDataSource
      );
      if (!updateEmployee_error && res.data?.update_employees?.returning) {
        const id = res.data?.update_employees?.returning[0]?.id;
        closeModal("employeeInfoModal");
        refetch({ id });
      }
    }
  };
  return (
    <Modal
      title={`编辑${employeeInfo?.modalTitle}`}
      open={open}
      confirmLoading={updateEmployee_loading}
      onOk={handleSaveFormValues}
      onCancel={() => {
        form.resetFields();
        closeModal("employeeInfoModal");
      }}
    >
      {/* 工作信息 */}
      {employeeInfo?.modalKey === "workInfo" && (
        <EmployeeWorkInfo form={form} />
      )}
      {/* 个人信息 */}
      {employeeInfo?.modalKey === "personalInfo" && (
        <EmployeePersonalInfo form={form} />
      )}
      {/* 银行卡信息 */}
      {employeeInfo?.modalKey === "bankInfo" && (
        <EmployeeBankInfo form={form} />
      )}
      {/* 紧急联系人信息 */}
      {employeeInfo?.modalKey === "emergencyInfo" && (
        <EmployeeEmergencyInfo form={form} />
      )}
    </Modal>
  );
};

export default EmployeeInfoModal;
