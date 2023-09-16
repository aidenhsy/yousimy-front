import {
  Bonusdeductions_Bool_Exp,
  Insurance_Funds_Bool_Exp,
  Monthlysalary_Bool_Exp,
} from '@/graphql/__generated__/graphql';
import { GET_MONTHLY_SALARY_QUERY } from '@/graphql/queries/monthlysalary.query';
import { useQuery } from '@apollo/client';

export const useGetMonthlySalary = (
  limit?: number,
  offset?: number,
  where?: Monthlysalary_Bool_Exp,
  where1?: Bonusdeductions_Bool_Exp,
  where2?: Insurance_Funds_Bool_Exp
) => {
  const { data, loading, error, refetch } = useQuery(GET_MONTHLY_SALARY_QUERY, {
    variables: { limit, offset, where, where1, where2 },
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    console.log(error);
  }

  return {
    monthlySalaryData: data,
    monthlySalaryLoading: loading,
    monthlySalaryError: Boolean(error),
    monthlySalaryRefetch: refetch,
  };
};
