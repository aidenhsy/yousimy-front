import { graphql } from '../__generated__';

export const VERIFY_EMPLOYEE_FIELDS_QUERY = graphql(/* GraphQL */ `
  query VerifyEmployeeFields($limit: Int, $offset: Int) {
    verifyEmployeeFields(limit: $limit, offset: $offset) {
      id
      types
      name
      employee {
        avatar
        name
        department {
          id
          name
        }
        status
      }
    }
  }
`);
