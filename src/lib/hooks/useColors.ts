import { useEffect, useState } from "react";

// 班次列表 背景色和字体颜色
interface ColorsType {
    color: string;
    bgColor: string;
}

export const useColors = (list: any) => {
    const [newArr, setArr] = useState(Array.from([]));
    // 20种固定颜色
    const colors: ColorsType[] = [
        {
            color: '#0c296e',
            bgColor: '#bacefd',
        },
        {
            color: '#5c3a00',
            bgColor: '#f7e2a1',
        },
        {
            color: '#230a56',
            bgColor: '#c6a9f9',
        },
        {
            color: '#603200',
            bgColor: '#fece9a',
        },
        {
            color: '#480d2c',
            bgColor: '#f8a5d4',
        },
        {
            color: '#054239',
            bgColor: '#9fede2',
        },
        {
            color: '#0e1359',
            bgColor: '#abb0f1',
        },
        {
            color: '#2f3a00',
            bgColor: '#dbeb8b',
        },
        {
            color: '#3d0e3d',
            bgColor: '#edb0ed',
        },
        {
            color: '#13420f',
            bgColor: '#aeeaa8',
        },
        {
            color: '#571a17',
            bgColor: '#fbb7b4',
        },
        {
            color: '#0e2563',
            bgColor: '#dde7ff',
        },
        {
            color: '#523300',
            bgColor: '#f9efcb',
        },
        {
            color: '#230a56',
            bgColor: '#e9defe',
        },
        {
            color: '#603200',
            bgColor: '#fee7cc',
        },
        {
            color: '#480d2c',
            bgColor: '#fdd8ed',
        },
        {
            color: '#054239',
            bgColor: '#cff5f0',
        },
        {
            color: '#0e1359',
            bgColor: '#dbdef9',
        },
        {
            color: '#2f3a00',
            bgColor: '#ebf4be',
        },
        {
            color: '#3d0e3d',
            bgColor: '#f7d9f7',
        },
    ];
    function setNewList() {
        setArr(
            list.map((item: any, index: number) => {
                return {
                    ...item,
                    color: colors[index % colors.length].color,
                    bgColor: colors[index % colors.length].bgColor,
                };
            })
        );
    }
    function getColor(id: string) {
        if (newArr.length > 0) {
            return newArr
                .filter((item: any) => item.shift_list.id === id)
                .map((el: any) => ({ color: el.color, bgColor: el.bgColor }))[0];
        }
    }
    useEffect(() => {
        if (Array.isArray(list)) {
            setNewList();
        }
    }, [list]);
    return { newArr, getColor };
};