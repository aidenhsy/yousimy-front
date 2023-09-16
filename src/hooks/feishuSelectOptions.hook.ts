import { useAxios } from '@/lib/hooks/restful/axios.hook';

export const useFeishuOptions = (definitionCode: string): {
    feishuOptionsData: any;
    feishuOptionsLoading: boolean;
    feishuOptionsError: any | undefined;
} => {
    const { data, loading, error } = useAxios(
        `${process.env.NEXT_PUBLIC_OPEN_URL}/v4/approvals`, 'GET', {
        definitionCode,
    }
    );
    return {
        feishuOptionsData: data?.data,
        feishuOptionsLoading: Boolean(loading),
        feishuOptionsError: error,
    };
};
