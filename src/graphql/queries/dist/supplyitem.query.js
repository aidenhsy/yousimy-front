"use strict";
exports.__esModule = true;
exports.SUPPLY_ITEMS_BY_PK_QUERY = void 0;
var __generated__1 = require("../__generated__");
exports.SUPPLY_ITEMS_BY_PK_QUERY = __generated__1.graphql(/* GraphQL */ "\n  query SupplyItemsByPk($itemId: String!) {\n    supplyitems_by_pk(itemId: $itemId) {\n      itemId\n      itemName\n      itemImage\n      itemTypeName\n      mainUnit\n      reportUnit\n      reportUnitRatio\n      netRate\n      dsstorebills(limit: 1, order_by: { auditDate: desc }) {\n        ArriveMoney\n        InBusAmount\n      }\n      ingredients {\n        fooditem {\n          brand {\n            name\n          }\n          item_name\n        }\n      }\n    }\n  }\n");
