import { Attendance, Employees } from '@/graphql/__generated__/graphql';
import { create } from 'zustand';

type ModalName =
  | 'addBonusDeductionModal'
  | 'addManagerModal'
  | 'addStoreManagerModal'
  | 'addEmployeeModal'
  | 'addStoreModal'
  | 'bonusDeductionModal'
  | 'chooseShiftModal'
  | 'conversionModal'
  | 'employeeAttendanceModal'
  | 'employeeSalaryDeductionModal'
  | 'employeesPeriodicShiftScheduling'
  | 'offBoardModal'
  | 'insertServiceEntitlementModal'
  | 'resignModal'
  | 'reboardModal'
  | 'statisticsDayModal'
  | 'statisticsMonthModal'
  | 'selectAttendanceGroupsModal'
  | 'shiftModal'
  | 'supplyItemModal'
  | 'employeeInfoModal'
  | 'uploadImageModal'
  | 'insertLeaveTypes'
  | 'updateServiceEntitlement'
  | 'attendanceDepartment'

type AddBonusDeductionModalInfo = {
  isOpen: boolean;
  employeeInfo?: any;
};

type AddStoreModalInfo = {
  isOpen: boolean;
  currentEmployee?: Employees;
};

type AddStoreManagerInfo = {
  isOpen: boolean;
};

type BonusDeductionModalInfo = {
  isOpen: boolean;
  employeeInfo?: any;
};

type OffBoardModalInfo = {
  isOpen: boolean;
  offBoardEmployee?: Employees;
};

type ConVersionModalInfo = {
  isOpen: boolean;
  currentEmployee?: Employees;
};

type InsertServiceEntitlementModalInfo = {
  isOpen: boolean;
  leave_type_id: string;
  salary_type_id: string;
  refetch?: () => void;
};

type ChooseShiftModalInfo = {
  isOpen: boolean;
};

type ResignModalInfo = {
  isOpen: boolean;
  currentEmployee?: Employees;
};

type ReboardModalInfo = {
  isOpen: boolean;
  currentEmployee?: Employees;
};

type StatisticsDayModalInfo = {
  isOpen: boolean;
  updateAttendanceInfo?: {
    clock: 'in' | 'out';
    time: any;
    attendanceInfo?: Attendance;
  };
};

type StatisticsMonthModalInfo = {
  isOpen: boolean;
  updateEmployeeAttendanceInfo?: any;
};

type ShiftModalInfo = {
  isOpen: boolean;
  shiftInfo?: {
    shiftId: string;
    action: string;
  };
};

type SupplyItemModalInfo = {
  isOpen: boolean;
  item_id: string;
};

type AddEmployeeModalInfo = {
  isOpen: boolean;
  employeeInfo?: {
    id: string;
    name: string;
    mobile: string;
    department: any;
  };
};

type EmployeeAttendanceModalInfo = {
  isOpen: boolean;
  employeeAttendanceInfo?: any;
};
type EmployeeSalaryDeductionModalInfo = {
  isOpen: boolean;
  employeeInfo?: any;
};
type EmployeeInfoModal = {
  isOpen: boolean;
  employeeInfo?: any;
};


type UpdateServiceEntitlementModalInfo = {
  isOpen: boolean;
  serviceEntitlement: {
    id: string;
    leave_type_id: string;
    salary_type_id: string;
    max_days: number;
    years_of_service: number;
    refetch?: () => void;
  };
}
type AttendanceDepartmentModalInfo = {
  isOpen: boolean;
  updateAttendanceInfo?: any;
};

type ModalInfo = {
  addBonusDeductionModal: AddBonusDeductionModalInfo;
  addManagerModal: { isOpen: boolean };
  addStoreManagerModal: AddStoreManagerInfo;
  addEmployeeModal: AddEmployeeModalInfo;
  bonusDeductionModal: BonusDeductionModalInfo;
  chooseShiftModal: ChooseShiftModalInfo;
  selectAttendanceGroupsModal: { isOpen: boolean };
  addStoreModal: AddStoreModalInfo;
  offBoardModal: OffBoardModalInfo;
  conversionModal: ConVersionModalInfo;
  resignModal: ResignModalInfo;
  insertServiceEntitlementModal: InsertServiceEntitlementModalInfo;
  statisticsDayModal: StatisticsDayModalInfo;
  statisticsMonthModal: StatisticsMonthModalInfo;
  shiftModal: ShiftModalInfo;
  supplyItemModal: SupplyItemModalInfo;
  reboardModal: ReboardModalInfo;
  employeeAttendanceModal: EmployeeAttendanceModalInfo;
  employeeSalaryDeductionModal: EmployeeSalaryDeductionModalInfo;
  employeesPeriodicShiftScheduling: { isOpen: boolean };
  employeeInfoModal: EmployeeInfoModal;
  uploadImageModal: { isOpen: boolean, employee_id: string, kind: string };
  insertLeaveTypes: { isOpen: boolean };
  updateServiceEntitlement: UpdateServiceEntitlementModalInfo;
  attendanceDepartment: AttendanceDepartmentModalInfo
};

type ModalState = {
  modals: ModalInfo;
  openModal: <T extends ModalName>(
    name: T,
    additionalProps?: Partial<ModalInfo[T]>
  ) => void;
  closeModal: (name: ModalName) => void;
  setEmployee: (info: any) => void;
};

export const useModalStore = create<ModalState>((set) => ({
  modals: {
    addBonusDeductionModal: { isOpen: false },
    addManagerModal: { isOpen: false },
    addEmployeeModal: { isOpen: false },
    addStoreManagerModal: { isOpen: false },
    addStoreModal: { isOpen: false },
    bonusDeductionModal: { isOpen: false },
    chooseShiftModal: { isOpen: false },
    conversionModal: { isOpen: false },
    employeeAttendanceModal: { isOpen: false },
    employeeSalaryDeductionModal: { isOpen: false },
    employeesPeriodicShiftScheduling: { isOpen: false },
    insertServiceEntitlementModal: {
      isOpen: false,
      leave_type_id: '',
      salary_type_id: '',
    },
    offBoardModal: { isOpen: false },
    reboardModal: { isOpen: false },
    resignModal: { isOpen: false },
    statisticsDayModal: { isOpen: false },
    statisticsMonthModal: { isOpen: false },
    selectAttendanceGroupsModal: { isOpen: false },
    shiftModal: { isOpen: false },
    supplyItemModal: { isOpen: false, item_id: '' },
    employeeInfoModal: { isOpen: false },
    uploadImageModal: { isOpen: false, employee_id: '', kind: '' },
    insertLeaveTypes: { isOpen: false },
    updateServiceEntitlement: {
      isOpen: false,
      serviceEntitlement: {
        id: '',
        leave_type_id: '',
        salary_type_id: '',
        max_days: 0,
        years_of_service: 0,
      }
    },
    attendanceDepartment: { isOpen: false }
  },
  openModal: (name, additionalProps) =>
    set((state) => ({
      modals: { ...state.modals, [name]: { isOpen: true, ...additionalProps } },
    })),
  closeModal: (name) =>
    set((state) => ({
      modals: { ...state.modals, [name]: { isOpen: false } },
    })),

  setEmployee: (info: any) =>
    set((state) => ({
      modals: {
        ...state.modals,
        addEmployeeModal: {
          ...state.modals.addEmployeeModal,
          employeeInfo: info,
        },
      },
    })),
}));
