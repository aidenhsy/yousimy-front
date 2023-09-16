import { useQuery } from '@apollo/client';
import {
  BRANDS_QUERY,
  BRANDS_STORES_QUERY,
} from '@/graphql/queries/brand.query';
import {
  Brands_Bool_Exp,
  Stores_Bool_Exp,
} from '@/graphql/__generated__/graphql';

export const useBrands = (
  limit?: number,
  offset?: number,
  where?: Brands_Bool_Exp
) => {
  const { data, loading, error, refetch } = useQuery(BRANDS_QUERY, {
    variables: { offset, limit, where },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });

  if (error) {
    console.log(error);
  }

  return {
    brandsData: data,
    brandsLoading: loading,
    brandsError: Boolean(error),
    brandsRefetch: refetch,
  };
};

export const useBrandsStores = (
  brandFilter: Brands_Bool_Exp,
  storeFilter: Stores_Bool_Exp
) => {
  const { data, loading, error, refetch } = useQuery(BRANDS_STORES_QUERY, {
    variables: { brandFilter, storeFilter },
  });

  return {
    brandsStoresData: data,
    brandsStoresLoading: loading,
    brandsStoresError: Boolean(error),
    brandsStoresRefetch: refetch,
  };
};
