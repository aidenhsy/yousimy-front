import { Dsstorebills_Bool_Exp } from '@/graphql/__generated__/graphql';
import { DS_STORE_BILLS_QUERY } from '@/graphql/queries/ds-store.query';
import { useQuery } from '@apollo/client';

export const useDsStoreBills = (where?: Dsstorebills_Bool_Exp) => {
  const { data, loading, error, refetch } = useQuery(DS_STORE_BILLS_QUERY, {
    variables: { where },
  });

  return {
    dsStoreBillsData: data,
    dsStoreBillsLoading: loading,
    dsStoreBillsError: error,
    dsStoreBillsRefetch: refetch,
  };
};
