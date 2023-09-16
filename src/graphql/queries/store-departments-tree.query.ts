import { graphql } from '../__generated__';

export const STORE_DEPARTMENTS_TREE_QUERY = graphql(/* GraphQL */ `
  query StoreDepartmentsTree {
    storeDepartments {
      title
      value
      is_dept
      children {
        is_dept
        title
        value
        children {
          is_dept
          title
          value
        }
      }
    }
  }
`);
