// 增加或者删除数组元素
export const inCreaseOrDeleteAry = (dataSource: any[], atr: string = '', fields: string = '', value?: object | number | string) => {

    const newData = [...dataSource]
    // 判断是否是对象数组
    const isObjAry = newData.every((one) => typeof one === 'object')
    if (isObjAry) {
        const index = newData.findIndex((one) => one[atr] === fields)
        if (index === -1) {
            newData.push(value)
        } else {
            newData.splice(index, 1)
        }
    } else {
        if (!newData.includes(value)) {
            newData.push(value)
        } else {
            newData.splice(newData.indexOf(value), 1)
        }
    }
    return newData
}