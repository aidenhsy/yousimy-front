import { useEffect, useMemo, useState } from "react";
import { Select, AutoComplete, Input, Modal } from "antd";
// import { load } from "@amap/amap-jsapi-loader";
interface AddrInfoType {
  latitude?: number;
  longitude?: number;
  gps_range: number;
  address?: string;
}
const initAMap = async () => {
  return (await import("@amap/amap-jsapi-loader")).load({
    key: "79bb9aa81afaa3f193ae976c6f3a0d73",
    version: "2.0",
    plugins: ["AMap.PlaceSearch", "AMap.Geocoder"],
  });
};

const ModalMap: React.FC<{
  onFinish: (value: AddrInfoType) => void;
  onCancel: () => void;
  // radius: number;
  // setRadius: (value: number) => void;
}> = ({ onFinish, onCancel }) => {
  const [map, setMap] = useState<any>(null);
  const [searchData, setSearchData] = useState<any[]>([]); // 下拉搜索数据
  const [circle, setCircle] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);
  const [changeValue, setChangeValue] = useState<undefined | string>(undefined);
  const [radius, setRadius] = useState(100);
  const [saveInfo, setAddrInfo] = useState<AddrInfoType>();
  useEffect(() => {
    // 动态导入 amap-jsapi-loader
    import("@amap/amap-jsapi-loader").then((AMapLoader) => {
      // 加载 AMap JS API
      AMapLoader.default
        .load({
          key: "79bb9aa81afaa3f193ae976c6f3a0d73",
          version: "2.0",
          // securityJsCode: 'your-security-js-code',
        })
        .then((AMap) => {
          // 初始地图渲染
          const map = new AMap.Map("container", {
            zoom: 7.5,
            center: [116.397428, 40.2],
            plugins: ["AMap.PlaceSearch", "AMap.Geocoder"],
          });
          // 绑定点击事件
          map.on("click", (e: any) => handleClickMap(e, map));
          setMap(map);
        });
    });
  }, []);
  const handleClickMap = async (e: any, map: any) => {
    map.clearMap(); // 删除地图覆盖物
    // setRadius(300);
    const AMap = await initAMap();
    // 点击地图时候重新绘制
    const position = new AMap.LngLat(e.lnglat.lng, e.lnglat.lat);
    const marker = new AMap.Marker({ position });
    const geocoder = new AMap.Geocoder();
    const placeSearch = new AMap.PlaceSearch({
      pageSize: 10,
      pageIndex: 1,
    });
    // 考勤范围圆形
    const circle = new AMap.Circle({
      center: position,
      radius,
      strokeOpacity: 1,
      strokeWeight: 2,
      strokeColor: "#1890ff",
      fillOpacity: 0.4,
      fillColor: "#1890ff",
      zIndex: 50,
    });
    geocoder.getAddress(position, (status: string, result: any) => {
      if (status === "complete" && result.regeocode) {
        // 根据坐标获取当前地址信息
        const address = result.regeocode.formattedAddress;
        setAddrInfo({
          latitude: position.lat,
          longitude: position.lng,
          gps_range: radius,
          address: address,
        });
        // 根据keyword获取相关地址信息
        placeSearch.search(address, function (status: string, result: any) {
          if (status === "complete") {
            const dataSource = result.poiList.pois;
            setSearchData(
              dataSource.map((item: any) => ({
                label: (
                  <>
                    <div>{item.name}</div>
                    <div
                      style={{
                        color: "#8f959e",
                        fontSize: 12,
                        lineHeight: "22px",
                      }}
                    >
                      {item.address}
                    </div>
                  </>
                ),
                name: item.name,
                value: item.id,
                address: item.address,
                position: [item.location.lng, item.location.lat],
              }))
            );
            setChangeValue(dataSource[0].name);
          }
        });
      }
    });
    circle?.setMap(map);
    marker?.setMap(map);
    map.setFitView([circle, marker]);
    setMarker(marker);
    setCircle(circle);
  };

  const options = useMemo(
    () => [
      { label: "100米", value: 100 },
      { label: "200米", value: 200 },
      { label: "300米", value: 300 },
      { label: "400米", value: 400 },
      { label: "500米", value: 500 },
      { label: "600米", value: 600 },
      { label: "700米", value: 700 },
      { label: "800米", value: 800 },
      { label: "900米", value: 900 },
      { label: "1000米", value: 1000 },
      { label: "1500米", value: 1500 },
      { label: "2000米", value: 2000 },
      { label: "2500米", value: 2500 },
      { label: "3000米", value: 3000 },
    ],
    []
  );
  const onOk = () => {
    if (saveInfo) {
      onFinish(saveInfo);
    }
  };
  return (
    <Modal
      title="考勤地点"
      width={800}
      destroyOnClose
      open={true}
      onCancel={() => onCancel()}
      onOk={onOk}
    >
      <div style={{ position: "relative", height: 320, width: "100%" }}>
        <section
          style={{
            width: "100%",
            height: 320,
            margin: 0,
            padding: 0,
            position: "relative",
          }}
        >
          {/* 地址搜索 */}
          <AutoComplete
            style={{
              width: 240,
              position: "absolute",
              top: 20,
              left: 20,
              zIndex: 999,
            }}
            notFoundContent={null}
            options={searchData}
            value={changeValue}
            onSelect={(value, option) => {
              marker?.setMap(null);
              circle?.setMap(null);
              const position = searchData.filter(
                (one) => one.value === value
              )[0].position;
              initAMap().then((AMap) => {
                const lag = new AMap.LngLat(position[0], position[1]);
                console.log(lag);
                const marker = new AMap.Marker({ position: lag });
                const circle = new AMap.Circle({
                  center: lag,
                  radius,
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
                setMarker(marker);
                setCircle(circle);
                setChangeValue(option.name);
                setAddrInfo({
                  latitude: lag.lat,
                  longitude: lag.lng,
                  gps_range: radius,
                  address: option.name,
                });
              });
            }}
            onSearch={(value) => {
              setChangeValue(value);
              initAMap().then((AMap) => {
                // 实例化地点搜索服务插件
                const placeSearch = new AMap.PlaceSearch({
                  pageSize: 10,
                  pageIndex: 1,
                });
                placeSearch.search(
                  value,
                  function (status: string, result: any) {
                    // 根据keyword获取相关地址信息
                    // console.log(status);
                    if (status === "complete") {
                      // console.log(result);
                      setSearchData(
                        result.poiList.pois.map((item: any) => ({
                          label: (
                            <>
                              <div>{item.name}</div>
                              <div
                                style={{
                                  color: "#8f959e",
                                  fontSize: 12,
                                  lineHeight: "22px",
                                }}
                              >
                                {item.address}
                              </div>
                            </>
                          ),
                          name: item.name,
                          value: item.id,
                          address: item.address,
                          position: [item.location.lng, item.location.lat],
                        }))
                      );
                    }
                  }
                );
              });
            }}
          >
            <Input.Search allowClear size="middle" enterButton />
          </AutoComplete>
          {/* 考勤范围选择 */}
          <Select
            style={{
              minWidth: 100,
              position: "absolute",
              left: 268,
              top: 20,
              zIndex: 999,
            }}
            value={radius}
            options={options}
            onChange={(value) => {
              console.log("map is ", map);
              console.log("circle is ", circle);

              circle?.setRadius(value);
              map?.setFitView([circle]);
              setRadius(value);
              setAddrInfo({
                ...saveInfo,
                gps_range: value,
              });
            }}
          />
          <div id="container" style={{ width: 752, height: 320 }}></div>
        </section>
      </div>
    </Modal>
  );
};

export default ModalMap;
