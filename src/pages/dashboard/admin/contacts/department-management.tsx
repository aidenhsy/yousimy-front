import { DashBoard } from '@/components/Layout/Dashboard';
import { DashItems } from '@/components/Layout/Dashboard/types';
import { withDashItems } from '../../../../hoc/withDashItems';
import { GetServerSidePropsContext } from 'next';
import { Button, Col, Row, Table, Tree, TreeSelect } from 'antd';
import { useDepartmentTree } from '@/hooks/departmentTree.hook';
import { Key, useEffect, useState } from 'react';
import { useModalStore } from '@/store/modalStore';
import AddDeptManagerModal from '@/components/Modal/AddDeptManagerModal';
import EmployeeTable from '@/components/Table/EmployeeTable';
import storeManagementColumns from '@/components/Table/EmployeeTable/columns/storeManagementColumns';
import { Employees, Employees_Bool_Exp } from '@/graphql/__generated__/graphql';
import { useDeleteDepartmentsEmployeesByPk } from '@/hooks/departments-employees.hooks';

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const DepartmentManagement = ({ dashItems }: { dashItems: DashItems }) => {
  const openModal = useModalStore((state) => state.openModal);
  const { departmentTreeData } = useDepartmentTree();
  const [selectedKey, setSelectedKey] = useState<Key[]>([]);
  const [employeeSelection, setEmployeeSelection] = useState<Employees[]>([]);
  const [filter, setFilter] = useState<Employees_Bool_Exp>({
    name: { _eq: 'asdf' },
  });
  const { deleteDepartmentsEmployeesByPk } =
    useDeleteDepartmentsEmployeesByPk();

  useEffect(() => {
    if (
      departmentTreeData &&
      departmentTreeData.children &&
      departmentTreeData.children.length > 0
    ) {
      setSelectedKey([departmentTreeData.children[0].id]);
      setFilter({
        departments_employees: {
          department_id: {
            _eq: departmentTreeData.children[0].id,
          },
        },
      });
    }
  }, [departmentTreeData]);

  return (
    <>
      <DashBoard dashItems={dashItems}>
        <Row gutter={24} className="tw-px-4 tw-py-6">
          <Col span={5}>
            <Tree
              blockNode
              treeData={departmentTreeData?.children}
              fieldNames={{ title: 'name', key: 'id' }}
              selectedKeys={selectedKey}
              onSelect={(key) => {
                if (key.length > 0) {
                  setSelectedKey(key);
                  setFilter({
                    departments_employees: {
                      department_id: {
                        _eq: key[0] as any,
                      },
                    },
                  });
                  setEmployeeSelection([]);
                }
              }}
            />
          </Col>
          <Col span={18}>
            <div className="tw-flex tw-flex-col tw-space-y-3">
              <div className="tw-flex tw-justify-end tw-space-x-3">
                <Button
                  disabled={employeeSelection.length === 0}
                  onClick={async () => {
                    for (let employee of employeeSelection) {
                      await deleteDepartmentsEmployeesByPk(
                        employee.id,
                        selectedKey[0] as string
                      );
                    }
                    setFilter({
                      departments_employees: {
                        department_id: {
                          _eq: selectedKey[0] as string,
                        },
                      },
                    });
                    setEmployeeSelection([]);
                  }}
                >
                  移除人员
                </Button>
                <Button onClick={() => openModal('addManagerModal')}>
                  添加人员
                </Button>
              </div>
              <EmployeeTable
                columns={storeManagementColumns()}
                scroll={{ y: 400, x: 1200 }}
                filter={filter}
                selectedRows={employeeSelection}
                setSelectedRows={setEmployeeSelection}
              />
            </div>
          </Col>
        </Row>
      </DashBoard>
      <AddDeptManagerModal
        deptId={selectedKey[0]}
        open={useModalStore((state) => state.modals.addManagerModal.isOpen)}
        refetch={() => {
          setFilter({
            departments_employees: {
              department_id: {
                _eq: selectedKey[0] as string,
              },
            },
          });
        }}
      />
    </>
  );
};

export default DepartmentManagement;
