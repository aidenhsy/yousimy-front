import { GetServerSidePropsContext } from 'next';
import { withDashItems } from '../hoc/withDashItems';
import { DashItems } from '../types';
import { Layout, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const { Header } = Layout;

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const HomePage = ({ dashItems }: { dashItems: DashItems }) => {
  const router = useRouter();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="tw-sticky tw-z-10 tw-h-[56px] tw-bg-white tw-top-0 tw-flex tw-justify-between tw-items-center tw-px-[34px]">
        <div className="tw-flex tw-items-center">
          <img
            src="https://yousi-shanghai.oss-cn-shanghai.aliyuncs.com/u4logoPink.png"
            alt="u4logo"
            height={22}
          />
          <h2 className="tw-ml-2 tw-font-bold tw-text-md xs:tw-hidden xxs:tw-hidden">
            优思管理后台
          </h2>
        </div>
        <div className="tw-flex tw-items-center">
          <div className="tw-flex tw-items-center tw-border-solid tw-border-[1px] tw-rounded-lg tw-h-10 tw-mr-10 tw-border-blue-400 tw-bg-blue-100 hover:tw-bg-blue-200">
            <span
              onClick={() => {
                router.push('/dashboard');
              }}
              className="hover:tw-cursor-pointer tw-text-blue-900 tw-px-3"
            >
              控制面板
            </span>
          </div>
          {dashItems.userInfo ? (
            <Avatar
              src={<img src={dashItems.userInfo.avatar} alt="avatar" />}
            />
          ) : (
            <Button type="primary" onClick={() => router.push('/login')}>
              登录
            </Button>
          )}
        </div>
      </Header>
    </Layout>
  );
};

export default HomePage;
