"use strict";
exports.__esModule = true;
var mapping_1 = require("@/lib/mapping");
var classNames_1 = require("@/lib/tools/classNames");
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var numeral_1 = require("numeral");
var hrColumns = function (month) {
    return [
        {
            title: '姓名',
            width: 200,
            dataIndex: 'employee',
            key: 'employee',
            fixed: 'left',
            render: function (val) { return (React.createElement(antd_1.Popover, { content: React.createElement("div", { className: "tw-flex tw-flex-col tw-space-y-2" },
                    React.createElement("div", { className: "tw-flex tw-justify-between", key: '' },
                        React.createElement("span", null, "\u5F53\u524D\u90E8\u95E8:"),
                        React.createElement("span", { className: "tw-font-bold tw-ml-2" }, val.department.name)),
                    React.createElement("div", { className: "tw-flex tw-justify-between", key: '' },
                        React.createElement("span", null, "\u72B6\u6001:"),
                        React.createElement("span", { className: "tw-font-bold tw-ml-2" }, mapping_1.StatusMap[val.status])),
                    React.createElement("div", { className: "tw-flex tw-justify-between", key: '' },
                        React.createElement("span", null, "\u804C\u4F4D:"),
                        React.createElement("span", { className: "tw-font-bold tw-ml-2" }, val.job_title)),
                    React.createElement("div", { className: "tw-flex tw-justify-between", key: '' },
                        React.createElement("span", null, "\u8EAB\u4EFD\u8BC1\u53F7:"),
                        React.createElement("span", { className: "tw-font-bold tw-ml-2" }, val.id_number)),
                    React.createElement("div", { className: "tw-flex tw-justify-between", key: '' },
                        React.createElement("span", null, "\u94F6\u884C\u540D\u79F0:"),
                        React.createElement("span", { className: "tw-font-bold tw-ml-2" }, val.bank_name)),
                    React.createElement("div", { className: "tw-flex tw-justify-between", key: '' },
                        React.createElement("span", null, "\u94F6\u884C\u5361\u53F7:"),
                        React.createElement("span", { className: "tw-font-bold tw-ml-2" }, val.bank_account_number)),
                    React.createElement("div", { className: "tw-flex tw-justify-between", key: '' },
                        React.createElement("span", null, "\u5165\u804C\u65E5\u671F:"),
                        React.createElement("span", { className: "tw-font-bold tw-ml-2" }, val.hire_date))) },
                (val === null || val === void 0 ? void 0 : val.avatar) ? (React.createElement(antd_1.Avatar, { src: React.createElement("img", { src: val === null || val === void 0 ? void 0 : val.avatar, alt: "avatar" }) })) : (React.createElement(antd_1.Avatar, { icon: React.createElement(icons_1.UserOutlined, null) })),
                React.createElement("span", { className: "tw-ml-2" }, val === null || val === void 0 ? void 0 : val.name))); }
        },
        {
            title: '考勤部门',
            dataIndex: ['employee_department', 'name'],
            key: 'employee_department_name',
            fixed: 'left',
            render: function (val) { return React.createElement("span", null, val); }
        },
        {
            title: '本部门',
            dataIndex: ['employee_department', 'name'],
            key: 'employee_department_name',
            render: function (val) { return React.createElement("span", null, val); }
        },
        {
            title: '出勤时长天数',
            dataIndex: 'total_length_day',
            key: 'total_length_day',
            render: function (val) { return React.createElement("span", null, val); }
        },
        {
            title: '出勤时长小时',
            dataIndex: 'total_length_hour',
            key: 'total_length_hour',
            render: function (val) { return React.createElement("span", null, val); }
        },
        {
            title: '薪资类型',
            dataIndex: 'salary_type',
            key: 'salary_type',
            render: function (val) { return React.createElement("span", null, val); }
        },
        {
            title: '月薪固定额',
            dataIndex: 'basic_salary_monthly',
            key: 'basic_salary_monthly',
            render: function (val) { return React.createElement("span", null, val); }
        },
        {
            title: '基本工资基数',
            dataIndex: ['employee', 'basic_salary'],
            key: 'basic_salary',
            render: function (val) { return React.createElement("span", null, val); }
        },
        {
            title: '基本工资',
            dataIndex: 'basic_salary_base',
            key: 'basic_salary_base',
            render: function (val) { return React.createElement("span", null, val); }
        },
        {
            title: '加班费',
            dataIndex: 'overtime_pay',
            key: 'overtime_pay',
            render: function (val) { return React.createElement("span", null, val); }
        },
        {
            title: '五险一金补助',
            dataIndex: 'insurance_subsidy',
            key: 'insurance_subsidy',
            render: function (val) { return React.createElement("span", null, val); }
        },
        {
            title: '岗位',
            dataIndex: 'position_pay',
            key: 'position_pay',
            render: function (val) { return React.createElement("span", null, val); }
        },
        {
            title: '工龄类型',
            dataIndex: 'work_age_type',
            key: 'work_age_type'
        },
        {
            title: '工龄 (几个6月)',
            dataIndex: 'work_age',
            key: 'work_age'
        },
        {
            title: '工龄_计算金额',
            dataIndex: 'work_age_bonus',
            key: 'work_age_bonus',
            render: function (val) { return React.createElement("span", null, val); }
        },
        {
            title: '薪酬补扣',
            dataIndex: 'bonus_deduction',
            key: 'bonus_deduction',
            render: function (val, record) {
                var _a, _b;
                return (React.createElement(antd_1.Popover, { trigger: ((_a = record.employee) === null || _a === void 0 ? void 0 : _a.bonusdeductions.length) > 0 ? 'hover' : 'click', content: React.createElement("div", { className: "tw-flex tw-flex-col tw-space-y-2" }, (_b = record.employee) === null || _b === void 0 ? void 0 : _b.bonusdeductions.map(function (bd) { return (React.createElement("div", { className: "tw-flex tw-justify-between", key: bd.bonusdeductiontype.name },
                        React.createElement("span", null,
                            bd.bonusdeductiontype.name,
                            ": "),
                        React.createElement("span", { className: classNames_1.classNames('tw-font-bold tw-ml-2', bd.bonusdeductiontype.is_bonus
                                ? 'tw-text-green-600'
                                : 'tw-text-red-600') }, bd.amount))); })) },
                    "\u00A5 ",
                    numeral_1["default"](val).format('0,0.00')));
            }
        },
        {
            title: '应发工资',
            dataIndex: 'gross_salary',
            key: 'gross_salary',
            render: function (val, record) { return (React.createElement("span", null,
                "\u00A5 ",
                numeral_1["default"](val).format('0,0.00'))); }
        },
        {
            title: '个人保险公积金',
            dataIndex: 'personal_insurance_funds',
            key: 'personal_insurance_funds',
            render: function (val, record) {
                var _a, _b, _c;
                return (React.createElement(antd_1.Popover, { trigger: ((_a = record.employee) === null || _a === void 0 ? void 0 : _a.insurance_funds.length) > 0 ? 'hover' : 'click', content: React.createElement("div", { className: "tw-w-[200px] tw-flex tw-flex-col tw-space-y-2" }, (_c = (_b = record.employee) === null || _b === void 0 ? void 0 : _b.insurance_funds) === null || _c === void 0 ? void 0 : _c.filter(function (inf) { return inf.insurance_fund_type.is_personal === true; }).map(function (inf) { return (React.createElement("div", { className: "tw-flex tw-justify-between", key: inf.insurance_fund_type.name },
                        React.createElement("span", null, inf.insurance_fund_type.name),
                        React.createElement("span", null,
                            "\u00A5 ",
                            numeral_1["default"](inf.amount).format('0,0.00')))); })) }, val));
            }
        },
        {
            title: '企业保险公积金',
            dataIndex: 'corp_insurance_funds',
            key: 'corp_insurance_funds',
            render: function (val, record) {
                var _a, _b, _c;
                return (React.createElement(antd_1.Popover, { trigger: ((_a = record.employee) === null || _a === void 0 ? void 0 : _a.insurance_funds.length) > 0 ? 'hover' : 'click', content: React.createElement("div", { className: "tw-w-[200px] tw-flex tw-flex-col tw-space-y-2" }, (_c = (_b = record.employee) === null || _b === void 0 ? void 0 : _b.insurance_funds) === null || _c === void 0 ? void 0 : _c.filter(function (inf) { return inf.insurance_fund_type.is_personal === false; }).map(function (inf) { return (React.createElement("div", { className: "tw-flex tw-justify-between", key: inf.insurance_fund_type.name },
                        React.createElement("span", null, inf.insurance_fund_type.name),
                        React.createElement("span", null,
                            "\u00A5 ",
                            numeral_1["default"](inf.amount).format('0,0.00')))); })) }, val));
            }
        },
        {
            title: '个人实得金额（实发）',
            dataIndex: 'net_salary',
            key: 'net_salary',
            render: function (val, record) { return (React.createElement("span", null,
                "\u00A5 ",
                numeral_1["default"](val).format('0,0.00'))); }
        },
        {
            title: '企业用功成本',
            dataIndex: 'corp_salary_cost',
            key: 'corp_salary_cost',
            render: function (val, record) { return (React.createElement("span", null,
                "\u00A5 ",
                numeral_1["default"](val).format('0,0.00'))); }
        },
        {
            title: '本人确认',
            dataIndex: 'employee_confirm',
            key: 'employee_confirm',
            render: function (val) {
                if (val) {
                    return React.createElement("span", { className: "tw-text-green-500" }, "\u5DF2\u786E\u8BA4");
                }
                else {
                    return React.createElement("span", { className: "tw-text-red-500" }, "\u672A\u786E\u8BA4");
                }
            }
        },
    ];
};
exports["default"] = hrColumns;
