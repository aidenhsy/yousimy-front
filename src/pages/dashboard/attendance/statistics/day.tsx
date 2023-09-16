import { useEffect, useMemo, useState } from "react";
//external library
import { DatePicker, Select, Tag } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

//types
import { GetServerSidePropsContext } from "next";

// components
import { DashBoard } from "@/components/Layout/Dashboard";
import { DashItems } from "@/components/Layout/Dashboard/types";

//own libraries
import { withDashItems } from "../../../../hoc/withDashItems";
import dayjs from "dayjs";

import { Attendance_Bool_Exp } from "@/graphql/__generated__/graphql";
import StatisticsDayTable from "@/components/Table/AttendanceTable/statisticsDay";
import statisticsDayColumns from "@/components/Table/AttendanceTable/columns/statisticsDayColumns";
import { useModalStore } from "@/store/modalStore";
import StatisticsDayModal from "@/components/Modal/StatisticsDayModal";
import SelectAttendanceGroupsModal from "@/components/Modal/SelectAttendanceGroupsModal";
import AttendanceDepartmentModal from "@/components/Modal/attendanceDepartmentModal";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const DayPage = ({ dashItems }: { dashItems: DashItems }) => {
  const openModal = useModalStore((state) => state.openModal);

  // state
  const [date, setDate] = useState(dayjs(new Date()).format("YYYY-MM-DD"));
  const [selectRows, setSelectRows] = useState<any>([]);
  const [filter, setFilter] = useState<Attendance_Bool_Exp>({});

  const employees = useMemo(() => {
    const data: any = [];
    selectRows.forEach((dep: any) => {
      dep.departments.forEach((item: any) => {
        item.employees.forEach((employee: any) => {
          if (!data.includes(employee.id)) {
            data.push(employee.id);
          }
        });
      });
    });
    return data;
  }, [selectRows]);

  useMemo(() => {
    setFilter(
      Boolean(employees.length)
        ? {
            _and: [
              {
                date: {
                  _eq: date,
                },
              },
              {
                employee_id: {
                  _in: employees,
                },
              },
            ],
          }
        : {
            date: {
              _eq: date,
            },
          }
    );
  }, [selectRows]);

  const handleChange = (date: string) => {
    setDate(date);
    setFilter(
      Boolean(employees.length)
        ? {
            _and: [
              {
                date: {
                  _eq: date,
                },
              },
              {
                employee_id: {
                  _in: employees,
                },
              },
            ],
          }
        : {
            date: {
              _eq: date,
            },
          }
    );
  };

  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-p-5">
        <div className="tw-mb-4 tw-flex tw-items-center">
          {/* 日期切换 */}
          <div className="tw-border-solid tw-border tw-flex tw-justify-start tw-items-center tw-border-gray-300 tw-rounded">
            <div
              onClick={() =>
                handleChange(
                  dayjs(date).add(-1, "day").format("YYYY-MM-DD").toString()
                )
              }
              className="tw-h-full tw-flex tw-items-center tw-justify-center tw-w-8 hover:tw-cursor-pointer"
            >
              <LeftOutlined />
            </div>
            <div className="tw-h-4 tw-w-[1px] tw-bg-[#ededee]" />
            <DatePicker
              style={{
                border: "none",
              }}
              allowClear={false}
              inputReadOnly
              value={dayjs(date)}
              format={`YYYY-MM-DD (dddd)`}
              suffixIcon={null}
              onChange={(value) =>
                handleChange(dayjs(value).format("YYYY-MM-DD"))
              }
            />
            <div className="tw-h-4 tw-w-[1px] tw-bg-[#ededee]" />
            <div
              onClick={() =>
                handleChange(
                  dayjs(date).add(1, "day").format("YYYY-MM-DD").toString()
                )
              }
              className="tw-h-full tw-flex tw-items-center tw-justify-center tw-w-8 hover:tw-cursor-pointer"
            >
              <RightOutlined />
            </div>
          </div>
          {/* 搜索考勤组 */}
          <Select
            placeholder="请选择考勤组范围"
            style={{ minWidth: 200, marginLeft: 10 }}
            mode="multiple"
            allowClear
            open={false}
            showArrow={false}
            value={selectRows.map((item: any) => item.name)}
            onClick={() => openModal("selectAttendanceGroupsModal")}
            maxTagCount={1}
            tagRender={({ label }) => {
              return (
                <Tag
                  className=" tw-bg-gray-200/50 tw-py-[1px]"
                  closable={false}
                >
                  {label}
                </Tag>
              );
            }}
          />
        </div>
        {/* 表格数据 */}
        <StatisticsDayTable
          columns={statisticsDayColumns()}
          filter={filter}
          scroll={{ x: 1650 }}
        />

        <StatisticsDayModal
          open={useModalStore(
            (state) => state.modals.statisticsDayModal.isOpen
          )}
          refetch={() => {
            setFilter(
              Boolean(employees.length)
                ? {
                    _and: [
                      {
                        date: {
                          _eq: date,
                        },
                      },
                      {
                        employee_id: {
                          _in: employees,
                        },
                      },
                    ],
                  }
                : {
                    date: {
                      _eq: date,
                    },
                  }
            );
          }}
          date={date}
        />

        <SelectAttendanceGroupsModal
          open={useModalStore(
            (state) => state.modals.selectAttendanceGroupsModal.isOpen
          )}
          refetch={setSelectRows}
        />

        <AttendanceDepartmentModal
          open={useModalStore(
            (state) => state.modals.attendanceDepartment.isOpen
          )}
          refetch={() => {
            setFilter(
              Boolean(employees.length)
                ? {
                    _and: [
                      {
                        date: {
                          _eq: date,
                        },
                      },
                      {
                        employee_id: {
                          _in: employees,
                        },
                      },
                    ],
                  }
                : {
                    date: {
                      _eq: date,
                    },
                  }
            );
          }}
        />
      </div>
    </DashBoard>
  );
};

export default DayPage;
