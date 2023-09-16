import { graphql } from '../__generated__';

export const EMPLOYEES_QUERY = graphql(/* GraphQL */ `
  query Employess($offset: Int!, $limit: Int!, $where: employees_bool_exp) {
    employees_aggregate(where: $where) {
      aggregate {
        count
      }
    }
    employees(
      limit: $limit
      offset: $offset
      order_by: { updated_at: desc }
      where: $where
    ) {
      id
      id_number
      status
      employee_form_status
      name
      mobile
      avatar
      user_id
      hire_date
      job_title
      last_day
      departure_type
      birthday
      departure_type
      employee_type
      department_id
      department {
        name
        id
      }
      gender_id
      marital_status
      medical_insurance
      ethnicity
      application
      application_status
      native_region
      primary_emergency_contact
      probation_months
      provident_fund_account
      social_security_number
      bank_name
      bank_account_number
      salary_type
      salary_type_id
      basic_salary
      basic_salary_monthly
      manager_id
      work_age_type
      family_address
      hukou_type
      hukou_location
      actual_conversion_time
      actual_overboard_time
      overboard_note
      salaryType {
        id
        name
      }
      store_employees {
        store {
          id
          name
        }
      }
      attendances {
        clockInResult
        clock_in_time
        clockOutResult
        clock_out_time
        date
        shift_id
        id
        scheduled_length_day
        actual_length_hour
        actual_length_day
        shift_list {
          early_minutes_as_early
          early_minutes_as_lack
          late_minutes_as_lack
          late_minutes_as_late
          off_time
          on_time
        }
      }
    }
  }
`);

export const EMPLOYEES_STATUS_COUNT_QUERY = graphql(/* GraphQL */ `
  query EmployeesStatusCount(
    $where: employees_bool_exp
    $todayDate: date
    $thisWeekDateStart: date
    $thisWeekDateEnd: date
    $thisMonthDateStart: date
    $thisMonthDateEnd: date
    $nextMonthDateStart: date
    $nextMonthDateEnd: date
    $lastMonthDateStart: date
    $lastMonthDateEnd: date
    $todayDateMMDD: String
    $thisWeekDateStartMMDD: String
    $thisWeekDateEndMMDD: String
    $thisMonthDateStartMMDD: String
    $thisMonthDateEndMMDD: String
    $nextMonthDateStartMMDD: String
    $nextMonthDateEndMMDD: String
    $lastMonthDateStartMMDD: String
    $lastMonthDateEndMMDD: String
  ) {
    isEmployedCount: employees_aggregate(where: { status: { _eq: 2 } }) {
      aggregate {
        count
      }
    }
    informationNotFilled: employees_aggregate(where: { status: { _eq: 6 } }) {
      aggregate {
        count
      }
    }
    feishuIsReviewing: employees_aggregate(where: { status: { _eq: 7 } }) {
      aggregate {
        count
      }
    }
    feishuReviewRejected: employees_aggregate(where: { status: { _eq: 9 } }) {
      aggregate {
        count
      }
    }
    regularEmployeeCount: employees_aggregate(
      where: { _and: [{ status: { _eq: 2 } }, { employee_type: { _eq: 1 } }] }
    ) {
      aggregate {
        count
      }
    }
    internEmployeeCount: employees_aggregate(
      where: { _and: [{ status: { _eq: 2 } }, { employee_type: { _eq: 2 } }] }
    ) {
      aggregate {
        count
      }
    }
    outsourcedEmployeeCount: employees_aggregate(
      where: { _and: [{ status: { _eq: 2 } }, { employee_type: { _eq: 4 } }] }
    ) {
      aggregate {
        count
      }
    }
    trialEmployeeCount: employees_aggregate(
      where: {
        _and: [{ status: { _eq: 2 } }, { application_status: { _eq: 2 } }]
      }
    ) {
      aggregate {
        count
      }
    }
    awaitUnemployCount: employees_aggregate(where: { status: { _eq: 4 } }) {
      aggregate {
        count
      }
    }
    notEmployedCount: employees_aggregate(where: { status: { _eq: 5 } }) {
      aggregate {
        count
      }
    }
    awaitOnboardingCount: employees_aggregate(where: { status: { _eq: 1 } }) {
      aggregate {
        count
      }
    }
    awaitRegularizedCount: employees_aggregate(
      where: { application_status: { _eq: 2 } }
    ) {
      aggregate {
        count
      }
    }
    overdueRegularizedCount: employees_aggregate(
      where: {
        _and: [
          { actual_conversion_time: { _lt: $todayDate } }
          { application_status: { _eq: 2 } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    thisMonthAwaitRegularizedCount: employees_aggregate(
      where: {
        _and: [
          { actual_conversion_time: { _gte: $thisMonthDateStart } }
          { actual_conversion_time: { _lte: $thisMonthDateEnd } }
          { application_status: { _eq: 2 } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    nextMonthAwaitRegularizedCount: employees_aggregate(
      where: {
        _and: [
          { actual_conversion_time: { _gte: $nextMonthDateStart } }
          { actual_conversion_time: { _lte: $nextMonthDateEnd } }
          { application_status: { _eq: 2 } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    todayHireDateCount: employees_aggregate(
      where: {
        _and: [
          { hire_date_mm_dd: { _gte: $todayDateMMDD } }
          { hire_date_mm_dd: { _lte: $todayDateMMDD } }
          { status: { _eq: 2 } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    thisWeekHireDateCount: employees_aggregate(
      where: {
        _and: [
          { hire_date_mm_dd: { _gte: $thisWeekDateStartMMDD } }
          { hire_date_mm_dd: { _lte: $thisWeekDateEndMMDD } }
          { status: { _eq: 2 } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    thisMonthHireDateCount: employees_aggregate(
      where: {
        _and: [
          { hire_date_mm_dd: { _gte: $thisMonthDateStartMMDD } }
          { hire_date_mm_dd: { _lte: $thisMonthDateEndMMDD } }
          { status: { _eq: 2 } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    nextMonthHireDateCount: employees_aggregate(
      where: {
        _and: [
          { hire_date_mm_dd: { _gte: $nextMonthDateStartMMDD } }
          { hire_date_mm_dd: { _lte: $nextMonthDateEndMMDD } }
          { status: { _eq: 2 } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    lastMonthHireDateCount: employees_aggregate(
      where: {
        _and: [
          { hire_date_mm_dd: { _gte: $lastMonthDateStartMMDD } }
          { hire_date_mm_dd: { _lte: $lastMonthDateEndMMDD } }
          { status: { _eq: 2 } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    todayBirthdayCount: employees_aggregate(
      where: {
        _and: [
          { birthday_mm_dd: { _gte: $todayDateMMDD } }
          { birthday_mm_dd: { _lte: $todayDateMMDD } }
          { status: { _eq: 2 } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    thisWeekBirthdayCount: employees_aggregate(
      where: {
        _and: [
          { birthday_mm_dd: { _gte: $thisWeekDateStartMMDD } }
          { birthday_mm_dd: { _lte: $thisWeekDateEndMMDD } }
          { status: { _eq: 2 } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    thisMonthBirthdayCount: employees_aggregate(
      where: {
        _and: [
          { birthday_mm_dd: { _gte: $thisMonthDateStartMMDD } }
          { birthday_mm_dd: { _lte: $thisMonthDateEndMMDD } }
          { status: { _eq: 2 } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    nextMonthBirthdayCount: employees_aggregate(
      where: {
        _and: [
          { birthday_mm_dd: { _gte: $nextMonthDateStartMMDD } }
          { birthday_mm_dd: { _lte: $nextMonthDateEndMMDD } }
          { status: { _eq: 2 } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
    lastMonthBirthdayCount: employees_aggregate(
      where: {
        _and: [
          { birthday_mm_dd: { _gte: $lastMonthDateStartMMDD } }
          { birthday_mm_dd: { _lte: $lastMonthDateEndMMDD } }
          { status: { _eq: 2 } }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`);

