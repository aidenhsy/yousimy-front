import React, { useState } from "react";
import { Empty } from "antd";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import dayjs from "dayjs";
// components
import { DashBoard } from "@/components/Layout/Dashboard";
import { DashItems } from "@/components/Layout/Dashboard/types";

import { withDashItems } from "@/hoc/withDashItems";
import { useEmployeesStats } from "@/hooks/employees.hooks";
import StatCard from "@/components/Card/StatCard";
import { Employees_Bool_Exp } from "@/graphql/__generated__/graphql";
import EmployeeTable from "@/components/Table/EmployeeTable";
import conVersionColumns from "@/components/Table/EmployeeTable/columns/conversionColumns";
import ConVersionModal from "@/components/Modal/ConVersionModal";
import { useModalStore } from "@/store/modalStore";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const Conversion = ({ dashItems }: { dashItems: DashItems }) => {
  const [filter, setFilter] = useState<Employees_Bool_Exp>({
    application_status: {
      _eq: 2,
    },
  });

  //数据栏
  const { employeesStatusData, employeesStatusLoading } = useEmployeesStats();

  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-p-5 tw-space-y-3 xs:tw-hidden xxs:tw-hidden">
        {/* 数据栏 */}
        <div className="tw-flex tw-justify-between tw-w-full">
          <StatCard
            onClick={() => {
              setFilter({ application_status: { _eq: 2 } });
            }}
            title="全部待转正"
            loading={employeesStatusLoading}
            value={employeesStatusData?.awaitRegularizedCount.aggregate?.count}
          />
          <StatCard
            onClick={() => {
              setFilter({
                _and: [
                  {
                    application_status: { _eq: 2 },
                  },
                  {
                    actual_conversion_time: {
                      _lt: dayjs().format("YYYY-MM-DD"),
                    },
                  },
                ],
              });
            }}
            title="超期未转正"
            loading={employeesStatusLoading}
            value={
              employeesStatusData?.overdueRegularizedCount.aggregate?.count
            }
          />
          <StatCard
            onClick={() => {
              setFilter({
                _and: [
                  {
                    application_status: { _eq: 2 },
                  },
                  {
                    actual_conversion_time: {
                      _gte: dayjs().startOf("month").format("YYYY-MM-DD"),
                      _lte: dayjs().endOf("month").format("YYYY-MM-DD"),
                    },
                  },
                ],
              });
            }}
            title="本月待转正"
            loading={employeesStatusLoading}
            value={
              employeesStatusData?.thisMonthAwaitRegularizedCount.aggregate
                ?.count
            }
          />
          <StatCard
            onClick={() => {
              setFilter({
                _and: [
                  {
                    application_status: { _eq: 2 },
                  },
                  {
                    actual_conversion_time: {
                      _gte: dayjs()
                        .add(1, "month")
                        .startOf("month")
                        .format("YYYY-MM-DD"),
                      _lte: dayjs()
                        .add(1, "month")
                        .endOf("month")
                        .format("YYYY-MM-DD"),
                    },
                  },
                ],
              });
            }}
            title="下月待转正"
            loading={employeesStatusLoading}
            value={
              employeesStatusData?.nextMonthAwaitRegularizedCount.aggregate
                ?.count
            }
          />
        </div>

        <EmployeeTable
          scroll={{ x: 1300 }}
          columns={conVersionColumns()}
          filter={filter}
        />

        <ConVersionModal
          open={useModalStore((state) => state.modals.conversionModal.isOpen)}
          refetch={() =>
            setFilter({
              application_status: {
                _eq: 2,
              },
            })
          }
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

export default Conversion;
