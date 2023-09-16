"use strict";
exports.__esModule = true;
var bonusDeduction_hooks_1 = require("@/hooks/bonusDeduction.hooks");
var modalStore_1 = require("@/store/modalStore");
var antd_1 = require("antd");
var react_1 = require("react");
var icons_1 = require("@ant-design/icons");
var numeral_1 = require("numeral");
var AddBonusDeductionModal_1 = require("./AddBonusDeductionModal");
var BonusDeductionModal = function (_a) {
    var open = _a.open;
    var _b = modalStore_1.useModalStore(function (state) { return ({
        openModal: state.openModal,
        closeModal: state.closeModal,
        employeeInfo: state.modals.bonusDeductionModal.employeeInfo
    }); }), openModal = _b.openModal, closeModal = _b.closeModal, employeeInfo = _b.employeeInfo;
    var _c = react_1.useState({
        employee_id: { _eq: 'asdf' }
    }), filter = _c[0], setFilter = _c[1];
    react_1.useEffect(function () {
        setFilter({
            employee_id: { _eq: (employeeInfo === null || employeeInfo === void 0 ? void 0 : employeeInfo.employee_id) || 'asdf' },
            month: { _eq: employeeInfo === null || employeeInfo === void 0 ? void 0 : employeeInfo.month }
        });
    }, [open]);
    var _d = bonusDeduction_hooks_1.useGetBonusDeductions(filter), bonusDeductionData = _d.bonusDeductionData, bonusDeductionLoading = _d.bonusDeductionLoading;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Modal, { closable: false, footer: false, title: react_1["default"].createElement("div", { className: "tw-flex tw-justify-between tw-items-center tw-mb-4" },
                react_1["default"].createElement("span", null, employeeInfo === null || employeeInfo === void 0 ? void 0 :
                    employeeInfo.name,
                    " ", employeeInfo === null || employeeInfo === void 0 ? void 0 :
                    employeeInfo.month,
                    " \u7684\u7EE9\u6548\u6263\u6B3E"),
                react_1["default"].createElement(antd_1.Button, { onClick: function () {
                        return openModal('addBonusDeductionModal', { employeeInfo: employeeInfo });
                    }, type: "primary", icon: react_1["default"].createElement(icons_1.PlusOutlined, null) }, "\u6DFB\u52A0")), open: open, onCancel: function () { return closeModal('bonusDeductionModal'); } },
            react_1["default"].createElement(antd_1.List, { dataSource: bonusDeductionData === null || bonusDeductionData === void 0 ? void 0 : bonusDeductionData.bonusdeductions, renderItem: function (item) { return (react_1["default"].createElement("div", { className: "tw-flex tw-justify-between tw-p-2" },
                    react_1["default"].createElement("div", { className: "tw-flex tw-space-x-2 tw-items-center" },
                        react_1["default"].createElement("span", null, item.bonusdeductiontype.name),
                        react_1["default"].createElement("span", null,
                            "\u00A5 ",
                            numeral_1["default"](item.amount).format('0,0.00'))),
                    react_1["default"].createElement("div", { className: "tw-flex tw-space-x-2 tw-items-center" },
                        react_1["default"].createElement("span", null, item.department.name),
                        react_1["default"].createElement(antd_1.Button, { onClick: function () { return console.log(item.id); }, icon: react_1["default"].createElement(icons_1.DeleteOutlined, null) })))); } })),
        react_1["default"].createElement(AddBonusDeductionModal_1["default"], { open: modalStore_1.useModalStore(function (state) { return state.modals.addBonusDeductionModal.isOpen; }) })));
};
exports["default"] = BonusDeductionModal;
