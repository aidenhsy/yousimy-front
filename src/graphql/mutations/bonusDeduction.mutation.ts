import { graphql } from '../__generated__';

export const CREATE_BONUSDEDUCTIONS_MUTATION = graphql(/* GraphQL */ `
   mutation CreateBonusdeductions($object: bonusdeductions_insert_input!) {
    insert_bonusdeductions_one(object: $object) {
      id
      employee_id
      month
      amount
      bonusdeductiontype_id
      department_id
    }
  }
`);
export const DELETE_BONUSDEDUCTIONS_MUTATION = graphql(/* GraphQL */ `
 mutation DeleteBonusdeductions( $id: String!) {
    delete_bonusdeductions_by_pk(id: $id) {
      department_id
      employee_id
      id
      month
      amount
      bonusdeductiontype_id
    }
  }
`);


