import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
// types
import { ColumnsType } from "antd/es/table";
import { GetServerSidePropsContext } from "next";

// libs
import dayjs from "dayjs";
import { getDayAndWeek } from "@/lib/tools/date";
import { withDashItems } from "@/hoc/withDashItems";

// antd
import { UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Modal,
  Popconfirm,
  Popover,
  Space,
  Table,
  Tooltip,
  message,
} from "antd";
import "dayjs/locale/zh-cn";
//hooks
import { useColors } from "@/lib/hooks/useColors";

//components
import SinglePageHeader from "@/components/Header/singlePageHeader";
import ChooseShiftForDay from "./ChooseShiftForDay";
import ShiftTags from "./ShiftTags";
import { DashItems } from "@/components/Layout/Dashboard/types";
import ChooseMonth from "./ChooseMonth";
import { nanoid } from "nanoid";
import {
  useAttendnceGroupShifts,
  useCreateAttendanceShift,
  useDeleteAttendanceShift,
  useUpdateAttendanceShift,
} from "@/hooks/attendance.hooks";
import { useDrawerStore } from "@/store/drawerStore";
import AttendanceShifts from "@/components/Drawer/AttendanceShiftsDrawer";
import EmployeesPeriodicShiftScheduling from "@/components/Modal/EmployeesPeriodicShiftSchedulingModal";
import { useModalStore } from "@/store/modalStore";
export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);
export default function Arrange({ dashItems }: { dashItems: DashItems }) {
  // router
  const router: any = useRouter();
  const openDrawer = useDrawerStore((state) => state.openDrawer);
  const openModal = useModalStore((state) => state.openModal);
  // state
  const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
  const [selectedMonth, setSelectedMonth] = useState(dayjs().format("YYYY-MM"));
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");
  const [newTable, setNewTable] = useState<any>([]);
  // hooks
  const {
    attendnceGroupShiftsData,
    attendnceGroupShiftsLoading,
    attendnceGroupShiftsRefetch,
  } = useAttendnceGroupShifts(router.query.id, {
    date_yyyy_mm: { _eq: selectedMonth },
  });

  const { deleteAttendanceShift } = useDeleteAttendanceShift();
  const { createAttendanceShift } = useCreateAttendanceShift();
  const { updateAttendanceShift } = useUpdateAttendanceShift();

  // 颜色获取
  const { newArr, getColor } = useColors(
    attendnceGroupShiftsData?.attendance_group_shifts
  );

  // 获取初始数据
  const initialValues = useMemo(() => {
    const dataSource: any = [];
    attendnceGroupShiftsData?.departments.map((dep) => {
      dep.employees
        .filter((one) => one.status === 2 || one.status === 5)
        .sort((a, b) => a.status - b.status)
        .map((employee) => {
          const arr: any = [];
          const dayArr = employee.attendances.map((item) => item.date);
          if (employee.status === 5 && !Boolean(dayArr.length)) {
            return;
          }
          getDayAndWeek(selectedMonth).forEach((el, index) => {
            if (!dayArr?.includes(el.fullDay)) {
              arr[index] = {
                date: el.fullDay,
                department_id: employee.department_id,
              };
            } else {
              arr[index] = employee?.attendances?.find(
                (fd: any) => fd?.date === el.fullDay
              );
            }
          });
          return dataSource.push({ ...employee, attendances: arr });
        });
    });
    return dataSource;
  }, [attendnceGroupShiftsData, selectedMonth]);

  // 如果没有编辑过数据则置灰
  const disabled = useMemo(
    () => JSON.stringify(initialValues) === JSON.stringify(newTable),
    [initialValues, newTable]
  );

  // set数据
  useEffect(() => {
    setNewTable(initialValues);
  }, [initialValues]);

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setSelectedDay("");
    }
  };
  // 自定义列
  const columns: ColumnsType<any> = [
    {
      dataIndex: "name",
      title: (
        <div className="tw-flex tw-items-center tw-justify-center tw-font-normal">
          <UserOutlined className="tw-text-base" />
          <span className="tw-ml-2 tw-text-base">人员</span>
        </div>
      ),
      width: 120,
      fixed: "left",
      render: (_, record) => (
        <div className="tw-pl-2 tw-flex tw-items-center">
          {record.avatar ? (
            <Avatar size={26} src={record.avatar} />
          ) : (
            <Avatar size={26} icon={<UserOutlined />} />
          )}
          <span className="tw-pl-2">{record.name.slice(0, 4)}</span>
        </div>
      ),
    },
    {
      dataIndex: "attendances",
      title: (
        <div className="tw-flex tw-font-normal tw-justify-between tw-text-base">
          {getDayAndWeek(selectedMonth).map((item: any) => {
            return (
              <div
                key={item.day}
                className="tw-flex-1 tw-h-full tw-py-3 tw-border-solid tw-border-0 tw-border-r tw-border-[#eee]"
              >
                <p className="tw-text-xs tw-text-[#5c626a] tw-text-center">
                  {item.week}
                </p>
                <p className="tw-text-center">{item.day}</p>
              </div>
            );
          })}
        </div>
      ),
      render: (_: any, record: any) => {
        return (
          <div className="arrangePopover tw-flex tw-font-normal tw-justify-between tw-text-base hover:tw-cursor-pointer ">
            {_.map((item: any) => {
              return (
                <div key={item.date} className="tw-flex-1">
                  <Popover
                    open={
                      item.date === selectedDay && record.id === selectedPerson
                    }
                    onOpenChange={handleOpenChange}
                    content={
                      <div className="tw-w-72">
                        <ChooseShiftForDay
                          list={newArr}
                          onClearBc={onClearBc}
                          onSelectedBc={onSelectedBc}
                        />
                      </div>
                    }
                    trigger="click"
                  >
                    <div className="tw-relative tw-flex-1 tw-h-12 tw-border-solid tw-border-0 tw-border-r  tw-border-[#eee]">
                      <div
                        onClick={() => onSelectedDay(record.id, item.date)}
                        className="tw-h-full tw-border-[#fff] tw-border-2 tw-border-solid  tw-p-[1px] tw-box-border"
                        style={{
                          borderColor:
                            item.date === selectedDay &&
                            record.id === selectedPerson
                              ? "#116dfa"
                              : "transparent",
                          backgroundColor:
                            item.date === selectedDay &&
                            record.id === selectedPerson
                              ? "#eef3ff"
                              : "transparent",
                        }}
                      >
                        <div
                          className="tw-h-10 tw-rounded tw-text-center tw-text-sm tw-text-[#333] tw-p-[1px] tw-flex tw-items-center tw-justify-center"
                          style={{
                            backgroundColor: getColor(item.shift_id)?.bgColor,
                            color: getColor(item.shift_id)?.color,
                          }}
                        >
                          {item.shift_list?.shift_name && (
                            <Tooltip
                              title={
                                item.shift_list?.shift_name +
                                " " +
                                (item.shift_list?.on_time
                                  ? item.shift_list?.on_time +
                                    "~" +
                                    item.shift_list?.off_time
                                  : "")
                              }
                              color="#fff"
                              overlayInnerStyle={{ color: "#333" }}
                              overlayStyle={{ maxWidth: "400px" }}
                            >
                              {item.shift_list?.shift_name.slice(0, 2)}
                              <br />
                              {item.shift_list?.shift_name.slice(2, 4)}
                            </Tooltip>
                          )}
                        </div>
                      </div>
                    </div>
                  </Popover>
                </div>
              );
            })}
          </div>
        );
      },
    },
  ];

  //   选择某一天
  const onSelectedDay = (id: string, day: string) => {
    setSelectedPerson(id);
    setSelectedDay(day);
  };
  // 选择一个班次
  const onSelectedBc = (value: any) => {
    // 将班次添加到表格中
    setNewTable(
      newTable.map((item: any) => {
        if (item.id === selectedPerson) {
          return {
            ...item,
            attendances: item.attendances.map((one: any) =>
              one.date === selectedDay
                ? {
                    ...one,
                    date: one.date,
                    shift_id: value.shift_list.id,
                    department_id: item.department_id,
                    ...value,
                  }
                : one
            ),
          };
        }
        return item;
      })
    );
  };

  const onClearBc = () => {
    setNewTable(
      newTable.map((item: any) => {
        if (item.id === selectedPerson) {
          return {
            ...item,
            attendances: item.attendances.map((item: any) =>
              item.date === selectedDay ? { date: item.date } : item
            ),
          };
        }
        return item;
      })
    );
  };

  // 保存考勤组班次
  const saveAtt = async () => {
    const formData = handleGetFormatData(newTable);
    const initiValData = handleGetFormatData(initialValues);
    const updateData: any = [],
      insetData: any = [];
    let deleteData = [];

    // 过滤出需要更新和增加的数据
    for (let item of formData) {
      const [data] = initiValData.filter(
        (one: any) =>
          one.date === item.date && one.employee_id === item.employee_id
      );
      if (data) {
        updateData.push({
          ...data,
          shift_id: item.shift_id,
        });
      } else {
        insetData.push({
          ...item,
          id: nanoid(),
        });
      }
    }

    const formDataSet = new Set(formData.map((item: any) => item.id));
    // 过滤出需要删除的班次
    deleteData = initiValData.filter((one: any) => !formDataSet.has(one.id));
    try {
      if (Boolean(deleteData.length)) {
        await deleteAttendanceShift({
          id: {
            _in: deleteData.map((item: any) => item.id),
          },
        });
      }
      if (Boolean(updateData.length)) {
        await updateAttendanceShift(
          updateData.map((item: any) => {
            return {
              where: {
                id: {
                  _eq: item.id,
                },
              },
              _set: {
                shift_id: item.shift_id,
              },
            };
          })
        );
      }
      if (Boolean(insetData.length)) {
        await createAttendanceShift(insetData);
      }
      await attendnceGroupShiftsRefetch({
        id: router.query.id,
        where: {
          date_yyyy_mm: {
            _eq: selectedMonth,
          },
        },
      });
      message.success("保存成功");
    } catch (error) {
      message.error("保存失败");
    }
  };

  const handleGetFormatData = (dataSource: any) => {
    const data: any = [];
    dataSource.forEach((item: any) => {
      const { attendances } = item;
      attendances.forEach((one: any) => {
        const { shift_id, date, id } = one;
        if (shift_id) {
          data.push({
            id,
            employee_id: item.id,
            date,
            shift_id,
            department_id: item.department_id,
          });
        }
      });
    });
    return data;
  };

  // 当前考勤的班次
  const selected = useMemo(() => {
    return (
      attendnceGroupShiftsData?.attendance_group_shifts?.map(
        (item: any) => item?.shift_list.id
      ) || []
    );
  }, [attendnceGroupShiftsData]);

  // 返回方法
  const onReturn = () => {
    if (!disabled) {
      Modal.confirm({
        centered: true,
        title: "当前排班还未保存，确定离开么",
        content: (
          <>
            <p>离开后，你更改的排班内容将会消失</p>
          </>
        ),
        onOk: () => {
          router.push("/dashboard/attendance/group/list");
        },
        onCancel: () => {},
      });
    } else {
      router.push("/dashboard/attendance/group/list");
    }
  };

  // 月份发生变化
  const onSelectedMonthChange = (value: string) => {
    if (!disabled) {
      Modal.confirm({
        centered: true,
        title: "当前排班还未保存，确定切换月份么",
        content: (
          <>
            <p>切换后，你更改的排班内容将会消失 ，请先保存后在切换月份</p>
          </>
        ),
        onOk: () => {
          setSelectedMonth(value);
        },
        onCancel: () => {},
      });
    } else {
      setSelectedMonth(value);
    }
  };

  const handleConfirm = () => {
    setNewTable(
      newTable.map((item: any) => {
        if (selectedRowKeys.includes(item.id)) {
          return {
            ...item,
            attendances: item.attendances.map((item: any) => ({
              date: item.date,
            })),
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="tw-w-full tw-h-full tw-min-h-[900px] tw-absolute tw-flex tw-flex-col tw-text-[#1f2329] tw-overflow-auto">
      {/* 头部 */}
      <SinglePageHeader
        title={attendnceGroupShiftsData?.name}
        optionButton={
          <Space>
            <Button
              disabled={disabled}
              onClick={() => setNewTable(initialValues)}
            >
              恢复
            </Button>
            <Button type="primary" disabled={disabled} onClick={saveAtt}>
              保存
            </Button>
          </Space>
        }
        onReturn={onReturn}
      />

      <div className="tw-bg-[#eff0f2] tw-flex tw-flex-col tw-w-full tw-h-full tw-p-5 tw-box-border tw-overflow-hidden">
        {/* 考勤班 */}
        <ShiftTags
          list={newArr}
          setScheduleShow={() => openDrawer("attendanceShiftsDrawer")}
        />
        <div className="arrange tw-w-full tw-flex-1 tw-bg-[#fff] tw-rounded-lg tw-py-4 tw-px-5 tw-box-border ">
          <div className="tw-flex tw-justify-between">
            {/* 工具栏 */}
            <ChooseMonth
              selectedMonth={selectedMonth}
              onChange={onSelectedMonthChange}
            />
            <div>
              <Button
                disabled={!Boolean(selectedRowKeys.length)}
                onClick={() => openModal("employeesPeriodicShiftScheduling")}
              >
                按周更改
              </Button>
              <Popconfirm
                title="确定要删除吗"
                description="此操作将会删除选择人员当月所有考勤记录"
                onConfirm={handleConfirm}
                okText="确定"
                cancelText="取消"
              >
                <Button
                  disabled={!Boolean(selectedRowKeys.length)}
                  style={{ marginLeft: 20 }}
                  type="primary"
                  danger
                >
                  删除
                </Button>
              </Popconfirm>
            </div>
          </div>
          {/* 表格 */}
          <div className="arrangeTable">
            <Table
              loading={attendnceGroupShiftsLoading}
              bordered
              rowKey={"id"}
              columns={columns}
              dataSource={newTable || []}
              pagination={false}
              scroll={{
                x: 1500,
                y: 600,
              }}
              rowSelection={{
                type: "checkbox",
                selectedRowKeys,
                onChange: (selectedKeys: any) =>
                  setSelectedRowKeys(selectedKeys),
              }}
            />
          </div>
        </div>
      </div>
      {/* 班次抽屉 */}
      <AttendanceShifts
        open={useDrawerStore(
          (state) => state.drawers.attendanceShiftsDrawer.isOpen
        )}
        userId={dashItems.userInfo.id}
        selected={selected}
        groupId={router.query.id}
      />

      <EmployeesPeriodicShiftScheduling
        open={useModalStore(
          (state) => state.modals.employeesPeriodicShiftScheduling.isOpen
        )}
        shifts={newArr}
        selectedRowKeys={selectedRowKeys}
        newTable={newTable}
        setNewTable={setNewTable}
      />
    </div>
  );
}
