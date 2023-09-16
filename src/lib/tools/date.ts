// 获取对应月的对应日期和星期数组 selectedMonth是对应月 格式 YYYY/MM
export const getDayAndWeek = (selectedMonth: string) => {
    // console.log(selectedMonth);
    let date = new Date(selectedMonth);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    // let month = date.getMonth() - 1;

    let days = new Date(year, month, 0);
    let currentMonth = [];
    let weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    for (let i = 1; i <= days.getDate(); i++) {
        currentMonth.push({
            week: weekList[new Date(date.setDate(i)).getDay()],
            day: i,
            fullDay: year + '-' + padZero(month, 2) + '-' + padZero(date.getDate(), 2)
        });
    }
    return currentMonth;
};

export const padZero = (number: number | string, length: number) => {
    let str = String(number);
    while (str.length < length) {
        str = '0' + str
    }
    return str
}