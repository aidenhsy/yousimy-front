import { graphql } from '../__generated__';


export const DELETE_ATTENDANCE_GROUP_LEADERS_MUTATION = graphql(/* GraphQL */ `
   mutation DeleteAttendanceGroupLeaders($where: attendance_group_leaders_bool_exp!) {
    delete_attendance_group_leaders(where: $where) {
      returning {
        attendance_group_id
      }
    }
  }
`);


export const CREATE_ATTENDANCE_GROUP_LEADERS_MUTATION = graphql(/* GraphQL */ `
   mutation CreateAttendanceGroupLeaders($objects: [attendance_group_leaders_insert_input!]!) {
    insert_attendance_group_leaders(objects: $objects) {
      returning {
        attendance_group_id
      }
    }
  }
`);