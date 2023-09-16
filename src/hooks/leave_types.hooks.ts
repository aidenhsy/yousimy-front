import { Leave_Types_Insert_Input } from '@/graphql/__generated__/graphql';
import { CREATE_LEAVE_TYPES_MUTATION } from '@/graphql/mutations/leave_types.mutation';
import {
  GET_LEAVE_TYPES_BY_PK_QUERY,
  GET_LEAVE_TYPES_QUERY,
} from '@/graphql/queries/leave_types.query';
import { useMutation, useQuery } from '@apollo/client';

export const useGetLeaveTypes = () => {
  const { data, loading, error, refetch } = useQuery(GET_LEAVE_TYPES_QUERY);

  return {
    leaveTypesData: data,
    leaveTypesLoading: loading,
    leaveTypesError: error,
    leaveTypesRefetch: refetch,
  };
};

export const useGetLeaveTypesByPk = (id: string) => {
  const { data, loading, error, refetch } = useQuery(
    GET_LEAVE_TYPES_BY_PK_QUERY,
    {
      variables: {
        id,
      },
    }
  );

  return {
    leaveTypesByPkData: data?.leave_types_by_pk,
    leaveTypesByPkLoading: loading,
    leaveTypesByPkError: error,
    leaveTypesByPkRefetch: refetch,
  };
};


export const useCreateLeaveTypes = () => {
  const [mutate, { loading, error, data }] = useMutation(
    CREATE_LEAVE_TYPES_MUTATION
  );

  const createLeaveTypes = async (
    object: Leave_Types_Insert_Input,
  ) => {
    return await mutate({
      variables: { object },
    });
  };

  return {
    createLeaveTypes,
    createLeaveTypesLoading: loading,
    createLeaveTypesData: data?.insert_leave_types_one?.id,
    createLeaveTypesError: Boolean(error),
  };
};