import { graphql } from '../__generated__';

export const CREATE_EMPLOYEES_MUTATION = graphql(/* GraphQL */ `
 mutation CreateEmployees($id: String, $mobile: String, $name: String, $hire_date: date, $department_id: String, $status: smallint $manager_id:String) {
    insert_employees(objects: {id: $id, name: $name, mobile: $mobile, hire_date: $hire_date, department_id: $department_id, status: $status, manager_id:$manager_id}) {
      returning {
        id
        name
        mobile
        department{
          id
          name
        }
      }
    }
  }
`);

export const UPDATE_EMPLOYEE_MUTATION = graphql(/* GraphQL */ `
 mutation UpdateEmployee($_set: employees_set_input, $where: employees_bool_exp!) {
    update_employees(_set: $_set, where: $where) {
      returning {
        id
      }
    }
  }
`);

export const DELETE_EMPLOYEE_MUTATION = graphql(/* GraphQL */ `
 mutation DeleteEmployee($where: employees_bool_exp!) {
    delete_employees(where: $where) {
      returning {
        id
      }
    }
  }
`);

export const DELETE_EMPLOYEE_ATTACHMENT_MUTATION = graphql(/* GraphQL */ `
  mutation DeleteEmployeeAttachment($where: employee_attachments_bool_exp!) {
    delete_employee_attachments(where: $where) {
      returning {
        id
      }
    }
  }
`);

