/** @jsxImportSource @emotion/react */
import { DashBoard } from "@/components/Layout/Dashboard";
import { DashItems } from "@/components/Layout/Dashboard/types";
import { withDashItems } from "@/hoc/withDashItems";
import { Button, Input } from "antd";
import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import { Employees_Bool_Exp } from "@/graphql/__generated__/graphql";
import { useDebounce } from "@/lib/hooks";
import StatCard from "@/components/Card/StatCard";
import { useStoresEmployeesStats } from "@/hooks/store.hooks";
import { useModalStore } from "@/store/modalStore";
import OffBoardModal from "@/components/Modal/OffBoardModal";
import { useDrawerStore } from "@/store/drawerStore";
import EmployeeTable from "@/components/Table/EmployeeTable";
import RosterFilterDrawer from "@/components/Drawer/RosterFilterDrawer";
import { FilterOutlined } from "@ant-design/icons";
import simpleEmployeeColumns from "@/components/Table/EmployeeTable/columns/simpleEmployeeColumns";
import EmployeeInfoDrawer from "@/components/Drawer/EmployeeInfoDrawer";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const StoreRoster = ({ dashItems }: { dashItems: DashItems }) => {
  const openDrawer = useDrawerStore((state) => state.openDrawer);

  const [filter, setFilter] = useState<Employees_Bool_Exp>({
    status: { _eq: 2 },
  });

  const { storesEmployeesStatusData, storesEmployeesStatusLoading } =
    useStoresEmployeesStats();

  const handleGetStoresEmployeesStatusCount = (data: any) => {
    let count = 0;
    data?.forEach((item: any) => {
      item?.departments.forEach((dep: any) => {
        if (Boolean(dep?.child_departments.length)) {
          dep?.child_departments.forEach((child: any) => {
            count += child?.employees_aggregate?.aggregate?.count;
          });
        } else {
          count += dep?.employees_aggregate?.aggregate?.count;
        }
      });
    });
    return count;
  };

  return (
    //样式和人员花名册一样
    <DashBoard dashItems={dashItems}>
      <div className="tw-p-5 tw-flex tw-flex-col tw-space-y-3 xs:tw-hidden xxs:tw-hidden">
        {/* 数据栏子 */}
        <div className="tw-flex tw-justify-between tw-w-full">
          <StatCard
            onClick={() => {
              setFilter({ status: { _eq: 2 } });
            }}
            title="在职"
            loading={storesEmployeesStatusLoading}
            value={handleGetStoresEmployeesStatusCount(
              storesEmployeesStatusData?.isEmployedCount
            )}
          />
          <StatCard
            title="正式"
            onClick={() => {
              setFilter({ status: { _eq: 2 }, employee_type: { _eq: 1 } });
            }}
            loading={storesEmployeesStatusLoading}
            value={handleGetStoresEmployeesStatusCount(
              storesEmployeesStatusData?.regularEmployeeCount
            )}
          />
          <StatCard
            title="试用中"
            onClick={() => {
              setFilter({ status: { _eq: 2 }, employee_type: { _eq: 2 } });
            }}
            loading={storesEmployeesStatusLoading}
            value={handleGetStoresEmployeesStatusCount(
              storesEmployeesStatusData?.internEmployeeCount
            )}
          />
          <StatCard
            title="待入职"
            onClick={() => {
              setFilter({
                status: { _eq: 1 },
              });
            }}
            loading={storesEmployeesStatusLoading}
            value={handleGetStoresEmployeesStatusCount(
              storesEmployeesStatusData?.awaitOnboardingCount
            )}
          />
        </div>
        <div className="tw-flex tw-justify-between">
          <div className="tw-flex tw-items-center tw-space-x-5">
            <Input
              style={{ minWidth: 308, height: 30 }}
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
            <Button
              onClick={() => openDrawer("filterRosterDrawer")}
              icon={<FilterOutlined />}
            />
          </div>
        </div>
        <EmployeeTable
          filter={filter}
          columns={simpleEmployeeColumns()}
          onRow={(record: any) => {
            return {
              onClick: () => {
                if (record.status === 2) {
                  openDrawer("employeeInfoDrawer", { currentEmployee: record });
                }
              },
            };
          }}
        />
        <OffBoardModal
          open={useModalStore((state) => state.modals.offBoardModal.isOpen)}
          openId={dashItems.userInfo.id}
          refetch={() => setFilter({ status: { _eq: 2 } })}
        />

        <RosterFilterDrawer
          setFilter={setFilter}
          open={useDrawerStore(
            (state) => state.drawers.filterRosterDrawer.isOpen
          )}
        />

        <EmployeeInfoDrawer
          open={useDrawerStore(
            (state) => state.drawers.employeeInfoDrawer.isOpen
          )}
        />
      </div>
    </DashBoard>
  );
};

export default StoreRoster;
