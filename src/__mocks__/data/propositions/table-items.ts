import { NPFormulaBase, PropositionalOperator } from 'enums';
import { PropositionalError } from 'errors/propositional-error';
import { DirectProofsTableItem } from 'store/propositions/direct-proofs/interfaces';
import { NaturalProofsTableItem } from 'store/propositions/natural-proofs/interfaces';
import { errorsTexts } from 'texts';

const dpTableDataIE: DirectProofsTableItem[] = [
  {
    id: '46ee5155-6d49-15fe-bb27-0a69129216f8',
    step: 1,
    rawInput: 'p|q',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'p',
        representation: 'P',
        type: 'variable',
        position: 2,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 3,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 4,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 5,
      },
      {
        input: 'q',
        representation: 'Q',
        type: 'variable',
        position: 6,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
    ],
    friendlyExpression: [
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 0,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 1,
      },
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 2,
      },
    ],
    formula: {
      operator: PropositionalOperator.Or,
      values: [
        {
          operator: PropositionalOperator.Var,
          values: 'P',
        },
        {
          operator: PropositionalOperator.Var,
          values: 'Q',
        },
      ],
    },
    comment: {
      en: 'Premise',
      ru: 'Посылка',
    },
  },
  {
    step: 2,
    id: '6e7c7249-ba8c-7007-28a5-4550903bc36b',
    rawInput: 'p|q, r',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 2,
      },
      {
        input: 'p',
        representation: 'P',
        type: 'variable',
        position: 3,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 4,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 5,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 6,
      },
      {
        input: 'q',
        representation: 'Q',
        type: 'variable',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 9,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 10,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 11,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 12,
      },
      {
        input: 'r',
        representation: 'R',
        type: 'variable',
        position: 13,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 14,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 15,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 16,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 17,
      },
      {
        input: 'p',
        representation: 'P',
        type: 'variable',
        position: 18,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 19,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 20,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 21,
      },
      {
        input: 'q',
        representation: 'Q',
        type: 'variable',
        position: 22,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 23,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 24,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 25,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 26,
      },
    ],
    friendlyExpression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 1,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 2,
      },
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 3,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 4,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 5,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 6,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 7,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 8,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 9,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 10,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 11,
      },
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 12,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 13,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 14,
      },
    ],
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Or,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'P',
            },
            {
              operator: PropositionalOperator.Var,
              values: 'Q',
            },
          ],
        },
        {
          operator: PropositionalOperator.Implies,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'R',
            },
            {
              operator: PropositionalOperator.Or,
              values: [
                {
                  operator: PropositionalOperator.Var,
                  values: 'P',
                },
                {
                  operator: PropositionalOperator.Var,
                  values: 'Q',
                },
              ],
            },
          ],
        },
      ],
    },
    comment: {
      en: 'IC',
      ru: 'ВИ',
    },
  },
  {
    step: 3,
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 2,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 3,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 4,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 5,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 6,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 9,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 10,
      },
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 11,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 12,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 13,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 14,
      },
    ],
    friendlyExpression: [
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 0,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 1,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 2,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 3,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 4,
      },
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 5,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 6,
      },
    ],
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Var,
          values: 'R',
        },
        {
          operator: PropositionalOperator.Or,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'P',
            },
            {
              operator: PropositionalOperator.Var,
              values: 'Q',
            },
          ],
        },
      ],
    },
    id: '37990773-8e55-2dd9-50f9-bd5d63d7a392',
    rawInput: 'p|q, p|q, r',
    comment: {
      en: 'IE: 1, 2',
      ru: 'УИ: 1, 2',
    },
    dependentOn: ['46ee5155-6d49-15fe-bb27-0a69129216f8', '6e7c7249-ba8c-7007-28a5-4550903bc36b'],
  },
];

