import { useShiftLists } from '@/hooks/shift.hooks';
import { Modal } from 'antd';
import React from 'react';

interface ChooseShiftModalProps {
  open: boolean;
}

const ChooseShiftModal: React.FC<ChooseShiftModalProps> = ({ open }) => {
  const { shiftListsData } = useShiftLists(10, 0);
  console.log(shiftListsData);
  return <Modal open={open} />;
};

export default ChooseShiftModal;
