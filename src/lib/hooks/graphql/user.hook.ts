import { useMutation, useQuery } from '@apollo/client';
import {
  birthdayPageUsersQuery,
  searchUsers,
  userInfoQuery,
  usersByDepartmentsId,
  usersByIdQuery,
  usersQuery,
  useHrStats,
  userAttachments,
  employeesRoles,
} from '../../graphql/query';
import { UpdateUserInput, UsersFilter } from '../../../gql/graphql';
import { updateUserName, deleteAttachmentById, createUser, deleteUser } from '../../graphql/mutation';

export const useUserInfo = () => {
  const { data, loading, error } = useQuery(userInfoQuery);
  return {
    userInfo: data?.user,
    userInfo_loading: loading,
    userInfo_error: Boolean(error),
  };
};

export const userByIdInfo = (id: string) => {
  const { data, loading, error, refetch } = useQuery(usersByIdQuery, {
    variables: { userByIdId: id },
  });
  return {
    userInfo: data?.userById,
    userInfo_refetch: refetch,
    userInfo_loading: loading,
    userInfo_error: Boolean(error),
  };
};

export const useUsers = (take: number, skip: number, filter: UsersFilter) => {
  const { data, loading, error, refetch } = useQuery(usersQuery, {
    variables: { take, skip, filter },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'no-cache',
  });
  return {
    users: data?.users,
    users_loading: loading,
    users_error: Boolean(error),
    users_refetch: refetch,
  };
};

export const useBirthdayUsers = (take: number, skip: number) => {
  const { data, loading, error, refetch } = useQuery(birthdayPageUsersQuery, {
    variables: { take, skip },
    notifyOnNetworkStatusChange: true,
  });
  return {
    birthdayUsers: data?.users,
    birthdayUsers_loading: loading,
    birthdayUsers_error: error,
    birthdayUsers_refetch: refetch,
  };
};

export const useUsersByDepartmentId = (
  department_id: string,
  take: number,
  skip: number
) => {
  const { data, loading, error, refetch } = useQuery(usersByDepartmentsId, {
    variables: { department_id, take, skip },
    notifyOnNetworkStatusChange: true,
  });
  return {
    usersByDepartmentId_data: data?.usersByDepartmentId,
    usersByDepartmentId_loading: loading,
    usersByDepartmentId_error: Boolean(error),
    usersByDepartmentId_refetch: refetch,
  };
};

export const useSearchUsers = (searchTerm: string | undefined) => {
  const { data, loading, error, refetch } = useQuery(searchUsers, {
    variables: { searchTerm },
    notifyOnNetworkStatusChange: true,
  });
  return {
    searchTerm_data: data?.usersSearch,
    searchTerm_loading: loading,
    searchTerm_error: Boolean(error),
    searchTerm_refetch: refetch,
  };
};

export const useGetHrStats = () => {
  const { data, loading, error } = useQuery(useHrStats);
  return {
    usehrStats_data: data?.hrStats,
    usehrStats_loading: loading,
    usehrStats_error: Boolean(error),
  };
};

export const userAttachmentsById = (id: string) => {
  const { data, loading, error, refetch } = useQuery(userAttachments, {
    variables: { id },
  });
  return {
    attachments: data?.userAttachmentsById,
    attachments_loading: loading,
    attachments_error: Boolean(error),
    attachments_refetch: refetch,
  };
};
// Mutations
export const useUpdateUser = () => {
  const [mutate, { loading, error, data }] = useMutation(updateUserName);

  const updateUser = async (
    updateUserId: string,
    updateFields: UpdateUserInput
  ) => {
    return await mutate({
      variables: { updateUserId, updateFields },
    });
  };

  return {
    updateUser,
    updateUser_loading: loading,
    updateUser_data: data?.updateUser,
    updateUser_error: Boolean(error),
  };
};

export const useCreateUser = () => {
  const [mutate, { loading, error, data }] = useMutation(createUser);

  const createToUser = async (
    createFields: UpdateUserInput
  ) => {
    return await mutate({
      variables: { createFields },
    });
  };

  return {
    createToUser,
    createToUser_loading: loading,
    createToUser_data: data?.createUser,
    createToUser_error: Boolean(error),
  };
};

export const useDeleteUser = () => {
  const [mutate, { loading, error, data }] = useMutation(deleteUser);

  const deleteToUser = async (
    deleteUserId: string
  ) => {
    return await mutate({
      variables: { deleteUserId },
    });
  };

  return {
    deleteToUser,
    deleteToUser_loading: loading,
    deleteToUser_data: data?.deleteUser,
    deleteToUser_error: Boolean(error),
  };
};


export const useDeleteAttachment = (deleteUserAttachmentId: string) => {
  const [mutate, { loading, error, data }] = useMutation(deleteAttachmentById, {
    variables: { deleteUserAttachmentId },
  });
  const deleteAttachment = async (deleteUserAttachmentId: string) => {
    await mutate({
      variables: { deleteUserAttachmentId },
    });
  };
  return {
    deleteAttachment,
    deleteAttachment_loading: loading,
    deleteAttachment_data: data,
    deleteAttachment_error: error,
  };
};

export const useRoles = (take: number, skip: number, filter: UsersFilter) => {
  const { data, loading, error, refetch } = useQuery(employeesRoles, {
    variables: { take, skip, filter },
    notifyOnNetworkStatusChange: true,
  });
  return {
    roles: data?.users,
    roles_loading: loading,
    roles_error: Boolean(error),
    roles_refetch: refetch,
  };
};
