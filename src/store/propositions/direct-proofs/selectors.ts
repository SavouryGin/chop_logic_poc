import { DirectProofsTableItem, PropositionsDirectProofsFlags } from './interfaces';
import { PropositionalFormula, RootState } from 'types';
import { createSelector } from '@reduxjs/toolkit';

const getFlags = (state: RootState): PropositionsDirectProofsFlags => state.propositionsDP.flags;

const getIsPremiseOpened = createSelector(getFlags, (data: PropositionsDirectProofsFlags): boolean => data.isPremiseOpened);

const getTableData = (state: RootState): DirectProofsTableItem[] => state.propositionsDP.tableData;

const getTableDataLength = (state: RootState): number => state.propositionsDP.tableData.length;

const getSelectedIds = (state: RootState): string[] => state.propositionsDP.selectedIds;

const getIsImplicationCreationOpened = createSelector(
  getFlags,
  (data: PropositionsDirectProofsFlags): boolean => data.isImplicationCreationOpened,
);

const getIsImplicationDistributionOpened = createSelector(
  getFlags,
  (data: PropositionsDirectProofsFlags): boolean => data.isImplicationDistributionOpened,
);

const getIsContradictionRealizationOpened = createSelector(
  getFlags,
  (data: PropositionsDirectProofsFlags): boolean => data.isContradictionRealizationOpened,
);

const getIsReplacerFormOpened = createSelector(getFlags, (data: PropositionsDirectProofsFlags): boolean => data.isReplacerFormOpened);

const getIsConfirmDeletePopupOpened = createSelector(
  getFlags,
  (data: PropositionsDirectProofsFlags): boolean => data.isConfirmDeletePopupOpened,
);

const getSelectedFormulas = (state: RootState): PropositionalFormula[] => {
  const selectedIds = state.propositionsDP.selectedIds;
  const selectedItems = state.propositionsDP.tableData.filter((item) => selectedIds.includes(item.id));

  return selectedItems.map((item) => item.formula);
};

const getSelectedTableItems = (state: RootState): DirectProofsTableItem[] => {
  const selectedIds = state.propositionsDP.selectedIds;

  return state.propositionsDP.tableData.filter((item) => selectedIds.includes(item.id));
};

export const propositionsDPSelectors = {
  getFlags,
  getTableData,
  getSelectedIds,
  getSelectedFormulas,
  getSelectedTableItems,
  getTableDataLength,
  getIsPremiseOpened,
  getIsImplicationCreationOpened,
  getIsImplicationDistributionOpened,
  getIsContradictionRealizationOpened,
  getIsReplacerFormOpened,
  getIsConfirmDeletePopupOpened,
};
