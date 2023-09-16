export const mergeKeys = (obj: any) => {
    // 带有.的字符串key变成对象 并同名合并
    const result: any = {};
    for (let key in obj) {
        if (key.includes('.')) {
            const parts = key.split('.');
            const mainKey = parts[0];
            const subKey = parts.slice(1).join('.');
            if (!result.hasOwnProperty(mainKey)) {
                result[mainKey] = {};
            }
            result[mainKey][subKey] = obj[key];
        } else {
            result[key] = obj[key];
        }
    }

    for (let key in result) {
        if (typeof result[key] === 'object') {
            result[key] = mergeKeys(result[key]);
        }
    }

    return result;
}

