import React, { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { DashItems } from "@/components/Layout/Dashboard/types";
import { DashBoard } from "@/components/Layout/Dashboard";
import { Button, Empty, Input } from "antd";
import { FilterOutlined, PlusOutlined } from "@ant-design/icons";
import { withDashItems } from "@/hoc/withDashItems";
import { useEmployeesStats } from "@/hooks/employees.hooks";
import { Employees_Bool_Exp } from "@/graphql/__generated__/graphql";
import { useDrawerStore } from "@/store/drawerStore";
import { useModalStore } from "@/store/modalStore";
import EmployeeTable from "@/components/Table/EmployeeTable";
import rosterColumns from "@/components/Table/EmployeeTable/columns/rosterColumns";
import RosterFilterDrawer from "@/components/Drawer/RosterFilterDrawer";
import AddEmployeeModal from "@/components/Modal/AddEmployeeModal";
import OffBoardModal from "@/components/Modal/OffBoardModal";
import StatCard from "@/components/Card/StatCard";
import { useDebounce } from "@/lib/hooks";
import axios from "axios";
import { feishuOptions } from "@/lib/tools/feishuOptions";
import EmployeeInfoDrawer from "@/components/Drawer/EmployeeInfoDrawer";

// SSR
export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {
    // 获取飞书审批定义下拉框数据
    const selectOption = await axios.get(
      `${process.env.NEXT_PUBLIC_BACK_SERVER}/v4/approvals`,
      {
        params: {
          definitionCode: "20122797-D0CA-4343-9132-440AF7164FE6",
        },
      }
    );
    return {
      props: { selectOption: selectOption.data.data },
    };
  }
);

const RosterPage = ({
  dashItems,
  selectOption,
}: {
  dashItems: DashItems;
  selectOption: any;
}) => {
  const [filter, setFilter] = useState<Employees_Bool_Exp>({
    status: { _eq: 2 },
  });
  const { employeesStatusData, employeesStatusLoading } = useEmployeesStats();

  const openDrawer = useDrawerStore((state) => state.openDrawer);

  const openModal = useModalStore((state) => state.openModal);

  const feishuOption = feishuOptions(selectOption);
  return (
    <>
      <DashBoard dashItems={dashItems}>
        <div className="tw-p-5 tw-flex tw-flex-col tw-space-y-3 xs:tw-hidden xxs:tw-hidden">
          {/* 数据栏子 */}
          <div className="tw-flex tw-justify-between tw-w-full">
            <StatCard
              onClick={() => {
                setFilter({ status: { _eq: 2 } });
              }}
              title="在职"
              loading={employeesStatusLoading}
              value={employeesStatusData?.isEmployedCount.aggregate?.count}
            />
            <StatCard
              title="正式"
              onClick={() => {
                setFilter({ status: { _eq: 2 }, employee_type: { _eq: 1 } });
              }}
              loading={employeesStatusLoading}
              value={employeesStatusData?.regularEmployeeCount.aggregate?.count}
            />
            <StatCard
              title="试用中"
              onClick={() => {
                setFilter({ status: { _eq: 2 }, employee_type: { _eq: 2 } });
              }}
              loading={employeesStatusLoading}
              value={employeesStatusData?.internEmployeeCount.aggregate?.count}
            />
            <StatCard
              title="待离职"
              onClick={() => {
                setFilter({ status: { _eq: 4 } });
              }}
              loading={employeesStatusLoading}
              value={employeesStatusData?.awaitUnemployCount.aggregate?.count}
            />
            <StatCard
              title="已离职"
              onClick={() => {
                setFilter({ status: { _eq: 5 } });
              }}
              loading={employeesStatusLoading}
              value={employeesStatusData?.notEmployedCount.aggregate?.count}
            />
          </div>
          <div className="tw-flex tw-justify-between">
            <div className="tw-flex">
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
                type="default"
                style={{ marginLeft: 5, height: 30 }}
                icon={<FilterOutlined style={{ fontSize: 14 }} />}
                onClick={() => openDrawer("filterRosterDrawer")}
              />
            </div>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => openModal("addEmployeeModal")}
            >
              添加人员
            </Button>
          </div>
          {/* 表格 */}
          <EmployeeTable
            scroll={{ x: 1300 }}
            columns={rosterColumns()}
            filter={filter}
            onRow={(record: any) => {
              return {
                onClick: () => {
                  openDrawer("employeeInfoDrawer", { currentEmployee: record });
                },
              };
            }}
          />
        </div>
      </DashBoard>

      {/* Drawers */}
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

      {/* Modals */}
      <AddEmployeeModal
        open={useModalStore((state) => state.modals.addEmployeeModal.isOpen)}
        userId={dashItems.userInfo.id}
        feishuOption={feishuOption}
      />
      <OffBoardModal
        openId={dashItems.userInfo.id}
        refetch={() => setFilter({ status: { _eq: 2 } })}
        open={useModalStore((state) => state.modals.offBoardModal.isOpen)}
      />

      {/* Others */}
      <Empty
        className="sm:tw-hidden"
        imageStyle={{ height: 30 }}
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={<span className="tw-text-gray-400">请移动至PC端访问</span>}
      />
    </>
  );
};

export default RosterPage;
