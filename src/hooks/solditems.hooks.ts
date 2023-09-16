import {
  Solditems_Order_By,
  Solditems_Sum_Order_By,
} from '@/graphql/__generated__/graphql';
import { SOLDITEMS_SUMMARY_QUERY } from '@/graphql/queries/solditems.query';
import { useQuery } from '@apollo/client';
import { orderBy } from 'lodash';

export const useSoldItemsSummary = (
  limit: number,
  offset: number,
  start_date: String,
  end_date: String,
  shop_ids: String,
  order_by: Solditems_Sum_Order_By
) => {
  const { data, loading, error, refetch } = useQuery(SOLDITEMS_SUMMARY_QUERY, {
    variables: { limit, offset, start_date, end_date, shop_ids, order_by },
    notifyOnNetworkStatusChange: true,
  });
  return {
    viewSoldItemsSummaryData: data,
    viewSoldItemsSummaryLoading: loading,
    viewSoldItemsSummaryError: error,
    viewSoldItemsSummaryRefetch: refetch,
  };
};
