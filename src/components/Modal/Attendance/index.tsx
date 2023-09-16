import { ReactNode, useEffect, useReducer } from "react";
//external library
import { Avatar, Button, Empty, Modal, Select, Spin, Tag } from "antd";
import { PartitionOutlined, UserOutlined } from "@ant-design/icons";
// components
import SearchInput from "./searchInput";
import Breadcrumbatd from "./breadcrumbatd";
import LeftList from "./leftList";
import RightList from "./rightList";

import { inCreaseOrDeleteAry } from "@/lib/tools/increaseOrDeleteAry";
import { useDebounce } from "@/lib/hooks";
import { AvailableRoles } from "@/gql/graphql";
import { useEmployees } from "@/hooks/employees.hooks";
import { useDepartments } from "@/hooks/departments.hooks";

interface ininiterStateType {
  currentBread: { id: string; name: string }[];
  selectRows: { [key: string]: any }[] | string[];
  previousBread: any;
  isModalOpen: boolean;
  title: string | ReactNode;
  childDepartments: any[];
}

export enum ActionType {
  Clear = "clear",
  Update = "update",
}

const ininiterState: ininiterStateType = {
  currentBread: [], // 面包屑路径
  selectRows: [], // 当前被选中的值
  isModalOpen: false, // 弹窗open
  title: "", // 弹窗title
  previousBread: { name: "" },
  childDepartments: [],
};

function queryReducer(
  state: ininiterStateType,
  action: { type: ActionType; payload?: { [key: string]: any } }
) {
  switch (action.type) {
    case "clear":
      return {
        ...state,
        ...ininiterState,
      };
    case "update":
      return {
        ...state,
        ...action.payload,
      };
    default:
      throw new Error();
  }
}

