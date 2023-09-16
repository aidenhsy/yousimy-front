export const extractKeyValue = <T extends Record<string, any>>(
  obj: T,
  key: keyof T,
  value: T[keyof T] | T[keyof T][]
): T => {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    if (k !== key || (Array.isArray(v) && !v.includes(value))) {
      acc[k as keyof T] = v;
    }
    return acc;
  }, {} as T);
};
