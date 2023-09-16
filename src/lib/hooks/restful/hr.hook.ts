import { useAxios } from './axios.hook';
import { TranslationDictionary } from '@/lib/tools/translateObject';

export const useHrDictionary = (): {
  hrDictionary: TranslationDictionary;
  hrKeyReverse: Record<string, string>;
  hrDictionary_loading: boolean;
  hrDictionary_error: any;
} => {
  const { data, loading, error } = useAxios(
    `${process.env.NEXT_PUBLIC_OPEN_URL}/hr/dictionary`
  );
  return {
    hrDictionary: data?.hrDictionary,
    hrKeyReverse: data?.hrKeyReverse,
    hrDictionary_loading: loading,
    hrDictionary_error: error,
  };
};
