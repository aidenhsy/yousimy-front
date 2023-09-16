/** @jsxImportSource @emotion/react */
import { Tabs, TabsProps } from 'antd';
import React from 'react';
import { css } from '@emotion/react';
import { StatusMap } from '@/lib/mapping';
import { Employees } from '@/graphql/__generated__/graphql';

interface AboutVerticalTabsProps {
  employeesByPkData: Employees;
}

const AboutVerticalTabs: React.FC<AboutVerticalTabsProps> = ({
  employeesByPkData,
}) => {
  const vItems: TabsProps['items'] = [
    {
      key: '1',
      label: `概览`,
      children: (
        <div className="tw-flex tw-flex-col tw-space-y-4">
          <div css={overviewRowStyle}>
            <span>
              当前状态：
              <span className="tw-font-bold">
                {StatusMap[employeesByPkData?.status]}
              </span>
            </span>
          </div>
          <div css={overviewRowStyle}>
            <span>
              所在部门：
              <span className="tw-font-bold">
                {employeesByPkData?.department?.name}
              </span>
            </span>
          </div>
          <div css={overviewRowStyle}>
            <span>
              家庭住址：
              <span className="tw-font-bold">
                {employeesByPkData?.department?.name}
              </span>
            </span>
          </div>
          <div css={overviewRowStyle}>
            <span>
              户口：
              <span className="tw-font-bold">
                {employeesByPkData?.department?.name}
              </span>
            </span>
          </div>
        </div>
      ),
    },
    {
      key: '2',
      label: `资料附件`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `工作与学历`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '4',
      label: `居住地`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '5',
      label: `联系方式和基本信息`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '6',
      label: `家庭成员于感情状况`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: '7',
      label: `生活记事`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <Tabs
      tabPosition="left"
      items={vItems}
      tabBarStyle={{ paddingRight: '20px' }}
      css={activeTabStyle}
    />
  );
};

export default AboutVerticalTabs;

const activeTabStyle = css`
  .ant-tabs-tab.ant-tabs-tab-active {
    background-color: #e6f4ff !important;
    width: 200px;
    border-radius: 5px;
  }

  .ant-tabs-ink-bar {
    display: none !important;
  }
`;

const overviewRowStyle = css`
  display: flex;
  justify-content: space-between;
`;
