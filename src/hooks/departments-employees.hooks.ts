import {
  DELETE_DEPARTMENTS_EMPLOYEES_BY_PK_MUTATION,
  INSERT_DEPARTMENTS_EMPLOYEES_MUTATION,
} from '@/graphql/mutations/departments-employees.mutation';
import { useMutation } from '@apollo/client';

export const useInsertDepartmentsEmployees = () => {
  const [mutate, { loading, error, data }] = useMutation(
    INSERT_DEPARTMENTS_EMPLOYEES_MUTATION
  );

  const insertDepartmentsEmployees = async (
    employee_id: string,
    department_id: string
  ) => {
    return await mutate({
      variables: { employee_id, department_id },
    });
  };

  return {
    insertDepartmentsEmployees,
    insertDepartmentsEmployeesData: data,
    insertDepartmentsEmployeesLoading: loading,
    insertDepartmentsEmployeesError: Boolean(error),
  };
};

export const useDeleteDepartmentsEmployeesByPk = () => {
  const [mutate, { data, loading, error }] = useMutation(
    DELETE_DEPARTMENTS_EMPLOYEES_BY_PK_MUTATION
  );

  const deleteDepartmentsEmployeesByPk = async (
    employee_id: string,
    department_id: string
  ) => {
    return await mutate({
      variables: { employee_id, department_id },
    });
  };

  return {
    deleteDepartmentsEmployeesByPk,
    deleteDepartmentsEmployeesByPkData: data,
    deleteDepartmentsEmployeesByPkLoading: loading,
    deleteDepartmentsEmployeesByPkError: error,
  };
};
