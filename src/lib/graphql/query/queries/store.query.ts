import { graphql } from "@/gql"

// 获取所有门店
export const getStores = graphql(/* GraphQL */ `
   query Stores {
    stores {
      shop_id
      managers {
        id
        name
        avatar
      }
      storeName
      status
    }
  }
`);

// 获取人员下的所有门店
export const getStoresByEmployeeId = graphql(/* GraphQL */ `
  query StoresByEmployee($storesByEmployeeId: String!) {
    storesByEmployee(id: $storesByEmployeeId) {
      shop_id
      storeName
      department {
        id
        name
        child_departments {
          id
          name
          employees {
            id
            status
            name
            mobile
            job_title
            hire_date
            employee_type
            id_number
            medical_insurance
            department {
              id
              name
            }
          }
        }
      }
    }
  }
`);

