import {
  Attendance_Group_Leaders_Bool_Exp,
  Attendance_Group_Leaders_Insert_Input,
} from '@/graphql/__generated__/graphql';
import {
  CREATE_ATTENDANCE_GROUP_LEADERS_MUTATION,
  DELETE_ATTENDANCE_GROUP_LEADERS_MUTATION,
} from '@/graphql/mutations/attendance-leader.mutation';
import { useMutation } from '@apollo/client';

// 删除考勤主负责人
export const useDeleteAttendanceGroupLeaders = () => {
  const [mutate, { loading, error, data }] = useMutation(
    DELETE_ATTENDANCE_GROUP_LEADERS_MUTATION
  );

  const deleteAttendanceGroupLeaders = async (
    where: Attendance_Group_Leaders_Bool_Exp
  ) => {
    return await mutate({
      variables: { where },
    });
  };

  return {
    deleteAttendanceGroupLeaders,
    deleteAttendanceGroupLeadersLoading: loading,
    deleteAttendanceGroupLeadersData:
      data?.delete_attendance_group_leaders?.returning,
    deleteAttendanceGroupLeadersError: Boolean(error),
  };
};

// 添加考勤主负责人
export const useCreateAttendanceGroupLeaders = () => {
  const [mutate, { loading, error, data }] = useMutation(
    CREATE_ATTENDANCE_GROUP_LEADERS_MUTATION
  );

  const createAttendanceGroupLeaders = async (
    objects: Attendance_Group_Leaders_Insert_Input[]
  ) => {
    return await mutate({
      variables: { objects },
    });
  };

  return {
    createAttendanceGroupLeaders,
    createAttendanceGroupLeadersLoading: loading,
    createAttendanceGroupLeadersData:
      data?.insert_attendance_group_leaders?.returning,
    createAttendanceGroupLeadersError: Boolean(error),
  };
};
