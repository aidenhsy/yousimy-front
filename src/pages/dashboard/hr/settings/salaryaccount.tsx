import { DashBoard } from '@/components/Layout/Dashboard';
import { DashItems } from '@/components/Layout/Dashboard/types';
import { withDashItems } from '../../../../hoc/withDashItems';
import { GetServerSidePropsContext } from 'next';
import { useBrands } from '@/hooks/brand.hooks';

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const SalaryAccountPage = ({ dashItems }: { dashItems: DashItems }) => {
  const { brandsData } = useBrands();
  console.log(brandsData);

  return (
    <DashBoard dashItems={dashItems}>
      <div>
        <h1>hello</h1>
      </div>
    </DashBoard>
  );
};

export default SalaryAccountPage;
