import { graphql } from '@/gql';

export const birthdayStats = graphql(/* GraphQL */ `
  query BirthdayStats {
    birthdayStats {
      todayCount
      thisWeekCount
      thisMonthCount
      nextMonthCount
      lastMonthCount
    }
  }
`);
export const hireDateStats = graphql(/* GraphQL */ `
  query HireDateStats {
    hireDateStats {
      lastMonthCount
      nextMonthCount
      thisMonthCount
      thisWeekCount
      todayCount
    }
  }
`);

export const rosterStats = graphql(/* GraphQL */ `
  query RosterStats {
    rosterStats: hrStats {
      awaitUnemployCount
      internEmployeeCount
      isEmployedCount
      notEmployedCount
      outsourcedEmployeeCount
      regularEmployeeCount
      trialEmployeeCount
    }
  }
`);

export const onboardingStats = graphql(/* GraphQL */ `
  query HrOnboardingStats {
    hrOnboardingStats {
      awaitOnboardingCount
      todayAwaitOnboardingCount
      thisMonthAwaitOnboardingCount
    }
  }
`);
export const conversionStats = graphql(/* GraphQL */ `
  query HrConversionStats {
  hrConversionStats {
    awaitRegularizedCount
    overdueRegularizedCount
    thisMonthAwaitRegularizedCount
    nextMonthAwaitRegularizedCount
  }
}
`);

export const resignStats = graphql(/* GraphQL */ `
  query HrResignStats {
    hrResignStats {
      awaitHiredCount
    }
  }
`);



