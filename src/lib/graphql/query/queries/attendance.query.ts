import { graphql } from '@/gql';

export const attendanceGroupsQuery = graphql(/* GraphQL */ `
  query AttachmentGroups($take: Int!, $skip: Int!, $filter: AttGroupFilter) {
    attGroups(take: $take, skip: $skip, filter: $filter) {
      items {
        id
        name
        group_type
        shift_lists {
          id
          shift_name
          on_time
          off_time
        }
        leaders {
          id
          name
          avatar
          department{
            id
            name
          }
        }
        sub_leaders {
          avatar
          id
          name
          department{
            id
            name
          }
        }
        bind_departments {
          name
          all_employees {
            totalCount
          }
          employees {
            id
            avatar
            name
            status
          }
        }
        bind_employees {
          id
          avatar
          name
        }
        members {
          id
          avatar
          name
          status
        }
      }
      totalCount
    }
  }
`);
// 查询考勤组班次
export const queryGroupForShifts = graphql(/* GraphQL */ `
  query AttGroupShifts($attGroupByIdId: String!) {
    attGroupById(id: $attGroupByIdId) {
      name
      shift_lists {
        id
        shift_name
        on_time
        off_time
      }
    }
  }
`);
// 查询考勤组班次
export const queryGroupForMembers = graphql(/* GraphQL */ `
  query AttGroupMembers($attGroupByIdId: String!) {
    attGroupById(id: $attGroupByIdId) {
      members {
        id
        name
        avatar
        status
        attendances {
          shift {
            id
            shift_name
            on_time
            off_time
          }
          date
        }
      }
    }
  }
`);
// 查询考勤组详情
export const queryGroupForDetail = graphql(/* GraphQL */ `
  query GetAddendanceGroupById($attGroupByIdId: String!) {
    attGroupById(id: $attGroupByIdId) {
      bind_departments {
        id
        name
        all_employees {
          totalCount
        }
      }
      bind_employees {
        department {
          name
        }
        avatar
        id
        name
      }
      id
      leaders {
        department {
          name
        }
        avatar
        id
        name
      }
      sub_leaders {
        department {
          name
        }
        avatar
        id
        name
      }
      name
      sub_group_leaders {
        name
        id
        department {
          id
          name
        }
        avatar
      }
      locations{
        id
        name
        longitude
        latitude
        address
        gps_range
      }
      shift_lists{
          id
          shift_name
          on_time
          off_time
      }
    }
  }
`);

// 每日统计
export const getStatisticsDay = graphql(/* GraphQL */ `
 query StatisticsDay($statisticsDayInput: StatisticsDayInput, $take: Int!, $skip: Int!) {
  statisticsDay(statisticsDayInput: $statisticsDayInput, take: $take, skip: $skip) {
    items {
      employee {
        id
        name
        salary_type
        basic_salary
      }
      id
      clock_in_time
      clock_out_time
      clock_out_location {
        address
      }
      clock_in_location {
        address
      }
      clock_in_result
      clock_out_result
      hours_of_attendance
      shift {
        on_time
        off_time
      }
    }
    totalCount
  }
}
`);

// 每月统计
export const getStatisticsMonth = graphql(/* GraphQL */ `
 query statisticsMonth($take: Int!, $skip: Int!, $filter: UsersFilter) {
  users(take: $take, skip: $skip, filter: $filter) {
    items {
      attendances {
        id
        clock_in_time
        clock_out_time
        clock_out_result
        clock_in_result
        date
        hours_of_attendance
        shift_id
      }
      name
      id
    }
    totalCount
  }
}
`);

