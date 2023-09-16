"use strict";
exports.__esModule = true;
var employees_hooks_1 = require("@/hooks/employees.hooks");
var drawerStore_1 = require("@/store/drawerStore");
var antd_1 = require("antd");
var react_1 = require("react");
var EmployeeInfoDrawerTitle_1 = require("./EmployeeInfoDrawerTitle");
var AttachmentsList_1 = require("./AttachmentsList");
var EmployeeInfoDrawer = function (_a) {
    var open = _a.open;
    var _b = drawerStore_1.useDrawerStore(function (state) { return ({
        closeDrawer: state.closeDrawer,
        currentEmployee: state.drawers.employeeInfoDrawer.currentEmployee
    }); }), closeDrawer = _b.closeDrawer, currentEmployee = _b.currentEmployee;
    var employeesByPkData = employees_hooks_1.useEmployeesByPk(currentEmployee === null || currentEmployee === void 0 ? void 0 : currentEmployee.id).employeesByPkData;
    var items = [
        {
            key: '1',
            label: "\u57FA\u672C\u4FE1\u606F",
            children: "Content of Tab Pane 1"
        },
        {
            key: '2',
            label: "\u8D44\u6599\u9644\u4EF6",
            children: react_1["default"].createElement(AttachmentsList_1["default"], { employee: employeesByPkData })
        },
    ];
    var onChange = function (key) {
        console.log(key);
    };
    return (react_1["default"].createElement(antd_1.Drawer, { open: open, closeIcon: false, size: "large", headerStyle: {
            border: 0,
            margin: 0,
            paddingLeft: 0,
            paddingTop: 42,
            marginBottom: 0
        }, title: react_1["default"].createElement(EmployeeInfoDrawerTitle_1["default"], { employeesByPkData: employeesByPkData }), onClose: function () {
            closeDrawer('employeeInfoDrawer');
        } },
        react_1["default"].createElement(antd_1.Tabs, { defaultActiveKey: "1", items: items, onChange: onChange, className: "sticky-tabs" })));
};
exports["default"] = EmployeeInfoDrawer;
