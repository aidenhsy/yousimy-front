import { STORE_DEPARTMENTS_TREE_QUERY } from '@/graphql/queries/store-departments-tree.query';
import { useQuery } from '@apollo/client';

export const useStoreDepartmentsTree = () => {
  const { data, loading, error, refetch } = useQuery(
    STORE_DEPARTMENTS_TREE_QUERY
  );

  return {
    storeDepartmentsTreeData: data,
    storeDepartmentsTreeLoading: loading,
    storeDepartmentsTreeError: error,
    storeDepartmentsTreeRefetch: refetch,
  };
};
