import { graphql } from '../__generated__';

export const SUPPLY_ITEMS_BY_PK_QUERY = graphql(/* GraphQL */ `
  query SupplyItemsByPk($itemId: String!) {
    supplyitems_by_pk(itemId: $itemId) {
      itemId
      itemName
      itemImage
      itemTypeName
      mainUnit
      reportUnit
      reportUnitRatio
      netRate
      dsstorebills(limit: 1, order_by: { auditDate: desc }) {
        ArriveMoney
        InBusAmount
      }
      ingredients {
        fooditem {
          brand {
            name
          }
          item_name
        }
      }
    }
  }
`);
