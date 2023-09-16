"use strict";
exports.__esModule = true;
exports.GET_BONUS_DEDUCTIONS_QUERY = void 0;
var __generated__1 = require("../__generated__");
exports.GET_BONUS_DEDUCTIONS_QUERY = __generated__1.graphql(/* GraphQL */ "\n  query GetBonusDeductions($where: bonusdeductions_bool_exp) {\n    bonusdeductions(where: $where) {\n      id\n      amount\n      bonusdeductiontype {\n        id\n        is_bonus\n        name\n      }\n      department {\n        id\n        name\n      }\n    }\n  }\n");
