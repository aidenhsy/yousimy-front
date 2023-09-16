import { DashBoard } from '@/components/Layout/Dashboard';
import { DashItems } from '@/components/Layout/Dashboard/types';
import { withDashItems } from '../../../../hoc/withDashItems';
import { GetServerSidePropsContext } from 'next';
import DateWIcons from '@/components/Date/DateWIcons';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import EmployeeInsuranceTable from '@/components/Table/MonthlySalaryTable/employeeInsurance';
import InsuranceColumns from '@/components/Table/MonthlySalaryTable/columns/insuranceColumns';
import { Input } from 'antd';
import { useDebounce } from '@/lib/hooks';
import { Employee_Insurance_Bool_Exp } from '@/graphql/__generated__/graphql';

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const Insurance = ({ dashItems }: { dashItems: DashItems }) => {
  const [date, setDate] = useState<Dayjs>(dayjs().add(-1, 'month'));
  const [filter, setFilter] = useState<Employee_Insurance_Bool_Exp>({
    yyyy_mm: {
      _eq: dayjs(date).format('YYYY-MM'),
    },
  });
  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-flex tw-flex-col tw-space-y-4 tw-p-5">
        <div className="tw-flex tw-items-center">
          <DateWIcons
            format="YYYY-MM"
            date={date}
            setDate={setDate}
            mode="month"
          />
          <Input
            style={{ width: 308, height: 30, marginLeft: 20 }}
            placeholder="通过姓名搜索人员"
            onChange={useDebounce((e) => {
              const value = e.target.value;
              setFilter(
                value && value !== ''
                  ? {
                      _and: [
                        {
                          yyyy_mm: {
                            _eq: dayjs(date).format('YYYY-MM'),
                          },
                        },
                        {
                          employee: {
                            name: {
                              _like: `%${value}%`,
                            },
                          },
                        },
                      ],
                    }
                  : {
                      yyyy_mm: {
                        _eq: dayjs(date).format('YYYY-MM'),
                      },
                    }
              );
            }, 500)}
          />
        </div>
        <EmployeeInsuranceTable filter={filter} columns={InsuranceColumns()} />
      </div>
    </DashBoard>
  );
};

export default Insurance;
