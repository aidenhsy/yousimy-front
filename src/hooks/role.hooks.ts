
import { Employees_Roles_Bool_Exp, Employees_Roles_Insert_Input, Role_Nav_Sm_Categories_Bool_Exp, Role_Nav_Sm_Categories_Insert_Input, Roles_Bool_Exp, Roles_Insert_Input } from "@/graphql/__generated__/graphql";
import { CREATE_EMPLOYEES_ROLE_MUTATION, CREATE_ROLE_MUTATION, CREATE_ROLE_NAV_MUTATION, DELETE_EMPLOYEES_ROLE_MUTATION, DELETE_ROLE_MUTATION, DELETE_ROLE_NAV_MUTATION } from "@/graphql/mutations/role.mutation";
import { NAV_TREE_LIST_QUERY, ROLES_BY_ID_QUERY, ROLE_LISTS_QUERY } from "@/graphql/queries/role.query";
import { useMutation, useQuery } from "@apollo/client";

const changeKeys = (treeData: any, parentKey: any) => {
    // 创建新的节点对象，将原节点的属性复制到新节点中
    const newNode = { ...treeData };
    // 拼接父节点的键和当前节点的键
    const currentKey = parentKey ? parentKey + '-' + treeData.id : treeData.id;
    // 更新当前节点的键
    newNode.key = currentKey;
    // 检查当前节点是否有子节点
    if (treeData.nav_bg_categories && Boolean(treeData.nav_bg_categories.length)) {
        newNode.children = treeData.nav_bg_categories.map((child: any) => changeKeys(child, currentKey));
    } else if (treeData.nav_sm_categories && Boolean(treeData.nav_sm_categories.length)) {
        newNode.children = treeData.nav_sm_categories.map((child: any) => child.side_nav_visible && changeKeys(child, currentKey)).filter((item: any) => typeof item !== 'number');
    }

    return newNode;
}


/* Queries */
export const useRolesList = (
    where?: Roles_Bool_Exp
) => {
    const { data, loading, error, refetch } = useQuery(ROLE_LISTS_QUERY, {
        variables: { where },
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'no-cache',
    });
    return {
        rolesListData: data,
        rolesListLoading: loading,
        rolesListError: Boolean(error),
        rolesListRefetch: refetch
    };
};
// 获取权限树
export const useNavTree = () => {
    const { data, loading, error, refetch } = useQuery(NAV_TREE_LIST_QUERY, {
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'no-cache',
    });
    const source = data?.nav_xl_categories?.map((item) => changeKeys(item, ''))
    return {
        navTreeData: source,
        navTreeLoading: loading,
        navTreeError: Boolean(error),
        navTreeRefetch: refetch
    };
};


export const useRolesById = (
    id: string,
    where?: Employees_Roles_Bool_Exp
) => {
    const { data, loading, error, refetch } = useQuery(ROLES_BY_ID_QUERY, {
        variables: { id, where },
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'no-cache',
    });
    return {
        rolesByIdData: data,
        rolesByIdLoading: loading,
        rolesByIdError: Boolean(error),
        rolesByIdRefetch: refetch
    };
};



/* Mutations */

//添加角色
export const useCreateRole = () => {
    const [mutate, { loading, error, data }] = useMutation(CREATE_ROLE_MUTATION);

    const createRole = async (
        objects: [Roles_Insert_Input]
    ) => {
        return await mutate({
            variables: {
                objects
            },
        });
    };

    return {
        createRole,
        createRoleLoading: loading,
        createRoleData: data?.insert_roles?.returning,
        createRoleError: Boolean(error),
    };
};
// 删除角色
export const useDeleteRole = () => {
    const [mutate, { loading, error, data }] = useMutation(DELETE_ROLE_MUTATION);

    const deleteRole = async (
        where: Roles_Bool_Exp
    ) => {
        return await mutate({
            variables: {
                where
            },
        });
    };

    return {
        deleteRole,
        deleteRoleLoading: loading,
        deleteRoleData: data?.delete_roles?.returning,
        deleteRoleError: Boolean(error),
    };
};

//添加角色人员
export const useCreateEmployeesRole = () => {
    const [mutate, { loading, error, data }] = useMutation(CREATE_EMPLOYEES_ROLE_MUTATION);

    const createEmployeesRole = async (
        objects: [Employees_Roles_Insert_Input]
    ) => {
        return await mutate({
            variables: {
                objects
            },
        });
    };

    return {
        createEmployeesRole,
        createEmployeesRoleLoading: loading,
        createEmployeesRoleData: data?.insert_employees_roles?.returning,
        createEmployeesRoleError: Boolean(error),
    };
};

//删除角色人员
export const useDeleteEmployeesRole = () => {
    const [mutate, { loading, error, data }] = useMutation(DELETE_EMPLOYEES_ROLE_MUTATION);

    const deleteEmployeesRole = async (
        where: Employees_Roles_Bool_Exp
    ) => {
        return await mutate({
            variables: {
                where
            },
        });
    };

    return {
        deleteEmployeesRole,
        deleteEmployeesRoleLoading: loading,
        deleteEmployeesRoleData: data?.delete_employees_roles?.returning,
        deleteEmployeesRoleError: Boolean(error),
    };
};

// 删除角色路由
export const useDeleteRoleNav = () => {
    const [mutate, { loading, error, data }] = useMutation(DELETE_ROLE_NAV_MUTATION);

    const deleteRoleNav = async (
        where: Role_Nav_Sm_Categories_Bool_Exp
    ) => {
        return await mutate({
            variables: {
                where
            },
        });
    };

    return {
        deleteRoleNav,
        deleteRoleNavLoading: loading,
        deleteRoleNavData: data?.delete_role_nav_sm_categories?.returning,
        deleteRoleNavError: Boolean(error),
    };
};
// 创建角色路由
export const useCreateRoleNav = () => {
    const [mutate, { loading, error, data }] = useMutation(CREATE_ROLE_NAV_MUTATION);

    const createRoleNav = async (
        objects: [Role_Nav_Sm_Categories_Insert_Input]
    ) => {
        return await mutate({
            variables: {
                objects
            },
        });
    };

    return {
        createRoleNav,
        createRoleNavLoading: loading,
        createRoleNavData: data?.insert_role_nav_sm_categories?.returning,
        createRoleNavError: Boolean(error),
    };
};

