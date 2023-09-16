import { useMemo, useState } from 'react';
import {
  ExclamationCircleOutlined,
  EyeOutlined,
  FileJpgOutlined,
  InboxOutlined,
  RestOutlined,
  SwapOutlined,
} from '@ant-design/icons';
import { Modal, Progress, Tooltip, Upload } from 'antd';
import { Dialog, ImageUploader, Toast } from 'antd-mobile';
import { useRequest } from '@/lib/hooks/restful/axios.hook';
import {
  useDeleteEmployeeAttchement,
  useEmployeeAttachment,
} from '@/hooks/employees.hooks';
interface PreImgType {
  id: string;
  file_name: string;
  path: string;
  size: string;
}

const UploadImg: React.FC<{
  onChange?: (value: any) => void;
  id?: string;
  personId: string;
  kind: string;
  maxCount?: number | undefined;
  uploadFile?: (file: any, id: string | undefined) => any;
}> = ({ onChange, id, kind, personId, maxCount = 0, uploadFile }) => {
  const [upload, setUpload] = useState(false);
  const [preImg, setPre] = useState<PreImgType>();
  const [preShow, setPreShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadLoadingShow, setUploadLoadingShow] = useState(false);

  const { employeeAttachmentData, employeeAttachmentRefetch } =
    useEmployeeAttachment({ employee_id: { _eq: personId } });
  // 删除图片
  const { deleteEmployeeAttchement } = useDeleteEmployeeAttchement();
  const { loadData } = useRequest();

  // 自定义上传
  const customRequest = async (options: any) => {
    const { file } = options;
    setUpload(false);
    setUploadLoadingShow(true);
    const { data } = await loadData({
      url: `${process.env.NEXT_PUBLIC_OPEN_URL}/upload-employee-photo`,
      method: 'POST',
      params: { id: personId, kind },
      data: { image: file },
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    if (data?.path) {
      uploadFile && (await uploadFile(file, id));
      setProgress(100);
      employeeAttachmentRefetch({
        where: { employee_id: { _eq: personId } },
      });
      setUploadLoadingShow(false);
      onChange && onChange(data.path);
    }
  };

  // 删除图片
  const handleDelete = (attachmentContents: any) => {
    const { id, file_name } = attachmentContents;
    Modal.confirm({
      content: (
        <div className="tw-flex tw-items-start">
          <ExclamationCircleOutlined className="tw-text-[#ff7d00] tw-text-lg tw-mr-2" />
          <p>您要删除的图片是{file_name}，删除后无法恢复，确认删除？</p>
        </div>
      ),
      okText: '删除',
      okButtonProps: { type: 'primary', danger: true },
      icon: null,
      centered: true,
      onOk: async () => {
        await deleteEmployeeAttchement(id);
        employeeAttachmentRefetch({
          where: { employee_id: { _eq: personId } },
        });
      },
      onCancel() {},
    });
  };

  // 获取图片信息
  const attachment: any = useMemo(
    () => employeeAttachmentData?.filter((one) => one?.kind === id)[0],
    [employeeAttachmentData]
  );

  const beforeUpload = (file: File) => {
    if (file.size > 1024 * 1024 * 50) {
      Toast.show('请选择小于 50M 的图片');
      return null;
    }
    return file;
  };
  return (
    <div className="tw-flex tw-w-full  tw-pb-2">
      {/* 手机端上传图片 */}
      <div className="sm:tw-hidden">
        <ImageUploader
          maxCount={maxCount}
          value={
            attachment?.attachmentContents?.[0]?.path
              ? [
                  {
                    url: `${process.env.NEXT_PUBLIC_OSS}/${attachment.attachmentContents[0].path}`,
                  },
                ]
              : []
          }
          onDelete={(item) => {
            const [data] = attachment?.attachmentContents.filter((one: any) =>
              item.url.includes(one.path)
            );
            return Dialog.confirm({
              content: '是否确认删除',
              onConfirm: async () => {
                await deleteEmployeeAttchement(data.id);
                employeeAttachmentRefetch({
                  where: { employee_id: { _eq: personId } },
                });
              },
            });
          }}
          upload={async (file) => {
            const { data } = await loadData({
              url: `${process.env.NEXT_PUBLIC_OPEN_URL}/upload-employee-photo`,
              method: 'POST',
              params: { id: personId, kind },
              data: { image: file },
              headers: { 'Content-Type': 'multipart/form-data' },
            });
            if (data?.path) {
              uploadFile && (await uploadFile(file, id));
              employeeAttachmentRefetch({
                where: { employee_id: { _eq: personId } },
              });
              onChange && onChange(data.path);
              return {
                url: `${process.env.NEXT_PUBLIC_OSS}/${data.path}`,
              };
            }
            return {
              url: '',
            };
          }}
          beforeUpload={beforeUpload}
        />
      </div>
      {/* PC端上传图片 */}
      <div className="xs:tw-hidden xxs:tw-hidden">
        {Boolean(attachment?.attachmentContents?.length) && (
          <div className="tw-w-full tw-flex  tw-items-center tw-justify-between  hover:cursor-pointer hover:tw-bg-gray-100 tw-py-2 tw-px-3 tw-rounded hover:tw-cursor-pointer">
            <div className="tw-flex tw-items-center tw-justify-between">
              <FileJpgOutlined style={{ color: 'orange' }} />
              <span className="tw-ml-2">
                {attachment?.attachmentContents?.[0]?.file_name}
              </span>
            </div>
            <div className="tw-flex tw-text-base tw-items-center tw-w-40">
              <Tooltip placement="top" title="预览">
                <div
                  className="tw-flex tw-items-center tw-justify-center tw-p-1 hover:tw-bg-gray-300 tw-rounded tw-ml-2  hover:tw-cursor-pointer"
                  onClick={() => {
                    setPreShow(true);
                    setPre(attachment?.attachmentContents[0]);
                  }}
                >
                  <EyeOutlined />
                </div>
              </Tooltip>
              <Tooltip placement="top" title="更换">
                <div
                  className="tw-flex tw-items-center tw-justify-center tw-p-1 hover:tw-bg-gray-300 tw-rounded tw-ml-2   hover:tw-cursor-pointer"
                  onClick={() => setUpload(true)}
                >
                  <SwapOutlined />
                </div>
              </Tooltip>
              <Tooltip placement="top" title="删除">
                <div
                  className="tw-flex tw-items-center tw-justify-center tw-p-1 hover:tw-bg-gray-300 tw-rounded tw-ml-2 hover:tw-cursor-pointer"
                  onClick={() =>
                    handleDelete(attachment?.attachmentContents?.[0])
                  }
                >
                  <RestOutlined />
                </div>
              </Tooltip>
            </div>
          </div>
        )}
        {!attachment?.attachmentContents?.length && (
          <div
            className=" tw-py-1 tw-mt-1 hover:tw-bg-blue-100 tw-rounded-lg tw-cursor-pointer hover:tw-text-blue-500 tw-w-12 tw-text-blue-500"
            onClick={() => setUpload(true)}
          >
            +&nbsp;添加
          </div>
        )}
      </div>
      {/* 上传附件 */}
      <Modal
        title="上传附件"
        open={upload}
        onCancel={() => setUpload(false)}
        footer={null}
        centered
      >
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
      </Modal>
      {/* 上传附件加载中 */}
      <Modal
        title="上传附件"
        open={uploadLoadingShow}
        onCancel={() => setUploadLoadingShow(false)}
        footer={null}
        centered
      >
        <div className="tw-relative tw-overflow-hidden tw-border-gray-200 tw-w-full tw-rounded tw-h-10 tw-border tw-border-solid">
          <div className="tw-flex tw-items-center tw-h-full">
            <FileJpgOutlined
              style={{ color: 'orange' }}
              className="tw-ml-3 tw-mr-2"
            />
            <span>上传中...</span>
          </div>
          <Progress
            percent={progress}
            showInfo={false}
            size="small"
            strokeLinecap="butt"
            strokeColor="#116dfa"
            className="tw-absolute tw-bottom-[-15px] tw-w-full"
          />
        </div>
      </Modal>
      <Modal
        width={800}
        closable={false}
        onCancel={() => setPreShow(false)}
        open={preShow}
        footer={null}
      >
        <div className="tw-w-full tw-h-full tw-bg-[#f0f1f3] tw-relative">
          <div className="imgDiv tw-w-full tw-h-full tw-overflow-hidden tw-relative">
            <img
              className="tw-w-full tw-h-full"
              src={`${process.env.NEXT_PUBLIC_OSS}/${preImg?.path}`}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UploadImg;
