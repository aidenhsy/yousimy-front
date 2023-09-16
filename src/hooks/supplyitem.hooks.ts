import { SUPPLY_ITEMS_BY_PK_QUERY } from '@/graphql/queries/supplyitem.query';
import { useQuery } from '@apollo/client';

export const useSupplyItemsByPk = (itemId: string) => {
  const { data, loading, error, refetch } = useQuery(SUPPLY_ITEMS_BY_PK_QUERY, {
    variables: { itemId },
  });

  return {
    supplyItemsData: data,
    supplyItemsLoading: loading,
    supplyItemsError: error,
    supplyItemsRefetch: refetch,
  };
};
