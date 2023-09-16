import { Table } from 'antd';
import { ColumnType } from 'antd/es/table';
import React from 'react';

interface BasicTableProps {
  visibleColumns: string[];
}

const BasicTable: React.FC<BasicTableProps> = ({ visibleColumns }) => {
  let dataSource = [];
  for (let i = 1; i < 100; i++) {
    dataSource.push({
      key: `${i}`,
      name: `name${i}`,
      age: 32,
      address: `${i} Downing Street`,
    });
  }

  const allColumns: ColumnType<any>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const columns = allColumns.filter(
    (col) => col.key && visibleColumns.includes(String(col.key))
  );

  return (
    <Table
      sticky={{ offsetHeader: 56 }}
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default BasicTable;
