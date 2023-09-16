import React, { useState } from "react";
import { Button, Col, Input, Row, Tree, TreeProps } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { useBrands } from "@/hooks/brand.hooks";
import AddManagerModal from "@/components/Modal/AddManagerModal";
import { useModalStore } from "@/store/modalStore";
import EmployeeTable from "@/components/Table/EmployeeTable";
import { Employees, Employees_Bool_Exp } from "@/graphql/__generated__/graphql";
import { useDeleteStoreEmployee } from "@/hooks/store_employee.hook";
import storeManagementColumns from "@/components/Table/EmployeeTable/columns/storeManagementColumns";

type MyTreeNode = {
  id?: string;
  name?: string;
  stores?: MyTreeNode[];
} | null;

const StoreView = () => {
  const openModal = useModalStore((state) => state.openModal);
  //states
  const [selectedStoreInfo, setSelectedStoreInto] = useState<any>(null);
  const [employeeSelection, setEmployeeSelection] = useState<Employees[]>([]);
  const [filter, setFilter] = useState<Employees_Bool_Exp>({
    store_employees: { store_id: { _eq: "0000" } },
  });

  //hooks
  const { brandsData, brandsRefetch } = useBrands(100, 0);
  const { deleteStoreEmployee } = useDeleteStoreEmployee();

  //functions
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    const node = info?.node as unknown as MyTreeNode;
    setSelectedStoreInto(node);
    setFilter({
      store_employees: { store_id: { _eq: selectedKeys[0].toString() } },
    });
  };

  const processedTreeData = brandsData?.brands
    .map((brand) => ({
      ...brand,
      disabled: brand.stores && brand.stores.length > 0,
    }))
    .sort((a, b) => b.stores.length - a.stores.length);

  return (
    <>
      <Row gutter={24}>
        <Col span={5}>
          {/* 搜索门店 */}
          <Input
            className="tw-mb-2"
            placeholder="搜索品牌"
            prefix={<SearchOutlined />}
            onChange={(e) => {
              brandsRefetch({
                where: { name: { _like: `%${e.target.value}%` } },
              });
            }}
          />
          {/* 门店树节点 */}
          <Tree
            blockNode
            onSelect={onSelect}
            fieldNames={{ key: "id", title: "name", children: "stores" }}
            treeData={processedTreeData as any}
          />
        </Col>
        <Col span={18}>
          <div className="tw-flex tw-justify-between tw-mb-2 tw-items-center">
            <div></div>
            <div className="tw-flex tw-mr-2">
              {/* 移除成员 */}
              <Button
                loading={false}
                disabled={!employeeSelection.length}
                className="tw-mr-3"
                onClick={async () => {
                  await deleteStoreEmployee({
                    _and: [
                      {
                        store_id: {
                          _eq: selectedStoreInfo.id,
                        },
                      },
                      {
                        employee_id: {
                          _in: employeeSelection.map((item: any) => item.id),
                        },
                      },
                    ],
                  });
                  setFilter({
                    store_employees: {
                      store_id: { _eq: selectedStoreInfo?.id },
                    },
                  });
                }}
              >
                移除成员
              </Button>
              {/* 添加成员 */}
              <Button
                disabled={selectedStoreInfo === null}
                icon={<PlusOutlined />}
                onClick={() => openModal("addManagerModal")}
              >
                添加成员
              </Button>
            </div>
          </div>
          {/*门店视图 - 管理员表格 */}
          <EmployeeTable
            columns={storeManagementColumns()}
            scroll={{ y: 400, x: 1200 }}
            filter={filter}
            selectedRows={employeeSelection}
            setSelectedRows={setEmployeeSelection}
          />
        </Col>
      </Row>

      {/* modals */}
      <AddManagerModal
        storeId={selectedStoreInfo?.id}
        open={useModalStore((state) => state.modals.addManagerModal.isOpen)}
        refetch={() =>
          setFilter({
            store_employees: {
              store_id: {
                _eq: selectedStoreInfo?.id,
              },
            },
          })
        }
      />
    </>
  );
};

export default StoreView;
