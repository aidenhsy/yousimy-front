import { DashBoard } from '@/components/Layout/Dashboard';
import { DashItems } from '@/components/Layout/Dashboard/types';
import { GetServerSidePropsContext } from 'next';
import { withDashItems } from '@/hoc/withDashItems';
import BasicTable from '@/components/Table/BasicTable';
import { Button, Checkbox } from 'antd';
import { useState } from 'react';
import { DownloadOutlined, FilterOutlined } from '@ant-design/icons';
import BasicDrawer from '@/components/Drawer/BasicDrawer';

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const Page = ({ dashItems }: { dashItems: DashItems }) => {
  const [colDrawer, setColDrawer] = useState(false);

  const allColumns = ['name', 'age', 'address'];
  const [visibleColumns, setVisibleColumns] = useState(allColumns);

  const handleColumnChange = (columnKey: string) => {
    if (visibleColumns.includes(columnKey)) {
      setVisibleColumns(visibleColumns.filter((key) => key !== columnKey));
    } else {
      setVisibleColumns([...visibleColumns, columnKey]);
    }
  };

  return (
    <>
      <DashBoard dashItems={dashItems}>
        <div className="tw-p-[20px]">
          <div className="tw-flex tw-h-[48px] tw-p-2 tw-justify-between">
            <div></div>
            <Button
              type="default"
              icon={<FilterOutlined />}
              size={'middle'}
              onClick={() => setColDrawer(true)}
            />
          </div>

          <div className="tw-mt-4">
            <BasicTable visibleColumns={visibleColumns} />
          </div>
        </div>
      </DashBoard>
      {/* 抽屉 */}
      <BasicDrawer
        open={colDrawer}
        onClose={() => setColDrawer(false)}
        allColumns={allColumns}
        visibleColumns={visibleColumns}
        handleColumnChange={handleColumnChange}
      />
    </>
  );
};

export default Page;
