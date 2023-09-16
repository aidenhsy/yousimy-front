/**
 *  callback  回调执行函数
 * delay  延迟时间
 * stop 停止时机
 * 
 */

import { useEffect, useRef, useState } from "react"

export const useInterval = (callback: Function, delay: number, stop: boolean) => {
    const latestCallback = useRef<Function>(() => { });
    let interval: any;
    useEffect(() => {
        latestCallback.current = callback;
    })
    useEffect(() => {
        if (delay !== null) {
            interval = setInterval(() => {
                if (stop) {
                    clearInterval(interval);
                    interval = null;
                    return;
                }
                latestCallback.current()
            }, delay);
            return () => {
                clearInterval(interval)
                interval = null;
            }
        }

    }, [delay, stop])
}