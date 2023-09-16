import { Employees } from '@/graphql/__generated__/graphql';
import { StatusMap } from '@/lib/mapping';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';

const storeAbnormalColumns = (): ColumnsType<any> => {
  return [
    {
      title: '姓名',
      width: 200,
      dataIndex: 'employee',
      key: 'name',
      fixed: 'left',
      render: (val: any) => (
        <div style={{ cursor: 'pointer' }}>
          {val?.avatar ? (
            <Avatar src={<img src={val?.avatar} alt="avatar" />} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
          <span className="tw-ml-2">{val?.name}</span>
        </div>
      ),
    },
    {
      title: '部门',
      dataIndex: ['employee', 'department'],
      key: 'department',
      render: (val: any) => <span>{val?.name}</span>,
    },
    {
      title: '状态',
      dataIndex: ['employee', 'status'],
      key: 'status',
      render: (val: any) => <span>{StatusMap[val]}</span>,
    },
    {
      title: '问题点',
      dataIndex: 'types',
      key: 'types',
      render: (val: any) => (
        <div className="tw-flex tw-flex-col tw-space-y-2">
          {val.map((p: any) => (
            <span>{p}</span>
          ))}
        </div>
      ),
    },
  ];
};

export default storeAbnormalColumns;
