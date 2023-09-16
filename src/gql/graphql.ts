/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ApplicationScalar: any;
  DateScalar: any;
};

export type AttGroup = {
  __typename?: 'AttGroup';
  /** 是否允许外勤打卡 */
  allow_out_punch?: Maybe<Scalars['Boolean']>;
  /** 是否允许 PC 端打卡 */
  allow_pc_punch?: Maybe<Scalars['Boolean']>;
  /** 需要打卡部门 */
  bind_departments?: Maybe<Array<Maybe<Department>>>;
  /** 需要打卡员工 */
  bind_employees?: Maybe<Array<Maybe<User>>>;
  /** 考勤组人数 */
  bind_head_count?: Maybe<Scalars['Int']>;
  /** 国家日历 ID，0：不根据国家日历排休，1：中国大陆，2：美国，3：日本，4：印度，5：新加坡，默认 1 */
  calendar_id?: Maybe<Scalars['Int']>;
  /** 每次打卡均需拍照 */
  clockIn_need_photo?: Maybe<Scalars['Boolean']>;
  /** 生效时间 */
  effect_time?: Maybe<Scalars['DateScalar']>;
  /** 是否开启人脸识别打卡 */
  face_punch?: Maybe<Scalars['Boolean']>;
  /** GPS 打卡的有效范围（ */
  gps_range?: Maybe<Scalars['Int']>;
  /** 考勤类型，0：固定班制，2：排班制， 3：自由班制 */
  group_type?: Maybe<Scalars['Int']>;
  /** 是否隐藏员工打卡详情 */
  hide_staff_punch_time?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  /** 考勤 主负责人 列表 */
  leaders?: Maybe<Array<Maybe<User>>>;
  /** 考勤地点 */
  locations?: Maybe<Array<Maybe<AttLocation>>>;
  /** 考勤组所有人员 */
  members?: Maybe<Array<Maybe<User>>>;
  /** 考勤组名称 */
  name?: Maybe<Scalars['String']>;
  /** 外勤打卡允许员工隐藏详细地址（需要允许外勤打卡才能设置生效） */
  out_punch_allowed_hide_addr?: Maybe<Scalars['Boolean']>;
  /** 外勤打卡需审批（需要允许外勤打卡才能设置生效） */
  out_punch_need_approval?: Maybe<Scalars['Boolean']>;
  /** 外勤打卡需拍照（需要允许外勤打卡才能设置生效） */
  out_punch_need_photo?: Maybe<Scalars['Boolean']>;
  /** 外勤打卡需填写备注（需要允许外勤打卡才能设置生效） */
  out_punch_need_remark?: Maybe<Scalars['Boolean']>;
  /** 打卡类型，位运算。1：GPS 打卡，2：Wi-Fi 打卡，4：考勤机打卡，8：IP 打卡 */
  punch_type?: Maybe<Scalars['Int']>;
  /** 休息日打卡需审批 */
  rest_clockIn_need_approval?: Maybe<Scalars['Boolean']>;
  /** 含有班次 */
  shift_lists?: Maybe<Array<Maybe<ShiftList>>>;
  /** 是否展示累计时长 */
  show_cumulative_time?: Maybe<Scalars['Boolean']>;
  /** 是否展示加班时长 */
  show_over_time?: Maybe<Scalars['Boolean']>;
  /** 考勤子负责人 ID 列表 */
  sub_group_leaders?: Maybe<Array<Maybe<User>>>;
  /** 考勤 子负责人 列表 */
  sub_leaders?: Maybe<Array<Maybe<User>>>;
  /** 时区 */
  time_zone?: Maybe<Scalars['String']>;
};

export type AttGroupFilter = {
  /** 考勤组名称 */
  attendance_group_name?: InputMaybe<Scalars['String']>;
  /** 人员id */
  employee_id?: InputMaybe<Scalars['String']>;
  /** 排序方式 */
  sort_by?: InputMaybe<SortOption>;
};

export type AttGroupRes = {
  __typename?: 'AttGroupRes';
  items: Array<AttGroup>;
  totalCount: Scalars['Int'];
};

export type AttLocation = {
  __typename?: 'AttLocation';
  address?: Maybe<Scalars['String']>;
  bssid?: Maybe<Scalars['String']>;
  feature?: Maybe<Scalars['String']>;
  gps_range?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ip?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  map_type?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  ssid?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
};

export type AttLocationInput = {
  address?: InputMaybe<Scalars['String']>;
  bssid?: InputMaybe<Scalars['String']>;
  feature?: InputMaybe<Scalars['String']>;
  gps_range?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  ip?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  map_type?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  ssid?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['Int']>;
};

export type Attendance = {
  __typename?: 'Attendance';
  attendance_location?: Maybe<AttendanceLocation>;
  attendance_location_id?: Maybe<Scalars['String']>;
  clock_in_location?: Maybe<AttendanceLocation>;
  clock_in_location_id?: Maybe<Scalars['String']>;
  clock_in_result?: Maybe<Scalars['Int']>;
  clock_in_time?: Maybe<Scalars['String']>;
  clock_out_location?: Maybe<AttendanceLocation>;
  clock_out_location_id?: Maybe<Scalars['String']>;
  clock_out_result?: Maybe<Scalars['Int']>;
  clock_out_time?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateScalar']>;
  employee?: Maybe<User>;
  employee_id?: Maybe<Scalars['String']>;
  hours_of_attendance?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  shift?: Maybe<ShiftList>;
  shift_id?: Maybe<Scalars['String']>;
};

export type AttendanceLocation = {
  __typename?: 'AttendanceLocation';
  address?: Maybe<Scalars['String']>;
  attendance_group?: Maybe<AttGroup>;
  attendance_group_id?: Maybe<Scalars['String']>;
  attendances?: Maybe<Array<Maybe<Attendance>>>;
  bssid?: Maybe<Scalars['String']>;
  feature?: Maybe<Scalars['String']>;
  gps_range?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ip?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  map_type?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  ssid?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
};

/** 角色筛选选择 */
export enum AvailableRoles {
  /** 考勤组管理员 */
  AttManager = 'AttManager',
  /** 人事管理员 */
  HrManager = 'HrManager',
  /** 超级管理员 */
  SuperManager = 'SuperManager'
}

export type BirthdayStats = {
  __typename?: 'BirthdayStats';
  lastMonthCount?: Maybe<Scalars['Int']>;
  nextMonthCount?: Maybe<Scalars['Int']>;
  thisMonthCount?: Maybe<Scalars['Int']>;
  thisWeekCount?: Maybe<Scalars['Int']>;
  todayCount?: Maybe<Scalars['Int']>;
};

export type Brand = {
  __typename?: 'Brand';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  stores?: Maybe<Array<Maybe<Store>>>;
};

