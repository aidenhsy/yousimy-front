import { useAxios } from '@/lib/hooks/restful/axios.hook';

export const useDepartmentTree = (): {
  departmentTreeData: any;
  departmentTreeLoading: boolean;
  departmentTreeError: any | undefined;
} => {
  const { data, loading, error } = useAxios(
    `${process.env.NEXT_PUBLIC_OPEN_URL}/departments`
  );
  return {
    departmentTreeData: data,
    departmentTreeLoading: Boolean(loading),
    departmentTreeError: error,
  };
};
