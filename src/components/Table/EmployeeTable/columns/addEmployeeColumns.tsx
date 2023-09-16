import { Employees } from '@/graphql/__generated__/graphql';
import { StatusMap } from '@/lib/mapping';
import { useModalStore } from '@/store/modalStore';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';

const addEmployeeColumn = (): ColumnsType<any> => {
  return [
    {
      title: '姓名',
      width: 220,
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
      width: 200,
    },
    {
      title: '人员状态',
      dataIndex: 'status',
      key: 'status',
      width: 200,
    },
    { title: '职位', dataIndex: 'job_title', key: 'job_title', width: 200 },
    { title: '入职日期', dataIndex: 'hire_date', key: 'hire_date', width: 200 },
  ];
};

export default addEmployeeColumn;
