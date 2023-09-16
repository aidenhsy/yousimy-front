"use strict";
exports.__esModule = true;
exports.useGetBonusDeductionTypes = void 0;
var bonusDeductionType_query_1 = require("@/graphql/queries/bonusDeductionType.query");
var client_1 = require("@apollo/client");
exports.useGetBonusDeductionTypes = function () {
    var _a = client_1.useQuery(bonusDeductionType_query_1.GET_BONUS_DEDUCTION_TYPES_QUERY), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    return {
        bonusDeductionTypesData: data,
        bonusDeductionTypesLoading: loading,
        bonusDeductionTypesError: error,
        bonusDeductionTypesRefetch: refetch
    };
};
