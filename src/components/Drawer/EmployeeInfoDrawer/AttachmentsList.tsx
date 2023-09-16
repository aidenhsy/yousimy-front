/** @jsxImportSource @emotion/react */
import { Button, List, Modal } from "antd";
import React from "react";
import { css } from "@emotion/react";
import { UserAttachmentMap } from "@/lib/mapping";
import { Employees } from "@/graphql/__generated__/graphql";
import {
  DeleteOutlined,
  DownloadOutlined,
  ExclamationCircleOutlined,
  EyeOutlined,
  FileJpgOutlined,
} from "@ant-design/icons";
import { useDrawerStore } from "@/store/drawerStore";
import ImagePreviewDrawer from "../ImagePreviewDrawer";
import UploadImageModal from "@/components/Modal/UploadImageModal";
import { useModalStore } from "@/store/modalStore";
import { useDeleteEmployeeAttchement } from "@/hooks/employees.hooks";

interface AttachmentsList {
  employee: Employees;
  refetch: (value: { id: string }) => void;
}

const AttachmentsList: React.FC<AttachmentsList> = ({ employee, refetch }) => {
  const openModal = useModalStore((state) => state.openModal);
  const data = Object.values(UserAttachmentMap).map((record: any) => {
    const attachments = employee?.employee_attachments.find(
      (e) => e.kind === record.kind
    );
    return {
      ...record,
      attachments: attachments,
    };
  });
  const openDrawer = useDrawerStore((state) => state.openDrawer);
  //删除图片
  const { deleteEmployeeAttchement } = useDeleteEmployeeAttchement();

  const handleDeleteImage = (id: string, name: string) => {
    Modal.confirm({
      content: (
        <div className="tw-flex tw-items-start">
          <ExclamationCircleOutlined className="tw-text-[#ff7d00] tw-text-lg tw-mr-2" />
          <p>您要删除的图片是{name}，删除后无法恢复，确认删除？</p>
        </div>
      ),
      okText: "删除",
      okButtonProps: { type: "primary", danger: true },
      icon: null,
      centered: true,
      onOk: async () => {
        await deleteEmployeeAttchement({
          id: {
            _eq: id,
          },
        });
        refetch({
          id: employee.id,
        });
      },
    });
  };
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item css={listItemStyle}>
            <span className="tw-w-2/5">{item.value}</span>
            <span className="tw-w-3/5">
              {item.attachments ? (
                <div>
                  <FileJpgOutlined style={{ color: "orange" }} />
                  <span className="tw-ml-2">{item.attachments?.file_name}</span>
                </div>
              ) : (
                <div
                  className=" tw-ml-3 tw-px-2 tw-py-1 tw-mt-1 hover:tw-bg-blue-100 tw-rounded-lg tw-cursor-pointer hover:tw-text-blue-500 tw-w-12 tw-text-blue-500"
                  onClick={() =>
                    openModal("uploadImageModal", {
                      employee_id: employee?.id,
                      kind: item.kind,
                    })
                  }
                >
                  +&nbsp;添加
                </div>
              )}
            </span>
            {item?.attachments?.file_name && (
              <>
                {/* 查看图片 */}
                <Button
                  onClick={() => {
                    openDrawer("imagePreviewDrawer", {
                      imageInfo: item.attachments,
                    });
                  }}
                  type="text"
                  icon={<EyeOutlined />}
                />
                {/* 下载图片 */}
                <Button
                  onClick={() => {
                    if (!item?.attachments?.path) return;
                    window.open(
                      `${process.env.NEXT_PUBLIC_OSS}/${item?.attachments?.path}`
                    );
                  }}
                  type="text"
                  icon={<DownloadOutlined />}
                />
                {/* 删除图片 */}
                <Button
                  onClick={() =>
                    handleDeleteImage(
                      item?.attachments?.id,
                      item?.attachments?.file_name
                    )
                  }
                  type="text"
                  icon={<DeleteOutlined style={{ color: "red" }} />}
                />
              </>
            )}
          </List.Item>
        )}
      />
      {/* 预览图片 */}
      <ImagePreviewDrawer
        open={useDrawerStore(
          (state) => state.drawers.imagePreviewDrawer.isOpen
        )}
      />
      {/* 图片上传 */}
      <UploadImageModal
        open={useModalStore((state) => state.modals.uploadImageModal.isOpen)}
        refetch={refetch}
      />
    </>
  );
};

export default AttachmentsList;

const listItemStyle = css`
  border: 0 !important;
`;
