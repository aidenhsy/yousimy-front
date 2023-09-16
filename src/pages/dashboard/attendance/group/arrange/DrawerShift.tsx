import DrawerModal from "@/components/Drawer/DrawerModal";
import ShiftModal from "@/components/Modal/ShiftModal";
import {
  useCreateAttendanceShiftGroupShifts,
  useDeleteAttendanceShiftGroupShifts,
} from "@/hooks/attendance.hooks";

import { useShiftLists } from "@/hooks/shift.hooks";
import { useDebounce } from "@/lib/hooks";
import usePagination from "@/lib/hooks/usePagination";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Space, Table } from "antd";
import { useEffect, useState } from "react";
interface DrawerShiftProps {
  scheduleShow: boolean;
  onClose?: () => void;
  userId: string;
  groupId: string;
  selected: any;
}
export default function DrawerShift({
  scheduleShow,
  onClose,
  userId,
  groupId,
  selected,
}: DrawerShiftProps) {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [shiftModalShow, setShiftModalShow] = useState(false);
  const { pageParams, gotoPage, tableProps } = usePagination({});
  const [filter, setFilter] = useState<any>({});
  // hooks

  const {
    deleteAttendanceShiftGroupShifts,
    deleteAttendanceShiftGroupShiftsLoading,
  } = useDeleteAttendanceShiftGroupShifts();
  const {
    createAttendanceShiftGroupShifts,
    createAttendanceShiftGroupShiftsLoading,
  } = useCreateAttendanceShiftGroupShifts();

  const { shiftListsData, shiftListsLoading, shiftListsRefetch } =
    useShiftLists(pageParams.take, pageParams.skip, filter);
  // 班次表格列
  const columns: any = [
    {
      title: "考勤班次",
      dataIndex: "shift_name",
    },
    {
      title: "考勤时间",
      dataIndex: "time",
      render: (_: any, record: any) => {
        const { on_time, off_time } = record;
        if (on_time && off_time) {
          return `${on_time} ~ ${off_time}`;
        }
        return null;
      },
    },
  ];
  useEffect(() => {
    setSelectedKeys(selected);
  }, [selected]);
  const rowSelection = {
    onSelect: (record: any, selected: any, selectedRows: any) => {
      if (selectedKeys.includes(record.id)) {
        setSelectedKeys(selectedKeys.filter((item) => item !== record.id));
      } else {
        setSelectedKeys([...selectedKeys, record.id]);
      }
    },
    selectedRowKeys: selectedKeys,
  };
  //只展示我的
  const setOnlyMe = (event: any) => {
    if (event.target.checked) {
      setFilter({ ...filter, created_by: userId });
    } else {
      const newFilter = JSON.parse(JSON.stringify(filter));
      delete newFilter.created_by;
      setFilter(newFilter);
    }
  };
  const onSearch = (value: any) => {
    gotoPage(1);
    setFilter({ ...filter, shift_name: value });
  };
  const onAddShiftToAtt = async () => {
    try {
      const data: any = selectedKeys.map((item) => ({
        attendance_group_id: groupId,
        shift_list_id: item,
      }));

      await deleteAttendanceShiftGroupShifts({
        attendance_group_id: {
          _eq: groupId,
        },
      });
      await createAttendanceShiftGroupShifts(data);
      onClose?.();
    } catch (error) {}
  };
  return (
    <>
      <DrawerModal
        title={"考勤班次"}
        open={scheduleShow}
        width={680}
        onClose={() => onClose?.()}
        footer={
          <Space>
            <Button onClick={onClose}>取消</Button>
            <Button
              type="primary"
              loading={
                deleteAttendanceShiftGroupShiftsLoading ||
                createAttendanceShiftGroupShiftsLoading
              }
              onClick={onAddShiftToAtt}
            >
              确认
            </Button>
          </Space>
        }
      >
        <div className="tw-flex tw-mb-4 tw-items-center">
          <Input
            placeholder="搜索班次名称"
            className="tw-w-60 tw-mr-4"
            onChange={useDebounce(
              ({ target: { value } }) => onSearch(value),
              1000
            )}
            prefix={<SearchOutlined />}
          />
          <Checkbox onChange={setOnlyMe}>只展示我创建的班次</Checkbox>
          <Button
            className="tw-ml-auto"
            icon={<PlusOutlined />}
            onClick={() => setShiftModalShow(true)}
          >
            新建班次
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={shiftListsData?.shift_lists}
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          loading={shiftListsLoading}
          rowKey={"id"}
          pagination={{
            ...tableProps(
              shiftListsData?.shift_lists_aggregate.aggregate?.count
            ),
          }}
        />
      </DrawerModal>
      {/* 新建班次 */}
      {shiftModalShow && (
        <ShiftModal
          userId={userId}
          onCancel={() => setShiftModalShow(false)}
          onOk={() => shiftListsRefetch()}
          action="add"
          open={shiftModalShow}
        />
      )}
    </>
  );
}
