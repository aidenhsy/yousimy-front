/** @jsxImportSource @emotion/react */
import { DashBoard } from "@/components/Layout/Dashboard";
import { DashItems } from "@/components/Layout/Dashboard/types";
import { withDashItems } from "@/hoc/withDashItems";
import { GetServerSidePropsContext } from "next";
import { css } from "@emotion/react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import AwaitingOffboard from "./AwaitingOffboard";
import Offboarded from "./Offboarded";

export const getServerSideProps = withDashItems(
  async (context: GetServerSidePropsContext) => {}
);

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "待离职",
    children: <AwaitingOffboard />,
  },
  {
    key: "2",
    label: "已离职",
    children: <Offboarded />,
  },
];

const Page = ({ dashItems }: { dashItems: DashItems }) => {
  return (
    <DashBoard dashItems={dashItems}>
      <div css={containerStyle}>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </DashBoard>
  );
};

export default Page;

const containerStyle = css`
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
