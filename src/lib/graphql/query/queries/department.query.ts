import { graphql } from '../../../../gql';

export const departmentById = graphql(/* GraphQL */ `
  query Query($department_id: String) {
    departmentById(id: $department_id) {
      id
      name
      child_departments {
        id
        name
        child_departments {
          id
          name
          child_departments {
            id
            name
            child_departments {
              id
              name
              child_departments {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`);

export const departments = graphql(/* GraphQL */ `
  query Departments($take: Int!, $skip: Int!, $filter: DepartmentFilter) {
    departments(take: $take, skip: $skip, filter: $filter) {
      totalCount
      items {
        id
        name
        all_employees {
          totalCount
        }
        child_departments {
          id
          name
        }
      }
    }
  }
`);

export const childDepartmentsById = graphql(/* GraphQL */ `
  query DepartmentById($departmentByIdId: String) {
    departmentById(id: $departmentByIdId) {
      parent_department {
        id
        name
      }
      child_departments {
        id
        name
        all_employees {
          totalCount
        }
      }
    }
  }
`);
