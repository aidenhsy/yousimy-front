import { useModalStore } from '@/store/modalStore';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';

const storeManagerColumns = (): ColumnsType<any> => {
  const openModal = useModalStore((state) => state.openModal);
  return [
    {
      title: '管理员',
      dataIndex: 'name',
      key: 'name',
      render: (val, record) => {
        return (
          <div className="tw-flex tw-items-center">
            {record?.avatar ? (
              <Avatar
                size={32}
                src={<img src={record.avatar} alt="avatar" />}
              />
            ) : (
              <Avatar className="tw-mr-2" size={32} icon={<UserOutlined />} />
            )}
            <span className="tw-ml-2">{val}</span>
          </div>
        );
      },
    },
    {
      title: '管理门店',
      dataIndex: 'store_employees',
      key: 'store_employees',
      render: (val, record) => {
        return (
          <div className="tw-flex tw-space-x-2 tw-truncate tw-w-full">
            {val.length > 1 ? (
              <>
                <div className="tw-px-2 tw-bg-gray-200 tw-rounded-lg">
                  {val[0].store.name}
                </div>
                <Tooltip
                  title={val
                    .filter((_: any, index: any) => index != 0)
                    .map((e: any) => (
                      <span className="tw-flex tw-flex-col">
                        {e.store.name}
                      </span>
                    ))}
                  placement="top"
                  className="tw-px-2 tw-bg-gray-200 tw-rounded-lg hover:tw-cursor-pointer"
                >
                  {`+ ` + val.filter((_: any, index: any) => index != 0).length}
                </Tooltip>
              </>
            ) : (
              <div className="tw-px-2 tw-bg-gray-200 tw-rounded-lg">
                {val[0].store.name}
              </div>
            )}
          </div>
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'action',
      render: (val, record) => {
        return (
          <Button
            style={{ padding: 0 }}
            type="link"
            onClick={() => {
              console.log(record);
              openModal('addStoreModal', { currentEmployee: record });
            }}
          >
            详情
          </Button>
        );
      },
    },
  ];
};

export default storeManagerColumns;
