import { useQuery, useMutation } from '@apollo/client';
import { nanoid } from 'nanoid';
import {
  EMPLOYEES_BY_PK_QUERY,
  EMPLOYEES_QUERY,
  EMPLOYEES_STATUS_COUNT_QUERY,
  EMPLOYEE_ATTACHMENT_QUERY,
  EMPLOYEE_BY_PK_ATTENDANCES_QUERY,
  EMPLOYEE_SALARY_MONTHLY_QUERY,
} from '@/graphql/queries/employees.query';
import {
  Attendance_Bool_Exp,
  Employee_Insurance_Bool_Exp,
  Employees_Bool_Exp,
  Employees_Set_Input,
  Monthlysalary_Bool_Exp,
  Monthlysalary_Insert_Input,
  Monthlysalary_Set_Input,
  Employee_Attachments_Bool_Exp,
} from '@/graphql/__generated__/graphql';
import {
  CREATE_EMPLOYEES_MUTATION,
  DELETE_EMPLOYEE_ATTACHMENT_MUTATION,
  DELETE_EMPLOYEE_MUTATION,
  UPDATE_EMPLOYEE_MUTATION,
} from '@/graphql/mutations/employees.mutation';
import dayjs from 'dayjs';
import { UserAttachmentMap } from '@/lib/mapping';
import { EMPLOYEE_INSURANCE_QUERY } from '@/graphql/queries/employee_insurance.query';

/* Queries */
// 人员列表
export const useEmployees = (
  offset: number,
  limit: number,
  where?: Employees_Bool_Exp
) => {
  const { data, loading, error, refetch } = useQuery(EMPLOYEES_QUERY, {
    variables: { offset, limit, where },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });
  if (error) {
    console.log(error);
  }
  return {
    employeesData: data,
    employeesLoading: loading,
    employeesError: Boolean(error),
    employeesRefetch: refetch,
  };
};
// 不同状态的人员数
export const useEmployeesStats = () => {
  const todayDate = dayjs();
  const nextMonth = todayDate.add(1, 'month');
  const lastMonth = todayDate.subtract(1, 'month');

  const { data, loading, error, refetch } = useQuery(
    EMPLOYEES_STATUS_COUNT_QUERY,
    {
      variables: {
        todayDate: todayDate.format('YYYY-MM-DD'),
        thisWeekDateStart: todayDate.startOf('week').format('YYYY-MM-DD'),
        thisWeekDateEnd: todayDate.endOf('week').format('YYYY-MM-DD'),
        thisMonthDateStart: todayDate.startOf('month').format('YYYY-MM-DD'),
        thisMonthDateEnd: todayDate.endOf('month').format('YYYY-MM-DD'),
        nextMonthDateStart: nextMonth.startOf('month').format('YYYY-MM-DD'),
        nextMonthDateEnd: nextMonth.endOf('month').format('YYYY-MM-DD'),
        lastMonthDateStart: lastMonth.startOf('month').format('YYYY-MM-DD'),
        lastMonthDateEnd: lastMonth.endOf('month').format('YYYY-MM-DD'),
        todayDateMMDD: todayDate.format('MM-DD'),
        thisWeekDateStartMMDD: todayDate.startOf('week').format('MM-DD'),
        thisWeekDateEndMMDD: todayDate.endOf('week').format('MM-DD'),
        thisMonthDateStartMMDD: todayDate.startOf('month').format('MM-DD'),
        thisMonthDateEndMMDD: todayDate.endOf('month').format('MM-DD'),
        nextMonthDateStartMMDD: nextMonth.startOf('month').format('MM-DD'),
        nextMonthDateEndMMDD: nextMonth.endOf('month').format('MM-DD'),
        lastMonthDateStartMMDD: lastMonth.startOf('month').format('MM-DD'),
        lastMonthDateEndMMDD: lastMonth.endOf('month').format('MM-DD'),
      },
    }
  );

  if (error) {
    console.log(error);
  }

  return {
    employeesStatusData: data,
    employeesStatusRefetch: refetch,
    employeesStatusLoading: loading,
    employeeStatusError: Boolean(error),
  };
};

export const useEmployeeAttachment = (where: Employee_Attachments_Bool_Exp) => {
  const { data, loading, error, refetch } = useQuery(
    EMPLOYEE_ATTACHMENT_QUERY,
    {
      variables: {
        where,
      },
    }
  );
  const remap = Object.values(UserAttachmentMap).map((item: any) => {
    const attachmentContents = data?.employee_attachments.filter(
      (res) => res.kind === item?.kind
    );
    return {
      key: item?.id.toString(),
      name: item?.value,
      kind: item?.kind,
      isMulti: item?.isMulti,
      attachmentContents,
    };
  });
  return {
    employeeAttachmentData: remap,
    employeeAttachmentLoading: loading,
    employeeAttachmentError: Boolean(error),
    employeeAttachmentRefetch: refetch,
  };
};

