import { useGetLeaveTypesByPk } from '@/hooks/leave_types.hooks';
import { useGetSalaryTypesByPk } from '@/hooks/salary_types.hooks';
import { useInsertServiceEntitlementOne } from '@/hooks/service-entitlement.hooks';
import { useModalStore } from '@/store/modalStore';
import { InputNumber, Modal, Spin } from 'antd';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

interface InsertServiceEntitlementModalProps {
  open: boolean;
}

const InsertServiceEntitlementModal: React.FC<
  InsertServiceEntitlementModalProps
> = ({ open }) => {
  const { closeModal, leave_type_id, salary_type_id, refetch } = useModalStore(
    (state) => ({
      closeModal: state.closeModal,
      leave_type_id: state.modals.insertServiceEntitlementModal.leave_type_id,
      salary_type_id: state.modals.insertServiceEntitlementModal.salary_type_id,
      refetch: state.modals.insertServiceEntitlementModal.refetch,
    })
  );
  const [yearsOfService, setYearsOfService] = useState(1);
  const [maxDays, setMaxDays] = useState(1);
  const { leaveTypesByPkData, leaveTypesByPkLoading } =
    useGetLeaveTypesByPk(leave_type_id);
  const { salaryTypesByPkData, salaryTypesByPkLoading } =
    useGetSalaryTypesByPk(salary_type_id);

  const { insertServiceEntitlementOne, insertServiceEntitlementOne_loading } =
    useInsertServiceEntitlementOne();
  return (
    <Modal
      open={open}
      onCancel={() => {
        setMaxDays(1);
        setYearsOfService(1);
        closeModal('insertServiceEntitlementModal');
      }}
      onOk={async () => {
        await insertServiceEntitlementOne({
          id: nanoid(),
          salary_type_id,
          max_days: maxDays,
          years_of_service: yearsOfService,
          leave_type_id,
        });
        if (!insertServiceEntitlementOne_loading) {
          setMaxDays(1);
          setYearsOfService(1);
          if (typeof refetch === 'function') {
            refetch();
          }
          closeModal('insertServiceEntitlementModal');
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

export default InsertServiceEntitlementModal;
