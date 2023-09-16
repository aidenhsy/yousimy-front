import { useRef, useEffect, useCallback, useState } from 'react';

export * from './graphql/department.hook';
export * from './graphql/user.hook';
export * from './graphql/stats.hook';
export * from './graphql/option.hook';
export * from './graphql/attendance.hook';
export * from './graphql/roles.hooks';
export * from './graphql/brands.hooks';
export * from '../hooks/restful/hr.hook';
export * from './graphql/store.hooks'
// 防抖
export const useDebounce = (
  fn: (args: any) => void,
  delay: number,
  dep: any = []
) => {
  const { current } = useRef<{ fn: Function; timer: null | NodeJS.Timeout }>({
    fn,
    timer: null,
  });
  useEffect(
    function () {
      current.fn = fn;
    },
    [fn]
  );

  return useCallback((args: any) => {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.fn(args);
    }, delay);
  }, dep);
};


