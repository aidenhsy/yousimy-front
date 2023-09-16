import { graphql } from '../__generated__';


export const DELETE_STORE_EMPLOYEE_MUTATION = graphql(/* GraphQL */ `
   mutation DeleteStoreEmployee($where: store_employee_bool_exp!) {
    delete_store_employee(where: $where) {
      returning {
        store_id
        employee {
          name
          id
        }
      }
    }
  }
`);


export const CREATE_STORE_EMPLOYEE_MUTATION = graphql(/* GraphQL */ `
    mutation CreateStoreEmployee($objects: [store_employee_insert_input!]!) {
    insert_store_employee(objects: $objects) {
      returning {
        employee_id
        store_id
      }
    }
  }
`);


