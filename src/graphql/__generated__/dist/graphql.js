"use strict";
exports.__esModule = true;
exports.ViewMonthlySalaryDocument = exports.VerifyEmployeeFieldsDocument = exports.SupplyItemsByPkDocument = exports.StoreEmployeeDocument = exports.StoreDepartmentsDocument = exports.StoresEmployeesStatusCountDocument = exports.StoresEmployeesDocument = exports.StoreListDocument = exports.StoresDocument = exports.StoreDepartmentsTreeDocument = exports.SolditemsSummaryDocument = exports.ShiftByIdDocument = exports.ShiftsListDocument = exports.GetSalaryTypesByPkDocument = exports.GetSalaryTypesDocument = exports.RolesByIdDocument = exports.NavTreeListDocument = exports.RoleListsDocument = exports.GetLeaveTypesByPkDocument = exports.GetLeaveTypesDocument = exports.FoodItemsByPkDocument = exports.EmployeeByPkAttendancesDocument = exports.EmployeeSalaryMonthlyDocument = exports.EmployeesByPkDocument = exports.EmployeeAttachmentDocument = exports.EmployeesStatusCountDocument = exports.EmployessDocument = exports.EmployeeInsuranceDocument = exports.EmployeeMonthlySalaryDocument = exports.DsStoreBillsDocument = exports.DepartmentsDocument = exports.DepartmentsEmployeesDocument = exports.ViewDailyItemsSoldDocument = exports.BrandsStoresDocument = exports.BrandsDocument = exports.GetBonusDeductionTypesDocument = exports.GetBonusDeductionsDocument = exports.AttendnceListDocument = exports.AttendanceGroupShiftsDocument = exports.AttendanceGroupByIdDocument = exports.AttdanceGroupsDocument = exports.InsertStoreEmployeeDocument = exports.CreateStoreEmployeeDocument = exports.DeleteStoreEmployeeDocument = exports.DeleteShiftDocument = exports.UpdateShiftByIdDocument = exports.CreateShiftDocument = exports.InsertServiceEntitlementOneDocument = exports.CreateRoleNavDocument = exports.DeleteRoleNavDocument = exports.DeleteEmployeesRoleDocument = exports.CreateEmployeesRoleDocument = exports.UpdateRoleDocument = exports.CreateRoleDocument = exports.DeleteRoleDocument = exports.DeleteEmployeeAttachmentDocument = exports.DeleteEmployeeDocument = exports.UpdateEmployeeDocument = exports.CreateEmployeesDocument = exports.UpdateEmployeeMonthlySalaryDocument = exports.CreateMonthlySalaryDocument = exports.DeleteDepartmentsEmployeesByPkDocument = exports.InsertDepartmentsEmployeesDocument = exports.UpdateDepartmentDocument = exports.DeleteBrandsEmployeesByPkDocument = exports.InsertBrandsEmployeesOneDocument = exports.UpdateAttendanceByIdDocument = exports.UpdateAttendanceDocument = exports.CreateAttendanceDocument = exports.DeleteAttendanceDocument = exports.CreateAttendanceGroupShiftsDocument = exports.DeleteAttendanceGroupShiftsDocument = exports.UpdateAttendanceGroupDocument = exports.CreateAttendanchGroupDocument = exports.DeleteAttendanchGroupByIdDocument = exports.CreateAttendanceGroupSubLeadersDocument = exports.DeleteAttendanceGroupSubLeadersDocument = exports.DeleteAttendanceLocationDocument = exports.CreateAttendanceLocationsDocument = exports.UpdateAttendanceLocationsDocument = exports.CreateAttendanceGroupLeadersDocument = exports.DeleteAttendanceGroupLeadersDocument = exports.View_Solditems_Select_Column = exports.View_Monthly_Salary_Select_Column = exports.View_Daily_Items_Sold_Select_Column = exports.Supplyrdc_Update_Column = exports.Supplyrdc_Select_Column = exports.Supplyrdc_Constraint = exports.Supplyitemunits_Update_Column = exports.Supplyitemunits_Select_Column = exports.Supplyitemunits_Constraint = exports.Supplyitemtypes_Update_Column = exports.Supplyitemtypes_Select_Column = exports.Supplyitemtypes_Constraint = exports.Supplyitems_Update_Column = exports.Supplyitems_Select_Column = exports.Supplyitems_Constraint = exports.Suppliers_Update_Column = exports.Suppliers_Select_Column = exports.Suppliers_Constraint = exports.Stores_Update_Column = exports.Stores_Select_Column = exports.Stores_Constraint = exports.Store_Employee_Update_Column = exports.Store_Employee_Select_Column = exports.Store_Employee_Constraint = exports.Solditems_Update_Column = exports.Solditems_Summary_Select_Column = exports.Solditems_Select_Column = exports.Solditems_Constraint = exports.Shift_Lists_Update_Column = exports.Shift_Lists_Select_Column = exports.Shift_Lists_Constraint = exports.Settledetails_Update_Column = exports.Settledetails_Select_Column = exports.Settledetails_Constraint = exports.Service_Entitlement_Update_Column = exports.Service_Entitlement_Select_Column = exports.Service_Entitlement_Constraint = exports.Scopes_Update_Column = exports.Scopes_Select_Column = exports.Scopes_Constraint = exports.Scope_Nav_Sm_Categories_Update_Column = exports.Scope_Nav_Sm_Categories_Select_Column = exports.Scope_Nav_Sm_Categories_Constraint = exports.Salesitemsdata_Update_Column = exports.Salesitemsdata_Select_Column = exports.Salesitemsdata_Constraint = exports.Salary_Types_Update_Column = exports.Salary_Types_Select_Column = exports.Salary_Types_Constraint = exports.Roles_Update_Column = exports.Roles_Select_Column = exports.Roles_Constraint = exports.Role_Scope_Update_Column = exports.Role_Scope_Select_Column = exports.Role_Scope_Constraint = exports.Role_Nav_Sm_Categories_Update_Column = exports.Role_Nav_Sm_Categories_Select_Column = exports.Role_Nav_Sm_Categories_Constraint = exports.Organstores_Update_Column = exports.Organstores_Select_Column = exports.Organstores_Constraint = exports.Order_By = exports.Nav_Xl_Categories_Update_Column = exports.Nav_Xl_Categories_Select_Column = exports.Nav_Xl_Categories_Constraint = exports.Nav_Sm_Categories_Update_Column = exports.Nav_Sm_Categories_Select_Column = exports.Nav_Sm_Categories_Constraint = exports.Nav_Bg_Categories_Update_Column = exports.Nav_Bg_Categories_Select_Column = exports.Nav_Bg_Categories_Constraint = exports.Monthlysalary_Update_Column = exports.Monthlysalary_Select_Column = exports.Monthlysalary_Constraint = exports.Leave_Types_Update_Column = exports.Leave_Types_Select_Column = exports.Leave_Types_Constraint = exports.Ingredients_Update_Column = exports.Ingredients_Select_Column = exports.Ingredients_Constraint = exports.Fooditems_Update_Column = exports.Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = exports.Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = exports.Fooditems_Select_Column = exports.Fooditems_Constraint = exports.Foodcategories_Update_Column = exports.Foodcategories_Select_Column = exports.Foodcategories_Constraint = exports.Employees_Update_Column = exports.Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = exports.Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = exports.Employees_Select_Column = exports.Employees_Roles_Update_Column = exports.Employees_Roles_Select_Column = exports.Employees_Roles_Constraint = exports.Employees_Constraint = exports.Employee_Leaves_Update_Column = exports.Employee_Leaves_Select_Column = exports.Employee_Leaves_Constraint = exports.Employee_Insurance_Update_Column = exports.Employee_Insurance_Select_Column = exports.Employee_Insurance_Constraint = exports.Employee_Attachments_Update_Column = exports.Employee_Attachments_Select_Column = exports.Employee_Attachments_Constraint = exports.Dsstorebills_Update_Column = exports.Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = exports.Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = exports.Dsstorebills_Select_Column = exports.Dsstorebills_Constraint = exports.Departments_Update_Column = exports.Departments_Stores_Update_Column = exports.Departments_Stores_Select_Column = exports.Departments_Stores_Constraint = exports.Departments_Select_Column = exports.Departments_Employees_Update_Column = exports.Departments_Employees_Select_Column = exports.Departments_Employees_Constraint = exports.Departments_Constraint = exports.Cursor_Ordering = exports.Brands_Update_Column = exports.Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = exports.Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = exports.Brands_Select_Column = exports.Brands_Employees_Update_Column = exports.Brands_Employees_Select_Column = exports.Brands_Employees_Constraint = exports.Brands_Constraint = exports.Bonusdeductiontypes_Update_Column = exports.Bonusdeductiontypes_Select_Column = exports.Bonusdeductiontypes_Constraint = exports.Bonusdeductions_Update_Column = exports.Bonusdeductions_Select_Column = exports.Bonusdeductions_Constraint = exports.Bills_Update_Column = exports.Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = exports.Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = exports.Bills_Select_Column = exports.Bills_Constraint = exports.Attendance_Update_Column = exports.Attendance_Select_Column = exports.Attendance_Locations_Update_Column = exports.Attendance_Locations_Select_Column = exports.Attendance_Locations_Constraint = exports.Attendance_Groups_Update_Column = exports.Attendance_Groups_Select_Column = exports.Attendance_Groups_Constraint = exports.Attendance_Group_Subleaders_Update_Column = exports.Attendance_Group_Subleaders_Select_Column = exports.Attendance_Group_Subleaders_Constraint = exports.Attendance_Group_Shifts_Update_Column = exports.Attendance_Group_Shifts_Select_Column = exports.Attendance_Group_Shifts_Constraint = exports.Attendance_Group_Leaders_Update_Column = exports.Attendance_Group_Leaders_Select_Column = exports.Attendance_Group_Leaders_Constraint = exports.Attendance_Constraint = void 0;
/** unique or primary key constraints on table "attendance" */
var Attendance_Constraint;
(function (Attendance_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Attendance_Constraint["AttendancePrimary2"] = "attendancePRIMARY2";
    /** unique or primary key constraint on columns "employee_id", "date" */
    Attendance_Constraint["UniqueDateEmployee6"] = "unique_date_employee6";
})(Attendance_Constraint = exports.Attendance_Constraint || (exports.Attendance_Constraint = {}));
/** unique or primary key constraints on table "attendance_group_leaders" */
var Attendance_Group_Leaders_Constraint;
(function (Attendance_Group_Leaders_Constraint) {
    /** unique or primary key constraint on columns "employee_id", "attendance_group_id" */
    Attendance_Group_Leaders_Constraint["AttendanceGroupLeadersPrimary3"] = "attendance_group_leadersPRIMARY3";
    /** unique or primary key constraint on columns "employee_id", "attendance_group_id" */
    Attendance_Group_Leaders_Constraint["UniqueCombinationIdx10"] = "unique_combination_idx10";
})(Attendance_Group_Leaders_Constraint = exports.Attendance_Group_Leaders_Constraint || (exports.Attendance_Group_Leaders_Constraint = {}));
/** select columns of table "attendance_group_leaders" */
var Attendance_Group_Leaders_Select_Column;
(function (Attendance_Group_Leaders_Select_Column) {
    /** column name */
    Attendance_Group_Leaders_Select_Column["AttendanceGroupId"] = "attendance_group_id";
    /** column name */
    Attendance_Group_Leaders_Select_Column["EmployeeId"] = "employee_id";
})(Attendance_Group_Leaders_Select_Column = exports.Attendance_Group_Leaders_Select_Column || (exports.Attendance_Group_Leaders_Select_Column = {}));
/** update columns of table "attendance_group_leaders" */
var Attendance_Group_Leaders_Update_Column;
(function (Attendance_Group_Leaders_Update_Column) {
    /** column name */
    Attendance_Group_Leaders_Update_Column["AttendanceGroupId"] = "attendance_group_id";
    /** column name */
    Attendance_Group_Leaders_Update_Column["EmployeeId"] = "employee_id";
})(Attendance_Group_Leaders_Update_Column = exports.Attendance_Group_Leaders_Update_Column || (exports.Attendance_Group_Leaders_Update_Column = {}));
/** unique or primary key constraints on table "attendance_group_shifts" */
var Attendance_Group_Shifts_Constraint;
(function (Attendance_Group_Shifts_Constraint) {
    /** unique or primary key constraint on columns "shift_list_id", "attendance_group_id" */
    Attendance_Group_Shifts_Constraint["AttendanceGroupShiftsPrimary4"] = "attendance_group_shiftsPRIMARY4";
    /** unique or primary key constraint on columns "shift_list_id", "attendance_group_id" */
    Attendance_Group_Shifts_Constraint["UniqueCombinationIdx11"] = "unique_combination_idx11";
})(Attendance_Group_Shifts_Constraint = exports.Attendance_Group_Shifts_Constraint || (exports.Attendance_Group_Shifts_Constraint = {}));
/** select columns of table "attendance_group_shifts" */
var Attendance_Group_Shifts_Select_Column;
(function (Attendance_Group_Shifts_Select_Column) {
    /** column name */
    Attendance_Group_Shifts_Select_Column["AttendanceGroupId"] = "attendance_group_id";
    /** column name */
    Attendance_Group_Shifts_Select_Column["ShiftListId"] = "shift_list_id";
})(Attendance_Group_Shifts_Select_Column = exports.Attendance_Group_Shifts_Select_Column || (exports.Attendance_Group_Shifts_Select_Column = {}));
/** update columns of table "attendance_group_shifts" */
var Attendance_Group_Shifts_Update_Column;
(function (Attendance_Group_Shifts_Update_Column) {
    /** column name */
    Attendance_Group_Shifts_Update_Column["AttendanceGroupId"] = "attendance_group_id";
    /** column name */
    Attendance_Group_Shifts_Update_Column["ShiftListId"] = "shift_list_id";
})(Attendance_Group_Shifts_Update_Column = exports.Attendance_Group_Shifts_Update_Column || (exports.Attendance_Group_Shifts_Update_Column = {}));
/** unique or primary key constraints on table "attendance_group_subleaders" */
var Attendance_Group_Subleaders_Constraint;
(function (Attendance_Group_Subleaders_Constraint) {
    /** unique or primary key constraint on columns "employee_id", "attendance_group_id" */
    Attendance_Group_Subleaders_Constraint["AttendanceGroupSubleadersPrimary5"] = "attendance_group_subleadersPRIMARY5";
})(Attendance_Group_Subleaders_Constraint = exports.Attendance_Group_Subleaders_Constraint || (exports.Attendance_Group_Subleaders_Constraint = {}));
/** select columns of table "attendance_group_subleaders" */
var Attendance_Group_Subleaders_Select_Column;
(function (Attendance_Group_Subleaders_Select_Column) {
    /** column name */
    Attendance_Group_Subleaders_Select_Column["AttendanceGroupId"] = "attendance_group_id";
    /** column name */
    Attendance_Group_Subleaders_Select_Column["EmployeeId"] = "employee_id";
})(Attendance_Group_Subleaders_Select_Column = exports.Attendance_Group_Subleaders_Select_Column || (exports.Attendance_Group_Subleaders_Select_Column = {}));
/** update columns of table "attendance_group_subleaders" */
var Attendance_Group_Subleaders_Update_Column;
(function (Attendance_Group_Subleaders_Update_Column) {
    /** column name */
    Attendance_Group_Subleaders_Update_Column["AttendanceGroupId"] = "attendance_group_id";
    /** column name */
    Attendance_Group_Subleaders_Update_Column["EmployeeId"] = "employee_id";
})(Attendance_Group_Subleaders_Update_Column = exports.Attendance_Group_Subleaders_Update_Column || (exports.Attendance_Group_Subleaders_Update_Column = {}));
/** unique or primary key constraints on table "attendance_groups" */
var Attendance_Groups_Constraint;
(function (Attendance_Groups_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Attendance_Groups_Constraint["AttendanceGroupsPrimary6"] = "attendance_groupsPRIMARY6";
    /** unique or primary key constraint on columns "name" */
    Attendance_Groups_Constraint["UkName15"] = "uk_name15";
})(Attendance_Groups_Constraint = exports.Attendance_Groups_Constraint || (exports.Attendance_Groups_Constraint = {}));
/** select columns of table "attendance_groups" */
var Attendance_Groups_Select_Column;
(function (Attendance_Groups_Select_Column) {
    /** column name */
    Attendance_Groups_Select_Column["AllowOutPunch"] = "allow_out_punch";
    /** column name */
    Attendance_Groups_Select_Column["AllowPcPunch"] = "allow_pc_punch";
    /** column name */
    Attendance_Groups_Select_Column["CalendarId"] = "calendar_id";
    /** column name */
    Attendance_Groups_Select_Column["ClockInNeedPhoto"] = "clockIn_need_photo";
    /** column name */
    Attendance_Groups_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Attendance_Groups_Select_Column["EffectTime"] = "effect_time";
    /** column name */
    Attendance_Groups_Select_Column["FacePunch"] = "face_punch";
    /** column name */
    Attendance_Groups_Select_Column["GpsRange"] = "gps_range";
    /** column name */
    Attendance_Groups_Select_Column["GroupType"] = "group_type";
    /** column name */
    Attendance_Groups_Select_Column["HideStaffPunchTime"] = "hide_staff_punch_time";
    /** column name */
    Attendance_Groups_Select_Column["Id"] = "id";
    /** column name */
    Attendance_Groups_Select_Column["Name"] = "name";
    /** column name */
    Attendance_Groups_Select_Column["OutPunchAllowedHideAddr"] = "out_punch_allowed_hide_addr";
    /** column name */
    Attendance_Groups_Select_Column["OutPunchNeedApproval"] = "out_punch_need_approval";
    /** column name */
    Attendance_Groups_Select_Column["OutPunchNeedPhoto"] = "out_punch_need_photo";
    /** column name */
    Attendance_Groups_Select_Column["OutPunchNeedRemark"] = "out_punch_need_remark";
    /** column name */
    Attendance_Groups_Select_Column["PunchType"] = "punch_type";
    /** column name */
    Attendance_Groups_Select_Column["RestClockInNeedApproval"] = "rest_clockIn_need_approval";
    /** column name */
    Attendance_Groups_Select_Column["ShowCumulativeTime"] = "show_cumulative_time";
    /** column name */
    Attendance_Groups_Select_Column["ShowOverTime"] = "show_over_time";
    /** column name */
    Attendance_Groups_Select_Column["StoreId"] = "store_id";
    /** column name */
    Attendance_Groups_Select_Column["TimeZone"] = "time_zone";
    /** column name */
    Attendance_Groups_Select_Column["UpdatedAt"] = "updated_at";
})(Attendance_Groups_Select_Column = exports.Attendance_Groups_Select_Column || (exports.Attendance_Groups_Select_Column = {}));
/** update columns of table "attendance_groups" */
var Attendance_Groups_Update_Column;
(function (Attendance_Groups_Update_Column) {
    /** column name */
    Attendance_Groups_Update_Column["AllowOutPunch"] = "allow_out_punch";
    /** column name */
    Attendance_Groups_Update_Column["AllowPcPunch"] = "allow_pc_punch";
    /** column name */
    Attendance_Groups_Update_Column["CalendarId"] = "calendar_id";
    /** column name */
    Attendance_Groups_Update_Column["ClockInNeedPhoto"] = "clockIn_need_photo";
    /** column name */
    Attendance_Groups_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Attendance_Groups_Update_Column["EffectTime"] = "effect_time";
    /** column name */
    Attendance_Groups_Update_Column["FacePunch"] = "face_punch";
    /** column name */
    Attendance_Groups_Update_Column["GpsRange"] = "gps_range";
    /** column name */
    Attendance_Groups_Update_Column["GroupType"] = "group_type";
    /** column name */
    Attendance_Groups_Update_Column["HideStaffPunchTime"] = "hide_staff_punch_time";
    /** column name */
    Attendance_Groups_Update_Column["Id"] = "id";
    /** column name */
    Attendance_Groups_Update_Column["Name"] = "name";
    /** column name */
    Attendance_Groups_Update_Column["OutPunchAllowedHideAddr"] = "out_punch_allowed_hide_addr";
    /** column name */
    Attendance_Groups_Update_Column["OutPunchNeedApproval"] = "out_punch_need_approval";
    /** column name */
    Attendance_Groups_Update_Column["OutPunchNeedPhoto"] = "out_punch_need_photo";
    /** column name */
    Attendance_Groups_Update_Column["OutPunchNeedRemark"] = "out_punch_need_remark";
    /** column name */
    Attendance_Groups_Update_Column["PunchType"] = "punch_type";
    /** column name */
    Attendance_Groups_Update_Column["RestClockInNeedApproval"] = "rest_clockIn_need_approval";
    /** column name */
    Attendance_Groups_Update_Column["ShowCumulativeTime"] = "show_cumulative_time";
    /** column name */
    Attendance_Groups_Update_Column["ShowOverTime"] = "show_over_time";
    /** column name */
    Attendance_Groups_Update_Column["StoreId"] = "store_id";
    /** column name */
    Attendance_Groups_Update_Column["TimeZone"] = "time_zone";
    /** column name */
    Attendance_Groups_Update_Column["UpdatedAt"] = "updated_at";
})(Attendance_Groups_Update_Column = exports.Attendance_Groups_Update_Column || (exports.Attendance_Groups_Update_Column = {}));
/** unique or primary key constraints on table "attendance_locations" */
var Attendance_Locations_Constraint;
(function (Attendance_Locations_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Attendance_Locations_Constraint["AttendanceLocationsPrimary7"] = "attendance_locationsPRIMARY7";
})(Attendance_Locations_Constraint = exports.Attendance_Locations_Constraint || (exports.Attendance_Locations_Constraint = {}));
/** select columns of table "attendance_locations" */
var Attendance_Locations_Select_Column;
(function (Attendance_Locations_Select_Column) {
    /** column name */
    Attendance_Locations_Select_Column["Address"] = "address";
    /** column name */
    Attendance_Locations_Select_Column["AttendanceGroupId"] = "attendance_group_id";
    /** column name */
    Attendance_Locations_Select_Column["Bssid"] = "bssid";
    /** column name */
    Attendance_Locations_Select_Column["Feature"] = "feature";
    /** column name */
    Attendance_Locations_Select_Column["GpsRange"] = "gps_range";
    /** column name */
    Attendance_Locations_Select_Column["Id"] = "id";
    /** column name */
    Attendance_Locations_Select_Column["Ip"] = "ip";
    /** column name */
    Attendance_Locations_Select_Column["Latitude"] = "latitude";
    /** column name */
    Attendance_Locations_Select_Column["Longitude"] = "longitude";
    /** column name */
    Attendance_Locations_Select_Column["MapType"] = "map_type";
    /** column name */
    Attendance_Locations_Select_Column["Name"] = "name";
    /** column name */
    Attendance_Locations_Select_Column["Ssid"] = "ssid";
    /** column name */
    Attendance_Locations_Select_Column["Type"] = "type";
})(Attendance_Locations_Select_Column = exports.Attendance_Locations_Select_Column || (exports.Attendance_Locations_Select_Column = {}));
/** update columns of table "attendance_locations" */
var Attendance_Locations_Update_Column;
(function (Attendance_Locations_Update_Column) {
    /** column name */
    Attendance_Locations_Update_Column["Address"] = "address";
    /** column name */
    Attendance_Locations_Update_Column["AttendanceGroupId"] = "attendance_group_id";
    /** column name */
    Attendance_Locations_Update_Column["Bssid"] = "bssid";
    /** column name */
    Attendance_Locations_Update_Column["Feature"] = "feature";
    /** column name */
    Attendance_Locations_Update_Column["GpsRange"] = "gps_range";
    /** column name */
    Attendance_Locations_Update_Column["Id"] = "id";
    /** column name */
    Attendance_Locations_Update_Column["Ip"] = "ip";
    /** column name */
    Attendance_Locations_Update_Column["Latitude"] = "latitude";
    /** column name */
    Attendance_Locations_Update_Column["Longitude"] = "longitude";
    /** column name */
    Attendance_Locations_Update_Column["MapType"] = "map_type";
    /** column name */
    Attendance_Locations_Update_Column["Name"] = "name";
    /** column name */
    Attendance_Locations_Update_Column["Ssid"] = "ssid";
    /** column name */
    Attendance_Locations_Update_Column["Type"] = "type";
})(Attendance_Locations_Update_Column = exports.Attendance_Locations_Update_Column || (exports.Attendance_Locations_Update_Column = {}));
/** select columns of table "attendance" */
var Attendance_Select_Column;
(function (Attendance_Select_Column) {
    /** column name */
    Attendance_Select_Column["AttendanceLocationId"] = "attendance_location_id";
    /** column name */
    Attendance_Select_Column["ClockInLocationId"] = "clock_in_location_id";
    /** column name */
    Attendance_Select_Column["ClockInResult"] = "clock_in_result";
    /** column name */
    Attendance_Select_Column["ClockInTime"] = "clock_in_time";
    /** column name */
    Attendance_Select_Column["ClockOutLocationId"] = "clock_out_location_id";
    /** column name */
    Attendance_Select_Column["ClockOutResult"] = "clock_out_result";
    /** column name */
    Attendance_Select_Column["ClockOutTime"] = "clock_out_time";
    /** column name */
    Attendance_Select_Column["Date"] = "date";
    /** column name */
    Attendance_Select_Column["DepartmentId"] = "department_id";
    /** column name */
    Attendance_Select_Column["EmployeeId"] = "employee_id";
    /** column name */
    Attendance_Select_Column["HoursOfAttendance"] = "hours_of_attendance";
    /** column name */
    Attendance_Select_Column["Id"] = "id";
    /** column name */
    Attendance_Select_Column["ShiftId"] = "shift_id";
})(Attendance_Select_Column = exports.Attendance_Select_Column || (exports.Attendance_Select_Column = {}));
/** update columns of table "attendance" */
var Attendance_Update_Column;
(function (Attendance_Update_Column) {
    /** column name */
    Attendance_Update_Column["AttendanceLocationId"] = "attendance_location_id";
    /** column name */
    Attendance_Update_Column["ClockInLocationId"] = "clock_in_location_id";
    /** column name */
    Attendance_Update_Column["ClockInResult"] = "clock_in_result";
    /** column name */
    Attendance_Update_Column["ClockInTime"] = "clock_in_time";
    /** column name */
    Attendance_Update_Column["ClockOutLocationId"] = "clock_out_location_id";
    /** column name */
    Attendance_Update_Column["ClockOutResult"] = "clock_out_result";
    /** column name */
    Attendance_Update_Column["ClockOutTime"] = "clock_out_time";
    /** column name */
    Attendance_Update_Column["Date"] = "date";
    /** column name */
    Attendance_Update_Column["DepartmentId"] = "department_id";
    /** column name */
    Attendance_Update_Column["EmployeeId"] = "employee_id";
    /** column name */
    Attendance_Update_Column["HoursOfAttendance"] = "hours_of_attendance";
    /** column name */
    Attendance_Update_Column["Id"] = "id";
    /** column name */
    Attendance_Update_Column["ShiftId"] = "shift_id";
})(Attendance_Update_Column = exports.Attendance_Update_Column || (exports.Attendance_Update_Column = {}));
/** unique or primary key constraints on table "bills" */
var Bills_Constraint;
(function (Bills_Constraint) {
    /** unique or primary key constraint on columns "bs_id" */
    Bills_Constraint["BillsPrimary9"] = "billsPRIMARY9";
})(Bills_Constraint = exports.Bills_Constraint || (exports.Bills_Constraint = {}));
/** select columns of table "bills" */
var Bills_Select_Column;
(function (Bills_Select_Column) {
    /** column name */
    Bills_Select_Column["AreaCode"] = "area_code";
    /** column name */
    Bills_Select_Column["AreaId"] = "area_id";
    /** column name */
    Bills_Select_Column["AreaName"] = "area_name";
    /** column name */
    Bills_Select_Column["BrandCode"] = "brand_code";
    /** column name */
    Bills_Select_Column["BrandName"] = "brand_name";
    /** column name */
    Bills_Select_Column["BsCode"] = "bs_code";
    /** column name */
    Bills_Select_Column["BsId"] = "bs_id";
    /** column name */
    Bills_Select_Column["BsRemark"] = "bs_remark";
    /** column name */
    Bills_Select_Column["BtpwUserAccount"] = "btpw_user_account";
    /** column name */
    Bills_Select_Column["CardKindName"] = "card_kind_name";
    /** column name */
    Bills_Select_Column["CenterCode"] = "center_code";
    /** column name */
    Bills_Select_Column["CenterName"] = "center_name";
    /** column name */
    Bills_Select_Column["CreateTime"] = "create_time";
    /** column name */
    Bills_Select_Column["DeFrom"] = "de_from";
    /** column name */
    Bills_Select_Column["Delflg"] = "delflg";
    /** column name */
    Bills_Select_Column["DinnerTypeId"] = "dinner_type_id";
    /** column name */
    Bills_Select_Column["DinnerTypeName"] = "dinner_type_name";
    /** column name */
    Bills_Select_Column["DiscMoney"] = "disc_money";
    /** column name */
    Bills_Select_Column["DiscTotal"] = "disc_total";
    /** column name */
    Bills_Select_Column["IncomeTotal"] = "income_total";
    /** column name */
    Bills_Select_Column["IsContinuedBill"] = "is_continued_bill";
    /** column name */
    Bills_Select_Column["IsContinuedBillName"] = "is_continued_bill_name";
    /** column name */
    Bills_Select_Column["IsGiveInvoice"] = "is_give_invoice";
    /** column name */
    Bills_Select_Column["ItemIncomeTotal"] = "item_income_total";
    /** column name */
    Bills_Select_Column["ItemOrigMoney"] = "item_orig_money";
    /** column name */
    Bills_Select_Column["LastTotal"] = "last_total";
    /** column name */
    Bills_Select_Column["MemberCardNo"] = "member_card_no";
    /** column name */
    Bills_Select_Column["MemberId"] = "member_id";
    /** column name */
    Bills_Select_Column["MemberMobile"] = "member_mobile";
    /** column name */
    Bills_Select_Column["MemberMoney"] = "member_money";
    /** column name */
    Bills_Select_Column["MemberName"] = "member_name";
    /** column name */
    Bills_Select_Column["ModifyTime"] = "modify_time";
    /** column name */
    Bills_Select_Column["NotIncomeMoney"] = "not_income_money";
    /** column name */
    Bills_Select_Column["OpenTime"] = "open_time";
    /** column name */
    Bills_Select_Column["OrderCode"] = "order_code";
    /** column name */
    Bills_Select_Column["OrderOriginId"] = "order_origin_id";
    /** column name */
    Bills_Select_Column["OrderOriginName"] = "order_origin_name";
    /** column name */
    Bills_Select_Column["OrderType"] = "order_type";
    /** column name */
    Bills_Select_Column["OrigServerFee"] = "orig_server_fee";
    /** column name */
    Bills_Select_Column["OrigTotal"] = "orig_total";
    /** column name */
    Bills_Select_Column["OrigZdxfbq"] = "orig_zdxfbq";
    /** column name */
    Bills_Select_Column["OwoOpenId"] = "owo_open_id";
    /** column name */
    Bills_Select_Column["OwoUnionId"] = "owo_union_id";
    /** column name */
    Bills_Select_Column["PeopleQty"] = "people_qty";
    /** column name */
    Bills_Select_Column["PointCode"] = "point_code";
    /** column name */
    Bills_Select_Column["PointName"] = "point_name";
    /** column name */
    Bills_Select_Column["PresentMoney"] = "present_money";
    /** column name */
    Bills_Select_Column["PromoteMoney"] = "promote_money";
    /** column name */
    Bills_Select_Column["QuotaMoney"] = "quota_money";
    /** column name */
    Bills_Select_Column["SaleTypeId"] = "sale_type_id";
    /** column name */
    Bills_Select_Column["SaleTypeName"] = "sale_type_name";
    /** column name */
    Bills_Select_Column["SalesmanCode"] = "salesman_code";
    /** column name */
    Bills_Select_Column["SalesmanName"] = "salesman_name";
    /** column name */
    Bills_Select_Column["ServiceFeeIncomeMoney"] = "service_fee_income_money";
    /** column name */
    Bills_Select_Column["ServiceFeeLastTotal"] = "service_fee_last_total";
    /** column name */
    Bills_Select_Column["ServiceFeeNotIncomeMoney"] = "service_fee_not_income_money";
    /** column name */
    Bills_Select_Column["SettleBizDate"] = "settle_biz_date";
    /** column name */
    Bills_Select_Column["SettleBizMonth"] = "settle_biz_month";
    /** column name */
    Bills_Select_Column["SettleState"] = "settle_state";
    /** column name */
    Bills_Select_Column["SettleTime"] = "settle_time";
    /** column name */
    Bills_Select_Column["ShopCode"] = "shop_code";
    /** column name */
    Bills_Select_Column["ShopId"] = "shop_id";
    /** column name */
    Bills_Select_Column["ShopName"] = "shop_name";
    /** column name */
    Bills_Select_Column["ShopOutCode"] = "shop_out_code";
    /** column name */
    Bills_Select_Column["State"] = "state";
    /** column name */
    Bills_Select_Column["TableQty"] = "table_qty";
    /** column name */
    Bills_Select_Column["TaxMoney"] = "tax_money";
    /** column name */
    Bills_Select_Column["TeamId"] = "team_id";
    /** column name */
    Bills_Select_Column["ThirdSerial"] = "third_serial";
    /** column name */
    Bills_Select_Column["TsCode"] = "ts_code";
    /** column name */
    Bills_Select_Column["WaiterCode"] = "waiter_code";
    /** column name */
    Bills_Select_Column["WaiterName"] = "waiter_name";
    /** column name */
    Bills_Select_Column["WipeMoney"] = "wipe_money";
    /** column name */
    Bills_Select_Column["ZdxfIncomeMoney"] = "zdxf_income_money";
})(Bills_Select_Column = exports.Bills_Select_Column || (exports.Bills_Select_Column = {}));
/** select "bills_aggregate_bool_exp_bool_and_arguments_columns" columns of table "bills" */
var Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function (Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */
    Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsContinuedBill"] = "is_continued_bill";
})(Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = exports.Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (exports.Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
/** select "bills_aggregate_bool_exp_bool_or_arguments_columns" columns of table "bills" */
var Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function (Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */
    Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsContinuedBill"] = "is_continued_bill";
})(Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = exports.Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (exports.Bills_Select_Column_Bills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
/** update columns of table "bills" */
var Bills_Update_Column;
(function (Bills_Update_Column) {
    /** column name */
    Bills_Update_Column["AreaCode"] = "area_code";
    /** column name */
    Bills_Update_Column["AreaId"] = "area_id";
    /** column name */
    Bills_Update_Column["AreaName"] = "area_name";
    /** column name */
    Bills_Update_Column["BrandCode"] = "brand_code";
    /** column name */
    Bills_Update_Column["BrandName"] = "brand_name";
    /** column name */
    Bills_Update_Column["BsCode"] = "bs_code";
    /** column name */
    Bills_Update_Column["BsId"] = "bs_id";
    /** column name */
    Bills_Update_Column["BsRemark"] = "bs_remark";
    /** column name */
    Bills_Update_Column["BtpwUserAccount"] = "btpw_user_account";
    /** column name */
    Bills_Update_Column["CardKindName"] = "card_kind_name";
    /** column name */
    Bills_Update_Column["CenterCode"] = "center_code";
    /** column name */
    Bills_Update_Column["CenterName"] = "center_name";
    /** column name */
    Bills_Update_Column["CreateTime"] = "create_time";
    /** column name */
    Bills_Update_Column["DeFrom"] = "de_from";
    /** column name */
    Bills_Update_Column["Delflg"] = "delflg";
    /** column name */
    Bills_Update_Column["DinnerTypeId"] = "dinner_type_id";
    /** column name */
    Bills_Update_Column["DinnerTypeName"] = "dinner_type_name";
    /** column name */
    Bills_Update_Column["DiscMoney"] = "disc_money";
    /** column name */
    Bills_Update_Column["DiscTotal"] = "disc_total";
    /** column name */
    Bills_Update_Column["IncomeTotal"] = "income_total";
    /** column name */
    Bills_Update_Column["IsContinuedBill"] = "is_continued_bill";
    /** column name */
    Bills_Update_Column["IsContinuedBillName"] = "is_continued_bill_name";
    /** column name */
    Bills_Update_Column["IsGiveInvoice"] = "is_give_invoice";
    /** column name */
    Bills_Update_Column["ItemIncomeTotal"] = "item_income_total";
    /** column name */
    Bills_Update_Column["ItemOrigMoney"] = "item_orig_money";
    /** column name */
    Bills_Update_Column["LastTotal"] = "last_total";
    /** column name */
    Bills_Update_Column["MemberCardNo"] = "member_card_no";
    /** column name */
    Bills_Update_Column["MemberId"] = "member_id";
    /** column name */
    Bills_Update_Column["MemberMobile"] = "member_mobile";
    /** column name */
    Bills_Update_Column["MemberMoney"] = "member_money";
    /** column name */
    Bills_Update_Column["MemberName"] = "member_name";
    /** column name */
    Bills_Update_Column["ModifyTime"] = "modify_time";
    /** column name */
    Bills_Update_Column["NotIncomeMoney"] = "not_income_money";
    /** column name */
    Bills_Update_Column["OpenTime"] = "open_time";
    /** column name */
    Bills_Update_Column["OrderCode"] = "order_code";
    /** column name */
    Bills_Update_Column["OrderOriginId"] = "order_origin_id";
    /** column name */
    Bills_Update_Column["OrderOriginName"] = "order_origin_name";
    /** column name */
    Bills_Update_Column["OrderType"] = "order_type";
    /** column name */
    Bills_Update_Column["OrigServerFee"] = "orig_server_fee";
    /** column name */
    Bills_Update_Column["OrigTotal"] = "orig_total";
    /** column name */
    Bills_Update_Column["OrigZdxfbq"] = "orig_zdxfbq";
    /** column name */
    Bills_Update_Column["OwoOpenId"] = "owo_open_id";
    /** column name */
    Bills_Update_Column["OwoUnionId"] = "owo_union_id";
    /** column name */
    Bills_Update_Column["PeopleQty"] = "people_qty";
    /** column name */
    Bills_Update_Column["PointCode"] = "point_code";
    /** column name */
    Bills_Update_Column["PointName"] = "point_name";
    /** column name */
    Bills_Update_Column["PresentMoney"] = "present_money";
    /** column name */
    Bills_Update_Column["PromoteMoney"] = "promote_money";
    /** column name */
    Bills_Update_Column["QuotaMoney"] = "quota_money";
    /** column name */
    Bills_Update_Column["SaleTypeId"] = "sale_type_id";
    /** column name */
    Bills_Update_Column["SaleTypeName"] = "sale_type_name";
    /** column name */
    Bills_Update_Column["SalesmanCode"] = "salesman_code";
    /** column name */
    Bills_Update_Column["SalesmanName"] = "salesman_name";
    /** column name */
    Bills_Update_Column["ServiceFeeIncomeMoney"] = "service_fee_income_money";
    /** column name */
    Bills_Update_Column["ServiceFeeLastTotal"] = "service_fee_last_total";
    /** column name */
    Bills_Update_Column["ServiceFeeNotIncomeMoney"] = "service_fee_not_income_money";
    /** column name */
    Bills_Update_Column["SettleBizDate"] = "settle_biz_date";
    /** column name */
    Bills_Update_Column["SettleBizMonth"] = "settle_biz_month";
    /** column name */
    Bills_Update_Column["SettleState"] = "settle_state";
    /** column name */
    Bills_Update_Column["SettleTime"] = "settle_time";
    /** column name */
    Bills_Update_Column["ShopCode"] = "shop_code";
    /** column name */
    Bills_Update_Column["ShopId"] = "shop_id";
    /** column name */
    Bills_Update_Column["ShopName"] = "shop_name";
    /** column name */
    Bills_Update_Column["ShopOutCode"] = "shop_out_code";
    /** column name */
    Bills_Update_Column["State"] = "state";
    /** column name */
    Bills_Update_Column["TableQty"] = "table_qty";
    /** column name */
    Bills_Update_Column["TaxMoney"] = "tax_money";
    /** column name */
    Bills_Update_Column["TeamId"] = "team_id";
    /** column name */
    Bills_Update_Column["ThirdSerial"] = "third_serial";
    /** column name */
    Bills_Update_Column["TsCode"] = "ts_code";
    /** column name */
    Bills_Update_Column["WaiterCode"] = "waiter_code";
    /** column name */
    Bills_Update_Column["WaiterName"] = "waiter_name";
    /** column name */
    Bills_Update_Column["WipeMoney"] = "wipe_money";
    /** column name */
    Bills_Update_Column["ZdxfIncomeMoney"] = "zdxf_income_money";
})(Bills_Update_Column = exports.Bills_Update_Column || (exports.Bills_Update_Column = {}));
/** unique or primary key constraints on table "bonusdeductions" */
var Bonusdeductions_Constraint;
(function (Bonusdeductions_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Bonusdeductions_Constraint["BonusdeductionsPkey"] = "bonusdeductions_pkey";
})(Bonusdeductions_Constraint = exports.Bonusdeductions_Constraint || (exports.Bonusdeductions_Constraint = {}));
/** select columns of table "bonusdeductions" */
var Bonusdeductions_Select_Column;
(function (Bonusdeductions_Select_Column) {
    /** column name */
    Bonusdeductions_Select_Column["Amount"] = "amount";
    /** column name */
    Bonusdeductions_Select_Column["BonusdeductiontypeId"] = "bonusdeductiontype_id";
    /** column name */
    Bonusdeductions_Select_Column["DepartmentId"] = "department_id";
    /** column name */
    Bonusdeductions_Select_Column["EmployeeId"] = "employee_id";
    /** column name */
    Bonusdeductions_Select_Column["Id"] = "id";
    /** column name */
    Bonusdeductions_Select_Column["Month"] = "month";
})(Bonusdeductions_Select_Column = exports.Bonusdeductions_Select_Column || (exports.Bonusdeductions_Select_Column = {}));
/** update columns of table "bonusdeductions" */
var Bonusdeductions_Update_Column;
(function (Bonusdeductions_Update_Column) {
    /** column name */
    Bonusdeductions_Update_Column["Amount"] = "amount";
    /** column name */
    Bonusdeductions_Update_Column["BonusdeductiontypeId"] = "bonusdeductiontype_id";
    /** column name */
    Bonusdeductions_Update_Column["DepartmentId"] = "department_id";
    /** column name */
    Bonusdeductions_Update_Column["EmployeeId"] = "employee_id";
    /** column name */
    Bonusdeductions_Update_Column["Id"] = "id";
    /** column name */
    Bonusdeductions_Update_Column["Month"] = "month";
})(Bonusdeductions_Update_Column = exports.Bonusdeductions_Update_Column || (exports.Bonusdeductions_Update_Column = {}));
/** unique or primary key constraints on table "bonusdeductiontypes" */
var Bonusdeductiontypes_Constraint;
(function (Bonusdeductiontypes_Constraint) {
    /** unique or primary key constraint on columns "name" */
    Bonusdeductiontypes_Constraint["BonusdeductiontypesNameKey"] = "bonusdeductiontypes_name_key";
    /** unique or primary key constraint on columns "id" */
    Bonusdeductiontypes_Constraint["BonusdeductiontypesPkey"] = "bonusdeductiontypes_pkey";
})(Bonusdeductiontypes_Constraint = exports.Bonusdeductiontypes_Constraint || (exports.Bonusdeductiontypes_Constraint = {}));
/** select columns of table "bonusdeductiontypes" */
var Bonusdeductiontypes_Select_Column;
(function (Bonusdeductiontypes_Select_Column) {
    /** column name */
    Bonusdeductiontypes_Select_Column["Id"] = "id";
    /** column name */
    Bonusdeductiontypes_Select_Column["IsBonus"] = "is_bonus";
    /** column name */
    Bonusdeductiontypes_Select_Column["Name"] = "name";
})(Bonusdeductiontypes_Select_Column = exports.Bonusdeductiontypes_Select_Column || (exports.Bonusdeductiontypes_Select_Column = {}));
/** update columns of table "bonusdeductiontypes" */
var Bonusdeductiontypes_Update_Column;
(function (Bonusdeductiontypes_Update_Column) {
    /** column name */
    Bonusdeductiontypes_Update_Column["Id"] = "id";
    /** column name */
    Bonusdeductiontypes_Update_Column["IsBonus"] = "is_bonus";
    /** column name */
    Bonusdeductiontypes_Update_Column["Name"] = "name";
})(Bonusdeductiontypes_Update_Column = exports.Bonusdeductiontypes_Update_Column || (exports.Bonusdeductiontypes_Update_Column = {}));
/** unique or primary key constraints on table "brands" */
var Brands_Constraint;
(function (Brands_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Brands_Constraint["BrandsPrimary10"] = "brandsPRIMARY10";
    /** unique or primary key constraint on columns "tcsl_id" */
    Brands_Constraint["BrandsTcslIdKey"] = "brands_tcsl_id_key";
})(Brands_Constraint = exports.Brands_Constraint || (exports.Brands_Constraint = {}));
/** unique or primary key constraints on table "brands_employees" */
var Brands_Employees_Constraint;
(function (Brands_Employees_Constraint) {
    /** unique or primary key constraint on columns "employee_id", "brand_id" */
    Brands_Employees_Constraint["BrandsEmployeesPkey"] = "brands_employees_pkey";
})(Brands_Employees_Constraint = exports.Brands_Employees_Constraint || (exports.Brands_Employees_Constraint = {}));
/** select columns of table "brands_employees" */
var Brands_Employees_Select_Column;
(function (Brands_Employees_Select_Column) {
    /** column name */
    Brands_Employees_Select_Column["BrandId"] = "brand_id";
    /** column name */
    Brands_Employees_Select_Column["EmployeeId"] = "employee_id";
})(Brands_Employees_Select_Column = exports.Brands_Employees_Select_Column || (exports.Brands_Employees_Select_Column = {}));
/** update columns of table "brands_employees" */
var Brands_Employees_Update_Column;
(function (Brands_Employees_Update_Column) {
    /** column name */
    Brands_Employees_Update_Column["BrandId"] = "brand_id";
    /** column name */
    Brands_Employees_Update_Column["EmployeeId"] = "employee_id";
})(Brands_Employees_Update_Column = exports.Brands_Employees_Update_Column || (exports.Brands_Employees_Update_Column = {}));
/** select columns of table "brands" */
var Brands_Select_Column;
(function (Brands_Select_Column) {
    /** column name */
    Brands_Select_Column["DepartmentId"] = "department_id";
    /** column name */
    Brands_Select_Column["Id"] = "id";
    /** column name */
    Brands_Select_Column["IsOperation"] = "is_operation";
    /** column name */
    Brands_Select_Column["Name"] = "name";
    /** column name */
    Brands_Select_Column["Status"] = "status";
    /** column name */
    Brands_Select_Column["TcslId"] = "tcsl_id";
})(Brands_Select_Column = exports.Brands_Select_Column || (exports.Brands_Select_Column = {}));
/** select "brands_aggregate_bool_exp_bool_and_arguments_columns" columns of table "brands" */
var Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function (Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */
    Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsOperation"] = "is_operation";
})(Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = exports.Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (exports.Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
/** select "brands_aggregate_bool_exp_bool_or_arguments_columns" columns of table "brands" */
var Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function (Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */
    Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsOperation"] = "is_operation";
})(Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = exports.Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (exports.Brands_Select_Column_Brands_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
/** update columns of table "brands" */
var Brands_Update_Column;
(function (Brands_Update_Column) {
    /** column name */
    Brands_Update_Column["DepartmentId"] = "department_id";
    /** column name */
    Brands_Update_Column["Id"] = "id";
    /** column name */
    Brands_Update_Column["IsOperation"] = "is_operation";
    /** column name */
    Brands_Update_Column["Name"] = "name";
    /** column name */
    Brands_Update_Column["Status"] = "status";
    /** column name */
    Brands_Update_Column["TcslId"] = "tcsl_id";
})(Brands_Update_Column = exports.Brands_Update_Column || (exports.Brands_Update_Column = {}));
/** ordering argument of a cursor */
var Cursor_Ordering;
(function (Cursor_Ordering) {
    /** ascending ordering of the cursor */
    Cursor_Ordering["Asc"] = "ASC";
    /** descending ordering of the cursor */
    Cursor_Ordering["Desc"] = "DESC";
})(Cursor_Ordering = exports.Cursor_Ordering || (exports.Cursor_Ordering = {}));
/** unique or primary key constraints on table "departments" */
var Departments_Constraint;
(function (Departments_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Departments_Constraint["DepartmentsPrimary13"] = "departmentsPRIMARY13";
})(Departments_Constraint = exports.Departments_Constraint || (exports.Departments_Constraint = {}));
/** unique or primary key constraints on table "departments_employees" */
var Departments_Employees_Constraint;
(function (Departments_Employees_Constraint) {
    /** unique or primary key constraint on columns "employee_id", "department_id" */
    Departments_Employees_Constraint["DepartmentsEmployeesPkey"] = "departments_employees_pkey";
})(Departments_Employees_Constraint = exports.Departments_Employees_Constraint || (exports.Departments_Employees_Constraint = {}));
/** select columns of table "departments_employees" */
var Departments_Employees_Select_Column;
(function (Departments_Employees_Select_Column) {
    /** column name */
    Departments_Employees_Select_Column["DepartmentId"] = "department_id";
    /** column name */
    Departments_Employees_Select_Column["EmployeeId"] = "employee_id";
})(Departments_Employees_Select_Column = exports.Departments_Employees_Select_Column || (exports.Departments_Employees_Select_Column = {}));
/** update columns of table "departments_employees" */
var Departments_Employees_Update_Column;
(function (Departments_Employees_Update_Column) {
    /** column name */
    Departments_Employees_Update_Column["DepartmentId"] = "department_id";
    /** column name */
    Departments_Employees_Update_Column["EmployeeId"] = "employee_id";
})(Departments_Employees_Update_Column = exports.Departments_Employees_Update_Column || (exports.Departments_Employees_Update_Column = {}));
/** select columns of table "departments" */
var Departments_Select_Column;
(function (Departments_Select_Column) {
    /** column name */
    Departments_Select_Column["AttendanceGroupId"] = "attendance_group_id";
    /** column name */
    Departments_Select_Column["Id"] = "id";
    /** column name */
    Departments_Select_Column["IsStore"] = "is_store";
    /** column name */
    Departments_Select_Column["ManagerId"] = "manager_id";
    /** column name */
    Departments_Select_Column["Name"] = "name";
    /** column name */
    Departments_Select_Column["ParentDepartmentId"] = "parent_department_id";
    /** column name */
    Departments_Select_Column["Ranking"] = "ranking";
    /** column name */
    Departments_Select_Column["SmallDepartmentName"] = "small_department_name";
    /** column name */
    Departments_Select_Column["Status"] = "status";
    /** column name */
    Departments_Select_Column["StoreId"] = "store_id";
})(Departments_Select_Column = exports.Departments_Select_Column || (exports.Departments_Select_Column = {}));
/** unique or primary key constraints on table "departments_stores" */
var Departments_Stores_Constraint;
(function (Departments_Stores_Constraint) {
    /** unique or primary key constraint on columns "department_id" */
    Departments_Stores_Constraint["DepartmentstoresPrimary14"] = "departmentstoresPRIMARY14";
})(Departments_Stores_Constraint = exports.Departments_Stores_Constraint || (exports.Departments_Stores_Constraint = {}));
/** select columns of table "departments_stores" */
var Departments_Stores_Select_Column;
(function (Departments_Stores_Select_Column) {
    /** column name */
    Departments_Stores_Select_Column["DepartmentId"] = "department_id";
    /** column name */
    Departments_Stores_Select_Column["ShopId"] = "shop_id";
})(Departments_Stores_Select_Column = exports.Departments_Stores_Select_Column || (exports.Departments_Stores_Select_Column = {}));
/** update columns of table "departments_stores" */
var Departments_Stores_Update_Column;
(function (Departments_Stores_Update_Column) {
    /** column name */
    Departments_Stores_Update_Column["DepartmentId"] = "department_id";
    /** column name */
    Departments_Stores_Update_Column["ShopId"] = "shop_id";
})(Departments_Stores_Update_Column = exports.Departments_Stores_Update_Column || (exports.Departments_Stores_Update_Column = {}));
/** update columns of table "departments" */
var Departments_Update_Column;
(function (Departments_Update_Column) {
    /** column name */
    Departments_Update_Column["AttendanceGroupId"] = "attendance_group_id";
    /** column name */
    Departments_Update_Column["Id"] = "id";
    /** column name */
    Departments_Update_Column["IsStore"] = "is_store";
    /** column name */
    Departments_Update_Column["ManagerId"] = "manager_id";
    /** column name */
    Departments_Update_Column["Name"] = "name";
    /** column name */
    Departments_Update_Column["ParentDepartmentId"] = "parent_department_id";
    /** column name */
    Departments_Update_Column["Ranking"] = "ranking";
    /** column name */
    Departments_Update_Column["SmallDepartmentName"] = "small_department_name";
    /** column name */
    Departments_Update_Column["Status"] = "status";
    /** column name */
    Departments_Update_Column["StoreId"] = "store_id";
})(Departments_Update_Column = exports.Departments_Update_Column || (exports.Departments_Update_Column = {}));
/** unique or primary key constraints on table "dsstorebills" */
var Dsstorebills_Constraint;
(function (Dsstorebills_Constraint) {
    /** unique or primary key constraint on columns "StoreBillDTID", "StoreCode" */
    Dsstorebills_Constraint["DsstorebillsPkey"] = "dsstorebills_pkey";
})(Dsstorebills_Constraint = exports.Dsstorebills_Constraint || (exports.Dsstorebills_Constraint = {}));
/** select columns of table "dsstorebills" */
var Dsstorebills_Select_Column;
(function (Dsstorebills_Select_Column) {
    /** column name */
    Dsstorebills_Select_Column["ApMonth"] = "APMonth";
    /** column name */
    Dsstorebills_Select_Column["ApYear"] = "APYear";
    /** column name */
    Dsstorebills_Select_Column["ArriveAmount"] = "ArriveAmount";
    /** column name */
    Dsstorebills_Select_Column["ArriveMoney"] = "ArriveMoney";
    /** column name */
    Dsstorebills_Select_Column["BatchCode"] = "BatchCode";
    /** column name */
    Dsstorebills_Select_Column["BillBusType"] = "BillBusType";
    /** column name */
    Dsstorebills_Select_Column["BillBusTypeId"] = "BillBusTypeId";
    /** column name */
    Dsstorebills_Select_Column["BillNo"] = "BillNO";
    /** column name */
    Dsstorebills_Select_Column["BillType"] = "BillType";
    /** column name */
    Dsstorebills_Select_Column["BusUnit"] = "BusUnit";
    /** column name */
    Dsstorebills_Select_Column["BusUser"] = "BusUser";
    /** column name */
    Dsstorebills_Select_Column["GiftFlag"] = "GiftFlag";
    /** column name */
    Dsstorebills_Select_Column["InBusAmount"] = "InBusAmount";
    /** column name */
    Dsstorebills_Select_Column["InMainAmount"] = "InMainAmount";
    /** column name */
    Dsstorebills_Select_Column["InStoreMoney"] = "InStoreMoney";
    /** column name */
    Dsstorebills_Select_Column["IncludeTaxMoney"] = "IncludeTaxMoney";
    /** column name */
    Dsstorebills_Select_Column["ItemAbc"] = "ItemAbc";
    /** column name */
    Dsstorebills_Select_Column["ItemBigClassCode"] = "ItemBigClassCode";
    /** column name */
    Dsstorebills_Select_Column["ItemBigClassName"] = "ItemBigClassName";
    /** column name */
    Dsstorebills_Select_Column["ItemCode"] = "ItemCode";
    /** column name */
    Dsstorebills_Select_Column["ItemId"] = "ItemID";
    /** column name */
    Dsstorebills_Select_Column["ItemName"] = "ItemName";
    /** column name */
    Dsstorebills_Select_Column["ItemSign"] = "ItemSign";
    /** column name */
    Dsstorebills_Select_Column["ItemSmallClassCode"] = "ItemSmallClassCode";
    /** column name */
    Dsstorebills_Select_Column["ItemSmallClassName"] = "ItemSmallClassName";
    /** column name */
    Dsstorebills_Select_Column["ItemSpec"] = "ItemSpec";
    /** column name */
    Dsstorebills_Select_Column["MainUnit"] = "MainUnit";
    /** column name */
    Dsstorebills_Select_Column["MakeTime"] = "MakeTime";
    /** column name */
    Dsstorebills_Select_Column["OtherSideCode"] = "OtherSideCode";
    /** column name */
    Dsstorebills_Select_Column["OtherSideId"] = "OtherSideID";
    /** column name */
    Dsstorebills_Select_Column["OtherSideName"] = "OtherSideName";
    /** column name */
    Dsstorebills_Select_Column["OtherSideType"] = "OtherSideType";
    /** column name */
    Dsstorebills_Select_Column["OutBusAmount"] = "OutBusAmount";
    /** column name */
    Dsstorebills_Select_Column["OutMainAmount"] = "OutMainAmount";
    /** column name */
    Dsstorebills_Select_Column["OutStoreMoney"] = "OutStoreMoney";
    /** column name */
    Dsstorebills_Select_Column["ParentBillNo"] = "ParentBillNO";
    /** column name */
    Dsstorebills_Select_Column["PushInStoreAmount"] = "PushInStoreAmount";
    /** column name */
    Dsstorebills_Select_Column["PushInStoreMoney"] = "PushInStoreMoney";
    /** column name */
    Dsstorebills_Select_Column["PushOutStoreAmount"] = "PushOutStoreAmount";
    /** column name */
    Dsstorebills_Select_Column["PushOutStoreMoney"] = "PushOutStoreMoney";
    /** column name */
    Dsstorebills_Select_Column["SaleMoney"] = "SaleMoney";
    /** column name */
    Dsstorebills_Select_Column["SellIncludeTaxMoney"] = "SellIncludeTaxMoney";
    /** column name */
    Dsstorebills_Select_Column["SellTaxMoney"] = "SellTaxMoney";
    /** column name */
    Dsstorebills_Select_Column["SellTaxes"] = "SellTaxes";
    /** column name */
    Dsstorebills_Select_Column["ShopCode"] = "ShopCode";
    /** column name */
    Dsstorebills_Select_Column["ShopId"] = "ShopID";
    /** column name */
    Dsstorebills_Select_Column["ShopName"] = "ShopName";
    /** column name */
    Dsstorebills_Select_Column["StoreBillDtid"] = "StoreBillDTID";
    /** column name */
    Dsstorebills_Select_Column["StoreBillId"] = "StoreBillID";
    /** column name */
    Dsstorebills_Select_Column["StoreBillIdRemark"] = "StoreBillIDRemark";
    /** column name */
    Dsstorebills_Select_Column["StoreBillReState"] = "StoreBillReState";
    /** column name */
    Dsstorebills_Select_Column["StoreBillRemark"] = "StoreBillRemark";
    /** column name */
    Dsstorebills_Select_Column["StoreCode"] = "StoreCode";
    /** column name */
    Dsstorebills_Select_Column["StoreId"] = "StoreID";
    /** column name */
    Dsstorebills_Select_Column["StoreName"] = "StoreName";
    /** column name */
    Dsstorebills_Select_Column["SysBatchCode"] = "SysBatchCode";
    /** column name */
    Dsstorebills_Select_Column["TaxMoney"] = "TaxMoney";
    /** column name */
    Dsstorebills_Select_Column["Taxes"] = "Taxes";
    /** column name */
    Dsstorebills_Select_Column["ArriveAssistAmount"] = "arriveAssistAmount";
    /** column name */
    Dsstorebills_Select_Column["AuditDate"] = "auditDate";
    /** column name */
    Dsstorebills_Select_Column["BusDate"] = "busDate";
    /** column name */
    Dsstorebills_Select_Column["CreateDate"] = "createDate";
    /** column name */
    Dsstorebills_Select_Column["IsOut"] = "isOut";
    /** column name */
    Dsstorebills_Select_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Dsstorebills_Select_Column["OutputRate"] = "outputRate";
    /** column name */
    Dsstorebills_Select_Column["ProcessMoney"] = "processMoney";
    /** column name */
    Dsstorebills_Select_Column["ReferenceMoney"] = "referenceMoney";
    /** column name */
    Dsstorebills_Select_Column["ReferencePrice"] = "referencePrice";
    /** column name */
    Dsstorebills_Select_Column["ShopJoinFlag"] = "shopJoinFlag";
    /** column name */
    Dsstorebills_Select_Column["TransMoney"] = "transMoney";
    /** column name */
    Dsstorebills_Select_Column["Yield"] = "yield";
    /** column name */
    Dsstorebills_Select_Column["ZtSupplierCode"] = "ztSupplierCode";
    /** column name */
    Dsstorebills_Select_Column["ZtSupplierId"] = "ztSupplierID";
    /** column name */
    Dsstorebills_Select_Column["ZtSupplierName"] = "ztSupplierName";
})(Dsstorebills_Select_Column = exports.Dsstorebills_Select_Column || (exports.Dsstorebills_Select_Column = {}));
/** select "dsstorebills_aggregate_bool_exp_bool_and_arguments_columns" columns of table "dsstorebills" */
var Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function (Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */
    Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["GiftFlag"] = "GiftFlag";
    /** column name */
    Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["StoreBillReState"] = "StoreBillReState";
})(Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = exports.Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (exports.Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
/** select "dsstorebills_aggregate_bool_exp_bool_or_arguments_columns" columns of table "dsstorebills" */
var Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function (Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */
    Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["GiftFlag"] = "GiftFlag";
    /** column name */
    Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["StoreBillReState"] = "StoreBillReState";
})(Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = exports.Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (exports.Dsstorebills_Select_Column_Dsstorebills_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
/** update columns of table "dsstorebills" */
var Dsstorebills_Update_Column;
(function (Dsstorebills_Update_Column) {
    /** column name */
    Dsstorebills_Update_Column["ApMonth"] = "APMonth";
    /** column name */
    Dsstorebills_Update_Column["ApYear"] = "APYear";
    /** column name */
    Dsstorebills_Update_Column["ArriveAmount"] = "ArriveAmount";
    /** column name */
    Dsstorebills_Update_Column["ArriveMoney"] = "ArriveMoney";
    /** column name */
    Dsstorebills_Update_Column["BatchCode"] = "BatchCode";
    /** column name */
    Dsstorebills_Update_Column["BillBusType"] = "BillBusType";
    /** column name */
    Dsstorebills_Update_Column["BillBusTypeId"] = "BillBusTypeId";
    /** column name */
    Dsstorebills_Update_Column["BillNo"] = "BillNO";
    /** column name */
    Dsstorebills_Update_Column["BillType"] = "BillType";
    /** column name */
    Dsstorebills_Update_Column["BusUnit"] = "BusUnit";
    /** column name */
    Dsstorebills_Update_Column["BusUser"] = "BusUser";
    /** column name */
    Dsstorebills_Update_Column["GiftFlag"] = "GiftFlag";
    /** column name */
    Dsstorebills_Update_Column["InBusAmount"] = "InBusAmount";
    /** column name */
    Dsstorebills_Update_Column["InMainAmount"] = "InMainAmount";
    /** column name */
    Dsstorebills_Update_Column["InStoreMoney"] = "InStoreMoney";
    /** column name */
    Dsstorebills_Update_Column["IncludeTaxMoney"] = "IncludeTaxMoney";
    /** column name */
    Dsstorebills_Update_Column["ItemAbc"] = "ItemAbc";
    /** column name */
    Dsstorebills_Update_Column["ItemBigClassCode"] = "ItemBigClassCode";
    /** column name */
    Dsstorebills_Update_Column["ItemBigClassName"] = "ItemBigClassName";
    /** column name */
    Dsstorebills_Update_Column["ItemCode"] = "ItemCode";
    /** column name */
    Dsstorebills_Update_Column["ItemId"] = "ItemID";
    /** column name */
    Dsstorebills_Update_Column["ItemName"] = "ItemName";
    /** column name */
    Dsstorebills_Update_Column["ItemSign"] = "ItemSign";
    /** column name */
    Dsstorebills_Update_Column["ItemSmallClassCode"] = "ItemSmallClassCode";
    /** column name */
    Dsstorebills_Update_Column["ItemSmallClassName"] = "ItemSmallClassName";
    /** column name */
    Dsstorebills_Update_Column["ItemSpec"] = "ItemSpec";
    /** column name */
    Dsstorebills_Update_Column["MainUnit"] = "MainUnit";
    /** column name */
    Dsstorebills_Update_Column["MakeTime"] = "MakeTime";
    /** column name */
    Dsstorebills_Update_Column["OtherSideCode"] = "OtherSideCode";
    /** column name */
    Dsstorebills_Update_Column["OtherSideId"] = "OtherSideID";
    /** column name */
    Dsstorebills_Update_Column["OtherSideName"] = "OtherSideName";
    /** column name */
    Dsstorebills_Update_Column["OtherSideType"] = "OtherSideType";
    /** column name */
    Dsstorebills_Update_Column["OutBusAmount"] = "OutBusAmount";
    /** column name */
    Dsstorebills_Update_Column["OutMainAmount"] = "OutMainAmount";
    /** column name */
    Dsstorebills_Update_Column["OutStoreMoney"] = "OutStoreMoney";
    /** column name */
    Dsstorebills_Update_Column["ParentBillNo"] = "ParentBillNO";
    /** column name */
    Dsstorebills_Update_Column["PushInStoreAmount"] = "PushInStoreAmount";
    /** column name */
    Dsstorebills_Update_Column["PushInStoreMoney"] = "PushInStoreMoney";
    /** column name */
    Dsstorebills_Update_Column["PushOutStoreAmount"] = "PushOutStoreAmount";
    /** column name */
    Dsstorebills_Update_Column["PushOutStoreMoney"] = "PushOutStoreMoney";
    /** column name */
    Dsstorebills_Update_Column["SaleMoney"] = "SaleMoney";
    /** column name */
    Dsstorebills_Update_Column["SellIncludeTaxMoney"] = "SellIncludeTaxMoney";
    /** column name */
    Dsstorebills_Update_Column["SellTaxMoney"] = "SellTaxMoney";
    /** column name */
    Dsstorebills_Update_Column["SellTaxes"] = "SellTaxes";
    /** column name */
    Dsstorebills_Update_Column["ShopCode"] = "ShopCode";
    /** column name */
    Dsstorebills_Update_Column["ShopId"] = "ShopID";
    /** column name */
    Dsstorebills_Update_Column["ShopName"] = "ShopName";
    /** column name */
    Dsstorebills_Update_Column["StoreBillDtid"] = "StoreBillDTID";
    /** column name */
    Dsstorebills_Update_Column["StoreBillId"] = "StoreBillID";
    /** column name */
    Dsstorebills_Update_Column["StoreBillIdRemark"] = "StoreBillIDRemark";
    /** column name */
    Dsstorebills_Update_Column["StoreBillReState"] = "StoreBillReState";
    /** column name */
    Dsstorebills_Update_Column["StoreBillRemark"] = "StoreBillRemark";
    /** column name */
    Dsstorebills_Update_Column["StoreCode"] = "StoreCode";
    /** column name */
    Dsstorebills_Update_Column["StoreId"] = "StoreID";
    /** column name */
    Dsstorebills_Update_Column["StoreName"] = "StoreName";
    /** column name */
    Dsstorebills_Update_Column["SysBatchCode"] = "SysBatchCode";
    /** column name */
    Dsstorebills_Update_Column["TaxMoney"] = "TaxMoney";
    /** column name */
    Dsstorebills_Update_Column["Taxes"] = "Taxes";
    /** column name */
    Dsstorebills_Update_Column["ArriveAssistAmount"] = "arriveAssistAmount";
    /** column name */
    Dsstorebills_Update_Column["AuditDate"] = "auditDate";
    /** column name */
    Dsstorebills_Update_Column["BusDate"] = "busDate";
    /** column name */
    Dsstorebills_Update_Column["CreateDate"] = "createDate";
    /** column name */
    Dsstorebills_Update_Column["IsOut"] = "isOut";
    /** column name */
    Dsstorebills_Update_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Dsstorebills_Update_Column["OutputRate"] = "outputRate";
    /** column name */
    Dsstorebills_Update_Column["ProcessMoney"] = "processMoney";
    /** column name */
    Dsstorebills_Update_Column["ReferenceMoney"] = "referenceMoney";
    /** column name */
    Dsstorebills_Update_Column["ReferencePrice"] = "referencePrice";
    /** column name */
    Dsstorebills_Update_Column["ShopJoinFlag"] = "shopJoinFlag";
    /** column name */
    Dsstorebills_Update_Column["TransMoney"] = "transMoney";
    /** column name */
    Dsstorebills_Update_Column["Yield"] = "yield";
    /** column name */
    Dsstorebills_Update_Column["ZtSupplierCode"] = "ztSupplierCode";
    /** column name */
    Dsstorebills_Update_Column["ZtSupplierId"] = "ztSupplierID";
    /** column name */
    Dsstorebills_Update_Column["ZtSupplierName"] = "ztSupplierName";
})(Dsstorebills_Update_Column = exports.Dsstorebills_Update_Column || (exports.Dsstorebills_Update_Column = {}));
/** unique or primary key constraints on table "employee_attachments" */
var Employee_Attachments_Constraint;
(function (Employee_Attachments_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Employee_Attachments_Constraint["UserAttachmentsPrimary55"] = "user_attachmentsPRIMARY55";
})(Employee_Attachments_Constraint = exports.Employee_Attachments_Constraint || (exports.Employee_Attachments_Constraint = {}));
/** select columns of table "employee_attachments" */
var Employee_Attachments_Select_Column;
(function (Employee_Attachments_Select_Column) {
    /** column name */
    Employee_Attachments_Select_Column["CreatedTime"] = "created_time";
    /** column name */
    Employee_Attachments_Select_Column["EmployeeId"] = "employee_id";
    /** column name */
    Employee_Attachments_Select_Column["FileName"] = "file_name";
    /** column name */
    Employee_Attachments_Select_Column["Id"] = "id";
    /** column name */
    Employee_Attachments_Select_Column["Kind"] = "kind";
    /** column name */
    Employee_Attachments_Select_Column["Path"] = "path";
})(Employee_Attachments_Select_Column = exports.Employee_Attachments_Select_Column || (exports.Employee_Attachments_Select_Column = {}));
/** update columns of table "employee_attachments" */
var Employee_Attachments_Update_Column;
(function (Employee_Attachments_Update_Column) {
    /** column name */
    Employee_Attachments_Update_Column["CreatedTime"] = "created_time";
    /** column name */
    Employee_Attachments_Update_Column["EmployeeId"] = "employee_id";
    /** column name */
    Employee_Attachments_Update_Column["FileName"] = "file_name";
    /** column name */
    Employee_Attachments_Update_Column["Id"] = "id";
    /** column name */
    Employee_Attachments_Update_Column["Kind"] = "kind";
    /** column name */
    Employee_Attachments_Update_Column["Path"] = "path";
})(Employee_Attachments_Update_Column = exports.Employee_Attachments_Update_Column || (exports.Employee_Attachments_Update_Column = {}));
/** unique or primary key constraints on table "employee_insurance" */
var Employee_Insurance_Constraint;
(function (Employee_Insurance_Constraint) {
    /** unique or primary key constraint on columns "employee_id", "month" */
    Employee_Insurance_Constraint["EmployeeInsuranceMonthEmployeeIdKey"] = "employee_insurance_month_employee_id_key";
    /** unique or primary key constraint on columns "id" */
    Employee_Insurance_Constraint["EmployeeInsurancePkey"] = "employee_insurance_pkey";
})(Employee_Insurance_Constraint = exports.Employee_Insurance_Constraint || (exports.Employee_Insurance_Constraint = {}));
/** select columns of table "employee_insurance" */
var Employee_Insurance_Select_Column;
(function (Employee_Insurance_Select_Column) {
    /** column name */
    Employee_Insurance_Select_Column["CorpHeating"] = "corp_heating";
    /** column name */
    Employee_Insurance_Select_Column["CorpHousingFund"] = "corp_housing_fund";
    /** column name */
    Employee_Insurance_Select_Column["CorpMajorMedical"] = "corp_major_medical";
    /** column name */
    Employee_Insurance_Select_Column["CorpMaternityInsurance"] = "corp_maternity_insurance";
    /** column name */
    Employee_Insurance_Select_Column["CorpMedicalInsurance"] = "corp_medical_insurance";
    /** column name */
    Employee_Insurance_Select_Column["CorpPay"] = "corp_pay";
    /** column name */
    Employee_Insurance_Select_Column["CorpRetirementInsurance"] = "corp_retirement_insurance";
    /** column name */
    Employee_Insurance_Select_Column["CorpUnemploymentInsurance"] = "corp_unemployment_insurance";
    /** column name */
    Employee_Insurance_Select_Column["CorpWorkInjury"] = "corp_work_injury";
    /** column name */
    Employee_Insurance_Select_Column["EmployeeId"] = "employee_id";
    /** column name */
    Employee_Insurance_Select_Column["HeatingBase"] = "heating_base";
    /** column name */
    Employee_Insurance_Select_Column["Id"] = "id";
    /** column name */
    Employee_Insurance_Select_Column["MedicalBase"] = "medical_base";
    /** column name */
    Employee_Insurance_Select_Column["Month"] = "month";
    /** column name */
    Employee_Insurance_Select_Column["PaymentStartDate"] = "payment_start_date";
    /** column name */
    Employee_Insurance_Select_Column["PensionBase"] = "pension_base";
    /** column name */
    Employee_Insurance_Select_Column["PersonalFundBalance"] = "personal_fund_balance";
    /** column name */
    Employee_Insurance_Select_Column["PersonalHousingFund"] = "personal_housing_fund";
    /** column name */
    Employee_Insurance_Select_Column["PersonalMajorMedical"] = "personal_major_medical";
    /** column name */
    Employee_Insurance_Select_Column["PersonalMedicalInsurance"] = "personal_medical_insurance";
    /** column name */
    Employee_Insurance_Select_Column["PersonalPay"] = "personal_pay";
    /** column name */
    Employee_Insurance_Select_Column["PersonalPensionInsurance"] = "personal_pension_insurance";
    /** column name */
    Employee_Insurance_Select_Column["PersonalUnemploymentInsurance"] = "personal_unemployment_insurance";
    /** column name */
    Employee_Insurance_Select_Column["UnemploymentBase"] = "unemployment_base";
    /** column name */
    Employee_Insurance_Select_Column["WorkInjuryBase"] = "work_injury_base";
})(Employee_Insurance_Select_Column = exports.Employee_Insurance_Select_Column || (exports.Employee_Insurance_Select_Column = {}));
/** update columns of table "employee_insurance" */
var Employee_Insurance_Update_Column;
(function (Employee_Insurance_Update_Column) {
    /** column name */
    Employee_Insurance_Update_Column["CorpHeating"] = "corp_heating";
    /** column name */
    Employee_Insurance_Update_Column["CorpHousingFund"] = "corp_housing_fund";
    /** column name */
    Employee_Insurance_Update_Column["CorpMajorMedical"] = "corp_major_medical";
    /** column name */
    Employee_Insurance_Update_Column["CorpMaternityInsurance"] = "corp_maternity_insurance";
    /** column name */
    Employee_Insurance_Update_Column["CorpMedicalInsurance"] = "corp_medical_insurance";
    /** column name */
    Employee_Insurance_Update_Column["CorpPay"] = "corp_pay";
    /** column name */
    Employee_Insurance_Update_Column["CorpRetirementInsurance"] = "corp_retirement_insurance";
    /** column name */
    Employee_Insurance_Update_Column["CorpUnemploymentInsurance"] = "corp_unemployment_insurance";
    /** column name */
    Employee_Insurance_Update_Column["CorpWorkInjury"] = "corp_work_injury";
    /** column name */
    Employee_Insurance_Update_Column["EmployeeId"] = "employee_id";
    /** column name */
    Employee_Insurance_Update_Column["HeatingBase"] = "heating_base";
    /** column name */
    Employee_Insurance_Update_Column["Id"] = "id";
    /** column name */
    Employee_Insurance_Update_Column["MedicalBase"] = "medical_base";
    /** column name */
    Employee_Insurance_Update_Column["Month"] = "month";
    /** column name */
    Employee_Insurance_Update_Column["PaymentStartDate"] = "payment_start_date";
    /** column name */
    Employee_Insurance_Update_Column["PensionBase"] = "pension_base";
    /** column name */
    Employee_Insurance_Update_Column["PersonalFundBalance"] = "personal_fund_balance";
    /** column name */
    Employee_Insurance_Update_Column["PersonalHousingFund"] = "personal_housing_fund";
    /** column name */
    Employee_Insurance_Update_Column["PersonalMajorMedical"] = "personal_major_medical";
    /** column name */
    Employee_Insurance_Update_Column["PersonalMedicalInsurance"] = "personal_medical_insurance";
    /** column name */
    Employee_Insurance_Update_Column["PersonalPay"] = "personal_pay";
    /** column name */
    Employee_Insurance_Update_Column["PersonalPensionInsurance"] = "personal_pension_insurance";
    /** column name */
    Employee_Insurance_Update_Column["PersonalUnemploymentInsurance"] = "personal_unemployment_insurance";
    /** column name */
    Employee_Insurance_Update_Column["UnemploymentBase"] = "unemployment_base";
    /** column name */
    Employee_Insurance_Update_Column["WorkInjuryBase"] = "work_injury_base";
})(Employee_Insurance_Update_Column = exports.Employee_Insurance_Update_Column || (exports.Employee_Insurance_Update_Column = {}));
/** unique or primary key constraints on table "employee_leaves" */
var Employee_Leaves_Constraint;
(function (Employee_Leaves_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Employee_Leaves_Constraint["EmployeeLeavesPkey"] = "employee_leaves_pkey";
})(Employee_Leaves_Constraint = exports.Employee_Leaves_Constraint || (exports.Employee_Leaves_Constraint = {}));
/** select columns of table "employee_leaves" */
var Employee_Leaves_Select_Column;
(function (Employee_Leaves_Select_Column) {
    /** column name */
    Employee_Leaves_Select_Column["EmployeeId"] = "employee_id";
    /** column name */
    Employee_Leaves_Select_Column["EndDate"] = "end_date";
    /** column name */
    Employee_Leaves_Select_Column["Id"] = "id";
    /** column name */
    Employee_Leaves_Select_Column["LeaveTypeId"] = "leave_type_id";
    /** column name */
    Employee_Leaves_Select_Column["StartDate"] = "start_date";
    /** column name */
    Employee_Leaves_Select_Column["Status"] = "status";
})(Employee_Leaves_Select_Column = exports.Employee_Leaves_Select_Column || (exports.Employee_Leaves_Select_Column = {}));
/** update columns of table "employee_leaves" */
var Employee_Leaves_Update_Column;
(function (Employee_Leaves_Update_Column) {
    /** column name */
    Employee_Leaves_Update_Column["EmployeeId"] = "employee_id";
    /** column name */
    Employee_Leaves_Update_Column["EndDate"] = "end_date";
    /** column name */
    Employee_Leaves_Update_Column["Id"] = "id";
    /** column name */
    Employee_Leaves_Update_Column["LeaveTypeId"] = "leave_type_id";
    /** column name */
    Employee_Leaves_Update_Column["StartDate"] = "start_date";
    /** column name */
    Employee_Leaves_Update_Column["Status"] = "status";
})(Employee_Leaves_Update_Column = exports.Employee_Leaves_Update_Column || (exports.Employee_Leaves_Update_Column = {}));
/** unique or primary key constraints on table "employees" */
var Employees_Constraint;
(function (Employees_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Employees_Constraint["EmployeesPrimary18"] = "employeesPRIMARY18";
    /** unique or primary key constraint on columns "mobile" */
    Employees_Constraint["UniqueMobile27"] = "unique_mobile27";
})(Employees_Constraint = exports.Employees_Constraint || (exports.Employees_Constraint = {}));
/** unique or primary key constraints on table "employees_roles" */
var Employees_Roles_Constraint;
(function (Employees_Roles_Constraint) {
    /** unique or primary key constraint on columns "role_id", "employee_id" */
    Employees_Roles_Constraint["EmployeeRolesPrimary17"] = "employee_rolesPRIMARY17";
    /** unique or primary key constraint on columns "role_id", "employee_id" */
    Employees_Roles_Constraint["UniqueCombinationIdx25"] = "unique_combination_idx25";
})(Employees_Roles_Constraint = exports.Employees_Roles_Constraint || (exports.Employees_Roles_Constraint = {}));
/** select columns of table "employees_roles" */
var Employees_Roles_Select_Column;
(function (Employees_Roles_Select_Column) {
    /** column name */
    Employees_Roles_Select_Column["EmployeeId"] = "employee_id";
    /** column name */
    Employees_Roles_Select_Column["RoleId"] = "role_id";
})(Employees_Roles_Select_Column = exports.Employees_Roles_Select_Column || (exports.Employees_Roles_Select_Column = {}));
/** update columns of table "employees_roles" */
var Employees_Roles_Update_Column;
(function (Employees_Roles_Update_Column) {
    /** column name */
    Employees_Roles_Update_Column["EmployeeId"] = "employee_id";
    /** column name */
    Employees_Roles_Update_Column["RoleId"] = "role_id";
})(Employees_Roles_Update_Column = exports.Employees_Roles_Update_Column || (exports.Employees_Roles_Update_Column = {}));
/** select columns of table "employees" */
var Employees_Select_Column;
(function (Employees_Select_Column) {
    /** column name */
    Employees_Select_Column["ActualConversionTime"] = "actual_conversion_time";
    /** column name */
    Employees_Select_Column["ActualOverboardTime"] = "actual_overboard_time";
    /** column name */
    Employees_Select_Column["Application"] = "application";
    /** column name */
    Employees_Select_Column["ApplicationStatus"] = "application_status";
    /** column name */
    Employees_Select_Column["Avatar"] = "avatar";
    /** column name */
    Employees_Select_Column["BankAccountNumber"] = "bank_account_number";
    /** column name */
    Employees_Select_Column["BankName"] = "bank_name";
    /** column name */
    Employees_Select_Column["BasicSalary"] = "basic_salary";
    /** column name */
    Employees_Select_Column["BasicSalaryMonthly"] = "basic_salary_monthly";
    /** column name */
    Employees_Select_Column["Birthday"] = "birthday";
    /** column name */
    Employees_Select_Column["CancelOnboardingNotes"] = "cancel_onboarding_notes";
    /** column name */
    Employees_Select_Column["CancelOnboardingReason"] = "cancel_onboarding_reason";
    /** column name */
    Employees_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Employees_Select_Column["DepartmentId"] = "department_id";
    /** column name */
    Employees_Select_Column["DepartureNotes"] = "departure_notes";
    /** column name */
    Employees_Select_Column["DepartureType"] = "departure_type";
    /** column name */
    Employees_Select_Column["Email"] = "email";
    /** column name */
    Employees_Select_Column["EmployeeFormStatus"] = "employee_form_status";
    /** column name */
    Employees_Select_Column["EmployeeNo"] = "employee_no";
    /** column name */
    Employees_Select_Column["EmployeeType"] = "employee_type";
    /** column name */
    Employees_Select_Column["EnName"] = "en_name";
    /** column name */
    Employees_Select_Column["EnteredWorkforceDate"] = "entered_workforce_date";
    /** column name */
    Employees_Select_Column["Ethnicity"] = "ethnicity";
    /** column name */
    Employees_Select_Column["FamilyAddress"] = "family_address";
    /** column name */
    Employees_Select_Column["GenderId"] = "gender_id";
    /** column name */
    Employees_Select_Column["HasInsurance"] = "has_insurance";
    /** column name */
    Employees_Select_Column["HealthCardEnd"] = "health_card_end";
    /** column name */
    Employees_Select_Column["HealthCardImage"] = "health_card_image";
    /** column name */
    Employees_Select_Column["HealthCardNo"] = "health_card_no";
    /** column name */
    Employees_Select_Column["HealthCardStart"] = "health_card_start";
    /** column name */
    Employees_Select_Column["HireDate"] = "hire_date";
    /** column name */
    Employees_Select_Column["HukouLocation"] = "hukou_location";
    /** column name */
    Employees_Select_Column["HukouType"] = "hukou_type";
    /** column name */
    Employees_Select_Column["Id"] = "id";
    /** column name */
    Employees_Select_Column["IdNumber"] = "id_number";
    /** column name */
    Employees_Select_Column["IdPhoto"] = "id_photo";
    /** column name */
    Employees_Select_Column["IdPhotoEmSide"] = "id_photo_em_side";
    /** column name */
    Employees_Select_Column["IdPhotoPoSide"] = "id_photo_po_side";
    /** column name */
    Employees_Select_Column["IdType"] = "id_type";
    /** column name */
    Employees_Select_Column["InsuranceStartDate"] = "insurance_start_date";
    /** column name */
    Employees_Select_Column["IsAdmin"] = "isAdmin";
    /** column name */
    Employees_Select_Column["IsTenantManager"] = "is_tenant_manager";
    /** column name */
    Employees_Select_Column["IsThreeDaysLeave"] = "is_three_days_leave";
    /** column name */
    Employees_Select_Column["JobTitle"] = "job_title";
    /** column name */
    Employees_Select_Column["LastDay"] = "last_day";
    /** column name */
    Employees_Select_Column["ManagerId"] = "manager_id";
    /** column name */
    Employees_Select_Column["MaritalStatus"] = "marital_status";
    /** column name */
    Employees_Select_Column["MedicalInsurance"] = "medical_insurance";
    /** column name */
    Employees_Select_Column["Mobile"] = "mobile";
    /** column name */
    Employees_Select_Column["Name"] = "name";
    /** column name */
    Employees_Select_Column["NativeRegion"] = "native_region";
    /** column name */
    Employees_Select_Column["NoticeTerminationAgreement"] = "notice_termination_agreement";
    /** column name */
    Employees_Select_Column["OpenId"] = "open_id";
    /** column name */
    Employees_Select_Column["OverboardNote"] = "overboard_note";
    /** column name */
    Employees_Select_Column["PersonalEmail"] = "personal_email";
    /** column name */
    Employees_Select_Column["PrimaryEmergencyContact"] = "primary_emergency_contact";
    /** column name */
    Employees_Select_Column["ProbationMonths"] = "probation_months";
    /** column name */
    Employees_Select_Column["ProvidentFundAccount"] = "provident_fund_account";
    /** column name */
    Employees_Select_Column["ResignationHandover"] = "resignation_handover";
    /** column name */
    Employees_Select_Column["SalaryAccount"] = "salary_account";
    /** column name */
    Employees_Select_Column["SalaryType"] = "salary_type";
    /** column name */
    Employees_Select_Column["SalaryTypeId"] = "salary_type_id";
    /** column name */
    Employees_Select_Column["Screenshot"] = "screenshot";
    /** column name */
    Employees_Select_Column["SocialSecurityAccount"] = "social_security_account";
    /** column name */
    Employees_Select_Column["SocialSecurityNumber"] = "social_security_number";
    /** column name */
    Employees_Select_Column["Status"] = "status";
    /** column name */
    Employees_Select_Column["UpdatedAt"] = "updated_at";
    /** column name */
    Employees_Select_Column["UserId"] = "user_id";
    /** column name */
    Employees_Select_Column["VerificationCode"] = "verification_code";
    /** column name */
    Employees_Select_Column["WorkAgeType"] = "work_age_type";
    /** column name */
    Employees_Select_Column["WorkLocation"] = "work_location";
})(Employees_Select_Column = exports.Employees_Select_Column || (exports.Employees_Select_Column = {}));
/** select "employees_aggregate_bool_exp_bool_and_arguments_columns" columns of table "employees" */
var Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function (Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */
    Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["HasInsurance"] = "has_insurance";
})(Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = exports.Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (exports.Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
/** select "employees_aggregate_bool_exp_bool_or_arguments_columns" columns of table "employees" */
var Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function (Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */
    Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["HasInsurance"] = "has_insurance";
})(Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = exports.Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (exports.Employees_Select_Column_Employees_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
/** update columns of table "employees" */
var Employees_Update_Column;
(function (Employees_Update_Column) {
    /** column name */
    Employees_Update_Column["ActualConversionTime"] = "actual_conversion_time";
    /** column name */
    Employees_Update_Column["ActualOverboardTime"] = "actual_overboard_time";
    /** column name */
    Employees_Update_Column["Application"] = "application";
    /** column name */
    Employees_Update_Column["ApplicationStatus"] = "application_status";
    /** column name */
    Employees_Update_Column["Avatar"] = "avatar";
    /** column name */
    Employees_Update_Column["BankAccountNumber"] = "bank_account_number";
    /** column name */
    Employees_Update_Column["BankName"] = "bank_name";
    /** column name */
    Employees_Update_Column["BasicSalary"] = "basic_salary";
    /** column name */
    Employees_Update_Column["BasicSalaryMonthly"] = "basic_salary_monthly";
    /** column name */
    Employees_Update_Column["Birthday"] = "birthday";
    /** column name */
    Employees_Update_Column["CancelOnboardingNotes"] = "cancel_onboarding_notes";
    /** column name */
    Employees_Update_Column["CancelOnboardingReason"] = "cancel_onboarding_reason";
    /** column name */
    Employees_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Employees_Update_Column["DepartmentId"] = "department_id";
    /** column name */
    Employees_Update_Column["DepartureNotes"] = "departure_notes";
    /** column name */
    Employees_Update_Column["DepartureType"] = "departure_type";
    /** column name */
    Employees_Update_Column["Email"] = "email";
    /** column name */
    Employees_Update_Column["EmployeeFormStatus"] = "employee_form_status";
    /** column name */
    Employees_Update_Column["EmployeeNo"] = "employee_no";
    /** column name */
    Employees_Update_Column["EmployeeType"] = "employee_type";
    /** column name */
    Employees_Update_Column["EnName"] = "en_name";
    /** column name */
    Employees_Update_Column["EnteredWorkforceDate"] = "entered_workforce_date";
    /** column name */
    Employees_Update_Column["Ethnicity"] = "ethnicity";
    /** column name */
    Employees_Update_Column["FamilyAddress"] = "family_address";
    /** column name */
    Employees_Update_Column["GenderId"] = "gender_id";
    /** column name */
    Employees_Update_Column["HasInsurance"] = "has_insurance";
    /** column name */
    Employees_Update_Column["HealthCardEnd"] = "health_card_end";
    /** column name */
    Employees_Update_Column["HealthCardImage"] = "health_card_image";
    /** column name */
    Employees_Update_Column["HealthCardNo"] = "health_card_no";
    /** column name */
    Employees_Update_Column["HealthCardStart"] = "health_card_start";
    /** column name */
    Employees_Update_Column["HireDate"] = "hire_date";
    /** column name */
    Employees_Update_Column["HukouLocation"] = "hukou_location";
    /** column name */
    Employees_Update_Column["HukouType"] = "hukou_type";
    /** column name */
    Employees_Update_Column["Id"] = "id";
    /** column name */
    Employees_Update_Column["IdNumber"] = "id_number";
    /** column name */
    Employees_Update_Column["IdPhoto"] = "id_photo";
    /** column name */
    Employees_Update_Column["IdPhotoEmSide"] = "id_photo_em_side";
    /** column name */
    Employees_Update_Column["IdPhotoPoSide"] = "id_photo_po_side";
    /** column name */
    Employees_Update_Column["IdType"] = "id_type";
    /** column name */
    Employees_Update_Column["InsuranceStartDate"] = "insurance_start_date";
    /** column name */
    Employees_Update_Column["IsAdmin"] = "isAdmin";
    /** column name */
    Employees_Update_Column["IsTenantManager"] = "is_tenant_manager";
    /** column name */
    Employees_Update_Column["IsThreeDaysLeave"] = "is_three_days_leave";
    /** column name */
    Employees_Update_Column["JobTitle"] = "job_title";
    /** column name */
    Employees_Update_Column["LastDay"] = "last_day";
    /** column name */
    Employees_Update_Column["ManagerId"] = "manager_id";
    /** column name */
    Employees_Update_Column["MaritalStatus"] = "marital_status";
    /** column name */
    Employees_Update_Column["MedicalInsurance"] = "medical_insurance";
    /** column name */
    Employees_Update_Column["Mobile"] = "mobile";
    /** column name */
    Employees_Update_Column["Name"] = "name";
    /** column name */
    Employees_Update_Column["NativeRegion"] = "native_region";
    /** column name */
    Employees_Update_Column["NoticeTerminationAgreement"] = "notice_termination_agreement";
    /** column name */
    Employees_Update_Column["OpenId"] = "open_id";
    /** column name */
    Employees_Update_Column["OverboardNote"] = "overboard_note";
    /** column name */
    Employees_Update_Column["PersonalEmail"] = "personal_email";
    /** column name */
    Employees_Update_Column["PrimaryEmergencyContact"] = "primary_emergency_contact";
    /** column name */
    Employees_Update_Column["ProbationMonths"] = "probation_months";
    /** column name */
    Employees_Update_Column["ProvidentFundAccount"] = "provident_fund_account";
    /** column name */
    Employees_Update_Column["ResignationHandover"] = "resignation_handover";
    /** column name */
    Employees_Update_Column["SalaryAccount"] = "salary_account";
    /** column name */
    Employees_Update_Column["SalaryType"] = "salary_type";
    /** column name */
    Employees_Update_Column["SalaryTypeId"] = "salary_type_id";
    /** column name */
    Employees_Update_Column["Screenshot"] = "screenshot";
    /** column name */
    Employees_Update_Column["SocialSecurityAccount"] = "social_security_account";
    /** column name */
    Employees_Update_Column["SocialSecurityNumber"] = "social_security_number";
    /** column name */
    Employees_Update_Column["Status"] = "status";
    /** column name */
    Employees_Update_Column["UpdatedAt"] = "updated_at";
    /** column name */
    Employees_Update_Column["UserId"] = "user_id";
    /** column name */
    Employees_Update_Column["VerificationCode"] = "verification_code";
    /** column name */
    Employees_Update_Column["WorkAgeType"] = "work_age_type";
    /** column name */
    Employees_Update_Column["WorkLocation"] = "work_location";
})(Employees_Update_Column = exports.Employees_Update_Column || (exports.Employees_Update_Column = {}));
/** unique or primary key constraints on table "foodcategories" */
var Foodcategories_Constraint;
(function (Foodcategories_Constraint) {
    /** unique or primary key constraint on columns "class_id" */
    Foodcategories_Constraint["FoodcategoriesPrimary20"] = "foodcategoriesPRIMARY20";
})(Foodcategories_Constraint = exports.Foodcategories_Constraint || (exports.Foodcategories_Constraint = {}));
/** select columns of table "foodcategories" */
var Foodcategories_Select_Column;
(function (Foodcategories_Select_Column) {
    /** column name */
    Foodcategories_Select_Column["BrandCode"] = "brand_code";
    /** column name */
    Foodcategories_Select_Column["BrandName"] = "brand_name";
    /** column name */
    Foodcategories_Select_Column["CenterCode"] = "center_code";
    /** column name */
    Foodcategories_Select_Column["CenterName"] = "center_name";
    /** column name */
    Foodcategories_Select_Column["ClassCode"] = "class_code";
    /** column name */
    Foodcategories_Select_Column["ClassId"] = "class_id";
    /** column name */
    Foodcategories_Select_Column["ClassName"] = "class_name";
    /** column name */
    Foodcategories_Select_Column["CreateShopCode"] = "create_shop_code";
    /** column name */
    Foodcategories_Select_Column["CreateShopName"] = "create_shop_name";
    /** column name */
    Foodcategories_Select_Column["CreateTime"] = "create_time";
    /** column name */
    Foodcategories_Select_Column["Deflag"] = "deflag";
    /** column name */
    Foodcategories_Select_Column["IsCreateTempItem"] = "is_create_temp_item";
    /** column name */
    Foodcategories_Select_Column["Level"] = "level";
    /** column name */
    Foodcategories_Select_Column["ModifyTime"] = "modify_time";
    /** column name */
    Foodcategories_Select_Column["ParentId"] = "parent_id";
})(Foodcategories_Select_Column = exports.Foodcategories_Select_Column || (exports.Foodcategories_Select_Column = {}));
/** update columns of table "foodcategories" */
var Foodcategories_Update_Column;
(function (Foodcategories_Update_Column) {
    /** column name */
    Foodcategories_Update_Column["BrandCode"] = "brand_code";
    /** column name */
    Foodcategories_Update_Column["BrandName"] = "brand_name";
    /** column name */
    Foodcategories_Update_Column["CenterCode"] = "center_code";
    /** column name */
    Foodcategories_Update_Column["CenterName"] = "center_name";
    /** column name */
    Foodcategories_Update_Column["ClassCode"] = "class_code";
    /** column name */
    Foodcategories_Update_Column["ClassId"] = "class_id";
    /** column name */
    Foodcategories_Update_Column["ClassName"] = "class_name";
    /** column name */
    Foodcategories_Update_Column["CreateShopCode"] = "create_shop_code";
    /** column name */
    Foodcategories_Update_Column["CreateShopName"] = "create_shop_name";
    /** column name */
    Foodcategories_Update_Column["CreateTime"] = "create_time";
    /** column name */
    Foodcategories_Update_Column["Deflag"] = "deflag";
    /** column name */
    Foodcategories_Update_Column["IsCreateTempItem"] = "is_create_temp_item";
    /** column name */
    Foodcategories_Update_Column["Level"] = "level";
    /** column name */
    Foodcategories_Update_Column["ModifyTime"] = "modify_time";
    /** column name */
    Foodcategories_Update_Column["ParentId"] = "parent_id";
})(Foodcategories_Update_Column = exports.Foodcategories_Update_Column || (exports.Foodcategories_Update_Column = {}));
/** unique or primary key constraints on table "fooditems" */
var Fooditems_Constraint;
(function (Fooditems_Constraint) {
    /** unique or primary key constraint on columns "item_id" */
    Fooditems_Constraint["FooditemsPrimary21"] = "fooditemsPRIMARY21";
})(Fooditems_Constraint = exports.Fooditems_Constraint || (exports.Fooditems_Constraint = {}));
/** select columns of table "fooditems" */
var Fooditems_Select_Column;
(function (Fooditems_Select_Column) {
    /** column name */
    Fooditems_Select_Column["AidCode"] = "aid_code";
    /** column name */
    Fooditems_Select_Column["AuxiliaryUnitId"] = "auxiliary_unit_id";
    /** column name */
    Fooditems_Select_Column["Barcode"] = "barcode";
    /** column name */
    Fooditems_Select_Column["BigClassId"] = "big_class_id";
    /** column name */
    Fooditems_Select_Column["BigPic3Url"] = "big_pic3_url";
    /** column name */
    Fooditems_Select_Column["BigPicUrl"] = "big_pic_url";
    /** column name */
    Fooditems_Select_Column["BrandCode"] = "brand_code";
    /** column name */
    Fooditems_Select_Column["BrandId"] = "brand_id";
    /** column name */
    Fooditems_Select_Column["BrandItemCode"] = "brand_item_code";
    /** column name */
    Fooditems_Select_Column["BrandItemName"] = "brand_item_name";
    /** column name */
    Fooditems_Select_Column["BrandName"] = "brand_name";
    /** column name */
    Fooditems_Select_Column["CenterCode"] = "center_code";
    /** column name */
    Fooditems_Select_Column["CenterName"] = "center_name";
    /** column name */
    Fooditems_Select_Column["CreateTime"] = "create_time";
    /** column name */
    Fooditems_Select_Column["Deflg"] = "deflg";
    /** column name */
    Fooditems_Select_Column["EnableMultiSize"] = "enable_multi_size";
    /** column name */
    Fooditems_Select_Column["EnglishName"] = "english_name";
    /** column name */
    Fooditems_Select_Column["GifPicUrl"] = "gif_pic_url";
    /** column name */
    Fooditems_Select_Column["Intro"] = "intro";
    /** column name */
    Fooditems_Select_Column["IsEnable"] = "is_enable";
    /** column name */
    Fooditems_Select_Column["IsPackage"] = "is_package";
    /** column name */
    Fooditems_Select_Column["IsTempItem"] = "is_temp_item";
    /** column name */
    Fooditems_Select_Column["ItemCode"] = "item_code";
    /** column name */
    Fooditems_Select_Column["ItemId"] = "item_id";
    /** column name */
    Fooditems_Select_Column["ItemName"] = "item_name";
    /** column name */
    Fooditems_Select_Column["ModifyTime"] = "modify_time";
    /** column name */
    Fooditems_Select_Column["PkgType"] = "pkg_type";
    /** column name */
    Fooditems_Select_Column["PungencyDegree"] = "pungencyDegree";
    /** column name */
    Fooditems_Select_Column["SalesRevenueTypeId"] = "salesRevenueTypeId";
    /** column name */
    Fooditems_Select_Column["ShopCode"] = "shop_code";
    /** column name */
    Fooditems_Select_Column["ShopName"] = "shop_name";
    /** column name */
    Fooditems_Select_Column["SmallClassId"] = "small_class_id";
    /** column name */
    Fooditems_Select_Column["SmallPicUrl"] = "small_pic_url";
    /** column name */
    Fooditems_Select_Column["StdPrice"] = "std_price";
    /** column name */
    Fooditems_Select_Column["UnitId"] = "unit_id";
    /** column name */
    Fooditems_Select_Column["UnitName"] = "unit_name";
    /** column name */
    Fooditems_Select_Column["VideoUrl"] = "video_url";
    /** column name */
    Fooditems_Select_Column["ZxjType"] = "zxjType";
})(Fooditems_Select_Column = exports.Fooditems_Select_Column || (exports.Fooditems_Select_Column = {}));
/** select "fooditems_aggregate_bool_exp_bool_and_arguments_columns" columns of table "fooditems" */
var Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
(function (Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_And_Arguments_Columns) {
    /** column name */
    Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["EnableMultiSize"] = "enable_multi_size";
    /** column name */
    Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsEnable"] = "is_enable";
    /** column name */
    Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsPackage"] = "is_package";
    /** column name */
    Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_And_Arguments_Columns["IsTempItem"] = "is_temp_item";
})(Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = exports.Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_And_Arguments_Columns || (exports.Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_And_Arguments_Columns = {}));
/** select "fooditems_aggregate_bool_exp_bool_or_arguments_columns" columns of table "fooditems" */
var Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
(function (Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns) {
    /** column name */
    Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["EnableMultiSize"] = "enable_multi_size";
    /** column name */
    Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsEnable"] = "is_enable";
    /** column name */
    Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsPackage"] = "is_package";
    /** column name */
    Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns["IsTempItem"] = "is_temp_item";
})(Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = exports.Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns || (exports.Fooditems_Select_Column_Fooditems_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns = {}));
/** update columns of table "fooditems" */
var Fooditems_Update_Column;
(function (Fooditems_Update_Column) {
    /** column name */
    Fooditems_Update_Column["AidCode"] = "aid_code";
    /** column name */
    Fooditems_Update_Column["AuxiliaryUnitId"] = "auxiliary_unit_id";
    /** column name */
    Fooditems_Update_Column["Barcode"] = "barcode";
    /** column name */
    Fooditems_Update_Column["BigClassId"] = "big_class_id";
    /** column name */
    Fooditems_Update_Column["BigPic3Url"] = "big_pic3_url";
    /** column name */
    Fooditems_Update_Column["BigPicUrl"] = "big_pic_url";
    /** column name */
    Fooditems_Update_Column["BrandCode"] = "brand_code";
    /** column name */
    Fooditems_Update_Column["BrandId"] = "brand_id";
    /** column name */
    Fooditems_Update_Column["BrandItemCode"] = "brand_item_code";
    /** column name */
    Fooditems_Update_Column["BrandItemName"] = "brand_item_name";
    /** column name */
    Fooditems_Update_Column["BrandName"] = "brand_name";
    /** column name */
    Fooditems_Update_Column["CenterCode"] = "center_code";
    /** column name */
    Fooditems_Update_Column["CenterName"] = "center_name";
    /** column name */
    Fooditems_Update_Column["CreateTime"] = "create_time";
    /** column name */
    Fooditems_Update_Column["Deflg"] = "deflg";
    /** column name */
    Fooditems_Update_Column["EnableMultiSize"] = "enable_multi_size";
    /** column name */
    Fooditems_Update_Column["EnglishName"] = "english_name";
    /** column name */
    Fooditems_Update_Column["GifPicUrl"] = "gif_pic_url";
    /** column name */
    Fooditems_Update_Column["Intro"] = "intro";
    /** column name */
    Fooditems_Update_Column["IsEnable"] = "is_enable";
    /** column name */
    Fooditems_Update_Column["IsPackage"] = "is_package";
    /** column name */
    Fooditems_Update_Column["IsTempItem"] = "is_temp_item";
    /** column name */
    Fooditems_Update_Column["ItemCode"] = "item_code";
    /** column name */
    Fooditems_Update_Column["ItemId"] = "item_id";
    /** column name */
    Fooditems_Update_Column["ItemName"] = "item_name";
    /** column name */
    Fooditems_Update_Column["ModifyTime"] = "modify_time";
    /** column name */
    Fooditems_Update_Column["PkgType"] = "pkg_type";
    /** column name */
    Fooditems_Update_Column["PungencyDegree"] = "pungencyDegree";
    /** column name */
    Fooditems_Update_Column["SalesRevenueTypeId"] = "salesRevenueTypeId";
    /** column name */
    Fooditems_Update_Column["ShopCode"] = "shop_code";
    /** column name */
    Fooditems_Update_Column["ShopName"] = "shop_name";
    /** column name */
    Fooditems_Update_Column["SmallClassId"] = "small_class_id";
    /** column name */
    Fooditems_Update_Column["SmallPicUrl"] = "small_pic_url";
    /** column name */
    Fooditems_Update_Column["StdPrice"] = "std_price";
    /** column name */
    Fooditems_Update_Column["UnitId"] = "unit_id";
    /** column name */
    Fooditems_Update_Column["UnitName"] = "unit_name";
    /** column name */
    Fooditems_Update_Column["VideoUrl"] = "video_url";
    /** column name */
    Fooditems_Update_Column["ZxjType"] = "zxjType";
})(Fooditems_Update_Column = exports.Fooditems_Update_Column || (exports.Fooditems_Update_Column = {}));
/** unique or primary key constraints on table "ingredients" */
var Ingredients_Constraint;
(function (Ingredients_Constraint) {
    /** unique or primary key constraint on columns "fooditem_id", "supplyitem_id" */
    Ingredients_Constraint["FooditemId36"] = "fooditem_id36";
    /** unique or primary key constraint on columns "id" */
    Ingredients_Constraint["IngredientsPrimary23"] = "ingredientsPRIMARY23";
})(Ingredients_Constraint = exports.Ingredients_Constraint || (exports.Ingredients_Constraint = {}));
/** select columns of table "ingredients" */
var Ingredients_Select_Column;
(function (Ingredients_Select_Column) {
    /** column name */
    Ingredients_Select_Column["FooditemId"] = "fooditem_id";
    /** column name */
    Ingredients_Select_Column["Id"] = "id";
    /** column name */
    Ingredients_Select_Column["Qty"] = "qty";
    /** column name */
    Ingredients_Select_Column["SupplyitemId"] = "supplyitem_id";
})(Ingredients_Select_Column = exports.Ingredients_Select_Column || (exports.Ingredients_Select_Column = {}));
/** update columns of table "ingredients" */
var Ingredients_Update_Column;
(function (Ingredients_Update_Column) {
    /** column name */
    Ingredients_Update_Column["FooditemId"] = "fooditem_id";
    /** column name */
    Ingredients_Update_Column["Id"] = "id";
    /** column name */
    Ingredients_Update_Column["Qty"] = "qty";
    /** column name */
    Ingredients_Update_Column["SupplyitemId"] = "supplyitem_id";
})(Ingredients_Update_Column = exports.Ingredients_Update_Column || (exports.Ingredients_Update_Column = {}));
/** unique or primary key constraints on table "leave_types" */
var Leave_Types_Constraint;
(function (Leave_Types_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Leave_Types_Constraint["LeaveTypesPkey"] = "leave_types_pkey";
})(Leave_Types_Constraint = exports.Leave_Types_Constraint || (exports.Leave_Types_Constraint = {}));
/** select columns of table "leave_types" */
var Leave_Types_Select_Column;
(function (Leave_Types_Select_Column) {
    /** column name */
    Leave_Types_Select_Column["Id"] = "id";
    /** column name */
    Leave_Types_Select_Column["Name"] = "name";
})(Leave_Types_Select_Column = exports.Leave_Types_Select_Column || (exports.Leave_Types_Select_Column = {}));
/** update columns of table "leave_types" */
var Leave_Types_Update_Column;
(function (Leave_Types_Update_Column) {
    /** column name */
    Leave_Types_Update_Column["Id"] = "id";
    /** column name */
    Leave_Types_Update_Column["Name"] = "name";
})(Leave_Types_Update_Column = exports.Leave_Types_Update_Column || (exports.Leave_Types_Update_Column = {}));
/** unique or primary key constraints on table "monthlysalary" */
var Monthlysalary_Constraint;
(function (Monthlysalary_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Monthlysalary_Constraint["MonthlysalaryPkey"] = "monthlysalary_pkey";
})(Monthlysalary_Constraint = exports.Monthlysalary_Constraint || (exports.Monthlysalary_Constraint = {}));
/** select columns of table "monthlysalary" */
var Monthlysalary_Select_Column;
(function (Monthlysalary_Select_Column) {
    /** column name */
    Monthlysalary_Select_Column["AttendanceDeduction"] = "attendance_deduction";
    /** column name */
    Monthlysalary_Select_Column["BonusdeductiontypeId"] = "bonusdeductiontype_id";
    /** column name */
    Monthlysalary_Select_Column["Complaint"] = "complaint";
    /** column name */
    Monthlysalary_Select_Column["DeductionsForUnpaidLeave"] = "deductions_for_unpaid_leave";
    /** column name */
    Monthlysalary_Select_Column["EmployeeId"] = "employee_id";
    /** column name */
    Monthlysalary_Select_Column["Id"] = "id";
    /** column name */
    Monthlysalary_Select_Column["Month"] = "month";
    /** column name */
    Monthlysalary_Select_Column["OtherDeductions"] = "other_deductions";
    /** column name */
    Monthlysalary_Select_Column["OtherSubsidies"] = "other_subsidies";
    /** column name */
    Monthlysalary_Select_Column["PenaltyDeduct"] = "penalty_deduct";
    /** column name */
    Monthlysalary_Select_Column["Performance"] = "performance";
    /** column name */
    Monthlysalary_Select_Column["PersonalTax"] = "personal_tax";
    /** column name */
    Monthlysalary_Select_Column["StatutoryHoliday"] = "statutory_holiday";
    /** column name */
    Monthlysalary_Select_Column["Type"] = "type";
})(Monthlysalary_Select_Column = exports.Monthlysalary_Select_Column || (exports.Monthlysalary_Select_Column = {}));
/** update columns of table "monthlysalary" */
var Monthlysalary_Update_Column;
(function (Monthlysalary_Update_Column) {
    /** column name */
    Monthlysalary_Update_Column["AttendanceDeduction"] = "attendance_deduction";
    /** column name */
    Monthlysalary_Update_Column["BonusdeductiontypeId"] = "bonusdeductiontype_id";
    /** column name */
    Monthlysalary_Update_Column["Complaint"] = "complaint";
    /** column name */
    Monthlysalary_Update_Column["DeductionsForUnpaidLeave"] = "deductions_for_unpaid_leave";
    /** column name */
    Monthlysalary_Update_Column["EmployeeId"] = "employee_id";
    /** column name */
    Monthlysalary_Update_Column["Id"] = "id";
    /** column name */
    Monthlysalary_Update_Column["Month"] = "month";
    /** column name */
    Monthlysalary_Update_Column["OtherDeductions"] = "other_deductions";
    /** column name */
    Monthlysalary_Update_Column["OtherSubsidies"] = "other_subsidies";
    /** column name */
    Monthlysalary_Update_Column["PenaltyDeduct"] = "penalty_deduct";
    /** column name */
    Monthlysalary_Update_Column["Performance"] = "performance";
    /** column name */
    Monthlysalary_Update_Column["PersonalTax"] = "personal_tax";
    /** column name */
    Monthlysalary_Update_Column["StatutoryHoliday"] = "statutory_holiday";
    /** column name */
    Monthlysalary_Update_Column["Type"] = "type";
})(Monthlysalary_Update_Column = exports.Monthlysalary_Update_Column || (exports.Monthlysalary_Update_Column = {}));
/** unique or primary key constraints on table "nav_bg_categories" */
var Nav_Bg_Categories_Constraint;
(function (Nav_Bg_Categories_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Nav_Bg_Categories_Constraint["NavBgCategoriesPrimary28"] = "nav_bg_categoriesPRIMARY28";
})(Nav_Bg_Categories_Constraint = exports.Nav_Bg_Categories_Constraint || (exports.Nav_Bg_Categories_Constraint = {}));
/** select columns of table "nav_bg_categories" */
var Nav_Bg_Categories_Select_Column;
(function (Nav_Bg_Categories_Select_Column) {
    /** column name */
    Nav_Bg_Categories_Select_Column["Id"] = "id";
    /** column name */
    Nav_Bg_Categories_Select_Column["Name"] = "name";
    /** column name */
    Nav_Bg_Categories_Select_Column["NavXlCategoriesId"] = "nav_xl_categories_id";
})(Nav_Bg_Categories_Select_Column = exports.Nav_Bg_Categories_Select_Column || (exports.Nav_Bg_Categories_Select_Column = {}));
/** update columns of table "nav_bg_categories" */
var Nav_Bg_Categories_Update_Column;
(function (Nav_Bg_Categories_Update_Column) {
    /** column name */
    Nav_Bg_Categories_Update_Column["Id"] = "id";
    /** column name */
    Nav_Bg_Categories_Update_Column["Name"] = "name";
    /** column name */
    Nav_Bg_Categories_Update_Column["NavXlCategoriesId"] = "nav_xl_categories_id";
})(Nav_Bg_Categories_Update_Column = exports.Nav_Bg_Categories_Update_Column || (exports.Nav_Bg_Categories_Update_Column = {}));
/** unique or primary key constraints on table "nav_sm_categories" */
var Nav_Sm_Categories_Constraint;
(function (Nav_Sm_Categories_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Nav_Sm_Categories_Constraint["NavSmCategoriesPrimary29"] = "nav_sm_categoriesPRIMARY29";
})(Nav_Sm_Categories_Constraint = exports.Nav_Sm_Categories_Constraint || (exports.Nav_Sm_Categories_Constraint = {}));
/** select columns of table "nav_sm_categories" */
var Nav_Sm_Categories_Select_Column;
(function (Nav_Sm_Categories_Select_Column) {
    /** column name */
    Nav_Sm_Categories_Select_Column["Id"] = "id";
    /** column name */
    Nav_Sm_Categories_Select_Column["Name"] = "name";
    /** column name */
    Nav_Sm_Categories_Select_Column["NavBgCategoriesId"] = "nav_bg_categories_id";
    /** column name */
    Nav_Sm_Categories_Select_Column["SideNavVisible"] = "side_nav_visible";
    /** column name */
    Nav_Sm_Categories_Select_Column["Url"] = "url";
})(Nav_Sm_Categories_Select_Column = exports.Nav_Sm_Categories_Select_Column || (exports.Nav_Sm_Categories_Select_Column = {}));
/** update columns of table "nav_sm_categories" */
var Nav_Sm_Categories_Update_Column;
(function (Nav_Sm_Categories_Update_Column) {
    /** column name */
    Nav_Sm_Categories_Update_Column["Id"] = "id";
    /** column name */
    Nav_Sm_Categories_Update_Column["Name"] = "name";
    /** column name */
    Nav_Sm_Categories_Update_Column["NavBgCategoriesId"] = "nav_bg_categories_id";
    /** column name */
    Nav_Sm_Categories_Update_Column["SideNavVisible"] = "side_nav_visible";
    /** column name */
    Nav_Sm_Categories_Update_Column["Url"] = "url";
})(Nav_Sm_Categories_Update_Column = exports.Nav_Sm_Categories_Update_Column || (exports.Nav_Sm_Categories_Update_Column = {}));
/** unique or primary key constraints on table "nav_xl_categories" */
var Nav_Xl_Categories_Constraint;
(function (Nav_Xl_Categories_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Nav_Xl_Categories_Constraint["NavXlCategoriesPrimary30"] = "nav_xl_categoriesPRIMARY30";
})(Nav_Xl_Categories_Constraint = exports.Nav_Xl_Categories_Constraint || (exports.Nav_Xl_Categories_Constraint = {}));
/** select columns of table "nav_xl_categories" */
var Nav_Xl_Categories_Select_Column;
(function (Nav_Xl_Categories_Select_Column) {
    /** column name */
    Nav_Xl_Categories_Select_Column["Id"] = "id";
    /** column name */
    Nav_Xl_Categories_Select_Column["Name"] = "name";
    /** column name */
    Nav_Xl_Categories_Select_Column["Url"] = "url";
})(Nav_Xl_Categories_Select_Column = exports.Nav_Xl_Categories_Select_Column || (exports.Nav_Xl_Categories_Select_Column = {}));
/** update columns of table "nav_xl_categories" */
var Nav_Xl_Categories_Update_Column;
(function (Nav_Xl_Categories_Update_Column) {
    /** column name */
    Nav_Xl_Categories_Update_Column["Id"] = "id";
    /** column name */
    Nav_Xl_Categories_Update_Column["Name"] = "name";
    /** column name */
    Nav_Xl_Categories_Update_Column["Url"] = "url";
})(Nav_Xl_Categories_Update_Column = exports.Nav_Xl_Categories_Update_Column || (exports.Nav_Xl_Categories_Update_Column = {}));
/** column ordering options */
var Order_By;
(function (Order_By) {
    /** in ascending order, nulls last */
    Order_By["Asc"] = "asc";
    /** in ascending order, nulls first */
    Order_By["AscNullsFirst"] = "asc_nulls_first";
    /** in ascending order, nulls last */
    Order_By["AscNullsLast"] = "asc_nulls_last";
    /** in descending order, nulls first */
    Order_By["Desc"] = "desc";
    /** in descending order, nulls first */
    Order_By["DescNullsFirst"] = "desc_nulls_first";
    /** in descending order, nulls last */
    Order_By["DescNullsLast"] = "desc_nulls_last";
})(Order_By = exports.Order_By || (exports.Order_By = {}));
/** unique or primary key constraints on table "organstores" */
var Organstores_Constraint;
(function (Organstores_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Organstores_Constraint["OrganstoresPrimary32"] = "organstoresPRIMARY32";
})(Organstores_Constraint = exports.Organstores_Constraint || (exports.Organstores_Constraint = {}));
/** select columns of table "organstores" */
var Organstores_Select_Column;
(function (Organstores_Select_Column) {
    /** column name */
    Organstores_Select_Column["EnableFlag"] = "enableFlag";
    /** column name */
    Organstores_Select_Column["Fkc"] = "fkc";
    /** column name */
    Organstores_Select_Column["Id"] = "id";
    /** column name */
    Organstores_Select_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Organstores_Select_Column["ParentId"] = "parentId";
    /** column name */
    Organstores_Select_Column["StoreCode"] = "storeCode";
    /** column name */
    Organstores_Select_Column["StoreId"] = "storeId";
    /** column name */
    Organstores_Select_Column["StoreMode"] = "storeMode";
    /** column name */
    Organstores_Select_Column["StoreName"] = "storeName";
})(Organstores_Select_Column = exports.Organstores_Select_Column || (exports.Organstores_Select_Column = {}));
/** update columns of table "organstores" */
var Organstores_Update_Column;
(function (Organstores_Update_Column) {
    /** column name */
    Organstores_Update_Column["EnableFlag"] = "enableFlag";
    /** column name */
    Organstores_Update_Column["Fkc"] = "fkc";
    /** column name */
    Organstores_Update_Column["Id"] = "id";
    /** column name */
    Organstores_Update_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Organstores_Update_Column["ParentId"] = "parentId";
    /** column name */
    Organstores_Update_Column["StoreCode"] = "storeCode";
    /** column name */
    Organstores_Update_Column["StoreId"] = "storeId";
    /** column name */
    Organstores_Update_Column["StoreMode"] = "storeMode";
    /** column name */
    Organstores_Update_Column["StoreName"] = "storeName";
})(Organstores_Update_Column = exports.Organstores_Update_Column || (exports.Organstores_Update_Column = {}));
/** unique or primary key constraints on table "role_nav_sm_categories" */
var Role_Nav_Sm_Categories_Constraint;
(function (Role_Nav_Sm_Categories_Constraint) {
    /** unique or primary key constraint on columns "role_id", "nav_sm_category_id" */
    Role_Nav_Sm_Categories_Constraint["RoleNavSmCategoriesPrimary34"] = "role_nav_sm_categoriesPRIMARY34";
})(Role_Nav_Sm_Categories_Constraint = exports.Role_Nav_Sm_Categories_Constraint || (exports.Role_Nav_Sm_Categories_Constraint = {}));
/** select columns of table "role_nav_sm_categories" */
var Role_Nav_Sm_Categories_Select_Column;
(function (Role_Nav_Sm_Categories_Select_Column) {
    /** column name */
    Role_Nav_Sm_Categories_Select_Column["NavSmCategoryId"] = "nav_sm_category_id";
    /** column name */
    Role_Nav_Sm_Categories_Select_Column["RoleId"] = "role_id";
})(Role_Nav_Sm_Categories_Select_Column = exports.Role_Nav_Sm_Categories_Select_Column || (exports.Role_Nav_Sm_Categories_Select_Column = {}));
/** update columns of table "role_nav_sm_categories" */
var Role_Nav_Sm_Categories_Update_Column;
(function (Role_Nav_Sm_Categories_Update_Column) {
    /** column name */
    Role_Nav_Sm_Categories_Update_Column["NavSmCategoryId"] = "nav_sm_category_id";
    /** column name */
    Role_Nav_Sm_Categories_Update_Column["RoleId"] = "role_id";
})(Role_Nav_Sm_Categories_Update_Column = exports.Role_Nav_Sm_Categories_Update_Column || (exports.Role_Nav_Sm_Categories_Update_Column = {}));
/** unique or primary key constraints on table "role_scope" */
var Role_Scope_Constraint;
(function (Role_Scope_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Role_Scope_Constraint["RoleScopePrimary35"] = "role_scopePRIMARY35";
    /** unique or primary key constraint on columns "role_id", "scope_id" */
    Role_Scope_Constraint["UniqueCombinationIdx48"] = "unique_combination_idx48";
})(Role_Scope_Constraint = exports.Role_Scope_Constraint || (exports.Role_Scope_Constraint = {}));
/** select columns of table "role_scope" */
var Role_Scope_Select_Column;
(function (Role_Scope_Select_Column) {
    /** column name */
    Role_Scope_Select_Column["Id"] = "id";
    /** column name */
    Role_Scope_Select_Column["RoleId"] = "role_id";
    /** column name */
    Role_Scope_Select_Column["ScopeId"] = "scope_id";
})(Role_Scope_Select_Column = exports.Role_Scope_Select_Column || (exports.Role_Scope_Select_Column = {}));
/** update columns of table "role_scope" */
var Role_Scope_Update_Column;
(function (Role_Scope_Update_Column) {
    /** column name */
    Role_Scope_Update_Column["Id"] = "id";
    /** column name */
    Role_Scope_Update_Column["RoleId"] = "role_id";
    /** column name */
    Role_Scope_Update_Column["ScopeId"] = "scope_id";
})(Role_Scope_Update_Column = exports.Role_Scope_Update_Column || (exports.Role_Scope_Update_Column = {}));
/** unique or primary key constraints on table "roles" */
var Roles_Constraint;
(function (Roles_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Roles_Constraint["RolesPrimary36"] = "rolesPRIMARY36";
})(Roles_Constraint = exports.Roles_Constraint || (exports.Roles_Constraint = {}));
/** select columns of table "roles" */
var Roles_Select_Column;
(function (Roles_Select_Column) {
    /** column name */
    Roles_Select_Column["Id"] = "id";
    /** column name */
    Roles_Select_Column["Label"] = "label";
    /** column name */
    Roles_Select_Column["Name"] = "name";
    /** column name */
    Roles_Select_Column["Ranking"] = "ranking";
})(Roles_Select_Column = exports.Roles_Select_Column || (exports.Roles_Select_Column = {}));
/** update columns of table "roles" */
var Roles_Update_Column;
(function (Roles_Update_Column) {
    /** column name */
    Roles_Update_Column["Id"] = "id";
    /** column name */
    Roles_Update_Column["Label"] = "label";
    /** column name */
    Roles_Update_Column["Name"] = "name";
    /** column name */
    Roles_Update_Column["Ranking"] = "ranking";
})(Roles_Update_Column = exports.Roles_Update_Column || (exports.Roles_Update_Column = {}));
/** unique or primary key constraints on table "salary_types" */
var Salary_Types_Constraint;
(function (Salary_Types_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Salary_Types_Constraint["SalaryTypesPkey"] = "salary_types_pkey";
})(Salary_Types_Constraint = exports.Salary_Types_Constraint || (exports.Salary_Types_Constraint = {}));
/** select columns of table "salary_types" */
var Salary_Types_Select_Column;
(function (Salary_Types_Select_Column) {
    /** column name */
    Salary_Types_Select_Column["Id"] = "id";
    /** column name */
    Salary_Types_Select_Column["Name"] = "name";
})(Salary_Types_Select_Column = exports.Salary_Types_Select_Column || (exports.Salary_Types_Select_Column = {}));
/** update columns of table "salary_types" */
var Salary_Types_Update_Column;
(function (Salary_Types_Update_Column) {
    /** column name */
    Salary_Types_Update_Column["Id"] = "id";
    /** column name */
    Salary_Types_Update_Column["Name"] = "name";
})(Salary_Types_Update_Column = exports.Salary_Types_Update_Column || (exports.Salary_Types_Update_Column = {}));
/** unique or primary key constraints on table "salesitemsdata" */
var Salesitemsdata_Constraint;
(function (Salesitemsdata_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Salesitemsdata_Constraint["SalesitemsdataPrimary37"] = "salesitemsdataPRIMARY37";
})(Salesitemsdata_Constraint = exports.Salesitemsdata_Constraint || (exports.Salesitemsdata_Constraint = {}));
/** select columns of table "salesitemsdata" */
var Salesitemsdata_Select_Column;
(function (Salesitemsdata_Select_Column) {
    /** column name */
    Salesitemsdata_Select_Column["Brand"] = "brand";
    /** column name */
    Salesitemsdata_Select_Column["BsId"] = "bs_id";
    /** column name */
    Salesitemsdata_Select_Column["Date"] = "date";
    /** column name */
    Salesitemsdata_Select_Column["DeFrom"] = "de_from";
    /** column name */
    Salesitemsdata_Select_Column["Id"] = "id";
    /** column name */
    Salesitemsdata_Select_Column["IncomeMoney"] = "income_money";
    /** column name */
    Salesitemsdata_Select_Column["ItemId"] = "item_id";
    /** column name */
    Salesitemsdata_Select_Column["ItemName"] = "item_name";
    /** column name */
    Salesitemsdata_Select_Column["LastQty"] = "last_qty";
    /** column name */
    Salesitemsdata_Select_Column["LastTotal"] = "last_total";
    /** column name */
    Salesitemsdata_Select_Column["SmallClassId"] = "small_class_id";
    /** column name */
    Salesitemsdata_Select_Column["SmallClassName"] = "small_class_name";
    /** column name */
    Salesitemsdata_Select_Column["Store"] = "store";
})(Salesitemsdata_Select_Column = exports.Salesitemsdata_Select_Column || (exports.Salesitemsdata_Select_Column = {}));
/** update columns of table "salesitemsdata" */
var Salesitemsdata_Update_Column;
(function (Salesitemsdata_Update_Column) {
    /** column name */
    Salesitemsdata_Update_Column["Brand"] = "brand";
    /** column name */
    Salesitemsdata_Update_Column["BsId"] = "bs_id";
    /** column name */
    Salesitemsdata_Update_Column["Date"] = "date";
    /** column name */
    Salesitemsdata_Update_Column["DeFrom"] = "de_from";
    /** column name */
    Salesitemsdata_Update_Column["Id"] = "id";
    /** column name */
    Salesitemsdata_Update_Column["IncomeMoney"] = "income_money";
    /** column name */
    Salesitemsdata_Update_Column["ItemId"] = "item_id";
    /** column name */
    Salesitemsdata_Update_Column["ItemName"] = "item_name";
    /** column name */
    Salesitemsdata_Update_Column["LastQty"] = "last_qty";
    /** column name */
    Salesitemsdata_Update_Column["LastTotal"] = "last_total";
    /** column name */
    Salesitemsdata_Update_Column["SmallClassId"] = "small_class_id";
    /** column name */
    Salesitemsdata_Update_Column["SmallClassName"] = "small_class_name";
    /** column name */
    Salesitemsdata_Update_Column["Store"] = "store";
})(Salesitemsdata_Update_Column = exports.Salesitemsdata_Update_Column || (exports.Salesitemsdata_Update_Column = {}));
/** unique or primary key constraints on table "scope_nav_sm_categories" */
var Scope_Nav_Sm_Categories_Constraint;
(function (Scope_Nav_Sm_Categories_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Scope_Nav_Sm_Categories_Constraint["ScopeNavSmCategoriesPrimary38"] = "scope_nav_sm_categoriesPRIMARY38";
})(Scope_Nav_Sm_Categories_Constraint = exports.Scope_Nav_Sm_Categories_Constraint || (exports.Scope_Nav_Sm_Categories_Constraint = {}));
/** select columns of table "scope_nav_sm_categories" */
var Scope_Nav_Sm_Categories_Select_Column;
(function (Scope_Nav_Sm_Categories_Select_Column) {
    /** column name */
    Scope_Nav_Sm_Categories_Select_Column["Id"] = "id";
    /** column name */
    Scope_Nav_Sm_Categories_Select_Column["NavSmCategoryId"] = "nav_sm_category_id";
    /** column name */
    Scope_Nav_Sm_Categories_Select_Column["ScopeId"] = "scope_id";
})(Scope_Nav_Sm_Categories_Select_Column = exports.Scope_Nav_Sm_Categories_Select_Column || (exports.Scope_Nav_Sm_Categories_Select_Column = {}));
/** update columns of table "scope_nav_sm_categories" */
var Scope_Nav_Sm_Categories_Update_Column;
(function (Scope_Nav_Sm_Categories_Update_Column) {
    /** column name */
    Scope_Nav_Sm_Categories_Update_Column["Id"] = "id";
    /** column name */
    Scope_Nav_Sm_Categories_Update_Column["NavSmCategoryId"] = "nav_sm_category_id";
    /** column name */
    Scope_Nav_Sm_Categories_Update_Column["ScopeId"] = "scope_id";
})(Scope_Nav_Sm_Categories_Update_Column = exports.Scope_Nav_Sm_Categories_Update_Column || (exports.Scope_Nav_Sm_Categories_Update_Column = {}));
/** unique or primary key constraints on table "scopes" */
var Scopes_Constraint;
(function (Scopes_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Scopes_Constraint["ScopesPrimary39"] = "scopesPRIMARY39";
})(Scopes_Constraint = exports.Scopes_Constraint || (exports.Scopes_Constraint = {}));
/** select columns of table "scopes" */
var Scopes_Select_Column;
(function (Scopes_Select_Column) {
    /** column name */
    Scopes_Select_Column["Id"] = "id";
    /** column name */
    Scopes_Select_Column["Name"] = "name";
    /** column name */
    Scopes_Select_Column["ParentScopeId"] = "parent_scope_id";
})(Scopes_Select_Column = exports.Scopes_Select_Column || (exports.Scopes_Select_Column = {}));
/** update columns of table "scopes" */
var Scopes_Update_Column;
(function (Scopes_Update_Column) {
    /** column name */
    Scopes_Update_Column["Id"] = "id";
    /** column name */
    Scopes_Update_Column["Name"] = "name";
    /** column name */
    Scopes_Update_Column["ParentScopeId"] = "parent_scope_id";
})(Scopes_Update_Column = exports.Scopes_Update_Column || (exports.Scopes_Update_Column = {}));
/** unique or primary key constraints on table "service_entitlement" */
var Service_Entitlement_Constraint;
(function (Service_Entitlement_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Service_Entitlement_Constraint["ServiceEntitlementPkey"] = "service_entitlement_pkey";
})(Service_Entitlement_Constraint = exports.Service_Entitlement_Constraint || (exports.Service_Entitlement_Constraint = {}));
/** select columns of table "service_entitlement" */
var Service_Entitlement_Select_Column;
(function (Service_Entitlement_Select_Column) {
    /** column name */
    Service_Entitlement_Select_Column["Id"] = "id";
    /** column name */
    Service_Entitlement_Select_Column["LeaveTypeId"] = "leave_type_id";
    /** column name */
    Service_Entitlement_Select_Column["MaxDays"] = "max_days";
    /** column name */
    Service_Entitlement_Select_Column["SalaryTypeId"] = "salary_type_id";
    /** column name */
    Service_Entitlement_Select_Column["YearsOfService"] = "years_of_service";
})(Service_Entitlement_Select_Column = exports.Service_Entitlement_Select_Column || (exports.Service_Entitlement_Select_Column = {}));
/** update columns of table "service_entitlement" */
var Service_Entitlement_Update_Column;
(function (Service_Entitlement_Update_Column) {
    /** column name */
    Service_Entitlement_Update_Column["Id"] = "id";
    /** column name */
    Service_Entitlement_Update_Column["LeaveTypeId"] = "leave_type_id";
    /** column name */
    Service_Entitlement_Update_Column["MaxDays"] = "max_days";
    /** column name */
    Service_Entitlement_Update_Column["SalaryTypeId"] = "salary_type_id";
    /** column name */
    Service_Entitlement_Update_Column["YearsOfService"] = "years_of_service";
})(Service_Entitlement_Update_Column = exports.Service_Entitlement_Update_Column || (exports.Service_Entitlement_Update_Column = {}));
/** unique or primary key constraints on table "settledetails" */
var Settledetails_Constraint;
(function (Settledetails_Constraint) {
    /** unique or primary key constraint on columns "pw_id" */
    Settledetails_Constraint["SettledetailsPkey"] = "settledetails_pkey";
})(Settledetails_Constraint = exports.Settledetails_Constraint || (exports.Settledetails_Constraint = {}));
/** select columns of table "settledetails" */
var Settledetails_Select_Column;
(function (Settledetails_Select_Column) {
    /** column name */
    Settledetails_Select_Column["BsId"] = "bs_id";
    /** column name */
    Settledetails_Select_Column["CardNo"] = "card_no";
    /** column name */
    Settledetails_Select_Column["ConsumerCode"] = "consumer_code";
    /** column name */
    Settledetails_Select_Column["ConsumerName"] = "consumer_name";
    /** column name */
    Settledetails_Select_Column["CrmMobile"] = "crm_mobile";
    /** column name */
    Settledetails_Select_Column["Delflg"] = "delflg";
    /** column name */
    Settledetails_Select_Column["IncomeMoney"] = "income_money";
    /** column name */
    Settledetails_Select_Column["ModifyTime"] = "modify_time";
    /** column name */
    Settledetails_Select_Column["NotIncomeMoney"] = "not_income_money";
    /** column name */
    Settledetails_Select_Column["PayMoney"] = "pay_money";
    /** column name */
    Settledetails_Select_Column["PaywayCode"] = "payway_code";
    /** column name */
    Settledetails_Select_Column["PaywayId"] = "payway_id";
    /** column name */
    Settledetails_Select_Column["PaywayName"] = "payway_name";
    /** column name */
    Settledetails_Select_Column["PaywayOutCode"] = "payway_out_code";
    /** column name */
    Settledetails_Select_Column["PwId"] = "pw_id";
    /** column name */
    Settledetails_Select_Column["SettleState"] = "settle_state";
    /** column name */
    Settledetails_Select_Column["TsId"] = "ts_id";
})(Settledetails_Select_Column = exports.Settledetails_Select_Column || (exports.Settledetails_Select_Column = {}));
/** update columns of table "settledetails" */
var Settledetails_Update_Column;
(function (Settledetails_Update_Column) {
    /** column name */
    Settledetails_Update_Column["BsId"] = "bs_id";
    /** column name */
    Settledetails_Update_Column["CardNo"] = "card_no";
    /** column name */
    Settledetails_Update_Column["ConsumerCode"] = "consumer_code";
    /** column name */
    Settledetails_Update_Column["ConsumerName"] = "consumer_name";
    /** column name */
    Settledetails_Update_Column["CrmMobile"] = "crm_mobile";
    /** column name */
    Settledetails_Update_Column["Delflg"] = "delflg";
    /** column name */
    Settledetails_Update_Column["IncomeMoney"] = "income_money";
    /** column name */
    Settledetails_Update_Column["ModifyTime"] = "modify_time";
    /** column name */
    Settledetails_Update_Column["NotIncomeMoney"] = "not_income_money";
    /** column name */
    Settledetails_Update_Column["PayMoney"] = "pay_money";
    /** column name */
    Settledetails_Update_Column["PaywayCode"] = "payway_code";
    /** column name */
    Settledetails_Update_Column["PaywayId"] = "payway_id";
    /** column name */
    Settledetails_Update_Column["PaywayName"] = "payway_name";
    /** column name */
    Settledetails_Update_Column["PaywayOutCode"] = "payway_out_code";
    /** column name */
    Settledetails_Update_Column["PwId"] = "pw_id";
    /** column name */
    Settledetails_Update_Column["SettleState"] = "settle_state";
    /** column name */
    Settledetails_Update_Column["TsId"] = "ts_id";
})(Settledetails_Update_Column = exports.Settledetails_Update_Column || (exports.Settledetails_Update_Column = {}));
/** unique or primary key constraints on table "shift_lists" */
var Shift_Lists_Constraint;
(function (Shift_Lists_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Shift_Lists_Constraint["ShiftListsPrimary41"] = "shift_listsPRIMARY41";
})(Shift_Lists_Constraint = exports.Shift_Lists_Constraint || (exports.Shift_Lists_Constraint = {}));
/** select columns of table "shift_lists" */
var Shift_Lists_Select_Column;
(function (Shift_Lists_Select_Column) {
    /** column name */
    Shift_Lists_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Shift_Lists_Select_Column["CreatedBy"] = "created_by";
    /** column name */
    Shift_Lists_Select_Column["EarlyMinutesAsEarly"] = "early_minutes_as_early";
    /** column name */
    Shift_Lists_Select_Column["EarlyMinutesAsLack"] = "early_minutes_as_lack";
    /** column name */
    Shift_Lists_Select_Column["FlexibleMinutes"] = "flexible_minutes";
    /** column name */
    Shift_Lists_Select_Column["Id"] = "id";
    /** column name */
    Shift_Lists_Select_Column["IsFlexible"] = "is_flexible";
    /** column name */
    Shift_Lists_Select_Column["LateMinutesAsLack"] = "late_minutes_as_lack";
    /** column name */
    Shift_Lists_Select_Column["LateMinutesAsLate"] = "late_minutes_as_late";
    /** column name */
    Shift_Lists_Select_Column["NoNeedOff"] = "no_need_off";
    /** column name */
    Shift_Lists_Select_Column["OffDelayMinutes"] = "off_delay_minutes";
    /** column name */
    Shift_Lists_Select_Column["OffTime"] = "off_time";
    /** column name */
    Shift_Lists_Select_Column["OnAdvanceMinutes"] = "on_advance_minutes";
    /** column name */
    Shift_Lists_Select_Column["OnTime"] = "on_time";
    /** column name */
    Shift_Lists_Select_Column["PunchTimes"] = "punch_times";
    /** column name */
    Shift_Lists_Select_Column["ScheduledLengthDay"] = "scheduled_length_day";
    /** column name */
    Shift_Lists_Select_Column["ScheduledLengthHour"] = "scheduled_length_hour";
    /** column name */
    Shift_Lists_Select_Column["ShiftName"] = "shift_name";
    /** column name */
    Shift_Lists_Select_Column["UpdatedAt"] = "updated_at";
})(Shift_Lists_Select_Column = exports.Shift_Lists_Select_Column || (exports.Shift_Lists_Select_Column = {}));
/** update columns of table "shift_lists" */
var Shift_Lists_Update_Column;
(function (Shift_Lists_Update_Column) {
    /** column name */
    Shift_Lists_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Shift_Lists_Update_Column["CreatedBy"] = "created_by";
    /** column name */
    Shift_Lists_Update_Column["EarlyMinutesAsEarly"] = "early_minutes_as_early";
    /** column name */
    Shift_Lists_Update_Column["EarlyMinutesAsLack"] = "early_minutes_as_lack";
    /** column name */
    Shift_Lists_Update_Column["FlexibleMinutes"] = "flexible_minutes";
    /** column name */
    Shift_Lists_Update_Column["Id"] = "id";
    /** column name */
    Shift_Lists_Update_Column["IsFlexible"] = "is_flexible";
    /** column name */
    Shift_Lists_Update_Column["LateMinutesAsLack"] = "late_minutes_as_lack";
    /** column name */
    Shift_Lists_Update_Column["LateMinutesAsLate"] = "late_minutes_as_late";
    /** column name */
    Shift_Lists_Update_Column["NoNeedOff"] = "no_need_off";
    /** column name */
    Shift_Lists_Update_Column["OffDelayMinutes"] = "off_delay_minutes";
    /** column name */
    Shift_Lists_Update_Column["OffTime"] = "off_time";
    /** column name */
    Shift_Lists_Update_Column["OnAdvanceMinutes"] = "on_advance_minutes";
    /** column name */
    Shift_Lists_Update_Column["OnTime"] = "on_time";
    /** column name */
    Shift_Lists_Update_Column["PunchTimes"] = "punch_times";
    /** column name */
    Shift_Lists_Update_Column["ScheduledLengthDay"] = "scheduled_length_day";
    /** column name */
    Shift_Lists_Update_Column["ScheduledLengthHour"] = "scheduled_length_hour";
    /** column name */
    Shift_Lists_Update_Column["ShiftName"] = "shift_name";
    /** column name */
    Shift_Lists_Update_Column["UpdatedAt"] = "updated_at";
})(Shift_Lists_Update_Column = exports.Shift_Lists_Update_Column || (exports.Shift_Lists_Update_Column = {}));
/** unique or primary key constraints on table "solditems" */
var Solditems_Constraint;
(function (Solditems_Constraint) {
    /** unique or primary key constraint on columns "sc_id" */
    Solditems_Constraint["SolditemsPkey"] = "solditems_pkey";
})(Solditems_Constraint = exports.Solditems_Constraint || (exports.Solditems_Constraint = {}));
/** select columns of table "solditems" */
var Solditems_Select_Column;
(function (Solditems_Select_Column) {
    /** column name */
    Solditems_Select_Column["BigClassCode"] = "big_class_code";
    /** column name */
    Solditems_Select_Column["BigClassId"] = "big_class_id";
    /** column name */
    Solditems_Select_Column["BigClassName"] = "big_class_name";
    /** column name */
    Solditems_Select_Column["BigClassOutCode"] = "big_class_out_code";
    /** column name */
    Solditems_Select_Column["BsId"] = "bs_id";
    /** column name */
    Solditems_Select_Column["CreateTime"] = "create_time";
    /** column name */
    Solditems_Select_Column["Delflg"] = "delflg";
    /** column name */
    Solditems_Select_Column["DeptCode"] = "deptCode";
    /** column name */
    Solditems_Select_Column["DeptId"] = "deptId";
    /** column name */
    Solditems_Select_Column["DeptName"] = "deptName";
    /** column name */
    Solditems_Select_Column["DiscFix"] = "disc_fix";
    /** column name */
    Solditems_Select_Column["DiscFlg"] = "disc_flg";
    /** column name */
    Solditems_Select_Column["DiscMoney"] = "disc_money";
    /** column name */
    Solditems_Select_Column["DiscName"] = "disc_name";
    /** column name */
    Solditems_Select_Column["Id"] = "id";
    /** column name */
    Solditems_Select_Column["IncomeMoney"] = "income_money";
    /** column name */
    Solditems_Select_Column["IsChangePrice"] = "is_change_price";
    /** column name */
    Solditems_Select_Column["ItemAidCode"] = "item_aid_code";
    /** column name */
    Solditems_Select_Column["ItemCode"] = "item_code";
    /** column name */
    Solditems_Select_Column["ItemId"] = "item_id";
    /** column name */
    Solditems_Select_Column["ItemName"] = "item_name";
    /** column name */
    Solditems_Select_Column["ItemType"] = "item_type";
    /** column name */
    Solditems_Select_Column["ItemTypeName"] = "item_type_name";
    /** column name */
    Solditems_Select_Column["LastMakeFee"] = "last_make_fee";
    /** column name */
    Solditems_Select_Column["LastPrice"] = "last_price";
    /** column name */
    Solditems_Select_Column["LastQty"] = "last_qty";
    /** column name */
    Solditems_Select_Column["LastTotal"] = "last_total";
    /** column name */
    Solditems_Select_Column["MemberMoney"] = "member_money";
    /** column name */
    Solditems_Select_Column["MethodId"] = "method_id";
    /** column name */
    Solditems_Select_Column["MethodText"] = "method_text";
    /** column name */
    Solditems_Select_Column["ModifyTime"] = "modify_time";
    /** column name */
    Solditems_Select_Column["NotIncomeMoney"] = "not_income_money";
    /** column name */
    Solditems_Select_Column["OrigPrice"] = "orig_price";
    /** column name */
    Solditems_Select_Column["OrigSubtotal"] = "orig_subtotal";
    /** column name */
    Solditems_Select_Column["PkgFlg"] = "pkg_flg";
    /** column name */
    Solditems_Select_Column["PkgFlgName"] = "pkg_flg_name";
    /** column name */
    Solditems_Select_Column["PkgScId"] = "pkg_sc_id";
    /** column name */
    Solditems_Select_Column["PresentMoney"] = "present_money";
    /** column name */
    Solditems_Select_Column["PromoteMoney"] = "promote_money";
    /** column name */
    Solditems_Select_Column["RzName"] = "rz_name";
    /** column name */
    Solditems_Select_Column["SalePrice"] = "sale_price";
    /** column name */
    Solditems_Select_Column["SalesRevenueTypeId"] = "sales_revenue_type_id";
    /** column name */
    Solditems_Select_Column["ScId"] = "sc_id";
    /** column name */
    Solditems_Select_Column["SettleTime"] = "settle_time";
    /** column name */
    Solditems_Select_Column["SizeCode"] = "size_code";
    /** column name */
    Solditems_Select_Column["SizeId"] = "size_id";
    /** column name */
    Solditems_Select_Column["SizeName"] = "size_name";
    /** column name */
    Solditems_Select_Column["SmallClassCode"] = "small_class_code";
    /** column name */
    Solditems_Select_Column["SmallClassId"] = "small_class_id";
    /** column name */
    Solditems_Select_Column["SmallClassName"] = "small_class_name";
    /** column name */
    Solditems_Select_Column["SmallClassOutCode"] = "small_class_out_code";
    /** column name */
    Solditems_Select_Column["TaxRateDinein"] = "tax_rate_dinein";
    /** column name */
    Solditems_Select_Column["TaxRateTakeout"] = "tax_rate_takeout";
    /** column name */
    Solditems_Select_Column["TaxRateTakesale"] = "tax_rate_takesale";
    /** column name */
    Solditems_Select_Column["UnitName"] = "unit_name";
    /** column name */
    Solditems_Select_Column["WipeMoney"] = "wipe_money";
})(Solditems_Select_Column = exports.Solditems_Select_Column || (exports.Solditems_Select_Column = {}));
/** select columns of table "solditems_summary" */
var Solditems_Summary_Select_Column;
(function (Solditems_Summary_Select_Column) {
    /** column name */
    Solditems_Summary_Select_Column["IncomeMoney"] = "income_money";
    /** column name */
    Solditems_Summary_Select_Column["ItemId"] = "item_id";
    /** column name */
    Solditems_Summary_Select_Column["LastPrice"] = "last_price";
    /** column name */
    Solditems_Summary_Select_Column["LastQty"] = "last_qty";
})(Solditems_Summary_Select_Column = exports.Solditems_Summary_Select_Column || (exports.Solditems_Summary_Select_Column = {}));
/** update columns of table "solditems" */
var Solditems_Update_Column;
(function (Solditems_Update_Column) {
    /** column name */
    Solditems_Update_Column["BigClassCode"] = "big_class_code";
    /** column name */
    Solditems_Update_Column["BigClassId"] = "big_class_id";
    /** column name */
    Solditems_Update_Column["BigClassName"] = "big_class_name";
    /** column name */
    Solditems_Update_Column["BigClassOutCode"] = "big_class_out_code";
    /** column name */
    Solditems_Update_Column["BsId"] = "bs_id";
    /** column name */
    Solditems_Update_Column["CreateTime"] = "create_time";
    /** column name */
    Solditems_Update_Column["Delflg"] = "delflg";
    /** column name */
    Solditems_Update_Column["DeptCode"] = "deptCode";
    /** column name */
    Solditems_Update_Column["DeptId"] = "deptId";
    /** column name */
    Solditems_Update_Column["DeptName"] = "deptName";
    /** column name */
    Solditems_Update_Column["DiscFix"] = "disc_fix";
    /** column name */
    Solditems_Update_Column["DiscFlg"] = "disc_flg";
    /** column name */
    Solditems_Update_Column["DiscMoney"] = "disc_money";
    /** column name */
    Solditems_Update_Column["DiscName"] = "disc_name";
    /** column name */
    Solditems_Update_Column["Id"] = "id";
    /** column name */
    Solditems_Update_Column["IncomeMoney"] = "income_money";
    /** column name */
    Solditems_Update_Column["IsChangePrice"] = "is_change_price";
    /** column name */
    Solditems_Update_Column["ItemAidCode"] = "item_aid_code";
    /** column name */
    Solditems_Update_Column["ItemCode"] = "item_code";
    /** column name */
    Solditems_Update_Column["ItemId"] = "item_id";
    /** column name */
    Solditems_Update_Column["ItemName"] = "item_name";
    /** column name */
    Solditems_Update_Column["ItemType"] = "item_type";
    /** column name */
    Solditems_Update_Column["ItemTypeName"] = "item_type_name";
    /** column name */
    Solditems_Update_Column["LastMakeFee"] = "last_make_fee";
    /** column name */
    Solditems_Update_Column["LastPrice"] = "last_price";
    /** column name */
    Solditems_Update_Column["LastQty"] = "last_qty";
    /** column name */
    Solditems_Update_Column["LastTotal"] = "last_total";
    /** column name */
    Solditems_Update_Column["MemberMoney"] = "member_money";
    /** column name */
    Solditems_Update_Column["MethodId"] = "method_id";
    /** column name */
    Solditems_Update_Column["MethodText"] = "method_text";
    /** column name */
    Solditems_Update_Column["ModifyTime"] = "modify_time";
    /** column name */
    Solditems_Update_Column["NotIncomeMoney"] = "not_income_money";
    /** column name */
    Solditems_Update_Column["OrigPrice"] = "orig_price";
    /** column name */
    Solditems_Update_Column["OrigSubtotal"] = "orig_subtotal";
    /** column name */
    Solditems_Update_Column["PkgFlg"] = "pkg_flg";
    /** column name */
    Solditems_Update_Column["PkgFlgName"] = "pkg_flg_name";
    /** column name */
    Solditems_Update_Column["PkgScId"] = "pkg_sc_id";
    /** column name */
    Solditems_Update_Column["PresentMoney"] = "present_money";
    /** column name */
    Solditems_Update_Column["PromoteMoney"] = "promote_money";
    /** column name */
    Solditems_Update_Column["RzName"] = "rz_name";
    /** column name */
    Solditems_Update_Column["SalePrice"] = "sale_price";
    /** column name */
    Solditems_Update_Column["SalesRevenueTypeId"] = "sales_revenue_type_id";
    /** column name */
    Solditems_Update_Column["ScId"] = "sc_id";
    /** column name */
    Solditems_Update_Column["SettleTime"] = "settle_time";
    /** column name */
    Solditems_Update_Column["SizeCode"] = "size_code";
    /** column name */
    Solditems_Update_Column["SizeId"] = "size_id";
    /** column name */
    Solditems_Update_Column["SizeName"] = "size_name";
    /** column name */
    Solditems_Update_Column["SmallClassCode"] = "small_class_code";
    /** column name */
    Solditems_Update_Column["SmallClassId"] = "small_class_id";
    /** column name */
    Solditems_Update_Column["SmallClassName"] = "small_class_name";
    /** column name */
    Solditems_Update_Column["SmallClassOutCode"] = "small_class_out_code";
    /** column name */
    Solditems_Update_Column["TaxRateDinein"] = "tax_rate_dinein";
    /** column name */
    Solditems_Update_Column["TaxRateTakeout"] = "tax_rate_takeout";
    /** column name */
    Solditems_Update_Column["TaxRateTakesale"] = "tax_rate_takesale";
    /** column name */
    Solditems_Update_Column["UnitName"] = "unit_name";
    /** column name */
    Solditems_Update_Column["WipeMoney"] = "wipe_money";
})(Solditems_Update_Column = exports.Solditems_Update_Column || (exports.Solditems_Update_Column = {}));
/** unique or primary key constraints on table "store_employee" */
var Store_Employee_Constraint;
(function (Store_Employee_Constraint) {
    /** unique or primary key constraint on columns "employee_id", "store_id" */
    Store_Employee_Constraint["StoreEmployeePrimary43"] = "store_employeePRIMARY43";
})(Store_Employee_Constraint = exports.Store_Employee_Constraint || (exports.Store_Employee_Constraint = {}));
/** select columns of table "store_employee" */
var Store_Employee_Select_Column;
(function (Store_Employee_Select_Column) {
    /** column name */
    Store_Employee_Select_Column["EmployeeId"] = "employee_id";
    /** column name */
    Store_Employee_Select_Column["StoreId"] = "store_id";
})(Store_Employee_Select_Column = exports.Store_Employee_Select_Column || (exports.Store_Employee_Select_Column = {}));
/** update columns of table "store_employee" */
var Store_Employee_Update_Column;
(function (Store_Employee_Update_Column) {
    /** column name */
    Store_Employee_Update_Column["EmployeeId"] = "employee_id";
    /** column name */
    Store_Employee_Update_Column["StoreId"] = "store_id";
})(Store_Employee_Update_Column = exports.Store_Employee_Update_Column || (exports.Store_Employee_Update_Column = {}));
/** unique or primary key constraints on table "stores" */
var Stores_Constraint;
(function (Stores_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Stores_Constraint["StoresPrimary46"] = "storesPRIMARY46";
})(Stores_Constraint = exports.Stores_Constraint || (exports.Stores_Constraint = {}));
/** select columns of table "stores" */
var Stores_Select_Column;
(function (Stores_Select_Column) {
    /** column name */
    Stores_Select_Column["BrandId"] = "brand_id";
    /** column name */
    Stores_Select_Column["DepartmentId"] = "department_id";
    /** column name */
    Stores_Select_Column["Id"] = "id";
    /** column name */
    Stores_Select_Column["IsOperation"] = "is_operation";
    /** column name */
    Stores_Select_Column["Name"] = "name";
    /** column name */
    Stores_Select_Column["SalaryAccount"] = "salary_account";
    /** column name */
    Stores_Select_Column["SeatCount"] = "seat_count";
    /** column name */
    Stores_Select_Column["Status"] = "status";
    /** column name */
    Stores_Select_Column["Store"] = "store";
    /** column name */
    Stores_Select_Column["SupplyShopId"] = "supply_shop_id";
    /** column name */
    Stores_Select_Column["TableCount"] = "table_count";
})(Stores_Select_Column = exports.Stores_Select_Column || (exports.Stores_Select_Column = {}));
/** update columns of table "stores" */
var Stores_Update_Column;
(function (Stores_Update_Column) {
    /** column name */
    Stores_Update_Column["BrandId"] = "brand_id";
    /** column name */
    Stores_Update_Column["DepartmentId"] = "department_id";
    /** column name */
    Stores_Update_Column["Id"] = "id";
    /** column name */
    Stores_Update_Column["IsOperation"] = "is_operation";
    /** column name */
    Stores_Update_Column["Name"] = "name";
    /** column name */
    Stores_Update_Column["SalaryAccount"] = "salary_account";
    /** column name */
    Stores_Update_Column["SeatCount"] = "seat_count";
    /** column name */
    Stores_Update_Column["Status"] = "status";
    /** column name */
    Stores_Update_Column["Store"] = "store";
    /** column name */
    Stores_Update_Column["SupplyShopId"] = "supply_shop_id";
    /** column name */
    Stores_Update_Column["TableCount"] = "table_count";
})(Stores_Update_Column = exports.Stores_Update_Column || (exports.Stores_Update_Column = {}));
/** unique or primary key constraints on table "suppliers" */
var Suppliers_Constraint;
(function (Suppliers_Constraint) {
    /** unique or primary key constraint on columns "supplierId" */
    Suppliers_Constraint["SuppliersPrimary48"] = "suppliersPRIMARY48";
})(Suppliers_Constraint = exports.Suppliers_Constraint || (exports.Suppliers_Constraint = {}));
/** select columns of table "suppliers" */
var Suppliers_Select_Column;
(function (Suppliers_Select_Column) {
    /** column name */
    Suppliers_Select_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Suppliers_Select_Column["SupplierCode"] = "supplierCode";
    /** column name */
    Suppliers_Select_Column["SupplierId"] = "supplierId";
    /** column name */
    Suppliers_Select_Column["SupplierName"] = "supplierName";
    /** column name */
    Suppliers_Select_Column["SupplierState"] = "supplierState";
    /** column name */
    Suppliers_Select_Column["SupplierTypeId"] = "supplierTypeID";
})(Suppliers_Select_Column = exports.Suppliers_Select_Column || (exports.Suppliers_Select_Column = {}));
/** update columns of table "suppliers" */
var Suppliers_Update_Column;
(function (Suppliers_Update_Column) {
    /** column name */
    Suppliers_Update_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Suppliers_Update_Column["SupplierCode"] = "supplierCode";
    /** column name */
    Suppliers_Update_Column["SupplierId"] = "supplierId";
    /** column name */
    Suppliers_Update_Column["SupplierName"] = "supplierName";
    /** column name */
    Suppliers_Update_Column["SupplierState"] = "supplierState";
    /** column name */
    Suppliers_Update_Column["SupplierTypeId"] = "supplierTypeID";
})(Suppliers_Update_Column = exports.Suppliers_Update_Column || (exports.Suppliers_Update_Column = {}));
/** unique or primary key constraints on table "supplyitems" */
var Supplyitems_Constraint;
(function (Supplyitems_Constraint) {
    /** unique or primary key constraint on columns "itemId" */
    Supplyitems_Constraint["SupplyitemsPrimary49"] = "supplyitemsPRIMARY49";
})(Supplyitems_Constraint = exports.Supplyitems_Constraint || (exports.Supplyitems_Constraint = {}));
/** select columns of table "supplyitems" */
var Supplyitems_Select_Column;
(function (Supplyitems_Select_Column) {
    /** column name */
    Supplyitems_Select_Column["Abc"] = "abc";
    /** column name */
    Supplyitems_Select_Column["AssistNo"] = "assistNo";
    /** column name */
    Supplyitems_Select_Column["AssistUnitFlag"] = "assistUnitFlag";
    /** column name */
    Supplyitems_Select_Column["AssistUnitRatio"] = "assistUnitRatio";
    /** column name */
    Supplyitems_Select_Column["CostType"] = "costType";
    /** column name */
    Supplyitems_Select_Column["CreateDate"] = "createDate";
    /** column name */
    Supplyitems_Select_Column["EnableFlag"] = "enableFlag";
    /** column name */
    Supplyitems_Select_Column["ExpDays"] = "expDays";
    /** column name */
    Supplyitems_Select_Column["ExpFlag"] = "expFlag";
    /** column name */
    Supplyitems_Select_Column["ItemBigTypeCode"] = "itemBigTypeCode";
    /** column name */
    Supplyitems_Select_Column["ItemBigTypeId"] = "itemBigTypeID";
    /** column name */
    Supplyitems_Select_Column["ItemBigTypeName"] = "itemBigTypeName";
    /** column name */
    Supplyitems_Select_Column["ItemCode"] = "itemCode";
    /** column name */
    Supplyitems_Select_Column["ItemId"] = "itemId";
    /** column name */
    Supplyitems_Select_Column["ItemImage"] = "itemImage";
    /** column name */
    Supplyitems_Select_Column["ItemName"] = "itemName";
    /** column name */
    Supplyitems_Select_Column["ItemTypeCode"] = "itemTypeCode";
    /** column name */
    Supplyitems_Select_Column["ItemTypeId"] = "itemTypeID";
    /** column name */
    Supplyitems_Select_Column["ItemTypeName"] = "itemTypeName";
    /** column name */
    Supplyitems_Select_Column["MainUnit"] = "mainUnit";
    /** column name */
    Supplyitems_Select_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Supplyitems_Select_Column["MrpExcuteType"] = "mrpExcuteType";
    /** column name */
    Supplyitems_Select_Column["NetRate"] = "netRate";
    /** column name */
    Supplyitems_Select_Column["OriginPlace"] = "origin_place";
    /** column name */
    Supplyitems_Select_Column["PackFlag"] = "packFlag";
    /** column name */
    Supplyitems_Select_Column["ReferCost"] = "referCost";
    /** column name */
    Supplyitems_Select_Column["ReferPrice"] = "referPrice";
    /** column name */
    Supplyitems_Select_Column["ReportUnit"] = "reportUnit";
    /** column name */
    Supplyitems_Select_Column["ReportUnitRatio"] = "reportUnitRatio";
    /** column name */
    Supplyitems_Select_Column["Sign"] = "sign";
    /** column name */
    Supplyitems_Select_Column["Spec"] = "spec";
    /** column name */
    Supplyitems_Select_Column["StoreAgeFlag"] = "storeAgeFlag";
})(Supplyitems_Select_Column = exports.Supplyitems_Select_Column || (exports.Supplyitems_Select_Column = {}));
/** update columns of table "supplyitems" */
var Supplyitems_Update_Column;
(function (Supplyitems_Update_Column) {
    /** column name */
    Supplyitems_Update_Column["Abc"] = "abc";
    /** column name */
    Supplyitems_Update_Column["AssistNo"] = "assistNo";
    /** column name */
    Supplyitems_Update_Column["AssistUnitFlag"] = "assistUnitFlag";
    /** column name */
    Supplyitems_Update_Column["AssistUnitRatio"] = "assistUnitRatio";
    /** column name */
    Supplyitems_Update_Column["CostType"] = "costType";
    /** column name */
    Supplyitems_Update_Column["CreateDate"] = "createDate";
    /** column name */
    Supplyitems_Update_Column["EnableFlag"] = "enableFlag";
    /** column name */
    Supplyitems_Update_Column["ExpDays"] = "expDays";
    /** column name */
    Supplyitems_Update_Column["ExpFlag"] = "expFlag";
    /** column name */
    Supplyitems_Update_Column["ItemBigTypeCode"] = "itemBigTypeCode";
    /** column name */
    Supplyitems_Update_Column["ItemBigTypeId"] = "itemBigTypeID";
    /** column name */
    Supplyitems_Update_Column["ItemBigTypeName"] = "itemBigTypeName";
    /** column name */
    Supplyitems_Update_Column["ItemCode"] = "itemCode";
    /** column name */
    Supplyitems_Update_Column["ItemId"] = "itemId";
    /** column name */
    Supplyitems_Update_Column["ItemImage"] = "itemImage";
    /** column name */
    Supplyitems_Update_Column["ItemName"] = "itemName";
    /** column name */
    Supplyitems_Update_Column["ItemTypeCode"] = "itemTypeCode";
    /** column name */
    Supplyitems_Update_Column["ItemTypeId"] = "itemTypeID";
    /** column name */
    Supplyitems_Update_Column["ItemTypeName"] = "itemTypeName";
    /** column name */
    Supplyitems_Update_Column["MainUnit"] = "mainUnit";
    /** column name */
    Supplyitems_Update_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Supplyitems_Update_Column["MrpExcuteType"] = "mrpExcuteType";
    /** column name */
    Supplyitems_Update_Column["NetRate"] = "netRate";
    /** column name */
    Supplyitems_Update_Column["OriginPlace"] = "origin_place";
    /** column name */
    Supplyitems_Update_Column["PackFlag"] = "packFlag";
    /** column name */
    Supplyitems_Update_Column["ReferCost"] = "referCost";
    /** column name */
    Supplyitems_Update_Column["ReferPrice"] = "referPrice";
    /** column name */
    Supplyitems_Update_Column["ReportUnit"] = "reportUnit";
    /** column name */
    Supplyitems_Update_Column["ReportUnitRatio"] = "reportUnitRatio";
    /** column name */
    Supplyitems_Update_Column["Sign"] = "sign";
    /** column name */
    Supplyitems_Update_Column["Spec"] = "spec";
    /** column name */
    Supplyitems_Update_Column["StoreAgeFlag"] = "storeAgeFlag";
})(Supplyitems_Update_Column = exports.Supplyitems_Update_Column || (exports.Supplyitems_Update_Column = {}));
/** unique or primary key constraints on table "supplyitemtypes" */
var Supplyitemtypes_Constraint;
(function (Supplyitemtypes_Constraint) {
    /** unique or primary key constraint on columns "itemTypeId" */
    Supplyitemtypes_Constraint["SupplyitemtypesPkey"] = "supplyitemtypes_pkey";
})(Supplyitemtypes_Constraint = exports.Supplyitemtypes_Constraint || (exports.Supplyitemtypes_Constraint = {}));
/** select columns of table "supplyitemtypes" */
var Supplyitemtypes_Select_Column;
(function (Supplyitemtypes_Select_Column) {
    /** column name */
    Supplyitemtypes_Select_Column["ItemTypeCode"] = "itemTypeCode";
    /** column name */
    Supplyitemtypes_Select_Column["ItemTypeId"] = "itemTypeId";
    /** column name */
    Supplyitemtypes_Select_Column["ItemTypeName"] = "itemTypeName";
    /** column name */
    Supplyitemtypes_Select_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Supplyitemtypes_Select_Column["ParentTypeId"] = "parentTypeID";
})(Supplyitemtypes_Select_Column = exports.Supplyitemtypes_Select_Column || (exports.Supplyitemtypes_Select_Column = {}));
/** update columns of table "supplyitemtypes" */
var Supplyitemtypes_Update_Column;
(function (Supplyitemtypes_Update_Column) {
    /** column name */
    Supplyitemtypes_Update_Column["ItemTypeCode"] = "itemTypeCode";
    /** column name */
    Supplyitemtypes_Update_Column["ItemTypeId"] = "itemTypeId";
    /** column name */
    Supplyitemtypes_Update_Column["ItemTypeName"] = "itemTypeName";
    /** column name */
    Supplyitemtypes_Update_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Supplyitemtypes_Update_Column["ParentTypeId"] = "parentTypeID";
})(Supplyitemtypes_Update_Column = exports.Supplyitemtypes_Update_Column || (exports.Supplyitemtypes_Update_Column = {}));
/** unique or primary key constraints on table "supplyitemunits" */
var Supplyitemunits_Constraint;
(function (Supplyitemunits_Constraint) {
    /** unique or primary key constraint on columns "id" */
    Supplyitemunits_Constraint["SupplyitemunitsPrimary51"] = "supplyitemunitsPRIMARY51";
})(Supplyitemunits_Constraint = exports.Supplyitemunits_Constraint || (exports.Supplyitemunits_Constraint = {}));
/** select columns of table "supplyitemunits" */
var Supplyitemunits_Select_Column;
(function (Supplyitemunits_Select_Column) {
    /** column name */
    Supplyitemunits_Select_Column["UnitRation"] = "UnitRation";
    /** column name */
    Supplyitemunits_Select_Column["CheckFlag"] = "checkFlag";
    /** column name */
    Supplyitemunits_Select_Column["EnableFlag"] = "enableFlag";
    /** column name */
    Supplyitemunits_Select_Column["Id"] = "id";
    /** column name */
    Supplyitemunits_Select_Column["ItemId"] = "itemId";
    /** column name */
    Supplyitemunits_Select_Column["ItemUnitId"] = "itemUnitID";
    /** column name */
    Supplyitemunits_Select_Column["ItemUnitName"] = "itemUnitName";
    /** column name */
    Supplyitemunits_Select_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Supplyitemunits_Select_Column["PickFlag"] = "pickFlag";
    /** column name */
    Supplyitemunits_Select_Column["ReportFlag"] = "reportFlag";
    /** column name */
    Supplyitemunits_Select_Column["SendFlag"] = "sendFlag";
    /** column name */
    Supplyitemunits_Select_Column["Uid"] = "uid";
})(Supplyitemunits_Select_Column = exports.Supplyitemunits_Select_Column || (exports.Supplyitemunits_Select_Column = {}));
/** update columns of table "supplyitemunits" */
var Supplyitemunits_Update_Column;
(function (Supplyitemunits_Update_Column) {
    /** column name */
    Supplyitemunits_Update_Column["UnitRation"] = "UnitRation";
    /** column name */
    Supplyitemunits_Update_Column["CheckFlag"] = "checkFlag";
    /** column name */
    Supplyitemunits_Update_Column["EnableFlag"] = "enableFlag";
    /** column name */
    Supplyitemunits_Update_Column["Id"] = "id";
    /** column name */
    Supplyitemunits_Update_Column["ItemId"] = "itemId";
    /** column name */
    Supplyitemunits_Update_Column["ItemUnitId"] = "itemUnitID";
    /** column name */
    Supplyitemunits_Update_Column["ItemUnitName"] = "itemUnitName";
    /** column name */
    Supplyitemunits_Update_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Supplyitemunits_Update_Column["PickFlag"] = "pickFlag";
    /** column name */
    Supplyitemunits_Update_Column["ReportFlag"] = "reportFlag";
    /** column name */
    Supplyitemunits_Update_Column["SendFlag"] = "sendFlag";
    /** column name */
    Supplyitemunits_Update_Column["Uid"] = "uid";
})(Supplyitemunits_Update_Column = exports.Supplyitemunits_Update_Column || (exports.Supplyitemunits_Update_Column = {}));
/** unique or primary key constraints on table "supplyrdc" */
var Supplyrdc_Constraint;
(function (Supplyrdc_Constraint) {
    /** unique or primary key constraint on columns "rdcId" */
    Supplyrdc_Constraint["SupplyrdcPrimary52"] = "supplyrdcPRIMARY52";
})(Supplyrdc_Constraint = exports.Supplyrdc_Constraint || (exports.Supplyrdc_Constraint = {}));
/** select columns of table "supplyrdc" */
var Supplyrdc_Select_Column;
(function (Supplyrdc_Select_Column) {
    /** column name */
    Supplyrdc_Select_Column["EnableFlag"] = "enableFlag";
    /** column name */
    Supplyrdc_Select_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Supplyrdc_Select_Column["Parentid"] = "parentid";
    /** column name */
    Supplyrdc_Select_Column["RdcCode"] = "rdcCode";
    /** column name */
    Supplyrdc_Select_Column["RdcId"] = "rdcId";
    /** column name */
    Supplyrdc_Select_Column["RdcName"] = "rdcName";
})(Supplyrdc_Select_Column = exports.Supplyrdc_Select_Column || (exports.Supplyrdc_Select_Column = {}));
/** update columns of table "supplyrdc" */
var Supplyrdc_Update_Column;
(function (Supplyrdc_Update_Column) {
    /** column name */
    Supplyrdc_Update_Column["EnableFlag"] = "enableFlag";
    /** column name */
    Supplyrdc_Update_Column["ModifyDate"] = "modifyDate";
    /** column name */
    Supplyrdc_Update_Column["Parentid"] = "parentid";
    /** column name */
    Supplyrdc_Update_Column["RdcCode"] = "rdcCode";
    /** column name */
    Supplyrdc_Update_Column["RdcId"] = "rdcId";
    /** column name */
    Supplyrdc_Update_Column["RdcName"] = "rdcName";
})(Supplyrdc_Update_Column = exports.Supplyrdc_Update_Column || (exports.Supplyrdc_Update_Column = {}));
/** select columns of table "view_daily_items_sold" */
var View_Daily_Items_Sold_Select_Column;
(function (View_Daily_Items_Sold_Select_Column) {
    /** column name */
    View_Daily_Items_Sold_Select_Column["ItemId"] = "item_id";
    /** column name */
    View_Daily_Items_Sold_Select_Column["SettleBizDate"] = "settle_biz_date";
    /** column name */
    View_Daily_Items_Sold_Select_Column["ShopId"] = "shop_id";
    /** column name */
    View_Daily_Items_Sold_Select_Column["TotalIncomeMoney"] = "total_income_money";
    /** column name */
    View_Daily_Items_Sold_Select_Column["TotalLastTotal"] = "total_last_total";
    /** column name */
    View_Daily_Items_Sold_Select_Column["TotalQty"] = "total_qty";
})(View_Daily_Items_Sold_Select_Column = exports.View_Daily_Items_Sold_Select_Column || (exports.View_Daily_Items_Sold_Select_Column = {}));
/** select columns of table "view_monthly_salary" */
var View_Monthly_Salary_Select_Column;
(function (View_Monthly_Salary_Select_Column) {
    /** column name */
    View_Monthly_Salary_Select_Column["AttendanceDepartment"] = "attendance_department";
    /** column name */
    View_Monthly_Salary_Select_Column["BasicSalary"] = "basic_salary";
    /** column name */
    View_Monthly_Salary_Select_Column["BasicSalaryBase"] = "basic_salary_base";
    /** column name */
    View_Monthly_Salary_Select_Column["BasicSalaryMonthly"] = "basic_salary_monthly";
    /** column name */
    View_Monthly_Salary_Select_Column["EmployeeId"] = "employee_id";
    /** column name */
    View_Monthly_Salary_Select_Column["GrossSalary"] = "gross_salary";
    /** column name */
    View_Monthly_Salary_Select_Column["InsuranceSubsidy"] = "insurance_subsidy";
    /** column name */
    View_Monthly_Salary_Select_Column["Month"] = "month";
    /** column name */
    View_Monthly_Salary_Select_Column["OvertimePay"] = "overtime_pay";
    /** column name */
    View_Monthly_Salary_Select_Column["PositionPay"] = "position_pay";
    /** column name */
    View_Monthly_Salary_Select_Column["SalaryType"] = "salary_type";
    /** column name */
    View_Monthly_Salary_Select_Column["TotalLengthDay"] = "total_length_day";
    /** column name */
    View_Monthly_Salary_Select_Column["TotalLengthHour"] = "total_length_hour";
    /** column name */
    View_Monthly_Salary_Select_Column["WorkAge"] = "work_age";
    /** column name */
    View_Monthly_Salary_Select_Column["WorkAgeBonus"] = "work_age_bonus";
    /** column name */
    View_Monthly_Salary_Select_Column["WorkAgeType"] = "work_age_type";
})(View_Monthly_Salary_Select_Column = exports.View_Monthly_Salary_Select_Column || (exports.View_Monthly_Salary_Select_Column = {}));
/** select columns of table "view_solditems" */
var View_Solditems_Select_Column;
(function (View_Solditems_Select_Column) {
    /** column name */
    View_Solditems_Select_Column["IncomeMoney"] = "income_money";
    /** column name */
    View_Solditems_Select_Column["ItemId"] = "item_id";
    /** column name */
    View_Solditems_Select_Column["LastPrice"] = "last_price";
    /** column name */
    View_Solditems_Select_Column["LastQty"] = "last_qty";
    /** column name */
    View_Solditems_Select_Column["SettleDate"] = "settle_date";
    /** column name */
    View_Solditems_Select_Column["ShopId"] = "shop_id";
})(View_Solditems_Select_Column = exports.View_Solditems_Select_Column || (exports.View_Solditems_Select_Column = {}));
exports.DeleteAttendanceGroupLeadersDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteAttendanceGroupLeaders' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: {
                                kind: 'Name',
                                value: 'attendance_group_leaders_bool_exp'
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_attendance_group_leaders' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'attendance_group_id' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.CreateAttendanceGroupLeadersDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateAttendanceGroupLeaders' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'objects' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: {
                                        kind: 'Name',
                                        value: 'attendance_group_leaders_insert_input'
                                    }
                                }
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_attendance_group_leaders' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'objects' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'attendance_group_id' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.UpdateAttendanceLocationsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'UpdateAttendanceLocations' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'updates' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: { kind: 'Name', value: 'attendance_locations_updates' }
                                }
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'update_attendance_locations_many' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'updates' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'updates' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.CreateAttendanceLocationsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateAttendanceLocations' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'objects' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: {
                                        kind: 'Name',
                                        value: 'attendance_locations_insert_input'
                                    }
                                }
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_attendance_locations' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'objects' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteAttendanceLocationDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteAttendanceLocation' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_attendance_locations_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteAttendanceGroupSubLeadersDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteAttendanceGroupSubLeaders' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: {
                                kind: 'Name',
                                value: 'attendance_group_subleaders_bool_exp'
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_attendance_group_subleaders' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'attendance_group_id' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.CreateAttendanceGroupSubLeadersDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateAttendanceGroupSubLeaders' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'objects' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: {
                                        kind: 'Name',
                                        value: 'attendance_group_subleaders_insert_input'
                                    }
                                }
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_attendance_group_subleaders' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'objects' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'attendance_group_id' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteAttendanchGroupByIdDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteAttendanchGroupById' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_attendance_groups_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.CreateAttendanchGroupDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateAttendanchGroup' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'objects' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: {
                                        kind: 'Name',
                                        value: 'attendance_groups_insert_input'
                                    }
                                }
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_attendance_groups' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'objects' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.UpdateAttendanceGroupDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'UpdateAttendanceGroup' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: '_set' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'attendance_groups_set_input' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'update_attendance_groups_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'pk_columns' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'id' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'id' }
                                            }
                                        },
                                    ]
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: '_set' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: '_set' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteAttendanceGroupShiftsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteAttendanceGroupShifts' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'attendance_group_shifts_bool_exp' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_attendance_group_shifts' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'attendance_group_id' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.CreateAttendanceGroupShiftsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateAttendanceGroupShifts' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'objects' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: {
                                        kind: 'Name',
                                        value: 'attendance_group_shifts_insert_input'
                                    }
                                }
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_attendance_group_shifts' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'objects' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'attendance_group_id' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteAttendanceDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteAttendance' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'attendance_bool_exp' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_attendance' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.CreateAttendanceDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateAttendance' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'objects' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: { kind: 'Name', value: 'attendance_insert_input' }
                                }
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_attendance' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'objects' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.UpdateAttendanceDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'UpdateAttendance' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'updates' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: { kind: 'Name', value: 'attendance_updates' }
                                }
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'update_attendance_many' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'updates' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'updates' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.UpdateAttendanceByIdDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'UpdateAttendanceById' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: '_set' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'attendance_set_input' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'update_attendance_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'pk_columns' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'id' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'id' }
                                            }
                                        },
                                    ]
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: '_set' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: '_set' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.InsertBrandsEmployeesOneDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'InsertBrandsEmployeesOne' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'brand_id' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'employee_id' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_brands_employees_one' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'object' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'brand_id' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'brand_id' }
                                            }
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'employee_id' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'employee_id' }
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'brand_id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'employee_id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteBrandsEmployeesByPkDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteBrandsEmployeesByPk' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'brand_id' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'employee_id' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_brands_employees_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'brand_id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'brand_id' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'employee_id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'employee_id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'brand_id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'employee_id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.UpdateDepartmentDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'UpdateDepartment' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: '_set' } },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'departments_set_input' }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'departments_bool_exp' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'update_departments' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: '_set' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: '_set' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.InsertDepartmentsEmployeesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'InsertDepartmentsEmployees' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'employee_id' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'department_id' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_departments_employees' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'department_id' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'department_id' }
                                            }
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'employee_id' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'employee_id' }
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'avatar' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteDepartmentsEmployeesByPkDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteDepartmentsEmployeesByPk' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'department_id' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'employee_id' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_departments_employees_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'department_id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'department_id' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'employee_id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'employee_id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'department_id' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'employee_id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.CreateMonthlySalaryDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateMonthlySalary' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'object' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'monthlysalary_insert_input' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_monthlysalary_one' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'object' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'object' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.UpdateEmployeeMonthlySalaryDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'UpdateEmployeeMonthlySalary' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: '_set' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'monthlysalary_set_input' }
                        }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'update_monthlysalary_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'pk_columns' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'id' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'id' }
                                            }
                                        },
                                    ]
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: '_set' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: '_set' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.CreateEmployeesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateEmployees' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'mobile' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'hire_date' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'department_id' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'status' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'smallint' }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'manager_id' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_employees' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'id' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'id' }
                                            }
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'name' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'name' }
                                            }
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'mobile' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'mobile' }
                                            }
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'hire_date' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'hire_date' }
                                            }
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'department_id' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'department_id' }
                                            }
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'status' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'status' }
                                            }
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'manager_id' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'manager_id' }
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'mobile' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.UpdateEmployeeDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'UpdateEmployee' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: '_set' } },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'employees_set_input' }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'employees_bool_exp' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'update_employees' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: '_set' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: '_set' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteEmployeeDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteEmployee' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'employees_bool_exp' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_employees' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteEmployeeAttachmentDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteEmployeeAttachment' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'employee_attachments_bool_exp' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_employee_attachments' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteRoleDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteRole' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'roles_bool_exp' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_roles' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.CreateRoleDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateRole' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'objects' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: { kind: 'Name', value: 'roles_insert_input' }
                                }
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_roles' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'objects' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.UpdateRoleDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'UpdateRole' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'roles_bool_exp' }
                        }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: '_set' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'roles_set_input' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'update_roles' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: '_set' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: '_set' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.CreateEmployeesRoleDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateEmployeesRole' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'objects' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: { kind: 'Name', value: 'employees_roles_insert_input' }
                                }
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_employees_roles' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'objects' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee_id' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'role_id' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteEmployeesRoleDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteEmployeesRole' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'employees_roles_bool_exp' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_employees_roles' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee_id' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'role_id' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteRoleNavDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteRoleNav' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'role_nav_sm_categories_bool_exp' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_role_nav_sm_categories' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'role_id' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.CreateRoleNavDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateRoleNav' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'objects' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: {
                                        kind: 'Name',
                                        value: 'role_nav_sm_categories_insert_input'
                                    }
                                }
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_role_nav_sm_categories' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'objects' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'role_id' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.InsertServiceEntitlementOneDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'InsertServiceEntitlementOne' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'object' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'service_entitlement_insert_input' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_service_entitlement_one' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'object' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'object' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.CreateShiftDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateShift' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'object' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'shift_lists_insert_input' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_shift_lists_one' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'object' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'object' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.UpdateShiftByIdDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'UpdateShiftById' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: '_set' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'shift_lists_set_input' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'update_shift_lists_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'pk_columns' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'id' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'id' }
                                            }
                                        },
                                    ]
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: '_set' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: '_set' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteShiftDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteShift' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_shift_lists_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DeleteStoreEmployeeDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'DeleteStoreEmployee' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'store_employee_bool_exp' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'delete_store_employee' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'store_id' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.CreateStoreEmployeeDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateStoreEmployee' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'objects' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: { kind: 'Name', value: 'store_employee_insert_input' }
                                }
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_store_employee' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'objects' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee_id' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'store_id' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.InsertStoreEmployeeDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'InsertStoreEmployee' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'objects' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: { kind: 'Name', value: 'store_employee_insert_input' }
                                }
                            }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'insert_store_employee' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'objects' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'objects' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'on_conflict' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'constraint' },
                                            value: {
                                                kind: 'EnumValue',
                                                value: 'store_employeePRIMARY43'
                                            }
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'update_columns' },
                                            value: { kind: 'ListValue', values: [] }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'affected_rows' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'returning' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee_id' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'store_id' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.AttdanceGroupsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'AttdanceGroups' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'offset' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'attendance_groups_bool_exp' }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where1' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'employees_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attendance_groups' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'limit' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'limit' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'offset' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'offset' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'group_type' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'departments' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employees' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employees_aggregate' },
                                                arguments: [
                                                    {
                                                        kind: 'Argument',
                                                        name: { kind: 'Name', value: 'where' },
                                                        value: {
                                                            kind: 'Variable',
                                                            name: { kind: 'Name', value: 'where1' }
                                                        }
                                                    },
                                                ],
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'aggregate' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'count' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendance_group_subleaders' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'avatar' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'department' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'id' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'name' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendance_group_leaders' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'avatar' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'department' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'id' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'name' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendance_group_shifts' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'shift_list' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'on_time' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'off_time' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'shift_name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendance_locations' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'longitude' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'latitude' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'address' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'gps_range' }
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attendance_groups_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.AttendanceGroupByIdDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'AttendanceGroupById' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attendance_groups_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'group_type' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'departments' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employees_aggregate' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'aggregate' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'count' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendance_group_subleaders' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'avatar' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'department' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'id' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'name' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendance_group_leaders' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'avatar' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'department' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'id' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'name' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendance_group_shifts' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'shift_list' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'on_time' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'off_time' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'shift_name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendance_locations' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'longitude' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'latitude' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'address' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'gps_range' }
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.AttendanceGroupShiftsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'AttendanceGroupShifts' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'attendance_bool_exp' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attendance_groups_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'departments' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employees' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'avatar' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'status' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'department_id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'attendances' },
                                                            arguments: [
                                                                {
                                                                    kind: 'Argument',
                                                                    name: { kind: 'Name', value: 'where' },
                                                                    value: {
                                                                        kind: 'Variable',
                                                                        name: { kind: 'Name', value: 'where' }
                                                                    }
                                                                },
                                                            ],
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'clock_in_result'
                                                                        }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'clock_in_time'
                                                                        }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'clock_out_location_id'
                                                                        }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'clock_out_result'
                                                                        }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'clock_in_location_id'
                                                                        }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'clock_out_time'
                                                                        }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'date' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'id' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'shift_id' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'shift_list' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'shift_name'
                                                                                    }
                                                                                },
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'on_time'
                                                                                    }
                                                                                },
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'off_time'
                                                                                    }
                                                                                },
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: { kind: 'Name', value: 'id' }
                                                                                },
                                                                            ]
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'attendances_aggregate'
                                                            },
                                                            arguments: [
                                                                {
                                                                    kind: 'Argument',
                                                                    name: { kind: 'Name', value: 'where' },
                                                                    value: {
                                                                        kind: 'Variable',
                                                                        name: { kind: 'Name', value: 'where' }
                                                                    }
                                                                },
                                                            ],
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'aggregate' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'count'
                                                                                    }
                                                                                },
                                                                            ]
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendance_group_shifts' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'shift_list' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'off_time' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'on_time' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'shift_name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.AttendnceListDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'AttendnceList' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'attendance_bool_exp' }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'offset' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attendance_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attendance' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'limit' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'limit' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'offset' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'offset' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'clock_in_time' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'clock_in_result' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'clock_in_location_id' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'clock_out_location_id' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'clock_out_result' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'clock_out_time' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'hours_of_attendance' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'employee' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'basic_salary' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'salary_type' }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendance_location' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'address' }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'shift_list' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'early_minutes_as_early' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'shift_name' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'early_minutes_as_lack' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'late_minutes_as_lack' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'late_minutes_as_late' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'off_time' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'on_time' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.GetBonusDeductionsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'GetBonusDeductions' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'bonusdeductions_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bonusdeductions' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'bonusdeductiontype' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'is_bonus' }
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'department' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.GetBonusDeductionTypesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'GetBonusDeductionTypes' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'bonusdeductiontypes' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'is_bonus' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.BrandsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'Brands' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'brands_bool_exp' }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'offset' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'brands' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'limit' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'limit' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'offset' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'offset' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'stores' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'brand_id' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'brands_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.BrandsStoresDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'BrandsStores' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'brandFilter' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'brands_bool_exp' }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'storeFilter' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'stores_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'brands' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'brandFilter' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'stores' },
                                    arguments: [
                                        {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'where' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'storeFilter' }
                                            }
                                        },
                                    ],
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.ViewDailyItemsSoldDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'ViewDailyItemsSold' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'offset' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'view_daily_items_sold_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'view_daily_items_sold' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'limit' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'limit' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'offset' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'offset' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'order_by' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'total_income_money' },
                                            value: { kind: 'EnumValue', value: 'desc' }
                                        },
                                    ]
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'store' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'fooditem' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'item_id' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'item_name' }
                                            },
                                        ]
                                    }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'item_id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'settle_biz_date' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'total_qty' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'total_last_total' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'total_income_money' }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'view_daily_items_sold_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DepartmentsEmployeesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'DepartmentsEmployees' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'departments_employees_bool_exp' }
                    },
                    defaultValue: { kind: 'ObjectValue', fields: [] }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'departments_employees' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'employee' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DepartmentsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'Departments' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'offset' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'departments_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'departments_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'departments' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'limit' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'limit' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'offset' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'offset' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'order_by' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'name' },
                                            value: { kind: 'EnumValue', value: 'asc' }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'employees_aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'aggregate' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'count' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'parent_department_id' }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.DsStoreBillsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'DsStoreBills' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'dsstorebills_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dsstorebills' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'order_by' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'ArriveMoney' },
                                            value: { kind: 'EnumValue', value: 'desc' }
                                        },
                                    ]
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'ArriveMoney' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'InBusAmount' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'ItemSpec' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'OtherSideName' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'supplyitem' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'itemName' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'reportUnit' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'mainUnit' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'itemTypeName' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.EmployeeMonthlySalaryDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'EmployeeMonthlySalary' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'monthlysalary_bool_exp' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'monthlysalary_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nodes' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'attendance_deduction' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'complaint' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'deductions_for_unpaid_leave'
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee_id' }
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'month' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'other_deductions' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'other_subsidies' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'performance' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'personal_tax' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'statutory_holiday' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.EmployeeInsuranceDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'EmployeeInsurance' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'employee_insurance_bool_exp' }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'offset' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'employee_insurance' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'limit' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'limit' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'offset' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'offset' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'corp_heating' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'corp_major_medical' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'employee' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'avatar' }
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'status' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'department' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'corp_housing_fund' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'corp_maternity_insurance' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'corp_medical_insurance' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'corp_pay' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'corp_retirement_insurance' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'corp_unemployment_insurance' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'corp_work_injury' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'heating_base' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'medical_base' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'month' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'payment_start_date' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'pension_base' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'personal_fund_balance' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'personal_housing_fund' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'personal_major_medical' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'personal_medical_insurance' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'personal_pay' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'personal_pension_insurance' }
                                },
                                {
                                    kind: 'Field',
                                    name: {
                                        kind: 'Name',
                                        value: 'personal_unemployment_insurance'
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'unemployment_base' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'work_injury_base' }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'employee_insurance_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.EmployessDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'Employess' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'offset' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'employees_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'employees' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'limit' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'limit' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'offset' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'offset' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'order_by' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'updated_at' },
                                            value: { kind: 'EnumValue', value: 'desc' }
                                        },
                                    ]
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'id_number' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'employee_form_status' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'mobile' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'user_id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'hire_date' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'job_title' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'last_day' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'departure_type' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'birthday' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'departure_type' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'employee_type' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'department_id' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'department' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                        ]
                                    }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'gender_id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'marital_status' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'medical_insurance' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'ethnicity' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'application' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'application_status' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'native_region' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'primary_emergency_contact' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'probation_months' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'provident_fund_account' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'social_security_number' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'bank_name' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'bank_account_number' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'salary_type' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'salary_type_id' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'basic_salary' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'basic_salary_monthly' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'manager_id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'work_age_type' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'family_address' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'hukou_type' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'hukou_location' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'actual_conversion_time' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'actual_overboard_time' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'overboard_note' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'salaryType' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'store_employees' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'store' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendances' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'clock_in_result' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'clock_in_time' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'clock_out_result' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'clock_out_time' }
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'shift_id' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'hours_of_attendance' }
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'shift_list' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'early_minutes_as_early'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'early_minutes_as_lack'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'late_minutes_as_lack'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'late_minutes_as_late'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'off_time' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'on_time' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.EmployeesStatusCountDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'EmployeesStatusCount' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'employees_bool_exp' }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'todayDate' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'thisWeekDateStart' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'thisWeekDateEnd' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'thisMonthDateStart' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'thisMonthDateEnd' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'nextMonthDateStart' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'nextMonthDateEnd' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'lastMonthDateStart' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'lastMonthDateEnd' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'todayDateMMDD' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'thisWeekDateStartMMDD' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'thisWeekDateEndMMDD' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'thisMonthDateStartMMDD' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'thisMonthDateEndMMDD' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'nextMonthDateStartMMDD' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'nextMonthDateEndMMDD' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'lastMonthDateStartMMDD' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'lastMonthDateEndMMDD' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'isEmployedCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'status' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: '_eq' },
                                                        value: { kind: 'IntValue', value: '2' }
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'informationNotFilled' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'status' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: '_eq' },
                                                        value: { kind: 'IntValue', value: '6' }
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'feishuIsReviewing' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'status' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: '_eq' },
                                                        value: { kind: 'IntValue', value: '7' }
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'feishuReviewRejected' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'status' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: '_eq' },
                                                        value: { kind: 'IntValue', value: '9' }
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'regularEmployeeCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'employee_type' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '1' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'internEmployeeCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'employee_type' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'outsourcedEmployeeCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'employee_type' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '4' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'trialEmployeeCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'application_status'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'awaitUnemployCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'status' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: '_eq' },
                                                        value: { kind: 'IntValue', value: '4' }
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'notEmployedCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'status' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: '_eq' },
                                                        value: { kind: 'IntValue', value: '5' }
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'awaitOnboardingCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'status' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: '_eq' },
                                                        value: { kind: 'IntValue', value: '1' }
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'awaitRegularizedCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'application_status' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: '_eq' },
                                                        value: { kind: 'IntValue', value: '2' }
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'overdueRegularizedCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'actual_conversion_time'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_lt' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'todayDate'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'application_status'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'thisMonthAwaitRegularizedCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'actual_conversion_time'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_gte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'thisMonthDateStart'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'actual_conversion_time'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_lte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'thisMonthDateEnd'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'application_status'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'nextMonthAwaitRegularizedCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'actual_conversion_time'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_gte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'nextMonthDateStart'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'actual_conversion_time'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_lte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'nextMonthDateEnd'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'application_status'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'todayHireDateCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'hire_date_mm_dd'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_gte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'todayDateMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'hire_date_mm_dd'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_lte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'todayDateMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'thisWeekHireDateCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'hire_date_mm_dd'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_gte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'thisWeekDateStartMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'hire_date_mm_dd'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_lte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'thisWeekDateEndMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'thisMonthHireDateCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'hire_date_mm_dd'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_gte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'thisMonthDateStartMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'hire_date_mm_dd'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_lte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'thisMonthDateEndMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'nextMonthHireDateCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'hire_date_mm_dd'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_gte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'nextMonthDateStartMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'hire_date_mm_dd'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_lte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'nextMonthDateEndMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'lastMonthHireDateCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'hire_date_mm_dd'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_gte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'lastMonthDateStartMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: {
                                                                    kind: 'Name',
                                                                    value: 'hire_date_mm_dd'
                                                                },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_lte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'lastMonthDateEndMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'todayBirthdayCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'birthday_mm_dd' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_gte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'todayDateMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'birthday_mm_dd' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_lte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'todayDateMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'thisWeekBirthdayCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'birthday_mm_dd' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_gte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'thisWeekDateStartMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'birthday_mm_dd' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_lte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'thisWeekDateEndMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'thisMonthBirthdayCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'birthday_mm_dd' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_gte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'thisMonthDateStartMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'birthday_mm_dd' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_lte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'thisMonthDateEndMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'nextMonthBirthdayCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'birthday_mm_dd' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_gte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'nextMonthDateStartMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'birthday_mm_dd' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_lte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'nextMonthDateEndMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'lastMonthBirthdayCount' },
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: '_and' },
                                            value: {
                                                kind: 'ListValue',
                                                values: [
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'birthday_mm_dd' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_gte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'lastMonthDateStartMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'birthday_mm_dd' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_lte' },
                                                                            value: {
                                                                                kind: 'Variable',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'lastMonthDateEndMMDD'
                                                                                }
                                                                            }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                    {
                                                        kind: 'ObjectValue',
                                                        fields: [
                                                            {
                                                                kind: 'ObjectField',
                                                                name: { kind: 'Name', value: 'status' },
                                                                value: {
                                                                    kind: 'ObjectValue',
                                                                    fields: [
                                                                        {
                                                                            kind: 'ObjectField',
                                                                            name: { kind: 'Name', value: '_eq' },
                                                                            value: { kind: 'IntValue', value: '2' }
                                                                        },
                                                                    ]
                                                                }
                                                            },
                                                        ]
                                                    },
                                                ]
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.EmployeeAttachmentDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'EmployeeAttachment' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'employee_attachments_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'employee_attachments' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'employee_id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'file_name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'kind' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'path' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.EmployeesByPkDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'EmployeesByPk' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'employees_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'mobile' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'employee_type' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'department_id' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'id_number' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'job_title' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'medical_insurance' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'department' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'employee_attachments' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'kind' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'path' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'file_name' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.EmployeeSalaryMonthlyDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'EmployeeSalaryMonthly' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'offset' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'employees_bool_exp' }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where1' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'attendance_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'employees' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'limit' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'limit' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'offset' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'offset' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'id_number' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'job_title' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'salary_type' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'department' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendances_aggregate' },
                                    arguments: [
                                        {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'where' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'where1' }
                                            }
                                        },
                                    ],
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'aggregate' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'count' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'sum' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'actual_length_hour'
                                                                        }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'actual_length_day'
                                                                        }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'scheduled_length_day'
                                                                        }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'scheduled_length_hour'
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'employees_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.EmployeeByPkAttendancesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'EmployeeByPkAttendances' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'attendance_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'employees_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'department_id' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'salary_type' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'basic_salary' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'basic_salary_monthly' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendances' },
                                    arguments: [
                                        {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'where' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'where' }
                                            }
                                        },
                                        {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'order_by' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: 'date' },
                                                        value: { kind: 'EnumValue', value: 'asc' }
                                                    },
                                                ]
                                            }
                                        },
                                    ],
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'clock_in_time' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'clock_in_result' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'clock_out_time' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'clock_out_result' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'clockInResult' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'clockOutResult' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'department' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'attendance_location' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'shift_list' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'shift_name' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'on_time' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'off_time' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.FoodItemsByPkDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'FoodItemsByPk' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'item_id' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fooditems_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'item_id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'item_id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'item_id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'item_name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'std_price' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'big_pic_url' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'brand' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ingredients' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'supplyitem' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'itemId' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'itemName' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'mainUnit' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'itemImage' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'netRate' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'dsstorebills' },
                                                            arguments: [
                                                                {
                                                                    kind: 'Argument',
                                                                    name: { kind: 'Name', value: 'limit' },
                                                                    value: { kind: 'IntValue', value: '1' }
                                                                },
                                                                {
                                                                    kind: 'Argument',
                                                                    name: { kind: 'Name', value: 'order_by' },
                                                                    value: {
                                                                        kind: 'ObjectValue',
                                                                        fields: [
                                                                            {
                                                                                kind: 'ObjectField',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'auditDate'
                                                                                },
                                                                                value: {
                                                                                    kind: 'EnumValue',
                                                                                    value: 'desc'
                                                                                }
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            ],
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'ArriveMoney'
                                                                        }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'InBusAmount'
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'qty' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.GetLeaveTypesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'GetLeaveTypes' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'leave_types' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'service_entitlements' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'years_of_service' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'max_days' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'salary_type' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.GetLeaveTypesByPkDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'GetLeaveTypesByPk' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'leave_types_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.RoleListsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'RoleLists' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'roles_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'roles' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'employees_roles' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'avatar' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role_nav_sm_categories' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'nav_sm_category' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role_scopes' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'scope' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'roles_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.NavTreeListDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'NavTreeList' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nav_xl_categories' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'nav_bg_categories' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'nav_sm_categories' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'side_nav_visible' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.RolesByIdDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'RolesById' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'employees_roles_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'roles_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'employees_roles' },
                                    arguments: [
                                        {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'where' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'where' }
                                            }
                                        },
                                    ],
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'avatar' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'department' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'name' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'mobile' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role_nav_sm_categories' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'nav_sm_category' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role_scopes' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'scope' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.GetSalaryTypesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'GetSalaryTypes' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'service_entitlement_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'salary_types' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'service_entitlements' },
                                    arguments: [
                                        {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'where' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'where' }
                                            }
                                        },
                                        {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'order_by' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: 'years_of_service' },
                                                        value: { kind: 'EnumValue', value: 'asc' }
                                                    },
                                                ]
                                            }
                                        },
                                    ],
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'max_days' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'years_of_service' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.GetSalaryTypesByPkDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'GetSalaryTypesByPk' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'salary_types_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.ShiftsListDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'ShiftsList' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'shift_lists_bool_exp' }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'offset' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shift_lists' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'limit' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'limit' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'offset' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'offset' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'off_time' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'on_time' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'shift_name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'updated_at' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'created_by' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'scheduled_length_day' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'scheduled_length_hour' }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shift_lists_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.ShiftByIdDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'ShiftById' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'shift_lists_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'id' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'punch_times' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'shift_name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'no_need_off' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'on_time' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'off_time' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'late_minutes_as_late' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'late_minutes_as_lack' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'early_minutes_as_early' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'early_minutes_as_lack' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'scheduled_length_day' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'scheduled_length_hour' }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.SolditemsSummaryDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'SolditemsSummary' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'offset' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'order_by' }
                    },
                    type: {
                        kind: 'ListType',
                        type: {
                            kind: 'NonNullType',
                            type: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'solditems_summary_order_by' }
                            }
                        }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'end_date' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'shop_ids' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: '_text' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'start_date' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'date' } }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'func_solditems_summary' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'args' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'start_date' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'start_date' }
                                            }
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'shop_ids' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'shop_ids' }
                                            }
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'end_date' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'end_date' }
                                            }
                                        },
                                    ]
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'limit' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'limit' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'offset' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'offset' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'order_by' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'order_by' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'item_id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'income_money' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'last_qty' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'last_price' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'fooditem' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'item_name' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'brand' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'func_solditems_summary_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'args' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'start_date' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'start_date' }
                                            }
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'end_date' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'end_date' }
                                            }
                                        },
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'shop_ids' },
                                            value: {
                                                kind: 'Variable',
                                                name: { kind: 'Name', value: 'shop_ids' }
                                            }
                                        },
                                    ]
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.StoreDepartmentsTreeDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'StoreDepartmentsTree' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'storeDepartments' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'is_dept' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'children' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'is_dept' }
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'children' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'is_dept' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'title' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'value' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.StoresDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'Stores' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'stores' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'brand_id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'brand' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.StoreListDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'StoreList' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'store_employee_bool_exp' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'store_employee' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'store' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'department' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.StoresEmployeesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'StoresEmployees' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'employees_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'stores' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'department' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'child_departments' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'employees' },
                                                            arguments: [
                                                                {
                                                                    kind: 'Argument',
                                                                    name: { kind: 'Name', value: 'where' },
                                                                    value: {
                                                                        kind: 'Variable',
                                                                        name: { kind: 'Name', value: 'where' }
                                                                    }
                                                                },
                                                            ],
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'id' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'avatar' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'status' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'name' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'mobile' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'job_title' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'hire_date' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'department' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: { kind: 'Name', value: 'name' }
                                                                                },
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: { kind: 'Name', value: 'id' }
                                                                                },
                                                                            ]
                                                                        }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'actual_overboard_time'
                                                                        }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'overboard_note'
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employees' },
                                                arguments: [
                                                    {
                                                        kind: 'Argument',
                                                        name: { kind: 'Name', value: 'where' },
                                                        value: {
                                                            kind: 'Variable',
                                                            name: { kind: 'Name', value: 'where' }
                                                        }
                                                    },
                                                ],
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'avatar' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'status' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'mobile' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'job_title' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'hire_date' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'department' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'name' }
                                                                    },
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'id' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'actual_overboard_time'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'overboard_note' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.StoresEmployeesStatusCountDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'StoresEmployeesStatusCount' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'isEmployedCount' },
                        name: { kind: 'Name', value: 'stores' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'departments' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'child_departments' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'employees_aggregate'
                                                            },
                                                            arguments: [
                                                                {
                                                                    kind: 'Argument',
                                                                    name: { kind: 'Name', value: 'where' },
                                                                    value: {
                                                                        kind: 'ObjectValue',
                                                                        fields: [
                                                                            {
                                                                                kind: 'ObjectField',
                                                                                name: { kind: 'Name', value: 'status' },
                                                                                value: {
                                                                                    kind: 'ObjectValue',
                                                                                    fields: [
                                                                                        {
                                                                                            kind: 'ObjectField',
                                                                                            name: {
                                                                                                kind: 'Name',
                                                                                                value: '_eq'
                                                                                            },
                                                                                            value: {
                                                                                                kind: 'IntValue',
                                                                                                value: '2'
                                                                                            }
                                                                                        },
                                                                                    ]
                                                                                }
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            ],
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'aggregate' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'count'
                                                                                    }
                                                                                },
                                                                            ]
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employees_aggregate' },
                                                arguments: [
                                                    {
                                                        kind: 'Argument',
                                                        name: { kind: 'Name', value: 'where' },
                                                        value: {
                                                            kind: 'ObjectValue',
                                                            fields: [
                                                                {
                                                                    kind: 'ObjectField',
                                                                    name: { kind: 'Name', value: 'status' },
                                                                    value: {
                                                                        kind: 'ObjectValue',
                                                                        fields: [
                                                                            {
                                                                                kind: 'ObjectField',
                                                                                name: { kind: 'Name', value: '_eq' },
                                                                                value: { kind: 'IntValue', value: '2' }
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            ]
                                                        }
                                                    },
                                                ],
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'aggregate' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'count' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'regularEmployeeCount' },
                        name: { kind: 'Name', value: 'stores' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'departments' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'child_departments' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'employees_aggregate'
                                                            },
                                                            arguments: [
                                                                {
                                                                    kind: 'Argument',
                                                                    name: { kind: 'Name', value: 'where' },
                                                                    value: {
                                                                        kind: 'ObjectValue',
                                                                        fields: [
                                                                            {
                                                                                kind: 'ObjectField',
                                                                                name: { kind: 'Name', value: '_and' },
                                                                                value: {
                                                                                    kind: 'ListValue',
                                                                                    values: [
                                                                                        {
                                                                                            kind: 'ObjectValue',
                                                                                            fields: [
                                                                                                {
                                                                                                    kind: 'ObjectField',
                                                                                                    name: {
                                                                                                        kind: 'Name',
                                                                                                        value: 'status'
                                                                                                    },
                                                                                                    value: {
                                                                                                        kind: 'ObjectValue',
                                                                                                        fields: [
                                                                                                            {
                                                                                                                kind: 'ObjectField',
                                                                                                                name: {
                                                                                                                    kind: 'Name',
                                                                                                                    value: '_eq'
                                                                                                                },
                                                                                                                value: {
                                                                                                                    kind: 'IntValue',
                                                                                                                    value: '2'
                                                                                                                }
                                                                                                            },
                                                                                                        ]
                                                                                                    }
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            kind: 'ObjectValue',
                                                                                            fields: [
                                                                                                {
                                                                                                    kind: 'ObjectField',
                                                                                                    name: {
                                                                                                        kind: 'Name',
                                                                                                        value: 'employee_type'
                                                                                                    },
                                                                                                    value: {
                                                                                                        kind: 'ObjectValue',
                                                                                                        fields: [
                                                                                                            {
                                                                                                                kind: 'ObjectField',
                                                                                                                name: {
                                                                                                                    kind: 'Name',
                                                                                                                    value: '_eq'
                                                                                                                },
                                                                                                                value: {
                                                                                                                    kind: 'IntValue',
                                                                                                                    value: '1'
                                                                                                                }
                                                                                                            },
                                                                                                        ]
                                                                                                    }
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                    ]
                                                                                }
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            ],
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'aggregate' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'count'
                                                                                    }
                                                                                },
                                                                            ]
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employees_aggregate' },
                                                arguments: [
                                                    {
                                                        kind: 'Argument',
                                                        name: { kind: 'Name', value: 'where' },
                                                        value: {
                                                            kind: 'ObjectValue',
                                                            fields: [
                                                                {
                                                                    kind: 'ObjectField',
                                                                    name: { kind: 'Name', value: '_and' },
                                                                    value: {
                                                                        kind: 'ListValue',
                                                                        values: [
                                                                            {
                                                                                kind: 'ObjectValue',
                                                                                fields: [
                                                                                    {
                                                                                        kind: 'ObjectField',
                                                                                        name: {
                                                                                            kind: 'Name',
                                                                                            value: 'status'
                                                                                        },
                                                                                        value: {
                                                                                            kind: 'ObjectValue',
                                                                                            fields: [
                                                                                                {
                                                                                                    kind: 'ObjectField',
                                                                                                    name: {
                                                                                                        kind: 'Name',
                                                                                                        value: '_eq'
                                                                                                    },
                                                                                                    value: {
                                                                                                        kind: 'IntValue',
                                                                                                        value: '2'
                                                                                                    }
                                                                                                },
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                ]
                                                                            },
                                                                            {
                                                                                kind: 'ObjectValue',
                                                                                fields: [
                                                                                    {
                                                                                        kind: 'ObjectField',
                                                                                        name: {
                                                                                            kind: 'Name',
                                                                                            value: 'employee_type'
                                                                                        },
                                                                                        value: {
                                                                                            kind: 'ObjectValue',
                                                                                            fields: [
                                                                                                {
                                                                                                    kind: 'ObjectField',
                                                                                                    name: {
                                                                                                        kind: 'Name',
                                                                                                        value: '_eq'
                                                                                                    },
                                                                                                    value: {
                                                                                                        kind: 'IntValue',
                                                                                                        value: '1'
                                                                                                    }
                                                                                                },
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                ]
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            ]
                                                        }
                                                    },
                                                ],
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'aggregate' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'count' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'internEmployeeCount' },
                        name: { kind: 'Name', value: 'stores' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'departments' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'child_departments' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'employees_aggregate'
                                                            },
                                                            arguments: [
                                                                {
                                                                    kind: 'Argument',
                                                                    name: { kind: 'Name', value: 'where' },
                                                                    value: {
                                                                        kind: 'ObjectValue',
                                                                        fields: [
                                                                            {
                                                                                kind: 'ObjectField',
                                                                                name: { kind: 'Name', value: '_and' },
                                                                                value: {
                                                                                    kind: 'ListValue',
                                                                                    values: [
                                                                                        {
                                                                                            kind: 'ObjectValue',
                                                                                            fields: [
                                                                                                {
                                                                                                    kind: 'ObjectField',
                                                                                                    name: {
                                                                                                        kind: 'Name',
                                                                                                        value: 'status'
                                                                                                    },
                                                                                                    value: {
                                                                                                        kind: 'ObjectValue',
                                                                                                        fields: [
                                                                                                            {
                                                                                                                kind: 'ObjectField',
                                                                                                                name: {
                                                                                                                    kind: 'Name',
                                                                                                                    value: '_eq'
                                                                                                                },
                                                                                                                value: {
                                                                                                                    kind: 'IntValue',
                                                                                                                    value: '2'
                                                                                                                }
                                                                                                            },
                                                                                                        ]
                                                                                                    }
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                        {
                                                                                            kind: 'ObjectValue',
                                                                                            fields: [
                                                                                                {
                                                                                                    kind: 'ObjectField',
                                                                                                    name: {
                                                                                                        kind: 'Name',
                                                                                                        value: 'employee_type'
                                                                                                    },
                                                                                                    value: {
                                                                                                        kind: 'ObjectValue',
                                                                                                        fields: [
                                                                                                            {
                                                                                                                kind: 'ObjectField',
                                                                                                                name: {
                                                                                                                    kind: 'Name',
                                                                                                                    value: '_eq'
                                                                                                                },
                                                                                                                value: {
                                                                                                                    kind: 'IntValue',
                                                                                                                    value: '2'
                                                                                                                }
                                                                                                            },
                                                                                                        ]
                                                                                                    }
                                                                                                },
                                                                                            ]
                                                                                        },
                                                                                    ]
                                                                                }
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            ],
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'aggregate' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'count'
                                                                                    }
                                                                                },
                                                                            ]
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employees_aggregate' },
                                                arguments: [
                                                    {
                                                        kind: 'Argument',
                                                        name: { kind: 'Name', value: 'where' },
                                                        value: {
                                                            kind: 'ObjectValue',
                                                            fields: [
                                                                {
                                                                    kind: 'ObjectField',
                                                                    name: { kind: 'Name', value: '_and' },
                                                                    value: {
                                                                        kind: 'ListValue',
                                                                        values: [
                                                                            {
                                                                                kind: 'ObjectValue',
                                                                                fields: [
                                                                                    {
                                                                                        kind: 'ObjectField',
                                                                                        name: {
                                                                                            kind: 'Name',
                                                                                            value: 'status'
                                                                                        },
                                                                                        value: {
                                                                                            kind: 'ObjectValue',
                                                                                            fields: [
                                                                                                {
                                                                                                    kind: 'ObjectField',
                                                                                                    name: {
                                                                                                        kind: 'Name',
                                                                                                        value: '_eq'
                                                                                                    },
                                                                                                    value: {
                                                                                                        kind: 'IntValue',
                                                                                                        value: '2'
                                                                                                    }
                                                                                                },
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                ]
                                                                            },
                                                                            {
                                                                                kind: 'ObjectValue',
                                                                                fields: [
                                                                                    {
                                                                                        kind: 'ObjectField',
                                                                                        name: {
                                                                                            kind: 'Name',
                                                                                            value: 'employee_type'
                                                                                        },
                                                                                        value: {
                                                                                            kind: 'ObjectValue',
                                                                                            fields: [
                                                                                                {
                                                                                                    kind: 'ObjectField',
                                                                                                    name: {
                                                                                                        kind: 'Name',
                                                                                                        value: '_eq'
                                                                                                    },
                                                                                                    value: {
                                                                                                        kind: 'IntValue',
                                                                                                        value: '2'
                                                                                                    }
                                                                                                },
                                                                                            ]
                                                                                        }
                                                                                    },
                                                                                ]
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            ]
                                                        }
                                                    },
                                                ],
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'aggregate' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'count' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'awaitUnemployCount' },
                        name: { kind: 'Name', value: 'stores' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'departments' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'child_departments' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'employees_aggregate'
                                                            },
                                                            arguments: [
                                                                {
                                                                    kind: 'Argument',
                                                                    name: { kind: 'Name', value: 'where' },
                                                                    value: {
                                                                        kind: 'ObjectValue',
                                                                        fields: [
                                                                            {
                                                                                kind: 'ObjectField',
                                                                                name: { kind: 'Name', value: 'status' },
                                                                                value: {
                                                                                    kind: 'ObjectValue',
                                                                                    fields: [
                                                                                        {
                                                                                            kind: 'ObjectField',
                                                                                            name: {
                                                                                                kind: 'Name',
                                                                                                value: '_eq'
                                                                                            },
                                                                                            value: {
                                                                                                kind: 'IntValue',
                                                                                                value: '4'
                                                                                            }
                                                                                        },
                                                                                    ]
                                                                                }
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            ],
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'aggregate' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'count'
                                                                                    }
                                                                                },
                                                                            ]
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employees_aggregate' },
                                                arguments: [
                                                    {
                                                        kind: 'Argument',
                                                        name: { kind: 'Name', value: 'where' },
                                                        value: {
                                                            kind: 'ObjectValue',
                                                            fields: [
                                                                {
                                                                    kind: 'ObjectField',
                                                                    name: { kind: 'Name', value: 'status' },
                                                                    value: {
                                                                        kind: 'ObjectValue',
                                                                        fields: [
                                                                            {
                                                                                kind: 'ObjectField',
                                                                                name: { kind: 'Name', value: '_eq' },
                                                                                value: { kind: 'IntValue', value: '4' }
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            ]
                                                        }
                                                    },
                                                ],
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'aggregate' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'count' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'notEmployedCount' },
                        name: { kind: 'Name', value: 'stores' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'departments' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'child_departments' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'employees_aggregate'
                                                            },
                                                            arguments: [
                                                                {
                                                                    kind: 'Argument',
                                                                    name: { kind: 'Name', value: 'where' },
                                                                    value: {
                                                                        kind: 'ObjectValue',
                                                                        fields: [
                                                                            {
                                                                                kind: 'ObjectField',
                                                                                name: { kind: 'Name', value: 'status' },
                                                                                value: {
                                                                                    kind: 'ObjectValue',
                                                                                    fields: [
                                                                                        {
                                                                                            kind: 'ObjectField',
                                                                                            name: {
                                                                                                kind: 'Name',
                                                                                                value: '_eq'
                                                                                            },
                                                                                            value: {
                                                                                                kind: 'IntValue',
                                                                                                value: '5'
                                                                                            }
                                                                                        },
                                                                                    ]
                                                                                }
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            ],
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'aggregate' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'count'
                                                                                    }
                                                                                },
                                                                            ]
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employees_aggregate' },
                                                arguments: [
                                                    {
                                                        kind: 'Argument',
                                                        name: { kind: 'Name', value: 'where' },
                                                        value: {
                                                            kind: 'ObjectValue',
                                                            fields: [
                                                                {
                                                                    kind: 'ObjectField',
                                                                    name: { kind: 'Name', value: 'status' },
                                                                    value: {
                                                                        kind: 'ObjectValue',
                                                                        fields: [
                                                                            {
                                                                                kind: 'ObjectField',
                                                                                name: { kind: 'Name', value: '_eq' },
                                                                                value: { kind: 'IntValue', value: '5' }
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            ]
                                                        }
                                                    },
                                                ],
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'aggregate' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'count' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        alias: { kind: 'Name', value: 'awaitOnboardingCount' },
                        name: { kind: 'Name', value: 'stores' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'departments' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'child_departments' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'employees_aggregate'
                                                            },
                                                            arguments: [
                                                                {
                                                                    kind: 'Argument',
                                                                    name: { kind: 'Name', value: 'where' },
                                                                    value: {
                                                                        kind: 'ObjectValue',
                                                                        fields: [
                                                                            {
                                                                                kind: 'ObjectField',
                                                                                name: { kind: 'Name', value: 'status' },
                                                                                value: {
                                                                                    kind: 'ObjectValue',
                                                                                    fields: [
                                                                                        {
                                                                                            kind: 'ObjectField',
                                                                                            name: {
                                                                                                kind: 'Name',
                                                                                                value: '_eq'
                                                                                            },
                                                                                            value: {
                                                                                                kind: 'IntValue',
                                                                                                value: '1'
                                                                                            }
                                                                                        },
                                                                                    ]
                                                                                }
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            ],
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'aggregate' },
                                                                        selectionSet: {
                                                                            kind: 'SelectionSet',
                                                                            selections: [
                                                                                {
                                                                                    kind: 'Field',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'count'
                                                                                    }
                                                                                },
                                                                            ]
                                                                        }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employees_aggregate' },
                                                arguments: [
                                                    {
                                                        kind: 'Argument',
                                                        name: { kind: 'Name', value: 'where' },
                                                        value: {
                                                            kind: 'ObjectValue',
                                                            fields: [
                                                                {
                                                                    kind: 'ObjectField',
                                                                    name: { kind: 'Name', value: 'status' },
                                                                    value: {
                                                                        kind: 'ObjectValue',
                                                                        fields: [
                                                                            {
                                                                                kind: 'ObjectField',
                                                                                name: { kind: 'Name', value: '_eq' },
                                                                                value: { kind: 'IntValue', value: '1' }
                                                                            },
                                                                        ]
                                                                    }
                                                                },
                                                            ]
                                                        }
                                                    },
                                                ],
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'aggregate' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'count' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.StoreDepartmentsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'StoreDepartments' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'stores' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'departments' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'child_departments' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.StoreEmployeeDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'StoreEmployee' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'store_employee_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'store_employee' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'employee' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'avatar' }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'store' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.SupplyItemsByPkDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'SupplyItemsByPk' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'itemId' }
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' }
                        }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'supplyitems_by_pk' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'itemId' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'itemId' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'itemId' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'itemName' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'itemImage' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'itemTypeName' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'mainUnit' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'reportUnit' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'reportUnitRatio' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'netRate' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'dsstorebills' },
                                    arguments: [
                                        {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'limit' },
                                            value: { kind: 'IntValue', value: '1' }
                                        },
                                        {
                                            kind: 'Argument',
                                            name: { kind: 'Name', value: 'order_by' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: 'auditDate' },
                                                        value: { kind: 'EnumValue', value: 'desc' }
                                                    },
                                                ]
                                            }
                                        },
                                    ],
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'ArriveMoney' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'InBusAmount' }
                                            },
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ingredients' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'fooditem' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'brand' },
                                                            selectionSet: {
                                                                kind: 'SelectionSet',
                                                                selections: [
                                                                    {
                                                                        kind: 'Field',
                                                                        name: { kind: 'Name', value: 'name' }
                                                                    },
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'item_name' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.VerifyEmployeeFieldsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'VerifyEmployeeFields' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'offset' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'verifyEmployeeFields' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'limit' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'limit' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'offset' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'offset' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'types' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'employee' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'avatar' }
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'department' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'status' }
                                            },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
exports.ViewMonthlySalaryDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'ViewMonthlySalary' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'limit' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'offset' }
                    },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'view_monthly_salary_bool_exp' }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where1' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'monthlysalary_bool_exp' }
                    }
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'where2' }
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'employee_insurance_bool_exp' }
                    }
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'view_monthly_salary' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'limit' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'limit' }
                                }
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'offset' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'offset' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'employee_id' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attendance_department' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'employee' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'avatar' }
                                            },
                                            { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'status' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'job_title' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'birthday' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'id_number' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'bank_name' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'bank_account_number' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'hire_date' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'basic_salary' }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'department' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'id' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'name' }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'monthlysalaries' },
                                                arguments: [
                                                    {
                                                        kind: 'Argument',
                                                        name: { kind: 'Name', value: 'where' },
                                                        value: {
                                                            kind: 'Variable',
                                                            name: { kind: 'Name', value: 'where1' }
                                                        }
                                                    },
                                                ],
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'attendance_deduction'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'complaint' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'deductions_for_unpaid_leave'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'other_deductions' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'other_subsidies' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'penalty_deduct' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'performance' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'personal_tax' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'statutory_holiday'
                                                            }
                                                        },
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'employee_insurances' },
                                                arguments: [
                                                    {
                                                        kind: 'Argument',
                                                        name: { kind: 'Name', value: 'where' },
                                                        value: {
                                                            kind: 'Variable',
                                                            name: { kind: 'Name', value: 'where2' }
                                                        }
                                                    },
                                                ],
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'corp_heating' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'corp_housing_fund'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'corp_major_medical'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'corp_maternity_insurance'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'corp_medical_insurance'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'corp_pay' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'corp_retirement_insurance'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'corp_unemployment_insurance'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'corp_work_injury' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'heating_base' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'medical_base' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'pension_base' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'personal_fund_balance'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'personal_housing_fund'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'personal_major_medical'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'personal_medical_insurance'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'personal_pay' }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'personal_pension_insurance'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'personal_unemployment_insurance'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'unemployment_base'
                                                            }
                                                        },
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'work_injury_base' }
                                                        },
                                                    ]
                                                }
                                            },
                                        ]
                                    }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'work_age' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'work_age_type' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'basic_salary' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'basic_salary_base' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'basic_salary_monthly' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'insurance_subsidy' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'overtime_pay' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'position_pay' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'work_age_bonus' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'gross_salary' }
                                },
                                { kind: 'Field', name: { kind: 'Name', value: 'salary_type' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'total_length_day' }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'total_length_hour' }
                                },
                            ]
                        }
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'view_monthly_salary_aggregate' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'where' }
                                }
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aggregate' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                                        ]
                                    }
                                },
                            ]
                        }
                    },
                ]
            }
        },
    ]
};
