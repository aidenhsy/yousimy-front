import { useState } from 'react';
//components
import {
  CloseOutlined,
  DownloadOutlined,
  ExclamationCircleOutlined,
  EyeOutlined,
  FileJpgOutlined,
  InboxOutlined,
  OneToOneOutlined,
  RestOutlined,
  SwapOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { Drawer, Modal, Progress, Tooltip, Upload } from 'antd';
//hooks
import { downFile, uploadFile } from '@/lib/hooks/restful/file.hook';
import { useRequest } from '@/lib/hooks/restful/axios.hook';
import {
  useDeleteEmployeeAttchement,
  useEmployeeAttachment,
} from '@/hooks/employees.hooks';
interface employeeAttachmentDataProps {
  personId: string;
}
interface UploadTempType {
  key?: string;
  kind: string;
  isMulti?: boolean; //是否多选
}
interface PreImgType {
  id: string;
  file_name: string;
  path: string;
  size: string;
}
export default function employeeAttachmentData({
  personId,
}: employeeAttachmentDataProps) {
  //state
  const [uploadTemp, setUploadTemp] = useState<UploadTempType>();
  const [preImg, setPre] = useState<PreImgType>();
  const [progress, setProgress] = useState(0);
  const [imgOption, setImgOption] = useState({
    rotate: 0, //旋转
    scale: 1, //放大缩小
    x: 50, //拖拽
    y: 50, //拖拽
  });
  //modal
  const [upload, setUpload] = useState(false);
  const [preShow, setPreShow] = useState(false);
  const [uploadLoadingShow, setUploadLoadingShow] = useState(false);

  //hooks
  const { employeeAttachmentData, employeeAttachmentRefetch } =
    useEmployeeAttachment({ employee_id: { _eq: personId } });

  const { deleteEmployeeAttchement } = useDeleteEmployeeAttchement();
  const { loadData, loading } = useRequest();
  // 上传图片
  const uploadFun = ({ kind }: UploadTempType) => {
    setUploadTemp({
      kind,
    });
    setUpload(true);
  };
  // 预览图片
  const onPre = (val: any) => {
    setPreShow(true);
    setPre(val);
  };
  // 下载图片
  const down = (path?: string) => {
    if (!path) return;
    downFile(path);
  };
  // 删除图片
  const onDelete = (id: string, name: string) => {
    Modal.confirm({
      content: (
        <div className="tw-flex tw-items-start">
          <ExclamationCircleOutlined className="tw-text-[#ff7d00] tw-text-lg tw-mr-2" />
          <p>您要删除的图片是{name}，删除后无法恢复，确认删除？</p>
        </div>
      ),
      okText: '删除',
      okButtonProps: { type: 'primary', danger: true },
      icon: null,
      centered: true,
      onOk: async () => {
        await deleteEmployeeAttchement({
          id: {
            _eq: id,
          },
        });
        employeeAttachmentRefetch({
          where: { employee_id: { _eq: personId } },
        });
      },
      onCancel() {},
    });
  };
  //自定义上传
  const customRequest = async (options: any) => {
    const { file } = options;
    setUpload(false);
    setUploadLoadingShow(true);
    try {
      let { data } = await loadData(
        uploadFile({
          query: { id: personId, kind: uploadTemp?.kind },
          body: { image: file },
        })
      );
      setProgress(100);
      employeeAttachmentRefetch({
        where: { employee_id: { _eq: personId } },
      });
      setTimeout(() => {
        setUploadLoadingShow(false);
      }, 1500);
    } catch (error) {}
  };
  // 图片放大
  const onZoomInOut = () => {
    setImgOption({ ...imgOption, scale: imgOption.scale + 0.1 });
  };
  // 图片缩小
  const onZoomOutOut = () => {
    setImgOption({ ...imgOption, scale: imgOption.scale - 0.1 });
  };
  //图片旋转
  const OnZoomRotate = () => {
    setImgOption({ ...imgOption, rotate: imgOption.rotate - 45 });
  };
  // 图片1:1
  const onOneToOne = () => {
    setImgOption({ ...imgOption, scale: 1, x: 50, y: 50 });
  };
  // 图片拖拽
  const onImgDrop = (event: any) => {
    event.preventDefault();
    let disx = event.pageX;
    let disy = event.pageY;
    document.onmousemove = (e: MouseEvent) => {
      setImgOption({
        ...imgOption,
        x:
          50 +
          ((e.pageX - disx) / event.target?.offsetParent.offsetWidth) * 100,
        y:
          50 +
          ((e.pageY - disy) / event.target?.offsetParent.offsetHeight) * 100,
      });
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmousedown = null;
    };
  };
  return (
    <div>
      {employeeAttachmentData?.map((el: any) => {
        return (
          <div key={el.key} className="tw-flex tw-w-full  tw-pb-2">
            <span
              className="tw-text-[#646a73] tw-font-normal tw-text-sm tw-w-1/5  leading-10"
              style={{ lineHeight: '40px' }}
            >
              {el.name}
            </span>
            <div className="tw-w-4/5">
              {el.attachmentContents?.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className="tw-w-full tw-flex  tw-items-center tw-justify-between  hover:cursor-pointer hover:tw-bg-gray-100 tw-py-2 tw-px-3 tw-rounded hover:tw-cursor-pointer"
                  >
                    <div className="tw-flex tw-items-center tw-justify-between">
                      <FileJpgOutlined style={{ color: 'orange' }} />
                      <span className="tw-ml-2">{item.file_name}</span>
                    </div>
                    <div className="tw-flex tw-text-base tw-items-center tw-w-40">
                      {!el.isMulti && (
                        <Tooltip placement="top" title="重新上传">
                          <div
                            className="tw-flex tw-items-center tw-justify-center tw-p-1 hover:tw-bg-gray-300 tw-ml-2  tw-rounded hover:tw-cursor-pointer"
                            onClick={() =>
                              uploadFun?.({
                                kind: el.kind,
                              })
                            }
                          >
                            <SwapOutlined />
                          </div>
                        </Tooltip>
                      )}

                      <Tooltip placement="top" title="预览">
                        <div
                          className="tw-flex tw-items-center tw-justify-center tw-p-1 hover:tw-bg-gray-300 tw-rounded tw-ml-2  hover:tw-cursor-pointer"
                          onClick={() => onPre?.(item)}
                        >
                          <EyeOutlined />
                        </div>
                      </Tooltip>
                      <Tooltip placement="top" title="下载">
                        <div
                          className="tw-flex tw-items-center tw-justify-center tw-p-1 hover:tw-bg-gray-300 tw-rounded tw-ml-2   hover:tw-cursor-pointer"
                          onClick={() => down(item.path)}
                        >
                          <DownloadOutlined />
                        </div>
                      </Tooltip>
                      <Tooltip placement="top" title="删除">
                        <div
                          className="tw-flex tw-items-center tw-justify-center tw-p-1 hover:tw-bg-gray-300 tw-rounded tw-ml-2 hover:tw-cursor-pointer"
                          onClick={() => onDelete(item.id, item.file_name)}
                        >
                          <RestOutlined />
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                );
              })}
              {(el.isMulti || el.attachmentContents?.length <= 0) && (
                <div
                  className=" tw-ml-3 tw-px-2 tw-py-1 tw-mt-1 hover:tw-bg-blue-100 tw-rounded-lg tw-cursor-pointer hover:tw-text-blue-500 tw-w-12 tw-text-blue-500"
                  onClick={() =>
                    uploadFun({
                      kind: el.kind,
                    })
                  }
                >
                  +&nbsp;添加
                </div>
              )}
            </div>
          </div>
        );
      })}
      {/* 图片预览 */}
      {preShow && (
        <Drawer
          width={800}
          className="preImg"
          title={
            <div className="tw-flex tw-items-center">
              <div
                className="tw-py-1 tw-px-2 tw-flex hover:tw-bg-gray-200 tw-rounded tw-cursor-pointer"
                onClick={() => setPreShow(false)}
              >
                <CloseOutlined />
                <span className="tw-ml-2 tw-font-normal tw-text-gray-600">
                  退出
                </span>
              </div>
              <div className="tw-h-8 tw-w-[1px] tw-bg-slate-300 tw-mx-3"></div>
              <FileJpgOutlined style={{ color: 'orange', fontSize: 30 }} />
              <p className="tw-ml-2 tw-font-normal tw-text-gray-600">
                {preImg?.file_name}
              </p>
              <DownloadOutlined
                className="tw-ml-auto tw-text-lg"
                onClick={() => down(preImg?.path)}
              />
            </div>
          }
          closable={false}
          placement="right"
          onClose={() => setPreShow(false)}
          open={preShow}
        >
          <div
            className="tw-w-full tw-h-full tw-bg-[#f0f1f3] tw-relative"
            style={{ userSelect: 'none' }}
          >
            <div className="imgDiv tw-w-full tw-h-full tw-overflow-hidden tw-relative">
              <img
                draggable
                onMouseDown={(event: any) => onImgDrop(event)}
                src={process.env.NEXT_PUBLIC_OSS + '/' + preImg?.path}
                className="tw-w-auto tw-h-auto tw-max-w-[100%] tw-max-h-[100%] tw-absolute hover:tw-cursor-pointer"
                style={{
                  transform: `translate(-50%,-50%) rotate(${imgOption.rotate}deg) scale(${imgOption.scale},${imgOption.scale}) `,
                  left: imgOption.x + '%',
                  top: imgOption.y + '%',
                }}
              />
            </div>

            <div className="tw-absolute tw-bottom-10 tw-left-1/3 tw-w-1/3 tw-h-10 tw-bg-[#ffffff] tw-rounded tw-flex tw-items-center tw-justify-evenly">
              <Tooltip placement="top" title="放大">
                <div
                  className="tw-w-7 tw-h-7 tw-flex tw-items-center tw-justify-center hover:tw-bg-gray-300 tw-rounded hover:tw-cursor-pointer tw-text-lg"
                  onClick={onZoomInOut}
                >
                  <ZoomInOutlined />
                </div>
              </Tooltip>
              <Tooltip placement="top" title="缩小">
                <div
                  className="tw-w-7 tw-h-7 tw-flex tw-items-center tw-justify-center hover:tw-bg-gray-300 tw-rounded hover:tw-cursor-pointer tw-text-lg"
                  onClick={onZoomOutOut}
                >
                  <ZoomOutOutlined />
                </div>
              </Tooltip>
              <Tooltip placement="top" title="旋转">
                <div
                  className="tw-w-7 tw-h-7 tw-flex tw-items-center tw-justify-center hover:tw-bg-gray-300 tw-rounded hover:tw-cursor-pointer tw-text-lg"
                  onClick={OnZoomRotate}
                >
                  <UndoOutlined />
                </div>
              </Tooltip>
              <Tooltip placement="top" title="1:1">
                <div
                  className="tw-w-7 tw-h-7 tw-flex tw-items-center tw-justify-center hover:tw-bg-gray-300 tw-rounded hover:tw-cursor-pointer tw-text-lg"
                  onClick={onOneToOne}
                >
                  <OneToOneOutlined />
                </div>
              </Tooltip>
              <Tooltip placement="top" title="下载">
                <div
                  className="tw-w-7 tw-h-7 tw-flex tw-items-center tw-justify-center hover:tw-bg-gray-300 tw-rounded hover:tw-cursor-pointer tw-text-lg"
                  onClick={() => down(preImg?.path)}
                >
                  <DownloadOutlined />
                </div>
              </Tooltip>
            </div>
          </div>
        </Drawer>
      )}
      {/* 上传附件 */}
      {upload && (
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
      )}
      {/* 上传附件加载中 */}
      {uploadLoadingShow && (
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
      )}
    </div>
  );
}
