import { Employees } from "@/graphql/__generated__/graphql";
import { StatusMap } from "@/lib/mapping";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";

const InsuranceColumns = (): ColumnsType<any> => {
  return [
    {
      title: "姓名",
      width: 200,
      dataIndex: "employee",
      key: "employee",
      fixed: "left",
      render: (val: any) => (
        <div>
          {val?.avatar ? (
            <Avatar src={<img src={val?.avatar} alt="avatar" />} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
          <span className="tw-ml-2">{val?.name}</span>
        </div>
      ),
    },
    {
      title: "企业采暖",
      dataIndex: "corp_heating",
    },
    {
      title: "企业住房公积金",
      dataIndex: "corp_housing_fund",
    },
    {
      title: "企业大额医疗",
      dataIndex: "corp_major_medical",
    },
    {
      title: "企业生育保险",
      dataIndex: "corp_maternity_insurance",
    },
    {
      title: "企业医疗保险",
      dataIndex: "corp_medical_insurance",
    },
    {
      title: "公司应缴",
      dataIndex: "corp_pay",
    },
    {
      title: "企业养老保险",
      dataIndex: "corp_retirement_insurance",
    },
    {
      title: "企业失业保险",
      dataIndex: "corp_unemployment_insurance",
    },
    {
      title: "企业工伤保险",
      dataIndex: "corp_work_injury",
    },
    {
      title: "采暖基数",
      dataIndex: "heating_base",
    },
    {
      title: "医疗基数",
      dataIndex: "medical_base",
    },
    {
      title: "养老基数",
      dataIndex: "pension_base",
    },
    {
      title: "个人公积金差额",
      dataIndex: "personal_fund_balance",
    },
    {
      title: "个人住房公积金",
      dataIndex: "personal_housing_fund",
    },
    {
      title: "个人大病险",
      dataIndex: "personal_major_medical",
    },
    {
      title: "个人医疗保险",
      dataIndex: "personal_medical_insurance",
    },
    {
      title: "个人应缴",
      dataIndex: "personal_pay",
    },
    {
      title: "个人养老保险",
      dataIndex: "personal_pension_insurance",
    },
    {
      title: "个人失业保险",
      dataIndex: "personal_unemployment_insurance",
    },
    {
      title: "失业基数",
      dataIndex: "unemployment_base",
    },
    {
      title: "工伤基数",
      dataIndex: "work_injury_base",
    },
  ];
};

export default InsuranceColumns;
