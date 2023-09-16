import { graphql } from '../__generated__';

export const INSERT_SERVICE_ENTITLEMENT_ONE_MUTATION = graphql(/* GraphQL */ `
  mutation InsertServiceEntitlementOne(
    $object: service_entitlement_insert_input!
  ) {
    insert_service_entitlement_one(object: $object) {
      id
    }
  }
`);

export const UPDATE_SERVICE_ENTITLEMENT_MUTATION = graphql(/* GraphQL */ `
 mutation UpdateServiceEntitlement($id: String!, $_set: service_entitlement_set_input!) {
    update_service_entitlement_by_pk(pk_columns: {id: $id}, _set: $_set) {
      id
    }
  }
`);

export const DELETE_SERVICE_ENTITLEMENT_MUTATION = graphql(/* GraphQL */ `
 mutation DeleteServiceEntitlement($id: String!) {
    delete_service_entitlement_by_pk(id: $id) {
      id
    }
  }
`);
