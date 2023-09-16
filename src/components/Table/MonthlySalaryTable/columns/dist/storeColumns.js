"use strict";
exports.__esModule = true;
var mapping_1 = require("@/lib/mapping");
var classNames_1 = require("@/lib/tools/classNames");
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var numeral_1 = require("numeral");
var storeColumns = function (month) {
    return [
        {
            title: '姓名',
            width: 100,
            dataIndex: 'employee',
            key: 'employee',
            fixed: 'left',
            render: function (val) { return (React.createElement(antd_1.Popover, { key: val.id_number, content: React.createElement("div", { className: "tw-flex tw-flex-col tw-space-y-2" },
                    React.createElement("div", { className: "tw-flex tw-justify-between", key: '' },
                        React.createElement("span", null, "\u672C\u90E8\u95E8:"),
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
            title: '出勤时长',
            dataIndex: 'total_length_day',
            key: 'total_length_day',
            width: 100,
            render: function (val, record) {
                if (record.salary_type === '时薪') {
                    return React.createElement("span", null,
                        record.total_length_hour,
                        " \u5C0F\u65F6");
                }
                else {
                    return React.createElement("span", null,
                        val,
                        " \u5929");
                }
            }
        },
        {
            title: '基本工资',
            dataIndex: 'basic_salary',
            key: 'basic_salary',
            width: 100
        },
        {
            title: '工龄奖金',
            dataIndex: 'work_age_bonus',
            key: 'work_age_bonus',
            width: 100,
            render: function (val) { return React.createElement("span", null, val); }
        },
        {
            title: '薪酬补扣',
            dataIndex: 'bonus_deduction',
            width: 100,
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
            title: '个人实得金额',
            dataIndex: 'net_salary',
            key: 'net_salary',
            width: 150,
            render: function (val, record) { return (React.createElement("span", null,
                "\u00A5 ",
                numeral_1["default"](val).format('0,0.00'))); }
        },
        {
            title: '企业用功成本',
            dataIndex: 'corp_salary_cost',
            key: 'corp_salary_cost',
            width: 150,
            render: function (val, record) { return (React.createElement("span", null,
                "\u00A5 ",
                numeral_1["default"](val).format('0,0.00'))); }
        },
    ];
};
exports["default"] = storeColumns;
