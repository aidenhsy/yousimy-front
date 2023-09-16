import { useEffect, useState } from "react";

// 获取 响应屏幕宽度
export const useWindow = () => {
    const [innerWidth, setWidth] = useState(0);
    const [innerHeight, setHeight] = useState(0);
    const handleResize = (event: any) => {
        setHeight(event.target.innerHeight);
        setWidth(event.target.innerWidth);
    };
    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return [innerWidth, innerHeight];
};