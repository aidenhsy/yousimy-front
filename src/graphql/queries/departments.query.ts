import { graphql } from '../__generated__';

export const DEPARTMENTS_QUERY = graphql(/* GraphQL */ `
  query Departments($limit: Int!, $offset: Int!, $where: departments_bool_exp) {
    departments_aggregate(where: $where) {
      aggregate {
        count
      }
    }
    departments(
      limit: $limit
      offset: $offset
      where: $where
      order_by: { name: asc }
    ) {
      id
      name
      employees_aggregate {
        aggregate {
          count
        }
      }
      parent_department_id
    }
  }
`);
