import { graphql } from '../../../../gql';


// 添加成员到某个门店
export const addStoreAdminsMutation = graphql(/* GraphQL */ `
   mutation addStoreAdmins($storeId: String!, $employeeIds: [String]!) {
    addStoreAdmins(store_id: $storeId, employee_ids: $employeeIds) {
      shop_id
      storeName
      managers {
        id
        name
        }
    }
  }
`);
// 从某个门店删除管理员
export const deleteStoreAdminsMutation = graphql(/* GraphQL */ `
   mutation DeleteStoreAdmins($storeId: String!, $employeeIds: [String]!) {
    deleteStoreAdmins(store_id: $storeId, employee_ids: $employeeIds) {
      shop_id
      storeName
      managers {
        id
        name
      }
    }
  }
`);

// 添加门店到管理员
export const addAdminsStoresMutation = graphql(/* GraphQL */ `
  mutation AddAdminsStores($employeeIds: [String]!, $storeIds: [String]!) {
    addAdminsStores(employee_ids: $employeeIds, store_ids: $storeIds) {
      shop_id
      storeName
      managers {
        id
        avatar
        name
      }
      status
    }
  }
`);



