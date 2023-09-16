import {
  Employees,
  Employee_Attachments,
} from '@/graphql/__generated__/graphql';
import { create } from 'zustand';

type DrawerName =
  | 'filterRosterDrawer'
  | 'foodItemDrawer'
  | 'employeeDetailsDrawer'
  | 'newEmployeeDrawer'
  | 'attendanceShiftsDrawer'
  | 'createAuthDrawer'
  | 'roleDetailDrawer'
  | 'imagePreviewDrawer'
  | 'employeeAttendanceDrawer'
  | 'employeeInfoDrawer'
  | 'hrMonthlySalaryfilterDrawer';

type FilterRosterType = {
  isOpen: boolean;
};

type FoodItemType = {
  isOpen: boolean;
  item_id: string;
};

type EmployeeAttendanceDrawerType = {
  isOpen: boolean;
  employee_id: string;
  month: string | null;
};

type ImagePreviewDrawerType = {
  isOpen: boolean;
  imageInfo?: Employee_Attachments;
};

type newEmployeeType = {
  isOpen: boolean;
  employeeInfo?: Employees;
};

type roleDetailType = {
  isOpen: boolean;
  roleId?: string;
};

type EmployeeInfoDrawer = {
  isOpen: boolean;
  currentEmployee: Employees;
};

type DrawerType = {
  filterRosterDrawer: FilterRosterType;
  employeeAttendanceDrawer: EmployeeAttendanceDrawerType;
  employeeDetailsDrawer: { isOpen: boolean };
  newEmployeeDrawer: newEmployeeType;
  attendanceShiftsDrawer: { isOpen: boolean };
  createAuthDrawer: { isOpen: boolean };
  roleDetailDrawer: roleDetailType;
  employeeInfoDrawer: EmployeeInfoDrawer;
  imagePreviewDrawer: ImagePreviewDrawerType;
  hrMonthlySalaryfilterDrawer: { isOpen: boolean };
  foodItemDrawer: FoodItemType;
};

type DrawerState = {
  drawers: DrawerType;
  openDrawer: <T extends DrawerName>(
    name: T,
    additionalProps?: Partial<DrawerType[T]>
  ) => void;
  closeDrawer: (name: DrawerName) => void;
};

export const useDrawerStore = create<DrawerState>((set) => ({
  drawers: {
    filterRosterDrawer: { isOpen: false },
    employeeDetailsDrawer: { isOpen: false },
    newEmployeeDrawer: { isOpen: false },
    attendanceShiftsDrawer: { isOpen: false },
    createAuthDrawer: { isOpen: false },
    roleDetailDrawer: { isOpen: false },
    employeeInfoDrawer: { isOpen: false, currentEmployee: {} as Employees },
    imagePreviewDrawer: { isOpen: false },
    employeeAttendanceDrawer: { isOpen: false, employee_id: '', month: null },
    hrMonthlySalaryfilterDrawer: { isOpen: false },
    foodItemDrawer: { isOpen: false, item_id: '' },
  },
  openDrawer: (name, additionalProps) =>
    set((state) => ({
      drawers: {
        ...state.drawers,
        [name]: { isOpen: true, ...additionalProps },
      },
    })),
  closeDrawer: (name) =>
    set((state) => ({
      drawers: { ...state.drawers, [name]: { isOpen: false } },
    })),
}));
