import EmployeeTable from "@/components/Table/EmployeeTable";
import simpleEmployeeColumns from "@/components/Table/EmployeeTable/columns/simpleEmployeeColumns";
import {
  Attendance_Groups,
  Attendance_Groups_Bool_Exp,
  Employees,
  Employees_Bool_Exp,
} from "@/graphql/__generated__/graphql";
import { useEmployees } from "@/hooks/employees.hooks";
import { CloseOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Input, Modal, Row, Table } from "antd";
import React, { useState } from "react";
import AttendanceTable from "../Table/AttendanceTable";
import simpleAttendanceGroupsColumns from "../Table/EmployeeTable/columns/simpleAttendanceGroupsColumns";
import { useAttendnceGroups } from "@/hooks/attendance.hooks";
import { useModalStore } from "@/store/modalStore";
import { inCreaseOrDeleteAry } from "@/lib/tools/increaseOrDeleteAry";

interface SelectAttendanceGroupsModalProps {
  open: boolean;
  refetch: (value: Attendance_Groups[]) => void;
}

const SelectAttendanceGroupsModal: React.FC<
  SelectAttendanceGroupsModalProps
> = ({ open, refetch }) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const [filter, setFilter] = useState<Attendance_Groups_Bool_Exp>({});

  const [attendanceSelection, setAttendanceSelection] = useState<
    Attendance_Groups[]
  >([]);

  const handleNameFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNameFilter = e.target.value;
    setFilter({ ...filter, name: { _like: `%${newNameFilter}%` } });
  };

  const handleSetSelectedRows = (rows: Attendance_Groups[]) => {
    const newSelectionIds = new Set(rows.map((row) => row.id));

    // Split the existing selection into those that are still selected and those that are deselected
    const stillSelected = attendanceSelection.filter((attdance) =>
      newSelectionIds.has(attdance.id)
    );
    const deselected = attendanceSelection.filter(
      (attdance) => !newSelectionIds.has(attdance.id)
    );

    // Identify the newly selected rows
    const newlySelected = rows.filter(
      (row) => !attendanceSelection.some((attdance) => attdance.id === row.id)
    );

    // Combine the selections, preserving the deselected selections
    const updatedSelection = [
      ...stillSelected,
      ...newlySelected,
      ...deselected,
    ];

    setAttendanceSelection(updatedSelection);
  };

  return (
    <Modal
      title="选择考勤组"
      width={1000}
      onCancel={() => closeModal("selectAttendanceGroupsModal")}
      open={open}
      onOk={() => {
        refetch(attendanceSelection);
        closeModal("selectAttendanceGroupsModal");
      }}
      maskClosable={false}
      keyboard={false}
    >
      <Row gutter={24}>
        <Col span={12}>
          <div className="tw-mb-5">
            <Input
              placeholder="搜索考勤组名称"
              prefix={<SearchOutlined />}
              onChange={handleNameFilterChange}
            />
          </div>
          <AttendanceTable
            columns={simpleAttendanceGroupsColumns()}
            filter={filter}
            scroll={{ y: 350 }}
            selectedRows={attendanceSelection}
            setSelectedRows={handleSetSelectedRows}
          />
        </Col>
        <Col span={12} style={{ maxHeight: 650, overflowY: "auto" }}>
          {Boolean(attendanceSelection) &&
            attendanceSelection.map((attdance) => (
              <div className="tw-flex tw-items-center tw-justify-between tw-px-7 tw-space-y-7">
                <span className="tw-ml-2">{attdance.name}</span>
                <div>
                  <CloseOutlined
                    onClick={() => {
                      const newSelection = attendanceSelection.filter(
                        (e) => e.id !== attdance.id
                      );
                      setAttendanceSelection(newSelection);
                    }}
                  />
                </div>
              </div>
            ))}
        </Col>
      </Row>
    </Modal>
  );
};

export default SelectAttendanceGroupsModal;
