import { Attendance_Locations_Insert_Input, Attendance_Locations_Updates } from "@/graphql/__generated__/graphql";
import { CREATE_ATTENDANCE_LOCATIONS_MUTATION, DELETE_ATTENDANCE_LOCATION_MUTATION, UPDATE_ATTENDANCE_LOCATIONS_MUTATION } from "@/graphql/mutations/attendance-location.mutation";
import { useMutation } from "@apollo/client";

// 删除考勤组考勤地点
export const useDeleteAttendanceLocation = () => {
    const [mutate, { loading, error, data }] = useMutation(DELETE_ATTENDANCE_LOCATION_MUTATION);

    const deleteAttendanceLocation = async (
        id: string,
    ) => {
        return await mutate({
            variables: { id },
        });
    };

    return {
        deleteAttendanceLocation,
        deleteAttendanceLocationLoading: loading,
        deleteAttendanceLocationData: data?.delete_attendance_locations_by_pk?.id,
        deleteAttendanceLocationError: Boolean(error),
    };
};

// 更新考勤组地点
export const useUpdateAttendanceLocation = () => {
    const [mutate, { loading, error, data }] = useMutation(UPDATE_ATTENDANCE_LOCATIONS_MUTATION);

    const updateAttendanceLocation = async (
        updates: Attendance_Locations_Updates[],
    ) => {
        return await mutate({
            variables: { updates },
        });
    };

    return {
        updateAttendanceLocation,
        updateAttendanceLocationLoading: loading,
        updateAttendanceLocationData: data?.update_attendance_locations_many,
        updateAttendanceLocationError: Boolean(error),
    };
};

// 添加考勤组地点
export const useCreateAttendanceLocation = () => {
    const [mutate, { loading, error, data }] = useMutation(CREATE_ATTENDANCE_LOCATIONS_MUTATION);

    const createAttendanceLocation = async (
        objects: Attendance_Locations_Insert_Input[],
    ) => {
        return await mutate({
            variables: { objects },
        });
    };

    return {
        createAttendanceLocation,
        createAttendanceLocationLoading: loading,
        createAttendanceLocationData: data?.insert_attendance_locations?.returning,
        createAttendanceLocationError: Boolean(error),
    };
};
