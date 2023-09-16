"use strict";
exports.__esModule = true;
exports.useFoodItemByPk = void 0;
var fooditem_query_1 = require("@/graphql/queries/fooditem.query");
var client_1 = require("@apollo/client");
exports.useFoodItemByPk = function (item_id) {
    var _a = client_1.useQuery(fooditem_query_1.FOOD_ITEMS_BY_PK_QUERY, {
        variables: { item_id: item_id }
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    return {
        foodItemByPkData: data,
        foodItemByPkLoading: loading,
        foodItemByPkError: error,
        foodItemByPkRefetch: refetch
    };
};
