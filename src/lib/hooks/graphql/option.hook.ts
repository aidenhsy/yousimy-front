import { FieldEnums } from '@/gql/graphql';
import { useQuery } from '@apollo/client';
import { optionQuery } from '@/lib/graphql/query';

export const useOptions = (input: FieldEnums[]) => {
  const { data, loading, error } = useQuery(optionQuery, {
    variables: { input: { fields: input } },
    fetchPolicy: 'no-cache',
  });
  return {
    selectOptions: data?.selectOptions,
    selectOptions_loading: loading,
  };
};
