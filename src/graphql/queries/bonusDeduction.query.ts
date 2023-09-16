import { graphql } from '../__generated__';

export const GET_BONUS_DEDUCTIONS_QUERY = graphql(/* GraphQL */ `
  query GetBonusDeductions($where: bonusdeductions_bool_exp) {
    bonusdeductions(where: $where) {
      id
      amount
      bonusdeductiontype {
        id
        is_bonus
        name
      }
      department {
        id
        name
      }
    }
  }
`);