const npTableDataIEandII: NaturalProofsTableItem[] = [
  {
    level: 0,
    id: '2ce24bb1-0be0-c5f5-b167-c2262758e327',
    step: 1,
    rawInput: 'p&r',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'p',
        representation: 'P',
        type: 'variable',
        position: 2,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 3,
      },
      {
        input: '&',
        representation: '∧',
        type: 'operator',
        position: 4,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 5,
      },
      {
        input: 'r',
        representation: 'R',
        type: 'variable',
        position: 6,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
    ],
    friendlyExpression: [
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 0,
      },
      {
        input: '&',
        representation: '∧',
        type: 'operator',
        position: 1,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 2,
      },
    ],
    formula: {
      operator: PropositionalOperator.And,
      values: [
        {
          operator: PropositionalOperator.Var,
          values: 'P',
        },
        {
          operator: PropositionalOperator.Var,
          values: 'R',
        },
      ],
    },
    comment: {
      en: 'Premise',
      ru: 'Посылка',
    },
    formulaBase: NPFormulaBase.Premise,
    assumptionId: null,
  },
  {
    level: 1,
    id: 'd02b2fc7-befd-0c83-1e1e-ea5c49e736df',
    step: 2,
    rawInput: 'p&r=>q',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 2,
      },
      {
        input: 'p',
        representation: 'P',
        type: 'variable',
        position: 3,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 4,
      },
      {
        input: '&',
        representation: '∧',
        type: 'operator',
        position: 5,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 6,
      },
      {
        input: 'r',
        representation: 'R',
        type: 'variable',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 9,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 10,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 11,
      },
      {
        input: 'q',
        representation: 'Q',
        type: 'variable',
        position: 12,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 13,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 14,
      },
    ],
    friendlyExpression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 1,
      },
      {
        input: '&',
        representation: '∧',
        type: 'operator',
        position: 2,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 3,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 4,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 5,
      },
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 6,
      },
    ],
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.And,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'P',
            },
            {
              operator: PropositionalOperator.Var,
              values: 'R',
            },
          ],
        },
        {
          operator: PropositionalOperator.Var,
          values: 'Q',
        },
      ],
    },
    comment: {
      en: 'Assumption',
      ru: 'Гипотеза',
    },
    formulaBase: NPFormulaBase.Assumption,
    assumptionId: '9b3207af-c392-790d-154a-ef683a56d748',
  },
  {
    level: 1,
    step: 3,
    assumptionId: '9b3207af-c392-790d-154a-ef683a56d748',
    id: '95f81e22-d097-25ec-d721-ba28dd968359',
    rawInput: 'p&r, p&r=>q',
    formulaBase: NPFormulaBase.IE,
    dependentOn: ['2ce24bb1-0be0-c5f5-b167-c2262758e327', 'd02b2fc7-befd-0c83-1e1e-ea5c49e736df'],
    comment: {
      en: 'IE: 1, 2',
      ru: 'УИ: 1, 2',
    },
    formula: {
      operator: PropositionalOperator.Var,
      values: 'Q',
    },
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 1,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 2,
      },
    ],
    friendlyExpression: [
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 0,
      },
    ],
  },
  {
    level: 0,
    step: 4,
    assumptionId: null,
    id: 'f92597c6-7a1f-d8cf-6de1-3039ae303159',
    rawInput: 'p&r=>q, p&r, p&r=>q',
    formulaBase: NPFormulaBase.II,
    dependentOn: ['d02b2fc7-befd-0c83-1e1e-ea5c49e736df', '95f81e22-d097-25ec-d721-ba28dd968359'],
    comment: {
      en: 'II: 2, 3',
      ru: 'ВИ: 2, 3',
    },
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Implies,
          values: [
            {
              operator: PropositionalOperator.And,
              values: [
                {
                  operator: PropositionalOperator.Var,
                  values: 'P',
                },
                {
                  operator: PropositionalOperator.Var,
                  values: 'R',
                },
              ],
            },
            {
              operator: PropositionalOperator.Var,
              values: 'Q',
            },
          ],
        },
        {
          operator: PropositionalOperator.Var,
          values: 'Q',
        },
      ],
    },
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 2,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 3,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 4,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 5,
      },
      {
        input: '&',
        representation: '∧',
        type: 'operator',
        position: 6,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 7,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 8,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 9,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 10,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 11,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 12,
      },
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 13,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 14,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 15,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 16,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 17,
      },
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 18,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 19,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 20,
      },
    ],
    friendlyExpression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 2,
      },
      {
        input: '&',
        representation: '∧',
        type: 'operator',
        position: 3,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 4,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 5,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 6,
      },
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 9,
      },
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 10,
      },
    ],
  },
];

const npTableCIandCE: NaturalProofsTableItem[] = [
  {
    level: 0,
    id: '0c991093-b846-7887-e9da-2c753cf71b8e',
    step: 1,
    rawInput: 'f=>s',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'f',
        representation: 'F',
        type: 'variable',
        position: 2,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 3,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 4,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 5,
      },
      {
        input: 's',
        representation: 'S',
        type: 'variable',
        position: 6,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
    ],
    friendlyExpression: [
      {
        input: 'F',
        representation: 'F',
        type: 'variable',
        position: 0,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 1,
      },
      {
        input: 'S',
        representation: 'S',
        type: 'variable',
        position: 2,
      },
    ],
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Var,
          values: 'F',
        },
        {
          operator: PropositionalOperator.Var,
          values: 'S',
        },
      ],
    },
    comment: {
      en: 'Premise',
      ru: 'Посылка',
    },
    formulaBase: NPFormulaBase.Premise,
    assumptionId: null,
  },
  {
    level: 0,
    assumptionId: null,
    rawInput: 'f=>s, f=>s',
    step: 2,
    id: '39a82213-e007-ae70-ed3b-41504a1b4469',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 2,
      },
      {
        input: 'f',
        representation: 'F',
        type: 'variable',
        position: 3,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 4,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 5,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 6,
      },
      {
        input: 's',
        representation: 'S',
        type: 'variable',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 9,
      },
      {
        input: '&',
        representation: '∧',
        type: 'operator',
        position: 10,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 11,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 12,
      },
      {
        input: 'f',
        representation: 'F',
        type: 'variable',
        position: 13,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 14,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 15,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 16,
      },
      {
        input: 's',
        representation: 'S',
        type: 'variable',
        position: 17,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 18,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 19,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 20,
      },
    ],
    formula: {
      operator: PropositionalOperator.And,
      values: [
        {
          operator: PropositionalOperator.Implies,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'F',
            },
            {
              operator: PropositionalOperator.Var,
              values: 'S',
            },
          ],
        },
        {
          operator: PropositionalOperator.Implies,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'F',
            },
            {
              operator: PropositionalOperator.Var,
              values: 'S',
            },
          ],
        },
      ],
    },
    friendlyExpression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: 'F',
        representation: 'F',
        type: 'variable',
        position: 1,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 2,
      },
      {
        input: 'S',
        representation: 'S',
        type: 'variable',
        position: 3,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 4,
      },
      {
        input: '&',
        representation: '∧',
        type: 'operator',
        position: 5,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 6,
      },
      {
        input: 'F',
        representation: 'F',
        type: 'variable',
        position: 7,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 8,
      },
      {
        input: 'S',
        representation: 'S',
        type: 'variable',
        position: 9,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 10,
      },
    ],
    comment: {
      en: 'CI: 1',
      ru: 'ВК: 1',
    },
    dependentOn: ['0c991093-b846-7887-e9da-2c753cf71b8e'],
    formulaBase: NPFormulaBase.CI,
  },
  {
    level: 0,
    assumptionId: null,
    rawInput: 'f=>s, f=>s',
    step: 3,
    id: 'f2fd9364-7730-ef1f-642a-6fb63ada0e0a',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'F',
        representation: 'F',
        type: 'variable',
        position: 2,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 3,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 4,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 5,
      },
      {
        input: 'S',
        representation: 'S',
        type: 'variable',
        position: 6,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
    ],
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Var,
          values: 'F',
        },
        {
          operator: PropositionalOperator.Var,
          values: 'S',
        },
      ],
    },
    friendlyExpression: [
      {
        input: 'F',
        representation: 'F',
        type: 'variable',
        position: 0,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 1,
      },
      {
        input: 'S',
        representation: 'S',
        type: 'variable',
        position: 2,
      },
    ],
    comment: {
      en: 'CE: 2',
      ru: 'УК: 2',
    },
    dependentOn: ['39a82213-e007-ae70-ed3b-41504a1b4469'],
    formulaBase: NPFormulaBase.CE,
  },
  {
    level: 0,
    assumptionId: null,
    rawInput: 'f=>s, f=>s',
    step: 4,
    id: 'eda98bfd-74cb-87d9-6976-2cffba408ea5',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'F',
        representation: 'F',
        type: 'variable',
        position: 2,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 3,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 4,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 5,
      },
      {
        input: 'S',
        representation: 'S',
        type: 'variable',
        position: 6,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
    ],
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Var,
          values: 'F',
        },
        {
          operator: PropositionalOperator.Var,
          values: 'S',
        },
      ],
    },
    friendlyExpression: [
      {
        input: 'F',
        representation: 'F',
        type: 'variable',
        position: 0,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 1,
      },
      {
        input: 'S',
        representation: 'S',
        type: 'variable',
        position: 2,
      },
    ],
    comment: {
      en: 'CE: 2',
      ru: 'УК: 2',
    },
    dependentOn: ['39a82213-e007-ae70-ed3b-41504a1b4469'],
    formulaBase: NPFormulaBase.CE,
  },
];

