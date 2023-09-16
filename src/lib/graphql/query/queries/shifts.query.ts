import { graphql } from '@/gql';

// 班次列表
export const getShiftLists = graphql(/* GraphQL */ `
 query ShiftLists($take: Int!, $skip: Int!, $filter: ShiftListFilter) {
    shiftLists(take: $take, skip: $skip, filter: $filter) {
        items {
        shift_name
        id
        on_time
        off_time
        created_by
        updated_at
        }
        totalCount
    }
    }
`);
//  查看班次
export const shiftById = graphql(/* GraphQL */ `
    query ShiftById($shiftByIdId: String!) {
        shiftById(id: $shiftByIdId) {
            punch_times 
            shift_name
            no_need_off
            on_time
            off_time
            late_minutes_as_late
            late_minutes_as_lack
            early_minutes_as_early
            early_minutes_as_lack
        }
    }
`);