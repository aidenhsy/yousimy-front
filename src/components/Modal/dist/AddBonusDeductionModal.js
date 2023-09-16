"use strict";
exports.__esModule = true;
var bonusDeductionType_hooks_1 = require("@/hooks/bonusDeductionType.hooks");
var store_departments_tree_hooks_1 = require("@/hooks/store-departments-tree.hooks");
var modalStore_1 = require("@/store/modalStore");
var antd_1 = require("antd");
var react_1 = require("react");
var AddBonusDeductionModal = function (_a) {
    var open = _a.open;
    var _b = modalStore_1.useModalStore(function (state) { return ({
        closeModal: state.closeModal,
        employeeInfo: state.modals.addBonusDeductionModal.employeeInfo
    }); }), closeModal = _b.closeModal, employeeInfo = _b.employeeInfo;
    var form = antd_1.Form.useForm()[0];
    var _c = store_departments_tree_hooks_1.useStoreDepartmentsTree(), storeDepartmentsTreeData = _c.storeDepartmentsTreeData, storeDepartmentsTreeLoading = _c.storeDepartmentsTreeLoading;
    var _d = bonusDeductionType_hooks_1.useGetBonusDeductionTypes(), bonusDeductionTypesData = _d.bonusDeductionTypesData, bonusDeductionTypesLoading = _d.bonusDeductionTypesLoading;
    return (react_1["default"].createElement(antd_1.Modal, { title: "\u6DFB\u52A0\u7EE9\u6548\u6263\u6B3E", open: open, onCancel: function () { return closeModal('addBonusDeductionModal'); } },
        react_1["default"].createElement(antd_1.Form, { form: form, layout: "vertical" },
            react_1["default"].createElement(antd_1.Form.Item, { label: "\u7C7B\u578B", name: "type" },
                react_1["default"].createElement(antd_1.Select, { loading: bonusDeductionTypesLoading, options: bonusDeductionTypesData === null || bonusDeductionTypesData === void 0 ? void 0 : bonusDeductionTypesData.bonusdeductiontypes, fieldNames: { label: 'name', value: 'id' } })),
            react_1["default"].createElement(antd_1.Form.Item, { label: "\u91D1\u989D", name: "amount", rules: [
                    {
                        pattern: /^\d+(\.\d{1,2})?$/,
                        message: '不能大于2位小数点'
                    },
                ] },
                react_1["default"].createElement(antd_1.InputNumber, { prefix: "\u00A5", style: { width: '100%' } })),
            react_1["default"].createElement(antd_1.Form.Item, { label: "\u8003\u52E4\u90E8\u95E8", name: "department", initialValue: employeeInfo === null || employeeInfo === void 0 ? void 0 : employeeInfo.department_id, rules: [
                    {
                        pattern: /^od-/,
                        message: '选项不是部门，请重选'
                    },
                ] },
                react_1["default"].createElement(antd_1.TreeSelect, { loading: storeDepartmentsTreeLoading, treeData: storeDepartmentsTreeData === null || storeDepartmentsTreeData === void 0 ? void 0 : storeDepartmentsTreeData.storeDepartments })))));
};
exports["default"] = AddBonusDeductionModal;
