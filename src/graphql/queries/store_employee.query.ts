import { graphql } from '../__generated__';

export const STORE_EMPLOYEE_QUERY = graphql(/* GraphQL */ `
  query StoreEmployee($where: store_employee_bool_exp) {
    store_employee(where: $where) {
      employee {
        id
        name
        avatar
      }
      store {
        id
        name
      }
    }
  }
`);
