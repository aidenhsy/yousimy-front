"use strict";
exports.__esModule = true;
exports.GET_SALARY_TYPES_BY_PK_QUERY = exports.GET_SALARY_TYPES_QUERY = void 0;
var __generated__1 = require("../__generated__");
exports.GET_SALARY_TYPES_QUERY = __generated__1.graphql(/* GraphQL */ "\n  query GetSalaryTypes($where: service_entitlement_bool_exp) {\n    salary_types {\n      id\n      name\n      service_entitlements(where: $where, order_by: { years_of_service: asc }) {\n        id\n        max_days\n        years_of_service\n      }\n    }\n  }\n");
exports.GET_SALARY_TYPES_BY_PK_QUERY = __generated__1.graphql(/* GraphQL */ "\n  query GetSalaryTypesByPk($id: String!) {\n    salary_types_by_pk(id: $id) {\n      id\n      name\n    }\n  }\n");
