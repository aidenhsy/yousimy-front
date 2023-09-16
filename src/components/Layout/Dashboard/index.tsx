import { Breadcrumb, Button, Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import { useSideNav } from '@/context/SideNavContext';
import { getSideIcon } from '@/lib/tools/getSideIcons';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { DashItems } from './types';
import NavHeader from '@/components/Header/NavHeader.component';

const { Header, Sider, Content } = Layout;

type DashboardPageProps = {
  dashItems: DashItems;
  children: React.ReactNode;
};

type CustomTriggerProps = {
  collapsed: boolean;
};

const siderBackgroundColor = '#f5f5f5'; // Define the color as a constant

export const DashBoard = ({ dashItems, children }: DashboardPageProps) => {
  const router = useRouter();

  const { isOpen, toggleSideNav } = useSideNav();

  const CustomTrigger = ({ collapsed }: CustomTriggerProps) => (
    <div
      style={{
        background: siderBackgroundColor,
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        transition: 'background 0.3s',
        borderTop: '1px solid #d9d9d9', // Add a border-top here
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = '#d9d9d9';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = siderBackgroundColor;
      }}
    >
      <Button
        type="text"
        icon={!collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />} // Choose the icon based on the collapsed state
        onClick={() => toggleSideNav()}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'flex-start', // Align items to the start
          alignItems: 'center',
          padding: '0',
          paddingBottom: '5px',
          paddingLeft: !collapsed ? '8px' : '0', // Apply padding only when not collapsed
          background: 'none',
          border: 'none',
          color: '#000',
          textAlign: 'left',
        }}
      >
        {!collapsed && '收起导航'}
      </Button>
    </div>
  );

  const remapNav =
    dashItems?.currentNav &&
    dashItems.navItems
      .find((item) => item.nxl_id === dashItems.currentNav?.nxl_id)
      ?.nbc.map((nbc_item) => {
        const children = nbc_item.children?.map((child) => ({
          ...child,
          onClick: () => router.push(`${child.url}`),
        }));
        return {
          ...nbc_item,
          icon: getSideIcon(nbc_item.label),
          children,
        };
      })
      .map((item) => ({
        ...item,
        children: item.children.filter((child) => {
          return child.side_nav_visible === 1;
        }),
      }));

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavHeader dashItems={dashItems} />
      <Layout>
        <Sider
          collapsible
          onCollapse={toggleSideNav}
          style={{ ...siderStyle }}
          collapsed={isOpen}
          collapsedWidth={56}
          trigger={<CustomTrigger collapsed={isOpen} />}
          className="xs:tw-hidden xxs:tw-hidden"
        >
          <div style={{ maxHeight: '85vh', overflowY: 'auto' }}>
            <Menu
              defaultSelectedKeys={[`${dashItems.currentNav?.nbc_name}`]}
              defaultOpenKeys={[`${dashItems.currentNav?.nbc_name}`]}
              selectedKeys={[`${dashItems.currentNav?.nsc_name}`]}
              style={{
                background: 'none',
                border: 'none',
                paddingTop: 24,
              }}
              mode="inline"
              items={remapNav}
            />
          </div>
        </Sider>
        <Content style={{ height: '100%', backgroundColor: 'white' }}>
          <Breadcrumb
            style={{
              padding: '14px 0',
              backgroundColor: '#f5f5f5',
            }}
            items={[
              { title: dashItems.currentNav?.nbc_name },
              { title: dashItems.currentNav?.nsc_name },
            ]}
          ></Breadcrumb>
          <main>{children}</main>
        </Content>
      </Layout>
    </Layout>
  );
};

const siderStyle: React.CSSProperties = {
  background: siderBackgroundColor,
  overflow: 'auto',
  left: 0,
  top: '56px',
  bottom: 0,
  position: 'sticky',
};
