import { birthdayStats, conversionStats, hireDateStats, onboardingStats, resignStats, rosterStats } from '@/lib/graphql/query';
import { useQuery } from '@apollo/client';

export const useBirthdayStats = () => {
  const { data, loading, error } = useQuery(birthdayStats);
  return {
    stats: data?.birthdayStats,
    stats_loading: loading,
  };
};

export const useHireDateStats = () => {
  const { data, loading, error } = useQuery(hireDateStats);
  return {
    hireStats: data?.hireDateStats,
    hireStats_loading: loading,
  };
};

export const useRosterStats = () => {
  const { data, loading, error } = useQuery(rosterStats);
  return {
    rosterStats: data?.rosterStats,
    rosterStats_loading: loading,
    rosterStats_error: error,
  };
};

export const useOnboardingStats = () => {
  const { data, loading, error } = useQuery(onboardingStats);
  return {
    onboardingStats: data?.hrOnboardingStats,
    onboardingStats_loading: loading,
    onboardingStats_error: error,
  };
};

export const useConversionStats = () => {
  const { data, loading, error } = useQuery(conversionStats);
  return {
    conversionStats: data?.hrConversionStats,
    conversionStats_loading: loading,
    conversionStats_error: error,
  };
};

export const useResignStats = () => {
  const { data, loading, error } = useQuery(resignStats);
  return {
    resignStats: data?.hrResignStats,
    resignStats_loading: loading,
    resignStats_error: error,
  };
};


