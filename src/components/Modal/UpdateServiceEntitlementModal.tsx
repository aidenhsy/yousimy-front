import { useGetLeaveTypesByPk } from "@/hooks/leave_types.hooks";
import { useGetSalaryTypesByPk } from "@/hooks/salary_types.hooks";
import {
  useInsertServiceEntitlementOne,
  useUpdateServiceEntitlementOne,
} from "@/hooks/service-entitlement.hooks";
import { useModalStore } from "@/store/modalStore";
import { InputNumber, Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

interface UpdateServiceEmtitlementProps {
  open: boolean;
}

const UpdateServiceEmtitlement: React.FC<UpdateServiceEmtitlementProps> = ({
  open,
}) => {
  const {
    closeModal,
    id,
    max_days,
    years_of_service,
    leave_type_id,
    salary_type_id,
    refetch,
  } = useModalStore((state) => ({
    closeModal: state.closeModal,
    id: state.modals.updateServiceEntitlement.serviceEntitlement?.id,
    leave_type_id:
      state.modals.updateServiceEntitlement?.serviceEntitlement?.leave_type_id,
    salary_type_id:
      state.modals.updateServiceEntitlement?.serviceEntitlement?.salary_type_id,
    max_days:
      state.modals.updateServiceEntitlement.serviceEntitlement?.max_days,
    years_of_service:
      state.modals.updateServiceEntitlement.serviceEntitlement
        ?.years_of_service,
    refetch: state.modals.updateServiceEntitlement.serviceEntitlement?.refetch,
  }));
  const [yearsOfService, setYearsOfService] = useState(1);
  const [maxDays, setMaxDays] = useState(1);

  const { leaveTypesByPkData, leaveTypesByPkLoading } =
    useGetLeaveTypesByPk(leave_type_id);
  const { salaryTypesByPkData, salaryTypesByPkLoading } =
    useGetSalaryTypesByPk(salary_type_id);

  const { updateServiceEntitlementOne, updateServiceEntitlementOne_loading } =
    useUpdateServiceEntitlementOne();

  useEffect(() => {
    setMaxDays(max_days);
    setYearsOfService(years_of_service);
  }, [years_of_service, max_days]);

  return (
    <Modal
      open={open}
      onCancel={() => {
        setMaxDays(1);
        setYearsOfService(1);
        closeModal("updateServiceEntitlement");
      }}
      onOk={async () => {
        if (id) {
          await updateServiceEntitlementOne(id, {
            max_days: maxDays,
            years_of_service: yearsOfService,
          });
          if (!updateServiceEntitlementOne_loading) {
            setMaxDays(1);
            setYearsOfService(1);
            if (typeof refetch === "function") {
              refetch();
            }
            closeModal("updateServiceEntitlement");
          }
        }
      }}
      title={
        leaveTypesByPkLoading || salaryTypesByPkLoading ? (
          <Spin />
        ) : (
          <span>
            {salaryTypesByPkData?.name}的{leaveTypesByPkData?.name}设置
          </span>
        )
      }
    >
      <div className="tw-flex tw-items-center tw-space-x-1">
        <span>入职</span>
        <InputNumber
          value={yearsOfService}
          onChange={(value) => setYearsOfService(value!)}
        />
        <span>年以上休</span>
        <InputNumber value={maxDays} onChange={(value) => setMaxDays(value!)} />
        <span>天</span>
      </div>
    </Modal>
  );
};

export default UpdateServiceEmtitlement;
