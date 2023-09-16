import { useRef, useState } from "react";
import React from "react";
//antd
import { Button, Carousel, Divider, Input, Modal, Select, Tabs } from "antd";
import { LeftOutlined } from "@ant-design/icons";
//types
import type { TabsProps } from "antd";
//components
import Another from "./Another";
import Code from "./Code";
//lib
import { useInterval } from "@/lib/hooks/useInterval";
//hook
import { verifyPhone } from "../../lib/hooks/restful/login.hook";
import { useRequest } from "@/lib/hooks/restful/axios.hook";

export default function IndexPc() {
  //state
  const [phoneNumber, setPhone] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [second, setSecond] = useState(0);
  const [country, setcountry] = useState("+86 ");
  const [tabIndex, setTabIndex] = useState("1");
  //hooks
  const { loadData, loading } = useRequest();
  //ref
  const carRef = useRef<any>();
  // 设置手机号
  const onPhoneChange = (event: any) => {
    if (/^\d*$/.test(event.target.value)) {
      setPhone(event.target.value);
    }
  };
  //   手机下一步
  const onPhoneNext = async () => {
    try {
      await loadData(verifyPhone({ phoneNumber: country + phoneNumber }));
      carRef.current.goTo(1);
      setSecond(60);
    } catch (error) {
      Modal.info({
        title: "提示",
        content: "该手机未绑定任何账号",
      });
    } finally {
    }
  };
  // 手机发送验证码  从新发送
  const reSend = async () => {
    try {
      await loadData(verifyPhone({ phoneNumber: country + phoneNumber }));
      setSecond(60);
    } catch (error) {
      Modal.info({
        title: "提示",
        content: "该手机未绑定任何账号",
      });
    }
  };
  // 邮箱下一步
  const onEmailNext = () => {
    carRef.current.goTo(2);
  };
  // tabs items
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `手机号`,
      children: (
        <div>
          <Input
            placeholder="请输入您的手机号"
            value={phoneNumber || ""}
            onChange={onPhoneChange}
            addonBefore={
              <Select
                defaultValue="+86 "
                onChange={(val) => setcountry(val)}
                value={country}
              >
                <Select.Option value="+86 ">+86 中国</Select.Option>
                <Select.Option value="00886 ">00886 台湾</Select.Option>
              </Select>
            }
            allowClear
          />
        </div>
      ),
    },
    {
      key: "2",
      label: `邮箱`,
      children: (
        <div>
          <Input
            allowClear
            placeholder="请输入您的邮箱"
            value={email || ""}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      ),
    },
  ];
  // 倒计时
  useInterval(() => setSecond(second - 1), 1000, second === 0);
  // tabs 切换
  const onTabChange = (val: any) => {
    setTabIndex(val);
  };
  // 点击下一步
  const onNext = () => {
    if (tabIndex === "1") {
      onPhoneNext();
    } else {
      onEmailNext();
    }
  };
  return (
    <div className="tw-h-screen tw-w-full tw-relative tw-flex tw-bg-gradient-to-r tw-from-purple-500 tw-to-pink-500">
      <div className="tw-text-[#fff] tw-w-1/2 tw-h-screen tw-flex tw-flex-col tw-items-center tw-justify-center">
        <p className="tw-w-56 tw-text-4xl tw-font-semibold tw-pb-2">
          优思管理后台
        </p>
        <p className="tw-w-56">登陆</p>
      </div>
      <div className="tw-absolute  tw-top-40 tw-right-40 tw-bg-[#fff] tw-w-[450px] tw-rounded tw-px-10 tw-py-8 tw-box-border">
        <Carousel ref={carRef} dots={false}>
          <div>
            <p className="tw-tracking-wider tw-text-2xl tw-font-medium">登陆</p>
            <Tabs defaultActiveKey="1" items={items} onChange={onTabChange} />
            <div className="tw-text-right tw-mt-4 tw-flex tw-justify-between">
              <p className="tw-text-[#f40] tw-text-xs">
                {phoneNumber !== null &&
                  !/^1[3-9]\d{9}$/.test(phoneNumber) &&
                  tabIndex === "1" &&
                  "手机号码格式错误"}
                {email !== null &&
                  !/^\w+@[a-z0-9]+.[a-z]{2,}$/.test(email) &&
                  tabIndex === "2" &&
                  "邮箱格式错误"}
              </p>
              <Button
                type="primary"
                onClick={onNext}
                loading={loading}
                disabled={
                  tabIndex === "1"
                    ? !/^1[3-9]\d{9}$/.test(phoneNumber || "")
                    : !/^\w+@[a-z0-9]+.[a-z]{2,}$/.test(email || "")
                }
              >
                下一步
              </Button>
            </div>
            <Divider plain={true}>
              <span className="tw-text-gray-400">或者</span>
            </Divider>
            <Another />
          </div>
          {/* 手机验证码 */}
          <div>
            <Code
              second={second}
              goBack={() => carRef.current.goTo(0)}
              phoneNumber={country + phoneNumber}
              reSend={reSend}
            />
          </div>
          <div>
            <div
              onClick={() => carRef.current.goTo(0)}
              className="tw-cursor-pointer hover:tw-bg-gray-100 tw-inline-block tw-px-1 tw-py-[1px] tw-text-sm tw-rounded active:tw-bg-gray-200 tw-select-none"
            >
              <LeftOutlined />
              返回
            </div>
            邮箱业务开发中。。。
          </div>
        </Carousel>
      </div>
    </div>
  );
}
