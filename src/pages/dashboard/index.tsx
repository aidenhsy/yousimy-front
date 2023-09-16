import { useEffect } from 'react';
import { GetServerSidePropsContext } from 'next';
import { withDashItems } from '../../hoc/withDashItems';
import { DashItems } from '@/components/Layout/Dashboard/types';
import { Layout } from 'antd';
import NavHeader from '@/components/Header/NavHeader.component';
import { useRouter } from 'next/router';

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const DashBoardHome = ({ dashItems }: { dashItems: DashItems }) => {
  const router = useRouter();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <NavHeader dashItems={dashItems} />
    </Layout>
  );
};

export default DashBoardHome;