const npTableNIandNE: NaturalProofsTableItem[] = [
  {
    level: 0,
    id: '6111ca42-4df3-e6ff-36c5-16b2dae09caa',
    step: 1,
    rawInput: '~p=>q',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 2,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 3,
      },
      {
        input: 'p',
        representation: 'P',
        type: 'variable',
        position: 4,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 5,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 6,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 7,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 8,
      },
      {
        input: 'q',
        representation: 'Q',
        type: 'variable',
        position: 9,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 10,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 11,
      },
    ],
    friendlyExpression: [
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 0,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 1,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 2,
      },
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 3,
      },
    ],
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Not,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'P',
            },
          ],
        },
        {
          operator: PropositionalOperator.Var,
          values: 'Q',
        },
      ],
    },
    comment: {
      en: 'Premise',
      ru: 'Посылка',
    },
    formulaBase: NPFormulaBase.Premise,
    assumptionId: null,
  },
  {
    level: 1,
    id: '938937f7-b5dc-f033-4205-446ff3f031f5',
    step: 2,
    rawInput: '~p=>~q',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 2,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 3,
      },
      {
        input: 'p',
        representation: 'P',
        type: 'variable',
        position: 4,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 5,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 6,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 7,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 8,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 9,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 10,
      },
      {
        input: 'q',
        representation: 'Q',
        type: 'variable',
        position: 11,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 12,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 13,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 14,
      },
    ],
    friendlyExpression: [
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 0,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 1,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 2,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 3,
      },
      {
        input: 'Q',
        representation: 'Q',
        type: 'variable',
        position: 4,
      },
    ],
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Not,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'P',
            },
          ],
        },
        {
          operator: PropositionalOperator.Not,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'Q',
            },
          ],
        },
      ],
    },
    comment: {
      en: 'Assumption',
      ru: 'Гипотеза',
    },
    formulaBase: NPFormulaBase.Assumption,
    assumptionId: '8ddbe1eb-d2e6-2591-5cc5-f097911b567b',
  },
  {
    level: 1,
    assumptionId: '8ddbe1eb-d2e6-2591-5cc5-f097911b567b',
    step: 3,
    id: 'abbdb879-ab50-3074-8d2f-e57e9dd99baa',
    rawInput: '~p=>q, ~p=>~q',
    formulaBase: NPFormulaBase.NI,
    dependentOn: ['6111ca42-4df3-e6ff-36c5-16b2dae09caa', '938937f7-b5dc-f033-4205-446ff3f031f5'],
    comment: {
      en: 'NI: 1, 2',
      ru: 'ВО: 1, 2',
    },
    formula: {
      operator: PropositionalOperator.Not,
      values: [
        {
          operator: PropositionalOperator.Not,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'P',
            },
          ],
        },
      ],
    },
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 1,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 2,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 3,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 4,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 5,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 6,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
    ],
    friendlyExpression: [
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 0,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 1,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 2,
      },
    ],
  },
  {
    level: 1,
    assumptionId: '8ddbe1eb-d2e6-2591-5cc5-f097911b567b',
    step: 4,
    id: 'c5a6200e-ec08-a47f-7167-27a608649048',
    rawInput: '~p=>q, ~p=>~q',
    formulaBase: NPFormulaBase.NE,
    dependentOn: ['abbdb879-ab50-3074-8d2f-e57e9dd99baa'],
    comment: {
      en: 'NE: 3',
      ru: 'УО: 3',
    },
    formula: {
      operator: PropositionalOperator.Var,
      values: 'P',
    },
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 1,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 2,
      },
    ],
    friendlyExpression: [
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 0,
      },
    ],
  },
];

