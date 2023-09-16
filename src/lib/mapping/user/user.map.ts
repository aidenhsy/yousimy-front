interface MapType {
  [key: number | string]: string;
}

export const ApplicationMap: MapType = {
  1: '未申请',
  2: '审批中',
  3: '被驳回',
  4: '已通过',
};

export const AbnormalMap: MapType = {
  2: '无身份证号码',
  3: '无薪资类型',
  4: '无部门',
  5: '无职位',
};

export const ApplicationStatusMap: MapType = {
  1: '无需转正',
  2: '待转正',
  3: '已转正',
};

export const CancelOnboardingReasonMap: MapType = {
  1: '个人原因',
  2: '原单位留职',
  3: '接受其他 Offer',
  4: '其他',
};

export const EmployeeFormStatusMap: MapType = {
  1: '未发送',
  2: '待提交',
  3: '已提交',
};

export const EmployeeTypeMap: MapType = {
  1: '正式',
  2: '实习',
  3: '顾问',
  4: '外包',
  5: '劳务',
};

export const EthnicityMap: MapType = {
  1: '汉族',
  2: '蒙古族',
  3: '回族',
  4: '藏族',
  5: '维吾尔族',
  10: '朝鲜族',
  57: '其他',
};

export const GenderMap: MapType = {
  1: '男',
  2: '女',
};

export const HukouTypeMap: MapType = {
  1: '本市城镇',
  2: '外埠城镇',
  3: '本市农村',
  4: '外埠农村',
};

export const IdTypeMap: MapType = {
  1: '居民身份证',
  2: '港澳居民来往内地通行证',
  3: '台湾居民来往大陆通行证',
  4: '护照',
  5: '其他',
};

export const MartialStatusMap: MapType = {
  1: '未婚',
  2: '已婚',
  3: '离异',
  4: '其他',
};

export const StatusMap: MapType = {
  2: '在职',
  4: '待离职',
  5: '已离职',
  6: '人员未填写信息',
  7: '飞书审核中',
  9: '飞书审核拒绝',
};

export const MedicalInsuranceMap: MapType = {
  1: '大连本地灵活就业医疗',
  2: '城乡居民基本医疗(农村合作医疗)',
  3: '代缴公司交五险',
  4: '个人购买商业医疗保险',
  5: '无任何医疗保险',
};

export const NativeRegionMap: MapType = {
  'CHN-11': '北京市',
  'CHN-12': '天津市',
  'CHN-13': '河北省',
  'CHN-14': '山西省',
  'CHN-15': '内蒙古自治区',
  'CHN-21': '辽宁省',
  'CHN-22': '吉林省',
  'CHN-23': '黑龙江省',
  'CHN-31': '上海市',
  'CHN-32': '江苏省',
  'CHN-33': '浙江省',
  'CHN-34': '安徽省',
  'CHN-35': '福建省',
  'CHN-36': '江西省',
  'CHN-37': '山东省',
  'CHN-41': '河南省',
  'CHN-42': '湖北省',
  'CHN-43': '湖南省',
  'CHN-44': '广东省',
  'CHN-45': '广西壮族自治区',
  'CHN-46': '海南省',
  'CHN-50': '重庆市',
  'CHN-51': '四川省',
  'CHN-52': '贵州省',
  'CHN-53': '云南省',
  'CHN-54': '西藏自治区',
  'CHN-61': '陕西省',
  'CHN-62': '甘肃省',
  'CHN-63': '青海省',
  'CHN-64': '宁夏回族自治区',
  'CHN-65': '新疆维吾尔自治区',
  'CHN-71': '台湾省',
  'CHN-81': '香港特别行政区',
  'CHN-82': '澳门特别行政区',
};
export const RelationshipMap: MapType = {
  1: '父母',
  2: '配偶',
  3: '子女',
  4: '兄弟姐妹',
  5: '朋友',
  6: '其他',
};

export const DepartureTypeMap: MapType = {
  1: '主动',
  2: '被动',
  3: '其他',
};

