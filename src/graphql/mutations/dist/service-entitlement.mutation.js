"use strict";
exports.__esModule = true;
exports.INSERT_SERVICE_ENTITLEMENT_ONE_MUTATION = void 0;
var __generated__1 = require("../__generated__");
exports.INSERT_SERVICE_ENTITLEMENT_ONE_MUTATION = __generated__1.graphql(/* GraphQL */ "\n  mutation InsertServiceEntitlementOne(\n    $object: service_entitlement_insert_input!\n  ) {\n    insert_service_entitlement_one(object: $object) {\n      id\n    }\n  }\n");