const npTableDI: NaturalProofsTableItem[] = [
  {
    level: 0,
    id: 'd5cbb748-a8a8-070d-cd6a-0de5bd885f85',
    step: 1,
    rawInput: 'g=>s',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'g',
        representation: 'G',
        type: 'variable',
        position: 2,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 3,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 4,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 5,
      },
      {
        input: 's',
        representation: 'S',
        type: 'variable',
        position: 6,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
    ],
    friendlyExpression: [
      {
        input: 'G',
        representation: 'G',
        type: 'variable',
        position: 0,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 1,
      },
      {
        input: 'S',
        representation: 'S',
        type: 'variable',
        position: 2,
      },
    ],
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Var,
          values: 'G',
        },
        {
          operator: PropositionalOperator.Var,
          values: 'S',
        },
      ],
    },
    comment: {
      en: 'test',
      ru: 'test',
    },
    formulaBase: NPFormulaBase.Shortcut,
    assumptionId: null,
  },
  {
    level: 0,
    assumptionId: null,
    rawInput: 'f, g=>s',
    step: 2,
    id: '91f9a8a4-7b46-9a81-777e-a4cb9035baa0',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'f',
        representation: 'F',
        type: 'variable',
        position: 2,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 3,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 4,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 5,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 6,
      },
      {
        input: 'g',
        representation: 'G',
        type: 'variable',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 9,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 10,
      },
      {
        input: 's',
        representation: 'S',
        type: 'variable',
        position: 11,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 12,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 13,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 14,
      },
    ],
    formula: {
      operator: PropositionalOperator.Or,
      values: [
        {
          operator: PropositionalOperator.Var,
          values: 'F',
        },
        {
          operator: PropositionalOperator.Implies,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'G',
            },
            {
              operator: PropositionalOperator.Var,
              values: 'S',
            },
          ],
        },
      ],
    },
    friendlyExpression: [
      {
        input: 'F',
        representation: 'F',
        type: 'variable',
        position: 0,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 1,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 2,
      },
      {
        input: 'G',
        representation: 'G',
        type: 'variable',
        position: 3,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 4,
      },
      {
        input: 'S',
        representation: 'S',
        type: 'variable',
        position: 5,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 6,
      },
    ],
    comment: {
      en: 'DI: 1',
      ru: 'ВД: 1',
    },
    dependentOn: ['d5cbb748-a8a8-070d-cd6a-0de5bd885f85'],
    formulaBase: NPFormulaBase.DI,
  },
  {
    level: 0,
    assumptionId: null,
    rawInput: 'g=>s, f',
    step: 3,
    id: '1d6686a5-e434-32db-bb1e-7b0466f1bcb4',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 2,
      },
      {
        input: 'g',
        representation: 'G',
        type: 'variable',
        position: 3,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 4,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 5,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 6,
      },
      {
        input: 's',
        representation: 'S',
        type: 'variable',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 9,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 10,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 11,
      },
      {
        input: 'f',
        representation: 'F',
        type: 'variable',
        position: 12,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 13,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 14,
      },
    ],
    formula: {
      operator: PropositionalOperator.Or,
      values: [
        {
          operator: PropositionalOperator.Implies,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'G',
            },
            {
              operator: PropositionalOperator.Var,
              values: 'S',
            },
          ],
        },
        {
          operator: PropositionalOperator.Var,
          values: 'F',
        },
      ],
    },
    friendlyExpression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: 'G',
        representation: 'G',
        type: 'variable',
        position: 1,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 2,
      },
      {
        input: 'S',
        representation: 'S',
        type: 'variable',
        position: 3,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 4,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 5,
      },
      {
        input: 'F',
        representation: 'F',
        type: 'variable',
        position: 6,
      },
    ],
    comment: {
      en: 'DI: 1',
      ru: 'ВД: 1',
    },
    dependentOn: ['d5cbb748-a8a8-070d-cd6a-0de5bd885f85'],
    formulaBase: NPFormulaBase.DI,
  },
];

