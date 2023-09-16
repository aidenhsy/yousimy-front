import { DashBoard } from "@/components/Layout/Dashboard";
import { DashItems } from "@/components/Layout/Dashboard/types";
import { withDashItems } from "../../../../hoc/withDashItems";
import { GetServerSidePropsContext } from "next";
import AbnormalEmployeeTable from "@/components/Table/AbnormalEmployeeTable";
import storeAbnormalColumns from "@/components/Table/AbnormalEmployeeTable/columns/storeAbnormalColumns";
import { useDrawerStore } from "@/store/drawerStore";
import { Button } from "antd";
import ChooseShiftModal from "@/components/Modal/ChooseShiftModal";
import { useModalStore } from "@/store/modalStore";
import EmployeeInfoDrawer from "@/components/Drawer/EmployeeInfoDrawer";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const AbnormalEmployee = ({ dashItems }: { dashItems: DashItems }) => {
  const openDrawer = useDrawerStore((state) => state.openDrawer);
  const openModal = useModalStore((state) => state.openModal);
  return (
    <>
      <DashBoard dashItems={dashItems}>
        <div className="tw-flex tw-flex-col tw-space-y-4 tw-p-5">
          <Button onClick={() => openModal("chooseShiftModal")}>
            选择班次
          </Button>
          <AbnormalEmployeeTable
            columns={storeAbnormalColumns()}
            scroll={{ y: 500 }}
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
      <EmployeeInfoDrawer
        open={useDrawerStore(
          (state) => state.drawers.employeeInfoDrawer.isOpen
        )}
      />

      <ChooseShiftModal
        open={useModalStore((state) => state.modals.chooseShiftModal.isOpen)}
      />
    </>
  );
};

export default AbnormalEmployee;
