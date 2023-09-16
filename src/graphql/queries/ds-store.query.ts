import { graphql } from '../__generated__';

export const DS_STORE_BILLS_QUERY = graphql(/* GraphQL */ `
  query DsStoreBills($where: dsstorebills_bool_exp) {
    dsstorebills(order_by: { ArriveMoney: desc }, where: $where) {
      ArriveMoney
      InBusAmount
      ItemSpec
      OtherSideName
      supplyitem {
        itemName
        reportUnit
        mainUnit
        itemTypeName
      }
    }
  }
`);
