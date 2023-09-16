import { useRequest } from "@/lib/hooks/restful/axios.hook";
import { verifyCode, verifyPhone } from "@/lib/hooks/restful/login.hook";
import { useInterval } from "@/lib/hooks/useInterval";
import { LeftOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
interface RouterQuery {
  phone: string;
}
export default function Code() {
  const [second, setSecond] = useState(0);
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<any>([]);
  const [verificationCode, setVerificationCode] = useState("");

  const router = useRouter();
  //hooks
  const { loadData, loading } = useRequest();
  const { phone } = router.query as unknown as RouterQuery;
  // 倒计时
  useInterval(() => setSecond(second - 1), 1000, second === 0);
  // 返回上一页  清空输入框
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
  // 手机发送验证码  从新发送
  const reSend = async () => {
    try {
      await loadData(verifyPhone({ phoneNumber: phone }));
      setSecond(60);
    } catch (error) {
      Modal.info({
        title: "提示",
        content: "发送失败",
      });
    }
  };
  // 登陆
  const onLogin = async () => {
    try {
      let data = await loadData(
        verifyCode({
          phoneNumber: phone,
          verificationCode: inputRefs.current
            .map((item: any) => item.value)
            .join(""),
        })
      );
      setCookie("access_token", data.data);
      router.back();
    } catch (error) {
      Modal.info({
        title: "提示",
        content: "验证码错误",
      });
    } finally {
    }
  };
  return (
    <div className="tw-p-10">
      <h2 className="tw-mt-4">输入手机号验证码</h2>
      <p className="tw-text-sm tw-text-[#999] tw-mt-2 tw-h-10">
        请输入发送至
        <span className="tw-text-[#333] tw-font-medium">
          {router.query.phone}&nbsp;
        </span>
        的 6 位验证码，有效期10分钟
      </p>
      <div className="tw-flex tw-items-center tw-justify-between tw-mt-4">
        {[0, 1, 2, 3, 4, 5].map((item, index, arr) => {
          return (
            <input
              autoFocus={item === 0}
              type="tel"
              inputMode="numeric"
              onFocus={() => handleInputFocus(index)}
              key={item}
              maxLength={1}
              onKeyDown={(e) => handleInputDelete(e, index)}
              onChange={(e) => handleInputChange(e, index)}
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
        onClick={onLogin}
        loading={loading}
      >
        登陆
      </Button>
    </div>
  );
}
