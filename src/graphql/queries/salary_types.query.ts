import { graphql } from '../__generated__';

export const GET_SALARY_TYPES_QUERY = graphql(/* GraphQL */ `
  query GetSalaryTypes($where: service_entitlement_bool_exp) {
    salary_types {
      id
      name
      service_entitlements(where: $where, order_by: { years_of_service: asc }) {
        id
        max_days
        years_of_service
      }
    }
  }
`);

export const GET_SALARY_TYPES_BY_PK_QUERY = graphql(/* GraphQL */ `
  query GetSalaryTypesByPk($id: String!) {
    salary_types_by_pk(id: $id) {
      id
      name
    }
  }
`);
