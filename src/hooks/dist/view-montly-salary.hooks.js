"use strict";
exports.__esModule = true;
exports.useViewMonthlySalary = void 0;
var view_monthly_salary_query_1 = require("@/graphql/queries/view-monthly-salary.query");
var client_1 = require("@apollo/client");
exports.useViewMonthlySalary = function (limit, offset, where, where1, where2) {
    var _a = client_1.useQuery(view_monthly_salary_query_1.VIEW_MONTHLY_SALARY_QUERY, {
        variables: { limit: limit, offset: offset, where: where, where1: where1, where2: where2 },
        notifyOnNetworkStatusChange: true
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    if (error) {
        console.log(error);
    }
    return {
        viewMonthlySalaryData: data,
        viewMonthlySalaryLoading: loading,
        viewMonthlySalaryError: Boolean(error),
        viewMonthlySalaryRefetch: refetch
    };
};
