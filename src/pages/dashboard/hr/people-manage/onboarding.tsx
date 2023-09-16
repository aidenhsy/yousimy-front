import React, { useState } from "react";
//external library
import { Empty, Input, Dropdown, Modal, Popconfirm, message } from "antd";
import { GetServerSidePropsContext } from "next";
import axios from "axios";

// components
import { DashBoard } from "@/components/Layout/Dashboard";
import { DashItems } from "@/components/Layout/Dashboard/types";
import { withDashItems } from "../../../../hoc/withDashItems";

import { useDeleteEmployee, useEmployeesStats } from "@/hooks/employees.hooks";
import EmployeeTable from "@/components/Table/EmployeeTable";
import onboardingColumns from "@/components/Table/EmployeeTable/columns/onboardingColumns";
import { Employees_Bool_Exp } from "@/graphql/__generated__/graphql";
import { useDebounce } from "@/lib/hooks";
import { ExclamationCircleFilled } from "@ant-design/icons";
import StatCard from "@/components/Card/StatCard";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {
    const departmentTree = await axios.get(
      `${process.env.NEXT_PUBLIC_BACK_SERVER}/departments`
    );
    return {
      props: { departmentTree: [departmentTree.data] },
    };
  }
);
const { confirm } = Modal;
const Onboarding = ({ dashItems }: { dashItems: DashItems }) => {
  // state
  const [filter, setFilter] = useState<Employees_Bool_Exp>({
    status: { _in: [6, 7, 9] },
  });
  const { deleteEmployee, deleteEmployee_error } = useDeleteEmployee();
  const { employeesStatusData, employeesStatusLoading } = useEmployeesStats();

  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-p-5  tw-space-y-3 xs:tw-hidden xxs:tw-hidden">
        <div className="tw-flex tw-justify-between tw-w-full">
          <StatCard
            onClick={() => {
              setFilter({ status: { _eq: 6 } });
            }}
            title="信息未填写"
            loading={employeesStatusLoading}
            value={employeesStatusData?.informationNotFilled?.aggregate?.count}
          />
          <StatCard
            title="飞书审核中"
            onClick={() => {
              setFilter({ status: { _eq: 7 } });
            }}
            loading={employeesStatusLoading}
            value={employeesStatusData?.feishuIsReviewing.aggregate?.count}
          />
          <StatCard
            title="飞书审核拒绝"
            onClick={() => {
              setFilter({ status: { _eq: 9 } });
            }}
            loading={employeesStatusLoading}
            value={employeesStatusData?.feishuReviewRejected.aggregate?.count}
          />
        </div>
        <div className="tw-flex">
          <Input
            style={{ width: 308, height: 30 }}
            placeholder="通过姓名，手机号码搜索人员"
            onChange={useDebounce((e) => {
              const value = e.target.value;
              setFilter(
                value && value !== ""
                  ? {
                      _and: [
                        {
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
                          status: { _in: [6, 7, 9] },
                        },
                      ],
                    }
                  : { status: { _in: [6, 7, 9] } }
              );
            }, 500)}
          />
        </div>

        {/* 表格 */}
        <EmployeeTable
          scroll={{ x: 1300 }}
          columns={onboardingColumns({
            title: "操作",
            width: 80,
            dataIndex: "op",
            key: "op",
            fixed: "right",
            render: (_val: any, record: any) => {
              return (
                <Dropdown.Button
                  size="small"
                  type="link"
                  placement="bottomRight"
                  menu={{
                    items: [
                      {
                        label: "删除",
                        key: 2,
                      },
                    ],
                    onClick: async (e) => {
                      if (e.key === "2") {
                        confirm({
                          title: `将要删除${record.name}。确定执行吗？`,
                          icon: <ExclamationCircleFilled />,
                          onOk: async () => {
                            await deleteEmployee(record.id);
                            if (!deleteEmployee_error) {
                              message.success("删除成功");
                              setFilter({
                                status: {
                                  _in: [6, 7, 9],
                                },
                              });
                            }
                          },
                        });
                      }
                    },
                  }}
                ></Dropdown.Button>
              );
            },
          })}
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

export default Onboarding;
