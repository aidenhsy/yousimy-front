import { graphql } from '../__generated__';

export const INSERT_DEPARTMENTS_EMPLOYEES_MUTATION = graphql(/* GraphQL */ `
  mutation InsertDepartmentsEmployees(
    $employee_id: String
    $department_id: String
  ) {
    insert_departments_employees(
      objects: { department_id: $department_id, employee_id: $employee_id }
    ) {
      returning {
        employee {
          id
          avatar
          name
        }
      }
    }
  }
`);

export const DELETE_DEPARTMENTS_EMPLOYEES_BY_PK_MUTATION =
  graphql(/* GraphQL */ `
    mutation DeleteDepartmentsEmployeesByPk(
      $department_id: String!
      $employee_id: String!
    ) {
      delete_departments_employees_by_pk(
        department_id: $department_id
        employee_id: $employee_id
      ) {
        department_id
        employee_id
      }
    }
  `);
