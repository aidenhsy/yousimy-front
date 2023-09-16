import { FOOD_ITEMS_BY_PK_QUERY } from '@/graphql/queries/fooditem.query';
import { useQuery } from '@apollo/client';

export const useFoodItemByPk = (item_id: string) => {
  const { data, loading, error, refetch } = useQuery(FOOD_ITEMS_BY_PK_QUERY, {
    variables: { item_id },
  });

  return {
    foodItemByPkData: data,
    foodItemByPkLoading: loading,
    foodItemByPkError: error,
    foodItemByPkRefetch: refetch,
  };
};