const npTableDE: NaturalProofsTableItem[] = [
  {
    level: 0,
    id: '2c88a0eb-e63b-74c5-820b-b9509d676abf',
    step: 1,
    rawInput: 'F|~G',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'F',
        representation: 'F',
        type: 'variable',
        position: 2,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 3,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 4,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 5,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 6,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 7,
      },
      {
        input: 'G',
        representation: 'G',
        type: 'variable',
        position: 8,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 9,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 10,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 11,
      },
    ],
    friendlyExpression: [
      {
        input: 'F',
        representation: 'F',
        type: 'variable',
        position: 0,
      },
      {
        input: '|',
        representation: '∨',
        type: 'operator',
        position: 1,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 2,
      },
      {
        input: 'G',
        representation: 'G',
        type: 'variable',
        position: 3,
      },
    ],
    formula: {
      operator: PropositionalOperator.Or,
      values: [
        {
          operator: PropositionalOperator.Var,
          values: 'F',
        },
        {
          operator: PropositionalOperator.Not,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'G',
            },
          ],
        },
      ],
    },
    comment: {
      en: 'Premise',
      ru: 'Посылка',
    },
    formulaBase: NPFormulaBase.Premise,
    assumptionId: null,
  },
  {
    level: 1,
    id: '29edca18-683a-e934-3e36-d3a88a8fddea',
    step: 2,
    rawInput: 'F=>H',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'F',
        representation: 'F',
        type: 'variable',
        position: 2,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 3,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 4,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 5,
      },
      {
        input: 'H',
        representation: 'H',
        type: 'variable',
        position: 6,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 7,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 8,
      },
    ],
    friendlyExpression: [
      {
        input: 'F',
        representation: 'F',
        type: 'variable',
        position: 0,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 1,
      },
      {
        input: 'H',
        representation: 'H',
        type: 'variable',
        position: 2,
      },
    ],
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Var,
          values: 'F',
        },
        {
          operator: PropositionalOperator.Var,
          values: 'H',
        },
      ],
    },
    comment: {
      en: 'Assumption',
      ru: 'Гипотеза',
    },
    formulaBase: NPFormulaBase.Assumption,
    assumptionId: '13776b76-5743-f0bd-cf13-e6fd7e100a15',
  },
  {
    level: 2,
    id: '886ecb16-d438-54f2-1f56-ce0a86e70376',
    step: 3,
    rawInput: '~G=>H',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 2,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 3,
      },
      {
        input: 'G',
        representation: 'G',
        type: 'variable',
        position: 4,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 5,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 6,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 7,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 8,
      },
      {
        input: 'H',
        representation: 'H',
        type: 'variable',
        position: 9,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 10,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 11,
      },
    ],
    friendlyExpression: [
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 0,
      },
      {
        input: 'G',
        representation: 'G',
        type: 'variable',
        position: 1,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 2,
      },
      {
        input: 'H',
        representation: 'H',
        type: 'variable',
        position: 3,
      },
    ],
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Not,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'G',
            },
          ],
        },
        {
          operator: PropositionalOperator.Var,
          values: 'H',
        },
      ],
    },
    comment: {
      en: 'Assumption',
      ru: 'Гипотеза',
    },
    formulaBase: NPFormulaBase.Assumption,
    assumptionId: '677c7b86-1fe2-010d-a4a9-5c6b86f73683',
  },
  {
    level: 2,
    assumptionId: '677c7b86-1fe2-010d-a4a9-5c6b86f73683',
    step: 4,
    id: 'f24ab6ec-3edd-f1e1-7257-663478bcce7d',
    rawInput: 'F|~G, F=>H, ~G=>H',
    formulaBase: NPFormulaBase.DE,
    dependentOn: ['2c88a0eb-e63b-74c5-820b-b9509d676abf', '29edca18-683a-e934-3e36-d3a88a8fddea', '886ecb16-d438-54f2-1f56-ce0a86e70376'],
    comment: {
      en: 'DE: 1, 2, 3',
      ru: 'УД: 1, 2, 3',
    },
    formula: {
      operator: PropositionalOperator.Var,
      values: 'H',
    },
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: 'H',
        representation: 'H',
        type: 'variable',
        position: 1,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 2,
      },
    ],
    friendlyExpression: [
      {
        input: 'H',
        representation: 'H',
        type: 'variable',
        position: 0,
      },
    ],
  },
];

