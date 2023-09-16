import { graphql } from "../__generated__";



export const DELETE_ATTENDANCE_GROUP_SUB_LEADERS_MUTATION = graphql(/* GraphQL */ `
   mutation DeleteAttendanceGroupSubLeaders($where: attendance_group_subleaders_bool_exp!) {
    delete_attendance_group_subleaders(where: $where) {
      returning {
        attendance_group_id
      }
    }
  }
`);

export const CREATE_ATTENDANCE_GROUP_SUB_LEADERS_MUTATION = graphql(/* GraphQL */ `
    mutation CreateAttendanceGroupSubLeaders($objects: [attendance_group_subleaders_insert_input!]!) {
    insert_attendance_group_subleaders(objects: $objects) {
      returning {
        attendance_group_id
      }
    }
  }
`);

