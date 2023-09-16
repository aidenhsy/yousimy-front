import { graphql } from '../__generated__';

export const VIEW_DAILY_ITEMS_SOLD_QUERY = graphql(/* GraphQL */ `
  query ViewDailyItemsSold(
    $offset: Int
    $limit: Int
    $where: view_daily_items_sold_bool_exp
  ) {
    view_daily_items_sold(
      limit: $limit
      offset: $offset
      order_by: { total_income_money: desc }
      where: $where
    ) {
      store {
        id
        name
      }
      fooditem {
        item_id
        item_name
      }
      item_id
      settle_biz_date
      total_qty
      total_last_total
      total_income_money
    }
    view_daily_items_sold_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`);
