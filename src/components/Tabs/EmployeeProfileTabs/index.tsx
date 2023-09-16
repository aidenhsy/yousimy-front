/** @jsxImportSource @emotion/react */
import { Tabs, TabsProps } from 'antd';
import { css } from '@emotion/react';
import AboutVerticalTabs from './AboutVerticalTabs';
import { Employees } from '@/graphql/__generated__/graphql';

interface EmployeeProfileTabProps {
  employeesByPkData: Employees;
}

const EmployeeProfileTabs: React.FC<EmployeeProfileTabProps> = ({
  employeesByPkData,
}) => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `简介`,
      children: (
        <div css={summaryContainerStyle}>
          <AboutVerticalTabs employeesByPkData={employeesByPkData} />
        </div>
      ),
    },
    {
      key: '2',
      label: `照片`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `打卡记录`,
      children: `Content of Tab Pane 3`,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default EmployeeProfileTabs;

const summaryContainerStyle = css`
  padding-left: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  border: 1px solid #d9d9d9;
  border-radius: 0.5rem;
`;
