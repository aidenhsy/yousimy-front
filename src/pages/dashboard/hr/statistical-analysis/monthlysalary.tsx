import DateWIcons from '@/components/Date/DateWIcons';
import HrMonthlySalaryfilterDrawer from '@/components/Drawer/HrMonthlySalaryfilterDrawer';
import { DashBoard } from '@/components/Layout/Dashboard';
import { DashItems } from '@/components/Layout/Dashboard/types';
import hrColumns from '@/components/Table/MonthlySalaryTable/columns/hrColumns';
import ViewMonthlySalaryTable from '@/components/Table/ViewMonthlySalaryTable';
import { View_Monthly_Salary_Bool_Exp } from '@/graphql/__generated__/graphql';
import { withDashItems } from '@/hoc/withDashItems';
import { useDebounce } from '@/lib/hooks';
import { useDrawerStore } from '@/store/drawerStore';
import { FilterOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { GetServerSidePropsContext } from 'next';
import React, { useEffect, useState } from 'react';

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const MonthlySalaryPage = ({ dashItems }: { dashItems: DashItems }) => {
  const [date, setDate] = useState<Dayjs>(
    dayjs().add(-1, 'month').startOf('month')
  );
  const [filter, setFilter] = useState<View_Monthly_Salary_Bool_Exp>({
    month: { _eq: date },
  });

  const openDrawer = useDrawerStore((state) => state.openDrawer);

  useEffect(() => {
    setFilter({
      month: { _eq: date },
    });
  }, [date]);

  return (
    <>
      <DashBoard dashItems={dashItems}>
        <div className="tw-flex tw-flex-col tw-space-y-4 tw-p-5">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className="tw-flex">
              <DateWIcons
                format="YYYY-MM"
                date={date}
                setDate={setDate}
                mode="month"
              />
              <Input
                style={{ marginLeft: 20 }}
                placeholder="请输入人员姓名"
                onChange={useDebounce((e) => {
                  const value = e.target.value;
                  setFilter(
                    value && value !== ''
                      ? {
                          month: { _eq: date },
                          employee: {
                            name: {
                              _like: `%${value}%`,
                            },
                          },
                        }
                      : { month: { _eq: date } }
                  );
                }, 500)}
              />
              <Input
                style={{ marginLeft: 20 }}
                placeholder="请输入人员职位"
                onChange={useDebounce((e) => {
                  const value = e.target.value;
                  setFilter(
                    value && value !== ''
                      ? {
                          month: { _eq: date },
                          employee: {
                            job_title: {
                              _like: `%${value}%`,
                            },
                          },
                        }
                      : { month: { _eq: date } }
                  );
                }, 500)}
              />
            </div>
            <Button
              icon={<FilterOutlined />}
              onClick={() => openDrawer('hrMonthlySalaryfilterDrawer')}
            />
          </div>
          <ViewMonthlySalaryTable
            filter={filter}
            columns={hrColumns(date.format('YYYY-MM'))}
          />
        </div>
        <HrMonthlySalaryfilterDrawer
          setFilter={setFilter}
          open={useDrawerStore(
            (state) => state.drawers.hrMonthlySalaryfilterDrawer.isOpen
          )}
        />
      </DashBoard>
    </>
  );
};

export default MonthlySalaryPage;
