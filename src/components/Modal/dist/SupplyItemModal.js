"use strict";
exports.__esModule = true;
var supplyitem_hooks_1 = require("@/hooks/supplyitem.hooks");
var modalStore_1 = require("@/store/modalStore");
var antd_1 = require("antd");
var numeral_1 = require("numeral");
var react_1 = require("react");
var SupplyItemModal = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var open = _a.open;
    var _j = modalStore_1.useModalStore(function (state) { return ({
        item_id: state.modals.supplyItemModal.item_id,
        closeModal: state.closeModal
    }); }), item_id = _j.item_id, closeModal = _j.closeModal;
    var _k = supplyitem_hooks_1.useSupplyItemsByPk(item_id), supplyItemsData = _k.supplyItemsData, supplyItemsLoading = _k.supplyItemsLoading;
    console.log((_b = supplyItemsData === null || supplyItemsData === void 0 ? void 0 : supplyItemsData.supplyitems_by_pk) === null || _b === void 0 ? void 0 : _b.ingredients);
    var latestPrice = Number((_c = supplyItemsData === null || supplyItemsData === void 0 ? void 0 : supplyItemsData.supplyitems_by_pk) === null || _c === void 0 ? void 0 : _c.dsstorebills[0].ArriveMoney) /
        Number((_d = supplyItemsData === null || supplyItemsData === void 0 ? void 0 : supplyItemsData.supplyitems_by_pk) === null || _d === void 0 ? void 0 : _d.dsstorebills[0].InBusAmount);
    return (react_1["default"].createElement(antd_1.Modal, { closable: false, footer: false, open: open, onCancel: function () { return closeModal('supplyItemModal'); }, title: (_e = supplyItemsData === null || supplyItemsData === void 0 ? void 0 : supplyItemsData.supplyitems_by_pk) === null || _e === void 0 ? void 0 : _e.itemName },
        supplyItemsLoading ? (react_1["default"].createElement("div", { className: "tw-flex tw-justify-center" },
            react_1["default"].createElement(antd_1.Spin, { size: "large" }))) : (react_1["default"].createElement(antd_1.Image, { src: ((_f = supplyItemsData === null || supplyItemsData === void 0 ? void 0 : supplyItemsData.supplyitems_by_pk) === null || _f === void 0 ? void 0 : _f.itemImage) || '/empty.jpg' })),
        react_1["default"].createElement(antd_1.List, { size: "large" },
            react_1["default"].createElement(antd_1.List.Item, null,
                react_1["default"].createElement("span", null, "\u6700\u65B0\u62A5\u4EF7"),
                react_1["default"].createElement("span", null,
                    "\u00A5 ",
                    numeral_1["default"](latestPrice).format('0,0.00'),
                    " /",
                    ' ', (_g = supplyItemsData === null || supplyItemsData === void 0 ? void 0 : supplyItemsData.supplyitems_by_pk) === null || _g === void 0 ? void 0 :
                    _g.reportUnit))),
        react_1["default"].createElement(antd_1.List, { size: "large", bordered: true, header: react_1["default"].createElement("span", { className: "tw-font-bold" }, "\u5728\u7528\u6B64\u539F\u6750\u6599\u7684\u83DC\u54C1"), dataSource: (_h = supplyItemsData === null || supplyItemsData === void 0 ? void 0 : supplyItemsData.supplyitems_by_pk) === null || _h === void 0 ? void 0 : _h.ingredients, renderItem: function (item) {
                var _a, _b, _c;
                return (react_1["default"].createElement(antd_1.List.Item, null,
                    react_1["default"].createElement("span", null, (_a = item.fooditem) === null || _a === void 0 ? void 0 : _a.item_name),
                    react_1["default"].createElement("span", null, (_c = (_b = item.fooditem) === null || _b === void 0 ? void 0 : _b.brand) === null || _c === void 0 ? void 0 : _c.name)));
            } })));
};
exports["default"] = SupplyItemModal;