const npTableEIandEE: NaturalProofsTableItem[] = [
  {
    level: 0,
    id: '8225e578-c111-a59a-b938-29d35e033ca5',
    step: 1,
    rawInput: 'p=>~r',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'p',
        representation: 'P',
        type: 'variable',
        position: 2,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 3,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 4,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 5,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 6,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 7,
      },
      {
        input: 'r',
        representation: 'R',
        type: 'variable',
        position: 8,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 9,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 10,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 11,
      },
    ],
    friendlyExpression: [
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 0,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 1,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 2,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 3,
      },
    ],
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Var,
          values: 'P',
        },
        {
          operator: PropositionalOperator.Not,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'R',
            },
          ],
        },
      ],
    },
    comment: {
      en: 'Premise',
      ru: 'Посылка',
    },
    formulaBase: NPFormulaBase.Premise,
    assumptionId: null,
  },
  {
    level: 1,
    id: 'dfb5359a-408c-0e5d-b0c4-9040132829f1',
    step: 2,
    rawInput: '~r=>p',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 2,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 3,
      },
      {
        input: 'r',
        representation: 'R',
        type: 'variable',
        position: 4,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 5,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 6,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 7,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 8,
      },
      {
        input: 'p',
        representation: 'P',
        type: 'variable',
        position: 9,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 10,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 11,
      },
    ],
    friendlyExpression: [
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 0,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 1,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 2,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 3,
      },
    ],
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Not,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'R',
            },
          ],
        },
        {
          operator: PropositionalOperator.Var,
          values: 'P',
        },
      ],
    },
    comment: {
      en: 'Assumption',
      ru: 'Гипотеза',
    },
    formulaBase: NPFormulaBase.Assumption,
    assumptionId: 'aa48a551-d560-0552-1a03-200d49c729e5',
  },
  {
    level: 1,
    assumptionId: 'aa48a551-d560-0552-1a03-200d49c729e5',
    rawInput: 'p=>~r, ~r=>p',
    step: 3,
    id: 'aae75b8a-a3de-e1bb-1cee-2731b301cb4f',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 2,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 3,
      },
      {
        input: '<=>',
        representation: '⇔',
        type: 'operator',
        position: 4,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 5,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 6,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 7,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 8,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 9,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 10,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 11,
      },
    ],
    formula: {
      operator: PropositionalOperator.Equiv,
      values: [
        {
          operator: PropositionalOperator.Var,
          values: 'P',
        },
        {
          operator: PropositionalOperator.Not,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'R',
            },
          ],
        },
      ],
    },
    friendlyExpression: [
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 0,
      },
      {
        input: '<=>',
        representation: '⇔',
        type: 'operator',
        position: 1,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 2,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 3,
      },
    ],
    comment: {
      en: 'EI: 1, 2',
      ru: 'ВЭ: 1, 2',
    },
    dependentOn: ['8225e578-c111-a59a-b938-29d35e033ca5', 'dfb5359a-408c-0e5d-b0c4-9040132829f1'],
    formulaBase: NPFormulaBase.EI,
  },
  {
    level: 1,
    assumptionId: 'aa48a551-d560-0552-1a03-200d49c729e5',
    rawInput: '~r=>p, p=>~r',
    step: 4,
    id: '11b39e34-2528-e358-95f3-9063fafad35b',
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 2,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 3,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 4,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 5,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 6,
      },
      {
        input: '<=>',
        representation: '⇔',
        type: 'operator',
        position: 7,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 8,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 9,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 10,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 11,
      },
    ],
    formula: {
      operator: PropositionalOperator.Equiv,
      values: [
        {
          operator: PropositionalOperator.Not,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'R',
            },
          ],
        },
        {
          operator: PropositionalOperator.Var,
          values: 'P',
        },
      ],
    },
    friendlyExpression: [
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 0,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 1,
      },
      {
        input: '<=>',
        representation: '⇔',
        type: 'operator',
        position: 2,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 3,
      },
    ],
    comment: {
      en: 'EI: 1, 2',
      ru: 'ВЭ: 1, 2',
    },
    dependentOn: ['8225e578-c111-a59a-b938-29d35e033ca5', 'dfb5359a-408c-0e5d-b0c4-9040132829f1'],
    formulaBase: NPFormulaBase.EI,
  },
  {
    step: 5,
    assumptionId: 'aa48a551-d560-0552-1a03-200d49c729e5',
    id: 'cceaa02d-4ba0-16fa-054b-b18058f7e897',
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Not,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'R',
            },
          ],
        },
        {
          operator: PropositionalOperator.Var,
          values: 'P',
        },
      ],
    },
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 2,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 3,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 4,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 5,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 6,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 7,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 8,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 9,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 10,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 11,
      },
    ],
    friendlyExpression: [
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 0,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 1,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 2,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 3,
      },
    ],
    level: 1,
    rawInput: '~r=>p, p=>~r',
    comment: {
      en: 'EE: 4',
      ru: 'УЭ: 4',
    },
    dependentOn: ['11b39e34-2528-e358-95f3-9063fafad35b'],
    formulaBase: NPFormulaBase.EE,
  },
  {
    step: 6,
    assumptionId: 'aa48a551-d560-0552-1a03-200d49c729e5',
    id: '479f7190-761e-c64f-a286-93734fbea4ab',
    formula: {
      operator: PropositionalOperator.Implies,
      values: [
        {
          operator: PropositionalOperator.Var,
          values: 'P',
        },
        {
          operator: PropositionalOperator.Not,
          values: [
            {
              operator: PropositionalOperator.Var,
              values: 'R',
            },
          ],
        },
      ],
    },
    expression: [
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 0,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 1,
      },
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 2,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 3,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 4,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 5,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 6,
      },
      {
        input: '(',
        representation: '(',
        type: 'parentheses',
        position: 7,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 8,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 9,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 10,
      },
      {
        input: ')',
        representation: ')',
        type: 'parentheses',
        position: 11,
      },
    ],
    friendlyExpression: [
      {
        input: 'P',
        representation: 'P',
        type: 'variable',
        position: 0,
      },
      {
        input: '=>',
        representation: '⇒',
        type: 'operator',
        position: 1,
      },
      {
        input: '~',
        representation: '¬',
        type: 'operator',
        position: 2,
      },
      {
        input: 'R',
        representation: 'R',
        type: 'variable',
        position: 3,
      },
    ],
    level: 1,
    rawInput: '~r=>p, p=>~r',
    comment: {
      en: 'EE: 4',
      ru: 'УЭ: 4',
    },
    dependentOn: ['11b39e34-2528-e358-95f3-9063fafad35b'],
    formulaBase: NPFormulaBase.EE,
  },
];

