import { graphql } from '../__generated__';


export const CREATE_LEAVE_TYPES_MUTATION = graphql(/* GraphQL */ `
 mutation CreateLeaveTypes($object: leave_types_insert_input!) {
    insert_leave_types_one(object: $object) {
      id
    }
  }
`);
