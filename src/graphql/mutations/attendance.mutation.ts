import { graphql } from '../__generated__';

export const DELETE_ATTENDANCH_GROUP_BY_ID_MUTATION = graphql(/* GraphQL */ `
  mutation DeleteAttendanchGroupById($id: String!) {
    delete_attendance_groups_by_pk(id: $id) {
      id
    }
  }
`);

export const CREATE_ATTENDANCH_GROUP_MUTATION = graphql(/* GraphQL */ `
mutation CreateAttendanchGroup($objects: [attendance_groups_insert_input!]!) {
    insert_attendance_groups(objects: $objects) {
      returning {
        id
      }
    }
  }
`);


export const UPDATE_ATTENDANCE_GROUP_MUTATION = graphql(/* GraphQL */ `
 mutation UpdateAttendanceGroup($id: String!, $_set: attendance_groups_set_input!) {
    update_attendance_groups_by_pk(pk_columns: {id: $id}, _set: $_set) {
      id
    }
  }
`);





export const DELETE_ATTENDANCE_GROUP_SHIFTS_MUTATION = graphql(/* GraphQL */ `
  mutation DeleteAttendanceGroupShifts($where: attendance_group_shifts_bool_exp!) {
    delete_attendance_group_shifts(where: $where) {
      returning {
        attendance_group_id
      }
    }
  }
`);

export const CREATE_ATTENDANCE_GROUP_SHIFTS_MUTATION = graphql(/* GraphQL */ `
   mutation CreateAttendanceGroupShifts($objects: [attendance_group_shifts_insert_input!]!) {
    insert_attendance_group_shifts(objects: $objects) {
      returning {
        attendance_group_id
      }
    }
  }
`);


export const DELETE_ATTENDANCE_MUTATION = graphql(/* GraphQL */ `
   mutation DeleteAttendance($where: attendance_bool_exp!) {
    delete_attendance(where: $where) {
      returning {
        id
      }
    }
  }
`);

export const CREATE_ATTENDANCE_MUTATION = graphql(/* GraphQL */ `
   mutation CreateAttendance($objects: [attendance_insert_input!]!) {
    insert_attendance(objects: $objects) {
      returning {
        id
      }
    }
  }
`);

export const UPDATE_ATTENDANCE_MUTATION = graphql(/* GraphQL */ `
   mutation UpdateAttendance($updates: [attendance_updates!]!) {
    update_attendance_many(updates: $updates) {
        returning {
        id
        }
    }
  }
`);


export const UPDATE_ATTENDANCE_BY_ID_MUTATION = graphql(/* GraphQL */ `
   mutation UpdateAttendanceById($id: String!, $_set: attendance_set_input!) {
    update_attendance_by_pk(pk_columns: {id: $id}, _set: $_set) {
      id
    }
  }
`);
