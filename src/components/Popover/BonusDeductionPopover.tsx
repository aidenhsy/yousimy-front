import { useGetBonusDeductions } from '@/hooks/bonusDeduction.hooks';
import { Button, Popover } from 'antd';
import React, { useMemo } from 'react';

interface BonusDeductionPopoverProps {
  value: string;
  month: string;
  employee_id: string;
  department_id: string;
}

const BonusDeductionPopover: React.FC<BonusDeductionPopoverProps> = ({
  value,
  month,
  employee_id,
  department_id,
}) => {
  const { bonusDeductionData, bonusDeductionRefetch } = useGetBonusDeductions({
    employee_id: { _eq: employee_id },
    department_id: { _eq: department_id },
    month: { _eq: month },
  });

  useMemo(() => {
    bonusDeductionRefetch({
      where: {
        employee_id: { _eq: employee_id },
        department_id: { _eq: department_id },
        month: { _eq: month },
      },
    });
  }, [month, employee_id, department_id]);
  // console.log(bonusDeductionData?.bonusdeductions);
  return (
    <Popover
      content={
        <div className="flex flex-col space-y-2">
          {bonusDeductionData?.bonusdeductions.map((bd) => (
            <div className="tw-flex tw-space-x-3">
              <span>{bd.bonusdeductiontype.name}</span>
              <span>{bd.amount}</span>
            </div>
          ))}
        </div>
      }
    >
      <Button type="text">{value}</Button>
    </Popover>
  );
};

export default BonusDeductionPopover;
