import React, { useEffect, useState, useImperativeHandle } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Table, Popover, Checkbox, Button } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
const TableComponents: React.FC<{
  dataSource: any[];
  columns: any[];
  [anyFields: string]: any;
}> = (props) => {
  const { columns, tableRef } = props;
  const [checkAll, setCheckAll] = useState(false);
  const [initCheckedList, setInitCheckedList] = useState<CheckboxValueType[]>(
    []
  );
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
  const [plainOptions, setPlainOptions] = useState<string[]>([]);

  useImperativeHandle(tableRef, () => ({
    handleTitleCheckAll: () => {
      return (
        <Popover
          content={
            <div>
              <Checkbox checked={checkAll} onChange={onCheckAllChange}>
                全选
              </Checkbox>
              <Checkbox.Group
                className="grid"
                value={checkedList}
                onChange={handleCheckbox}
              >
                {columns.map((item, index) => {
                  if (index !== columns.length - 1) {
                    const dataIndex = Array.isArray(item.dataIndex)
                      ? JSON.stringify(item.dataIndex)
                      : item.dataIndex;
                    return (
                      <Checkbox
                        style={{ margin: 0 }}
                        disabled={item.disabled}
                        value={dataIndex}
                      >
                        {item.title}
                      </Checkbox>
                    );
                  }
                })}
              </Checkbox.Group>
            </div>
          }
          trigger={["click"]}
        >
          <Button className="-ml-2" icon={<SettingOutlined />} />
        </Popover>
      );
    },
  }));

  useEffect(() => {
    if (!columns || !columns.length) {
      return;
    }
    const data: string[] = [];
    const check: string[] = [];
    const defualtCheck: string[] = [];
    columns.forEach((item) => {
      const dataIndex = Array.isArray(item.dataIndex)
        ? JSON.stringify(item.dataIndex)
        : item.dataIndex;
      // 排除操作列 设置所有列
      if (item.dataIndex !== "action") {
        data.push(dataIndex);
      }
      // 是否有禁止操作列
      if (item.disabled) {
        check.push(dataIndex);
      }
      // 是否默认选中列
      if (item.defaultCheck) {
        defualtCheck.push(dataIndex);
      }
    });
    setInitCheckedList(check);
    setCheckedList(check.concat(defualtCheck));
    setCheckAll(
      check.length + defualtCheck.length === data.length ? true : false
    );
    // 当前所有列
    setPlainOptions(data);
  }, []);

  useEffect(() => {}, []);
  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : initCheckedList);
    setCheckAll(e.target.checked);
  };

  const handleCheckbox = (checkedValue: CheckboxValueType[]) => {
    setCheckedList(checkedValue);
    setCheckAll(checkedValue.length === plainOptions.length);
  };

  return (
    <Table
      {...props}
      columns={(function () {
        // hidden控制是否隐藏列
        return columns
          .map((item) => {
            return {
              ...item,
              hidden: !checkedList.includes(
                Array.isArray(item.dataIndex)
                  ? JSON.stringify(item.dataIndex)
                  : item.dataIndex
              ),
            };
          })
          .filter((one) => one.dataIndex === "action" || !one.hidden);
      })()}
    />
  );
};

export default TableComponents;
