export interface DashItems {
  navItems: NavItem[];
  currentNav?: CurrentNav;
  userInfo: UserInfo;
}

export interface CurrentNav {
  nsc_id: number;
  nsc_name: string;
  nsc_url: string;
  nbc_id: number;
  nbc_name: string;
  nxl_name: string;
  nav_xl_url: string;
  nxl_id: number;
}
export interface UserInfo {
  id: string;
  name: string;
  department_id: string;
  avatar: string;
  department: Department;
  job: string;
}

export interface Department {
  id: string;
  name: string;
}

export enum EmployeePhotoTypes {
  id_photo = 'id_photo',
  id_photo_em_side = 'id_photo_em_side',
  id_photo_po_side = 'id_photo_po_side',
  health_card_image = 'health_card_image',
  customField_1662357201897 = 'customField_1662357201897',
  customField_1662357177496 = 'customField_1662357177496',
  customField_1662357051814 = 'customField_1662357051814',
  customField_1662357008224 = 'customField_1662357008224',
  custom_7239232061806020134 = 'custom_7239232061806020134',
  customField_1662357222887 = 'customField_1662357222887',
  customField_1662357152436 = 'customField_1662357152436',
  customField_1662357127001 = 'customField_1662357127001',
  customField_1662357100065 = 'customField_1662357100065',
}

export interface NavItem {
  nxl_id: number;
  nxl_name: string;
  nav_xl_url: string;
  nbc: NavBigCategory[];
}

export interface NavBigCategory {
  label: string;
  key: string;
  children: NavSmCategory[];
}

export interface NavSmCategory {
  label: string;
  key: string;
  url: string;
  side_nav_visible: number;
}

export interface XlItem {
  id: number;
  name: string;
  url: string;
}
