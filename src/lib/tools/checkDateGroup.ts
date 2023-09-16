export const checkDateGroup = (date: string) => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();


    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    const endOfWeek = new Date(today);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    const month = parseInt(date.substring(0, 2)) - 1;
    const day = parseInt(date.substring(3));

    const targetDate = new Date(currentYear, month, day);
    const targetMonth = targetDate.getMonth();
    const targetYear = targetDate.getFullYear();
    if (
        targetYear === currentYear &&
        targetMonth === currentMonth &&
        targetDate.getDate() === today.getDate()
    ) {
        return '今天'
    } else if (targetDate >= startOfWeek && targetDate <= endOfWeek) {
        return '本周'

    } else if (targetYear === currentYear && targetMonth === currentMonth) {
        return '本月'

    } else if (targetYear === currentYear && targetMonth === currentMonth - 1) {
        return '上月'

    } else if (targetYear === currentYear && targetMonth === currentMonth + 1) {
        return '下月'

    } else {
        return ''
    }

}
