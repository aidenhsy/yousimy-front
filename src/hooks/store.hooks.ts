import {
  Employees_Bool_Exp,
  Store_Employee_Bool_Exp,
} from '@/graphql/__generated__/graphql';
import {
  STORES_EMPLOYEES_QUERY,
  STORES_EMPLOYEES_STATUS_COUNT_QUERY,
  STORES_QUERY,
  STORE_DEPARTMENTS_QUERY,
  STORE_LIST_QUERY,
} from '@/graphql/queries/store.query';
import { useQuery } from '@apollo/client';

export const useStores = () => {
  const { data, loading, error, refetch } = useQuery(STORES_QUERY);
  return {
    storesData: data,
    storesLoading: loading,
    storesError: error,
    storesRefetch: refetch,
  };
};

export const useStoreList = (where: Store_Employee_Bool_Exp) => {
  const { data, loading, error, refetch } = useQuery(STORE_LIST_QUERY, {
    variables: {
      where,
    },
  });

  return {
    storesData: data,
    storesLoading: loading,
    storesError: Boolean(error),
    storesRefetch: refetch,
  };
};

export const useStoreDepartments = () => {
  const { data, loading, error, refetch } = useQuery(STORE_DEPARTMENTS_QUERY);
  return {
    storeDepartmentsData: data,
    storeDepartmentsLoading: loading,
    storeDepartmentsError: error,
    storeDepartmentsRefetch: refetch,
  };
};

export const useStoresEmployees = (where?: Employees_Bool_Exp) => {
  const { data, loading, error, refetch } = useQuery(STORES_EMPLOYEES_QUERY, {
    variables: { where },
  });
  return {
    storesEmployeesData: data,
    storesEmployeesLoading: loading,
    storesEmployeesError: error,
    storesEmployeesRefetch: refetch,
  };
};

// 不同状态的人员数
export const useStoresEmployeesStats = () => {
  const { data, loading, refetch } = useQuery(
    STORES_EMPLOYEES_STATUS_COUNT_QUERY
  );
  return {
    storesEmployeesStatusData: data,
    storesEmployeesStatusRefetch: refetch,
    storesEmployeesStatusLoading: loading,
  };
};
