import { useRef, useState } from "react";
import React from "react";
//antd
import { Button, Divider, Input, Modal, Select, Tabs } from "antd";
//types
import type { TabsProps } from "antd";
//components
import Another from "./Another";
//hook
import { verifyPhone } from "../../lib/hooks/restful/login.hook";
import { useRouter } from "next/router";
import { useRequest } from "@/lib/hooks/restful/axios.hook";
export default function index() {
  //state
  const [phoneNumber, setPhone] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [country, setcountry] = useState("+86 ");
  const [tabIndex, setTabIndex] = useState("1");

  const router = useRouter();
  //ref
  const carRef = useRef<any>();
  //hooks
  const { loadData, loading } = useRequest();
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
      router.push(`/login/code/${country + phoneNumber}`);
    } catch (error) {
      Modal.info({
        title: "提示",
        content: "该手机未绑定任何账号, 请先注册账号",
      });
    } finally {
    }
  };
  // 邮箱下一步
  const onEmailNext = () => {
    // carRef.current.goTo(2);
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
    <div className="tw-p-10">
      <p className="tw-tracking-wider tw-text-2xl tw-font-medium">登陆</p>
      {/* 登陆 */}
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
      <div className="tw-w-full tw-h-[1px] tw-bg-gray-400">
        <div
          className="tw-text-center tw-text-gray-400 tw-pt-5"
          onClick={() => router.push("/register")}
        >
          注册
        </div>
      </div>
    </div>
  );
}
