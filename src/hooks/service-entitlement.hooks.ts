import { Service_Entitlement_Insert_Input, Service_Entitlement_Set_Input } from '@/graphql/__generated__/graphql';
import { DELETE_SERVICE_ENTITLEMENT_MUTATION, INSERT_SERVICE_ENTITLEMENT_ONE_MUTATION, UPDATE_SERVICE_ENTITLEMENT_MUTATION } from '@/graphql/mutations/service-entitlement.mutation';
import { useMutation } from '@apollo/client';

export const useInsertServiceEntitlementOne = () => {
  const [mutate, { data, loading, error }] = useMutation(
    INSERT_SERVICE_ENTITLEMENT_ONE_MUTATION
  );

  const insertServiceEntitlementOne = async (
    object: Service_Entitlement_Insert_Input
  ) => {
    return await mutate({
      variables: { object },
    });
  };

  if (error) {
    console.log(error);
  }

  return {
    insertServiceEntitlementOne,
    insertServiceEntitlementOne_data: data,
    insertServiceEntitlementOne_loading: loading,
    insertServiceEntitlementOne_error: Boolean(error),
  };
};


export const useDeleteServiceEntitlementOne = () => {
  const [mutate, { data, loading, error }] = useMutation(
    DELETE_SERVICE_ENTITLEMENT_MUTATION
  );

  const deleteServiceEntitlementOne = async (
    id: string,
  ) => {
    return await mutate({
      variables: { id },
    });
  };

  if (error) {
    console.log(error);
  }

  return {
    deleteServiceEntitlementOne,
    deleteServiceEntitlementOne_data: data?.delete_service_entitlement_by_pk?.id,
    deleteServiceEntitlementOne_loading: loading,
    deleteServiceEntitlementOne_error: Boolean(error),
  };
};


export const useUpdateServiceEntitlementOne = () => {
  const [mutate, { data, loading, error }] = useMutation(
    UPDATE_SERVICE_ENTITLEMENT_MUTATION
  );

  const updateServiceEntitlementOne = async (
    id: string,
    _set: Service_Entitlement_Set_Input,
  ) => {
    return await mutate({
      variables: { id, _set },
    });
  };

  if (error) {
    console.log(error);
  }

  return {
    updateServiceEntitlementOne,
    updateServiceEntitlementOne_data: data?.update_service_entitlement_by_pk?.id,
    updateServiceEntitlementOne_loading: loading,
    updateServiceEntitlementOne_error: Boolean(error),
  };
};