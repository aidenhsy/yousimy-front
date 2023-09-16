
export enum Options {
    APPLICATION, //转正申请
    APPLICATION_STATUS, //转正状态
    CANCEL_ONBOARDING_REASON, //取消入职原因
    EMPLOYEE_FORM_STATUS, //入职登记表状态
    EMPLOYEE_TYPE, //人员类型
    ETHNICITY, //民族
    GENDER, //性别
    HUKOU_TYPE, //户口类型
    ID_TYPE, //证件类型
    MARTIAL_STATUS, //婚姻状况
    STATUS, //员工状态
}
export interface DictType {
    label: string;
    value: string;
}
export interface DeptType {
    id: string;
    name?: string | null;
    __typename?: "Department";
    child_departments: DeptType[];
}
export interface DictOptionType {
    id: number;
    value: string;
}
export interface DictType {
    field: string;
    options: DictOptionType[];
}
//从接口返回字典数据中取需要的数组
export const getDict = (text: string, list: DictType[]): DictOptionType[] => {
    return list
        .filter((item: DictType) => item.field === text)
        .map((el) => el.options)[0];
};

// 递归获取树形结构中多选的 label
export const getDictsWithRecursion = (
    ids: string[] | undefined,
    newArr: string[],
    dicts: DeptType[]
) => {
    if (!ids) {
        return;
    }
    if (dicts.length <= 0) {
        return;
    }
    dicts.forEach((element) => {
        if (ids?.includes(element.id) && element.name) {
            newArr.push(element?.name);
        }
        if (element.child_departments) {
            getDictsWithRecursion(ids, newArr, element.child_departments);
        }
    });
    return newArr;
};

// 获取已选的字典标签
export const getDictLabels = (
    ids: number[] | undefined,
    dicts: DictOptionType[]
) => {
    if (dicts.length <= 0 || !ids) {
        return new Array();
    }
    return dicts
        .filter((item: DictOptionType) => ids?.includes(item.id))
        .map((el: DictOptionType) => el.value);
};
