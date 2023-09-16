import React from "react";
import { GetServerSidePropsContext } from "next";
import { Tabs } from "antd";

// components
import { DashBoard } from "@/components/Layout/Dashboard";
import { DashItems } from "@/components/Layout/Dashboard/types";
import { withDashItems } from "../../../../../hoc/withDashItems";

import StoreView from "./storeView";
import PeopleView from "./peopleView";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const StoreManagement = ({ dashItems }: { dashItems: DashItems }) => {
  return (
    <DashBoard dashItems={dashItems}>
      <div
        style={{ height: "calc(100vh - 110px)" }}
        className="tw-pl-2 tw-overflow-x-hidden"
      >
        <Tabs
          items={[
            {
              key: "1",
              label: "门店视图",
              children: <StoreView />,
            },
            {
              key: "2",
              label: "人员视图",
              children: <PeopleView />,
            },
          ]}
        />
      </div>
    </DashBoard>
  );
};

export default StoreManagement;
