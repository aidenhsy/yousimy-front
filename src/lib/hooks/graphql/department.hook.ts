import { useQuery } from '@apollo/client';
import { departmentById, childDepartmentsById, departments } from '../../graphql/query';
import { DepartmentFilter } from '@/gql/graphql';

export const useDepartmentById = (department_id: string) => {
  const { data, loading, error } = useQuery(departmentById, {
    variables: { department_id },
  });
  return {
    departmentById: data?.departmentById,
    departmentById_loading: loading,
    departmentById_error: Boolean(error),
  };
};

export const useChildDepartmentsById = (departmentByIdId: string) => {
  const { data, loading, error, refetch } = useQuery(childDepartmentsById, {
    variables: { departmentByIdId },
    notifyOnNetworkStatusChange: true,
  });
  return {
    childDepartmentsById_data: data?.departmentById,
    childDepartmentsById_loading: loading,
    childDepartmentsById_error: Boolean(error),
    childDepartmentsById_refetch: refetch
  };
};

export const useDepartments = (take: number, skip: number, filter: DepartmentFilter) => {
  const { data, loading, error, refetch } = useQuery(departments, {
    variables: { take, skip, filter },
    notifyOnNetworkStatusChange: true,
  });
  return {
    departments_data: data?.departments,
    departments_loading: loading,
    departments_error: Boolean(error),
    departments_refetch: refetch
  };
};