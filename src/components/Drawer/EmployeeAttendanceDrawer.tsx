import { useEmployeeByPkAttendances } from '@/hooks/employees.hooks';
import { useDrawerStore } from '@/store/drawerStore';
import { Button, Drawer, Spin } from 'antd';
import React from 'react';
import EmployeeMonthlyAttendanceTableProps from '../Table/EmployeeMonthlyAttendanceTable';
import { useModalStore } from '@/store/modalStore';
import EmployeeAttendanceModal from '../Modal/EmployeeAttendanceModal';
import BonusDeductionModal from '../Modal/BonusDeductionModal';

interface EmployeeAttendanceDrawerProps {
  isOpen: boolean;
  refetch?: () => void;
}

const EmployeeAttendanceDrawer: React.FC<EmployeeAttendanceDrawerProps> = ({
  isOpen,
  refetch,
}) => {
  const { closeDrawer, employee_id, month } = useDrawerStore((state) => ({
    closeDrawer: state.closeDrawer,
    employee_id: state.drawers.employeeAttendanceDrawer.employee_id,
    month: state.drawers.employeeAttendanceDrawer.month,
  }));

  const openModal = useModalStore((state) => state.openModal);

  const { employeeByPkAttendancesData, employeeByPkAttendancesLoading } =
    useEmployeeByPkAttendances(employee_id, { date_yyyy_mm: { _eq: month } });

  return (
    <Spin spinning={employeeByPkAttendancesLoading}>
      <Drawer
        open={isOpen}
        maskStyle={{ opacity: 0 }}
        title={
          <div className="tw-flex tw-justify-between tw-items-center">
            <span>{`${employeeByPkAttendancesData?.employees_by_pk?.name} ${month}月的考勤`}</span>
            <Button
              onClick={() =>
                openModal('bonusDeductionModal', {
                  employeeInfo: {
                    name: employeeByPkAttendancesData?.employees_by_pk?.name,
                    employee_id,
                    month,
                    department_id:
                      employeeByPkAttendancesData?.employees_by_pk
                        ?.department_id,
                  },
                })
              }
            >
              员工个人薪酬扣补
            </Button>
          </div>
        }
        size="large"
        onClose={() => closeDrawer('employeeAttendanceDrawer')}
      >
        <EmployeeMonthlyAttendanceTableProps
          employee_id={employee_id}
          month={month}
          onRow={(record) => {
            return {
              onClick: () =>
                openModal('employeeAttendanceModal', {
                  employeeAttendanceInfo: {
                    employee_id,
                    ...employeeByPkAttendancesData?.employees_by_pk,
                    ...record,
                  },
                }),
            };
          }}
        />

        <EmployeeAttendanceModal
          open={useModalStore(
            (state) => state.modals.employeeAttendanceModal.isOpen
          )}
          refetch={() => {
            refetch && refetch();
          }}
        />

        <BonusDeductionModal
          open={useModalStore(
            (state) => state.modals.bonusDeductionModal.isOpen
          )}
          refetch={() => {
            refetch && refetch();
          }}
        />
      </Drawer>
    </Spin>
  );
};

export default EmployeeAttendanceDrawer;
