import { graphql } from '../__generated__';

export const GET_LEAVE_TYPES_QUERY = graphql(/* GraphQL */ `
  query GetLeaveTypes {
    leave_types {
      id
      name
      service_entitlements {
        id
        years_of_service
        max_days
        salary_type {
          id
          name
        }
      }
    }
  }
`);

export const GET_LEAVE_TYPES_BY_PK_QUERY = graphql(/* GraphQL */ `
  query GetLeaveTypesByPk($id: String!) {
    leave_types_by_pk(id: $id) {
      id
      name
    }
  }
`);