const dpIEtoXML =
  '<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n<propositionsDirectProof><tableItem><id>46ee5155-6d49-15fe-bb27-0a69129216f8</id><step>1</step><rawInput>p|q</rawInput><comment><en>Premise</en><ru>Посылка</ru></comment><dependentOn></dependentOn><propositionalFormula><operator>OR</operator><values><propositionalFormula><operator>VAR</operator><values>P</values></propositionalFormula><propositionalFormula><operator>VAR</operator><values>Q</values></propositionalFormula></values></propositionalFormula><propositionalExpression><propositionalSymbol><input>(</input><type>parentheses</type><position>0</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>1</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>p</input><type>variable</type><position>2</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>3</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>|</input><type>operator</type><position>4</position><representation>∨</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>5</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>q</input><type>variable</type><position>6</position><representation>Q</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>7</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>8</position><representation>)</representation></propositionalSymbol></propositionalExpression><propositionalExpression><propositionalSymbol><input>P</input><type>variable</type><position>0</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>|</input><type>operator</type><position>1</position><representation>∨</representation></propositionalSymbol><propositionalSymbol><input>Q</input><type>variable</type><position>2</position><representation>Q</representation></propositionalSymbol></propositionalExpression></tableItem><tableItem><id>6e7c7249-ba8c-7007-28a5-4550903bc36b</id><step>2</step><rawInput>p|q, r</rawInput><comment><en>IC</en><ru>ВИ</ru></comment><dependentOn></dependentOn><propositionalFormula><operator>IMPLIES</operator><values><propositionalFormula><operator>OR</operator><values><propositionalFormula><operator>VAR</operator><values>P</values></propositionalFormula><propositionalFormula><operator>VAR</operator><values>Q</values></propositionalFormula></values></propositionalFormula><propositionalFormula><operator>IMPLIES</operator><values><propositionalFormula><operator>VAR</operator><values>R</values></propositionalFormula><propositionalFormula><operator>OR</operator><values><propositionalFormula><operator>VAR</operator><values>P</values></propositionalFormula><propositionalFormula><operator>VAR</operator><values>Q</values></propositionalFormula></values></propositionalFormula></values></propositionalFormula></values></propositionalFormula><propositionalExpression><propositionalSymbol><input>(</input><type>parentheses</type><position>0</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>1</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>2</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>p</input><type>variable</type><position>3</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>4</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>|</input><type>operator</type><position>5</position><representation>∨</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>6</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>q</input><type>variable</type><position>7</position><representation>Q</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>8</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>9</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>=></input><type>operator</type><position>10</position><representation>⇒</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>11</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>12</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>r</input><type>variable</type><position>13</position><representation>R</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>14</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>=></input><type>operator</type><position>15</position><representation>⇒</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>16</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>17</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>p</input><type>variable</type><position>18</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>19</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>|</input><type>operator</type><position>20</position><representation>∨</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>21</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>q</input><type>variable</type><position>22</position><representation>Q</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>23</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>24</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>25</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>26</position><representation>)</representation></propositionalSymbol></propositionalExpression><propositionalExpression><propositionalSymbol><input>(</input><type>parentheses</type><position>0</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>P</input><type>variable</type><position>1</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>|</input><type>operator</type><position>2</position><representation>∨</representation></propositionalSymbol><propositionalSymbol><input>Q</input><type>variable</type><position>3</position><representation>Q</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>4</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>=></input><type>operator</type><position>5</position><representation>⇒</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>6</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>R</input><type>variable</type><position>7</position><representation>R</representation></propositionalSymbol><propositionalSymbol><input>=></input><type>operator</type><position>8</position><representation>⇒</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>9</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>P</input><type>variable</type><position>10</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>|</input><type>operator</type><position>11</position><representation>∨</representation></propositionalSymbol><propositionalSymbol><input>Q</input><type>variable</type><position>12</position><representation>Q</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>13</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>14</position><representation>)</representation></propositionalSymbol></propositionalExpression></tableItem><tableItem><id>37990773-8e55-2dd9-50f9-bd5d63d7a392</id><step>3</step><rawInput>p|q, p|q, r</rawInput><comment><en>IE: 1, 2</en><ru>УИ: 1, 2</ru></comment><dependentOn><id>46ee5155-6d49-15fe-bb27-0a69129216f8</id><id>6e7c7249-ba8c-7007-28a5-4550903bc36b</id></dependentOn><propositionalFormula><operator>IMPLIES</operator><values><propositionalFormula><operator>VAR</operator><values>R</values></propositionalFormula><propositionalFormula><operator>OR</operator><values><propositionalFormula><operator>VAR</operator><values>P</values></propositionalFormula><propositionalFormula><operator>VAR</operator><values>Q</values></propositionalFormula></values></propositionalFormula></values></propositionalFormula><propositionalExpression><propositionalSymbol><input>(</input><type>parentheses</type><position>0</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>1</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>R</input><type>variable</type><position>2</position><representation>R</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>3</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>=></input><type>operator</type><position>4</position><representation>⇒</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>5</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>6</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>P</input><type>variable</type><position>7</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>8</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>|</input><type>operator</type><position>9</position><representation>∨</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>10</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>Q</input><type>variable</type><position>11</position><representation>Q</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>12</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>13</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>14</position><representation>)</representation></propositionalSymbol></propositionalExpression><propositionalExpression><propositionalSymbol><input>R</input><type>variable</type><position>0</position><representation>R</representation></propositionalSymbol><propositionalSymbol><input>=></input><type>operator</type><position>1</position><representation>⇒</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>2</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>P</input><type>variable</type><position>3</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>|</input><type>operator</type><position>4</position><representation>∨</representation></propositionalSymbol><propositionalSymbol><input>Q</input><type>variable</type><position>5</position><representation>Q</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>6</position><representation>)</representation></propositionalSymbol></propositionalExpression></tableItem></propositionsDirectProof>';

