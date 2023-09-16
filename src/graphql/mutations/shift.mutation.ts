import { graphql } from '../__generated__';


export const CREATE_SHIFT_MUTATION = graphql(/* GraphQL */ `
    mutation CreateShift($object: shift_lists_insert_input!) {
    insert_shift_lists_one(object: $object) {
      id
    }
  }
`);
export const UPDATE_SHIFT_MUTATION = graphql(/* GraphQL */ `
    mutation UpdateShiftById($id: String!, $_set: shift_lists_set_input!) {
        update_shift_lists_by_pk(pk_columns: {id: $id}, _set: $_set) {
        id
        }
    }
`);


export const DELETE_SHIFT_MUTATION = graphql(/* GraphQL */ `
   mutation DeleteShift($id: String!) {
    delete_shift_lists_by_pk(id: $id) {
      id
    }
  }
`);


