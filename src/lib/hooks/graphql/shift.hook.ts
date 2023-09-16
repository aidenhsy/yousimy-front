import { useMutation, useQuery } from '@apollo/client';
import { getShiftLists, shiftById } from '@/lib/graphql/query/queries/shifts.query';
import { CreateShiftInput, ShiftListFilter, UpdateShiftInput } from '@/gql/graphql';
import { createShift, deleteShift, updateShift } from '@/lib/graphql/mutation/mutations/shift.mutation';

// 班次列表
export const useShiftLists = (take: number, skip: number, filter: ShiftListFilter) => {
    const { data, loading, error, refetch } = useQuery(getShiftLists, {
        variables: { take, skip, filter },
        notifyOnNetworkStatusChange: true,

    });
    return {
        shiftLists_data: data?.shiftLists,
        shiftLists_loading: loading,
        shiftLists_error: error,
        shiftLists_refetch: refetch
    };
};

// 创建班次
export const useCreateShift = () => {
    const [mutate, { loading, error, data }] = useMutation(createShift)
    const createShiftFn = async (shift: CreateShiftInput) => {
        await mutate({
            variables: { createShiftInput: shift },
        })
    }
    return {
        createShiftFn,
        create_loading: loading
    }
}
// 修改班次
export const useUpdateShift = () => {
    const [mutate, { loading, error, data }] = useMutation(updateShift)
    const updateShiftFn = async (shiftId: string, updateFields: UpdateShiftInput) => {
        await mutate({
            variables: { shiftId, updateFields },
        })
    }
    return {
        updateShiftFn,
        update_loading: loading
    }
}
// 删除班次 deleteShift
export const useDeleteShift = () => {
    const [mutate, { loading, error, data }] = useMutation(deleteShift)
    const deleteShiftFn = async (shiftId: string) => {
        await mutate({
            variables: { shiftId },
        })
    }
    return {
        deleteShiftFn,
        delete_loading: loading
    }
}
// 查看班次
export const useViewShift = (shiftByIdId?: string) => {
    const { data, loading, error } = useQuery(shiftById,
        {
            variables: { shiftByIdId: shiftByIdId || '' },
            notifyOnNetworkStatusChange: true,
            fetchPolicy: 'no-cache',
        });
    return {
        shift_data: data?.shiftById,
        shift_loading: loading,
    };
}
