import { Employees } from "@/graphql/__generated__/graphql";
import { useEmployeesByPk } from "@/hooks/employees.hooks";
import { useHrDictionary } from "@/lib/hooks";
import { LeftOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Popover, Tag } from "antd";
import { useEffect, useState } from "react";

const managerInfoSource = {
  job_title: "职务",
  department: "部门",
  manager_id: "直属上级",
  hire_date: "入职时间",
  mobile: "手机号",
};

const ManagerPopover: React.FC<{
  value?: any;
  employeeInfo: Employees;
  managerInfo: Employees | any;
  refetch: (value: any) => void;
}> = ({ value, employeeInfo, managerInfo, refetch }) => {
  const [backManagerIds, setBackManagerIds] = useState<any>([]);
  const [noClosePopover, setNoClosePopover] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string | undefined>("");
  const { hrDictionary } = useHrDictionary();

  useEffect(() => {
    if (!noClosePopover) {
      setAvatar(managerInfo?.avatar);
    }
  }, [managerInfo]);
  return (
    <Popover
      overlayInnerStyle={{ padding: 0 }}
      arrow={false}
      open={noClosePopover || undefined}
      onOpenChange={(open: boolean) => {
        if (!open) {
          // 关闭popover重置上级信息
          setNoClosePopover(false);
          setBackManagerIds([]);
          refetch({ id: employeeInfo.manager_id });
        }
      }}
      content={
        <div className="tw-min-w-[320px]">
          <div className="tw-h-[136px] tw-flex-shrink-0 tw-relative tw-w-full">
            {Boolean(backManagerIds.length) && (
              <LeftOutlined
                style={{
                  position: "absolute",
                  zIndex: 15,
                  top: 20,
                  left: 20,
                }}
                onClick={() => {
                  const data = [...backManagerIds];
                  data.pop();
                  refetch({
                    id: Boolean(data.length)
                      ? data[data.length - 1]
                      : employeeInfo.manager_id,
                  });
                  setBackManagerIds(data);
                }}
              />
            )}
            <div className="tw-h-full tw-absolute tw-w-full">
              <img
                className="tw-bg-white tw-h-full tw-w-full"
                src="https://s3-imfile.feishucdn.com/static-resource/image/db7fd26f-6443-4a96-a543-becbe79c7382_MIDDLE?file_type=profile_top_img"
                alt="DynamicImage"
              />
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(180deg,rgba(0,0,0,.16),rgba(0,0,0,.04))",
                  height: "100%",
                  width: "100%",
                  pointerEvents: "none",
                  position: "absolute",
                  top: 0,
                }}
              />
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-flex-grow tw-flex-nowrap tw-justify-start tw-min-h-0 tw-relative tw-w-full">
            <Avatar
              style={{
                width: 96,
                height: 96,
                position: "absolute",
                left: 12,
                top: "-48px",
                boxShadow: "0 4px 8px rgba(31,35,41,.1)",
                borderRadius: "50%",
                background: "#f5f6f7",
              }}
              size={90}
              src={managerInfo?.avatar || undefined}
              icon={<UserOutlined />}
            />
            <div className="tw-text-2xl tw-font-semibold tw-mt-[56px] tw-mx-4 tw-mb-0 tw-overflow-hidden">
              {managerInfo?.name}
            </div>
          </div>
          <div
            style={{
              gap: "16px 12px",
              boxSizing: "border-box",
              display: "grid",
              fontSize: 14,
              gridTemplateRows: "max-contentauto",
              marginTop: 20,
              padding: 20,
            }}
          >
            {Object.entries(managerInfoSource).map(([key, value]) => {
              if (managerInfo[key]) {
                return (
                  <div className="tw-flex" key={key}>
                    <div className="tw-text-gray-400 tw-text-sm tw-max-w-[96px] tw-min-h-5 tw-min-w-[74px]">
                      {value}
                    </div>
                    {key === "department" ? (
                      managerInfo[key].name
                    ) : key === "manager_id" ? (
                      <a
                        onClick={() => {
                          const data = [...backManagerIds];
                          data.push(managerInfo[key]);
                          setBackManagerIds(data);
                          setNoClosePopover(true);
                          refetch({ id: managerInfo.manager_id });
                        }}
                      >
                        {hrDictionary?.manager?.values[managerInfo[key]]}
                      </a>
                    ) : (
                      managerInfo[key]
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      }
      trigger={["click"]}
    >
      <div className="tw-w-[77%] tw-break-all tw-leading-[22px] tw-font-normal tw-mr-2 tw-grow-0 tw-cursor-pointer">
        <span className={value ? "tw-text-black" : "tw-text-gray-300"}>
          {value ? (
            <Tag
              className="tw-mb-1 tw-rounded-t-full tw-rounded-b-full tw-bg-gray-300/50"
              typeof="default"
            >
              <Avatar
                style={{
                  margin: "-1px 2px 0 -8px",
                }}
                size={22}
                src={avatar}
                icon={<UserOutlined />}
              />
              {value}
            </Tag>
          ) : (
            "--"
          )}
        </span>
      </div>
    </Popover>
  );
};

export default ManagerPopover;
