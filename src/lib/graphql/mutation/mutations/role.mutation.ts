
import { graphql } from '../../../../gql';

// 创建角色
export const createRole = graphql(/* GraphQL */ `
   mutation CreateRole_1($name: String) {
    createRole(name: $name) {
        name
        id
    }
    }
`);

// 更新角色路由
export const updateRoleNavs = graphql(/* GraphQL */ `
  mutation updateRoleNav($roleId: String, $navSmIds: [String]) {
    updateRoleNavs(role_id: $roleId, nav_sm_ids: $navSmIds) {
      name
      id
    }
  }
`);

//添加人员到角色
export const addEmployee2Role = graphql(/* GraphQL */ `
    mutation addEmployeeRoles($roleId: String, $employeeIds: [String]) {
        addEmployee2Roles(role_id: $roleId, employee_ids: $employeeIds) {
        id
        name
        }
    }
`);

//从一个角色删除一个人员
export const deleteEmployeeRole = graphql(/* GraphQL */ `
   mutation DeleteEmployeeRole($roleId: String, $employeeId: String) {
    deleteEmployeeRole(role_id: $roleId, employee_id: $employeeId) {
      id
      name
    }
  }
`);

//删除角色
export const deleteRole = graphql(/* GraphQL */ `
 mutation DeleteRole($roleId: String) {
    deleteRole(role_id: $roleId) {
      id
      name
    }
  }
`);


