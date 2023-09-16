import { View_Daily_Items_Sold_Bool_Exp } from '@/graphql/__generated__/graphql';
import { VIEW_DAILY_ITEMS_SOLD_QUERY } from '@/graphql/queries/dailyItemsSold.query';
import { useQuery } from '@apollo/client';

export const useViewDailyItemsSold = (
  limit?: number,
  offset?: number,
  where?: View_Daily_Items_Sold_Bool_Exp
) => {
  const { data, loading, error, refetch } = useQuery(
    VIEW_DAILY_ITEMS_SOLD_QUERY,
    {
      variables: { limit, offset, where },
      notifyOnNetworkStatusChange: true,
    }
  );

  return {
    viewDailyItemsSoldData: data,
    viewDailyItemsSoldLoading: loading,
    viewDailyItemsSoldError: error,
    viewDailyItemsSoldRefetch: refetch,
  };
};
