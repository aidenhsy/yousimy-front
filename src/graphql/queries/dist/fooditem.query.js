"use strict";
exports.__esModule = true;
exports.FOOD_ITEMS_BY_PK_QUERY = void 0;
var __generated__1 = require("../__generated__");
exports.FOOD_ITEMS_BY_PK_QUERY = __generated__1.graphql(/* GraphQL */ "\n  query FoodItemsByPk($item_id: String!) {\n    fooditems_by_pk(item_id: $item_id) {\n      item_id\n      item_name\n      std_price\n      big_pic_url\n      brand {\n        name\n      }\n      ingredients {\n        supplyitem {\n          itemId\n          itemName\n          mainUnit\n          itemImage\n          netRate\n          dsstorebills(limit: 1, order_by: { auditDate: desc }) {\n            ArriveMoney\n            InBusAmount\n          }\n        }\n        qty\n      }\n    }\n  }\n");
