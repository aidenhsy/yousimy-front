"use strict";
exports.__esModule = true;
exports.useGetMonthlySalary = void 0;
var monthlysalary_query_1 = require("@/graphql/queries/monthlysalary.query");
var client_1 = require("@apollo/client");
exports.useGetMonthlySalary = function (limit, offset, where, where1, where2) {
    var _a = client_1.useQuery(monthlysalary_query_1.GET_MONTHLY_SALARY_QUERY, {
        variables: { limit: limit, offset: offset, where: where, where1: where1, where2: where2 },
        notifyOnNetworkStatusChange: true
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    if (error) {
        console.log(error);
    }
    return {
        monthlySalaryData: data,
        monthlySalaryLoading: loading,
        monthlySalaryError: Boolean(error),
        monthlySalaryRefetch: refetch
    };
};
