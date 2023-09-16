import { Attendance_Group_Subleaders_Bool_Exp, Attendance_Group_Subleaders_Insert_Input } from "@/graphql/__generated__/graphql";
import { CREATE_ATTENDANCE_GROUP_SUB_LEADERS_MUTATION, DELETE_ATTENDANCE_GROUP_SUB_LEADERS_MUTATION } from "@/graphql/mutations/attendance-sub_leader.mutation";
import { useMutation } from "@apollo/client";


//  删除考勤子负责人
export const useDeleteAttendanceGroupSubLeaders = () => {
    const [mutate, { loading, error, data }] = useMutation(DELETE_ATTENDANCE_GROUP_SUB_LEADERS_MUTATION);

    const deleteAttendanceGroupSubLeaders = async (
        where: Attendance_Group_Subleaders_Bool_Exp
    ) => {
        return await mutate({
            variables: { where },
        });
    };

    return {
        deleteAttendanceGroupSubLeaders,
        deleteAttendanceGroupSubLeadersLoading: loading,
        deleteAttendanceGroupSubLeadersData: data?.delete_attendance_group_subleaders?.returning,
        deleteAttendanceGroupSubLeadersError: Boolean(error),
    };
};

// 添加考勤子负责人
export const useCreateAttendanceGroupSubLeaders = () => {
    const [mutate, { loading, error, data }] = useMutation(CREATE_ATTENDANCE_GROUP_SUB_LEADERS_MUTATION);

    const createAttendanceGroupSubLeaders = async (
        objects: Attendance_Group_Subleaders_Insert_Input[]
    ) => {
        return await mutate({
            variables: { objects },
        });
    };

    return {
        createAttendanceGroupSubLeaders,
        createAttendanceGroupSubLeadersLoading: loading,
        createAttendanceGroupSubLeadersData: data?.insert_attendance_group_subleaders?.returning,
        createAttendanceGroupSubLeadersError: Boolean(error),
    };
};