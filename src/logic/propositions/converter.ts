import factory from './factory';
import parenthesizer from './parenthesizer';
import parser from './parser';
import validator from './validator';
import { LocalText, PropositionalExpression, PropositionalFormula } from 'types';
import { PropositionalError } from 'errors/propositional-error';
import { PropositionalOperator } from 'enums';
import { errorsTexts } from 'texts';

const converter = {
  convertStringToFormulaPreview(input: string): PropositionalExpression | LocalText {
    try {
      return this.convertStringToExpression(input);
    } catch (err: unknown) {
      return (err as PropositionalError).displayedErrorMessage;
    }
  },

  convertStringToExpression(input: string): PropositionalExpression {
    const charsArray = parser.getCharsArray(input);
    const preparedArray = parser.joinLogicalSymbols(charsArray);
    const expression = preparedArray.map((char, index) => factory.createPropositionalSymbol(char, index));
    const withVariables = parenthesizer.parenthesizeVariables(expression);
    const withNegations = parenthesizer.parenthesizeNegations(withVariables);

    return parenthesizer.parenthesizeBinaryOperators(withNegations);
  },

  convertExpressionToFormula(expression: PropositionalExpression): PropositionalFormula {
    const mainSymbol = parser.findMainOperator(expression);
    if (validator.isIncorrectMainSymbol(mainSymbol)) {
      throw new PropositionalError(`Cannot convert this expression to a formula.`, errorsTexts.semanticError);
    }
    const operator = factory.createOperator(mainSymbol);

    if (validator.isBinaryOperator(operator)) {
      const { firstArgument, secondArgument } = parser.splitExpressionByPosition(mainSymbol.position, expression);

      return factory.createBinary(
        operator,
        this.convertExpressionToFormula(firstArgument),
        this.convertExpressionToFormula(secondArgument),
      );
    } else if (operator === PropositionalOperator.Not) {
      const argument = expression.slice(2, expression.length - 1);

      return factory.createNegation(this.convertExpressionToFormula(argument));
    } else {
      return factory.createAtom(mainSymbol);
    }
  },

  convertToICExpression(firstVariable: string, secondVariable: string): PropositionalExpression {
    if (!firstVariable.length || !secondVariable.length) {
      return [];
    }
    const input = `${firstVariable} => (${secondVariable} => ${firstVariable})`;

    return this.convertStringToExpression(input);
  },
};

export default Object.freeze(converter);
