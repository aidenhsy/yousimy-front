import ChooseShiftForDay from "@/pages/dashboard/attendance/group/arrange/ChooseShiftForDay";
import { useModalStore } from "@/store/modalStore";
import { Card, Modal, Popover, Tooltip } from "antd";
import dayjs from "dayjs";
import { useState } from "react";

const gridTitleStyle: React.CSSProperties = {
  display: "flex",
  textAlign: "center",
};

const gridStyle: React.CSSProperties = {
  width: 107,
};

const week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
interface EmployeesPeriodicShiftSchedulingModalType {
  open: boolean;
  selectedRowKeys?: any;
  shifts?: any;
  setNewTable?: (value: any) => void;
  newTable?: any;
}
const EmployeesPeriodicShiftScheduling: React.FC<
  EmployeesPeriodicShiftSchedulingModalType
> = ({ open, selectedRowKeys, shifts, newTable, setNewTable }) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const [weekShifts, setWeekShifts] = useState<any>(week.map((item) => ({})));

  const handleSelectShift = (value: any, index: number) => {
    // 选择周几的班次
    const newShift = [...weekShifts];
    if (!value) {
      newShift[index] = {};
      setWeekShifts(newShift);
      return;
    }
    const {
      shift_list: { id },
    } = value;
    const selectShifts = shifts.filter(
      (one: any) => one?.shift_list?.id === id
    );
    newShift[index] = selectShifts[0];
    setWeekShifts(newShift);
  };

  const hanldeCancel = () => {
    // 清空选择的班次
    setWeekShifts(week.map((item) => ({})));
    closeModal("employeesPeriodicShiftScheduling");
  };

  const handleOk = () => {
    // 班次数据填充对应人员
    const newData = newTable.map((item: any) => {
      if (selectedRowKeys.includes(item.id)) {
        return {
          ...item,
          attendances: item.attendances.map((att: any) => {
            const day = dayjs(att.date).day(); // 获取周几
            const shift_list = weekShifts[day]?.shift_list;
            const shift_id = weekShifts[day]?.shift_list?.id;
            return {
              ...att,
              shift_id,
              shift_list,
              department_id: item.department_id,
            };
          }),
        };
      }
      return item;
    });
    setNewTable && setNewTable(newData);
    hanldeCancel();
  };
  return (
    <Modal
      title="周期排班"
      width={800}
      open={open}
      onCancel={hanldeCancel}
      onOk={handleOk}
    >
      <Card style={gridTitleStyle} bordered={false}>
        {week.map((item) => {
          return (
            <Card.Grid hoverable={false} style={gridStyle}>
              {item}
            </Card.Grid>
          );
        })}
      </Card>
      <Card style={gridTitleStyle} bordered={false}>
        {weekShifts.map((item: any, index: number) => {
          return (
            <Card.Grid hoverable={false} style={gridStyle}>
              <div key={index} className="tw-flex-1">
                <Popover
                  content={
                    <div className="tw-w-72">
                      <ChooseShiftForDay
                        list={shifts}
                        onClearBc={() => handleSelectShift(undefined, index)}
                        onSelectedBc={(value) =>
                          handleSelectShift(value, index)
                        }
                      />
                    </div>
                  }
                  trigger="click"
                >
                  <div
                    className="tw-text-center  tw-text-[#333] tw-p-[1px] tw-flex tw-items-center tw-justify-center"
                    style={{
                      backgroundColor: item?.bgColor,
                      color: item?.color,
                    }}
                  >
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
                  </div>
                </Popover>
              </div>
            </Card.Grid>
          );
        })}
      </Card>
    </Modal>
  );
};

export default EmployeesPeriodicShiftScheduling;
