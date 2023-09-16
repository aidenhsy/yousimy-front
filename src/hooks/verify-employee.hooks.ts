import { VERIFY_EMPLOYEE_FIELDS_QUERY } from '@/graphql/queries/verify-employee.query';
import { useQuery } from '@apollo/client';

export const useVerifyEmployee = (limit?: number, offset?: number) => {
  const { data, loading, error, refetch } = useQuery(
    VERIFY_EMPLOYEE_FIELDS_QUERY,
    {
      variables: { limit, offset },
    }
  );

  if (error) {
    console.log(error);
  }

  return {
    verifyEmployeeData: data,
    verifyEmployeeLoading: loading,
    verifyEmployeeError: Boolean(error),
    verifyEmployeeRefetch: refetch,
  };
};
