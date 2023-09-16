"use strict";
exports.__esModule = true;
exports.useGetSalaryTypesByPk = exports.useGetSalaryTypes = void 0;
var salary_types_query_1 = require("@/graphql/queries/salary_types.query");
var client_1 = require("@apollo/client");
exports.useGetSalaryTypes = function (where) {
    var _a = client_1.useQuery(salary_types_query_1.GET_SALARY_TYPES_QUERY, {
        variables: { where: where }
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    return {
        salaryTypesData: data === null || data === void 0 ? void 0 : data.salary_types,
        salaryTypesLoading: loading,
        salaryTypesError: error,
        salaryTypesRefetch: refetch
    };
};
exports.useGetSalaryTypesByPk = function (id) {
    var _a = client_1.useQuery(salary_types_query_1.GET_SALARY_TYPES_BY_PK_QUERY, {
        variables: { id: id }
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    return {
        salaryTypesByPkData: data === null || data === void 0 ? void 0 : data.salary_types_by_pk,
        salaryTypesByPkLoading: loading,
        salaryTypesByPkError: error,
        salaryTypesByPkRefetch: refetch
    };
};
