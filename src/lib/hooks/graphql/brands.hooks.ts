import { useMutation, useQuery } from '@apollo/client';
import { getBrands } from '../../graphql/query';

// 品牌列表
export const useBrandsList = (brandName: string) => {
    const { data, loading, error, refetch } = useQuery(getBrands, {
        variables: { brandName },
        notifyOnNetworkStatusChange: true
    });

    const dataSource = data?.brands?.map((item) => {
        if (item?.stores) {
            return {
                ...item,
                selectable: false,
                stores: item.stores.filter((one) => one?.status === 2).map((item2) => ({ ...item2, id: item2?.shop_id, name: item2?.storeName }))
            }
        }
    })
    return {
        brands_data: dataSource,
        brands_loading: loading,
        brands_error: Boolean(error),
        brands_refetch: refetch
    };
};