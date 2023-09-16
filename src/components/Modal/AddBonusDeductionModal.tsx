import { useCreateDonusdeductions } from "@/hooks/bonusDeduction.hooks";
import { useGetBonusDeductionTypes } from "@/hooks/bonusDeductionType.hooks";
import { useStoreDepartmentsTree } from "@/hooks/store-departments-tree.hooks";
import { useModalStore } from "@/store/modalStore";
import { Form, InputNumber, Select, TreeSelect, Modal } from "antd";
import React, { useMemo } from "react";
import { nanoid } from "nanoid";
import { Bonusdeductions_Bool_Exp } from "@/graphql/__generated__/graphql";

interface AddBonusDeductionModalProps {
  open: boolean;
  refetch: (value: Bonusdeductions_Bool_Exp) => void;
}

const AddBonusDeductionModal: React.FC<AddBonusDeductionModalProps> = ({
  open,
  refetch,
}) => {
  const { closeModal, employeeInfo } = useModalStore((state) => ({
    closeModal: state.closeModal,
    employeeInfo: state.modals.addBonusDeductionModal.employeeInfo,
  }));

  const [form] = Form.useForm();
  const { storeDepartmentsTreeData, storeDepartmentsTreeLoading } =
    useStoreDepartmentsTree();

  const { bonusDeductionTypesData, bonusDeductionTypesLoading } =
    useGetBonusDeductionTypes();

  const { createDonusdeductions, createDonusdeductions_error } =
    useCreateDonusdeductions();

  const handleOk = async () => {
    const values = await form.validateFields();
    await createDonusdeductions({
      id: nanoid(),
      employee_id: employeeInfo?.employee_id,
      amount: values?.amount || 0,
      department_id: values?.department,
      bonusdeductiontype_id: values?.type,
      month: employeeInfo?.month,
    });
    if (!createDonusdeductions_error) {
      refetch({
        employee_id: { _eq: employeeInfo?.employee_id || "asdf" },
        month: { _eq: employeeInfo?.month },
      });
      form.resetFields();
      closeModal("addBonusDeductionModal");
    }
  };

  useMemo(() => {
    form.setFieldsValue({
      department: employeeInfo?.department_id || undefined,
    });
  }, [employeeInfo]);
  return (
    <Modal
      title="添加绩效扣款"
      open={open}
      onCancel={() => {
        form.resetFields();
        closeModal("addBonusDeductionModal");
      }}
      onOk={handleOk}
    >
      <Form form={form} layout="vertical">
        <Form.Item label="类型" name="type" required>
          <Select
            loading={bonusDeductionTypesLoading}
            options={bonusDeductionTypesData?.bonusdeductiontypes}
            fieldNames={{ label: "name", value: "id" }}
          />
        </Form.Item>
        <Form.Item
          label="金额"
          name="amount"
          rules={[
            {
              pattern: /^\d+(\.\d{1,2})?$/,
              message: "不能大于2位小数点",
            },
          ]}
          required
        >
          <InputNumber prefix="¥" style={{ width: "100%" }} />
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
          required
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

export default AddBonusDeductionModal;
