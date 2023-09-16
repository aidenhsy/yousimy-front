import { useMutation, useQuery } from '@apollo/client';
import { addAdminsStoresMutation, addStoreAdminsMutation, deleteStoreAdminsMutation } from '@/lib/graphql/mutation';
import { getStores, getStoresByEmployeeId } from '@/lib/graphql/query';



export const useGetStoreManangers = () => {
    const { data, loading, error, refetch } = useQuery(getStores, {
        notifyOnNetworkStatusChange: true,
    });
    const dataSource: any = [];
    (data?.stores || []).filter((one) => one?.status === 2).forEach((item) => {
        item?.managers?.forEach((admin: any) => {
            const sourceFilter = dataSource.filter((one: any) => one.id === admin.id)
            if (sourceFilter.length) {
                sourceFilter[0].stores.push({
                    id: item.shop_id,
                    name: item.storeName
                })
            } else {
                dataSource.push({
                    ...admin,
                    stores: [
                        {
                            id: item.shop_id,
                            name: item.storeName
                        }
                    ]
                })
            }
        })
    })
    return {
        storeManagers_data: dataSource,
        storeManagers_loading: loading,
        storeManagers_error: Boolean(error),
        storeManagers_refetch: refetch,
    };
};

export const useGetStoresByEmployeeId = (storesByEmployeeId: string) => {
    const { data, loading, error, refetch } = useQuery(getStoresByEmployeeId, {
        variables: { storesByEmployeeId },
        notifyOnNetworkStatusChange: true,
    });

    return {
        storesByEmployee: data?.storesByEmployee,
        storesByEmployee_loading: loading,
        storesByEmployee_error: Boolean(error),
        storesByEmployee_refetch: refetch,
    };
};

//添加人员到门店
export const useAddStoreAdmins = () => {
    const [mutate, { loading, error, data }] = useMutation(addStoreAdminsMutation);
    const addStoreAdmins = async (
        storeId: string,
        employeeIds: string[]
    ) => {
        return await mutate({
            variables: { storeId, employeeIds },
            notifyOnNetworkStatusChange: true
        });
    };
    return {
        addStoreAdmins,
        addStoreAdmins_loading: loading,
        addStoreAdmins_data: data,
        addStoreAdmins_error: Boolean(error),
    };
};

//从门店删除管理员
export const useDelteStoreAdmins = () => {
    const [mutate, { loading, error, data }] = useMutation(deleteStoreAdminsMutation);
    const delteStoreAdmins = async (
        storeId: string,
        employeeIds: string[]
    ) => {
        return await mutate({
            variables: { storeId, employeeIds },
            notifyOnNetworkStatusChange: true
        });
    };
    return {
        delteStoreAdmins,
        delteStoreAdmins_loading: loading,
        delteStoreAdmins_data: data,
        delteStoreAdmins_error: Boolean(error),
    };
};

//添加门店到某个管理员
export const useAddAdminsStores = () => {
    const [mutate, { loading, error, data }] = useMutation(addAdminsStoresMutation);
    const addAdminsStores = async (
        storeIds: string[],
        employeeIds: string[]
    ) => {
        return await mutate({
            variables: { storeIds, employeeIds },
            notifyOnNetworkStatusChange: true
        });
    };
    return {
        addAdminsStores,
        addAdminsStores_loading: loading,
        addAdminsStores_data: data,
        addAdminsStores_error: Boolean(error),
    };
};

