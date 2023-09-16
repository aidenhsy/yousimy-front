import { Employees } from '@/graphql/__generated__/graphql';
import { StatusMap } from '@/lib/mapping';
import { useModalStore } from '@/store/modalStore';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';

const simpleEmployeeColumns = (): ColumnsType<any> => {
  const openModal = useModalStore((state) => state.openModal);

  return [
    {
      title: '姓名',
      width: 200,
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
      title: '人员状态',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (val) => {
        return val ? StatusMap[val] : '-';
      },
    },

    { title: '职位', dataIndex: 'job_title', key: 'job_title', width: 120 },
    {
      title: '部门',
      dataIndex: ['department', 'name'],
      key: 'status',
    },
    { title: '入职日期', dataIndex: 'hire_date', key: 'hire_date' },

    {
      title: '操作',
      dataIndex: 'action',
      width: 120,
      fixed: 'right',
      render: (val: any, record: Employees) => {
        return (
          <Button
            disabled={record.status !== 2}
            onClick={() =>
              openModal('offBoardModal', { offBoardEmployee: record })
            }
            type="link"
            style={{ padding: 0 }}
          >
            办理离职
          </Button>
        );
      },
    },
  ];
};

export default simpleEmployeeColumns;
