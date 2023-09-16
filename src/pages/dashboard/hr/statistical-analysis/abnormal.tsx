import { DashBoard } from "@/components/Layout/Dashboard";
import { DashItems } from "@/components/Layout/Dashboard/types";
import { withDashItems } from "../../../../hoc/withDashItems";
import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import AbnormalEmployeeTable from "@/components/Table/AbnormalEmployeeTable";
import { useDrawerStore } from "@/store/drawerStore";
import storeAbnormalColumns from "@/components/Table/AbnormalEmployeeTable/columns/storeAbnormalColumns";
import { Input } from "antd";
import { useDebounce } from "@/lib/hooks";
import EmployeeInfoDrawer from "@/components/Drawer/EmployeeInfoDrawer";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const AbnormalPage = ({ dashItems }: { dashItems: DashItems }) => {
  const [filter, setFilter] = useState<any>({});
  const openDrawer = useDrawerStore((state) => state.openDrawer);
  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-flex tw-flex-col tw-space-y-4 tw-p-5">
        <div className="tw-flex tw-justify-between">
          <div className="tw-flex">
            <Input
              style={{ minWidth: 308, height: 30 }}
              placeholder="通过姓名搜索人员"
              onChange={useDebounce((e) => {
                const value = e.target.value;
                setFilter(
                  value && value !== ""
                    ? {
                        name: value,
                      }
                    : {}
                );
              }, 500)}
            />
          </div>
        </div>
        <AbnormalEmployeeTable
          columns={storeAbnormalColumns()}
          scroll={{ y: 600 }}
          onRow={(record: any) => {
            return {
              onClick: () => {
                openDrawer("employeeInfoDrawer", { currentEmployee: record });
              },
            };
          }}
          filter={filter}
        />
      </div>
      <EmployeeInfoDrawer
        open={useDrawerStore(
          (state) => state.drawers.employeeInfoDrawer.isOpen
        )}
      />
    </DashBoard>
  );
};

export default AbnormalPage;
