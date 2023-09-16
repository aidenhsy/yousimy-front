import { DashBoard } from '@/components/Layout/Dashboard';
import { DashItems } from '@/components/Layout/Dashboard/types';
import { withDashItems } from '../../../../hoc/withDashItems';
import { GetServerSidePropsContext } from 'next';
import { Button, Col, Menu, Row } from 'antd';
import { useBrands } from '@/hooks/brand.hooks';
import { useModalStore } from '@/store/modalStore';
import { Key, useEffect, useState } from 'react';
import { Employees, Employees_Bool_Exp } from '@/graphql/__generated__/graphql';
import EmployeeTable from '@/components/Table/EmployeeTable';
import storeManagementColumns from '@/components/Table/EmployeeTable/columns/storeManagementColumns';
import AddDeptManagerModal from '@/components/Modal/AddDeptManagerModal';
import AddBrandManagerModal from '@/components/Modal/AddBrandManagerModal';
import { useDeleteBrandsEmployeesByPk } from '@/hooks/brands-employees.hooks';

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const BrandManagementPage = ({ dashItems }: { dashItems: DashItems }) => {
  const { brandsData, brandsLoading } = useBrands(100, 0, {
    status: { _eq: 2 },
    is_operation: { _eq: true },
  });
  const [employeeSelection, setEmployeeSelection] = useState<Employees[]>([]);
  const [selectedKey, setSelectedKey] = useState<string[]>([]);
  const openModal = useModalStore((state) => state.openModal);
  const [filter, setFilter] = useState<Employees_Bool_Exp>({
    name: { _eq: 'asdf' },
  });
  const { deleteBrandsEmployeesByPk } = useDeleteBrandsEmployeesByPk();

  useEffect(() => {
    if (!brandsLoading) {
      setSelectedKey([brandsData?.brands[0].id as string]);
      setFilter({
        brands_employees: {
          brand_id: {
            _eq: brandsData?.brands[0].id,
          },
        },
      });
    }
  }, [brandsData]);

  return (
    <>
      <DashBoard dashItems={dashItems}>
        <Row>
          <Col span={5}>
            <Menu
              selectedKeys={selectedKey}
              items={brandsData?.brands.map((b) => ({
                key: b.id,
                label: b.name,
              }))}
              onSelect={(info) => {
                setSelectedKey([info.key]);
                setFilter({
                  brands_employees: {
                    brand_id: {
                      _eq: info.key,
                    },
                  },
                });
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
                      await deleteBrandsEmployeesByPk(
                        selectedKey[0] as string,
                        employee.id
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
      <AddBrandManagerModal
        brandId={selectedKey[0]}
        open={useModalStore((state) => state.modals.addManagerModal.isOpen)}
        refetch={() => {
          setFilter({
            brands_employees: {
              brand_id: {
                _eq: selectedKey[0] as string,
              },
            },
          });
        }}
      />
    </>
  );
};

export default BrandManagementPage;
