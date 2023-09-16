import { useQuery, useMutation } from '@apollo/client';
import { DEPARTMENTS_QUERY } from '@/graphql/queries/departments.query';
import {
  Departments_Bool_Exp,
  Departments_Set_Input,
} from '@/graphql/__generated__/graphql';
import { UPDATE_DEPARTMENT_MUTATION } from '@/graphql/mutations/department.mutation';
import { useAxios } from '@/lib/hooks/restful/axios.hook';

/* Queries */

// 部门列表
export const useDepartments = (
  limit: number,
  offset: number,
  where?: Departments_Bool_Exp
) => {
  const { data, loading, error, refetch } = useQuery(DEPARTMENTS_QUERY, {
    variables: { offset, limit, where },
    notifyOnNetworkStatusChange: true,
  });

  return {
    departmentsData: data,
    departmentsLoading: loading,
    departmentsError: Boolean(error),
    departmentsRefetch: refetch,
  };
};

/* Mutations */
// 更新部门信息
export const useUpdateDepartment = () => {
  const [mutate, { loading, error, data }] = useMutation(
    UPDATE_DEPARTMENT_MUTATION
  );

  const updateDepartment = async (
    id: string | string[],
    _set: Departments_Set_Input
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
    updateDepartment,
    updateDepartment_loading: loading,
    updateDepartment_data: data?.update_departments?.returning,
    updateDepartment_error: Boolean(error),
  };
};