export const MonthsMap: MapType = {
  1: '1月',
  2: '2月',
  3: '3月',
  4: '4月',
  5: '5月',
  6: '6月',
  7: '7月',
  8: '8月',
  9: '9月',
  10: '10月',
  11: '11月',
  12: '12月',
};

export const CheckResultMap: MapType = {
  1: '正常',
  2: '早退',
  3: '迟到',
  4: '缺卡',
};

export const SalaryTypeIdMap: MapType = {
  'XGKbfaDtflmcTDwkPs8j3': '月计工龄管理层级',
  'HU4D4KOsjZ1dEwN2LRR1a': '月计工龄职能',
  '-RCXCgLtST3WQvhNALVJG': '月计无工龄',
  'YYOymWMKD1jI9-NKiFQhM': '月计工龄经理副厨级',
  '6y0_pWzCPC-YCIUG-iPqX': '日计无工龄',
  'FHSmfBz4XivYtHWYQQDnn': '时计无工龄',

};

export const EmployeeSalaryDeductionMap: MapType = {
  performance: '绩效',
  statutory_holiday: '法定节假日',
  other_subsidies: '其它补助',
  complaint: '投诉',
  attendance_deduction: '考勤扣款',
  deductions_for_unpaid_leave: '无薪假扣款',
  other_deductions: '其它扣款',
  personal_tax: '个税',
};

export const UserAttachmentMap: any = {
  id_photo_po_side: {
    id: 1,
    kind: 'id_photo_po_side',
    value: '身份证照片（人像面）',
    isMulti: false,
  },
  id_photo_em_side: {
    id: 2,
    kind: 'id_photo_em_side',
    value: '身份证照片（国徽面）',
    isMulti: false,
  },
  id_photo: { id: 3, kind: 'id_photo', value: '证件照', isMulti: false },
  diploma_photo: {
    id: 4,
    kind: 'diploma_photo',
    value: '学位证书',
    isMulti: true,
  },
  education_photo: {
    id: 5,
    kind: 'education_photo',
    value: '毕业证书',
    isMulti: true,
  },
  health_card_image: {
    id: 6,
    kind: 'health_card_image',
    value: '健康证图片',
    isMulti: false,
  },
  customField_1662357008224: {
    id: 7,
    kind: 'customField_1662357008224',
    value: '上传劳动合同首页',
    isMulti: true,
  },
  customField_1662357051814: {
    id: 8,
    kind: 'customField_1662357051814',
    value: '上传劳动合同第一页',
    isMulti: true,
  },
  customField_1662357100065: {
    id: 9,
    kind: 'customField_1662357100065',
    value: '上传劳动合同第七页',
    isMulti: true,
  },
  customField_1662357127001: {
    id: 10,
    kind: 'customField_1662357127001',
    value: '入职登记表',
    isMulti: true,
  },
  customField_1662357152436: {
    id: 11,
    kind: 'customField_1662357152436',
    value: '个人征信报告',
    isMulti: true,
  },
  customField_1662357177496: {
    id: 12,
    kind: 'customField_1662357177496',
    value: '保密协议第一页',
    isMulti: true,
  },
  customField_1662357201897: {
    id: 13,
    kind: 'customField_1662357201897',
    value: '保密协议第二页',
    isMulti: true,
  },
  customField_1662357222887: {
    id: 14,
    kind: 'customField_1662357222887',
    value: '假期工协议第一页',
    isMulti: true,
  },
  custom_7239232061806020134: {
    id: 15,
    kind: 'custom_7239232061806020134',
    value: '假期工协议第二页',
    isMulti: true,
  },
  resignation_handover: {
    id: 16,
    kind: 'resignation_handover',
    value: '离职交接单',
    isMulti: false,
  },
  notice_termination_agreement: {
    id: 17,
    kind: 'notice_termination_agreement',
    value: '解除协议通知单',
    isMulti: false,
  },
  screenshot: {
    id: 18,
    kind: 'screenshot',
    value: '代签微信/短信截图',
    isMulti: false,
  },
};
