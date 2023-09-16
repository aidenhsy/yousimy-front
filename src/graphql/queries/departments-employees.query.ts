import { graphql } from '../__generated__';

export const DEPARTMENTS_EMPLOYEES_QUERY = graphql(/* GraphQL */ `
  query DepartmentsEmployees($where: departments_employees_bool_exp = {}) {
    departments_employees(where: $where) {
      employee {
        id
        name
      }
    }
  }
`);