const AttendanceGroupModal = ({
  title, // 弹窗标题
  isButton, // 是否为按钮
  isButtonChildren, // 按钮props自定义
  modalProps, // 弹窗props自定义
  disabled = false,
  onValueMustExist, // 是否必须有选择人员或者部门
  inputSearchType = "input", // 搜索框类型
  isAdmin = false, // 是否只能选择人员
  isDepartments = false, // 是否可以选择部门
  value, // form value
  onChange, // form changeValue 回调
  handleCancel, // 关闭弹窗回调
}: {
  title: string | ReactNode;
  isButton?: boolean;
  isButtonChildren?: any;
  modalProps?: any;
  disabled?: boolean;
  onValueMustExist?: boolean;
  inputSearchType?: "input" | "select";
  isAdmin?: boolean;
  isDepartments?: boolean;
  value?: any;
  onChange?: (value: any) => void;
  handleCancel?: () => void;
}) => {
  const [state, dispatch] = useReducer(queryReducer, ininiterState);

  const { currentBread, previousBread, selectRows, isModalOpen } = state;
  const employee_roles = isAdmin ? ["admin", "attendance"] : undefined;

  // 部门
  const {
    departmentsData,
    departmentsLoading,
    departmentsError,
    departmentsRefetch,
  } = useDepartments(10, 0, {
    id: { _eq: "od-6eed5b2c7fe5a4126becd35c5b66c57f" },
  });

  const { employeesData, employeesLoading, employeesRefetch, employeesError } =
    useEmployees(0, 50, {
      employees_roles: {
        _or: [
          { role: { label: { _eq: "admin" } } },
          { role: { label: { _eq: "attendance" } } },
        ],
      },
    });

  useEffect(() => {
    if (modalProps?.openProps) {
      handleClick();
    }
  }, [modalProps?.openProps]);

  // 左侧搜索回调
  const handleSearch = async ({
    value,
    type,
  }: {
    value: string;
    type: "departments" | "employeesData";
  }) => {
    const isValue = value && value !== "";
    if (!isValue) {
      return handleClear();
    }
    const data = {
      currentBread: [],
      previousBread: isValue
        ? {
            name: `包含${value}的搜索结果`,
          }
        : {},
    };
    // 部门搜索
    if (type === "departments") {
      const res = await departmentsRefetch({
        limit: 30,
        offset: 0,
        where: {
          name: {
            _like: `%${value}%`,
          },
        },
      });
      if (!departmentsError) {
        dispatch({
          type: ActionType.Update,
          payload: {
            ...data,
            childDepartments: res.data.departments,
          },
        });
      }
    } else {
      // 人员搜索
      const result = await employeesRefetch({
        limit: 50,
        offset: 0,
        where:
          employee_roles && Boolean(employee_roles.length)
            ? {
                _and: [
                  {
                    employees_roles: {
                      role: {
                        label: {
                          _in: employee_roles,
                        },
                      },
                    },
                  },
                  {
                    name: {
                      _like: `%${value}%`,
                    },
                  },
                ],
              }
            : {
                name: {
                  _like: `%${value}%`,
                },
              },
      });
      if (!employeesError) {
        dispatch({
          type: ActionType.Update,
          payload: {
            ...data,
            childDepartments: result.data.employees,
          },
        });
      }
    }
  };
  // 左侧列表下级回调
  const handleSubordinate = async (id: string) => {
    const res = await departmentsRefetch({
      limit: 30,
      offset: 0,
      where: {
        parent_department_id: {
          _eq: id,
        },
      },
    });
    if (
      !isDepartments &&
      !departmentsError &&
      !res?.data?.departments?.length
    ) {
      const result = await employeesRefetch({
        limit: 50,
        offset: 0,
        where: {
          department_id: {
            _eq: id,
          },
        },
      });
      if (!employeesError) {
        dispatch({
          type: ActionType.Update,
          payload: {
            childDepartments: result.data.employees,
          },
        });
      }
    }
  };
  // 按钮点击
  const handleClick = () => {
    if (!disabled) {
      dispatch({
        type: ActionType.Update,
        payload: {
          isModalOpen: true,
          selectRows:
            (Array.isArray(value) && value.map((item: any) => item.label)) ||
            [],
        },
      });
    }
  };

  // 清空搜索框值的回调
  const handleClear = () => {
    dispatch({
      type: ActionType.Update,
      payload: {
        currentBread: [],
        previousBread: { name: "" },
        childDepartments: [],
      },
    });
    departmentsRefetch({
      limit: 10,
      offset: 0,
      where: {
        id: {
          _eq: "od-6eed5b2c7fe5a4126becd35c5b66c57f",
        },
      },
    });
    handleClearEmployees();
  };

  const handleClose = () => {
    dispatch({
      type: ActionType.Clear,
    });
    departmentsRefetch({
      limit: 10,
      offset: 0,
      where: {
        id: {
          _eq: "od-6eed5b2c7fe5a4126becd35c5b66c57f",
        },
      },
    });
    handleClearEmployees();
    handleCancel && handleCancel();
  };

  const handleClearEmployees = () => {
    employeesRefetch({
      limit: 50,
      offset: 0,
      where: {
        employees_roles: {
          role: {
            label: {
              _in: employee_roles,
            },
          },
        },
      },
    });
  };

  const spinning = departmentsLoading || employeesLoading || departmentsLoading;
  const dataSource = isAdmin
    ? employeesData?.employees.filter((one) => one.status === 2)
    : state.childDepartments?.length
    ? state.childDepartments
    : departmentsData?.departments;
  return (
    <div>
      {isButton ? (
        <Button {...isButtonChildren} onClick={handleClick}>
          {title}
        </Button>
      ) : (
        <Select
          mode="multiple"
          disabled={disabled}
          value={value}
          allowClear
          open={false}
          showArrow={false}
          onClick={handleClick}
          tagRender={({ label }: any) => {
            if (!label) {
              return <></>;
            }
            const { name, avatar, __typename } = label;
            return (
              <Tag className="tw-flex tw-rounded-t-full tw-rounded-b-full  tw-bg-gray-300/50">
                <div className="tw-cursor-pointer tw-whitespace-nowrap tw-flex">
                  {__typename === "departments" ? (
                    <Avatar
                      style={{
                        background: "#4b54e6",
                        marginLeft: "-8px",
                        marginTop: 1,
                      }}
                      size={20}
                      src={<PartitionOutlined rotate={90} />}
                    />
                  ) : avatar ? (
                    <Avatar
                      style={{ marginLeft: "-8px", marginTop: 1 }}
                      size={20}
                      src={<img src={avatar} alt="avatar" />}
                    />
                  ) : (
                    <Avatar
                      style={{ marginLeft: "-8px", marginTop: 1 }}
                      size={20}
                      icon={<UserOutlined />}
                    />
                  )}
                  <span className="tw-ml-2 tw-text-sm tw-h-[22px] tw-leading-[22px]">
                    {name}
                  </span>
                </div>
              </Tag>
            );
          }}
        />
      )}

      <Modal
        {...modalProps}
        title={<div className="tw-mb-5">{title}</div>}
        open={modalProps?.openProps || isModalOpen}
        width={700}
        onCancel={() => {
          // 关闭弹窗 清空数据
          dispatch({
            type: ActionType.Clear,
          });
          departmentsRefetch({
            limit: 10,
            offset: 0,
            where: {
              id: {
                _eq: "od-6eed5b2c7fe5a4126becd35c5b66c57f",
              },
            },
          });
          handleClearEmployees();
          handleCancel && handleCancel();
        }}
        onOk={() => {
          const data: { [key: string]: any }[] = [];
          selectRows.forEach((item: any) => {
            data.push({
              label: {
                ...item,
                name: item.name,
              },
              value: item.id,
            });
          });
          onChange && onChange(data);
          if (onValueMustExist && !data.length) {
            return;
          }
          handleClose();
        }}
        destroyOnClose
      >
        <Spin spinning={spinning}>
          <div className="tw-min-h-[62px] tw-text-[#1f2329] tw-flex-1 tw-text-sm tw-tabular-nums tw-m-0 tw-mb-6 tw-p-0 tw-px-6 ">
            <div className="tw-box-border tw-relative">
              <div className="tw-box-border tw-relative">
                <div className="tw-flex tw-items-center tw-h-[456px]">
                  {/* 左侧部门树 */}
                  <div className="tw-flex tw-flex-col tw-box-border tw-h-full tw-boder tw-border-solid tw-border-[#dee0e3] tw-rounded-bl tw-rounded-tl tw-border-r-0 tw-pt-2 tw-w-[50%]">
                    <div className="tw-flex-col tw-flex tw-flex-1">
                      <div className="tw-flex tw-items-center tw-px-2 tw-py-4">
                        {/* 搜索栏 */}
                        <SearchInput
                          type={inputSearchType}
                          refetch={useDebounce(handleSearch, 500)}
                        />
                      </div>
                      <div className="tw-flex tw-items-center tw-box-border tw-p-2 tw-pl-4 tw-w-full">
                        {/* 面包屑 */}
                        <Breadcrumbatd
                          currentBread={currentBread}
                          previousBread={previousBread}
                          refetch={({ data, currentData, previousObj }) => {
                            dispatch({
                              type: ActionType.Update,
                              payload: {
                                currentBread: currentData,
                                previousBread: previousObj,
                                childDepartments: [],
                              },
                            });
                            departmentsRefetch(data);
                          }}
                        />
                      </div>
                      <div className="tw-relative tw-flex-1 tw-pr-[2px]">
                        <div className="tw-overflow-visible">
                          <div className="tw-box-border tw-h-[340px] tw-relative tw-w-full tw-will-change-transform tw-overflow-y-auto tw-outline-none">
                            {/* 左侧列表 */}
                            {dataSource?.length ? (
                              <LeftList
                                isDepartments={isDepartments}
                                dataSource={dataSource}
                                selectRows={selectRows}
                                refetch={(type, item) => {
                                  const { id, name } = item;
                                  if (type === "subordinate") {
                                    // 获取部门子下属列表
                                    const data = [...currentBread];
                                    data.push(
                                      data.length
                                        ? previousBread
                                        : {
                                            id: "od-6eed5b2c7fe5a4126becd35c5b66c57f",
                                            name: "优思集团",
                                          }
                                    );

                                    dispatch({
                                      type: ActionType.Update,
                                      payload: {
                                        currentBread: data,
                                        previousBread: {
                                          id,
                                          name,
                                        },
                                      },
                                    });
                                    handleSubordinate(id);
                                  } else {
                                    // 添加或者删除选择数据
                                    dispatch({
                                      type: ActionType.Update,
                                      payload: {
                                        selectRows: inCreaseOrDeleteAry(
                                          selectRows,
                                          "id",
                                          id,
                                          item
                                        ),
                                      },
                                    });
                                  }
                                }}
                              />
                            ) : (
                              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 右侧已选成员 */}
                  <div className="tw-flex tw-flex-col tw-box-border tw-h-full tw-boder tw-border-solid tw-border-[#dee0e3]  tw-rounded-tr tw-rounded-br tw-flex-1 tw-pt-4">
                    <RightList
                      type={inputSearchType}
                      selectRows={selectRows}
                      refetch={(type, item) => {
                        if (type === "deleteClick") {
                          // 删除当前已选中的某条
                          const { id } = item;
                          dispatch({
                            type: ActionType.Update,
                            payload: {
                              selectRows: inCreaseOrDeleteAry(
                                selectRows,
                                "id",
                                id,
                                item
                              ),
                            },
                          });
                        } else if (type === "clear") {
                          // 清除全部
                          dispatch({
                            type: ActionType.Update,
                            payload: {
                              selectRows: [],
                            },
                          });
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Spin>
      </Modal>
    </div>
  );
};

export default AttendanceGroupModal;
