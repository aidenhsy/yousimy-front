import React from 'react';
import { Checkbox, Drawer } from 'antd';

interface BasicDrawerProps {
  open: boolean;
  onClose: () => void;
  allColumns: string[];
  visibleColumns: string[];
  handleColumnChange: (columnKey: string) => void;
}

const BasicDrawer: React.FC<BasicDrawerProps> = ({
  open,
  onClose,
  allColumns,
  visibleColumns,
  handleColumnChange,
}) => {
  return (
    <Drawer title="自定义列" open={open} placement="right" onClose={onClose}>
      {allColumns.map((column) => (
        <div key={column}>
          <Checkbox
            checked={visibleColumns.includes(column)}
            onChange={() => handleColumnChange(column)}
          >
            <span>{column}</span>
          </Checkbox>
        </div>
      ))}
    </Drawer>
  );
};

export default BasicDrawer;
