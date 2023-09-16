import { findKeyByValue } from "./findkeyByValue";
import { DepartureTypeMap, EmployeeTypeMap, MedicalInsuranceMap } from "../mapping";

export const feishuOptions = (feishuOptionsData: any) => {

    return feishuOptionsData?.map((item: any) => {
        if (item.custom_id === "departure_type") {
            return {
                ...item,
                option: item.option.map((one: any) => ({
                    value: one.value,
                    text: one.text,
                    onlyValue: findKeyByValue(DepartureTypeMap, one.text),
                })),
            };
        }
        if (item.custom_id === "is_three_days_leave") {
            return {
                ...item,
                option: item.option.map((one: any) => ({
                    value: one.value,
                    text: one.text,
                    onlyValue: findKeyByValue({ 1: "是", 0: "否" }, one.text),
                })),
            };
        }
        if (item.custom_id === "employee_type") {
            return {
                ...item,
                option: item.option.map((one: any) => ({
                    value: one.value,
                    text: one.text,
                    onlyValue: findKeyByValue(EmployeeTypeMap, one.text),
                })),
            };
        }
        if (item.custom_id === "medical_insurance") {
            return {
                ...item,
                option: item.option.map((one: any) => ({
                    value: one.value,
                    text: one.text,
                    onlyValue: findKeyByValue(MedicalInsuranceMap, one.text),
                })),
            };
        }

        return item;
    });
}