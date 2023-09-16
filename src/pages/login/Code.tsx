import { forwardRef, useImperativeHandle, useRef, useState } from "react";
//api
import { verifyCode } from "@/lib/hooks/restful/login.hook";
//antd
import { Button, Modal } from "antd";
import { LeftOutlined } from "@ant-design/icons";
//lib
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useRequest } from "@/lib/hooks/restful/axios.hook";
interface CodeProps {
  goBack?: () => void; //返回上一页
  phoneNumber: string; //电话号
  second: number; //读秒
  reSend: () => void; //从新发送验证码
}
interface RefType {
  inputFocus: () => void;
}
const Code = ({ goBack, phoneNumber, second, reSend }: CodeProps) => {
  const inputRefs = useRef<any>([]);
  const [verificationCode, setVerificationCode] = useState("");
  //state
  // 倒计时
  //router
  const router = useRouter();
  //hooks
  const { loadData, loading } = useRequest();
  const handleInputChange = (e: any, index: number) => {
    const { value } = e.target;
    setVerificationCode(value);

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleInputFocus = (index: any) => {
    if (index > 0 && verificationCode.length === index) {
      inputRefs.current[index - 1].focus();
    }
  };
  const handleInputDelete = (e: any, index: number) => {
    if (e.keyCode === 8 && inputRefs.current[index].value === "") {
      console.log(inputRefs.current[index].value);
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };
  // 登陆
  const onLogin = async () => {
    try {
      let data = await loadData(
        verifyCode({
          phoneNumber: phoneNumber,
          verificationCode: inputRefs.current
            .map((item: any) => item.value)
            .join(""),
        })
      );
      setCookie("access_token", data.data);
      router.push("/dashboard");
    } catch (error) {
      Modal.info({
        title: "提示",
        content: "验证码错误",
      });
    } finally {
    }
  };
  function goBackFn() {
    goBack?.();
  }
  return (
    <>
      <div
        onClick={goBackFn}
        className="tw-cursor-pointer hover:tw-bg-gray-100 tw-inline-block tw-px-1 tw-py-[1px] tw-text-sm tw-rounded active:tw-bg-gray-200 tw-select-none"
      >
        <LeftOutlined />
        返回
      </div>
      <h2 className="tw-mt-4">输入手机号验证码</h2>
      <p className="tw-text-sm tw-text-[#999] tw-mt-2 tw-h-10">
        请输入发送至
        <span className="tw-text-[#333] tw-font-medium">
          {/* {phoneNumber?.replace(/(1\d{2})(\d{6})(\d{2})/gi, "$1******$3")} */}
          {phoneNumber}
          &nbsp;
        </span>
        的 6 位验证码，有效期10分钟
      </p>
      <div className="tw-flex tw-items-center tw-justify-between tw-mt-4">
        {[0, 1, 2, 3, 4, 5].map((item, index) => {
          return (
            <input
              type="tel"
              inputMode="numeric"
              onFocus={() => handleInputFocus(index)}
              key={item}
              maxLength={1}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleInputDelete(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="tw-w-4 tw-h-6 tw-rounded tw-border-solid tw-border-[#999] tw-text-center"
            />
          );
        })}
      </div>
      {second > 0 && (
        <p className="tw-text-sm tw-text-[#999] tw-mt-4">
          {second}秒后可以重新获取验证码
        </p>
      )}
      {second === 0 && (
        <Button className="tw-mt-4" onClick={reSend}>
          重新获取验证码
        </Button>
      )}

      <Button
        type="primary"
        size="large"
        block
        className="tw-mt-56"
        disabled={false}
        onClick={onLogin}
        loading={loading}
      >
        登陆
      </Button>
    </>
  );
};

export default Code;
