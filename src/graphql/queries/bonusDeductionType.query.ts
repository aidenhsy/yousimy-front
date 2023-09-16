import { graphql } from '../__generated__';

export const GET_BONUS_DEDUCTION_TYPES_QUERY = graphql(/* GraphQL */ `
  query GetBonusDeductionTypes {
    bonusdeductiontypes {
      id
      is_bonus
      name
    }
  }
`);
