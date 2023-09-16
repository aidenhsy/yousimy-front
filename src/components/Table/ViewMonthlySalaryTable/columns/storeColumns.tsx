import BonusDeductionPopover from '@/components/Popover/BonusDeductionPopover';
import { StatusMap } from '@/lib/mapping';
import { classNames } from '@/lib/tools/classNames';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Popover } from 'antd';
import { ColumnsType } from 'antd/es/table';
import numeral from 'numeral';

const storeColumns = (month: string): ColumnsType<any> => {
  return [
    {
      title: '姓名',
      width: 100,
      dataIndex: 'employee',
      key: 'employee',
      fixed: 'left',
      render: (val: any) => (
        <Popover
          key={val.id_number}
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
      title: '出勤时长',
      dataIndex: 'total_length_day',
      key: 'total_length_day',
      width: 100,
      render: (val: any, record: any) => {
        if (record.salary_type === '时薪') {
          return <span>{record.total_length_hour} 小时</span>;
        } else {
          return <span>{val} 天</span>;
        }
      },
    },
    {
      title: '基本工资',
      dataIndex: 'basic_salary',
      key: 'basic_salary',
      width: 100,
    },
    {
      title: '工龄奖金',
      dataIndex: 'work_age_bonus',
      key: 'work_age_bonus',
      width: 100,
      render: (val: any) => <span>{val}</span>,
    },
    {
      title: '薪酬补扣',
      dataIndex: 'bonus_deduction',
      width: 100,
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
      title: '个人实得金额',
      dataIndex: 'net_salary',
      key: 'net_salary',
      width: 150,
      render: (val: any, record: any) => (
        <span>¥ {numeral(val).format('0,0.00')}</span>
      ),
    },
    {
      title: '企业用功成本',
      dataIndex: 'corp_salary_cost',
      key: 'corp_salary_cost',
      width: 150,
      render: (val: any, record: any) => (
        <span>¥ {numeral(val).format('0,0.00')}</span>
      ),
    },
  ];
};

export default storeColumns;
