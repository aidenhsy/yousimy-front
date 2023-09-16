import { graphql } from '../__generated__';

export const UPDATE_DEPARTMENT_MUTATION = graphql(/* GraphQL */ `
 mutation UpdateDepartment($_set: departments_set_input, $where: departments_bool_exp!) {
    update_departments(where: $where, _set: $_set) {
      returning {
        id
      }
    }
  }
`);