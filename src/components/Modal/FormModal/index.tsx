import { Form, Modal, ModalProps, Spin } from "antd";
import { ReactNode, useState } from "react";
interface FormModalProps extends ModalProps {
  form?: any;
  formProps?: any;
  children?: ReactNode;
  onCancel?: () => void;
  onFinish?: (value: any) => void;
  size?: string;
  loading: boolean;
}
export default function FormModal({
  children,
  onCancel,
  size = "default",
  form,
  onFinish,
  loading,
  formProps,
  ...exa
}: FormModalProps) {
  const onOk = () => {
    form.submit();
  };
  const bodyStyle = {};
  return (
    <Modal
      onOk={onOk}
      className="customModal"
      destroyOnClose={true}
      bodyStyle={bodyStyle}
      getContainer={false}
      onCancel={onCancel}
      centered
      okText="确定"
      cancelText="取消"
      confirmLoading={loading}
      {...exa}
    >
      <Spin spinning={loading}>
        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
          {...formProps}
        >
          {children}
        </Form>
      </Spin>
    </Modal>
  );
}
