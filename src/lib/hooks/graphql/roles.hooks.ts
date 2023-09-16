import { useMutation, useQuery } from '@apollo/client';
import { getNavTree, getRoleById, getRolesList } from '@/lib/graphql/query';
import { addEmployee2Role, createRole, deleteEmployeeRole, deleteRole, updateRoleNavs } from '@/lib/graphql/mutation';

const changeKeys = (treeData: any, parentKey: any) => {
    // 创建新的节点对象，将原节点的属性复制到新节点中
    const newNode = { ...treeData };
    // 拼接父节点的键和当前节点的键
    const currentKey = parentKey ? parentKey + '-' + treeData.key : treeData.key;
    // 更新当前节点的键
    newNode.key = currentKey;
    // 检查当前节点是否有子节点
    if (treeData.children && treeData.children.length > 0) {
        // 递归调用changeKeys函数，传递当前节点的键作为父节点键
        newNode.children = treeData.children.map((child: any) => changeKeys(child, currentKey));
    }
    return newNode;
}

const getAllKeys = (tree: any) => {
    let keys: any = [];
    function traverse(node: any) {
        if (node.children && node.children.length > 0) {
            node.children.forEach((child: any) => {
                traverse(child);
            });
        } else {
            keys.push(node.key);
        }
    }
    tree && tree.forEach((node: any) => {
        traverse(node);
    });
    return keys;
}
// 管理员角色列表
export const useRolesList = () => {
    const { data, loading, error, refetch } = useQuery(getRolesList, {
        notifyOnNetworkStatusChange: true
    });
    return {
        rolesList_data: data?.roles,
        rolesList_loading: loading,
        rolesList_error: Boolean(error),
        rolesList_refetch: refetch
    };
};
// 获取权限树
export const useNavTree = () => {
    const { data, loading, error, refetch } = useQuery(getNavTree, {
        notifyOnNetworkStatusChange: true
    });

    const source = data?.navTree?.map((item) => changeKeys(item, ''))
    return {
        navTree_data: source,
        navTree_loading: loading,
        navTree_error: Boolean(error),
        navTree_refetch: refetch
    };
};
// 通过id获取管理员角色列表
export const useRoleById = (roleByIdId: string) => {
    const { data, loading, error, refetch }: any = useQuery(getRoleById, {
        variables: { roleByIdId },
        notifyOnNetworkStatusChange: true
    });
    const source = data?.roleById?.navs.map((item: any) => changeKeys(item, ''))
    const checkedKeys = getAllKeys(source);
    return {
        useRoleById_data: { ...data?.roleById, navs: source, checkedKeys },
        useRoleById_loading: loading,
        useRoleById_error: Boolean(error),
        useRoleById_refetch: refetch
    };
};


// 创建角色
export const useCreateRole = () => {
    const [mutate, { loading, error, data }] = useMutation(createRole);
    const addRole = async (
        name: string,
    ) => {
        return await mutate({
            variables: { name },
        });
    };
    return {
        addRole,
        addRole_loading: loading,
        addRole_data: data,
        addRole_error: error,
    };
};
// 更新角色路由
export const useUpdateRoleNavs = () => {
    const [mutate, { loading, error, data }] = useMutation(updateRoleNavs);
    const updateRoleNav = async (
        roleId: string,
        navSmIds: string[]
    ) => {
        return await mutate({
            variables: { roleId, navSmIds },
        });
    };
    return {
        updateRoleNav,
        updateRoleNav_loading: loading,
        updateRoleNav_data: data,
        updateRoleNav_error: error,
    };
};

// 添加人员到角色
export const useAddEmployee2Role = () => {
    const [mutate, { loading, error, data }] = useMutation(addEmployee2Role);
    const addEmployeeRole = async (
        roleId: string,
        employeeIds: string[]
    ) => {
        return await mutate({
            variables: { roleId, employeeIds },
        });
    };
    return {
        addEmployeeRole,
        addEmployeeRole_loading: loading,
        addEmployeeRole_data: data,
        addEmployeeRole_error: error,
    };
};

//从一个角色删除一个人员
export const useDeleteEmployeeRole = () => {
    const [mutate, { loading, error, data }] = useMutation(deleteEmployeeRole);
    const delEmployeeRole = async (
        roleId: string,
        employeeId: string
    ) => {
        return await mutate({
            variables: { roleId, employeeId },
            notifyOnNetworkStatusChange: true
        });
    };
    return {
        delEmployeeRole,
        delEmployeeRole_loading: loading,
        delEmployeeRole_data: data,
        delEmployeeRole_error: error,
    };
};

//删除角色
export const useDeleteRole = () => {
    const [mutate, { loading, error, data }] = useMutation(deleteRole);
    const delRole = async (
        roleId: string,
    ) => {
        return await mutate({
            variables: { roleId },
            notifyOnNetworkStatusChange: true
        });
    };
    return {
        delRole,
        delRole_loading: loading,
        delRole_data: data,
        delRole_error: error,
    };
};
