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
var leave_types_hooks_1 = require("@/hooks/leave_types.hooks");
var salary_types_hooks_1 = require("@/hooks/salary_types.hooks");
var service_entitlement_hooks_1 = require("@/hooks/service-entitlement.hooks");
var modalStore_1 = require("@/store/modalStore");
var antd_1 = require("antd");
var react_1 = require("react");
var nanoid_1 = require("nanoid");
var InsertServiceEntitlementModal = function (_a) {
    var open = _a.open;
    var _b = modalStore_1.useModalStore(function (state) { return ({
        closeModal: state.closeModal,
        leave_type_id: state.modals.insertServiceEntitlementModal.leave_type_id,
        salary_type_id: state.modals.insertServiceEntitlementModal.salary_type_id,
        refetch: state.modals.insertServiceEntitlementModal.refetch
    }); }), closeModal = _b.closeModal, leave_type_id = _b.leave_type_id, salary_type_id = _b.salary_type_id, refetch = _b.refetch;
    var _c = react_1.useState(1), yearsOfService = _c[0], setYearsOfService = _c[1];
    var _d = react_1.useState(1), maxDays = _d[0], setMaxDays = _d[1];
    var _e = leave_types_hooks_1.useGetLeaveTypesByPk(leave_type_id), leaveTypesByPkData = _e.leaveTypesByPkData, leaveTypesByPkLoading = _e.leaveTypesByPkLoading;
    var _f = salary_types_hooks_1.useGetSalaryTypesByPk(salary_type_id), salaryTypesByPkData = _f.salaryTypesByPkData, salaryTypesByPkLoading = _f.salaryTypesByPkLoading;
    var _g = service_entitlement_hooks_1.useInsertServiceEntitlementOne(), insertServiceEntitlementOne = _g.insertServiceEntitlementOne, insertServiceEntitlementOne_loading = _g.insertServiceEntitlementOne_loading;
    return (react_1["default"].createElement(antd_1.Modal, { open: open, onCancel: function () {
            setMaxDays(1);
            setYearsOfService(1);
            closeModal('insertServiceEntitlementModal');
        }, onOk: function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, insertServiceEntitlementOne({
                            id: nanoid_1.nanoid(),
                            salary_type_id: salary_type_id,
                            max_days: maxDays,
                            years_of_service: yearsOfService,
                            leave_type_id: leave_type_id
                        })];
                    case 1:
                        _a.sent();
                        if (!insertServiceEntitlementOne_loading) {
                            setMaxDays(1);
                            setYearsOfService(1);
                            if (typeof refetch === 'function') {
                                refetch();
                            }
                            closeModal('insertServiceEntitlementModal');
                        }
                        return [2 /*return*/];
                }
            });
        }); }, title: leaveTypesByPkLoading || salaryTypesByPkLoading ? (react_1["default"].createElement(antd_1.Spin, null)) : (react_1["default"].createElement("span", null, salaryTypesByPkData === null || salaryTypesByPkData === void 0 ? void 0 :
            salaryTypesByPkData.name,
            "\u7684", leaveTypesByPkData === null || leaveTypesByPkData === void 0 ? void 0 :
            leaveTypesByPkData.name,
            "\u8BBE\u7F6E")) },
        react_1["default"].createElement("div", { className: "tw-flex tw-items-center tw-space-x-1" },
            react_1["default"].createElement("span", null, "\u5165\u804C"),
            react_1["default"].createElement(antd_1.InputNumber, { value: yearsOfService, onChange: function (value) { return setYearsOfService(value); } }),
            react_1["default"].createElement("span", null, "\u5E74\u4EE5\u4E0A\u4F11"),
            react_1["default"].createElement(antd_1.InputNumber, { value: maxDays, onChange: function (value) { return setMaxDays(value); } }),
            react_1["default"].createElement("span", null, "\u5929"))));
};
exports["default"] = InsertServiceEntitlementModal;