export const EMPLOYEE_ATTACHMENT_QUERY = graphql(/* GraphQL */ `
  query EmployeeAttachment($where: employee_attachments_bool_exp) {
    employee_attachments(where: $where) {
      employee_id
      file_name
      id
      kind
      path
    }
  }
`);

export const EMPLOYEES_BY_PK_QUERY = graphql(/* GraphQL */ `
  query EmployeesByPk($id: String!) {
    employees_by_pk(id: $id) {
      id
      id_number
      status
      employee_form_status
      name
      mobile
      avatar
      hire_date
      job_title
      last_day
      departure_type
      birthday
      departure_type
      employee_type
      department_id
      department {
        name
        id
      }
      gender_id
      marital_status
      medical_insurance
      ethnicity
      application
      application_status
      native_region
      primary_emergency_contact
      probation_months
      provident_fund_account
      social_security_number
      bank_name
      bank_account_number
      salary_type_id
      basic_salary
      basic_salary_monthly
      manager_id
      work_age_type
      family_address
      hukou_type
      hukou_location
      actual_conversion_time
      actual_overboard_time
      overboard_note
      employee_attachments {
        id
        kind
        path
        file_name
      }
    }
  }
`);

export const EMPLOYEE_SALARY_MONTHLY_QUERY = graphql(/* GraphQL */ `
  query EmployeeSalaryMonthly(
    $offset: Int
    $limit: Int
    $where: employees_bool_exp
    $where1: attendance_bool_exp
  ) {
    employees(limit: $limit, offset: $offset, where: $where) {
      id
      name
      id_number
      job_title
      status
      avatar
      salary_type
      department {
        id
        name
      }

      attendances_aggregate(where: $where1) {
        aggregate {
          count
          sum {
            actual_length_hour
            actual_length_day
            scheduled_length_day
            scheduled_length_hour
          }
        }
      }
    }
    employees_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`);

export const EMPLOYEE_BY_PK_ATTENDANCES_QUERY = graphql(/* GraphQL */ `
  query EmployeeByPkAttendances($id: String!, $where: attendance_bool_exp) {
    employees_by_pk(id: $id) {
      id
      department_id
      name
      status
      salary_type
      basic_salary
      basic_salary_monthly
      attendances(where: $where, order_by: { date: asc }) {
        id
        date
        clock_in_time
        clock_in_result
        clock_out_time
        clock_out_result
        clockInResult
        clockOutResult
        department {
          id
          name
        }
        attendance_location {
          name
        }
        shift_list {
          shift_name
          on_time
          off_time
        }
      }
    }
  }
`);
