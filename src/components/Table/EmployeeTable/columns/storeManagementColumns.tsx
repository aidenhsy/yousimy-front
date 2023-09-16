import { Employees } from '@/graphql/__generated__/graphql';
import { StatusMap } from '@/lib/mapping';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { ColumnsType } from 'antd/es/table';

const storeManagementColumns = (): ColumnsType<any> => {
  return [
    {
      title: '姓名',
      width: 240,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      render: (val: any, record: Employees) => (
        <div style={{ cursor: 'pointer' }}>
          {record?.avatar ? (
            <Avatar src={<img src={record.avatar} alt="avatar" />} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
          <span className="tw-ml-2">{val}</span>
        </div>
      ),
    },
    {
      title: '部门',
      dataIndex: ['department', 'name'],
      key: 'status',
    },
    {
      title: '手机号码',
      dataIndex: 'mobile',
      key: 'mobile',
      render: (val) => {
        return val ? val : '-';
      },
    },
    {
      title: '人员状态',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (val) => {
        return val ? StatusMap[val] : '-';
      },
    },

    { title: '职位', dataIndex: 'job_title', key: 'job_title', width: 120 },
    { title: '入职日期', dataIndex: 'hire_date', key: 'hire_date' },
  ];
};

export default storeManagementColumns;
