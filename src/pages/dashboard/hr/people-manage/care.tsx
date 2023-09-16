import { useState } from "react";
//types
import { GetServerSidePropsContext } from "next";
import { DashItems } from "@/components/Layout/Dashboard/types";
import { Employees_Bool_Exp } from "@/graphql/__generated__/graphql";

//components
import { DashBoard } from "@/components/Layout/Dashboard";
import FilterRadio from "@/components/Radio/FilterRadio";
//external library
import { Empty, Input } from "antd";

//own libraries
import { withDashItems } from "@/hoc/withDashItems";
import React from "react";
import { useEmployeesStats } from "@/hooks/employees.hooks";
import StatCard from "@/components/Card/StatCard";
import { useDebounce } from "@/lib/hooks";
import EmployeeTable from "@/components/Table/EmployeeTable";
import careColumns from "@/components/Table/EmployeeTable/columns/careColumns";
import dayjs from "dayjs";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const Care = ({ dashItems }: { dashItems: DashItems }) => {
  //state
  const [countType, setCountType] = useState("1");
  const [filter, setFilter] = useState<Employees_Bool_Exp>({
    status: { _eq: 2 },
  });

  const { employeesStatusData, employeesStatusLoading } = useEmployeesStats();

  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-p-5 tw-space-y-3 xs:tw-hidden xxs:tw-hidden">
        {/* 单选按钮 */}
        <FilterRadio
          options={[
            {
              label: "生日",
              value: "1",
            },
            {
              label: "入职周年",
              value: "2",
            },
          ]}
          value={countType}
          onChange={(val: string) => {
            setCountType(val);
            setFilter({
              status: {
                _eq: 2,
              },
            });
          }}
        />

        {/* 数据栏子 */}
        <div className="tw-flex tw-justify-between tw-w-full">
          {/* 今天 */}
          <StatCard
            onClick={() => {
              setFilter({
                _and: [
                  countType === "1"
                    ? {
                        birthday_mm_dd: {
                          _gte: dayjs().format("MM-DD"),
                          _lte: dayjs().format("MM-DD"),
                        },
                      }
                    : {
                        hire_date_mm_dd: {
                          _gte: dayjs().format("MM-DD"),
                          _lte: dayjs().format("MM-DD"),
                        },
                      },
                  {
                    status: { _eq: 2 },
                  },
                ],
              });
            }}
            title="今天"
            loading={employeesStatusLoading}
            value={
              countType === "1"
                ? employeesStatusData?.todayBirthdayCount.aggregate?.count
                : employeesStatusData?.todayHireDateCount.aggregate?.count
            }
          />
          {/* 本周 */}
          <StatCard
            title="本周"
            onClick={() => {
              setFilter({
                _and: [
                  countType === "1"
                    ? {
                        birthday_mm_dd: {
                          _gte: dayjs()
                            .startOf("week")
                            .add(1, "day")
                            .format("MM-DD"),
                          _lte: dayjs()
                            .endOf("week")
                            .add(1, "day")
                            .format("MM-DD"),
                        },
                      }
                    : {
                        hire_date_mm_dd: {
                          _gte: dayjs()
                            .startOf("week")
                            .add(1, "day")
                            .format("MM-DD"),
                          _lte: dayjs()
                            .endOf("week")
                            .add(1, "day")
                            .format("MM-DD"),
                        },
                      },
                  {
                    status: { _eq: 2 },
                  },
                ],
              });
            }}
            loading={employeesStatusLoading}
            value={
              countType === "1"
                ? employeesStatusData?.thisWeekBirthdayCount.aggregate?.count
                : employeesStatusData?.thisWeekHireDateCount.aggregate?.count
            }
          />
          {/* 本月 */}
          <StatCard
            title="本月"
            onClick={() => {
              setFilter({
                _and: [
                  countType === "1"
                    ? {
                        birthday_mm_dd: {
                          _gte: dayjs().startOf("month").format("MM-DD"),
                          _lte: dayjs().endOf("month").format("MM-DD"),
                        },
                      }
                    : {
                        hire_date_mm_dd: {
                          _gte: dayjs().startOf("month").format("MM-DD"),
                          _lte: dayjs().endOf("month").format("MM-DD"),
                        },
                      },
                  {
                    status: { _eq: 2 },
                  },
                ],
              });
            }}
            loading={employeesStatusLoading}
            value={
              countType === "1"
                ? employeesStatusData?.thisMonthBirthdayCount.aggregate?.count
                : employeesStatusData?.thisMonthHireDateCount.aggregate?.count
            }
          />
          {/* 上月 */}
          <StatCard
            title="上月"
            onClick={() => {
              setFilter({
                _and: [
                  countType === "1"
                    ? {
                        birthday_mm_dd: {
                          _gte: dayjs()
                            .add(-1, "month")
                            .startOf("month")
                            .format("MM-DD"),
                          _lte: dayjs()
                            .add(-1, "month")
                            .endOf("month")
                            .format("MM-DD"),
                        },
                      }
                    : {
                        hire_date_mm_dd: {
                          _gte: dayjs()
                            .add(-1, "month")
                            .startOf("month")
                            .format("MM-DD"),
                          _lte: dayjs()
                            .add(-1, "month")
                            .endOf("month")
                            .format("MM-DD"),
                        },
                      },
                  {
                    status: { _eq: 2 },
                  },
                ],
              });
            }}
            loading={employeesStatusLoading}
            value={
              countType === "1"
                ? employeesStatusData?.lastMonthBirthdayCount.aggregate?.count
                : employeesStatusData?.lastMonthHireDateCount.aggregate?.count
            }
          />
          {/* 下月 */}
          <StatCard
            title="下月"
            onClick={() => {
              setFilter({
                _and: [
                  countType === "1"
                    ? {
                        birthday_mm_dd: {
                          _gte: dayjs()
                            .add(1, "month")
                            .startOf("month")
                            .format("MM-DD"),
                          _lte: dayjs()
                            .add(1, "month")
                            .endOf("month")
                            .format("MM-DD"),
                        },
                      }
                    : {
                        hire_date_mm_dd: {
                          _gte: dayjs()
                            .add(1, "month")
                            .startOf("month")
                            .format("MM-DD"),
                          _lte: dayjs()
                            .add(1, "month")
                            .endOf("month")
                            .format("MM-DD"),
                        },
                      },
                  {
                    status: { _eq: 2 },
                  },
                ],
              });
            }}
            loading={employeesStatusLoading}
            value={
              countType === "1"
                ? employeesStatusData?.nextMonthBirthdayCount.aggregate?.count
                : employeesStatusData?.nextMonthHireDateCount.aggregate?.count
            }
          />
        </div>
        <Input
          style={{ width: 308, height: 30 }}
          placeholder="通过姓名，手机号码搜索人员"
          onChange={useDebounce((e) => {
            const value = e.target.value;
            setFilter(
              value && value !== ""
                ? {
                    _or: [
                      {
                        name: {
                          _ilike: `%${value}%`,
                        },
                      },
                      {
                        mobile: {
                          _ilike: `%${value}%`,
                        },
                      },
                    ],
                  }
                : { status: { _eq: 2 } }
            );
          }, 500)}
        />
        {/* 表格 */}
        <EmployeeTable
          scroll={{ x: 1300 }}
          columns={careColumns()}
          filter={filter}
        />
      </div>
      <Empty
        className="sm:tw-hidden"
        imageStyle={{ height: 30 }}
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={<span className="tw-text-gray-400">请移动至PC端访问</span>}
      />
    </DashBoard>
  );
};

export default Care;
