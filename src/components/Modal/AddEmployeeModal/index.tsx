import { useModalStore } from "@/store/modalStore";
import { Form, Modal, Steps } from "antd";
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

interface AddEmployeeModalProps {
  open: boolean;
  userId: string;
  feishuOption: any;
}

const AddEmployeeModal: React.FC<AddEmployeeModalProps> = ({
  open,
  userId,
  feishuOption,
}) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const [form] = Form.useForm();

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const clearCurrent = () => {
    setCurrent(0);
  };
  const steps = [
    {
      title: "填写姓名和电话",
      content: <Step1 next={next} clearCurrent={clearCurrent} />,
    },
    {
      title: "填写基本信息",
      content: (
        <Step2
          clearCurrent={clearCurrent}
          userId={userId}
          feishuOption={feishuOption}
        />
      ),
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <Modal
      onCancel={() => {
        form.resetFields();
        closeModal("addEmployeeModal");
      }}
      open={open}
      closable={false}
      maskClosable={false}
      keyboard={false}
      footer={false}
      width={600}
      destroyOnClose
    >
      <Steps current={current} items={items} />
      <div>{steps[current].content}</div>
    </Modal>
  );
};

export default AddEmployeeModal;
