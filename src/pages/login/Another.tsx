import { FEISHU_LOGIN_URL } from "@/config/constants";
import {
  AlipayCircleOutlined,
  DingtalkOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function Another() {
  return (
    <div className="tw-mt-10">
      <Link
        href={FEISHU_LOGIN_URL}
        className="tw-select-none tw-rounded-full tw-h-10 tw-overflow-hidden tw-mb-6 tw-flex tw-items-center tw-justify-center tw-cursor-pointer tw-bg-[#000000]  tw-text-[#fff] hover:tw-bg-[#353434] active:tw-bg-[#000000]"
      >
        <DingtalkOutlined />
        &nbsp;飞书登陆
      </Link>
      <div className="tw-select-none tw-rounded-full tw-h-10 tw-overflow-hidden tw-mb-6 tw-flex tw-items-center tw-justify-center tw-cursor-pointer tw-border-solid tw-border-[#eee] hover:tw-bg-[#f7f6f6] active:tw-bg-[#fff]">
        <WechatOutlined />
        &nbsp;微信登陆
      </div>
      <div className="tw-select-none tw-rounded-full tw-h-10 tw-overflow-hidden tw-mb-6 tw-flex tw-items-center tw-justify-center tw-cursor-pointer tw-bg-[#156cef]  tw-text-[#fff] hover:tw-bg-[#1365e2] active:tw-bg-[#1254ba]">
        <AlipayCircleOutlined />
        &nbsp;支付宝登陆
      </div>
    </div>
  );
}
