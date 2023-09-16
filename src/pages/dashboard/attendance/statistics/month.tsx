import { useMemo, useState } from "react";
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
import StatisticsMonthTable from "@/components/Table/AttendanceTable/statisticsMonth";
import statisticsMonthColumns from "@/components/Table/AttendanceTable/columns/statisticsMonthColumns";
import { useModalStore } from "@/store/modalStore";
import StatisticsMonthModal from "@/components/Modal/StatisticsMonthModal";
import { Employees_Bool_Exp } from "@/graphql/__generated__/graphql";
import SelectAttendanceGroupsModal from "@/components/Modal/SelectAttendanceGroupsModal";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const MonthPage = ({ dashItems }: { dashItems: DashItems }) => {
  const openModal = useModalStore((state) => state.openModal);

  // state
  const [date, setDate] = useState(dayjs(new Date()).format("YYYY-MM"));
  const [selectRows, setSelectRows] = useState<any>([]);
  const [filter, setFilter] = useState<Employees_Bool_Exp>({
    attendances: {
      date_yyyy_mm: {
        _eq: date,
      },
    },
  });

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

  const handleDateChange = (type: string, dateString?: any) => {
    let newDate = null;
    if (type === "add") {
      newDate = dayjs(date).add(1, "month").format("YYYY-MM").toString();
    } else if (type === "reduce") {
      newDate = dayjs(date).add(-1, "month").format("YYYY-MM").toString();
    } else {
      newDate = dateString;
    }
    setFilter(
      Boolean(employees.length)
        ? {
            _and: [
              {
                attendances: {
                  date_yyyy_mm: {
                    _eq: newDate,
                  },
                },
              },
              {
                id: {
                  _in: employees,
                },
              },
            ],
          }
        : {
            attendances: {
              date_yyyy_mm: {
                _eq: newDate,
              },
            },
          }
    );
    setDate(newDate);
  };

  useMemo(() => {
    setFilter(
      Boolean(employees.length)
        ? {
            _and: [
              {
                attendances: {
                  date_yyyy_mm: {
                    _eq: date,
                  },
                },
              },
              {
                id: {
                  _in: employees,
                },
              },
            ],
          }
        : {
            attendances: {
              date_yyyy_mm: {
                _eq: date,
              },
            },
          }
    );
  }, [selectRows]);
  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-p-5">
        <div className="tw-mb-4 tw-flex tw-items-center">
          {/* 日期切换 */}
          <div className="tw-border-solid tw-border tw-flex tw-justify-between tw-items-center tw-border-gray-300 tw-rounded">
            <div
              onClick={() => handleDateChange("reduce")}
              className="tw-h-full tw-flex tw-items-center tw-justify-center tw-w-8 hover:tw-cursor-pointer"
            >
              <LeftOutlined />
            </div>
            <div className="tw-h-4 tw-w-[1px] tw-bg-[#ededee]" />
            <DatePicker
              style={{
                border: "none",
                width: 80,
              }}
              allowClear={false}
              inputReadOnly
              value={dayjs(date)}
              format={`YYYY-MM`}
              picker="month"
              suffixIcon={null}
              onChange={(value) =>
                handleDateChange("", dayjs(value).format("YYYY-MM"))
              }
            />
            <div className="tw-h-4 tw-w-[1px] tw-bg-[#ededee]" />
            <div
              onClick={() => handleDateChange("add")}
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
        <StatisticsMonthTable
          columns={statisticsMonthColumns(date)}
          date={date}
          filter={filter}
          scroll={{ x: statisticsMonthColumns(date).length * 1700 }}
        />

        <StatisticsMonthModal
          open={useModalStore(
            (state) => state.modals.statisticsMonthModal.isOpen
          )}
          refetch={() =>
            setFilter(
              Boolean(employees.length)
                ? {
                    _and: [
                      {
                        attendances: {
                          date_yyyy_mm: {
                            _eq: date,
                          },
                        },
                      },
                      {
                        id: {
                          _in: employees,
                        },
                      },
                    ],
                  }
                : {
                    attendances: {
                      date_yyyy_mm: {
                        _eq: date,
                      },
                    },
                  }
            )
          }
        />

        {/* 选择考勤组 */}
        <SelectAttendanceGroupsModal
          open={useModalStore(
            (state) => state.modals.selectAttendanceGroupsModal.isOpen
          )}
          refetch={setSelectRows}
        />
      </div>
    </DashBoard>
  );
};

export default MonthPage;
