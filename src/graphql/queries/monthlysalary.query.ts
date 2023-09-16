import { graphql } from '../__generated__';

export const GET_MONTHLY_SALARY_QUERY = graphql(/* GraphQL */ `
  query GetMonthlySalary(
    $limit: Int
    $offset: Int
    $where: monthlysalary_bool_exp
    $where1: bonusdeductions_bool_exp
    $where2: insurance_funds_bool_exp
  ) {
    monthlysalary(limit: $limit, offset: $offset, where: $where) {
      employee_id
      attendance_department_id
      attendance_department {
        name
      }
      employee_department_id
      employee_department {
        name
      }
      employee {
        avatar
        name
        status
        job_title
        birthday
        id_number
        bank_name
        bank_account_number
        hire_date
        basic_salary
        bonusdeductions(where: $where1) {
          amount
          department_id
          bonusdeductiontype {
            name
            is_bonus
          }
        }
        insurance_funds(where: $where2) {
          amount
          department_id
          insurance_fund_type {
            name
            is_personal
          }
        }
        department {
          id
          name
        }
      }
      work_age
      work_age_type
      basic_salary
      basic_salary_base
      basic_salary_monthly
      insurance_subsidy
      overtime_pay
      position_pay
      work_age_bonus
      bonus_deduction
      personal_insurance_funds
      corp_insurance_funds
      net_salary
      corp_salary_cost
      gross_salary
      salary_type
      total_length_day
      total_length_hour
      employee_confirm
    }
    monthlysalary_aggregate(where: $where) {
      aggregate {
        count
        sum {
          corp_salary_cost
        }
      }
    }
  }
`);
