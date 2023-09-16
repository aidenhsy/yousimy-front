import { Employees } from "@/graphql/__generated__/graphql";
import { StatusMap } from "@/lib/mapping";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";

const summaryColumns = (): ColumnsType<any> => {
  return [
    {
      title: "姓名",
      width: 200,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (val: any, record: Employees) => (
        <div style={{ cursor: "pointer" }}>
          {record?.avatar ? (
            <Avatar src={<img src={record.avatar} alt="avatar" />} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
          <span className="tw-ml-2">{val}</span>
        </div>
      ),
    },
    {
      title: "部门",
      dataIndex: "department",
      key: "department",
      render: (val: any) => <span>{val.name}</span>,
    },
    {
      title: "人员状态",
      dataIndex: "status",
      key: "status",
      render: (val) => {
        return val ? StatusMap[val] : "-";
      },
    },
    {
      title: "薪资类型",
      dataIndex: "salary_type",
      key: "salary_type",
    },
    {
      title: "实际出勤时长",
      dataIndex: "attendances_aggregate",
      key: "attendances_aggregate",
      render: (val, record) => {
        if (record.salary_type === "时薪") {
          return `${val.aggregate.sum.actual_length_hour} 小时`;
        } else {
          return `${val.aggregate.sum.actual_length_day} 天`;
        }
      },
    },
    // {
    //   title: "银行名称",
    //   dataIndex: "bank_name",
    //   key: "bank_name",
    // },
    // {
    //   title: "银行卡号码",
    //   dataIndex: "bank_account_number",
    //   key: "bank_account_number",
    // },
    // {
    //   title: "月薪固定额",
    //   dataIndex: "basic_salary_monthly",
    //   key: "basic_salary_monthly",
    // },
    // {
    //   title: "基本工资基数",
    //   dataIndex: "salary_type",
    //   key: "salary_type",
    // },
    // {
    //   title: "工龄金额",
    //   dataIndex: "salary_type",
    //   key: "salary_type",
    // },
    // {
    //   title: "绩效",
    //   dataIndex: "performance",
    //   key: "performance",
    // },
    // {
    //   title: "法定节假日",
    //   dataIndex: "statutory_holiday",
    //   key: "statutory_holiday",
    // },
    // {
    //   title: "其他补助",
    //   dataIndex: "other_subsidies",
    //   key: "other_subsidies",
    // },
    // {
    //   title: "投诉",
    //   dataIndex: "complaint",
    //   key: "complaint",
    // },
    // {
    //   title: "考勤扣款",
    //   dataIndex: "attendance_deduction",
    //   key: "attendance_deduction",
    // },
    // {
    //   title: "无薪假扣款",
    //   dataIndex: "deductions_for_unpaid_leave",
    //   key: "deductions_for_unpaid_leave",
    // },
    // {
    //   title: "其他扣款",
    //   dataIndex: "other_deductions",
    //   key: "other_deductions",
    // },
    // {
    //   title: "应发工资",
    //   dataIndex: "salary_type",
    //   key: "salary_type",
    // },
    // {
    //   title: "个人养老保险",
    //   dataIndex: ["employee_insurances", "0", "personal_pension_insurance"],
    //   key: "personal_pension_insurance",
    // },
    // {
    //   title: "个人医疗保险",
    //   dataIndex: ["employee_insurances", "0", "personal_medical_insurance"],
    //   key: "personal_medical_insurance",
    // },
    // {
    //   title: "个人失业保险",
    //   dataIndex: [
    //     "employee_insurances",
    //     "0",
    //     "personal_unemployment_insurance",
    //   ],
    //   key: "personal_unemployment_insurance",
    // },
    // {
    //   title: "个人大病险",
    //   dataIndex: ["employee_insurances", "0", "personal_major_medical"],
    //   key: "personal_major_medical",
    // },
    // {
    //   title: "个人住房公积金",
    //   dataIndex: ["employee_insurances", "0", "personal_housing_fund"],
    //   key: "personal_housing_fund",
    // },
    // {
    //   title: "个人公积金差额",
    //   dataIndex: ["employee_insurances", "0", "personal_fund_balance"],
    //   key: "personal_fund_balance",
    // },
    // {
    //   title: "个税",
    //   dataIndex: ["employee_insurances", "0", "personal_pay"],
    //   key: "personal_pay",
    // },
    // {
    //   title: "企业养老保险",
    //   dataIndex: ["employee_insurances", "0", "corp_retirement_insurance"],
    //   key: "corp_retirement_insurance",
    // },
    // {
    //   title: "企业医疗保险",
    //   dataIndex: ["employee_insurances", "0", "corp_medical_insurance"],
    //   key: "corp_medical_insurance",
    // },
    // {
    //   title: "企业生育保险",
    //   dataIndex: ["employee_insurances", "0", "corp_maternity_insurance"],
    //   key: "corp_maternity_insurance",
    // },
    // {
    //   title: "企业失业保险",
    //   dataIndex: ["employee_insurances", "0", "corp_unemployment_insurance"],
    //   key: "corp_unemployment_insurance",
    // },
    // {
    //   title: "企业工伤保险",
    //   dataIndex: ["employee_insurances", "0", "corp_work_injury"],
    //   key: "corp_work_injury",
    // },
    // {
    //   title: "企业住房公积金",
    //   dataIndex: ["employee_insurances", "0", "corp_housing_fund"],
    //   key: "corp_housing_fund",
    // },
    // {
    //   title: "个人实得金额(实发)",
    //   dataIndex: "salary_type",
    //   key: "salary_type",
    // },
    // {
    //   title: "本账户对公实发工资",
    //   dataIndex: "salary_type",
    //   key: "salary_type",
    // },
    // {
    //   title: "本账户",
    //   dataIndex: "salary_type",
    //   key: "salary_type",
    // },
    // {
    //   title: "外账户对公实发工资",
    //   dataIndex: "salary_type",
    //   key: "salary_type",
    // },
    // {
    //   title: "现金实发工资",
    //   dataIndex: "salary_type",
    //   key: "salary_type",
    // },
    // {
    //   title: "企业用工成本",
    //   dataIndex: "salary_type",
    //   key: "salary_type",
    // },
  ];
};

export default summaryColumns;
