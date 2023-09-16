"use strict";
exports.__esModule = true;
exports.GET_LEAVE_TYPES_BY_PK_QUERY = exports.GET_LEAVE_TYPES_QUERY = void 0;
var __generated__1 = require("../__generated__");
exports.GET_LEAVE_TYPES_QUERY = __generated__1.graphql(/* GraphQL */ "\n  query GetLeaveTypes {\n    leave_types {\n      id\n      name\n      service_entitlements {\n        id\n        years_of_service\n        max_days\n        salary_type {\n          id\n          name\n        }\n      }\n    }\n  }\n");
exports.GET_LEAVE_TYPES_BY_PK_QUERY = __generated__1.graphql(/* GraphQL */ "\n  query GetLeaveTypesByPk($id: String!) {\n    leave_types_by_pk(id: $id) {\n      id\n      name\n    }\n  }\n");
