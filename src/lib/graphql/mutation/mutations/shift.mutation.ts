
import { graphql } from '../../../../gql';
//创建班次
export const createShift = graphql(/* GraphQL */ `
  mutation CreateShift($createShiftInput: CreateShiftInput) {
        createShift(createShiftInput: $createShiftInput) {
            created_by
        }
    }
`);
//修改班次
export const updateShift = graphql(/* GraphQL */ `
  mutation UpdateShift($shiftId: String!, $updateFields: UpdateShiftInput!) {
        updateShift(shift_id: $shiftId, updateFields: $updateFields) {
            id
        }
    }
`);
//删除班次
export const deleteShift = graphql(/* GraphQL */ `
  mutation DeleteShift($shiftId: String!) {
        deleteShift(shift_id: $shiftId) {
            id
        }
    }
`);
