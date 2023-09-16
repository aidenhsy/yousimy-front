/** @jsxImportSource @emotion/react */
import React from "react";
import { Layout, Dropdown, Avatar, Popover, Menu, Button } from "antd";
import { UserOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { DashItems } from "../Layout/Dashboard/types";
import type { MenuProps } from "antd";
import { useState } from "react";
import { classNames } from "@/lib/tools/classNames";
import { css } from "@emotion/react";
import { deleteCookie } from "cookies-next";

const { Header } = Layout;

const NavHeader = ({ dashItems }: { dashItems: DashItems }) => {
  const router = useRouter();

  const defaultKey = dashItems.currentNav?.nxl_id;

  const xlItems: MenuProps["items"] = dashItems?.navItems.map((item) => ({
    key: item.nxl_id,
    label: item.nxl_name,
    onClick: () => {
      router.push(item.nav_xl_url);
    },
  }));
  const [popoverOpen, setPopoverOpen] = useState(false);

  const remapNav =
    dashItems?.currentNav &&
    dashItems.navItems.find(
      (item) => item.nxl_id === dashItems.currentNav?.nxl_id
    )?.nbc;

  return (
    <Header className="tw-sticky tw-z-10 tw-h-[56px] tw-bg-white tw-top-0 tw-flex tw-justify-between tw-items-center tw-px-[34px] xs:tw-px-4 xxs:tw-px-3">
      <div className="tw-flex tw-items-center">
        <div
          className="tw-flex tw-items-center hover:tw-cursor-pointer"
          onClick={() => router.push("/dashboard")}
        >
          <img
            src="https://yousi-shanghai.oss-cn-shanghai.aliyuncs.com/u4logoPink.png"
            alt="u4logo"
            height={22}
          />
          <h2 className="tw-ml-2 tw-font-bold tw-text-md xs:tw-hidden xxs:tw-hidden">
            优思管理后台
          </h2>
        </div>
        <div className="tw-w-28 tw-h-10 xxs:tw-w-17 xxs:tw-h-8">
          <Dropdown
            className="tw-ml-10 tw-flex tw-items-center tw-h-full tw-w-full tw-px-2 tw-border-solid tw-border-gray-200 hover:tw-cursor-pointer tw-rounded-md hover:tw-bg-gray-100"
            menu={{
              items: xlItems,
              selectable: true,
              defaultSelectedKeys: [`${defaultKey}`],
            }}
            onOpenChange={(e) => setPopoverOpen(e)}
          >
            <div className="tw-flex tw-justify-between">
              <span className="tw-text-gray-600">
                {dashItems?.currentNav?.nxl_name}
              </span>
              <DownOutlined
                className={classNames(
                  popoverOpen ? "tw-rotate-180" : "",
                  "tw-text-xs"
                )}
              />
            </div>
          </Dropdown>
        </div>
      </div>
      <div>
        <Popover
          trigger={["click"]}
          content={
            <Menu
              defaultSelectedKeys={[`${dashItems.currentNav?.nbc_name}`]}
              defaultOpenKeys={[`${dashItems.currentNav?.nbc_name}`]}
              selectedKeys={[`${dashItems?.currentNav?.nsc_name}`]}
              style={{
                background: "none",
                border: "none",
              }}
              mode="inline"
              items={remapNav}
              onClick={({ item }: any) => {
                router.push(item?.props?.url);
              }}
            />
          }
        >
          <MenuOutlined css={statisticContainerStyle} />
        </Popover>
        {dashItems?.userInfo && (
          <Popover
            content={
              <div style={{ width: 280, fontSize: 14, background: "#fff" }}>
                <div
                  style={{ display: "flex", padding: 16, position: "relative" }}
                >
                  <div className="tw-flex tw-items-center">
                    {dashItems?.userInfo?.avatar ? (
                      <Avatar
                        style={{ marginRight: 8 }}
                        size={45}
                        src={
                          <img src={dashItems?.userInfo.avatar} alt="avatar" />
                        }
                      />
                    ) : (
                      <Avatar
                        style={{ marginLeft: 8 }}
                        size={45}
                        icon={<UserOutlined />}
                      />
                    )}
                    <div className="tw-flex tw-flex-col">
                      <span> {dashItems?.userInfo.name}</span>
                      {/* <span className="tw-text-gray-400 tw-text-xs">部门</span> */}
                    </div>
                  </div>
                </div>
                <Button
                  type="link"
                  className="tw-p-[3px] tw-w-full"
                  onClick={() => {
                    deleteCookie("access_token");
                    router.push("/login");
                  }}
                >
                  退出登录
                </Button>
              </div>
            }
            trigger={["click"]}
          >
            {dashItems?.userInfo.avatar ? (
              <Avatar
                src={<img src={dashItems?.userInfo.avatar} alt="avatar" />}
              />
            ) : (
              <Avatar icon={<UserOutlined />} />
            )}
          </Popover>
        )}
      </div>
    </Header>
  );
};

export default NavHeader;

const statisticContainerStyle = css`
  margin-right: 12px;
  @media (min-width: 640px) {
    display: none;
  }
`;
