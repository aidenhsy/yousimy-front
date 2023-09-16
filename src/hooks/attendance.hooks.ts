import { useMutation, useQuery } from '@apollo/client';
import {
  ATTENDANCES_GROUPS_QUERY,
  ATTENDANCE_GROUP_BY_ID_QUERY,
  ATTENDANCE_GROUP_SHIFTS_QUERY,
  ATTENDNCE_LIST_QUERY,
} from '@/graphql/queries/attendance.query';
import {
  Attendance_Bool_Exp,
  Attendance_Group_Shifts_Bool_Exp,
  Attendance_Group_Shifts_Insert_Input,
  Attendance_Groups_Bool_Exp,
  Attendance_Groups_Insert_Input,
  Attendance_Groups_Set_Input,
  Attendance_Insert_Input,
  Attendance_Set_Input,
  Attendance_Updates,
} from '@/graphql/__generated__/graphql';
import {
  CREATE_ATTENDANCE_GROUP_SHIFTS_MUTATION,
  CREATE_ATTENDANCE_MUTATION,
  CREATE_ATTENDANCH_GROUP_MUTATION,
  DELETE_ATTENDANCE_GROUP_SHIFTS_MUTATION,
  DELETE_ATTENDANCE_MUTATION,
  DELETE_ATTENDANCH_GROUP_BY_ID_MUTATION,
  UPDATE_ATTENDANCE_BY_ID_MUTATION,
  UPDATE_ATTENDANCE_GROUP_MUTATION,
  UPDATE_ATTENDANCE_MUTATION,
} from '@/graphql/mutations/attendance.mutation';

/* Queries */

// 考勤组列表
export const useAttendnceGroups = (
  limit: number,
  offset: number,
  where?: Attendance_Groups_Bool_Exp
) => {
  const { data, loading, error, refetch } = useQuery(ATTENDANCES_GROUPS_QUERY, {
    variables: { offset, limit, where, where1: { status: { _eq: 2 } } },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });
  if (error) {
    console.log(error);
  }
  return {
    attendanceGroupsData: data,
    attendanceGroupsLoading: loading,
    attendanceGroupsError: Boolean(error),
    attendanceGroupsRefetch: refetch,
  };
};

// 单个考勤组详情
export const useAttendnceGroupById = (id: string) => {
  const { data, loading, error, refetch } = useQuery(
    ATTENDANCE_GROUP_BY_ID_QUERY,
    {
      variables: { id },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'no-cache',
    }
  );
  return {
    attendnceGroupByIdData: data?.attendance_groups_by_pk,
    attendnceGroupByIdLoading: loading,
    attendnceGroupByIdError: Boolean(error),
    attendnceGroupByIdRefetch: refetch,
  };
};

// 单个考勤组下的班次
export const useAttendnceGroupShifts = (
  id: string,
  where: Attendance_Bool_Exp
) => {
  const { data, loading, error, refetch } = useQuery(
    ATTENDANCE_GROUP_SHIFTS_QUERY,
    {
      variables: { id, where },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'no-cache',
    }
  );
  return {
    attendnceGroupShiftsData: data?.attendance_groups_by_pk,
    attendnceGroupShiftsLoading: loading,
    attendnceGroupShiftsError: Boolean(error),
    attendnceGroupShiftsRefetch: refetch,
  };
};

//考勤记录
export const useAttendnceList = (
  limit: number,
  offset: number,
  where: Attendance_Bool_Exp
) => {
  const { data, loading, error, refetch } = useQuery(ATTENDNCE_LIST_QUERY, {
    variables: { limit, offset, where },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });
  return {
    attendnceListData: data,
    attendnceListLoading: loading,
    attendnceListError: Boolean(error),
    attendnceListRefetch: refetch,
  };
};

/* Mutations */

// 新建考勤组
export const useCreateAttendanceShiftGroup = () => {
  const [mutate, { loading, error, data }] = useMutation(
    CREATE_ATTENDANCH_GROUP_MUTATION
  );

  const createAttendanceShiftGroup = async (
    objects: Attendance_Groups_Insert_Input
  ) => {
    return await mutate({
      variables: { objects },
    });
  };

  return {
    createAttendanceShiftGroup,
    createAttendanceShiftGroupLoading: loading,
    createAttendanceShiftGroupData: data?.insert_attendance_groups?.returning,
    createAttendanceShiftGroupError: Boolean(error),
  };
};