const npIEandIItoXML =
  '<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n<propositionsNaturalProof><tableItem><id>2ce24bb1-0be0-c5f5-b167-c2262758e327</id><step>1</step><rawInput>p&r</rawInput><comment><en>Premise</en><ru>Посылка</ru></comment><dependentOn></dependentOn><propositionalFormula><operator>AND</operator><values><propositionalFormula><operator>VAR</operator><values>P</values></propositionalFormula><propositionalFormula><operator>VAR</operator><values>R</values></propositionalFormula></values></propositionalFormula><propositionalExpression><propositionalSymbol><input>(</input><type>parentheses</type><position>0</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>1</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>p</input><type>variable</type><position>2</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>3</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>&</input><type>operator</type><position>4</position><representation>∧</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>5</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>r</input><type>variable</type><position>6</position><representation>R</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>7</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>8</position><representation>)</representation></propositionalSymbol></propositionalExpression><propositionalExpression><propositionalSymbol><input>P</input><type>variable</type><position>0</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>&</input><type>operator</type><position>1</position><representation>∧</representation></propositionalSymbol><propositionalSymbol><input>R</input><type>variable</type><position>2</position><representation>R</representation></propositionalSymbol></propositionalExpression></tableItem><tableItem><id>d02b2fc7-befd-0c83-1e1e-ea5c49e736df</id><step>2</step><rawInput>p&r=>q</rawInput><comment><en>Assumption</en><ru>Гипотеза</ru></comment><dependentOn></dependentOn><propositionalFormula><operator>IMPLIES</operator><values><propositionalFormula><operator>AND</operator><values><propositionalFormula><operator>VAR</operator><values>P</values></propositionalFormula><propositionalFormula><operator>VAR</operator><values>R</values></propositionalFormula></values></propositionalFormula><propositionalFormula><operator>VAR</operator><values>Q</values></propositionalFormula></values></propositionalFormula><propositionalExpression><propositionalSymbol><input>(</input><type>parentheses</type><position>0</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>1</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>2</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>p</input><type>variable</type><position>3</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>4</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>&</input><type>operator</type><position>5</position><representation>∧</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>6</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>r</input><type>variable</type><position>7</position><representation>R</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>8</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>9</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>=></input><type>operator</type><position>10</position><representation>⇒</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>11</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>q</input><type>variable</type><position>12</position><representation>Q</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>13</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>14</position><representation>)</representation></propositionalSymbol></propositionalExpression><propositionalExpression><propositionalSymbol><input>(</input><type>parentheses</type><position>0</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>P</input><type>variable</type><position>1</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>&</input><type>operator</type><position>2</position><representation>∧</representation></propositionalSymbol><propositionalSymbol><input>R</input><type>variable</type><position>3</position><representation>R</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>4</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>=></input><type>operator</type><position>5</position><representation>⇒</representation></propositionalSymbol><propositionalSymbol><input>Q</input><type>variable</type><position>6</position><representation>Q</representation></propositionalSymbol></propositionalExpression></tableItem><tableItem><id>95f81e22-d097-25ec-d721-ba28dd968359</id><step>3</step><rawInput>p&r, p&r=>q</rawInput><comment><en>IE: 1, 2</en><ru>УИ: 1, 2</ru></comment><dependentOn><id>2ce24bb1-0be0-c5f5-b167-c2262758e327</id><id>d02b2fc7-befd-0c83-1e1e-ea5c49e736df</id></dependentOn><propositionalFormula><operator>VAR</operator><values>Q</values></propositionalFormula><propositionalExpression><propositionalSymbol><input>(</input><type>parentheses</type><position>0</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>Q</input><type>variable</type><position>1</position><representation>Q</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>2</position><representation>)</representation></propositionalSymbol></propositionalExpression><propositionalExpression><propositionalSymbol><input>Q</input><type>variable</type><position>0</position><representation>Q</representation></propositionalSymbol></propositionalExpression></tableItem><tableItem><id>f92597c6-7a1f-d8cf-6de1-3039ae303159</id><step>4</step><rawInput>p&r=>q, p&r, p&r=>q</rawInput><comment><en>II: 2, 3</en><ru>ВИ: 2, 3</ru></comment><dependentOn><id>d02b2fc7-befd-0c83-1e1e-ea5c49e736df</id><id>95f81e22-d097-25ec-d721-ba28dd968359</id></dependentOn><propositionalFormula><operator>IMPLIES</operator><values><propositionalFormula><operator>IMPLIES</operator><values><propositionalFormula><operator>AND</operator><values><propositionalFormula><operator>VAR</operator><values>P</values></propositionalFormula><propositionalFormula><operator>VAR</operator><values>R</values></propositionalFormula></values></propositionalFormula><propositionalFormula><operator>VAR</operator><values>Q</values></propositionalFormula></values></propositionalFormula><propositionalFormula><operator>VAR</operator><values>Q</values></propositionalFormula></values></propositionalFormula><propositionalExpression><propositionalSymbol><input>(</input><type>parentheses</type><position>0</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>1</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>2</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>3</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>P</input><type>variable</type><position>4</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>5</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>&</input><type>operator</type><position>6</position><representation>∧</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>7</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>R</input><type>variable</type><position>8</position><representation>R</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>9</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>10</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>=></input><type>operator</type><position>11</position><representation>⇒</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>12</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>Q</input><type>variable</type><position>13</position><representation>Q</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>14</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>15</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>=></input><type>operator</type><position>16</position><representation>⇒</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>17</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>Q</input><type>variable</type><position>18</position><representation>Q</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>19</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>20</position><representation>)</representation></propositionalSymbol></propositionalExpression><propositionalExpression><propositionalSymbol><input>(</input><type>parentheses</type><position>0</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>(</input><type>parentheses</type><position>1</position><representation>(</representation></propositionalSymbol><propositionalSymbol><input>P</input><type>variable</type><position>2</position><representation>P</representation></propositionalSymbol><propositionalSymbol><input>&</input><type>operator</type><position>3</position><representation>∧</representation></propositionalSymbol><propositionalSymbol><input>R</input><type>variable</type><position>4</position><representation>R</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>5</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>=></input><type>operator</type><position>6</position><representation>⇒</representation></propositionalSymbol><propositionalSymbol><input>Q</input><type>variable</type><position>7</position><representation>Q</representation></propositionalSymbol><propositionalSymbol><input>)</input><type>parentheses</type><position>8</position><representation>)</representation></propositionalSymbol><propositionalSymbol><input>=></input><type>operator</type><position>9</position><representation>⇒</representation></propositionalSymbol><propositionalSymbol><input>Q</input><type>variable</type><position>10</position><representation>Q</representation></propositionalSymbol></propositionalExpression></tableItem></propositionsNaturalProof>';

const error = new PropositionalError(`Cannot convert this expression to a formula.`, errorsTexts.semanticError);

const propositionsTableItems = {
  dpTableDataIE,
  npTableDataIEandII,
  npTableCIandCE,
  npTableNIandNE,
  npTableDI,
  npTableDE,
  npTableEIandEE,
  dpIEtoXML,
  npIEandIItoXML,
  error,
};

export default propositionsTableItems;
