import { Bonusdeductions_Bool_Exp, Bonusdeductions_Insert_Input } from '@/graphql/__generated__/graphql';
import { CREATE_BONUSDEDUCTIONS_MUTATION, DELETE_BONUSDEDUCTIONS_MUTATION } from '@/graphql/mutations/bonusDeduction.mutation';
import { GET_BONUS_DEDUCTIONS_QUERY } from '@/graphql/queries/bonusDeduction.query';
import { useQuery, useMutation } from '@apollo/client';

export const useGetBonusDeductions = (where: Bonusdeductions_Bool_Exp) => {
  const { data, loading, error, refetch } = useQuery(
    GET_BONUS_DEDUCTIONS_QUERY,
    {
      variables: { where },
    }
  );

  return {
    bonusDeductionData: data,
    bonusDeductionLoading: loading,
    bonusDeductionError: error,
    bonusDeductionRefetch: refetch,
  };
};

export const useCreateDonusdeductions = () => {
  const [mutate, { loading, error, data }] = useMutation(
    CREATE_BONUSDEDUCTIONS_MUTATION
  );

  const createDonusdeductions = async (object: Bonusdeductions_Insert_Input) => {
    return await mutate({
      variables: {
        object
      },
    });
  };

  return {
    createDonusdeductions,
    createDonusdeductions_loading: loading,
    createDonusdeductions_data: data?.insert_bonusdeductions_one,
    createDonusdeductions_error: Boolean(error),
  };
};

export const useDeleteDonusdeductions = () => {
  const [mutate, { loading, error, data }] = useMutation(
    DELETE_BONUSDEDUCTIONS_MUTATION
  );

  const deleteDonusdeductions = async (id: string) => {
    return await mutate({
      variables: {
        id
      },
    });
  };

  return {
    deleteDonusdeductions,
    deleteDonusdeductions_loading: loading,
    deleteDonusdeductions_data: data?.delete_bonusdeductions_by_pk,
    deleteDonusdeductions_error: Boolean(error),
  };
};



