import { useMutation, useQuery } from '@apollo/client';
import {
  attendanceGroupsQuery,
  getStatisticsDay,
  getStatisticsMonth,
  queryGroupForDetail,
  queryGroupForMembers,
  queryGroupForShifts,
} from '../../graphql/query';
import {
  AttGroupFilter,
  CreateAttendanceInput,
  StatisticsDayInput,
  UpdateAttendanceInput,
  UsersFilter,
} from '@/gql/graphql';

// 考勤组列表
export const useAttachmentGroups = (
  take: number,
  skip: number,
  filter?: AttGroupFilter
) => {
  const { data, loading, error, refetch } = useQuery(attendanceGroupsQuery, {
    variables: { take, skip, filter },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });

  return {
    attendanceGroups_data: data?.attGroups,
    attendanceGroups_loading: loading,
    attendanceGroups_error: Boolean(error),
    attendanceGroups_refetch: refetch,
  };
};

// 考勤组详情 useGetAddendanceGroupById
export const useGetAddendanceGroupById = (attGroupByIdId: string) => {
  const { data, loading, error, refetch } = useQuery(queryGroupForDetail, {
    variables: { attGroupByIdId },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });

  return {
    attendanceGroupById_data: data?.attGroupById,
    attendanceGroupById_loading: loading,
    attendanceGroupById_error: Boolean(error),
    attendanceGroupById_refetch: refetch,
  };
};

export const useStatisticsDay = (
  take: number,
  skip: number,
  statisticsDayInput: StatisticsDayInput
) => {
  const { data, loading, error, refetch } = useQuery(getStatisticsDay, {
    variables: { take, skip, statisticsDayInput },
    notifyOnNetworkStatusChange: true,
  });

  return {
    statisticsDay_data: data?.statisticsDay,
    statisticsDay_loading: loading,
    statisticsDay_error: Boolean(error),
    statisticsDay_refetch: refetch,
  };
};

export const useStatisticsMonth = (
  take: number,
  skip: number,
  filter: UsersFilter
) => {
  const { data, loading, error, refetch } = useQuery(getStatisticsMonth, {
    variables: { take, skip, filter },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });

  return {
    statisticsMonth_data: data?.users,
    statisticsMonth_loading: loading,
    statisticsMonth_error: Boolean(error),
    statisticsMonth_refetch: refetch,
  };
};

//获取考勤组班次详情
export const useGroupForShifts = (attGroupByIdId: string) => {
  const { data, loading, error, refetch } = useQuery(queryGroupForShifts, {
    variables: { attGroupByIdId },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });
  return {
    attShifts: data?.attGroupById,
    attShifts_loading: loading,
    attShifts_error: Boolean(error),
    attShifts_refetch: refetch,
  };
};
// 获取考勤组人员详情
export const useGroupForMembers = (attGroupByIdId: string) => {
  const { data, loading, error, refetch } = useQuery(queryGroupForMembers, {
    variables: { attGroupByIdId },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });
  return {
    attMembers: data?.attGroupById?.members,
    attMembers_loading: loading,
    attMembers_error: Boolean(error),
    attMembers_refetch: refetch,
  };
};
