"use strict";
exports.__esModule = true;
var antd_1 = require("antd");
var react_1 = require("react");
var drawerStore_1 = require("@/store/drawerStore");
var dayjs_1 = require("dayjs");
var numeral_1 = require("numeral");
var monthlysalary_hooks_1 = require("@/hooks/monthlysalary.hooks");
var MonthlySalaryTable = function (_a) {
    var _b, _c, _d, _e, _f;
    var filter = _a.filter, columns = _a.columns;
    var _g = react_1.useState(1), currentPage = _g[0], setCurrentPage = _g[1];
    var _h = react_1.useState(100), pageSize = _h[0], setPageSize = _h[1];
    var _j = monthlysalary_hooks_1.useGetMonthlySalary(pageSize, (currentPage - 1) * pageSize, { month: { _eq: '2023-08-01' } }, {
        month: {
            _eq: dayjs_1["default"]((_b = filter.month) === null || _b === void 0 ? void 0 : _b._eq).format('YYYY-MM')
        }
    }, {
        month: {
            _eq: dayjs_1["default"]((_c = filter.month) === null || _c === void 0 ? void 0 : _c._eq).format('YYYY-MM')
        }
    }), monthlySalaryData = _j.monthlySalaryData, monthlySalaryLoading = _j.monthlySalaryLoading, monthlySalaryError = _j.monthlySalaryError, monthlySalaryRefetch = _j.monthlySalaryRefetch;
    var openDrawer = drawerStore_1.useDrawerStore(function (state) { return state.openDrawer; });
    var dataSource = react_1.useMemo(function () {
        // 过滤人为添加工资单 导致多出空部门人员薪资统计
        return ((monthlySalaryData === null || monthlySalaryData === void 0 ? void 0 : monthlySalaryData.monthlysalary.filter(function (one) { return one.attendance_department; })) || []);
    }, [monthlySalaryData === null || monthlySalaryData === void 0 ? void 0 : monthlySalaryData.monthlysalary]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Row, { gutter: 16 },
            react_1["default"].createElement(antd_1.Col, { span: 8 },
                react_1["default"].createElement(antd_1.Statistic, { loading: monthlySalaryLoading, title: "\u672C\u6708\u4F01\u4E1A\u7528\u5DE5\u6210\u672C\u603B\u989D", value: "\u00A5 " + numeral_1["default"]((_e = (_d = monthlySalaryData === null || monthlySalaryData === void 0 ? void 0 : monthlySalaryData.monthlysalary_aggregate.aggregate) === null || _d === void 0 ? void 0 : _d.sum) === null || _e === void 0 ? void 0 : _e.corp_salary_cost).format('0,0.00') }))),
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
            }, scroll: { y: 500, x: columns.length * 200 }, loading: monthlySalaryLoading, dataSource: dataSource, pagination: {
                showTotal: function (total) { return "\u5171" + total + "\u4EBA"; },
                current: currentPage,
                pageSize: pageSize,
                pageSizeOptions: [100, 200, 300, 500, 1000, 1500],
                total: (_f = monthlySalaryData === null || monthlySalaryData === void 0 ? void 0 : monthlySalaryData.monthlysalary_aggregate.aggregate) === null || _f === void 0 ? void 0 : _f.count,
                onChange: function (current, pageSize) {
                    setCurrentPage(current);
                    setPageSize(pageSize);
                    monthlySalaryRefetch({
                        limit: pageSize,
                        offset: (current - 1) * pageSize,
                        where: filter
                    });
                }
            } })));
};
exports["default"] = MonthlySalaryTable;
