import { graphql } from '../../../../gql';

export const userInfoQuery = graphql(/* GraphQL */ `
  query NaviItems {
    user {
      avatar
      id
      name
    }
  }
`);

export const usersQuery = graphql(/* GraphQL */ `
  query Users($take: Int!, $skip: Int!, $filter: UsersFilter) {
    users(take: $take, skip: $skip, filter: $filter) {
      totalCount
      items {
        id
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
        gender_id
        employee_type
        department_id
        department {
          name
          id
        }
        ethnicity
        application
        application_status
        native_region {
          iso_code
          name
        }
        primary_emergency_contact {
          name
          relationship
          mobile
        }
        probation_months
        provident_fund_account
        social_security_account
        bank_name
        bank_account_number
        salary_type
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
      }
    }
  }
`);

export const usersByIdQuery = graphql(/* GraphQL */ `
  query UserById($userByIdId: String) {
    userById(id: $userByIdId) {
      user_id
      id
      id_number
      medical_insurance
      status
      employee_form_status
      name
      mobile
      avatar
      user_id
      hire_date
      job_id
      job_title
      last_day
      departure_type
      birthday
      departure_type
      gender_id
      employee_type
      department_id
      department {
        name
        id
      }
      ethnicity
      application
      application_status
      native_region {
        iso_code
        name
      }
      primary_emergency_contact {
        name
        relationship
        mobile
      }
      probation_months
      provident_fund_account
      social_security_account
      bank_name
      bank_account_number
      salary_type
      basic_salary
      basic_salary_monthly
      manager_id
      work_age_type
      family_address
      hukou_type
      hukou_location
    }
  }
`);

export const usersByDepartmentsId = graphql(/* GraphQL */ `
  query UsersByDepartmenstId($department_id: String, $take: Int!, $skip: Int!) {
    usersByDepartmentId(
      department_id: $department_id
      take: $take
      skip: $skip
    ) {
      items {
        id
        name
        user_id
        avatar
        hire_date
        job_title
        department {
          name
        }
        status
        mobile
      }
      totalCount
    }
  }
`);

export const birthdayPageUsersQuery = graphql(/* GraphQL */ `
  query BirthdayPageUsersQuery($take: Int!, $skip: Int!) {
    users(take: $take, skip: $skip) {
      totalCount
      items {
        name
        id
        avatar
        status
        job_title
        birthday
      }
    }
  }
`);

export const searchUsers = graphql(/* GraphQL */ `
  query UsersSearch($searchTerm: String) {
    usersSearch(searchTerm: $searchTerm) {
      items {
        name
        id
        hire_date
        department_id
        department {
          name
        }
        avatar
        mobile
        job_title
        user_id
        status
      }
      totalCount
    }
  }
`);

export const userAttachments = graphql(/* GraphQL */ `
  query userAttachments($id: String) {
    userAttachmentsById(id: $id) {
      attachmentContents {
        file_name
        id
        path
      }
      isMulti
      key
      kind
      name
    }
  }
`);

export const useHrStats = graphql(/* GraphQL */ `
  query HrStats {
    hrStats {
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
export const employeesRoles = graphql(/* GraphQL */ `
  query EmployeesByRoles($take: Int!, $skip: Int!, $filter: UsersFilter) {
    users(take: $take, skip: $skip, filter: $filter) {
      totalCount
      items {
        name
        mobile
        roles {
          id
          name
          ranking
        }
        department {
          name
        }
        avatar
        id
      }
    }
  }
`);
