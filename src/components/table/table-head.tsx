import React from 'react';
import { TableColumnProps, TableIdsProps } from 'types/table';
import SelectAllCheckbox from './select-all-checkbox';

import './styles.scss';

type TableHeadProps = {
  columns: TableColumnProps[];
  hasCheckboxColumn: boolean;
  allRowIds: string[];
} & TableIdsProps;

function TableHead({ columns, hasCheckboxColumn, selectedIds, setSelectedIds, allRowIds }: TableHeadProps): React.ReactElement {
  const headerCells = columns.map((column, index) => {
    return <th key={index}>{column.title || ''}</th>;
  });

  return (
    <thead>
      <tr>
        {hasCheckboxColumn && <SelectAllCheckbox selectedIds={selectedIds} allRowIds={allRowIds} setSelectedIds={setSelectedIds} />}
        {headerCells}
      </tr>
    </thead>
  );
}

export default TableHead;