export const useEmployeesByPk = (id: string) => {
  const { data, loading, error, refetch } = useQuery(EMPLOYEES_BY_PK_QUERY, {
    variables: { id },
  });
  return {
    employeesByPkData: data?.employees_by_pk,
    employeesByPkLoading: loading,
    employeesByPkError: error,
    employeesByPkRefetch: refetch,
  };
};

/* Mutations */

//添加人员
export const useCreateEmployee = () => {
  const [mutate, { loading, error, data }] = useMutation(
    CREATE_EMPLOYEES_MUTATION
  );

  const createEmployee = async (createEmployeeInput: {
    name: string;
    mobile: string;
    department_id?: string;
    hire_date?: Date;
    status?: number;
    manager_id?: string;
  }) => {
    return await mutate({
      variables: {
        id: nanoid(),
        name: createEmployeeInput.name,
        mobile: createEmployeeInput.mobile,
        department_id: createEmployeeInput.department_id,
        hire_date: createEmployeeInput.hire_date,
        status: createEmployeeInput.status,
        manager_id: createEmployeeInput.manager_id,
      },
    });
  };

  return {
    createEmployee,
    createEmployee_loading: loading,
    createEmployee_data: data?.insert_employees?.returning,
    createEmployee_error: Boolean(error),
  };
};

// 更新人员信息
export const useUpdateEmployee = () => {
  const [mutate, { loading, error, data }] = useMutation(
    UPDATE_EMPLOYEE_MUTATION
  );

  const updateEmployee = async (
    id: string | string[],
    _set: Employees_Set_Input
  ) => {
    if (Array.isArray(id)) {
      return await mutate({
        variables: { where: { id: { _in: id } }, _set },
      });
    }
    return await mutate({
      variables: { where: { id: { _eq: id } }, _set },
    });
  };

  return {
    updateEmployee,
    updateEmployee_loading: loading,
    updateEmployee_data: data?.update_employees?.returning,
    updateEmployee_error: Boolean(error),
  };
};

// 删除人员
export const useDeleteEmployee = () => {
  const [mutate, { loading, error, data }] = useMutation(
    DELETE_EMPLOYEE_MUTATION
  );

  const deleteEmployee = async (id: string) => {
    return await mutate({
      variables: { where: { id: { _eq: id } } },
    });
  };

  return {
    deleteEmployee,
    deleteEmployee_loading: loading,
    deleteEmployee_data: data?.delete_employees?.returning,
    deleteEmployee_error: Boolean(error),
  };
};

// 删除附件
export const useDeleteEmployeeAttchement = () => {
  const [mutate, { loading, error, data }] = useMutation(
    DELETE_EMPLOYEE_ATTACHMENT_MUTATION
  );

  const deleteEmployeeAttchement = async (
    where: Employee_Attachments_Bool_Exp
  ) => {
    return await mutate({
      variables: { where },
    });
  };

  return {
    deleteEmployeeAttchement,
    deleteEmployeeAttchement_loading: loading,
    deleteEmployeeAttchement_data: data?.delete_employee_attachments?.returning,
    deleteEmployeeAttchement_error: Boolean(error),
  };
};

export const useEmployeeSalaryMonthly = (
  limit?: number,
  offset?: number,
  where?: Employees_Bool_Exp
) => {
  const { data, loading, error, refetch } = useQuery(
    EMPLOYEE_SALARY_MONTHLY_QUERY,
    {
      variables: {
        limit,
        offset,
        where,
        where1: {
          department: {
            name: { _like: where?.attendances?.department?.name?._like },
          },
          date_yyyy_mm:
            where?.attendances_aggregate?.count?.filter?.date_yyyy_mm,
          shift_list: {
            shift_name: {
              _neq: where?.attendances_aggregate?.count?.filter?.shift_list
                ?.shift_name?._neq,
            },
          },
        },
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'no-cache',
    }
  );
  console.log(data);
  if (error) {
    console.log(error);
  }
  return {
    employeeSalaryMonthlyData: data,
    employeeSalaryMonthlyLoading: loading,
    employeeSalaryMonthlyError: error,
    employeeSalaryMonthlyRefetch: refetch,
  };
};

export const useEmployeeByPkAttendances = (
  id: string,
  where?: Attendance_Bool_Exp
) => {
  const { data, loading, error, refetch } = useQuery(
    EMPLOYEE_BY_PK_ATTENDANCES_QUERY,
    {
      variables: {
        id,
        where,
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'no-cache',
    }
  );
  if (error) {
    console.log(error);
  }
  return {
    employeeByPkAttendancesData: data,
    employeeByPkAttendancesLoading: loading,
    employeeByPkAttendancesError: error,
    employeeByPkAttendancesRefetch: refetch,
  };
};

export const useEmployeeMonthlyInsurance = (
  limit: number,
  offset: number,
  where: Employee_Insurance_Bool_Exp
) => {
  const { data, loading, error, refetch } = useQuery(EMPLOYEE_INSURANCE_QUERY, {
    variables: {
      where,
      limit,
      offset,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });
  return {
    employeeMonthlyInsuranceData: data,
    employeeMonthlyInsuranceLoading: loading,
    employeeMonthlyInsuranceError: error,
    employeeMonthlyInsuranceRefetch: refetch,
  };
};
