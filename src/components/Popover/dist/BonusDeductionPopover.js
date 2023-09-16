"use strict";
exports.__esModule = true;
var bonusDeduction_hooks_1 = require("@/hooks/bonusDeduction.hooks");
var antd_1 = require("antd");
var react_1 = require("react");
var BonusDeductionPopover = function (_a) {
    var value = _a.value, month = _a.month, employee_id = _a.employee_id, department_id = _a.department_id;
    var _b = bonusDeduction_hooks_1.useGetBonusDeductions({
        employee_id: { _eq: employee_id },
        department_id: { _eq: department_id },
        month: { _eq: month }
    }), bonusDeductionData = _b.bonusDeductionData, bonusDeductionRefetch = _b.bonusDeductionRefetch;
    react_1.useMemo(function () {
        bonusDeductionRefetch({
            where: {
                employee_id: { _eq: employee_id },
                department_id: { _eq: department_id },
                month: { _eq: month }
            }
        });
    }, [month, employee_id, department_id]);
    // console.log(bonusDeductionData?.bonusdeductions);
    return (react_1["default"].createElement(antd_1.Popover, { content: react_1["default"].createElement("div", { className: "flex flex-col space-y-2" }, bonusDeductionData === null || bonusDeductionData === void 0 ? void 0 : bonusDeductionData.bonusdeductions.map(function (bd) { return (react_1["default"].createElement("div", { className: "tw-flex tw-space-x-3" },
            react_1["default"].createElement("span", null, bd.bonusdeductiontype.name),
            react_1["default"].createElement("span", null, bd.amount))); })) },
        react_1["default"].createElement(antd_1.Button, { type: "text" }, value)));
};
exports["default"] = BonusDeductionPopover;
