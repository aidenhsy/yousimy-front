import { ColumnsType } from 'antd/es/table';

const storeColumns = (): ColumnsType<any> => {
  return [
    {
      title: '品名',
      width: 200,
      dataIndex: ['supplyitem', 'itemName'],
      key: 'itemName',
      render: (val) => {
        return <span>{val}</span>;
      },
    },
    {
      title: '进货量',
      dataIndex: 'InBusAmount',
      key: 'InBusAmount',
      render: (val, record) => {
        return (
          <span>
            {val} {record.supplyitem.reportUnit}
          </span>
        );
      },
    },
    {
      title: '规格',
      dataIndex: 'ItemSpec',
      key: 'ItemSpec',
    },
    {
      title: '金额',
      dataIndex: 'ArriveMoney',
      key: 'ArriveMoney',
      render: (val) => <span>¥ {Number(val).toFixed(2)}</span>,
    },
    {
      title: '供应商',
      dataIndex: 'OtherSideName',
      key: 'OtherSideName',
    },
  ];
};

export default storeColumns;
