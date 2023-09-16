import { DashBoard } from '@/components/Layout/Dashboard';
import { DashItems } from '@/components/Layout/Dashboard/types';
import { withDashItems } from '../../../../hoc/withDashItems';
import { GetServerSidePropsContext } from 'next';

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const Page = ({ dashItems }: { dashItems: DashItems }) => {
  return (
    <DashBoard dashItems={dashItems}>
      <div>
        <h1>hello</h1>
      </div>
    </DashBoard>
  );
};

export default Page;
