import { graphql } from '../__generated__';

export const INSERT_STORE_EMPLOYEE_MUTATION = graphql(/* GraphQL */ `
  mutation InsertStoreEmployee($objects: [store_employee_insert_input!]!) {
    insert_store_employee(
      objects: $objects
      on_conflict: { constraint: store_employeePRIMARY43, update_columns: [] }
    ) {
      affected_rows
      returning {
        employee_id
        store_id
      }
    }
  }
`);
