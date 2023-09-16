import React from "react";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import { Button, Table } from "antd";
import {
  Salary_Types,
  Service_Entitlement_Bool_Exp,
} from "@/graphql/__generated__/graphql";
import { useGetSalaryTypes } from "@/hooks/salary_types.hooks";
import { useModalStore } from "@/store/modalStore";
import InsertServiceEntitlementModal from "@/components/Modal/InsertServiceEntitlementModal";
import UpdateServiceEntitlementModal from "@/components/Modal/UpdateServiceEntitlementModal";
import { useDeleteServiceEntitlementOne } from "@/hooks/service-entitlement.hooks";

interface SalaryTypeLeavesTableProps {
  filter: Service_Entitlement_Bool_Exp;
}

const SalaryTypeLeavesTable: React.FC<SalaryTypeLeavesTableProps> = ({
  filter,
}) => {
  const { salaryTypesData, salaryTypesLoading, salaryTypesRefetch } =
    useGetSalaryTypes(filter);

  const { deleteServiceEntitlementOne } = useDeleteServiceEntitlementOne();

  const expandedRowRender = (record: Salary_Types) => {
    const columns: TableColumnsType<any> = [
      {
        title: "工作年限",
        dataIndex: "years_of_service",
        key: "years_of_service",
        render: (val) => <span>{val} 年</span>,
      },
      {
        title: "每年休假长度",
        dataIndex: "max_days",
        key: "max_days",
        render: (val) => <span>{val} 天</span>,
      },
      {
        render: (val, cRecord) => (
          <>
            <Button
              type="link"
              onClick={() =>
                openModal("updateServiceEntitlement", {
                  serviceEntitlement: {
                    ...cRecord,
                    leave_type_id: filter.leave_type_id?._eq
                      ? filter.leave_type_id?._eq
                      : "",
                    salary_type_id: record.id,
                    refetch: salaryTypesRefetch,
                  },
                })
              }
              icon={<EditOutlined />}
            />
            <Button
              type="link"
              danger
              onClick={() => {
                deleteServiceEntitlementOne(cRecord.id);
                salaryTypesRefetch();
              }}
              icon={<DeleteOutlined />}
            />
          </>
        ),
      },
    ];
    return (
      <Table
        rowKey="id"
        columns={columns}
        loading={salaryTypesLoading}
        dataSource={record.service_entitlements as []}
        pagination={false}
      />
    );
  };

  const openModal = useModalStore((state) => state.openModal);

  const columns: TableColumnsType<any> = [
    { title: "薪资类型", dataIndex: "name", key: "name" },
    {
      render: (_val, record) => {
        return (
          <Button
            onClick={() =>
              openModal("insertServiceEntitlementModal", {
                leave_type_id: filter.leave_type_id?._eq
                  ? filter.leave_type_id?._eq
                  : "",
                salary_type_id: record.id,
                refetch: salaryTypesRefetch,
              })
            }
            type="link"
            icon={<PlusOutlined />}
          />
        );
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        loading={salaryTypesLoading}
        expandable={{
          expandedRowRender: (record) => expandedRowRender(record),
          defaultExpandedRowKeys: ["0"],
        }}
        rowKey="id"
        dataSource={salaryTypesData as []}
      />
      <InsertServiceEntitlementModal
        open={useModalStore(
          (state) => state.modals.insertServiceEntitlementModal.isOpen
        )}
      />
      <UpdateServiceEntitlementModal
        open={useModalStore(
          (state) => state.modals.updateServiceEntitlement.isOpen
        )}
      />
    </>
  );
};

export default SalaryTypeLeavesTable;
