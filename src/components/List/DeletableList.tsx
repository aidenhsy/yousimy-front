import { CloseOutlined } from '@ant-design/icons';
import { List } from 'antd';
import React from 'react';

interface DeletableListProps {
  list: any[];
  setList: (any: any[]) => void;
}

const DeletableList: React.FC<DeletableListProps> = ({ list, setList }) => {
  return (
    <List
      size="large"
      renderItem={(item: any) => (
        <List.Item
          actions={[
            <a
              onClick={() => {
                const filteredList = list.filter((e) => e.id !== item.id);
                setList(filteredList);
              }}
            >
              <CloseOutlined />
            </a>,
          ]}
        >
          <span>{item.name}</span>
        </List.Item>
      )}
      dataSource={list}
    />
  );
};

export default DeletableList;
