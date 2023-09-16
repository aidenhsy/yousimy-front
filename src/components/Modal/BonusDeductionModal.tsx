import {
  useDeleteDonusdeductions,
  useGetBonusDeductions,
} from "@/hooks/bonusDeduction.hooks";
import { useModalStore } from "@/store/modalStore";
import { Button, List, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Bonusdeductions_Bool_Exp } from "@/graphql/__generated__/graphql";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import numeral from "numeral";
import AddBonusDeductionModal from "./AddBonusDeductionModal";

interface BonusDeductionModalProps {
  open: boolean;
  refetch?: () => void;
}

const BonusDeductionModal: React.FC<BonusDeductionModalProps> = ({
  open,
  refetch,
}) => {
  const { openModal, closeModal, employeeInfo } = useModalStore((state) => ({
    openModal: state.openModal,
    closeModal: state.closeModal,
    employeeInfo: state.modals.bonusDeductionModal.employeeInfo,
  }));
  const [filter, setFilter] = useState<Bonusdeductions_Bool_Exp>({
    employee_id: { _eq: "asdf" },
  });

  useEffect(() => {
    setFilter({
      employee_id: { _eq: employeeInfo?.employee_id || "asdf" },
      month: { _eq: employeeInfo?.month },
    });
  }, [open]);

  const { bonusDeductionData, bonusDeductionRefetch } =
    useGetBonusDeductions(filter);

  const { deleteDonusdeductions, deleteDonusdeductions_error } =
    useDeleteDonusdeductions();

  const handleDeleteDonusdeduction = async (id: string) => {
    await deleteDonusdeductions(id);
    if (!deleteDonusdeductions_error) {
      bonusDeductionRefetch({
        where: filter,
      });
    }
  };
  return (
    <>
      <Modal
        closable={false}
        footer={false}
        title={
          <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
            <span>
              {employeeInfo?.name} {employeeInfo?.month} 的绩效扣款
            </span>
            <Button
              onClick={() =>
                openModal("addBonusDeductionModal", { employeeInfo })
              }
              type="primary"
              icon={<PlusOutlined />}
            >
              添加
            </Button>
          </div>
        }
        open={open}
        onCancel={() => closeModal("bonusDeductionModal")}
      >
        <List
          dataSource={bonusDeductionData?.bonusdeductions}
          renderItem={(item) => (
            <div className="tw-flex tw-justify-between tw-p-2">
              <div className="tw-flex tw-space-x-2 tw-items-center">
                <span>{item.bonusdeductiontype.name}</span>
                <span>¥ {numeral(item.amount).format("0,0.00")}</span>
              </div>
              <div className="tw-flex tw-space-x-2 tw-items-center">
                <span>{item.department.name}</span>
                <Button
                  onClick={() => handleDeleteDonusdeduction(item.id)}
                  icon={<DeleteOutlined />}
                />
              </div>
            </div>
          )}
        />
      </Modal>
      <AddBonusDeductionModal
        open={useModalStore(
          (state) => state.modals.addBonusDeductionModal.isOpen
        )}
        refetch={(where) => {
          refetch && refetch();
          bonusDeductionRefetch({
            where,
          });
        }}
      />
    </>
  );
};

export default BonusDeductionModal;
