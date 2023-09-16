"use strict";
exports.__esModule = true;
var antd_1 = require("antd");
var react_1 = require("react");
var drawerStore_1 = require("@/store/drawerStore");
var EmployeeAttendanceDrawer_1 = require("@/components/Drawer/EmployeeAttendanceDrawer");
var view_monthly_salary_hooks_1 = require("@/hooks/view-monthly-salary.hooks");
var dayjs_1 = require("dayjs");
var numeral_1 = require("numeral");
var ViewMonthlySalaryTable = function (_a) {
    var _b, _c, _d, _e, _f;
    var filter = _a.filter, columns = _a.columns;
    var _g = react_1.useState(1), currentPage = _g[0], setCurrentPage = _g[1];
    var _h = react_1.useState(100), pageSize = _h[0], setPageSize = _h[1];
    var _j = view_monthly_salary_hooks_1.useViewMonthlySalary(pageSize, (currentPage - 1) * pageSize, filter, {
        month: {
            _eq: dayjs_1["default"]((_b = filter.month) === null || _b === void 0 ? void 0 : _b._eq).format('YYYY-MM')
        }
    }, {
        month: {
            _eq: dayjs_1["default"]((_c = filter.month) === null || _c === void 0 ? void 0 : _c._eq).format('YYYY-MM')
        }
    }), viewMonthlySalaryData = _j.viewMonthlySalaryData, viewMonthlySalaryLoading = _j.viewMonthlySalaryLoading, viewMonthlySalaryRefetch = _j.viewMonthlySalaryRefetch;
    console.log(viewMonthlySalaryData === null || viewMonthlySalaryData === void 0 ? void 0 : viewMonthlySalaryData.view_monthly_salary);
    var openDrawer = drawerStore_1.useDrawerStore(function (state) { return state.openDrawer; });
    var dataSource = react_1.useMemo(function () {
        // 过滤人为添加工资单 导致多出空部门人员薪资统计
        return ((viewMonthlySalaryData === null || viewMonthlySalaryData === void 0 ? void 0 : viewMonthlySalaryData.view_monthly_salary.filter(function (one) { return one.attendance_department; })) || []);
    }, [viewMonthlySalaryData === null || viewMonthlySalaryData === void 0 ? void 0 : viewMonthlySalaryData.view_monthly_salary]);
    console.log(viewMonthlySalaryData === null || viewMonthlySalaryData === void 0 ? void 0 : viewMonthlySalaryData.view_monthly_salary);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Row, { gutter: 16 },
            react_1["default"].createElement(antd_1.Col, { span: 8 },
                react_1["default"].createElement(antd_1.Statistic, { loading: viewMonthlySalaryLoading, title: "\u672C\u6708\u4F01\u4E1A\u7528\u5DE5\u6210\u672C\u603B\u989D", value: "\u00A5 " + numeral_1["default"]((_e = (_d = viewMonthlySalaryData === null || viewMonthlySalaryData === void 0 ? void 0 : viewMonthlySalaryData.view_monthly_salary_aggregate.aggregate) === null || _d === void 0 ? void 0 : _d.sum) === null || _e === void 0 ? void 0 : _e.corp_salary_cost).format('0,0.00') }))),
        react_1["default"].createElement(antd_1.Table, { columns: columns, rowKey: "employee_id", onRow: function (record) {
                return {
                    onClick: function () {
                        var _a;
                        openDrawer('employeeAttendanceDrawer', {
                            employee_id: record.employee_id,
                            month: dayjs_1["default"]((_a = filter.month) === null || _a === void 0 ? void 0 : _a._eq).format('YYYY-MM')
                        });
                    }
                };
            }, scroll: { y: 500, x: columns.length * 200 }, loading: viewMonthlySalaryLoading, dataSource: dataSource, pagination: {
                showTotal: function (total) { return "\u5171" + total + "\u4EBA"; },
                current: currentPage,
                pageSize: pageSize,
                pageSizeOptions: [100, 200, 300, 500, 1000, 1500],
                total: (_f = viewMonthlySalaryData === null || viewMonthlySalaryData === void 0 ? void 0 : viewMonthlySalaryData.view_monthly_salary_aggregate.aggregate) === null || _f === void 0 ? void 0 : _f.count,
                onChange: function (current, pageSize) {
                    setCurrentPage(current);
                    setPageSize(pageSize);
                    viewMonthlySalaryRefetch({
                        limit: pageSize,
                        offset: (current - 1) * pageSize,
                        where: filter
                    });
                }
            } }),
        react_1["default"].createElement(EmployeeAttendanceDrawer_1["default"], { isOpen: drawerStore_1.useDrawerStore(function (state) { return state.drawers.employeeAttendanceDrawer.isOpen; }), refetch: function () {
                viewMonthlySalaryRefetch({
                    limit: 100,
                    offset: 0,
                    where: filter
                });
            } })));
};
exports["default"] = ViewMonthlySalaryTable;
