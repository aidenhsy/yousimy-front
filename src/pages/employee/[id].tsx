/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router";
import { useEmployeesByPk } from "@/hooks/employees.hooks";
import { Avatar, Button, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SimpleHeader from "@/components/Header/SimpleNav";
import EmployeeProfileTabs from "@/components/Tabs/EmployeeProfileTabs";
import { Employees } from "@/graphql/__generated__/graphql";
import ReboardModal from "@/components/Modal/ReboardModal";
import { useModalStore } from "@/store/modalStore";
import { withDashItems } from "@/hoc/withDashItems";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { DashItems } from "@/components/Layout/Dashboard/types";
import { feishuOptions } from "@/lib/tools/feishuOptions";

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

const EmployeeDetails = ({
  dashItems,
  selectOption,
}: {
  dashItems: DashItems;
  selectOption: any;
}) => {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return null;

  const { employeesByPkData }: any = useEmployeesByPk(id as string);
  const openModal = useModalStore((state) => state.openModal);

  const feishuOption = feishuOptions(selectOption);
  return (
    <>
      <SimpleHeader />
      {employeesByPkData && (
        <div className="tw-py-5 tw-px-10">
          <div className="tw-flex tw-justify-between">
            <div className="tw-flex tw-space-x-4">
              {employeesByPkData.avatar ? (
                <Avatar src={employeesByPkData.avatar} size={120} />
              ) : (
                <Avatar icon={<UserOutlined />} size={120} />
              )}
              <div className="tw-flex tw-flex-col tw-justify-end tw-space-y-3">
                <span className="tw-text-4xl">{employeesByPkData.name}</span>
                <span className="tw-text-lg tw-text-gray-400">
                  {employeesByPkData.department?.name}
                </span>
              </div>
            </div>
            <div className="tw-flex tw-items-end tw-mr-16">
              {employeesByPkData.status === 2 && (
                <Button type="primary" danger>
                  办理离职
                </Button>
              )}
              {employeesByPkData.status === 5 && (
                <Button
                  onClick={() => {
                    openModal("reboardModal", {
                      currentEmployee: employeesByPkData,
                    });
                  }}
                  type="primary"
                >
                  重新办理入职
                </Button>
              )}
            </div>
          </div>
          <Divider />
          <EmployeeProfileTabs
            employeesByPkData={employeesByPkData as Employees}
          />
        </div>
      )}
      <ReboardModal
        open={useModalStore((state) => state.modals.reboardModal.isOpen)}
        userId={dashItems?.userInfo?.id}
        feishuOption={feishuOption}
      />
    </>
  );
};

export default EmployeeDetails;
