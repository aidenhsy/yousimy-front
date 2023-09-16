import { withDashItems } from '@/hoc/withDashItems';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { useEmployees } from '@/hooks/employees.hooks';
// SSR
export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {
    const departmentTree = await axios.get(
      `${process.env.NEXT_PUBLIC_BACK_SERVER}/departments`
    );
    return {
      props: { departmentTree: [departmentTree.data] },
    };
  }
);

const RosterNew = () => {
  const { employeesData, employeesLoading, employeesError } = useEmployees(
    0,
    10,
    { name: { _like: '%YANG%' } }
  );
  return (
    <div>
      <h1>Employees</h1>
    </div>
  );
};
export default RosterNew;
