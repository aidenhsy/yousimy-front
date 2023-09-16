import { useModalStore } from "@/store/modalStore";
import { InboxOutlined } from "@ant-design/icons";
import { Modal, Spin, Upload, message } from "antd";
import axios from "axios";
import { useState } from "react";

const UploadImageModal: React.FC<{
  open: boolean;
  refetch: (value: { id: string }) => void;
}> = ({ open, refetch }) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const employee_id = useModalStore(
    (state) => state.modals.uploadImageModal.employee_id
  );
  const kind = useModalStore((state) => state.modals.uploadImageModal.kind);

  const [loading, setLoading] = useState<boolean>(false);
  const customRequest = async (options: any) => {
    const { file } = options;
    setLoading(true);
    try {
      await axios({
        url: `${process.env.NEXT_PUBLIC_OPEN_URL}/upload-employee-photo`,
        method: "POST",
        params: { id: employee_id, kind },
        data: { image: file },
        headers: { "Content-Type": "multipart/form-data" },
      });
      refetch({
        id: employee_id,
      });
      closeModal("uploadImageModal");
    } catch (error) {
      message.error("上传失败");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      title="上传附件"
      open={open}
      onCancel={() => closeModal("uploadImageModal")}
      footer={null}
      centered
    >
      <Spin spinning={loading} tip="正在上传,请耐心等待">
        <Upload.Dragger
          customRequest={customRequest}
          showUploadList={false}
          onDrop={customRequest}
        >
          <>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text tw-flex tw-justify-center tw-items-center">
              将文件拖拽至此区域，也可以 &nbsp;
              <span className="tw-text-blue-500 tw-py-0.5 tw-px-1 hover:tw-bg-blue-100 tw-rounded-lg">
                点击上传
              </span>
            </p>
            <p className="ant-upload-hint">
              请上传不超过50M的JPG、JPEG、PNG、GIF、PDF文件
            </p>
          </>
        </Upload.Dragger>
      </Spin>
    </Modal>
  );
};

export default UploadImageModal;
