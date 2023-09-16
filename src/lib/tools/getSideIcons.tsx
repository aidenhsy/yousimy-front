import {
  BarChartOutlined,
  BookOutlined,
  CalendarOutlined,
  ControlOutlined,
  FileSearchOutlined,
  GoldOutlined,
  MinusCircleOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const getSideIcon = (name: string) => {
  switch (name) {
    case '组织架构':
      return <FileSearchOutlined />;
    case '人员':
      return <UserOutlined />;
    case '组织':
      return <TeamOutlined />;
    case '报表':
      return <BarChartOutlined />;
    case '统计':
      return <BarChartOutlined />;
    case '考勤设置':
      return <SettingOutlined />;
    case '考勤统计':
      return <BarChartOutlined />;
    case '假期管理':
      return <ControlOutlined />;
    case '加班管理':
      return <CalendarOutlined />;
    case '管理员':
      return <UserOutlined />;
    case '营业数据':
      return <FileSearchOutlined />;
    case '采购数据':
      return <GoldOutlined />;
    case '企业设置':
      return <SettingOutlined />;
    case '设置':
      return <SettingOutlined />;
    case '运营':
      return <BookOutlined />;
    default:
      return <MinusCircleOutlined />;
  }
};
