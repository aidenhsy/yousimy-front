import { graphql } from '../../../../gql';

export const updateUserName = graphql(/* GraphQL */ `
  mutation UpdateUser($updateUserId: ID!, $updateFields: UpdateUserInput) {
    updateUser(id: $updateUserId, updateFields: $updateFields) {
      id
      name
      status 
    }
  }
`);

export const deleteAttachmentById = graphql(/* GraphQL */ `
  mutation DeleteUserAttachment($deleteUserAttachmentId: ID!) {
    deleteUserAttachment(id: $deleteUserAttachmentId)
  }
`);

export const createUser = graphql(/* GraphQL */ `
  mutation CreateUser($createFields: CreateUserInput) {
    createUser(createFields: $createFields) {
      id
    }
  }
`);

export const deleteUser = graphql(/* GraphQL */ `
  mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId)
  }
`);


