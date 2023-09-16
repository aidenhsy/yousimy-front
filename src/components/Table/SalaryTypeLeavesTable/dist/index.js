"use strict";
exports.__esModule = true;
var react_1 = require("react");
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var salary_types_hooks_1 = require("@/hooks/salary_types.hooks");
var modalStore_1 = require("@/store/modalStore");
var InsertServiceEntitlementModal_1 = require("@/components/Modal/InsertServiceEntitlementModal");
var items = [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
];
var SalaryTypeLeavesTable = function (_a) {
    var filter = _a.filter;
    var _b = salary_types_hooks_1.useGetSalaryTypes(filter), salaryTypesData = _b.salaryTypesData, salaryTypesLoading = _b.salaryTypesLoading, salaryTypesRefetch = _b.salaryTypesRefetch;
    var expandedRowRender = function (record) {
        var columns = [
            {
                title: '工作年限',
                dataIndex: 'years_of_service',
                key: 'years_of_service',
                render: function (val) { return react_1["default"].createElement("span", null,
                    val,
                    " \u5E74"); }
            },
            {
                title: '每年休假长度',
                dataIndex: 'max_days',
                key: 'max_days',
                render: function (val) { return react_1["default"].createElement("span", null,
                    val,
                    " \u5929"); }
            },
            {
                render: function () { return react_1["default"].createElement(antd_1.Button, { type: "link", icon: react_1["default"].createElement(icons_1.EditOutlined, null) }); }
            },
        ];
        return (react_1["default"].createElement(antd_1.Table, { rowKey: "id", columns: columns, loading: salaryTypesLoading, dataSource: record.service_entitlements, pagination: false }));
    };
    var openModal = modalStore_1.useModalStore(function (state) { return state.openModal; });
    var columns = [
        { title: '薪资类型', dataIndex: 'name', key: 'name' },
        {
            render: function (_val, record) {
                return (react_1["default"].createElement(antd_1.Button, { onClick: function () {
                        var _a, _b;
                        return openModal('insertServiceEntitlementModal', {
                            leave_type_id: ((_a = filter.leave_type_id) === null || _a === void 0 ? void 0 : _a._eq) ? (_b = filter.leave_type_id) === null || _b === void 0 ? void 0 : _b._eq : '',
                            salary_type_id: record.id,
                            refetch: salaryTypesRefetch
                        });
                    }, type: "link", icon: react_1["default"].createElement(icons_1.PlusOutlined, null) }));
            }
        },
    ];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Table, { columns: columns, loading: salaryTypesLoading, expandable: {
                expandedRowRender: function (record) { return expandedRowRender(record); },
                defaultExpandedRowKeys: ['0']
            }, rowKey: "id", dataSource: salaryTypesData }),
        react_1["default"].createElement(InsertServiceEntitlementModal_1["default"], { open: modalStore_1.useModalStore(function (state) { return state.modals.insertServiceEntitlementModal.isOpen; }) })));
};
exports["default"] = SalaryTypeLeavesTable;
