import { LocalText } from './general';
import { NaturalProofsTableItem } from 'store/propositions/natural-proofs/interfaces';
import { PropositionalOperator } from 'enums';

export type PropositionalSymbol = {
  input: string;
  type: 'variable' | 'operator' | 'parentheses';
  position: number;
  representation?: string;
};

export type PropositionalExpression = PropositionalSymbol[];

// NB: Recursive Type
export type PropositionalFormula = {
  operator: PropositionalOperator;
  values: PropositionalFormula[] | string;
};

export type ProofTableItem = {
  id: string;
  step: number;
  rawInput: string;
  comment: LocalText | string;
  dependentOn?: string[];
};

export interface ConfirmDeleteProofStepsPopupProps<
  T extends { id: string; friendlyExpression: PropositionalExpression; step: number; comment: string | LocalText },
> {
  onConfirm: () => void;
  dependencies: T[];
}

export type NPExecutorData = { level: number; dataLength: number; selectedItems: NaturalProofsTableItem[] };

export type NPCommentData = {
  item: NaturalProofsTableItem;
  tableData: NaturalProofsTableItem[];
  defaultComment: LocalText | string;
};
