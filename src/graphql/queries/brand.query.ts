import { graphql } from '../__generated__';

export const BRANDS_QUERY = graphql(/* GraphQL */ `
  query Brands($where: brands_bool_exp, $limit: Int, $offset: Int) {
    brands(where: $where, limit: $limit, offset: $offset) {
      id
      name
      stores {
        id
        name
        brand_id
      }
    }
    brands_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`);

export const BRANDS_STORES_QUERY = graphql(/* GraphQL */ `
  query BrandsStores(
    $brandFilter: brands_bool_exp
    $storeFilter: stores_bool_exp
  ) {
    brands(where: $brandFilter) {
      id
      name
      stores(where: $storeFilter) {
        id
        name
      }
    }
  }
`);
