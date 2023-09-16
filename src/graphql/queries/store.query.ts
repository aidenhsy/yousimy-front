import { graphql } from '../__generated__';

export const STORES_QUERY = graphql(/* GraphQL */ `
  query Stores {
    stores {
      id
      name
      brand_id
      brand {
        name
      }
    }
  }
`);

export const STORE_LIST_QUERY = graphql(/* GraphQL */ `
  query StoreList($where: store_employee_bool_exp!) {
    store_employee(where: $where) {
      store {
        department {
          id
          name
        }
        id
        name
      }
    }
  }
`);

export const STORES_EMPLOYEES_QUERY = graphql(/* GraphQL */ `
  query StoresEmployees($where: employees_bool_exp) {
    stores {
      id
      name
      department {
        child_departments {
          id
          name
          employees(where: $where) {
            id
            avatar
            status
            name
            mobile
            job_title
            hire_date
            department {
              name
              id
            }
            actual_overboard_time
            overboard_note
          }
        }
        employees(where: $where) {
          id
          avatar
          status
          name
          mobile
          job_title
          hire_date
          department {
            name
            id
          }
          actual_overboard_time
          overboard_note
        }
      }
    }
  }
`);

export const STORES_EMPLOYEES_STATUS_COUNT_QUERY = graphql(/* GraphQL */ `
  query StoresEmployeesStatusCount {
    isEmployedCount: stores {
      departments {
        child_departments {
          employees_aggregate(where: { status: { _eq: 2 } }) {
            aggregate {
              count
            }
          }
        }
        employees_aggregate(where: { status: { _eq: 2 } }) {
          aggregate {
            count
          }
        }
      }
    }
    regularEmployeeCount: stores {
      departments {
        child_departments {
          employees_aggregate(
            where: {
              _and: [{ status: { _eq: 2 } }, { employee_type: { _eq: 1 } }]
            }
          ) {
            aggregate {
              count
            }
          }
        }
        employees_aggregate(
          where: {
            _and: [{ status: { _eq: 2 } }, { employee_type: { _eq: 1 } }]
          }
        ) {
          aggregate {
            count
          }
        }
      }
    }
    internEmployeeCount: stores {
      departments {
        child_departments {
          employees_aggregate(
            where: {
              _and: [{ status: { _eq: 2 } }, { employee_type: { _eq: 2 } }]
            }
          ) {
            aggregate {
              count
            }
          }
        }
        employees_aggregate(
          where: {
            _and: [{ status: { _eq: 2 } }, { employee_type: { _eq: 2 } }]
          }
        ) {
          aggregate {
            count
          }
        }
      }
    }
    awaitUnemployCount: stores {
      departments {
        child_departments {
          employees_aggregate(where: { status: { _eq: 4 } }) {
            aggregate {
              count
            }
          }
        }
        employees_aggregate(where: { status: { _eq: 4 } }) {
          aggregate {
            count
          }
        }
      }
    }
    notEmployedCount: stores {
      departments {
        child_departments {
          employees_aggregate(where: { status: { _eq: 5 } }) {
            aggregate {
              count
            }
          }
        }
        employees_aggregate(where: { status: { _eq: 5 } }) {
          aggregate {
            count
          }
        }
      }
    }
    awaitOnboardingCount: stores {
      departments {
        child_departments {
          employees_aggregate(where: { status: { _eq: 1 } }) {
            aggregate {
              count
            }
          }
        }
        employees_aggregate(where: { status: { _eq: 1 } }) {
          aggregate {
            count
          }
        }
      }
    }
  }
`);

export const STORE_DEPARTMENTS_QUERY = graphql(/* GraphQL */ `
  query StoreDepartments {
    stores {
      id
      name
      departments {
        id
        name
        child_departments {
          id
          name
        }
      }
    }
  }
`);