export type ChildSalesData = {
  __typename?: 'ChildSalesData';
  amount?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CreateAttendanceGroupInput = {
  /** 是否允许外勤打卡 */
  allow_out_punch?: InputMaybe<Scalars['Boolean']>;
  /** 是否允许 PC 端打卡 */
  allow_pc_punch?: InputMaybe<Scalars['Boolean']>;
  /** 国家日历 ID，0：不根据国家日历排休，1：中国大陆，2：美国，3：日本，4：印度，5：新加坡，默认 1 */
  calendar_id?: InputMaybe<Scalars['Int']>;
  /** 每次打卡均需拍照 */
  clockIn_need_photo?: InputMaybe<Scalars['Boolean']>;
  /** 生效时间 */
  effect_time?: InputMaybe<Scalars['DateScalar']>;
  /** 是否开启人脸识别打卡 */
  face_punch?: InputMaybe<Scalars['Boolean']>;
  /** GPS 打卡的有效范围（ */
  gps_range?: InputMaybe<Scalars['Int']>;
  /** 考勤类型，0：固定班制，2：排班制， 3：自由班制 */
  group_type?: InputMaybe<Scalars['Int']>;
  /** 是否隐藏员工打卡详情 */
  hide_staff_punch_time?: InputMaybe<Scalars['Boolean']>;
  /** 考勤 主负责人 列表 */
  leader_ids: Array<Scalars['String']>;
  /** 考勤地点 */
  locations?: InputMaybe<Array<InputMaybe<AttLocationInput>>>;
  /** 需要考勤的人员 */
  members?: InputMaybe<Array<InputMaybe<MembersInput>>>;
  /** 考勤组名称 */
  name: Scalars['String'];
  /** 外勤打卡允许员工隐藏详细地址（需要允许外勤打卡才能设置生效） */
  out_punch_allowed_hide_addr?: InputMaybe<Scalars['Boolean']>;
  /** 外勤打卡需审批（需要允许外勤打卡才能设置生效） */
  out_punch_need_approval?: InputMaybe<Scalars['Boolean']>;
  /** 外勤打卡需拍照（需要允许外勤打卡才能设置生效） */
  out_punch_need_photo?: InputMaybe<Scalars['Boolean']>;
  /** 外勤打卡需填写备注（需要允许外勤打卡才能设置生效） */
  out_punch_need_remark?: InputMaybe<Scalars['Boolean']>;
  /** 打卡类型，位运算。1：GPS 打卡，2：Wi-Fi 打卡，4：考勤机打卡，8：IP 打卡 */
  punch_type?: InputMaybe<Scalars['Int']>;
  /** 休息日打卡需审批 */
  rest_clockIn_need_approval?: InputMaybe<Scalars['Boolean']>;
  /** 是否展示累计时长 */
  show_cumulative_time?: InputMaybe<Scalars['Boolean']>;
  /** 是否展示加班时长 */
  show_over_time?: InputMaybe<Scalars['Boolean']>;
  /** 考勤子负责人 ID 列表 */
  sub_leader_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** 时区 */
  time_zone?: InputMaybe<Scalars['String']>;
};

export type CreateAttendanceInput = {
  date?: InputMaybe<Scalars['DateScalar']>;
  employee_id?: InputMaybe<Scalars['String']>;
  shift_id?: InputMaybe<Scalars['String']>;
};

export type CreateShiftInput = {
  /** 关联考勤组ID */
  attendance_group_id?: InputMaybe<Scalars['String']>;
  /** 早退多久记为早退 */
  early_minutes_as_early: Scalars['Int'];
  /** 早退多久记为缺卡 */
  early_minutes_as_lack: Scalars['Int'];
  /** 晚到多久记为缺卡 */
  late_minutes_as_lack?: InputMaybe<Scalars['Int']>;
  /** 晚到多久记为迟到 */
  late_minutes_as_late?: InputMaybe<Scalars['Int']>;
  /** 不需要打下班卡 */
  no_need_off?: InputMaybe<Scalars['Boolean']>;
  /** 最晚多久可打下班卡 */
  off_delay_minutes?: InputMaybe<Scalars['Int']>;
  /** 下班时间 */
  off_time: Scalars['DateScalar'];
  /** 最早多久可打上班卡 */
  on_advance_minutes?: InputMaybe<Scalars['Int']>;
  /** 上班时间 */
  on_time: Scalars['DateScalar'];
  /** 班次名称 */
  shift_name: Scalars['String'];
};

export type CreateUserInput = {
  department_id?: InputMaybe<Scalars['ID']>;
  hire_date?: InputMaybe<Scalars['DateScalar']>;
  mobile?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
};

export type Department = {
  __typename?: 'Department';
  /** 所有子部门成员 */
  all_employees?: Maybe<UsersList>;
  /** 所有子部门 */
  child_departments?: Maybe<Array<Maybe<Department>>>;
  /** 该部门成员 */
  employees?: Maybe<Array<Maybe<User>>>;
  /** 部门ID */
  id: Scalars['ID'];
  /** 部门直属领导 */
  manager_id?: Maybe<Scalars['ID']>;
  /** 部门名称 */
  name?: Maybe<Scalars['String']>;
  /** 父部门 */
  parent_department?: Maybe<Department>;
  /** 父部门ID */
  parent_department_id?: Maybe<Scalars['ID']>;
  /** 小部门名称（eg：前厅，后厨。。。） */
  small_department_name?: Maybe<Scalars['String']>;
};

export type DepartmentFilter = {
  /** 模糊搜索部门名字 */
  name?: InputMaybe<Scalars['String']>;
};

export type DepartmentRes = {
  __typename?: 'DepartmentRes';
  /** 该查询返回的部门 */
  items?: Maybe<Array<Maybe<Department>>>;
  /** 该查询返回所有items的数量 */
  totalCount: Scalars['Int'];
};

export enum EmployeeSort {
  RoleRankingAsc = 'ROLE_RANKING_ASC',
  RoleRankingDesc = 'ROLE_RANKING_DESC'
}

export enum FieldEnums {
  /** 转正申请 */
  Application = 'APPLICATION',
  /** 转正状态 */
  ApplicationStatus = 'APPLICATION_STATUS',
  /** 取消入职原因 */
  CancelOnboardingReason = 'CANCEL_ONBOARDING_REASON',
  /** 入职登记表状态 */
  EmployeeFormStatus = 'EMPLOYEE_FORM_STATUS',
  /** 人员类型 */
  EmployeeType = 'EMPLOYEE_TYPE',
  /** 民族 */
  Ethnicity = 'ETHNICITY',
  /** 性别 */
  Gender = 'GENDER',
  /** 户口类型 */
  HukouType = 'HUKOU_TYPE',
  /** 证件类型 */
  IdType = 'ID_TYPE',
  /** 婚姻状况 */
  MartialStatus = 'MARTIAL_STATUS',
  /** 员工状态 */
  Status = 'STATUS'
}

export type FieldInput = {
  fields: Array<FieldEnums>;
};

export type FilterInput = {
  name?: InputMaybe<Scalars['String']>;
};

/** 本日，本周，本月，下月，上月 的员工入职周年的数量 */
export type HireDateStats = {
  __typename?: 'HireDateStats';
  /** 历年下月入职的员工数量(下月1号到下月最后1天) */
  lastMonthCount?: Maybe<Scalars['Int']>;
  /** 历年上月入职的员工数量(上月1号到上月最后1天) */
  nextMonthCount?: Maybe<Scalars['Int']>;
  /** 历年本月入职的员工数量(本月1号到本月最后1天) */
  thisMonthCount?: Maybe<Scalars['Int']>;
  /** 历年本周入职的员工数量(本周一到本周日) */
  thisWeekCount?: Maybe<Scalars['Int']>;
  /** 历年今天入职的员工数量 */
  todayCount?: Maybe<Scalars['Int']>;
};

export type HrConversionStats = {
  __typename?: 'HrConversionStats';
  /** 全部待转正数量 */
  awaitRegularizedCount?: Maybe<Scalars['Int']>;
  /** 下月待转正数量 */
  nextMonthAwaitRegularizedCount?: Maybe<Scalars['Int']>;
  /** 超期未转正数量 */
  overdueRegularizedCount?: Maybe<Scalars['Int']>;
  /** 本月待转正数量 */
  thisMonthAwaitRegularizedCount?: Maybe<Scalars['Int']>;
};

export type HrOnboardingStats = {
  __typename?: 'HrOnboardingStats';
  /** 全部待入职数量 */
  awaitOnboardingCount?: Maybe<Scalars['Int']>;
  /** 本月待入职数量 */
  thisMonthAwaitOnboardingCount?: Maybe<Scalars['Int']>;
  /** 今日待入职数量 */
  todayAwaitOnboardingCount?: Maybe<Scalars['Int']>;
};

export type HrResignStats = {
  __typename?: 'HrResignStats';
  /** 全部待离职数量 */
  awaitHiredCount?: Maybe<Scalars['Int']>;
};

/** 人事数据 */
export type HrStats = {
  __typename?: 'HrStats';
  /**
   * 待离职 数量
   * status=4
   */
  awaitUnemployCount?: Maybe<Scalars['Int']>;
  /**
   * 实习 数量
   * status=2 && employee_type=2
   */
  internEmployeeCount?: Maybe<Scalars['Int']>;
  /**
   * 在职 数量
   * status=2
   */
  isEmployedCount?: Maybe<Scalars['Int']>;
  /**
   * 离职 数量
   * status=4
   */
  notEmployedCount?: Maybe<Scalars['Int']>;
  /**
   * 外包 数量
   * status=2 && employee_type=4
   */
  outsourcedEmployeeCount?: Maybe<Scalars['Int']>;
  /**
   * 正式 数量
   * status=2 && employee_type=1
   */
  regularEmployeeCount?: Maybe<Scalars['Int']>;
  /**
   * 试用 数量
   * status=1
   */
  trialEmployeeCount?: Maybe<Scalars['Int']>;
};

export type LocationInput = {
  /** 纬度 */
  latitude: Scalars['Float'];
  /** 经度 */
  longitude: Scalars['Float'];
  /** 打卡地点名称 */
  name: Scalars['String'];
};

/** 用户输入，type: 1=deparment_id, 2=employee_id */
export type MembersInput = {
  id: Scalars['String'];
  type: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 添加门店到管理员 */
  addAdminsStores?: Maybe<Array<Maybe<Store>>>;
  /** 添加考勤组打卡地点 */
  addAttendanceLocation?: Maybe<Array<Maybe<AttLocation>>>;
  /** 添加人员到一个角色 */
  addEmployee2Roles?: Maybe<Role>;
  /** 添加管理员到某个门店 */
  addStoreAdmins?: Maybe<Store>;
  /** 添加新考勤组 */
  createAttendanceGroup?: Maybe<AttGroup>;
  /** 添加排班 */
  createAttendances?: Maybe<MutationResponse>;
  /** 添加角色 */
  createRole?: Maybe<Role>;
  /** 创建班次 */
  createShift?: Maybe<ShiftList>;
  /** 添加新员工 */
  createUser?: Maybe<User>;
  /** 使用ID 删除考勤组 */
  deleteAttendanceGroup?: Maybe<AttGroup>;
  /** 通过location id删除考勤地点 */
  deleteAttendanceLocation?: Maybe<Array<Maybe<AttLocation>>>;
  /** 从一个角色删除一个人员 */
  deleteEmployeeRole?: Maybe<Role>;
  /** 删除角色 */
  deleteRole?: Maybe<Role>;
  /** 删除班次 */
  deleteShift?: Maybe<ShiftList>;
  /** 在某个门店内删除管理员 */
  deleteStoreAdmins?: Maybe<Store>;
  /** 删除员工 */
  deleteUser?: Maybe<Scalars['Boolean']>;
  /** 删除员工附件 */
  deleteUserAttachment?: Maybe<Scalars['Boolean']>;
  /** 更新个人打卡记录 */
  updateAttendance?: Maybe<MutationResponse>;
  /** 更新考勤组 */
  updateAttendanceGroup?: Maybe<AttGroup>;
  /** 更新角色路由 */
  updateRoleNavs?: Maybe<Role>;
  /** 更新班次 */
  updateShift?: Maybe<ShiftList>;
  /** 更新员工信息 */
  updateUser?: Maybe<User>;
};


export type MutationAddAdminsStoresArgs = {
  employee_ids: Array<InputMaybe<Scalars['String']>>;
  store_ids: Array<InputMaybe<Scalars['String']>>;
};


export type MutationAddAttendanceLocationArgs = {
  attendance_group_id: Scalars['String'];
  new_location: LocationInput;
};


export type MutationAddEmployee2RolesArgs = {
  employee_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role_id?: InputMaybe<Scalars['String']>;
};


export type MutationAddStoreAdminsArgs = {
  employee_ids: Array<InputMaybe<Scalars['String']>>;
  store_id: Scalars['String'];
};


export type MutationCreateAttendanceGroupArgs = {
  attGroupFields?: InputMaybe<CreateAttendanceGroupInput>;
};


export type MutationCreateAttendancesArgs = {
  createAttendanceInput?: InputMaybe<Array<InputMaybe<CreateAttendanceInput>>>;
};


export type MutationCreateRoleArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type MutationCreateShiftArgs = {
  createShiftInput?: InputMaybe<CreateShiftInput>;
};


export type MutationCreateUserArgs = {
  createFields?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteAttendanceGroupArgs = {
  attendance_group_id: Scalars['String'];
};


export type MutationDeleteAttendanceLocationArgs = {
  attendance_location_id: Scalars['String'];
};


export type MutationDeleteEmployeeRoleArgs = {
  employee_id?: InputMaybe<Scalars['String']>;
  role_id?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteRoleArgs = {
  role_id?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteShiftArgs = {
  shift_id: Scalars['String'];
};


export type MutationDeleteStoreAdminsArgs = {
  employee_ids: Array<InputMaybe<Scalars['String']>>;
  store_id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserAttachmentArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateAttendanceArgs = {
  updateAttendanceInput?: InputMaybe<UpdateAttendanceInput>;
};


export type MutationUpdateAttendanceGroupArgs = {
  attGroupFields?: InputMaybe<UpdateAttendanceGroupInput>;
  attendance_group_id: Scalars['String'];
};


export type MutationUpdateRoleNavsArgs = {
  nav_sm_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role_id?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateShiftArgs = {
  shift_id: Scalars['String'];
  updateFields: UpdateShiftInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  updateFields?: InputMaybe<UpdateUserInput>;
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  message?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
};

/** 籍贯 */
export type NativeRegion = {
  __typename?: 'NativeRegion';
  /** ISO 编码 */
  iso_code?: Maybe<Scalars['String']>;
  /** 名称 */
  name?: Maybe<Scalars['String']>;
};

export type NativeRegionInput = {
  iso_code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NavBgCategory = {
  __typename?: 'NavBgCategory';
  children?: Maybe<Array<Maybe<NavSmCategory>>>;
  id: Scalars['Int'];
  key: Scalars['String'];
  nav_xl_categories_id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type NavSmCategory = {
  __typename?: 'NavSmCategory';
  id: Scalars['Int'];
  key: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type NavXlCategory = {
  __typename?: 'NavXlCategory';
  children?: Maybe<Array<Maybe<NavBgCategory>>>;
  id: Scalars['Int'];
  key: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type Option = {
  __typename?: 'Option';
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type OptionRes = {
  __typename?: 'OptionRes';
  field?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Option>>>;
};

/** 主要紧急联系人 */
export type PrimaryEmergencyContact = {
  __typename?: 'PrimaryEmergencyContact';
  /** 紧急联系人电话 */
  mobile?: Maybe<Scalars['String']>;
  /** 紧急联系人姓名 */
  name?: Maybe<Scalars['String']>;
  /**
   * 与紧急联系人的关系
   * 1：父母
   * 2：配偶
   * 3：子女
   * 4：兄弟姐妹
   * 5：朋友
   * 6: 其他
   */
  relationship?: Maybe<Scalars['Int']>;
};

export type PrimaryEmergencyContactInput = {
  mobile?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  relationship?: InputMaybe<Scalars['Int']>;
};

export type PunchTimeRules = {
  __typename?: 'PunchTimeRules';
  /** 早退多久记为早退 */
  early_minutes_as_early?: Maybe<Scalars['Int']>;
  /** 早退多久记为缺卡 */
  early_minutes_as_lack?: Maybe<Scalars['Int']>;
  /** 打卡规则 ID */
  id?: Maybe<Scalars['String']>;
  /** 晚到多久记为缺卡 */
  late_minutes_as_lack?: Maybe<Scalars['Int']>;
  /** 晚到多久记为迟到 */
  late_minutes_as_late?: Maybe<Scalars['Int']>;
  /** 最晚多久可打下班卡 */
  off_delay_minutes?: Maybe<Scalars['Int']>;
  /** 下班时间 */
  off_time?: Maybe<Scalars['DateScalar']>;
  /** 最早多久可打上班卡 */
  on_advance_minutes?: Maybe<Scalars['Int']>;
  /** 上班时间 */
  on_time?: Maybe<Scalars['DateScalar']>;
  /** 班次 ID */
  shift_list_id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  attGroupById?: Maybe<AttGroup>;
  /** 获取所有考勤组信息 */
  attGroups?: Maybe<AttGroupRes>;
  attendanceLocations?: Maybe<Array<Maybe<AttendanceLocation>>>;
  /** 获取所有排班 */
  attendances?: Maybe<Array<Maybe<Attendance>>>;
  /** 本日，本周，本月，下月，上月 的员工生日的数量 */
  birthdayStats?: Maybe<BirthdayStats>;
  /** 所有品牌 */
  brands?: Maybe<Array<Maybe<Brand>>>;
  /** 通过用户组id获取单个用户组信息 */
  departmentById?: Maybe<Department>;
  /** 获取所有组的信息 */
  departments?: Maybe<DepartmentRes>;
  /** 本日，本周，本月，下月，上月 的员工入职周年的数量 */
  hireDateStats?: Maybe<HireDateStats>;
  hrConversionStats?: Maybe<HrConversionStats>;
  hrOnboardingStats?: Maybe<HrOnboardingStats>;
  hrResignStats?: Maybe<HrResignStats>;
  hrStats?: Maybe<HrStats>;
  /** 获取所有路由（Tree形状） */
  navTree?: Maybe<Array<Maybe<NavXlCategory>>>;
  options?: Maybe<Array<Maybe<OptionRes>>>;
  /** 通过ID获取一个角色的信息 */
  roleById?: Maybe<Role>;
  /** 获取所有角色 */
  roles?: Maybe<Array<Maybe<Role>>>;
  salesSummary?: Maybe<SalesSummary>;
  shiftById?: Maybe<ShiftList>;
  /** 获取班次列表 */
  shiftLists?: Maybe<ShiftListRes>;
  soldItems?: Maybe<Array<Maybe<SoldItem>>>;
  /** 每日统计 */
  statisticsDay?: Maybe<Statistics>;
  /** 所有门店 */
  stores?: Maybe<Array<Maybe<Store>>>;
  /** 通过员工id获取门店 */
  storesByEmployee?: Maybe<Array<Maybe<Store>>>;
  test?: Maybe<Scalars['String']>;
  /** 测试user */
  testUser?: Maybe<User>;
  /** 通过header里面的token获取单个用户信息 */
  user?: Maybe<User>;
  /** 通过用户id获取用户附件 */
  userAttachmentsById?: Maybe<Array<Maybe<UserAttachment>>>;
  /** 通过用户id获取单个用户信息 */
  userById?: Maybe<User>;
  /** 获取所有用户 */
  users: UsersList;
  /** 通过用户组id获取所有该组内所有子组的成员 */
  usersByDepartmentId?: Maybe<UsersList>;
  /** 通过姓名或者手机号码搜索人员 */
  usersSearch: UsersList;
};


export type QueryAttGroupByIdArgs = {
  id: Scalars['String'];
};


export type QueryAttGroupsArgs = {
  filter?: InputMaybe<AttGroupFilter>;
  skip: Scalars['Int'];
  take: Scalars['Int'];
};


export type QueryBirthdayStatsArgs = {
  date?: InputMaybe<Scalars['DateScalar']>;
};


export type QueryBrandsArgs = {
  brandName?: InputMaybe<Scalars['String']>;
};


export type QueryDepartmentByIdArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryDepartmentsArgs = {
  filter?: InputMaybe<DepartmentFilter>;
  skip: Scalars['Int'];
  take: Scalars['Int'];
};


export type QueryHireDateStatsArgs = {
  date?: InputMaybe<Scalars['DateScalar']>;
};


export type QueryOptionsArgs = {
  input: FieldInput;
};


export type QueryRoleByIdArgs = {
  id: Scalars['String'];
};


export type QueryRolesArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QuerySalesSummaryArgs = {
  end_date: Scalars['String'];
  shop_ids: Scalars['String'];
  start_date: Scalars['String'];
};


export type QueryShiftByIdArgs = {
  id: Scalars['String'];
};


export type QueryShiftListsArgs = {
  filter?: InputMaybe<ShiftListFilter>;
  skip: Scalars['Int'];
  take: Scalars['Int'];
};


export type QuerySoldItemsArgs = {
  endDate: Scalars['String'];
  filter?: InputMaybe<FilterInput>;
  startDate: Scalars['String'];
};


export type QueryStatisticsDayArgs = {
  skip: Scalars['Int'];
  statisticsDayInput?: InputMaybe<StatisticsDayInput>;
  take: Scalars['Int'];
};


export type QueryStoresByEmployeeArgs = {
  id: Scalars['String'];
};


export type QueryUserAttachmentsByIdArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryUserByIdArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UsersFilter>;
  skip: Scalars['Int'];
  take: Scalars['Int'];
};


export type QueryUsersByDepartmentIdArgs = {
  department_id?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersSearchArgs = {
  searchTerm?: InputMaybe<Scalars['String']>;
};

/** 角色信息 */
export type Role = {
  __typename?: 'Role';
  /** 所属这个角色的人员 */
  employees?: Maybe<Array<Maybe<User>>>;
  /** 角色ID */
  id: Scalars['ID'];
  /** 角色名称 */
  name?: Maybe<Scalars['String']>;
  /** 角色的路由 */
  navs?: Maybe<Array<Maybe<NavXlCategory>>>;
  /** 排序 */
  ranking?: Maybe<Scalars['Int']>;
};

export type SalesData = {
  __typename?: 'SalesData';
  amount?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<ChildSalesData>>>;
  name?: Maybe<Scalars['String']>;
};

/** 营业数据 */
export type SalesSummary = {
  __typename?: 'SalesSummary';
  salesData?: Maybe<Array<Maybe<SalesData>>>;
};

export type ShiftList = {
  __typename?: 'ShiftList';
  /** 考勤组 */
  attendance_groups?: Maybe<Array<Maybe<AttGroup>>>;
  /** 打卡记录 */
  attendances?: Maybe<Array<Maybe<Attendance>>>;
  /** 创建人的id */
  created_by?: Maybe<Scalars['String']>;
  /** 早退多久记为早退 */
  early_minutes_as_early?: Maybe<Scalars['Int']>;
  /** 早退多久记为缺卡 */
  early_minutes_as_lack?: Maybe<Scalars['Int']>;
  /** 弹性打卡时间，设置【上班最多可晚到】与【下班最多可早走】时间，如果不设置flexible_rule则生效 */
  flexible_minutes?: Maybe<Scalars['Int']>;
  /** 班次 ID */
  id: Scalars['String'];
  /** 是否弹性打卡 */
  is_flexible?: Maybe<Scalars['Boolean']>;
  /** 晚到多久记为缺卡 */
  late_minutes_as_lack?: Maybe<Scalars['Int']>;
  /** 晚到多久记为迟到 */
  late_minutes_as_late?: Maybe<Scalars['Int']>;
  /** 不需要打下班卡 */
  no_need_off?: Maybe<Scalars['Boolean']>;
  /** 最晚多久可打下班卡 */
  off_delay_minutes?: Maybe<Scalars['Int']>;
  /** 下班时间 */
  off_time?: Maybe<Scalars['String']>;
  /** 最早多久可打上班卡 */
  on_advance_minutes?: Maybe<Scalars['Int']>;
  /** 上班时间 */
  on_time?: Maybe<Scalars['String']>;
  /** 打卡次数 */
  punch_times?: Maybe<Scalars['Int']>;
  /** 班次名称 */
  shift_name: Scalars['String'];
  /** 班次名称 */
  updated_at?: Maybe<Scalars['DateScalar']>;
};

export type ShiftListFilter = {
  /** 创建人的id */
  created_by?: InputMaybe<Scalars['String']>;
  /** 使用班次名称模糊筛选 */
  search_term?: InputMaybe<Scalars['String']>;
  /** 排序方式 */
  sort_by?: InputMaybe<SortOption>;
};

export type ShiftListRes = {
  __typename?: 'ShiftListRes';
  items: Array<ShiftList>;
  totalCount: Scalars['Int'];
};

export type SoldItem = {
  __typename?: 'SoldItem';
  income?: Maybe<Scalars['Float']>;
  itemName?: Maybe<Scalars['String']>;
  lastTotal?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

export enum SortOption {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type Statistics = {
  __typename?: 'Statistics';
  items?: Maybe<Array<Maybe<Attendance>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StatisticsDayInput = {
  date: Scalars['DateScalar'];
  groupIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StatisticsMonthlyInput = {
  date: Scalars['String'];
  groupIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Store = {
  __typename?: 'Store';
  brand?: Maybe<Brand>;
  brand_id?: Maybe<Scalars['String']>;
  department?: Maybe<Department>;
  department_id?: Maybe<Scalars['String']>;
  managers?: Maybe<Array<Maybe<User>>>;
  salary_account?: Maybe<Scalars['String']>;
  seat_count?: Maybe<Scalars['Int']>;
  shop_id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['Int']>;
  store?: Maybe<Scalars['String']>;
  storeName?: Maybe<Scalars['String']>;
  supply_shop_id?: Maybe<Scalars['String']>;
  table_count?: Maybe<Scalars['Int']>;
};

/** 更新考勤组Input */
export type UpdateAttendanceGroupInput = {
  /** 是否允许外勤打卡 */
  allow_out_punch?: InputMaybe<Scalars['Boolean']>;
  /** 是否允许 PC 端打卡 */
  allow_pc_punch?: InputMaybe<Scalars['Boolean']>;
  /** 国家日历 ID，0：不根据国家日历排休，1：中国大陆，2：美国，3：日本，4：印度，5：新加坡，默认 1 */
  calendar_id?: InputMaybe<Scalars['Int']>;
  /** 每次打卡均需拍照 */
  clockIn_need_photo?: InputMaybe<Scalars['Boolean']>;
  /** 生效时间 */
  effect_time?: InputMaybe<Scalars['DateScalar']>;
  /** 是否开启人脸识别打卡 */
  face_punch?: InputMaybe<Scalars['Boolean']>;
  /** GPS 打卡的有效范围（ */
  gps_range?: InputMaybe<Scalars['Int']>;
  /** 考勤类型，0：固定班制，2：排班制， 3：自由班制 */
  group_type?: InputMaybe<Scalars['Int']>;
  /** 是否隐藏员工打卡详情 */
  hide_staff_punch_time?: InputMaybe<Scalars['Boolean']>;
  /** 考勤 主负责人 列表 */
  leader_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** 考勤地点 */
  locations?: InputMaybe<Array<InputMaybe<AttLocationInput>>>;
  /** 需要考勤的人员 */
  members?: InputMaybe<Array<InputMaybe<MembersInput>>>;
  /** 考勤组名称 */
  name?: InputMaybe<Scalars['String']>;
  /** 外勤打卡允许员工隐藏详细地址（需要允许外勤打卡才能设置生效） */
  out_punch_allowed_hide_addr?: InputMaybe<Scalars['Boolean']>;
  /** 外勤打卡需审批（需要允许外勤打卡才能设置生效） */
  out_punch_need_approval?: InputMaybe<Scalars['Boolean']>;
  /** 外勤打卡需拍照（需要允许外勤打卡才能设置生效） */
  out_punch_need_photo?: InputMaybe<Scalars['Boolean']>;
  /** 外勤打卡需填写备注（需要允许外勤打卡才能设置生效） */
  out_punch_need_remark?: InputMaybe<Scalars['Boolean']>;
  /** 打卡类型，位运算。1：GPS 打卡，2：Wi-Fi 打卡，4：考勤机打卡，8：IP 打卡 */
  punch_type?: InputMaybe<Scalars['Int']>;
  /** 休息日打卡需审批 */
  rest_clockIn_need_approval?: InputMaybe<Scalars['Boolean']>;
  /** 班次id数组 */
  shift_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** 是否展示累计时长 */
  show_cumulative_time?: InputMaybe<Scalars['Boolean']>;
  /** 是否展示加班时长 */
  show_over_time?: InputMaybe<Scalars['Boolean']>;
  /** 考勤子负责人 ID 列表 */
  sub_leader_ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** 时区 */
  time_zone?: InputMaybe<Scalars['String']>;
};

export type UpdateAttendanceInput = {
  clock_in_time?: InputMaybe<Scalars['String']>;
  clock_out_time?: InputMaybe<Scalars['String']>;
  date: Scalars['DateScalar'];
  employee_id: Scalars['String'];
};

export type UpdateShiftInput = {
  /** 早退多久记为早退 */
  early_minutes_as_early?: InputMaybe<Scalars['Int']>;
  /** 早退多久记为缺卡 */
  early_minutes_as_lack?: InputMaybe<Scalars['Int']>;
  /** 晚到多久记为缺卡 */
  late_minutes_as_lack?: InputMaybe<Scalars['Int']>;
  /** 晚到多久记为迟到 */
  late_minutes_as_late?: InputMaybe<Scalars['Int']>;
  /** 不需要打下班卡 */
  no_need_off?: InputMaybe<Scalars['Boolean']>;
  /** 最晚多久可打下班卡 */
  off_delay_minutes?: InputMaybe<Scalars['Int']>;
  /** 下班时间 */
  off_time?: InputMaybe<Scalars['DateScalar']>;
  /** 最早多久可打上班卡 */
  on_advance_minutes?: InputMaybe<Scalars['Int']>;
  /** 上班时间 */
  on_time?: InputMaybe<Scalars['DateScalar']>;
  /** 班次名称 */
  shift_name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  actual_conversion_time?: InputMaybe<Scalars['DateScalar']>;
  actual_overboard_time?: InputMaybe<Scalars['DateScalar']>;
  application?: InputMaybe<Scalars['Int']>;
  application_status?: InputMaybe<Scalars['Int']>;
  avatar?: InputMaybe<Scalars['String']>;
  bank_account_number?: InputMaybe<Scalars['String']>;
  bank_name?: InputMaybe<Scalars['String']>;
  basic_salary?: InputMaybe<Scalars['Float']>;
  basic_salary_monthly?: InputMaybe<Scalars['Float']>;
  birthday?: InputMaybe<Scalars['DateScalar']>;
  cancel_onboarding_notes?: InputMaybe<Scalars['String']>;
  cancel_onboarding_reason?: InputMaybe<Scalars['Int']>;
  department_id?: InputMaybe<Scalars['ID']>;
  departure_notes?: InputMaybe<Scalars['String']>;
  departure_type?: InputMaybe<Scalars['Int']>;
  email?: InputMaybe<Scalars['String']>;
  employee_form_status?: InputMaybe<Scalars['Int']>;
  employee_no?: InputMaybe<Scalars['String']>;
  employee_type?: InputMaybe<Scalars['Int']>;
  en_name?: InputMaybe<Scalars['String']>;
  entered_workforce_date?: InputMaybe<Scalars['DateScalar']>;
  ethnicity?: InputMaybe<Scalars['Int']>;
  family_address?: InputMaybe<Scalars['String']>;
  gender_id?: InputMaybe<Scalars['Int']>;
  health_card_end?: InputMaybe<Scalars['DateScalar']>;
  health_card_image?: InputMaybe<Scalars['String']>;
  health_card_no?: InputMaybe<Scalars['String']>;
  health_card_start?: InputMaybe<Scalars['DateScalar']>;
  hire_date?: InputMaybe<Scalars['DateScalar']>;
  hukou_location?: InputMaybe<Scalars['String']>;
  hukou_type?: InputMaybe<Scalars['Int']>;
  id_number?: InputMaybe<Scalars['String']>;
  id_photo?: InputMaybe<Scalars['String']>;
  id_photo_em_side?: InputMaybe<Scalars['String']>;
  id_photo_po_side?: InputMaybe<Scalars['String']>;
  id_type?: InputMaybe<Scalars['Int']>;
  isAdmin?: InputMaybe<Scalars['Int']>;
  job_title?: InputMaybe<Scalars['String']>;
  last_day?: InputMaybe<Scalars['DateScalar']>;
  manager_id?: InputMaybe<Scalars['String']>;
  martial_status?: InputMaybe<Scalars['Int']>;
  medical_insurance?: InputMaybe<Scalars['Int']>;
  mobile?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  native_region?: InputMaybe<NativeRegionInput>;
  open_id?: InputMaybe<Scalars['String']>;
  overboard_note?: InputMaybe<Scalars['String']>;
  personal_email?: InputMaybe<Scalars['String']>;
  primary_emergency_contact?: InputMaybe<PrimaryEmergencyContactInput>;
  probation_months?: InputMaybe<Scalars['Int']>;
  provident_fund_account?: InputMaybe<Scalars['String']>;
  salary_account?: InputMaybe<Scalars['String']>;
  salary_type?: InputMaybe<Scalars['String']>;
  social_security_account?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  title_id?: InputMaybe<Scalars['Int']>;
  update_time?: InputMaybe<Scalars['DateScalar']>;
  user_id?: InputMaybe<Scalars['String']>;
  work_age_type?: InputMaybe<Scalars['String']>;
  work_location?: InputMaybe<Scalars['String']>;
};

/** 用户信息 */
export type User = {
  __typename?: 'User';
  /** 实际转正日期 */
  actual_conversion_time?: Maybe<Scalars['DateScalar']>;
  /** 实际离职日期 */
  actual_overboard_time?: Maybe<Scalars['DateScalar']>;
  /** 转正申请 */
  application?: Maybe<Scalars['Int']>;
  /** 转正状态 */
  application_status?: Maybe<Scalars['Int']>;
  /** 每日考勤班次 */
  attendances?: Maybe<Array<Maybe<Attendance>>>;
  /** 头像 */
  avatar?: Maybe<Scalars['String']>;
  /** 银行卡号 */
  bank_account_number?: Maybe<Scalars['String']>;
  /** 开户行 */
  bank_name?: Maybe<Scalars['String']>;
  /** 基本工资 */
  basic_salary?: Maybe<Scalars['Float']>;
  /** 月薪基本工资 */
  basic_salary_monthly?: Maybe<Scalars['Float']>;
  /** 生日 */
  birthday?: Maybe<Scalars['DateScalar']>;
  /** 取消入职备注 */
  cancel_onboarding_notes?: Maybe<Scalars['String']>;
  /** 取消入职原因 */
  cancel_onboarding_reason?: Maybe<Scalars['Int']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['DateScalar']>;
  /** 部门 */
  department?: Maybe<Department>;
  /** 部门id */
  department_id?: Maybe<Scalars['String']>;
  /** 离职类型 */
  departure_type?: Maybe<Scalars['Int']>;
  /** 邮箱 */
  email?: Maybe<Scalars['String']>;
  /** 入职登记表状态 */
  employee_form_status?: Maybe<Scalars['Int']>;
  /** 工号 */
  employee_no?: Maybe<Scalars['String']>;
  /** 人员类型 */
  employee_type?: Maybe<Scalars['Int']>;
  /** 英文姓名 */
  en_name?: Maybe<Scalars['String']>;
  /** 参加工作日期 */
  entered_workforce_date?: Maybe<Scalars['DateScalar']>;
  /** 民族 */
  ethnicity?: Maybe<Scalars['Int']>;
  /** 家庭地址 */
  family_address?: Maybe<Scalars['String']>;
  /** 性别id */
  gender_id?: Maybe<Scalars['Int']>;
  /** 健康证到期日期 */
  health_card_end?: Maybe<Scalars['DateScalar']>;
  /** 健康证图片 */
  health_card_image?: Maybe<Scalars['String']>;
  /** 健康证卡号 */
  health_card_no?: Maybe<Scalars['String']>;
  /** 健康证开始日期 */
  health_card_start?: Maybe<Scalars['DateScalar']>;
  /** 入职日期 */
  hire_date?: Maybe<Scalars['DateScalar']>;
  /** 户口所在地 */
  hukou_location?: Maybe<Scalars['String']>;
  /** 户口类型 */
  hukou_type?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** 证件号 */
  id_number?: Maybe<Scalars['String']>;
  /** 证件照 */
  id_photo?: Maybe<Scalars['String']>;
  /** 身份证照片（国徽面） */
  id_photo_em_side?: Maybe<Scalars['String']>;
  /** 身份证照片（人像面） */
  id_photo_po_side?: Maybe<Scalars['String']>;
  /** 证件类型 */
  id_type?: Maybe<Scalars['Int']>;
  /** 是否是高级管理员 */
  isAdmin?: Maybe<Scalars['Int']>;
  /** 职位id */
  job_id?: Maybe<Scalars['Int']>;
  /** 职位名称（将要deprecate，请用job） */
  job_title?: Maybe<Scalars['String']>;
  /** 离职日期 */
  last_day?: Maybe<Scalars['DateScalar']>;
  /** 直属上级id */
  manager_id?: Maybe<Scalars['String']>;
  /** 婚姻状况 */
  martial_status?: Maybe<Scalars['Int']>;
  /** 医疗保险 */
  medical_insurance?: Maybe<Scalars['Int']>;
  /** 手机号码 */
  mobile?: Maybe<Scalars['String']>;
  /** 中文姓名 */
  name?: Maybe<Scalars['String']>;
  /** 籍贯 */
  native_region?: Maybe<NativeRegion>;
  /** 飞书open_id */
  open_id?: Maybe<Scalars['String']>;
  /** 离职原因 */
  overboard_note?: Maybe<Scalars['String']>;
  /** 个人邮箱 */
  personal_email?: Maybe<Scalars['String']>;
  /** 主要紧急联系人 */
  primary_emergency_contact?: Maybe<PrimaryEmergencyContact>;
  /** 试用期（月） */
  probation_months?: Maybe<Scalars['Int']>;
  /** 公积金账号 */
  provident_fund_account?: Maybe<Scalars['String']>;
  /** 员工角色 */
  roles?: Maybe<Array<Maybe<Role>>>;
  /** 工资账号 */
  salary_account?: Maybe<Scalars['String']>;
  /** 薪资类型 */
  salary_type?: Maybe<Scalars['String']>;
  /** 社保账号 */
  social_security_account?: Maybe<Scalars['String']>;
  /** 员工状态 */
  status?: Maybe<Scalars['Int']>;
  /** 已停用 */
  title_id?: Maybe<Scalars['Int']>;
  /** 更新日期 */
  updated_at?: Maybe<Scalars['DateScalar']>;
  /** 飞书user_id */
  user_id?: Maybe<Scalars['String']>;
  /** 工龄类型 */
  work_age_type?: Maybe<Scalars['String']>;
  /** 工作地点 */
  work_location?: Maybe<WorkLocation>;
};

export type UserAttachment = {
  __typename?: 'UserAttachment';
  attachmentContents?: Maybe<Array<Maybe<UserAttachmentContent>>>;
  isMulti?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserAttachmentContent = {
  __typename?: 'UserAttachmentContent';
  file_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type UsersFilter = {
  /** 转正开始和结束日期筛选 (eg: "[2023-05-01, 2023-05-10]") */
  actual_conversion_time?: InputMaybe<Array<InputMaybe<Scalars['DateScalar']>>>;
  /** 离职开始和结束日期筛选 (eg: "[2023-05-01, 2023-05-10]") */
  actual_overboard_time?: InputMaybe<Array<InputMaybe<Scalars['DateScalar']>>>;
  /** 转正申请 */
  application?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** 转正状态 */
  application_status?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** 考勤记录日期 */
  attendanceDate?: InputMaybe<Scalars['String']>;
  /** 生日月份 */
  birthday_months?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** 生日开始和结束日期筛选 (eg: ["04-01", "04-25"]) */
  birthday_range?: InputMaybe<Array<InputMaybe<Scalars['DateScalar']>>>;
  /** 员工部门 */
  department_id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** 离职类型 */
  departure_type?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** 人员类型 */
  employee_type?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** 性别 */
  gender_id?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** 考勤组id */
  groupIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** 入职周年筛选 (eg: ["04-01", "04-25"]) */
  hire_anniversary?: InputMaybe<Array<InputMaybe<Scalars['DateScalar']>>>;
  /** 入职开始和结束日期筛选 (eg: "[2023-05-01, 2023-05-10]") */
  hire_dates?: InputMaybe<Array<InputMaybe<Scalars['DateScalar']>>>;
  /** 员工职位 */
  job_title?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** 用户角色, 是Available Roles 的 ENUM */
  roles?: InputMaybe<Array<InputMaybe<AvailableRoles>>>;
  /** 姓名或者电话搜索 */
  search_term?: InputMaybe<Scalars['String']>;
  /** 状态：2等于在职 其余数字等于离职 */
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type UsersList = {
  __typename?: 'UsersList';
  /** 该查询返回的用户 */
  items: Array<User>;
  /** 该查询返回所有items的数量 */
  totalCount: Scalars['Int'];
};

/** 工作地点 */
export type WorkLocation = {
  __typename?: 'WorkLocation';
  /** 工作地点 ID */
  id?: Maybe<Scalars['Int']>;
  /** 工作地点名称 */
  name?: Maybe<Scalars['String']>;
};

export type CreateRole_1MutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;


export type CreateRole_1Mutation = { __typename?: 'Mutation', createRole?: { __typename?: 'Role', name?: string | null, id: string } | null };

export type UpdateRoleNavMutationVariables = Exact<{
  roleId?: InputMaybe<Scalars['String']>;
  navSmIds?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type UpdateRoleNavMutation = { __typename?: 'Mutation', updateRoleNavs?: { __typename?: 'Role', name?: string | null, id: string } | null };

export type AddEmployeeRolesMutationVariables = Exact<{
  roleId?: InputMaybe<Scalars['String']>;
  employeeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type AddEmployeeRolesMutation = { __typename?: 'Mutation', addEmployee2Roles?: { __typename?: 'Role', id: string, name?: string | null } | null };

export type DeleteEmployeeRoleMutationVariables = Exact<{
  roleId?: InputMaybe<Scalars['String']>;
  employeeId?: InputMaybe<Scalars['String']>;
}>;


export type DeleteEmployeeRoleMutation = { __typename?: 'Mutation', deleteEmployeeRole?: { __typename?: 'Role', id: string, name?: string | null } | null };

export type DeleteRoleMutationVariables = Exact<{
  roleId?: InputMaybe<Scalars['String']>;
}>;


export type DeleteRoleMutation = { __typename?: 'Mutation', deleteRole?: { __typename?: 'Role', id: string, name?: string | null } | null };

export type CreateShiftMutationVariables = Exact<{
  createShiftInput?: InputMaybe<CreateShiftInput>;
}>;


export type CreateShiftMutation = { __typename?: 'Mutation', createShift?: { __typename?: 'ShiftList', created_by?: string | null } | null };

export type UpdateShiftMutationVariables = Exact<{
  shiftId: Scalars['String'];
  updateFields: UpdateShiftInput;
}>;


export type UpdateShiftMutation = { __typename?: 'Mutation', updateShift?: { __typename?: 'ShiftList', id: string } | null };

export type DeleteShiftMutationVariables = Exact<{
  shiftId: Scalars['String'];
}>;


export type DeleteShiftMutation = { __typename?: 'Mutation', deleteShift?: { __typename?: 'ShiftList', id: string } | null };

export type AddStoreAdminsMutationVariables = Exact<{
  storeId: Scalars['String'];
  employeeIds: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type AddStoreAdminsMutation = { __typename?: 'Mutation', addStoreAdmins?: { __typename?: 'Store', shop_id?: string | null, storeName?: string | null, managers?: Array<{ __typename?: 'User', id: string, name?: string | null } | null> | null } | null };

export type DeleteStoreAdminsMutationVariables = Exact<{
  storeId: Scalars['String'];
  employeeIds: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type DeleteStoreAdminsMutation = { __typename?: 'Mutation', deleteStoreAdmins?: { __typename?: 'Store', shop_id?: string | null, storeName?: string | null, managers?: Array<{ __typename?: 'User', id: string, name?: string | null } | null> | null } | null };

export type AddAdminsStoresMutationVariables = Exact<{
  employeeIds: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  storeIds: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
}>;


export type AddAdminsStoresMutation = { __typename?: 'Mutation', addAdminsStores?: Array<{ __typename?: 'Store', shop_id?: string | null, storeName?: string | null, status?: number | null, managers?: Array<{ __typename?: 'User', id: string, avatar?: string | null, name?: string | null } | null> | null } | null> | null };

export type UpdateUserMutationVariables = Exact<{
  updateUserId: Scalars['ID'];
  updateFields?: InputMaybe<UpdateUserInput>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, name?: string | null, status?: number | null } | null };

export type DeleteUserAttachmentMutationVariables = Exact<{
  deleteUserAttachmentId: Scalars['ID'];
}>;


export type DeleteUserAttachmentMutation = { __typename?: 'Mutation', deleteUserAttachment?: boolean | null };

export type CreateUserMutationVariables = Exact<{
  createFields?: InputMaybe<CreateUserInput>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string } | null };

export type DeleteUserMutationVariables = Exact<{
  deleteUserId: Scalars['ID'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: boolean | null };

export type AttachmentGroupsQueryVariables = Exact<{
  take: Scalars['Int'];
  skip: Scalars['Int'];
  filter?: InputMaybe<AttGroupFilter>;
}>;


export type AttachmentGroupsQuery = { __typename?: 'Query', attGroups?: { __typename?: 'AttGroupRes', totalCount: number, items: Array<{ __typename?: 'AttGroup', id?: string | null, name?: string | null, group_type?: number | null, shift_lists?: Array<{ __typename?: 'ShiftList', id: string, shift_name: string, on_time?: string | null, off_time?: string | null } | null> | null, leaders?: Array<{ __typename?: 'User', id: string, name?: string | null, avatar?: string | null, department?: { __typename?: 'Department', id: string, name?: string | null } | null } | null> | null, sub_leaders?: Array<{ __typename?: 'User', avatar?: string | null, id: string, name?: string | null, department?: { __typename?: 'Department', id: string, name?: string | null } | null } | null> | null, bind_departments?: Array<{ __typename?: 'Department', name?: string | null, all_employees?: { __typename?: 'UsersList', totalCount: number } | null, employees?: Array<{ __typename?: 'User', id: string, avatar?: string | null, name?: string | null, status?: number | null } | null> | null } | null> | null, bind_employees?: Array<{ __typename?: 'User', id: string, avatar?: string | null, name?: string | null } | null> | null, members?: Array<{ __typename?: 'User', id: string, avatar?: string | null, name?: string | null, status?: number | null } | null> | null }> } | null };

export type AttGroupShiftsQueryVariables = Exact<{
  attGroupByIdId: Scalars['String'];
}>;


export type AttGroupShiftsQuery = { __typename?: 'Query', attGroupById?: { __typename?: 'AttGroup', name?: string | null, shift_lists?: Array<{ __typename?: 'ShiftList', id: string, shift_name: string, on_time?: string | null, off_time?: string | null } | null> | null } | null };

export type AttGroupMembersQueryVariables = Exact<{
  attGroupByIdId: Scalars['String'];
}>;


export type AttGroupMembersQuery = { __typename?: 'Query', attGroupById?: { __typename?: 'AttGroup', members?: Array<{ __typename?: 'User', id: string, name?: string | null, avatar?: string | null, status?: number | null, attendances?: Array<{ __typename?: 'Attendance', date?: any | null, shift?: { __typename?: 'ShiftList', id: string, shift_name: string, on_time?: string | null, off_time?: string | null } | null } | null> | null } | null> | null } | null };

export type GetAddendanceGroupByIdQueryVariables = Exact<{
  attGroupByIdId: Scalars['String'];
}>;


export type GetAddendanceGroupByIdQuery = { __typename?: 'Query', attGroupById?: { __typename?: 'AttGroup', id?: string | null, name?: string | null, bind_departments?: Array<{ __typename?: 'Department', id: string, name?: string | null, all_employees?: { __typename?: 'UsersList', totalCount: number } | null } | null> | null, bind_employees?: Array<{ __typename?: 'User', avatar?: string | null, id: string, name?: string | null, department?: { __typename?: 'Department', name?: string | null } | null } | null> | null, leaders?: Array<{ __typename?: 'User', avatar?: string | null, id: string, name?: string | null, department?: { __typename?: 'Department', name?: string | null } | null } | null> | null, sub_leaders?: Array<{ __typename?: 'User', avatar?: string | null, id: string, name?: string | null, department?: { __typename?: 'Department', name?: string | null } | null } | null> | null, sub_group_leaders?: Array<{ __typename?: 'User', name?: string | null, id: string, avatar?: string | null, department?: { __typename?: 'Department', id: string, name?: string | null } | null } | null> | null, locations?: Array<{ __typename?: 'AttLocation', id?: string | null, name?: string | null, longitude?: number | null, latitude?: number | null, address?: string | null, gps_range?: number | null } | null> | null, shift_lists?: Array<{ __typename?: 'ShiftList', id: string, shift_name: string, on_time?: string | null, off_time?: string | null } | null> | null } | null };

export type StatisticsDayQueryVariables = Exact<{
  statisticsDayInput?: InputMaybe<StatisticsDayInput>;
  take: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type StatisticsDayQuery = { __typename?: 'Query', statisticsDay?: { __typename?: 'Statistics', totalCount?: number | null, items?: Array<{ __typename?: 'Attendance', id?: string | null, clock_in_time?: string | null, clock_out_time?: string | null, clock_in_result?: number | null, clock_out_result?: number | null, hours_of_attendance?: number | null, employee?: { __typename?: 'User', id: string, name?: string | null, salary_type?: string | null, basic_salary?: number | null } | null, clock_out_location?: { __typename?: 'AttendanceLocation', address?: string | null } | null, clock_in_location?: { __typename?: 'AttendanceLocation', address?: string | null } | null, shift?: { __typename?: 'ShiftList', on_time?: string | null, off_time?: string | null } | null } | null> | null } | null };

export type StatisticsMonthQueryVariables = Exact<{
  take: Scalars['Int'];
  skip: Scalars['Int'];
  filter?: InputMaybe<UsersFilter>;
}>;


export type StatisticsMonthQuery = { __typename?: 'Query', users: { __typename?: 'UsersList', totalCount: number, items: Array<{ __typename?: 'User', name?: string | null, id: string, attendances?: Array<{ __typename?: 'Attendance', id?: string | null, clock_in_time?: string | null, clock_out_time?: string | null, clock_out_result?: number | null, clock_in_result?: number | null, date?: any | null, hours_of_attendance?: number | null, shift_id?: string | null } | null> | null }> } };

export type BrandsListQueryVariables = Exact<{
  brandName?: InputMaybe<Scalars['String']>;
}>;


export type BrandsListQuery = { __typename?: 'Query', brands?: Array<{ __typename?: 'Brand', id?: string | null, name?: string | null, stores?: Array<{ __typename?: 'Store', shop_id?: string | null, storeName?: string | null, department_id?: string | null, status?: number | null, managers?: Array<{ __typename?: 'User', id: string, name?: string | null, avatar?: string | null } | null> | null } | null> | null } | null> | null };

export type QueryQueryVariables = Exact<{
  department_id?: InputMaybe<Scalars['String']>;
}>;


export type QueryQuery = { __typename?: 'Query', departmentById?: { __typename?: 'Department', id: string, name?: string | null, child_departments?: Array<{ __typename?: 'Department', id: string, name?: string | null, child_departments?: Array<{ __typename?: 'Department', id: string, name?: string | null, child_departments?: Array<{ __typename?: 'Department', id: string, name?: string | null, child_departments?: Array<{ __typename?: 'Department', id: string, name?: string | null, child_departments?: Array<{ __typename?: 'Department', id: string, name?: string | null } | null> | null } | null> | null } | null> | null } | null> | null } | null> | null } | null };

export type DepartmentsQueryVariables = Exact<{
  take: Scalars['Int'];
  skip: Scalars['Int'];
  filter?: InputMaybe<DepartmentFilter>;
}>;


export type DepartmentsQuery = { __typename?: 'Query', departments?: { __typename?: 'DepartmentRes', totalCount: number, items?: Array<{ __typename?: 'Department', id: string, name?: string | null, all_employees?: { __typename?: 'UsersList', totalCount: number } | null, child_departments?: Array<{ __typename?: 'Department', id: string, name?: string | null } | null> | null } | null> | null } | null };

export type DepartmentByIdQueryVariables = Exact<{
  departmentByIdId?: InputMaybe<Scalars['String']>;
}>;


export type DepartmentByIdQuery = { __typename?: 'Query', departmentById?: { __typename?: 'Department', parent_department?: { __typename?: 'Department', id: string, name?: string | null } | null, child_departments?: Array<{ __typename?: 'Department', id: string, name?: string | null, all_employees?: { __typename?: 'UsersList', totalCount: number } | null } | null> | null } | null };

export type SelectOptionsQueryVariables = Exact<{
  input: FieldInput;
}>;


export type SelectOptionsQuery = { __typename?: 'Query', selectOptions?: Array<{ __typename?: 'OptionRes', field?: string | null, options?: Array<{ __typename?: 'Option', id?: number | null, value?: string | null } | null> | null } | null> | null };

export type RolesListQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;


export type RolesListQuery = { __typename?: 'Query', roles?: Array<{ __typename?: 'Role', id: string, name?: string | null, navs?: Array<{ __typename?: 'NavXlCategory', key: string, title: string, children?: Array<{ __typename?: 'NavBgCategory', key: string, title: string, children?: Array<{ __typename?: 'NavSmCategory', key: string, title: string } | null> | null } | null> | null } | null> | null, employees?: Array<{ __typename?: 'User', id: string, name?: string | null, avatar?: string | null } | null> | null } | null> | null };

export type NavTreeQueryVariables = Exact<{ [key: string]: never; }>;


export type NavTreeQuery = { __typename?: 'Query', navTree?: Array<{ __typename?: 'NavXlCategory', key: string, title: string, children?: Array<{ __typename?: 'NavBgCategory', key: string, title: string, children?: Array<{ __typename?: 'NavSmCategory', key: string, title: string } | null> | null } | null> | null } | null> | null };

export type RoleByIdQueryVariables = Exact<{
  roleByIdId: Scalars['String'];
}>;


export type RoleByIdQuery = { __typename?: 'Query', roleById?: { __typename?: 'Role', id: string, name?: string | null, employees?: Array<{ __typename?: 'User', id: string, avatar?: string | null, mobile?: string | null, name?: string | null, department?: { __typename?: 'Department', name?: string | null } | null } | null> | null, navs?: Array<{ __typename?: 'NavXlCategory', key: string, title: string, children?: Array<{ __typename?: 'NavBgCategory', key: string, title: string, children?: Array<{ __typename?: 'NavSmCategory', key: string, title: string } | null> | null } | null> | null } | null> | null } | null };

export type ShiftListsQueryVariables = Exact<{
  take: Scalars['Int'];
  skip: Scalars['Int'];
  filter?: InputMaybe<ShiftListFilter>;
}>;


export type ShiftListsQuery = { __typename?: 'Query', shiftLists?: { __typename?: 'ShiftListRes', totalCount: number, items: Array<{ __typename?: 'ShiftList', shift_name: string, id: string, on_time?: string | null, off_time?: string | null, created_by?: string | null, updated_at?: any | null }> } | null };

export type ShiftByIdQueryVariables = Exact<{
  shiftByIdId: Scalars['String'];
}>;


export type ShiftByIdQuery = { __typename?: 'Query', shiftById?: { __typename?: 'ShiftList', punch_times?: number | null, shift_name: string, no_need_off?: boolean | null, on_time?: string | null, off_time?: string | null, late_minutes_as_late?: number | null, late_minutes_as_lack?: number | null, early_minutes_as_early?: number | null, early_minutes_as_lack?: number | null } | null };

export type BirthdayStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type BirthdayStatsQuery = { __typename?: 'Query', birthdayStats?: { __typename?: 'BirthdayStats', todayCount?: number | null, thisWeekCount?: number | null, thisMonthCount?: number | null, nextMonthCount?: number | null, lastMonthCount?: number | null } | null };

export type HireDateStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type HireDateStatsQuery = { __typename?: 'Query', hireDateStats?: { __typename?: 'HireDateStats', lastMonthCount?: number | null, nextMonthCount?: number | null, thisMonthCount?: number | null, thisWeekCount?: number | null, todayCount?: number | null } | null };

export type RosterStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type RosterStatsQuery = { __typename?: 'Query', rosterStats?: { __typename?: 'HrStats', awaitUnemployCount?: number | null, internEmployeeCount?: number | null, isEmployedCount?: number | null, notEmployedCount?: number | null, outsourcedEmployeeCount?: number | null, regularEmployeeCount?: number | null, trialEmployeeCount?: number | null } | null };

export type HrOnboardingStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type HrOnboardingStatsQuery = { __typename?: 'Query', hrOnboardingStats?: { __typename?: 'HrOnboardingStats', awaitOnboardingCount?: number | null, todayAwaitOnboardingCount?: number | null, thisMonthAwaitOnboardingCount?: number | null } | null };

export type HrConversionStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type HrConversionStatsQuery = { __typename?: 'Query', hrConversionStats?: { __typename?: 'HrConversionStats', awaitRegularizedCount?: number | null, overdueRegularizedCount?: number | null, thisMonthAwaitRegularizedCount?: number | null, nextMonthAwaitRegularizedCount?: number | null } | null };

export type HrResignStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type HrResignStatsQuery = { __typename?: 'Query', hrResignStats?: { __typename?: 'HrResignStats', awaitHiredCount?: number | null } | null };

export type StoresQueryVariables = Exact<{ [key: string]: never; }>;


export type StoresQuery = { __typename?: 'Query', stores?: Array<{ __typename?: 'Store', shop_id?: string | null, storeName?: string | null, status?: number | null, managers?: Array<{ __typename?: 'User', id: string, name?: string | null, avatar?: string | null } | null> | null } | null> | null };

export type StoresByEmployeeQueryVariables = Exact<{
  storesByEmployeeId: Scalars['String'];
}>;


export type StoresByEmployeeQuery = { __typename?: 'Query', storesByEmployee?: Array<{ __typename?: 'Store', shop_id?: string | null, storeName?: string | null, department?: { __typename?: 'Department', id: string, name?: string | null, child_departments?: Array<{ __typename?: 'Department', id: string, name?: string | null, employees?: Array<{ __typename?: 'User', id: string, status?: number | null, name?: string | null, mobile?: string | null, job_title?: string | null, hire_date?: any | null, employee_type?: number | null, id_number?: string | null, medical_insurance?: number | null, department?: { __typename?: 'Department', id: string, name?: string | null } | null } | null> | null } | null> | null } | null } | null> | null };

export type NaviItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type NaviItemsQuery = { __typename?: 'Query', user?: { __typename?: 'User', avatar?: string | null, id: string, name?: string | null } | null };

export type UsersQueryVariables = Exact<{
  take: Scalars['Int'];
  skip: Scalars['Int'];
  filter?: InputMaybe<UsersFilter>;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UsersList', totalCount: number, items: Array<{ __typename?: 'User', id: string, status?: number | null, employee_form_status?: number | null, name?: string | null, mobile?: string | null, avatar?: string | null, user_id?: string | null, hire_date?: any | null, job_title?: string | null, last_day?: any | null, departure_type?: number | null, birthday?: any | null, gender_id?: number | null, employee_type?: number | null, department_id?: string | null, ethnicity?: number | null, application?: number | null, application_status?: number | null, probation_months?: number | null, provident_fund_account?: string | null, social_security_account?: string | null, bank_name?: string | null, bank_account_number?: string | null, salary_type?: string | null, basic_salary?: number | null, basic_salary_monthly?: number | null, manager_id?: string | null, work_age_type?: string | null, family_address?: string | null, hukou_type?: number | null, hukou_location?: string | null, actual_conversion_time?: any | null, actual_overboard_time?: any | null, overboard_note?: string | null, department?: { __typename?: 'Department', name?: string | null, id: string } | null, native_region?: { __typename?: 'NativeRegion', iso_code?: string | null, name?: string | null } | null, primary_emergency_contact?: { __typename?: 'PrimaryEmergencyContact', name?: string | null, relationship?: number | null, mobile?: string | null } | null }> } };

export type UserByIdQueryVariables = Exact<{
  userByIdId?: InputMaybe<Scalars['String']>;
}>;


export type UserByIdQuery = { __typename?: 'Query', userById?: { __typename?: 'User', user_id?: string | null, id: string, id_number?: string | null, medical_insurance?: number | null, status?: number | null, employee_form_status?: number | null, name?: string | null, mobile?: string | null, avatar?: string | null, hire_date?: any | null, job_id?: number | null, job_title?: string | null, last_day?: any | null, departure_type?: number | null, birthday?: any | null, gender_id?: number | null, employee_type?: number | null, department_id?: string | null, ethnicity?: number | null, application?: number | null, application_status?: number | null, probation_months?: number | null, provident_fund_account?: string | null, social_security_account?: string | null, bank_name?: string | null, bank_account_number?: string | null, salary_type?: string | null, basic_salary?: number | null, basic_salary_monthly?: number | null, manager_id?: string | null, work_age_type?: string | null, family_address?: string | null, hukou_type?: number | null, hukou_location?: string | null, department?: { __typename?: 'Department', name?: string | null, id: string } | null, native_region?: { __typename?: 'NativeRegion', iso_code?: string | null, name?: string | null } | null, primary_emergency_contact?: { __typename?: 'PrimaryEmergencyContact', name?: string | null, relationship?: number | null, mobile?: string | null } | null } | null };

export type UsersByDepartmenstIdQueryVariables = Exact<{
  department_id?: InputMaybe<Scalars['String']>;
  take: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type UsersByDepartmenstIdQuery = { __typename?: 'Query', usersByDepartmentId?: { __typename?: 'UsersList', totalCount: number, items: Array<{ __typename?: 'User', id: string, name?: string | null, user_id?: string | null, avatar?: string | null, hire_date?: any | null, job_title?: string | null, status?: number | null, mobile?: string | null, department?: { __typename?: 'Department', name?: string | null } | null }> } | null };

export type BirthdayPageUsersQueryQueryVariables = Exact<{
  take: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type BirthdayPageUsersQueryQuery = { __typename?: 'Query', users: { __typename?: 'UsersList', totalCount: number, items: Array<{ __typename?: 'User', name?: string | null, id: string, avatar?: string | null, status?: number | null, job_title?: string | null, birthday?: any | null }> } };

export type UsersSearchQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']>;
}>;


export type UsersSearchQuery = { __typename?: 'Query', usersSearch: { __typename?: 'UsersList', totalCount: number, items: Array<{ __typename?: 'User', name?: string | null, id: string, hire_date?: any | null, department_id?: string | null, avatar?: string | null, mobile?: string | null, job_title?: string | null, user_id?: string | null, status?: number | null, department?: { __typename?: 'Department', name?: string | null } | null }> } };

export type UserAttachmentsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type UserAttachmentsQuery = { __typename?: 'Query', userAttachmentsById?: Array<{ __typename?: 'UserAttachment', isMulti?: boolean | null, key?: string | null, kind?: string | null, name?: string | null, attachmentContents?: Array<{ __typename?: 'UserAttachmentContent', file_name?: string | null, id?: string | null, path?: string | null } | null> | null } | null> | null };

export type HrStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type HrStatsQuery = { __typename?: 'Query', hrStats?: { __typename?: 'HrStats', awaitUnemployCount?: number | null, internEmployeeCount?: number | null, isEmployedCount?: number | null, notEmployedCount?: number | null, outsourcedEmployeeCount?: number | null, regularEmployeeCount?: number | null, trialEmployeeCount?: number | null } | null };

export type EmployeesByRolesQueryVariables = Exact<{
  take: Scalars['Int'];
  skip: Scalars['Int'];
  filter?: InputMaybe<UsersFilter>;
}>;


export type EmployeesByRolesQuery = { __typename?: 'Query', users: { __typename?: 'UsersList', totalCount: number, items: Array<{ __typename?: 'User', name?: string | null, mobile?: string | null, avatar?: string | null, id: string, roles?: Array<{ __typename?: 'Role', id: string, name?: string | null, ranking?: number | null } | null> | null, department?: { __typename?: 'Department', name?: string | null } | null }> } };


export const CreateRole_1Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRole_1"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateRole_1Mutation, CreateRole_1MutationVariables>;
export const UpdateRoleNavDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateRoleNav"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"navSmIds"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRoleNavs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"role_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}},{"kind":"Argument","name":{"kind":"Name","value":"nav_sm_ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"navSmIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateRoleNavMutation, UpdateRoleNavMutationVariables>;
export const AddEmployeeRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addEmployeeRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeeIds"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addEmployee2Roles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"role_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}},{"kind":"Argument","name":{"kind":"Name","value":"employee_ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeeIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddEmployeeRolesMutation, AddEmployeeRolesMutationVariables>;
export const DeleteEmployeeRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEmployeeRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEmployeeRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"role_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}},{"kind":"Argument","name":{"kind":"Name","value":"employee_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteEmployeeRoleMutation, DeleteEmployeeRoleMutationVariables>;
export const DeleteRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"role_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteRoleMutation, DeleteRoleMutationVariables>;
export const CreateShiftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateShift"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createShiftInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateShiftInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createShift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createShiftInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createShiftInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_by"}}]}}]}}]} as unknown as DocumentNode<CreateShiftMutation, CreateShiftMutationVariables>;
export const UpdateShiftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateShift"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shiftId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateFields"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateShiftInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateShift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"shift_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shiftId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateFields"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateFields"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateShiftMutation, UpdateShiftMutationVariables>;
export const DeleteShiftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteShift"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shiftId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteShift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"shift_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shiftId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteShiftMutation, DeleteShiftMutationVariables>;
export const AddStoreAdminsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addStoreAdmins"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeeIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addStoreAdmins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"store_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"employee_ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeeIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shop_id"}},{"kind":"Field","name":{"kind":"Name","value":"storeName"}},{"kind":"Field","name":{"kind":"Name","value":"managers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AddStoreAdminsMutation, AddStoreAdminsMutationVariables>;
export const DeleteStoreAdminsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteStoreAdmins"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeeIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteStoreAdmins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"store_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"employee_ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeeIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shop_id"}},{"kind":"Field","name":{"kind":"Name","value":"storeName"}},{"kind":"Field","name":{"kind":"Name","value":"managers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteStoreAdminsMutation, DeleteStoreAdminsMutationVariables>;
export const AddAdminsStoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddAdminsStores"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeeIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storeIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addAdminsStores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"employee_ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeeIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"store_ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storeIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shop_id"}},{"kind":"Field","name":{"kind":"Name","value":"storeName"}},{"kind":"Field","name":{"kind":"Name","value":"managers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<AddAdminsStoresMutation, AddAdminsStoresMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateFields"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateFields"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateFields"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserAttachmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUserAttachment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserAttachmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUserAttachment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserAttachmentId"}}}]}]}}]} as unknown as DocumentNode<DeleteUserAttachmentMutation, DeleteUserAttachmentMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createFields"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createFields"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createFields"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteUserId"}}}]}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const AttachmentGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AttachmentGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AttGroupFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"group_type"}},{"kind":"Field","name":{"kind":"Name","value":"shift_lists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shift_name"}},{"kind":"Field","name":{"kind":"Name","value":"on_time"}},{"kind":"Field","name":{"kind":"Name","value":"off_time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"leaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sub_leaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bind_departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"all_employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bind_employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<AttachmentGroupsQuery, AttachmentGroupsQueryVariables>;
export const AttGroupShiftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AttGroupShifts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attGroupByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attGroupById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attGroupByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shift_lists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shift_name"}},{"kind":"Field","name":{"kind":"Name","value":"on_time"}},{"kind":"Field","name":{"kind":"Name","value":"off_time"}}]}}]}}]}}]} as unknown as DocumentNode<AttGroupShiftsQuery, AttGroupShiftsQueryVariables>;
export const AttGroupMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AttGroupMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attGroupByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attGroupById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attGroupByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"attendances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shift_name"}},{"kind":"Field","name":{"kind":"Name","value":"on_time"}},{"kind":"Field","name":{"kind":"Name","value":"off_time"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AttGroupMembersQuery, AttGroupMembersQueryVariables>;
export const GetAddendanceGroupByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAddendanceGroupById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attGroupByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attGroupById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attGroupByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bind_departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"all_employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bind_employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"leaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sub_leaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sub_group_leaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"gps_range"}}]}},{"kind":"Field","name":{"kind":"Name","value":"shift_lists"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shift_name"}},{"kind":"Field","name":{"kind":"Name","value":"on_time"}},{"kind":"Field","name":{"kind":"Name","value":"off_time"}}]}}]}}]}}]} as unknown as DocumentNode<GetAddendanceGroupByIdQuery, GetAddendanceGroupByIdQueryVariables>;
export const StatisticsDayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StatisticsDay"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"statisticsDayInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"StatisticsDayInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"statisticsDay"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"statisticsDayInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"statisticsDayInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"salary_type"}},{"kind":"Field","name":{"kind":"Name","value":"basic_salary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clock_in_time"}},{"kind":"Field","name":{"kind":"Name","value":"clock_out_time"}},{"kind":"Field","name":{"kind":"Name","value":"clock_out_location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clock_in_location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"clock_in_result"}},{"kind":"Field","name":{"kind":"Name","value":"clock_out_result"}},{"kind":"Field","name":{"kind":"Name","value":"hours_of_attendance"}},{"kind":"Field","name":{"kind":"Name","value":"shift"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"on_time"}},{"kind":"Field","name":{"kind":"Name","value":"off_time"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<StatisticsDayQuery, StatisticsDayQueryVariables>;
export const StatisticsMonthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"statisticsMonth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UsersFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attendances"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clock_in_time"}},{"kind":"Field","name":{"kind":"Name","value":"clock_out_time"}},{"kind":"Field","name":{"kind":"Name","value":"clock_out_result"}},{"kind":"Field","name":{"kind":"Name","value":"clock_in_result"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"hours_of_attendance"}},{"kind":"Field","name":{"kind":"Name","value":"shift_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<StatisticsMonthQuery, StatisticsMonthQueryVariables>;
export const BrandsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"brandsList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"brandName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brands"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"brandName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"brandName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shop_id"}},{"kind":"Field","name":{"kind":"Name","value":"storeName"}},{"kind":"Field","name":{"kind":"Name","value":"managers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"department_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<BrandsListQuery, BrandsListQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"department_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"departmentById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"department_id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"child_departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"child_departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"child_departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"child_departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"child_departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const DepartmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Departments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DepartmentFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"departments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"all_employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"child_departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DepartmentsQuery, DepartmentsQueryVariables>;
export const DepartmentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DepartmentById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"departmentByIdId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"departmentById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"departmentByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent_department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"child_departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"all_employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DepartmentByIdQuery, DepartmentByIdQueryVariables>;
export const SelectOptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SelectOptions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FieldInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"selectOptions"},"name":{"kind":"Name","value":"options"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<SelectOptionsQuery, SelectOptionsQueryVariables>;
export const RolesListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RolesList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"navs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<RolesListQuery, RolesListQueryVariables>;
export const NavTreeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NavTree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navTree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NavTreeQuery, NavTreeQueryVariables>;
export const RoleByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RoleById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roleById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"navs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<RoleByIdQuery, RoleByIdQueryVariables>;
export const ShiftListsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShiftLists"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ShiftListFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shiftLists"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift_name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"on_time"}},{"kind":"Field","name":{"kind":"Name","value":"off_time"}},{"kind":"Field","name":{"kind":"Name","value":"created_by"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<ShiftListsQuery, ShiftListsQueryVariables>;
export const ShiftByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShiftById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shiftByIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shiftById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shiftByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"punch_times"}},{"kind":"Field","name":{"kind":"Name","value":"shift_name"}},{"kind":"Field","name":{"kind":"Name","value":"no_need_off"}},{"kind":"Field","name":{"kind":"Name","value":"on_time"}},{"kind":"Field","name":{"kind":"Name","value":"off_time"}},{"kind":"Field","name":{"kind":"Name","value":"late_minutes_as_late"}},{"kind":"Field","name":{"kind":"Name","value":"late_minutes_as_lack"}},{"kind":"Field","name":{"kind":"Name","value":"early_minutes_as_early"}},{"kind":"Field","name":{"kind":"Name","value":"early_minutes_as_lack"}}]}}]}}]} as unknown as DocumentNode<ShiftByIdQuery, ShiftByIdQueryVariables>;
export const BirthdayStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BirthdayStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"birthdayStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"todayCount"}},{"kind":"Field","name":{"kind":"Name","value":"thisWeekCount"}},{"kind":"Field","name":{"kind":"Name","value":"thisMonthCount"}},{"kind":"Field","name":{"kind":"Name","value":"nextMonthCount"}},{"kind":"Field","name":{"kind":"Name","value":"lastMonthCount"}}]}}]}}]} as unknown as DocumentNode<BirthdayStatsQuery, BirthdayStatsQueryVariables>;
export const HireDateStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HireDateStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hireDateStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastMonthCount"}},{"kind":"Field","name":{"kind":"Name","value":"nextMonthCount"}},{"kind":"Field","name":{"kind":"Name","value":"thisMonthCount"}},{"kind":"Field","name":{"kind":"Name","value":"thisWeekCount"}},{"kind":"Field","name":{"kind":"Name","value":"todayCount"}}]}}]}}]} as unknown as DocumentNode<HireDateStatsQuery, HireDateStatsQueryVariables>;
export const RosterStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RosterStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"rosterStats"},"name":{"kind":"Name","value":"hrStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"awaitUnemployCount"}},{"kind":"Field","name":{"kind":"Name","value":"internEmployeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"isEmployedCount"}},{"kind":"Field","name":{"kind":"Name","value":"notEmployedCount"}},{"kind":"Field","name":{"kind":"Name","value":"outsourcedEmployeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"regularEmployeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"trialEmployeeCount"}}]}}]}}]} as unknown as DocumentNode<RosterStatsQuery, RosterStatsQueryVariables>;
export const HrOnboardingStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HrOnboardingStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hrOnboardingStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"awaitOnboardingCount"}},{"kind":"Field","name":{"kind":"Name","value":"todayAwaitOnboardingCount"}},{"kind":"Field","name":{"kind":"Name","value":"thisMonthAwaitOnboardingCount"}}]}}]}}]} as unknown as DocumentNode<HrOnboardingStatsQuery, HrOnboardingStatsQueryVariables>;
export const HrConversionStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HrConversionStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hrConversionStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"awaitRegularizedCount"}},{"kind":"Field","name":{"kind":"Name","value":"overdueRegularizedCount"}},{"kind":"Field","name":{"kind":"Name","value":"thisMonthAwaitRegularizedCount"}},{"kind":"Field","name":{"kind":"Name","value":"nextMonthAwaitRegularizedCount"}}]}}]}}]} as unknown as DocumentNode<HrConversionStatsQuery, HrConversionStatsQueryVariables>;
export const HrResignStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HrResignStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hrResignStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"awaitHiredCount"}}]}}]}}]} as unknown as DocumentNode<HrResignStatsQuery, HrResignStatsQueryVariables>;
export const StoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Stores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stores"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shop_id"}},{"kind":"Field","name":{"kind":"Name","value":"managers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"storeName"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<StoresQuery, StoresQueryVariables>;
export const StoresByEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StoresByEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storesByEmployeeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"storesByEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storesByEmployeeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shop_id"}},{"kind":"Field","name":{"kind":"Name","value":"storeName"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"child_departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"job_title"}},{"kind":"Field","name":{"kind":"Name","value":"hire_date"}},{"kind":"Field","name":{"kind":"Name","value":"employee_type"}},{"kind":"Field","name":{"kind":"Name","value":"id_number"}},{"kind":"Field","name":{"kind":"Name","value":"medical_insurance"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<StoresByEmployeeQuery, StoresByEmployeeQueryVariables>;
export const NaviItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NaviItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<NaviItemsQuery, NaviItemsQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UsersFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"employee_form_status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"hire_date"}},{"kind":"Field","name":{"kind":"Name","value":"job_title"}},{"kind":"Field","name":{"kind":"Name","value":"last_day"}},{"kind":"Field","name":{"kind":"Name","value":"departure_type"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"departure_type"}},{"kind":"Field","name":{"kind":"Name","value":"gender_id"}},{"kind":"Field","name":{"kind":"Name","value":"employee_type"}},{"kind":"Field","name":{"kind":"Name","value":"department_id"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ethnicity"}},{"kind":"Field","name":{"kind":"Name","value":"application"}},{"kind":"Field","name":{"kind":"Name","value":"application_status"}},{"kind":"Field","name":{"kind":"Name","value":"native_region"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iso_code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primary_emergency_contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"probation_months"}},{"kind":"Field","name":{"kind":"Name","value":"provident_fund_account"}},{"kind":"Field","name":{"kind":"Name","value":"social_security_account"}},{"kind":"Field","name":{"kind":"Name","value":"bank_name"}},{"kind":"Field","name":{"kind":"Name","value":"bank_account_number"}},{"kind":"Field","name":{"kind":"Name","value":"salary_type"}},{"kind":"Field","name":{"kind":"Name","value":"basic_salary"}},{"kind":"Field","name":{"kind":"Name","value":"basic_salary_monthly"}},{"kind":"Field","name":{"kind":"Name","value":"manager_id"}},{"kind":"Field","name":{"kind":"Name","value":"work_age_type"}},{"kind":"Field","name":{"kind":"Name","value":"family_address"}},{"kind":"Field","name":{"kind":"Name","value":"hukou_type"}},{"kind":"Field","name":{"kind":"Name","value":"hukou_location"}},{"kind":"Field","name":{"kind":"Name","value":"actual_conversion_time"}},{"kind":"Field","name":{"kind":"Name","value":"actual_overboard_time"}},{"kind":"Field","name":{"kind":"Name","value":"overboard_note"}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const UserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userByIdId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userByIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"id_number"}},{"kind":"Field","name":{"kind":"Name","value":"medical_insurance"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"employee_form_status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"hire_date"}},{"kind":"Field","name":{"kind":"Name","value":"job_id"}},{"kind":"Field","name":{"kind":"Name","value":"job_title"}},{"kind":"Field","name":{"kind":"Name","value":"last_day"}},{"kind":"Field","name":{"kind":"Name","value":"departure_type"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"departure_type"}},{"kind":"Field","name":{"kind":"Name","value":"gender_id"}},{"kind":"Field","name":{"kind":"Name","value":"employee_type"}},{"kind":"Field","name":{"kind":"Name","value":"department_id"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ethnicity"}},{"kind":"Field","name":{"kind":"Name","value":"application"}},{"kind":"Field","name":{"kind":"Name","value":"application_status"}},{"kind":"Field","name":{"kind":"Name","value":"native_region"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iso_code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primary_emergency_contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"relationship"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"probation_months"}},{"kind":"Field","name":{"kind":"Name","value":"provident_fund_account"}},{"kind":"Field","name":{"kind":"Name","value":"social_security_account"}},{"kind":"Field","name":{"kind":"Name","value":"bank_name"}},{"kind":"Field","name":{"kind":"Name","value":"bank_account_number"}},{"kind":"Field","name":{"kind":"Name","value":"salary_type"}},{"kind":"Field","name":{"kind":"Name","value":"basic_salary"}},{"kind":"Field","name":{"kind":"Name","value":"basic_salary_monthly"}},{"kind":"Field","name":{"kind":"Name","value":"manager_id"}},{"kind":"Field","name":{"kind":"Name","value":"work_age_type"}},{"kind":"Field","name":{"kind":"Name","value":"family_address"}},{"kind":"Field","name":{"kind":"Name","value":"hukou_type"}},{"kind":"Field","name":{"kind":"Name","value":"hukou_location"}}]}}]}}]} as unknown as DocumentNode<UserByIdQuery, UserByIdQueryVariables>;
export const UsersByDepartmenstIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsersByDepartmenstId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"department_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersByDepartmentId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"department_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"department_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"hire_date"}},{"kind":"Field","name":{"kind":"Name","value":"job_title"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<UsersByDepartmenstIdQuery, UsersByDepartmenstIdQueryVariables>;
export const BirthdayPageUsersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BirthdayPageUsersQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"job_title"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}}]}}]}}]}}]} as unknown as DocumentNode<BirthdayPageUsersQueryQuery, BirthdayPageUsersQueryQueryVariables>;
export const UsersSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsersSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersSearch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hire_date"}},{"kind":"Field","name":{"kind":"Name","value":"department_id"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"job_title"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<UsersSearchQuery, UsersSearchQueryVariables>;
export const UserAttachmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userAttachments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAttachmentsById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachmentContents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file_name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isMulti"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"kind"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UserAttachmentsQuery, UserAttachmentsQueryVariables>;
export const HrStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HrStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hrStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"awaitUnemployCount"}},{"kind":"Field","name":{"kind":"Name","value":"internEmployeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"isEmployedCount"}},{"kind":"Field","name":{"kind":"Name","value":"notEmployedCount"}},{"kind":"Field","name":{"kind":"Name","value":"outsourcedEmployeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"regularEmployeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"trialEmployeeCount"}}]}}]}}]} as unknown as DocumentNode<HrStatsQuery, HrStatsQueryVariables>;
export const EmployeesByRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EmployeesByRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UsersFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ranking"}}]}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<EmployeesByRolesQuery, EmployeesByRolesQueryVariables>;