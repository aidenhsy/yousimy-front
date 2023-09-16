import {
  Bonusdeductions_Bool_Exp,
  Insurance_Funds_Bool_Exp,
  View_Monthly_Salary_Bool_Exp,
} from '@/graphql/__generated__/graphql';
import { VIEW_MONTHLY_SALARY_QUERY } from '@/graphql/queries/view-monthly-salary.query';
import { useQuery } from '@apollo/client';

export const useViewMonthlySalary = (
  limit?: number,
  offset?: number,
  where?: View_Monthly_Salary_Bool_Exp,
  where1?: Bonusdeductions_Bool_Exp,
  where2?: Insurance_Funds_Bool_Exp
) => {
  const { data, loading, error, refetch } = useQuery(
    VIEW_MONTHLY_SALARY_QUERY,
    {
      variables: { limit, offset, where, where1, where2 },
      notifyOnNetworkStatusChange: true,
    }
  );

  if (error) {
    console.log(error);
  }

  return {
    viewMonthlySalaryData: data,
    viewMonthlySalaryLoading: loading,
    viewMonthlySalaryError: Boolean(error),
    viewMonthlySalaryRefetch: refetch,
  };
};
