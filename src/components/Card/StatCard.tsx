/** @jsxImportSource @emotion/react */
import { Statistic } from 'antd';
import React from 'react';
import { css } from '@emotion/react';

interface StatCardType {
  loading?: boolean;
  title: string;
  value?: string | number | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const StatCard: React.FC<StatCardType> = ({
  loading,
  title,
  value,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <Statistic
        title={title}
        loading={loading}
        value={value}
        css={statisticContainerStyle}
      />
    </div>
  );
};

export default StatCard;

const statisticContainerStyle = css`
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    border-color: #1890ff;
    color: #1890ff;
    cursor: pointer;
  }
  &:hover .ant-statistic-content-value {
    color: #1890ff;
  }
`;
