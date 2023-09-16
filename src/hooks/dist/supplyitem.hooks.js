"use strict";
exports.__esModule = true;
exports.useSupplyItemsByPk = void 0;
var supplyitem_query_1 = require("@/graphql/queries/supplyitem.query");
var client_1 = require("@apollo/client");
exports.useSupplyItemsByPk = function (itemId) {
    var _a = client_1.useQuery(supplyitem_query_1.SUPPLY_ITEMS_BY_PK_QUERY, {
        variables: { itemId: itemId }
    }), data = _a.data, loading = _a.loading, error = _a.error, refetch = _a.refetch;
    return {
        supplyItemsData: data,
        supplyItemsLoading: loading,
        supplyItemsError: error,
        supplyItemsRefetch: refetch
    };
};
