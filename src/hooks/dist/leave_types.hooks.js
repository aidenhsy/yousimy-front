"use strict";
exports.__esModule = true;
exports.useGetLeaveTypesByPk = exports.useGetLeaveTypes = void 0;
var leave_types_query_1 = require("@/graphql/queries/leave_types.query");
var client_1 = require("@apollo/client");
exports.useGetLeaveTypes = function () {
    var _a = client_1.useQuery(leave_types_query_1.GET_LEAVE_TYPES_QUERY), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    return {
        leaveTypesData: data,
        leaveTypesLoading: loading,
        leaveTypesError: error,
        leaveTypesRefetch: refetch
    };
};
exports.useGetLeaveTypesByPk = function (id) {
    var _a = client_1.useQuery(leave_types_query_1.GET_LEAVE_TYPES_BY_PK_QUERY, {
        variables: {
            id: id
        }
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    return {
        leaveTypesByPkData: data === null || data === void 0 ? void 0 : data.leave_types_by_pk,
        leaveTypesByPkLoading: loading,
        leaveTypesByPkError: error,
        leaveTypesByPkRefetch: refetch
    };
};
