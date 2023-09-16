/** @jsxImportSource @emotion/react */
import { ColumnsType } from 'antd/es/table';
import { css } from '@emotion/react';

const SoldItemsColumns = (): ColumnsType<any> => {
  return [
    {
      title: '品名',
      width: 350,
      dataIndex: 'fooditem',
      key: 'fooditem',
      fixed: 'left',
      render: (val: any, record: any) => (
        <span>
          {val.item_name}
          <span css={brandTextStyle}>{val.brand.name}</span>
        </span>
      ),
    },
    {
      title: '销量',
      dataIndex: 'last_qty',
      key: 'last_qty',
    },
    {
      title: '折后收入',
      dataIndex: 'income_money',
      key: 'income_money',
      render: (val: any) => <span>¥ {Number(val).toFixed(2)}</span>,
    },
    {
      title: '折前收入',
      dataIndex: 'last_price',
      key: 'last_price',
      render: (val: any) => <span>¥ {Number(val).toFixed(2)}</span>,
    },
  ];
};

export default SoldItemsColumns;

const brandTextStyle = css`
  font-size: 10px;
  color: #bfbfbf;
  margin-left: 8px;
`;
