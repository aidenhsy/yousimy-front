import React from 'react';

interface Props {
  table_items: {};
}

const ReportTable: React.FC<Props> = ({ table_items }: Props) => {
  return (
    <div className="w-full h-full rounded-lg shadow sm:ml-5 overflow-y-auto whitespace-nowrap">
      <table className="min-w-full"></table>
    </div>
  );
};
