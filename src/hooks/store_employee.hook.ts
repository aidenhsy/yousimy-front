import { useMutation, useQuery } from '@apollo/client';
import { STORE_EMPLOYEE_QUERY } from '@/graphql/queries/store_employee.query';
import {
  Store_Employee_Bool_Exp,
  Store_Employee_Insert_Input,
} from '@/graphql/__generated__/graphql';
import {
  CREATE_STORE_EMPLOYEE_MUTATION,
  DELETE_STORE_EMPLOYEE_MUTATION,
} from '@/graphql/mutations/store.mutation';
import { INSERT_STORE_EMPLOYEE_MUTATION } from '@/graphql/mutations/store_employee.mutation';

export const useStoreEmployee = (where?: Store_Employee_Bool_Exp) => {
  const { data, loading, error, refetch } = useQuery(STORE_EMPLOYEE_QUERY, {
    variables: { where },
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  });
  return {
    storeEmployeeData: data,
    storeEmployeeLoading: loading,
    storeEmployeeError: error,
    storeEmployeeRefetch: refetch,
  };
};

// 删除门店人员
export const useDeleteStoreEmployee = () => {
  const [mutate, { loading, error, data }] = useMutation(
    DELETE_STORE_EMPLOYEE_MUTATION
  );

  const deleteStoreEmployee = async (where: Store_Employee_Bool_Exp) => {
    return await mutate({
      variables: { where },
    });
  };

  return {
    deleteStoreEmployee,
    deleteStoreEmployeeLoading: loading,
    deleteStoreEmployeeData: data?.delete_store_employee?.returning,
    deleteStoreEmployeeError: Boolean(error),
  };
};

export const useCreateStoreEmployee = () => {
  const [mutate, { loading, error, data }] = useMutation(
    CREATE_STORE_EMPLOYEE_MUTATION
  );

  const createStoreEmployee = async (
    objects: Store_Employee_Insert_Input[]
  ) => {
    return await mutate({
      variables: { objects },
    });
  };

  if (error) {
    console.log(error);
  }

  return {
    createStoreEmployee,
    createStoreEmployeeLoading: loading,
    createStoreEmployeeData: data?.insert_store_employee?.returning,
    createStoreEmployeeError: Boolean(error),
  };
};

export const useInsertStoreEmployee = () => {
  const [mutate, { data, loading, error }] = useMutation(
    INSERT_STORE_EMPLOYEE_MUTATION
  );

  const insertStoreEmployee = async (
    objects: Store_Employee_Insert_Input[]
  ) => {
    return await mutate({
      variables: { objects },
    });
  };

  if (error) {
    console.log(error);
  }

  return {
    insertStoreEmployee,
    insertStoreEmployeeData: data,
    insertStoreEmployeeLoading: loading,
    insertStoreEmployeeError: Boolean(error),
  };
};
