import { graphql } from '../__generated__';


export const SHIFTS_LIST_QUERY = graphql(/* GraphQL */ `
    query ShiftsList($where: shift_lists_bool_exp, $limit: Int!, $offset: Int!) {
    shift_lists(where: $where, limit: $limit, offset: $offset) {
      id
      off_time
      on_time
      shift_name
      updated_at
      created_by
      scheduled_length_day
      scheduled_length_hour
    }
    shift_lists_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`);

export const SHIFT_BY_ID_QUERY = graphql(/* GraphQL */ `
    query ShiftById($id: String!) {
        shift_lists_by_pk(id: $id) {
            punch_times 
            shift_name
            no_need_off
            on_time
            off_time
            late_minutes_as_late
            late_minutes_as_lack
            early_minutes_as_early
            early_minutes_as_lack
            scheduled_length_day
            scheduled_length_hour
        }
    }
`);