import { graphql } from "../__generated__";


export const UPDATE_ATTENDANCE_LOCATIONS_MUTATION = graphql(/* GraphQL */ `
  mutation UpdateAttendanceLocations($updates:[attendance_locations_updates!]!) {
    update_attendance_locations_many(updates: $updates) {
      returning {
        id
      }
    }
  }
`);

export const CREATE_ATTENDANCE_LOCATIONS_MUTATION = graphql(/* GraphQL */ `
  mutation CreateAttendanceLocations($objects: [attendance_locations_insert_input!]!) {
    insert_attendance_locations(objects: $objects) {
      returning {
        id
      }
    }
  }
`);


export const DELETE_ATTENDANCE_LOCATION_MUTATION = graphql(/* GraphQL */ `
  mutation DeleteAttendanceLocation($id: String!) {
    delete_attendance_locations_by_pk(id: $id) {
      id
    }
  }
`);