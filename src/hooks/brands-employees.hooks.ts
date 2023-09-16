import {
  DELETE_BRANDS_EMPLOYEES_BY_PK_MUTATION,
  INSERT_BRANDS_EMPLOYEES_ONE_MUTATION,
} from '@/graphql/mutations/brands-employees.mutation';
import { useMutation } from '@apollo/client';

export const useInsertBrandsEmployeesOne = () => {
  const [mutate, { loading, error, data }] = useMutation(
    INSERT_BRANDS_EMPLOYEES_ONE_MUTATION
  );

  const insertBrandsEmployeesOne = async (
    brand_id: string,
    employee_id: string
  ) => {
    return await mutate({
      variables: { brand_id, employee_id },
    });
  };

  return {
    insertBrandsEmployeesOne,
    insertBrandsEmployeesOneData: data,
    insertBrandsEmployeesOneLoading: loading,
    insertBrandsEmployeesOneError: error,
  };
};

export const useDeleteBrandsEmployeesByPk = () => {
  const [mutate, { data, loading, error }] = useMutation(
    DELETE_BRANDS_EMPLOYEES_BY_PK_MUTATION
  );

  const deleteBrandsEmployeesByPk = async (
    brand_id: string,
    employee_id: string
  ) => {
    return await mutate({
      variables: { brand_id, employee_id },
    });
  };

  return {
    deleteBrandsEmployeesByPk,
    deleteBrandsEmployeesByPkData: data,
    deleteBrandsEmployeesByPkLoading: loading,
    deleteBrandsEmployeesByPkError: error,
  };
};
