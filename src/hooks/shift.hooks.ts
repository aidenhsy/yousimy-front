import { useMutation, useQuery } from '@apollo/client';
import {
  SHIFTS_LIST_QUERY,
  SHIFT_BY_ID_QUERY,
} from '@/graphql/queries/shift.query';
import {
  Shift_Lists_Bool_Exp,
  Shift_Lists_Insert_Input,
  Shift_Lists_Set_Input,
} from '@/graphql/__generated__/graphql';
import {
  CREATE_SHIFT_MUTATION,
  DELETE_SHIFT_MUTATION,
  UPDATE_SHIFT_MUTATION,
} from '@/graphql/mutations/shift.mutation';

/* Queries */

// 班次列表
export const useShiftLists = (
  limit: number,
  offset: number,
  whereSource?: any
) => {
  const where: Shift_Lists_Bool_Exp = {};
  whereSource &&
    Object.keys(whereSource).map((key) => {
      if (!whereSource[key]) return;
      // 模糊查询名字或者手机号
      if (key === 'shift_name') {
        (where as any)[key] = {
          _like: `%${whereSource[key]}%`,
        };
      } else if (Array.isArray(whereSource[key])) {
        (where as any)[key] = { _in: whereSource[key] };
      } else {
        (where as any)[key] = { _eq: whereSource[key] };
      }
    });
  const { data, loading, error, refetch } = useQuery(SHIFTS_LIST_QUERY, {
    variables: { offset, limit, where },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });
  if (error) {
    console.log(error);
  }
  return {
    shiftListsData: data,
    shiftListsLoading: loading,
    shiftListsError: Boolean(error),
    shiftListsRefetch: refetch,
  };
};

// 获取单个班次
export const useShiftById = (id: string) => {
  const { data, loading, error, refetch } = useQuery(SHIFT_BY_ID_QUERY, {
    variables: { id },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });
  return {
    shiftByIdData: data,
    shiftByIdLoading: loading,
    shiftByIdError: Boolean(error),
    shiftByIdRefetch: refetch,
  };
};

/* Mutations */

// 新建班次

export const useCreateShift = () => {
  const [mutate, { loading, error, data }] = useMutation(CREATE_SHIFT_MUTATION);

  const createShift = async (object: Shift_Lists_Insert_Input) => {
    return await mutate({
      variables: { object },
    });
  };

  return {
    createShift,
    createShiftLoading: loading,
    createShiftData: data?.insert_shift_lists_one,
    createShiftError: Boolean(error),
  };
};

export const useUpdateShift = () => {
  const [mutate, { loading, error, data }] = useMutation(UPDATE_SHIFT_MUTATION);

  const updateShift = async (id: string, _set: Shift_Lists_Set_Input) => {
    return await mutate({
      variables: { id, _set },
    });
  };

  return {
    updateShift,
    updateShiftLoading: loading,
    updateShiftData: data?.update_shift_lists_by_pk,
    updateShiftError: Boolean(error),
  };
};

export const useDeleteShift = () => {
  const [mutate, { loading, error, data }] = useMutation(DELETE_SHIFT_MUTATION);

  const deleteShift = async (id: string) => {
    return await mutate({
      variables: { id },
    });
  };

  return {
    deleteShift,
    deleteShiftLoading: loading,
    deleteShiftData: data?.delete_shift_lists_by_pk,
    deleteShiftError: Boolean(error),
  };
};
