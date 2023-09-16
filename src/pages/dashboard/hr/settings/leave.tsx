import { DashBoard } from "@/components/Layout/Dashboard";
import { DashItems } from "@/components/Layout/Dashboard/types";
import { withDashItems } from "../../../../hoc/withDashItems";
import { GetServerSidePropsContext } from "next";
import { Button, Collapse, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  useCreateLeaveTypes,
  useGetLeaveTypes,
} from "@/hooks/leave_types.hooks";
import SalaryTypeLeavesTable from "@/components/Table/SalaryTypeLeavesTable";
import InsertLeaveTypes from "@/components/Modal/InsertLeaveTypes";
import { useModalStore } from "@/store/modalStore";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const Leave = ({ dashItems }: { dashItems: DashItems }) => {
  const openModal = useModalStore((state) => state.openModal);
  const { leaveTypesData, leaveTypesRefetch } = useGetLeaveTypes();
  console.log(leaveTypesData?.leave_types);
  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-flex tw-flex-col tw-space-y-4 tw-p-5">
        <div className="tw-flex tw-justify-end">
          <Button
            type="primary"
            onClick={() => openModal("insertLeaveTypes")}
            icon={<PlusOutlined />}
          >
            添加假期类型
          </Button>
        </div>
        <Collapse>
          {leaveTypesData?.leave_types.map((item) => (
            <Collapse.Panel header={item.name} key={item.id}>
              <SalaryTypeLeavesTable
                filter={{ leave_type_id: { _eq: item.id } }}
              />
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
      <InsertLeaveTypes
        open={useModalStore((state) => state.modals.insertLeaveTypes.isOpen)}
        refetch={leaveTypesRefetch}
      />
    </DashBoard>
  );
};

export default Leave;
