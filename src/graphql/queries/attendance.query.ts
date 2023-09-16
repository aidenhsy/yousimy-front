import { graphql } from '../__generated__';

export const ATTENDANCES_GROUPS_QUERY = graphql(/* GraphQL */ `
  query AttdanceGroups(
    $limit: Int!
    $offset: Int!
    $where: attendance_groups_bool_exp
    $where1: employees_bool_exp
  ) {
    attendance_groups(limit: $limit, offset: $offset, where: $where) {
      id
      name
      group_type
      departments {
        id
        name
        employees {
          id
          name
        }
        employees_aggregate(where: $where1) {
          aggregate {
            count
          }
        }
      }
      attendance_group_subleaders {
        employee {
          avatar
          department {
            id
            name
          }
          id
          name
        }
      }
      attendance_group_leaders {
        employee {
          avatar
          department {
            id
            name
          }
          id
          name
        }
      }
      attendance_group_shifts {
        shift_list {
          id
          on_time
          off_time
          shift_name
        }
      }
      attendance_locations {
        id
        longitude
        latitude
        address
        gps_range
        name
      }
    }
    attendance_groups_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`);

export const ATTENDANCE_GROUP_BY_ID_QUERY = graphql(/* GraphQL */ `
  query AttendanceGroupById($id: String!) {
    attendance_groups_by_pk(id: $id) {
      id
      name
      group_type
      departments {
        id
        name
        employees_aggregate {
          aggregate {
            count
          }
        }
      }
      attendance_group_subleaders {
        employee {
          avatar
          department {
            id
            name
          }
          id
          name
        }
      }
      attendance_group_leaders {
        employee {
          avatar
          department {
            id
            name
          }
          id
          name
        }
      }
      attendance_group_shifts {
        shift_list {
          id
          on_time
          off_time
          shift_name
        }
      }
      attendance_locations {
        id
        longitude
        latitude
        address
        gps_range
        name
      }
    }
  }
`);

export const ATTENDANCE_GROUP_SHIFTS_QUERY = graphql(/* GraphQL */ `
  query AttendanceGroupShifts($id: String!,  $where: attendance_bool_exp!) {
    attendance_groups_by_pk(id: $id) {
      departments {
        employees {
          avatar
          id
          name
          status
          department_id
          attendances(where: $where) {
            clock_in_result
            clock_in_time
            clock_out_location_id
            clock_out_result
            clock_in_location_id
            clock_out_time
            date
            id
            shift_id
            shift_list {
              shift_name
              on_time
              off_time
              id
            }
          }
          attendances_aggregate(where: $where) {
            aggregate {
              count
            }
          }
        }
      }
      attendance_group_shifts {
        shift_list {
          id
          off_time
          on_time
          shift_name
        }
      }
      name
      id
    }
  }
`);

export const ATTENDNCE_LIST_QUERY = graphql(/* GraphQL */ `
  query AttendnceList($where: attendance_bool_exp, $limit: Int!, $offset: Int) {
    attendance_aggregate(where: $where) {
      aggregate {
        count
      }
    }
    attendance(limit: $limit, offset: $offset, where: $where) {
      id
      clock_in_time
      clockInResult
      clock_in_location_id
      clock_out_location_id
      clockOutResult
      clock_out_time
      date
      actual_length_hour
      department {
        id
        name
      }
      employee {
        id
        name
        basic_salary
        salary_type
      }
      attendanceLocationByClockInLocationId{
        address
      }
      attendanceLocationByClockOutLocationId {
        address
      }
      shift_list {
        early_minutes_as_early
        shift_name
        early_minutes_as_lack
        late_minutes_as_lack
        late_minutes_as_late
        off_time
        on_time
      }
    }
  }
`);
