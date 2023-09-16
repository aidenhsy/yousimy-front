import React, { useState } from "react";
//external library
import { Dropdown, Empty, Input, Modal, Popconfirm, message } from "antd";
import { GetServerSidePropsContext } from "next";

// components
import { DashBoard } from "@/components/Layout/Dashboard";
import { DashItems } from "@/components/Layout/Dashboard/types";
import FilterRadio from "@/components/Radio/FilterRadio";
import { withDashItems } from "../../../../hoc/withDashItems";
import { ExclamationCircleFilled, UserOutlined } from "@ant-design/icons";

import { useEmployeesStats, useUpdateEmployee } from "@/hooks/employees.hooks";
import { Employees_Bool_Exp } from "@/graphql/__generated__/graphql";
import resignColumns from "@/components/Table/EmployeeTable/columns/resignColumns";
import EmployeeTable from "@/components/Table/EmployeeTable";
import ResignModal from "@/components/Modal/ResignModal";
import { useModalStore } from "@/store/modalStore";
import { useDebounce } from "@/lib/hooks";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const { confirm } = Modal;

const ResignPage = ({ dashItems }: { dashItems: DashItems }) => {
  const openModal = useModalStore((state) => state.openModal);
  // state
  const [countType, setCountType] = useState("4");
  const [filter, setFilter] = useState<Employees_Bool_Exp>({
    status: { _eq: 4 },
  });

  //更新用户信息
  const { updateEmployee, updateEmployee_error } = useUpdateEmployee();

  const { employeesStatusData } = useEmployeesStats();

  const handleConfirmSubmit = async (id: string, status: number) => {
    await updateEmployee(id, {
      status,
    });
    if (!updateEmployee_error) {
      message.success(status === 1 ? "恢复成功" : "撤销成功");
      setFilter({
        status: {
          _eq: Number(countType),
        },
      });
    }
  };
  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-p-5  tw-space-y-3 xs:tw-hidden xxs:tw-hidden">
        {/* 选择按钮 */}
        <FilterRadio
          options={[
            {
              label: "待离职",
              value: "4",
            },
            {
              label: "已离职",
              value: "5",
            },
          ]}
          value={countType}
          onChange={(val: string) => {
            setCountType(val);
            setFilter({ status: { _eq: Number(val) } });
          }}
        />
        {/* 数据栏子 */}
        {countType === "4" && (
          <div className="tw-flex tw-space-x-[12px] tw-mb-5 tw-w-full tw-mt-4">
            全部待离职人数:{" "}
            {employeesStatusData?.awaitUnemployCount?.aggregate?.count}
          </div>
        )}
        <div>
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
                          status: {
                            _eq: countType,
                          },
                        },
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
                        },
                      ],
                    }
                  : { status: { _eq: countType } }
              );
            }, 500)}
          />
        </div>
        {/* 表格 */}
        <EmployeeTable
          scroll={{ x: 1300 }}
          columns={resignColumns({
            title: "操作",
            width: countType === "4" ? 120 : 80,
            dataIndex: "op",
            key: "op",
            fixed: "right",
            render: (_val: any, record: any) => {
              return (
                <Dropdown.Button
                  size="small"
                  placement="bottomRight"
                  type="link"
                  menu={{
                    items:
                      countType === "4"
                        ? [
                            {
                              label: "调整离职日期",
                              key: 1,
                            },
                            {
                              label: "撤销离职",
                              key: 2,
                            },
                          ]
                        : [
                            {
                              label: "调整离职日期",
                              key: 1,
                            },
                            {
                              label: "重新入职",
                              key: 3,
                            },
                          ],
                    onClick: async (e) => {
                      if (e.key === "1") {
                        openModal("resignModal", { currentEmployee: record });
                      } else if (e.key === "2") {
                        confirm({
                          title: `撤销后，${record.name}将恢复为正常在职状态。确定撤销吗？`,
                          icon: <ExclamationCircleFilled />,
                          onOk: async () => handleConfirmSubmit(record.id, 2),
                        });
                      } else if (e.key === "3") {
                        confirm({
                          title: `${record.name}将恢复为待入职状态。确定执行吗？`,
                          icon: <ExclamationCircleFilled />,
                          onOk: async () => handleConfirmSubmit(record.id, 1),
                        });
                      }
                    },
                  }}
                  onClick={(e) => {
                    if (countType === "5") {
                      openModal("resignModal", { currentEmployee: record });
                    }
                  }}
                >
                  <Popconfirm
                    title="确认离职"
                    description={`确认将${record.name}变成离职状态吗？`}
                    onConfirm={async () => {
                      await updateEmployee(record.id, {
                        status: 5,
                      });
                      if (!updateEmployee_error) {
                        message.success("确认离职成功");
                        setFilter({
                          status: {
                            _eq: Number(countType),
                          },
                        });
                      }
                    }}
                    okText="确认"
                    cancelText="取消"
                  >
                    {countType === "4" && "确认离职"}
                  </Popconfirm>
                </Dropdown.Button>
              );
            },
          })}
          filter={filter}
        />

        <ResignModal
          open={useModalStore((state) => state.modals.resignModal.isOpen)}
          refetch={() => setFilter({ status: { _eq: 4 } })}
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

export default ResignPage;
