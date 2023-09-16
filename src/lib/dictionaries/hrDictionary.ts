import { TranslationDictionary } from '../tools/translateObject';
import { StatusMap, EmployeeTypeMap, GenderMap, ApplicationMap, ApplicationStatusMap, MonthsMap, RelationshipMap, NativeRegionMap, EthnicityMap, HukouTypeMap, MartialStatusMap, SalaryTypeIdMap } from '../mapping';

export const dictionary: TranslationDictionary = {
  status: {
    label: '人员状态',
    values: StatusMap,
  },
  employee_type: {
    label: '人员类型',
    values: EmployeeTypeMap,
  },
  gender_id: {
    label: '性别',
    values: GenderMap,
  },
  hire_dates: {
    label: '入职日期',
    values: {},
  },
  hire_date: {
    label: '入职日期',
    values: {},
  },
  actual_overboard_time: {
    label: '离职日期',
    values: {},
  },
  actual_conversion_time: {
    label: '转正日期',
    values: {},
  },
  application: {
    label: '转正申请',
    values: ApplicationMap
  },
  application_status: {
    label: '转正状态',
    values: ApplicationStatusMap
  },
  birthday_range: {
    label: '最近日期',
    values: {}
  },
  birthday_months: {
    label: '生日月份',
    values: MonthsMap
  },
  hire_months: {
    label: '周年月份',
    values: MonthsMap
  },
  job_title: {
    label: '职务',
    values: {}
  },
  salary_type: {
    label: '薪资类型',
    values: {}
  },
  salary_type_id: {
    label: '薪资类型',
    values: SalaryTypeIdMap
  },
  basic_salary: {
    label: '基本工资',
    values: {}
  },
  basic_salary_monthly: {
    label: '月薪固定额',
    values: {}
  },
  probation: {
    label: '试用期（月）',
    values: {}
  },
  conversion_date: {
    label: '转正日期',
    values: {}
  },
  work_age_type: {
    label: '工龄',
    values: {}
  },
  user_id: {
    label: '用户 ID',
    values: {}
  },
  name: {
    label: '姓名',
    values: {}
  },
  relationship: {
    label: '关系',
    values: RelationshipMap
  },
  mobile: {
    label: '手机号',
    values: {}
  },
  bank_name: {
    label: '开户行',
    values: {}
  },
  bank_account_number: {
    label: '银行卡号',
    values: {}
  },
  marital_status: {
    label: '婚姻状况',
    values: MartialStatusMap
  },
  family_address: {
    label: '现居住地址',
    values: {}
  },
  hukou_type: {
    label: '户口类型',
    values: HukouTypeMap
  },
  hukou_location: {
    label: '户口所在地',
    values: {}
  },
  birthday: {
    label: '出生日期',
    values: {}
  },
  native_region: {
    label: '籍贯',
    values: NativeRegionMap
  },
  ethnicity: {
    label: '民族',
    values: EthnicityMap
  },
  social_security_account: {
    label: '社保账号',
    values: {}
  },
  provident_fund_account: {
    label: '公积金账号',
    values: {}
  },
  id_number: {
    label: '身份证号',
    values: {}
  },
  primary_emergency_contact: {
    label: '紧急联系人',
    values: {}
  },
  id_photo_po_side: {
    label: '身份证照片（人像面）',
    values: {}
  },
  id_photo_em_side: {
    label: '身份证照片（国徽面）',
    values: {}
  },
  health_card_image: {
    label: '健康证图片',
    values: {}
  },
  customField_1662357008224: {
    label: '上传劳动合同首页',
    values: {}
  },
  customField_1662357051814: {
    label: '上传劳动合同第一页',
    values: {}
  },
  customField_1662357100065: {
    label: '上传劳动合同第七页',
    values: {}
  },
  customField_1662357127001: {
    label: '入职登记表',
    values: {}
  },
  customField_1662357152436: {
    label: '个人征信报告',
    values: {}
  },
  customField_1662357177496: {
    label: '保密协议第一页',
    values: {}
  },
  customField_1662357201897: {
    label: '保密协议第二页',
    values: {}
  },




  // Add more key-value translations as needed
};

export const hrKeyReverse: Record<string, string> = {
  人员状态: 'status',
  人员类型: 'employee_type',
  性别: 'gender_id',
  入职日期: 'hire_dates',
  部门: 'department_id',
  转正申请: 'application',
  转正状态: 'application_status',
  离职日期: 'last_day',
  转正日期: 'actual_conversion_time',
  最近日期: 'birthday_range',
  生日月份: 'birthday_months',
  周年月份: 'hire_months'
};
