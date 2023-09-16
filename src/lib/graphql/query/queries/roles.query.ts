import { graphql } from "@/gql"


// 获取管理员角色
export const getRolesList = graphql(/* GraphQL */ `
query RolesList($name: String) {
  roles(name: $name) {
    id
    name
    navs {
      children {
        key
        title
        children {
          key
          title
        }
      }
      key
      title
    }
    employees {
      id
      name
      avatar
    }
  }
}
`);
// 获取权限树
export const getNavTree = graphql(/* GraphQL */ `
    query NavTree {
        navTree {
        key
        title
        children {
            key
            title
            children {
                key
                title
            }
        }
        }
    }
`);

export const getRoleById = graphql(/* GraphQL */ `
  query RoleById($roleByIdId: String!) {
    roleById(id: $roleByIdId) {
      id
      name
      employees {
        id
        avatar
        mobile
        name
        department {
          name
        }
      }
      navs {
        key
        title
        children {
            key
            title
            children {
            key
            title
            }
        }
        }
    }
  }
`);

