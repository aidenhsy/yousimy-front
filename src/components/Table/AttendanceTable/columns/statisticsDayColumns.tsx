import { Attendance } from "@/graphql/__generated__/graphql";
import { CheckResultMap } from "@/lib/mapping";
import { useModalStore } from "@/store/modalStore";
import { EditOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";

const statisticsDayColumns = (): ColumnsType<any> => {
  const openModal = useModalStore((state) => state.openModal);

  const handleIsEditOpenModal = (val: any, record: any, type: "in" | "out") => {
    openModal("statisticsDayModal", {
      updateAttendanceInfo: {
        clock: type,
        time: val,
        attendanceInfo: record,
      },
    });
  };
  return [
    {
      title: "姓名",
      dataIndex: ["employee", "name"],
      width: 200,
      fixed: "left",
    },
    {
      title: "班次名称",
      dataIndex: "shift_list",
      width: 200,
      render: (val) => (
        <Tooltip
          placement="top"
          title={
            <div className="tw-flex tw-flex-col tw-space-y-2">
              <span>{val.on_time}</span>
              <span>{val.off_time}</span>
            </div>
          }
        >
          <Button>{val.shift_name}</Button>
        </Tooltip>
      ),
    },
    {
      title: "上班",
      key: "in",
      children: [
        {
          title: "打卡时间",
          dataIndex: "clock_in_time",
          width: 120,
          render: (val, record) => {
            return (
              <div className="tw-flex tw-justify-between">
                {val || "-"}
                <EditOutlined
                  className="tw-cursor-pointer"
                  onClick={() => handleIsEditOpenModal(val, record, "in")}
                />
              </div>
            );
          },
        },
        {
          title: "打卡结果",
          dataIndex: "clockInResult",
          align: "center",
          width: 120,
          render: (val) => {
            return CheckResultMap[val] || "-";
          },
        },
        {
          title: "打卡地点",
          dataIndex: ["attendanceLocationByClockInLocationId", "address"],
          width: 150,
          render: (val) => {
            return (
              <Tooltip title={val || ""}>
                {val
                  ? val.length > 7
                    ? `${val.slice(0, 7)}...`
                    : val
                  : "无地点"}
              </Tooltip>
            );
          },
        },
      ],
    },
    {
      title: "下班",
      key: "out",
      children: [
        {
          title: "打卡时间",
          dataIndex: "clock_out_time",
          width: 120,
          render: (val, record) => {
            return (
              <div className="tw-flex tw-justify-between">
                {val || "-"}
                <EditOutlined
                  className="tw-cursor-pointer"
                  onClick={() => handleIsEditOpenModal(val, record, "out")}
                />
              </div>
            );
          },
        },
        {
          title: "打卡结果",
          dataIndex: "clockOutResult",
          align: "center",
          width: 120,
          render: (val) => {
            return CheckResultMap[val] || "-";
          },
        },
        {
          title: "打卡地点",
          dataIndex: ["attendanceLocationByClockOutLocationId", "address"],
          width: 150,
          render: (val) => {
            return (
              <Tooltip title={val || ""}>
                {val
                  ? val.length > 7
                    ? `${val.slice(0, 7)}...`
                    : val
                  : "无地点"}
              </Tooltip>
            );
          },
        },
      ],
    },
    {
      title: "统计",
      dataIndex: "gender",
      key: "gender",
      children: [
        {
          title: "班内工作时长",
          dataIndex: "actual_length_hour",
          align: "center",
          width: 120,
          render: (val) => {
            return typeof val === "number" ? val : "-";
          },
        },
        {
          title: "用功成本",
          dataIndex: "actual_attendance_time",
          align: "center",
          width: 120,
          render: (val, record: Attendance) => {
            const {
              clockInResult,
              clockOutResult,
              actual_length_hour,
              employee,
            } = record;
            if (
              !employee?.salary_type ||
              clockInResult !== 1 ||
              clockOutResult !== 1
            ) {
              return "-";
            }
            if (employee?.salary_type === "时薪") {
              return (
                typeof actual_length_hour === "number" &&
                Math.floor(actual_length_hour * employee?.basic_salary)
              );
            } else if (employee?.salary_type === "日薪") {
              return employee?.basic_salary;
            } else if (employee?.salary_type === "月薪") {
              const currentDate = new Date();
              const year = currentDate.getFullYear();
              const month = currentDate.getMonth();
              return Math.floor(
                employee?.basic_salary / new Date(year, month + 1, 0).getDate()
              );
            }
          },
        },
      ],
    },
    {
      title: "打卡部门",
      dataIndex: ["department", "name"],
      render: (val, record) => {
        return (
          <div className="tw-flex tw-justify-between">
            {val || "-"}
            <EditOutlined
              className="tw-cursor-pointer"
              onClick={() =>
                openModal("attendanceDepartment", {
                  updateAttendanceInfo: record,
                })
              }
            />
          </div>
        );
      },
    },
  ];
};

export default statisticsDayColumns;
