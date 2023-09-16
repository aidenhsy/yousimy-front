import { graphql } from '../__generated__';

export const FOOD_ITEMS_BY_PK_QUERY = graphql(/* GraphQL */ `
  query FoodItemsByPk($item_id: String!) {
    fooditems_by_pk(item_id: $item_id) {
      item_id
      item_name
      std_price
      big_pic_url
      brand {
        name
      }
      ingredients {
        supplyitem {
          itemId
          itemName
          mainUnit
          itemImage
          netRate
          dsstorebills(limit: 1, order_by: { auditDate: desc }) {
            ArriveMoney
            InBusAmount
          }
        }
        qty
      }
    }
  }
`);
