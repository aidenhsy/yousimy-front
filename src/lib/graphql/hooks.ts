import { useQuery as useApolloQuery } from '@apollo/client';
import {
  userInfoQuery,
  usersQuery,
  usersByIdQuery,
  usersByDepartmentsId,
  departmentById,
} from './query';
import { UsersFilter } from '../../gql/graphql';

export const useUserInfo = () => {
  const { data, loading, error } = useApolloQuery(userInfoQuery);
  return {
    userInfo: data?.user,
    userInfo_loading: loading,
    userInfo_error: Boolean(error),
  };
};

export const usersByIdInfo = (id: string) => {
  const { data, loading, error } = useApolloQuery(usersByIdQuery, {
    variables: { userByIdId: id },
  });
  return {
    userInfo: data?.userById,
    userInfo_loading: loading,
    userInfo_error: Boolean(error),
  };
};

export const useUsers = (take: number, skip: number, filter: UsersFilter) => {
  const { data, loading, error } = useApolloQuery(usersQuery, {
    variables: { take, skip, filter },
  });
  return {
    users: data?.users,
    users_loading: loading,
    users_error: Boolean(error),
  };
};

// export const useBirthdayStats = () => {
//   const { data, loading, error } = useApolloQuery(birthdayStats);
//   return {
//     stats: data?.birthdayStats,
//     stats_loading: loading,
//   };
// };

export const useUsersByDepartmentId = (
  department_id: string,
  take: number,
  skip: number
) => {
  const { data, loading, error } = useApolloQuery(usersByDepartmentsId, {
    variables: { department_id, take, skip },
  });
  return {
    usersByDepartmentId: data?.usersByDepartmentId,
    usersByDepartmentId_loading: loading,
    usersByDepartmentId_error: Boolean(error),
  };
};

export const useDepartmentById = (department_id: string) => {
  const { data, loading, error } = useApolloQuery(departmentById, {
    variables: { department_id },
  });
  return {
    departmentById: data?.departmentById,
    departmentById_loading: loading,
    departmentById_error: Boolean(error),
  };
};
interface DeptType {
  id: string;
  name?: string;
  __typename?: 'Department';
  child_departments?: DeptType[];
}
// export const useDepartments = () => {
//   const { data, loading, error } = useApolloQuery(departments);
//   return {
//     departments: data?.departments,
//     departments_loading: loading,
//     departments_error: Boolean(error),
//   };
// };

export const userWindow = () => {
  return typeof window !== 'undefined' ? window : null;
};
