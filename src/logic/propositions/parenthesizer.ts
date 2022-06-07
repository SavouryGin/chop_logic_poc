import constants from 'assets/const/propositions';
import searcher from './searcher';
import validator from './validator';
import { PropositionalError } from 'errors/propositional-error';
import { PropositionalExpression, PropositionalSymbol } from 'types';

const parenthesizer = {
  parenthesizeVariables(expression: PropositionalExpression): PropositionalExpression {
    const output: PropositionalExpression = [];

    for (const symbol of expression) {
      const isParenthesizingNeeded = symbol.type === 'variable' && !validator.isVariableParenthesized(symbol, expression);
      if (isParenthesizingNeeded) {
        output.push(
          constants.openParenthesisSymbol as PropositionalSymbol,
          symbol,
          constants.closeParenthesisSymbol as PropositionalSymbol,
        );
      } else {
        output.push(symbol);
      }
    }

    return this.renumberPositions(output);
  },

  parenthesizeNegations(expression: PropositionalExpression): PropositionalExpression {
    const openParenthesisPositions: number[] = [];
    const closeParenthesisPositions: number[] = [];

    const allNegations = expression.filter((item) => validator.isNegationSymbol(item));

    if (!allNegations.length) {
      return expression;
    }

    for (const negation of allNegations) {
      const { openIndex, closeIndex } = this.getNegationParenthesis(negation, expression);
      openParenthesisPositions.push(openIndex);
      closeParenthesisPositions.push(closeIndex);
    }

    return this.insertParenthesisByPositions(expression, openParenthesisPositions, closeParenthesisPositions);
  },

  getNegationParenthesis(negation: PropositionalSymbol, expression: PropositionalExpression): { openIndex: number; closeIndex: number } {
    if (validator.isNegationParenthesized(negation, expression)) {
      throw new PropositionalError('Error 1');
    }
    const nextSymbol = expression[negation.position + 1];

    if (!nextSymbol) {
      throw new PropositionalError('Error 2');
    }
    const closeParenthesis = searcher.findMatchingCloseParenthesis(expression, nextSymbol);

    if (!closeParenthesis) {
      throw new PropositionalError('Error 3');
    }

    return { openIndex: negation.position === 0 ? 0 : negation.position - 1, closeIndex: closeParenthesis.position };
  },

  parenthesizeBinaryOperators(expression: PropositionalExpression): PropositionalExpression {
    const output: PropositionalExpression = [];
    const closeParenthesisPositions: number[] = [];
    const openParenthesisPositions: number[] = [];

    for (let i = 0; i < expression.length; i++) {
      const symbol = expression[i];
      const isParenthesizingNeeded = validator.isBinarySymbol(symbol) && !validator.isBinaryOperatorParenthesized(symbol, expression);

      if (isParenthesizingNeeded) {
        const nextSymbol = expression[i + 1];
        const previousSymbol = expression[i - 1];
        if (!nextSymbol || !previousSymbol) {
          continue;
        }
        const closeParenthesis = searcher.findMatchingCloseParenthesis(expression, nextSymbol);
        const openParenthesis = searcher.findMatchingOpenParenthesis(expression, previousSymbol);
        if (closeParenthesis && openParenthesis) {
          closeParenthesisPositions.push(closeParenthesis.position);
          openParenthesisPositions.push(openParenthesis.position);
        }

        output.push(symbol);
      } else {
        output.push(symbol);
      }
    }

    return this.insertParenthesisByPositions(output, openParenthesisPositions, closeParenthesisPositions);
  },

  insertParenthesisByPositions(
    expression: PropositionalExpression,
    openPositions: number[] = [],
    closePositions: number[] = [],
  ): PropositionalExpression {
    const output: PropositionalExpression = [];
    for (const symbol of expression) {
      if (closePositions.includes(symbol.position)) {
        output.push(symbol, constants.closeParenthesisSymbol as PropositionalSymbol);
      } else if (openPositions.includes(symbol.position)) {
        output.push(constants.openParenthesisSymbol as PropositionalSymbol, symbol);
      } else {
        output.push(symbol);
      }
    }

    return this.renumberPositions(output);
  },

  renumberPositions(input: PropositionalExpression): PropositionalExpression {
    return input.map((item, index) => {
      return { ...item, position: index };
    });
  },
};

export default Object.freeze(parenthesizer);
