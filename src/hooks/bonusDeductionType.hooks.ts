import { GET_BONUS_DEDUCTION_TYPES_QUERY } from '@/graphql/queries/bonusDeductionType.query';
import { useQuery } from '@apollo/client';

export const useGetBonusDeductionTypes = () => {
  const { data, loading, error, refetch } = useQuery(
    GET_BONUS_DEDUCTION_TYPES_QUERY
  );

  return {
    bonusDeductionTypesData: data,
    bonusDeductionTypesLoading: loading,
    bonusDeductionTypesError: error,
    bonusDeductionTypesRefetch: refetch,
  };
};
