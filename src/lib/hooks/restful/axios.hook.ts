import { useEffect, useState } from 'react';
import axios from 'axios';
// 自动触发请求
export const useAxios = (
  url: string,
  method = 'GET',
  body?: any,
  headers?: any
): { data: any; loading: any; error: any } => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method,
          url,
          params: body,
          data: body,
          headers,
        });
        setData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method]);

  return { data, loading, error };
};
// 手动促发请求
export const useRequest = (): { loadData: any; loading: any; error: any } => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loadData = async ({ ...args }) => {
    setLoading(true);
    try {
      const response = await axios({
        ...args,
      });
      setLoading(false);
      return response;
    } catch (error: any) {
      setError(error);
      setLoading(false);
      return error;
    }
  };

  return { loadData, loading, error };
};
