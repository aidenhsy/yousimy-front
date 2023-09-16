import { Modal, Steps } from "antd";

import { useEffect, useRef } from "react";

interface AttendanceMapProps {
  open?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}
export default function AttendanceMap({
  open,
  onOk,
  onCancel,
}: AttendanceMapProps) {
  const items = [
    {
      title: "Finished",
    },
    {
      title: "In Progress",
    },
  ];
  useEffect(() => {
    window._AMapSecurityConfig = {
      securityJsCode: "231812b0edf2982580f4734250b59bbe",
    };
    if (typeof window !== undefined) {
      import("@amap/amap-jsapi-loader").then((AMapLoader) => {
        AMapLoader.load({
          key: "2117fc4e5c7774c25fc4acb3ae1d618f", // 申请好的Web端开发者Key，首次调用 load 时必填
          version: "2.0", // 指定要加载的 JS API 的版本，缺省时默认为 1.4.15
          plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        }).then((AMap) => {
          new AMap.Map("myMap");
        });
      });
    }
    // init();
  }, []);
  return (
    <Modal
      title="考勤地点"
      open={open}
      onOk={onOk}
      centered
      onCancel={onCancel}
      width={800}
    >
      <Steps current={0} labelPlacement="vertical" items={items} />
      <div id="myMap" style={{ width: "100%", height: "400px" }}></div>
      {/* <Map /> */}
    </Modal>
  );
}
