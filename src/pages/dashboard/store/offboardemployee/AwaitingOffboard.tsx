import StoresEmployeesTable from "@/components/Table/EmployeeTable/StoreEmployeesTable";
import offBoardingColumns from "@/components/Table/EmployeeTable/columns/offboardingColumns";
import { Employees_Bool_Exp } from "@/graphql/__generated__/graphql";
import { useDebounce } from "@/lib/hooks";
import { Input } from "antd";
import React, { useState } from "react";

const AwaitingOffboard = () => {
  const [filter, setFilter] = useState<Employees_Bool_Exp>({
    status: { _eq: 4 },
  });
  return (
    <div className="tw-flex tw-flex-col tw-space-y-3">
      <div className="tw-flex tw-justify-between">
        <div className="tw-flex tw-justify-between">
          <div className="tw-flex">
            <Input
              style={{ minWidth: 308, height: 30 }}
              placeholder="通过姓名，手机号码搜索人员"
              onChange={useDebounce((e) => {
                const value = e.target.value;
                setFilter(
                  value && value !== ""
                    ? {
                        _and: [
                          {
                            _or: [
                              {
                                name: {
                                  _ilike: `%${value}%`,
                                },
                              },
                              {
                                mobile: {
                                  _ilike: `%${value}%`,
                                },
                              },
                            ],
                          },
                          {
                            status: {
                              _eq: 4,
                            },
                          },
                        ],
                      }
                    : { status: { _eq: 4 } }
                );
              }, 500)}
            />
          </div>
        </div>
      </div>
      <StoresEmployeesTable columns={offBoardingColumns()} filter={filter} />
    </div>
  );
};

export default AwaitingOffboard;
