import { graphql } from '../__generated__';

export const INSERT_BRANDS_EMPLOYEES_ONE_MUTATION = graphql(/* GraphQL */ `
  mutation InsertBrandsEmployeesOne($brand_id: String, $employee_id: String) {
    insert_brands_employees_one(
      object: { brand_id: $brand_id, employee_id: $employee_id }
    ) {
      brand_id
      employee_id
    }
  }
`);

export const DELETE_BRANDS_EMPLOYEES_BY_PK_MUTATION = graphql(/* GraphQL */ `
  mutation DeleteBrandsEmployeesByPk(
    $brand_id: String!
    $employee_id: String!
  ) {
    delete_brands_employees_by_pk(
      brand_id: $brand_id
      employee_id: $employee_id
    ) {
      brand_id
      employee_id
    }
  }
`);
