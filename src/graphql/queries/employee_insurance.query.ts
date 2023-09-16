import { graphql } from '../__generated__';

export const EMPLOYEE_INSURANCE_QUERY = graphql(/* GraphQL */ `
  query EmployeeInsurance(
    $where: employee_insurance_bool_exp
    $limit: Int
    $offset: Int
  ) {
    employee_insurance(where: $where, limit: $limit, offset: $offset) {
      corp_heating
      corp_major_medical
      employee {
        name
        avatar
        id
        status
        department {
          name
        }
      }
      corp_housing_fund
      corp_maternity_insurance
      corp_medical_insurance
      corp_pay
      corp_retirement_insurance
      corp_unemployment_insurance
      corp_work_injury
      id
      heating_base
      medical_base
      month
      payment_start_date
      pension_base
      personal_fund_balance
      personal_housing_fund
      personal_major_medical
      personal_medical_insurance
      personal_pay
      personal_pension_insurance
      personal_unemployment_insurance
      unemployment_base
      work_injury_base
    }
    employee_insurance_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`);
