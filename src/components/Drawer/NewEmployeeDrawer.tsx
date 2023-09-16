import React, { useEffect } from 'react';
import { Button, DatePicker, Drawer, Form, Input, Select, message } from 'antd';
import dayjs from 'dayjs';
import {
  GenderMap,
  IdTypeMap,
  MartialStatusMap,
  RelationshipMap,
  SalaryTypeIdMap,
} from '@/lib/mapping';
import { useDrawerStore } from '@/store/drawerStore';
import { useUpdateEmployee } from '@/hooks/employees.hooks';
import { useStoreDepartments } from '@/hooks/store.hooks';
import Manager from '../Select/Manager';

interface NewEmployeeDrawerType {
  open: boolean;
  refetch: () => void;
}

const NewEmployeeDrawer: React.FC<NewEmployeeDrawerType> = ({
  open,
  refetch,
}) => {
  const closeDrawer = useDrawerStore((state) => state.closeDrawer);
  const record = useDrawerStore(
    (state) => state.drawers.newEmployeeDrawer.employeeInfo
  );

  const [form] = Form.useForm();
  const { updateEmployee } = useUpdateEmployee();
  const { storeDepartmentsData } = useStoreDepartments();

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        name: record?.name,
        department_id: record?.department?.id,
        id_number: record?.id_number,
        hire_date: dayjs(record.hire_date),
        mobile: record.mobile?.split(' ')[1],
        job_title: record.job_title,
        id_type: 1,
        manager_id: record?.manager_id,
      });
    }
  }, [record]);

  // 手动填写信息提交
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      const {
        primary_emergency_contact: { mobile },
      } = values;
      if (!/^1[3-9]\d{9}$/.test(mobile)) {
        return message.error('紧急联系人手机号格式不正确');
      }
      if (record?.id) {
        await updateEmployee(record.id, {
          ...values,
          hire_date: dayjs(values?.hire_date).format('YYYY-MM-DD'),
          birthday: dayjs(values?.birthday).format('YYYY-MM-DD'),
          mobile: `+86 ${values?.mobile}`,
          status: 2,
        });
      }

      message.success('填写信息成功');
      handleClose();
      refetch();
    } catch (error) {
      console.error('填写信息失败:', error);
    }
  };

  const handleClose = () => {
    form.resetFields();
    closeDrawer('newEmployeeDrawer');
  };

  const departments = storeDepartmentsData?.stores
    .map((store) => {
      if (store.departments[0]?.child_departments.length > 0) {
        return store.departments[0].child_departments;
      } else {
        return store.departments;
      }
    })
    .flat();
  return (
    <Drawer
      title={record?.name}
      open={open}
      width={600}
      footer={
        <div className="tw-flex tw-justify-end tw-space-x-4 tw-py-2">
          <Button onClick={handleClose}>取消</Button>
          <Button type="primary" onClick={handleSubmit}>
            确定
          </Button>
        </div>
      }
      footerStyle={{
        display: 'flex',
        justifyContent: 'end',
      }}
      onClose={handleClose}
    >
      <Form form={form} layout="vertical" className="tw-pt-4">
        {/* 姓名 */}
        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        {/* 手机号码 */}
        <Form.Item
          label="手机号码"
          name="mobile"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        {/* 部门 */}
        <Form.Item
          label="部门"
          name="department_id"
          rules={[{ required: true, message: '部门不能为空' }]}
        >
          <Select
            labelInValue
            placeholder="请选择"
            options={departments?.map((department) => ({
              label: department.name,
              value: department.id,
            }))}
          />
        </Form.Item>
        {/* 职务 */}
        <Form.Item
          label="职务"
          name="job_title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        {/* 直属上级 */}
        <Form.Item
          label="直属上级"
          name="manager_id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Manager />
        </Form.Item>
        {/* 薪资类型 */}
        <Form.Item
          label="薪资类型"
          name="salary_type_id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="请选择"
            options={Object.entries(SalaryTypeIdMap).map(([value, label]) => {
              return {
                label,
                value,
              };
            })}
          />
        </Form.Item>
        {/* 基本工资 */}
        <Form.Item
          label="基本工资"
          name="basic_salary"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        {/* 月薪固定额 */}
        <Form.Item label="月薪固定额" name="basic_salary_monthly">
          <Input placeholder="请输入" />
        </Form.Item>
        {/* 预计入职日期 */}
        <Form.Item
          label="预计入职日期"
          name="hire_date"
          rules={[{ required: true, message: '预计入职日期不能为空' }]}
        >
          <DatePicker allowClear className="tw-w-full" />
        </Form.Item>
        {/* 性别 */}
        <Form.Item
          label="性别"
          name="gender_id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="请选择"
            options={Object.entries(GenderMap).map(([value, item]) => {
              return {
                label: item,
                value: Number(value),
              };
            })}
          />
        </Form.Item>
        {/* 出生日期 */}
        <Form.Item
          label="出生日期"
          name="birthday"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker allowClear className="tw-w-full" />
        </Form.Item>
        {/* 婚姻状况 */}
        <Form.Item
          label="婚姻状况"
          name="marital_status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="请选择"
            options={Object.entries(MartialStatusMap).map(([value, item]) => {
              return {
                label: item,
                value: Number(value),
              };
            })}
          />
        </Form.Item>
        {/* 户口所在地 */}
        <Form.Item
          label="户口所在地"
          name="hukou_location"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        {/* 现居住地址 */}
        <Form.Item
          label="现居住地址"
          name="family_address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        {/* 主要紧急联系人姓名 */}
        <Form.Item
          label="主要紧急联系人姓名"
          name={['primary_emergency_contact', 'name']}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item
          label="与主要紧急联系人关系"
          name={['primary_emergency_contact', 'relationship']}
          rules={[{ required: true }]}
        >
          <Select
            allowClear
            options={Object.entries(RelationshipMap).map(([value, item]) => {
              return {
                label: item,
                value: Number(value),
              };
            })}
          />
        </Form.Item>
        {/* 主要紧急联系人电话 */}
        <Form.Item
          label="主要紧急联系人电话"
          name={['primary_emergency_contact', 'mobile']}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        {/* 证件类型 */}
        <Form.Item
          label="证件类型"
          name="id_type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={Object.entries(IdTypeMap).map(([value, item]) => {
              return {
                label: item,
                value: Number(value),
              };
            })}
          />
        </Form.Item>
        {/* 证件号 */}
        <Form.Item
          label="证件号"
          name="id_number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default NewEmployeeDrawer;
