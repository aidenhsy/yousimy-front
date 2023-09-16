import { graphql } from "@/gql"

// 获取所有品牌
export const getBrands = graphql(/* GraphQL */ `
    query brandsList($brandName: String) {
    brands (brandName: $brandName) {
        id
        name
        stores {
            shop_id
            storeName
            managers {
                id
                name
                avatar
            }
            department_id
            status
        }
    }
    }
`);