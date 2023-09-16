import { StatusMap } from '@/lib/mapping';
import { classNames } from '@/lib/tools/classNames';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Popover } from 'antd';
import { ColumnsType } from 'antd/es/table';
import numeral from 'numeral';

const hrColumns = (month: string): ColumnsType<any> => {
  return [
    {
      title: '姓名',
      width: 200,
      dataIndex: 'employee',
      key: 'employee',
      fixed: 'left',
      render: (val: any) => (
        <Popover
          content={
            <div className="tw-flex tw-flex-col tw-space-y-2">
              <div className="tw-flex tw-justify-between" key={''}>
                <span>本部门:</span>
                <span className="tw-font-bold tw-ml-2">
                  {val.department.name}
                </span>
              </div>
              <div className="tw-flex tw-justify-between" key={''}>
                <span>状态:</span>
                <span className="tw-font-bold tw-ml-2">
                  {StatusMap[val.status]}
                </span>
              </div>
              <div className="tw-flex tw-justify-between" key={''}>
                <span>职位:</span>
                <span className="tw-font-bold tw-ml-2">{val.job_title}</span>
              </div>
              <div className="tw-flex tw-justify-between" key={''}>
                <span>身份证号:</span>
                <span className="tw-font-bold tw-ml-2">{val.id_number}</span>
              </div>
              <div className="tw-flex tw-justify-between" key={''}>
                <span>银行名称:</span>
                <span className="tw-font-bold tw-ml-2">{val.bank_name}</span>
              </div>
              <div className="tw-flex tw-justify-between" key={''}>
                <span>银行卡号:</span>
                <span className="tw-font-bold tw-ml-2">
                  {val.bank_account_number}
                </span>
              </div>
              <div className="tw-flex tw-justify-between" key={''}>
                <span>入职日期:</span>
                <span className="tw-font-bold tw-ml-2">{val.hire_date}</span>
              </div>
            </div>
          }
        >
          {val?.avatar ? (
            <Avatar src={<img src={val?.avatar} alt="avatar" />} />
          ) : (
            <Avatar icon={<UserOutlined />} />
          )}
          <span className="tw-ml-2">{val?.name}</span>
        </Popover>
      ),
    },
    {
      title: '开薪部门',
      dataIndex: ['department', 'name'],
      key: 'department_name',
      fixed: 'left',
      render: (val: any) => <span>{val}</span>,
    },
    {
      title: '出勤时长天数',
      dataIndex: 'total_length_day',
      key: 'total_length_day',
      render: (val: any) => <span>{val}</span>,
    },
    {
      title: '出勤时长小时',
      dataIndex: 'total_length_hour',
      key: 'total_length_hour',
      render: (val: any) => <span>{val}</span>,
    },
    {
      title: '薪资类型',
      dataIndex: 'salary_type',
      key: 'salary_type',
      render: (val: any) => <span>{val}</span>,
    },
    {
      title: '月薪固定额',
      dataIndex: 'basic_salary_monthly',
      key: 'basic_salary_monthly',
      render: (val: any) => <span>{val}</span>,
    },
    {
      title: '基本工资基数',
      dataIndex: ['employee', 'basic_salary'],
      key: 'basic_salary',
      render: (val: any) => <span>{val}</span>,
    },
    {
      title: '基本工资',
      dataIndex: 'basic_salary_base',
      key: 'basic_salary_base',
      render: (val: any) => <span>{val}</span>,
    },
    {
      title: '加班费',
      dataIndex: 'overtime_pay',
      key: 'overtime_pay',
      render: (val: any) => <span>{val}</span>,
    },
    {
      title: '五险一金补助',
      dataIndex: 'insurance_subsidy',
      key: 'insurance_subsidy',
      render: (val: any) => <span>{val}</span>,
    },
    {
      title: '岗位',
      dataIndex: 'position_pay',
      key: 'position_pay',
      render: (val: any) => <span>{val}</span>,
    },
    {
      title: '工龄类型',
      dataIndex: 'work_age_type',
      key: 'work_age_type',
    },
    {
      title: '工龄 (几个6月)',
      dataIndex: 'work_age',
      key: 'work_age',
    },
    {
      title: '工龄_计算金额',
      dataIndex: 'work_age_bonus',
      key: 'work_age_bonus',
      render: (val: any) => <span>{val}</span>,
    },

    {
      title: '薪酬补扣',
      dataIndex: 'bonus_deduction',
      key: 'bonus_deduction',
      render: (val: any, record: any) => (
        <Popover
          trigger={
            record.employee?.bonusdeductions.length > 0 ? 'hover' : 'click'
          }
          content={
            <div className="tw-flex tw-flex-col tw-space-y-2">
              {record.employee?.bonusdeductions.map((bd: any) => (
                <div
                  className="tw-flex tw-justify-between"
                  key={bd.bonusdeductiontype.name}
                >
                  <span>{bd.bonusdeductiontype.name}: </span>
                  <span
                    className={classNames(
                      'tw-font-bold tw-ml-2',
                      bd.bonusdeductiontype.is_bonus
                        ? 'tw-text-green-600'
                        : 'tw-text-red-600'
                    )}
                  >
                    {bd.amount}
                  </span>
                </div>
              ))}
            </div>
          }
        >
          ¥ {numeral(val).format('0,0.00')}
        </Popover>
      ),
    },
    {
      title: '应发工资',
      dataIndex: 'gross_salary',
      key: 'gross_salary',
      render: (val: any, record: any) => (
        <span>¥ {numeral(val).format('0,0.00')}</span>
      ),
    },
    {
      title: '个人保险公积金',
      dataIndex: 'personal_insurance_funds',
      key: 'personal_insurance_funds',
      render: (val: any, record) => (
        <Popover
          trigger={
            record.employee?.insurance_funds.length > 0 ? 'hover' : 'click'
          }
          content={
            <div className="tw-w-[200px] tw-flex tw-flex-col tw-space-y-2">
              {record.employee?.insurance_funds
                ?.filter(
                  (inf: any) => inf.insurance_fund_type.is_personal === true
                )
                .map((inf: any) => (
                  <div
                    className="tw-flex tw-justify-between"
                    key={inf.insurance_fund_type.name}
                  >
                    <span>{inf.insurance_fund_type.name}</span>
                    <span>¥ {numeral(inf.amount).format('0,0.00')}</span>
                  </div>
                ))}
            </div>
          }
        >
          {val}
        </Popover>
      ),
    },
    {
      title: '企业保险公积金',
      dataIndex: 'corp_insurance_funds',
      key: 'corp_insurance_funds',
      render: (val: any, record) => (
        <Popover
          trigger={
            record.employee?.insurance_funds.length > 0 ? 'hover' : 'click'
          }
          content={
            <div className="tw-w-[200px] tw-flex tw-flex-col tw-space-y-2">
              {record.employee?.insurance_funds
                ?.filter(
                  (inf: any) => inf.insurance_fund_type.is_personal === false
                )
                .map((inf: any) => (
                  <div
                    className="tw-flex tw-justify-between"
                    key={inf.insurance_fund_type.name}
                  >
                    <span>{inf.insurance_fund_type.name}</span>
                    <span>¥ {numeral(inf.amount).format('0,0.00')}</span>
                  </div>
                ))}
            </div>
          }
        >
          {val}
        </Popover>
      ),
    },
    {
      title: '个人实得金额（实发）',
      dataIndex: 'net_salary',
      key: 'net_salary',
      render: (val: any, record: any) => (
        <span>¥ {numeral(val).format('0,0.00')}</span>
      ),
    },
    {
      title: '企业用功成本',
      dataIndex: 'corp_salary_cost',
      key: 'corp_salary_cost',
      render: (val: any, record: any) => (
        <span>¥ {numeral(val).format('0,0.00')}</span>
      ),
    },
  ];
};

export default hrColumns;
