import { useEffect } from "react";
import { Modal, Descriptions } from "antd";
// import { load } from "@amap/amap-jsapi-loader";
interface AddrInfoType {
  latitude?: number;
  longitude?: number;
  gps_range: number;
  address?: string;
  name?: string;
}
interface MapDetailProps {
  onCancel: () => void;
  detail?: AddrInfoType;
}
export default function MapDetail({ onCancel, detail }: MapDetailProps) {
  useEffect(() => {
    // 动态导入 amap-jsapi-loader
    import("@amap/amap-jsapi-loader").then((AMapLoader) => {
      // 加载 AMap JS API
      AMapLoader.default
        .load({
          key: "5631d0afc29babb1be8bab1f9c945850",
          version: "2.0",
        })
        .then((AMap) => {
          // 初始地图渲染
          const map = new AMap.Map("container", {
            zoom: 7.5,
            center: [detail?.latitude, detail?.longitude],
            plugins: ["AMap.PlaceSearch", "AMap.Geocoder"],
          });
          // 点击地图时候重新绘制
          const position = new AMap.LngLat(detail?.longitude, detail?.latitude);
          const marker = new AMap.Marker({ position });
          // 考勤范围圆形
          const circle = new AMap.Circle({
            center: position,
            radius: detail?.gps_range,
            strokeOpacity: 1,
            strokeWeight: 2,
            strokeColor: "#1890ff",
            fillOpacity: 0.4,
            fillColor: "#1890ff",
            zIndex: 50,
          });
          circle?.setMap(map);
          marker?.setMap(map);
          map.setFitView([circle, marker]);
        });
    });
  }, []);
  return (
    <Modal
      title="考勤地点"
      width={800}
      destroyOnClose
      open={true}
      footer={null}
      onCancel={onCancel}
      centered
    >
      <div className="tw-relative tw-w-full">
        <section className="tw-w-full tw-m-0 tw-p-0 tw-relative">
          <div
            className="tw-mb-4"
            id="container"
            style={{ width: 752, height: 320 }}
          ></div>
          <Descriptions column={1}>
            <Descriptions.Item label="考勤详细地址">
              {detail?.address}
            </Descriptions.Item>
            <Descriptions.Item label="经纬度坐标">
              {detail?.latitude}, {detail?.longitude}
            </Descriptions.Item>
            <Descriptions.Item label="有效范围">
              {detail?.gps_range}米
            </Descriptions.Item>
            <Descriptions.Item label="考勤地点名称">
              {detail?.name}
            </Descriptions.Item>
          </Descriptions>
        </section>
      </div>
    </Modal>
  );
}
