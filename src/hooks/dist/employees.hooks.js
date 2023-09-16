"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.useEmployeeMonthlyInsurance = exports.useEmployeeByPkAttendances = exports.useEmployeeSalaryMonthly = exports.useDeleteEmployeeAttchement = exports.useDeleteEmployee = exports.useUpdateEmployee = exports.useCreateEmployee = exports.useEmployeesByPk = exports.useEmployeeAttachment = exports.useEmployeesStats = exports.useEmployees = void 0;
var client_1 = require("@apollo/client");
var nanoid_1 = require("nanoid");
var employees_query_1 = require("@/graphql/queries/employees.query");
var employees_mutation_1 = require("@/graphql/mutations/employees.mutation");
var dayjs_1 = require("dayjs");
var mapping_1 = require("@/lib/mapping");
var employee_insurance_query_1 = require("@/graphql/queries/employee_insurance.query");
/* Queries */
// 人员列表
exports.useEmployees = function (offset, limit, where) {
    var _a = client_1.useQuery(employees_query_1.EMPLOYEES_QUERY, {
        variables: { offset: offset, limit: limit, where: where },
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'no-cache'
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    if (error) {
        console.log(error);
    }
    return {
        employeesData: data,
        employeesLoading: loading,
        employeesError: Boolean(error),
        employeesRefetch: refetch
    };
};
// 不同状态的人员数
exports.useEmployeesStats = function () {
    var todayDate = dayjs_1["default"]();
    var nextMonth = todayDate.add(1, 'month');
    var lastMonth = todayDate.subtract(1, 'month');
    var _a = client_1.useQuery(employees_query_1.EMPLOYEES_STATUS_COUNT_QUERY, {
        variables: {
            todayDate: todayDate.format('YYYY-MM-DD'),
            thisWeekDateStart: todayDate.startOf('week').format('YYYY-MM-DD'),
            thisWeekDateEnd: todayDate.endOf('week').format('YYYY-MM-DD'),
            thisMonthDateStart: todayDate.startOf('month').format('YYYY-MM-DD'),
            thisMonthDateEnd: todayDate.endOf('month').format('YYYY-MM-DD'),
            nextMonthDateStart: nextMonth.startOf('month').format('YYYY-MM-DD'),
            nextMonthDateEnd: nextMonth.endOf('month').format('YYYY-MM-DD'),
            lastMonthDateStart: lastMonth.startOf('month').format('YYYY-MM-DD'),
            lastMonthDateEnd: lastMonth.endOf('month').format('YYYY-MM-DD'),
            todayDateMMDD: todayDate.format('MM-DD'),
            thisWeekDateStartMMDD: todayDate.startOf('week').format('MM-DD'),
            thisWeekDateEndMMDD: todayDate.endOf('week').format('MM-DD'),
            thisMonthDateStartMMDD: todayDate.startOf('month').format('MM-DD'),
            thisMonthDateEndMMDD: todayDate.endOf('month').format('MM-DD'),
            nextMonthDateStartMMDD: nextMonth.startOf('month').format('MM-DD'),
            nextMonthDateEndMMDD: nextMonth.endOf('month').format('MM-DD'),
            lastMonthDateStartMMDD: lastMonth.startOf('month').format('MM-DD'),
            lastMonthDateEndMMDD: lastMonth.endOf('month').format('MM-DD')
        }
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    if (error) {
        console.log(error);
    }
    return {
        employeesStatusData: data,
        employeesStatusRefetch: refetch,
        employeesStatusLoading: loading,
        employeeStatusError: Boolean(error)
    };
};
exports.useEmployeeAttachment = function (where) {
    var _a = client_1.useQuery(employees_query_1.EMPLOYEE_ATTACHMENT_QUERY, {
        variables: {
            where: where
        }
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    var remap = Object.values(mapping_1.UserAttachmentMap).map(function (item) {
        var attachmentContents = data === null || data === void 0 ? void 0 : data.employee_attachments.filter(function (res) { return res.kind === (item === null || item === void 0 ? void 0 : item.kind); });
        return {
            key: item === null || item === void 0 ? void 0 : item.id.toString(),
            name: item === null || item === void 0 ? void 0 : item.value,
            kind: item === null || item === void 0 ? void 0 : item.kind,
            isMulti: item === null || item === void 0 ? void 0 : item.isMulti,
            attachmentContents: attachmentContents
        };
    });
    return {
        employeeAttachmentData: remap,
        employeeAttachmentLoading: loading,
        employeeAttachmentError: Boolean(error),
        employeeAttachmentRefetch: refetch
    };
};
exports.useEmployeesByPk = function (id) {
    var _a = client_1.useQuery(employees_query_1.EMPLOYEES_BY_PK_QUERY, {
        variables: { id: id }
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    return {
        employeesByPkData: data === null || data === void 0 ? void 0 : data.employees_by_pk,
        employeesByPkLoading: loading,
        employeesByPkError: error,
        employeesByPkRefetch: refetch
    };
};
/* Mutations */
//添加人员
exports.useCreateEmployee = function () {
    var _a;
    var _b = client_1.useMutation(employees_mutation_1.CREATE_EMPLOYEES_MUTATION), mutate = _b[0], _c = _b[1], loading = _c.loading, error = _c.error, data = _c.data;
    var createEmployee = function (createEmployeeInput) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mutate({
                        variables: {
                            id: nanoid_1.nanoid(),
                            name: createEmployeeInput.name,
                            mobile: createEmployeeInput.mobile,
                            department_id: createEmployeeInput.department_id,
                            hire_date: createEmployeeInput.hire_date,
                            status: createEmployeeInput.status,
                            manager_id: createEmployeeInput.manager_id
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    return {
        createEmployee: createEmployee,
        createEmployee_loading: loading,
        createEmployee_data: (_a = data === null || data === void 0 ? void 0 : data.insert_employees) === null || _a === void 0 ? void 0 : _a.returning,
        createEmployee_error: Boolean(error)
    };
};
// 更新人员信息
exports.useUpdateEmployee = function () {
    var _a;
    var _b = client_1.useMutation(employees_mutation_1.UPDATE_EMPLOYEE_MUTATION), mutate = _b[0], _c = _b[1], loading = _c.loading, error = _c.error, data = _c.data;
    var updateEmployee = function (id, _set) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Array.isArray(id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, mutate({
                            variables: { where: { id: { _in: id } }, _set: _set }
                        })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [4 /*yield*/, mutate({
                        variables: { where: { id: { _eq: id } }, _set: _set }
                    })];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    return {
        updateEmployee: updateEmployee,
        updateEmployee_loading: loading,
        updateEmployee_data: (_a = data === null || data === void 0 ? void 0 : data.update_employees) === null || _a === void 0 ? void 0 : _a.returning,
        updateEmployee_error: Boolean(error)
    };
};
// 删除人员
exports.useDeleteEmployee = function () {
    var _a;
    var _b = client_1.useMutation(employees_mutation_1.DELETE_EMPLOYEE_MUTATION), mutate = _b[0], _c = _b[1], loading = _c.loading, error = _c.error, data = _c.data;
    var deleteEmployee = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mutate({
                        variables: { where: { id: { _eq: id } } }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    return {
        deleteEmployee: deleteEmployee,
        deleteEmployee_loading: loading,
        deleteEmployee_data: (_a = data === null || data === void 0 ? void 0 : data.delete_employees) === null || _a === void 0 ? void 0 : _a.returning,
        deleteEmployee_error: Boolean(error)
    };
};
// 删除附件
exports.useDeleteEmployeeAttchement = function () {
    var _a;
    var _b = client_1.useMutation(employees_mutation_1.DELETE_EMPLOYEE_ATTACHMENT_MUTATION), mutate = _b[0], _c = _b[1], loading = _c.loading, error = _c.error, data = _c.data;
    var deleteEmployeeAttchement = function (where) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mutate({
                        variables: { where: where }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    return {
        deleteEmployeeAttchement: deleteEmployeeAttchement,
        deleteEmployeeAttchement_loading: loading,
        deleteEmployeeAttchement_data: (_a = data === null || data === void 0 ? void 0 : data.delete_employee_attachments) === null || _a === void 0 ? void 0 : _a.returning,
        deleteEmployeeAttchement_error: Boolean(error)
    };
};
exports.useEmployeeSalaryMonthly = function (limit, offset, where) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var _m = client_1.useQuery(employees_query_1.EMPLOYEE_SALARY_MONTHLY_QUERY, {
        variables: {
            limit: limit,
            offset: offset,
            where: where,
            where1: {
                department: {
                    name: { _like: (_c = (_b = (_a = where === null || where === void 0 ? void 0 : where.attendances) === null || _a === void 0 ? void 0 : _a.department) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c._like }
                },
                date_yyyy_mm: (_f = (_e = (_d = where === null || where === void 0 ? void 0 : where.attendances_aggregate) === null || _d === void 0 ? void 0 : _d.count) === null || _e === void 0 ? void 0 : _e.filter) === null || _f === void 0 ? void 0 : _f.date_yyyy_mm,
                shift_list: {
                    shift_name: {
                        _neq: (_l = (_k = (_j = (_h = (_g = where === null || where === void 0 ? void 0 : where.attendances_aggregate) === null || _g === void 0 ? void 0 : _g.count) === null || _h === void 0 ? void 0 : _h.filter) === null || _j === void 0 ? void 0 : _j.shift_list) === null || _k === void 0 ? void 0 : _k.shift_name) === null || _l === void 0 ? void 0 : _l._neq
                    }
                }
            }
        },
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'no-cache'
    }), data = _m.data, loading = _m.loading, error = _m.error, refetch = _m.refetch;
    console.log(data);
    if (error) {
        console.log(error);
    }
    return {
        employeeSalaryMonthlyData: data,
        employeeSalaryMonthlyLoading: loading,
        employeeSalaryMonthlyError: error,
        employeeSalaryMonthlyRefetch: refetch
    };
};
exports.useEmployeeByPkAttendances = function (id, where) {
    var _a = client_1.useQuery(employees_query_1.EMPLOYEE_BY_PK_ATTENDANCES_QUERY, {
        variables: {
            id: id,
            where: where
        },
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'no-cache'
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    if (error) {
        console.log(error);
    }
    return {
        employeeByPkAttendancesData: data,
        employeeByPkAttendancesLoading: loading,
        employeeByPkAttendancesError: error,
        employeeByPkAttendancesRefetch: refetch
    };
};
exports.useEmployeeMonthlyInsurance = function (limit, offset, where) {
    var _a = client_1.useQuery(employee_insurance_query_1.EMPLOYEE_INSURANCE_QUERY, {
        variables: {
            where: where,
            limit: limit,
            offset: offset
        },
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'no-cache'
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    return {
        employeeMonthlyInsuranceData: data,
        employeeMonthlyInsuranceLoading: loading,
        employeeMonthlyInsuranceError: error,
        employeeMonthlyInsuranceRefetch: refetch
    };
};
