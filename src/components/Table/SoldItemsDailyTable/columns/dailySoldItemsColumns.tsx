import { ColumnsType } from 'antd/es/table';

const dailySoldItemsColumns = (): ColumnsType<any> => {
  return [
    {
      title: '菜名',
      width: 200,
      dataIndex: 'fooditem',
      key: 'fooditem',
      fixed: 'left',
      render: (val) => <span>{val.item_name}</span>,
    },
    {
      title: '数量',
      dataIndex: 'total_qty',
      key: 'total_qty',
    },
    {
      title: '折前',
      dataIndex: 'total_last_total',
      key: 'total_last_total',
      render: (val) => <span>¥ {Number(val).toFixed(2)}</span>,
    },
    {
      title: '折后',
      dataIndex: 'total_income_money',
      key: 'total_income_money',
      render: (val) => <span>¥ {Number(val).toFixed(2)}</span>,
    },
  ];
};

export default dailySoldItemsColumns;