// 更新考勤组
export const useUpdateAttendanceGroup = () => {
  const [mutate, { loading, error, data }] = useMutation(
    UPDATE_ATTENDANCE_GROUP_MUTATION
  );

  const updateAttendanceGroup = async (
    id: string,
    _set: Attendance_Groups_Set_Input
  ) => {
    return await mutate({
      variables: { id, _set },
    });
  };

  return {
    updateAttendanceGroup,
    updateAttendanceGroupLoading: loading,
    updateAttendanceGroupData: data?.update_attendance_groups_by_pk,
    updateAttendanceGroupError: Boolean(error),
  };
};

// 删除考勤组
export const useDeleteAttendanceShiftGroupById = () => {
  const [mutate, { loading, error, data }] = useMutation(
    DELETE_ATTENDANCH_GROUP_BY_ID_MUTATION
  );

  const deleteAttendanceShiftGroupById = async (id: string) => {
    return await mutate({
      variables: { id },
    });
  };

  return {
    deleteAttendanceShiftGroupById,
    deleteAttendanceShiftGroupByIdLoading: loading,
    deleteAttendanceShiftGroupByIdData:
      data?.delete_attendance_groups_by_pk?.id,
    deleteAttendanceShiftGroupByIdError: Boolean(error),
  };
};

// 删除考勤组班次
export const useDeleteAttendanceShiftGroupShifts = () => {
  const [mutate, { loading, error, data }] = useMutation(
    DELETE_ATTENDANCE_GROUP_SHIFTS_MUTATION
  );

  const deleteAttendanceShiftGroupShifts = async (
    where: Attendance_Group_Shifts_Bool_Exp
  ) => {
    return await mutate({
      variables: { where },
    });
  };

  return {
    deleteAttendanceShiftGroupShifts,
    deleteAttendanceShiftGroupShiftsLoading: loading,
    deleteAttendanceShiftGroupShiftsData:
      data?.delete_attendance_group_shifts?.returning,
    deleteAttendanceShiftGroupShiftsError: Boolean(error),
  };
};

// 添加考勤组班次
export const useCreateAttendanceShiftGroupShifts = () => {
  const [mutate, { loading, error, data }] = useMutation(
    CREATE_ATTENDANCE_GROUP_SHIFTS_MUTATION
  );

  const createAttendanceShiftGroupShifts = async (
    objects: [Attendance_Group_Shifts_Insert_Input]
  ) => {
    return await mutate({
      variables: { objects },
    });
  };

  return {
    createAttendanceShiftGroupShifts,
    createAttendanceShiftGroupShiftsLoading: loading,
    createAttendanceShiftGroupShiftsData:
      data?.insert_attendance_group_shifts?.returning,
    createAttendanceShiftGroupShiftsError: Boolean(error),
  };
};

// 删除排班
export const useDeleteAttendanceShift = () => {
  const [mutate, { loading, error, data }] = useMutation(
    DELETE_ATTENDANCE_MUTATION
  );

  const deleteAttendanceShift = async (where: Attendance_Bool_Exp) => {
    return await mutate({
      variables: { where },
    });
  };

  return {
    deleteAttendanceShift,
    deleteAttendanceShiftLoading: loading,
    deleteAttendanceShiftData: data?.delete_attendance?.returning,
    deleteAttendanceShiftError: Boolean(error),
  };
};

// 添加排班
export const useCreateAttendanceShift = () => {
  const [mutate, { loading, error, data }] = useMutation(
    CREATE_ATTENDANCE_MUTATION
  );

  const createAttendanceShift = async (objects: [Attendance_Insert_Input]) => {
    return await mutate({
      variables: { objects },
    });
  };

  return {
    createAttendanceShift,
    createAttendanceShiftLoading: loading,
    createAttendanceShiftData: data?.insert_attendance?.returning,
    createAttendanceShiftError: Boolean(error),
  };
};

// 更新排班
export const useUpdateAttendanceShift = () => {
  const [mutate, { loading, error, data }] = useMutation(
    UPDATE_ATTENDANCE_MUTATION
  );

  const updateAttendanceShift = async (updates: [Attendance_Updates]) => {
    return await mutate({
      variables: { updates },
    });
  };

  return {
    updateAttendanceShift,
    updateAttendanceShiftLoading: loading,
    updateAttendanceShiftData: data?.update_attendance_many,
    updateAttendanceShiftError: Boolean(error),
  };
};

// // 更新个人考勤记录
export const useUpdateAttendance = () => {
  const [mutate, { loading, error, data }] = useMutation(
    UPDATE_ATTENDANCE_BY_ID_MUTATION
  );

  const updateAttendance = async (id: string, _set: Attendance_Set_Input) => {
    return await mutate({
      variables: { id, _set },
    });
  };

  return {
    updateAttendance,
    updateAttendanceLoading: loading,
    updateAttendanceData: data?.update_attendance_by_pk,
    updateAttendanceError: Boolean(error),
  };
};
