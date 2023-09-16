import { Service_Entitlement_Bool_Exp } from '@/graphql/__generated__/graphql';
import {
  GET_SALARY_TYPES_BY_PK_QUERY,
  GET_SALARY_TYPES_QUERY,
} from '@/graphql/queries/salary_types.query';
import { useQuery } from '@apollo/client';

export const useGetSalaryTypes = (where?: Service_Entitlement_Bool_Exp) => {
  const { data, loading, error, refetch } = useQuery(GET_SALARY_TYPES_QUERY, {
    variables: { where },
  });

  return {
    salaryTypesData: data?.salary_types,
    salaryTypesLoading: loading,
    salaryTypesError: error,
    salaryTypesRefetch: refetch,
  };
};

export const useGetSalaryTypesByPk = (id: string) => {
  const { data, loading, error, refetch } = useQuery(
    GET_SALARY_TYPES_BY_PK_QUERY,
    {
      variables: { id },
    }
  );

  return {
    salaryTypesByPkData: data?.salary_types_by_pk,
    salaryTypesByPkLoading: loading,
    salaryTypesByPkError: error,
    salaryTypesByPkRefetch: refetch,
  };
};
