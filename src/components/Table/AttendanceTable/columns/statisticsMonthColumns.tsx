import { Attendance } from "@/graphql/__generated__/graphql";
import { CheckResultMap } from "@/lib/mapping";
import { useModalStore } from "@/store/modalStore";
import { EditOutlined } from "@ant-design/icons";
import { Popover, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";

const statisticsMonthColumns = (date: any): ColumnsType<any> => {
  const openModal = useModalStore((state) => state.openModal);

  // 获取当月天数
  const getDaysInMonth = (date: any) => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth() + 1;
    const currentMonth: any = new Date(year, month - 1, 1);
    const nextMonth: any = new Date(year, month, 1);
    return (nextMonth - currentMonth) / (1000 * 60 * 60 * 24);
  };

  // 根据数字转换星期几
  const getWeekdayForNumber = (number: number) => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const dayOfWeekOfFirstDay = firstDayOfMonth.getDay();

    // 计算给定数字对应的星期几
    const targetDayOfWeek = (dayOfWeekOfFirstDay + number - 1) % 7;

    // 将星期几转换成对应的文本
    const weekdays = [
      "星期天",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ];
    return weekdays[targetDayOfWeek];
  };

  return [
    {
      title: "姓名",
      dataIndex: "name",
      width: 200,
      fixed: "left",
    },
    {
      title: "出勤统计",
      key: "attendance_statistics",
      children: [
        {
          title: "应出勤天数",
          dataIndex: "scheduled_length_day",
          render: (val, record) => {
            const { attendances } = record;
            if (Boolean(attendances.length)) {
              let count = 0;
              attendances.forEach(
                (one: any) => (count += one.scheduled_length_day)
              );
              return count;
            }
            return "-";
          },
        },
        {
          title: "工作日出勤天数",
          dataIndex: "actual_length_day",
          render: (val, record) => {
            const { attendances } = record;
            if (Boolean(attendances.length)) {
              let count = 0;
              attendances.forEach(
                (one: any) => (count += one.actual_length_day)
              );
              return count;
            }
            return "-";
          },
        },
        {
          title: "工作日出勤小时",
          dataIndex: "actual_length_hour",
          render: (val, record) => {
            const { attendances } = record;
            if (Boolean(attendances.length)) {
              let count = 0;
              attendances.forEach(
                (one: any) => (count += one.actual_length_hour)
              );
              return count;
            }
            return "-";
          },
        },
      ],
    },
    {
      title: "异常统计",
      key: "abnormal_statistics",
      children: [
        {
          title: "迟到次数",
          dataIndex: "late_minutes_as_late_count",
          render: (val, record) => {
            return record.attendances.filter(
              (one: any) => one.clockInResult === 3
            ).length;
          },
        },
        {
          title: "早退次数",
          dataIndex: "early_minutes_as_early_count",
          render: (val, record) => {
            return record.attendances.filter(
              (one: any) => one.clockOutResult === 2
            ).length;
          },
        },
        {
          title: "上班缺卡次数",
          dataIndex: "late_minutes_as_lack_count",
          render: (val, record) => {
            return record.attendances.filter(
              (one: any) => one.clockInResult === 4
            ).length;
          },
        },
        {
          title: "下班缺卡次数",
          dataIndex: "early_minutes_as_lack_count",
          render: (val, record) => {
            return record.attendances.filter(
              (one: any) => one.clockOutResult === 4
            ).length;
          },
        },
      ],
    },
    {
      title: "每日统计",
      dataIndex: "daily_statistics",
      key: "daily_statistics",
      // 动态渲染符合每月天数的统计数据
      children: Array.from({ length: getDaysInMonth(date) }, (v, i) => {
        const index = i + 1;
        const indexDate = `${date}-${index < 10 ? `0${index}` : index}`;
        return {
          title: `${indexDate}(${getWeekdayForNumber(index)})`,
          dataIndex: `${date}-${index}`,
          render: (val, record) => {
            const { attendances } = record;
            if (Boolean(attendances.length)) {
              const [day] = attendances.filter(
                (one: any) => one.date === indexDate
              );
              if (!day) {
                return "-";
              }
              const {
                clockInResult,
                clockOutResult,
                clock_in_time,
                clock_out_time,
                shift_id,
              } = day;
              if (clockInResult && clockOutResult) {
                const content = (
                  <div className="tw-inline-block tw-whitespace-nowrap tw-overflow-hidden tw-text-ellipsis">
                    <span
                      className={
                        clockInResult === 1
                          ? "tw-text-black"
                          : " tw-text-red-500"
                      }
                    >
                      {`${CheckResultMap[clockInResult]}(${
                        clock_in_time || ""
                      })`}
                    </span>
                    ,
                    <span
                      className={
                        clockInResult === 1
                          ? "tw-text-black"
                          : " tw-text-red-500"
                      }
                    >
                      {`${CheckResultMap[clockOutResult]}(${
                        clock_out_time || ""
                      })`}
                    </span>
                  </div>
                );
                if (shift_id === "0") {
                  return "休息";
                }
                return (
                  <div className="tw-flex">
                    <Popover content={content}>{content}</Popover>
                    <EditOutlined
                      className="tw-cursor-pointer"
                      onClick={() => {
                        const [{ id, shift_list }] = record.attendances.filter(
                          (one: any) => one.date === indexDate
                        );
                        openModal("statisticsMonthModal", {
                          updateEmployeeAttendanceInfo: {
                            ...shift_list,
                            id,
                            date: `${indexDate}(${getWeekdayForNumber(index)})`,
                            indexDate,
                            clock_in_time,
                            clock_out_time,
                          },
                        });

                        // form.setFieldsValue({
                        //   clock_in_time: clock_in_time
                        //     ? dayjs(clock_in_time, 'HH:mm:ss')
                        //     : undefined,
                        //   clock_out_time: clock_out_time
                        //     ? dayjs(clock_out_time, 'HH:mm:ss')
                        //     : undefined,
                        // });
                      }}
                    />
                  </div>
                );
              }
              return "-";
            }
          },
        };
      }),
    },
  ];
};

export default statisticsMonthColumns;
