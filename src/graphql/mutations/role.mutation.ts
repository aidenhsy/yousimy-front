import { graphql } from '../__generated__';

export const DELETE_ROLE_MUTATION = graphql(/* GraphQL */ `
  mutation DeleteRole($where: roles_bool_exp!) {
    delete_roles(where: $where) {
      returning {
        id
      }
    }
  }
`);

export const CREATE_ROLE_MUTATION = graphql(/* GraphQL */ `
  mutation CreateRole($objects: [roles_insert_input!]!) {
    insert_roles(objects: $objects) {
      returning {
        id
      }
    }
  }
`);

export const UPDATE_ROLE_MUTATION = graphql(/* GraphQL */ `
 mutation UpdateRole($where: roles_bool_exp!, $_set: roles_set_input!) {
    update_roles(where: $where, _set: $_set) {
      returning {
        id
      }
    }
  }
`);


export const CREATE_EMPLOYEES_ROLE_MUTATION = graphql(/* GraphQL */ `
mutation CreateEmployeesRole($objects: [employees_roles_insert_input!]!) {
    insert_employees_roles(objects: $objects) {
      returning {
        employee_id
        role_id
      }
    }
  }
`);


export const DELETE_EMPLOYEES_ROLE_MUTATION = graphql(/* GraphQL */ `
   mutation DeleteEmployeesRole($where: employees_roles_bool_exp!) {
    delete_employees_roles(where: $where) {
      returning {
        employee_id
        role_id
      }
    }
  }
`);


export const DELETE_ROLE_NAV_MUTATION = graphql(/* GraphQL */ `
   mutation DeleteRoleNav($where: role_nav_sm_categories_bool_exp!) {
    delete_role_nav_sm_categories(where: $where) {
      returning {
        role_id
      }
    }
  }
`);

export const CREATE_ROLE_NAV_MUTATION = graphql(/* GraphQL */ `
   mutation CreateRoleNav($objects: [role_nav_sm_categories_insert_input!]!) {
    insert_role_nav_sm_categories(objects: $objects) {
      returning {
        role_id
      }
    }
  }
`);

