export const findKeyByValue = (obj: any, value: string) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === value) {
            return key;
        }
    }
    return null; // 如果没有找到匹配的键，则返回 null
};

