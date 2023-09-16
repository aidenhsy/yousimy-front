import { graphql } from '../__generated__';

export const SOLDITEMS_SUMMARY_QUERY = graphql(/* GraphQL */ `
  query SolditemsSummary(
    $limit: Int
    $offset: Int
    $order_by: [solditems_summary_order_by!]
    $end_date: date
    $shop_ids: _text
    $start_date: date
  ) {
    func_solditems_summary(
      args: {
        start_date: $start_date
        shop_ids: $shop_ids
        end_date: $end_date
      }
      limit: $limit
      offset: $offset
      order_by: $order_by
    ) {
      item_id
      income_money
      last_qty
      last_price
      fooditem {
        item_name
        brand {
          name
          id
        }
      }
    }
    func_solditems_summary_aggregate(
      args: {
        start_date: $start_date
        end_date: $end_date
        shop_ids: $shop_ids
      }
    ) {
      aggregate {
        count
      }
    }
  }
`);
