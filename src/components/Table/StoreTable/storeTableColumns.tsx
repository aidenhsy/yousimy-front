import { ColumnsType } from 'antd/es/table';

export const brandColumns = (): ColumnsType<any> => {
  return [
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
    },
  ];
};

export const storeColumns = (): ColumnsType<any> => {
  return [
    {
      title: '门店',
      dataIndex: 'name',
      key: 'name',
    },
  ];
};
