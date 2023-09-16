"use strict";
exports.__esModule = true;
exports.useGetBonusDeductions = void 0;
var bonusDeduction_query_1 = require("@/graphql/queries/bonusDeduction.query");
var client_1 = require("@apollo/client");
exports.useGetBonusDeductions = function (where) {
    var _a = client_1.useQuery(bonusDeduction_query_1.GET_BONUS_DEDUCTIONS_QUERY, {
        variables: { where: where }
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    return {
        bonusDeductionData: data,
        bonusDeductionLoading: loading,
        bonusDeductionError: error,
        bonusDeductionRefetch: refetch
    };
};
