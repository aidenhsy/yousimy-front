import { GetServerSidePropsContext } from "next";
import { useState } from "react";
//types
import { DashItems } from "@/components/Layout/Dashboard/types";
import { ShiftList } from "@/gql/graphql";
import { ColumnsType } from "antd/es/table";

//components
import { DashBoard } from "@/components/Layout/Dashboard";
import EditModal from "./EditModal";

//lib
import { withDashItems } from "@/hoc/withDashItems";
import usePagination from "@/lib/hooks/usePagination";

//antd
import { Button, Form, Input, Popover, Select, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
//hooks
import { useShiftLists } from "@/lib/hooks/graphql/shift.hook";
import TopOperation from "@/components/Table/TopOperation";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const HolidaySettingPage = ({ dashItems }: { dashItems: DashItems }) => {
  //state
  const [editModal, setEditModal] = useState(false);
  const [action, setAction] = useState<string>("add");
  // hooks
  const { pageParams, tableProps } = usePagination({});
  const { shiftLists_data, shiftLists_loading, shiftLists_refetch } =
    useShiftLists(pageParams.take, pageParams.skip, {});

  const columns: ColumnsType<ShiftList> = [
    {
      title: "节假日名称",
      dataIndex: "shift_name",
    },
    {
      title: "国家/地区",
      dataIndex: "punch_time_rules",
      render: (_) => (
        <div>
          {_?.on_time}~{_?.off_time}
        </div>
      ),
    },
    {
      title: "状态",
      dataIndex: "created_by1",
    },
    {
      title: "创建人",
      dataIndex: "tags",
    },
    {
      title: "创建时间",
      dataIndex: "created_by2",
      sorter: true,
    },
    {
      title: "更新人",
      dataIndex: "created_by3",
    },
    {
      title: "更新时间",
      dataIndex: "created_by4",
    },
    {
      title: "操作",
      fixed: "right",
      key: "operation",
      width: 200,
      render: (_, record) => (
        <Space size={1}>
          <Button type="link" onClick={() => onEdit(record.id)}>
            编辑
          </Button>
          <Button type="link">启用</Button>
          <Button type="link">删除</Button>
        </Space>
      ),
    },
  ];
  const onEdit = (id: string) => {
    setAction("edit");
    setEditModal(true);
  };
  const onAdd = (action: string, show: boolean, id: string) => {
    setAction("add");
    setEditModal(true);
  };
  const onFinish = () => {};
  const onClear = () => {};
  const onCancel = () => {};
  const onSearch = (val: string) => {
    console.log(val);
  };
  const content = (
    <Form name="control-ref" layout="vertical" onFinish={onFinish}>
      <Form.Item name="gender" label="国家/地区">
        <Select placeholder="请选择" allowClear style={{ width: "250px" }}>
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
          <Select.Option value="other">other</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="gender" label="状态">
        <Select placeholder="请选择" allowClear mode="multiple">
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
          <Select.Option value="other">other</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item className="tw-flex tw-justify-end">
        <Button type="link" htmlType="button" onClick={onClear}>
          清除
        </Button>
        {/* <Button htmlType="button" onClick={onCancel}>
          取消
        </Button> */}
        <Button type="primary" className="tw-ml-2" htmlType="submit">
          应用
        </Button>
      </Form.Item>
    </Form>
  );
  //排序
  const onSort = (p: any, f: any, s: any) => {
    console.log(s.order);
  };
  return (
    <DashBoard dashItems={dashItems}>
      <div className="tw-p-5">
        <TopOperation
          addName="新建"
          searchPlaceholder="通过节假日名称搜索"
          onAdd={() => onAdd("add", true, "")}
          onSearch={(value: string) => onSearch(value)}
        >
          <Popover content={content} placement="bottomRight" trigger="click">
            <Button className="tw-ml-2">筛选</Button>
          </Popover>
        </TopOperation>
        <Table
          sticky={{ offsetHeader: 56 }}
          columns={columns}
          loading={shiftLists_loading}
          rowKey="id"
          dataSource={shiftLists_data?.items}
          onChange={onSort}
          pagination={{ ...tableProps(shiftLists_data?.totalCount) }}
        />
      </div>
      {editModal && (
        <EditModal
          open={editModal}
          action={action}
          onCancel={() => setEditModal(false)}
        />
      )}
    </DashBoard>
  );
};

export default HolidaySettingPage;
