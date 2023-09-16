import { Button, Skeleton, Spin } from "antd";
import React, { useState } from "react";
import { dictionary } from "@/lib/dictionaries/hrDictionary";
import { useHrDictionary } from "@/lib/hooks";
import { translateObject } from "@/lib/tools/translateObject";
import dayjs from "dayjs";
import { useEmployeesByPk } from "@/hooks/employees.hooks";
import ManagerPopover from "@/components/Popover/managerPopover";
import { Employees } from "@/graphql/__generated__/graphql";
import { useModalStore } from "@/store/modalStore";
import EmployeeInfoModal from "@/components/Modal/EmployeeInfoModal";

interface veFormAryType {
  key: string;
  title: string;
  dataSource: { [key: string]: any };
}

const VisualEditingForm: React.FC<{
  employeeInfo: Employees;
  refetch: (value: any) => void;
  veFormAry: veFormAryType[];
}> = ({ employeeInfo, refetch, veFormAry }) => {
  // 直属上级信息
  const { employeesByPkData, employeesByPkLoading, employeesByPkRefetch } =
    useEmployeesByPk(employeeInfo?.manager_id as any);

  const openModal = useModalStore((state) => state.openModal);
  //字典翻译
  const { hrDictionary } = useHrDictionary();
  const dict = { ...hrDictionary, ...dictionary };

  const handleEdit = ({
    title,
    key,
    dataSource,
  }: {
    title: string;
    key: string;
    dataSource: any;
  }) => {
    const mobile = dataSource?.mobile?.split(" ");
    openModal("employeeInfoModal", {
      employeeInfo: {
        modalTitle: title,
        modalKey: key,
        id: employeeInfo?.id,
        formValue: {
          ...dataSource,
          mobile: mobile?.length > 1 ? mobile[1] : mobile && mobile[0],
          hire_date: dataSource?.hire_date
            ? dayjs(dataSource?.hire_date)
            : undefined,
          birthday: dataSource?.birthday
            ? dayjs(dataSource?.birthday)
            : undefined,
        },
      },
    });
  };

  return (
    <Spin spinning={employeesByPkLoading}>
      {veFormAry.map((item: any, index: number) => {
        const { title, dataSource } = item;
        return (
          <div
            key={index}
            className="tw-w-full tw-pr-6 tw-pb-3 tw-overflow-auto tw-rounded-md"
          >
            <>
              <div className="tw-flex tw-items-center tw-h-10 tw-justify-between tw-py-2 tw-mb-2">
                <div className="tw-relative tw-text-black tw-text-sm tw-font-medium tw-leading-[22px]">
                  {title}
                </div>
                <Button
                  className=" tw-text-sm tw-leading-[22px] tw-py-[2px] tw-px-1 hover:border-transparent hover:tw-bg-blue-200/40"
                  type="link"
                  onClick={() => handleEdit(item)}
                >
                  编辑
                </Button>
              </div>
              <div className="tw-items-center tw-flex tw-flex-wrap tw-justify-between tw-border-solid tw-border-0 tw-border-b tw-border-gray-400/20">
                {Object.entries(translateObject(dataSource, dict)).map(
                  ([key, value]: any) => {
                    return (
                      <Skeleton
                        // loading部门字典翻译慢问题
                        loading={!/[\u4e00-\u9fa5]+/.test(key)}
                        key={key}
                        paragraph={{
                          rows: 0,
                        }}
                      >
                        <div style={{ width: "calc(50% - 12px)" }}>
                          <div className="tw-flex tw-w-full tw-flex-nowrap tw-pb-[18px] ">
                            <div className="tw-inline-flex tw-leading-6 tw-w-[33%] tw-align-baseline tw-grow-0 tw-min-w-0 tw-pr-3">
                              <span className="tw-inline-block tw-text-gray-400 tw-overflow-hidden tw-text-ellipsis tw-max-w-full tw-align-bottom tw-whitespace-nowrap">
                                {key}
                              </span>
                            </div>
                            {key === "直属上级" && employeesByPkData ? (
                              <ManagerPopover
                                value={value}
                                employeeInfo={employeeInfo}
                                managerInfo={employeesByPkData}
                                refetch={employeesByPkRefetch}
                              />
                            ) : (
                              <div className="tw-w-[77%] tw-break-all tw-leading-[22px] tw-font-normal tw-mr-2 tw-grow-0">
                                <span
                                  className={
                                    value ? "tw-text-black" : "tw-text-gray-300"
                                  }
                                >
                                  {value ? value : "--"}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </Skeleton>
                    );
                  }
                )}
              </div>
            </>
          </div>
        );
      })}
      {/* 编辑框 */}
      <EmployeeInfoModal
        open={useModalStore((state) => state.modals.employeeInfoModal.isOpen)}
        refetch={refetch}
      />
    </Spin>
  );
};

export default VisualEditingForm;
