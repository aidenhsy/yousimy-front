import { graphql } from '../__generated__';

export const ROLE_LISTS_QUERY = graphql(/* GraphQL */ `
    query RoleLists($where: roles_bool_exp) {
     roles(where: $where) {
        id
        name
        employees_roles {
            employee {
            avatar
            id
            name
            }
        }
        role_nav_sm_categories {
            nav_sm_category {
            id
            name
            }
        }
        role_scopes {
            scope {
                id
                name
            }
         }
        }
        roles_aggregate(where: $where) {
            aggregate {
            count
            }
        }
    }
`)

export const NAV_TREE_LIST_QUERY = graphql(/* GraphQL */ `
    query NavTreeList {
    nav_xl_categories {
      id
      name
      nav_bg_categories {
        id
        name
        nav_sm_categories {
          id
          name
          side_nav_visible
        }
      }
    }
  }
`)


export const ROLES_BY_ID_QUERY = graphql(/* GraphQL */ `
query RolesById($id: String!, $where: employees_roles_bool_exp) {
    roles_by_pk(id: $id) {
        id
        name
        employees_roles(where: $where) {
            employee {
            avatar
            id
            name
            department{
                name
            }
            mobile
            }
        }
        role_nav_sm_categories {
            nav_sm_category {
            id
            name
            }
        }
        role_scopes {
            scope {
                id
                name
            }
         }
    }
  }
   
`)