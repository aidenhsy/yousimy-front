import EmployeeTable from '@/components/Table/EmployeeTable';
import { Employees, Employees_Bool_Exp } from '@/graphql/__generated__/graphql';
import { useDebounce } from '@/lib/hooks';
import { useModalStore } from '@/store/modalStore';
import { CloseOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Input, Modal, Row } from 'antd';
import React, { Key, useState } from 'react';
import addEmployeeColumn from '../Table/EmployeeTable/columns/addEmployeeColumns';
import { useInsertDepartmentsEmployees } from '@/hooks/departments-employees.hooks';

interface AddDeptManagerProps {
  open: boolean;
  deptId: any;
  refetch: () => void;
}

const AddDeptManagerModal: React.FC<AddDeptManagerProps> = ({
  deptId,
  open,
  refetch,
}) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const { insertDepartmentsEmployees } = useInsertDepartmentsEmployees();

  const [filter, setFilter] = useState<Employees_Bool_Exp>({});
  const [employeeSelection, setEmployeeSelection] = useState<Employees[]>([]);
  const handleSetSelectedRows = (rows: Employees[]) => {
    const newSelectionIds = new Set(rows.map((row) => row.id));

    // Split the existing selection into those that are still selected and those that are deselected
    const stillSelected = employeeSelection.filter((employee) =>
      newSelectionIds.has(employee.id)
    );
    const deselected = employeeSelection.filter(
      (employee) => !newSelectionIds.has(employee.id)
    );

    // Identify the newly selected rows
    const newlySelected = rows.filter(
      (row) => !employeeSelection.some((employee) => employee.id === row.id)
    );

    // Combine the selections, preserving the deselected selections
    const updatedSelection = [
      ...stillSelected,
      ...newlySelected,
      ...deselected,
    ];

    setEmployeeSelection(updatedSelection);
  };

  const handleOk = async () => {
    for (let employee of employeeSelection) {
      await insertDepartmentsEmployees(employee.id, deptId);
    }
    refetch();
    setEmployeeSelection([]);
    setFilter({ status: { _eq: 2 } });
    closeModal('addManagerModal');
  };
  return (
    <Modal
      title={`添加管理人员`}
      width={1000}
      onCancel={() => {
        setFilter({ status: { _eq: 2 } });
        closeModal('addManagerModal');
      }}
      open={open}
      onOk={handleOk}
      maskClosable={false}
      keyboard={false}
    >
      <Row gutter={24}>
        <Col span={12}>
          <div className="tw-mb-5">
            <Input
              placeholder="请输入名字"
              prefix={<SearchOutlined />}
              onChange={useDebounce((e) => {
                const newNameFilter = e.target.value;
                setFilter({
                  _and: [
                    {
                      name: { _like: `%${newNameFilter}%` },
                    },
                    {
                      status: { _eq: 2 },
                    },
                  ],
                });
              }, 500)}
            />
          </div>
          <EmployeeTable
            columns={addEmployeeColumn()}
            filter={filter}
            scroll={{ y: 350 }}
            selectedRows={employeeSelection}
            setSelectedRows={handleSetSelectedRows}
          />
        </Col>
        <Col span={12}>
          {employeeSelection.length > 0 &&
            employeeSelection.map((employee) => (
              <div className="tw-flex tw-items-center tw-justify-between tw-px-7 tw-space-y-7">
                <div className="tw-flex tw-items-center">
                  {employee.avatar ? (
                    <Avatar src={employee.avatar} />
                  ) : (
                    <Avatar icon={<UserOutlined />} />
                  )}
                  <span className="tw-ml-2">{employee.name}</span>
                </div>
                <div>
                  <CloseOutlined
                    onClick={() => {
                      const newSelection = employeeSelection.filter(
                        (e) => e.id !== employee.id
                      );
                      setEmployeeSelection(newSelection);
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

export default AddDeptManagerModal;
