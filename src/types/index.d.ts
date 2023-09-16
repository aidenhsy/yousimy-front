export interface DashItems {
  navItems: NavItem[];
  xlItems: XlItem[];
  xlName: string;
  bgName: string;
  smName: string;
  userInfo: UserInfo;
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
}

export interface NavItem {
  name: string;
  children?: { nav_sm_name: string; url: string }[];
}

export interface XlItem {
  id: number;
  name: string;
  url: string;
}
// declare interface Window {
//   _AMapSecurityConfig: {
//     securityJsCode: string
//   }
// }
declare global {
  interface Window {
    _AMapSecurityConfig: {
      securityJsCode: string
    };
  }
}


