import converter from './converter';
import regExes from 'helpers/regular-expressions';
import { DirectProofsTableItem } from 'store/propositions/direct-proofs/interfaces';
import { LocalText, PropositionalExpression, PropositionalSymbol, PropositionalSymbolType } from 'types';
import { NPFormulaBase } from 'enums';
import { NaturalProofsTableItem } from 'store/propositions/natural-proofs/interfaces';
import { PropositionalError } from 'errors/propositional-error';
import { XMLTag } from 'enums/xml-tags';
import { errorsTexts } from 'texts';
import { languageStringOptions } from 'presets/settings';

const removeDeclaration = (input: string): string => input.replace(regExes.xmlDeclaration, '');

const parseStep = (input: string): number => {
  const value = +input.replace(XMLTag.StepOpen, '').replace(XMLTag.StepClose, '');

  if (isNaN(value)) {
    throw new PropositionalError('Cannot convert the step value from XML tag.', errorsTexts.semanticError);
  }

  return value;
};

const parseLevel = (input: string): number => {
  const value = +input.replace(XMLTag.LevelOpen, '').replace(XMLTag.LevelClose, '');

  if (isNaN(value)) {
    throw new PropositionalError('Cannot convert the step value from XML tag.', errorsTexts.semanticError);
  }

  return value;
};

const parseFormulaBase = (input: string): NPFormulaBase =>
  input.replace(XMLTag.FBaseOpen, '').replace(XMLTag.FBaseClose, '') as NPFormulaBase;

const parseAssumptionId = (input: string): string | null => {
  const value = input.replace(XMLTag.AIDOpen, '').replace(XMLTag.AIDClose, '');

  if (value === 'null') {
    return null;
  } else {
    return value;
  }
};

const parseRawInput = (input: string): string => input.replace(XMLTag.RInputOpen, '').replace(XMLTag.RInputClose, '');

const parseId = (input: string): string => input.replace(XMLTag.IdOpen, '').replace(XMLTag.IdClose, '');

const parseExpressionInput = (input: string): string => input.replace(XMLTag.InputOpen, '').replace(XMLTag.InputClose, '');

const parseExpressionRepresentation = (input: string): string => input.replace(XMLTag.RepresentOpen, '').replace(XMLTag.RepresentClose, '');

const parseExpressionType = (input: string): string => input.replace(XMLTag.TypeOpen, '').replace(XMLTag.TypeClose, '');

const parseExpressionPosition = (input: string): number => {
  const value = +input.replace(XMLTag.PositionOpen, '').replace(XMLTag.PositionClose, '');

  if (isNaN(value)) {
    throw new PropositionalError('Cannot convert the step value from XML tag.', errorsTexts.semanticError);
  }

  return value;
};

const parsePropositionalSymbol = (input: string): PropositionalSymbol => {
  const values = input.replace(XMLTag.PSymbolOpen, '').replace(XMLTag.PSymbolClose, '');

  const inputMatch = values.match(new RegExp(XMLTag.InputOpen + '.*' + XMLTag.InputClose, 'i'))![0];
  const representationMatch = values.match(new RegExp(XMLTag.RepresentOpen + '.*' + XMLTag.RepresentClose, 'i'))![0];
  const typeMatch = values.match(new RegExp(XMLTag.TypeOpen + '.*' + XMLTag.TypeClose, 'i'))![0];
  const positionMatch = values.match(new RegExp(XMLTag.PositionOpen + '.*' + XMLTag.PositionClose, 'i'))![0];

  return {
    input: parseExpressionInput(inputMatch),
    representation: parseExpressionRepresentation(representationMatch),
    type: parseExpressionType(typeMatch) as PropositionalSymbolType,
    position: parseExpressionPosition(positionMatch),
  };
};

const parsePropositionalExpression = (input: string): PropositionalExpression => {
  const value = input.replace(XMLTag.PExpressionOpen, '').replace(XMLTag.PExpressionClose, '');
  const symbolsStrings = value.split(new RegExp('(?=' + XMLTag.PSymbolOpen + ')', 'g'));
  const result: PropositionalExpression = [];

  for (const item of symbolsStrings) {
    try {
      const symbol = parsePropositionalSymbol(item);
      result.push(symbol);
    } catch (error: unknown) {
      console.error(error);
      throw new PropositionalError(`Cannot convert the propositional symbol from "${item}"`, errorsTexts.semanticError);
    }
  }

  return result;
};

const parseComment = (input: string): LocalText | string => {
  const value = input.replace(XMLTag.CommentOpen, '').replace(XMLTag.CommentClose, '');
  const localTextResult: any = {};

  for (const lang of languageStringOptions) {
    // Check if value is a simple string
    if (value.indexOf(lang) === -1) {
      return value;
    } else {
      // Extract the local comment text
      const localComment = value.match(new RegExp(`<${lang}>` + '.*' + `</${lang}>`, 'i'))![0];
      const text = localComment.replace(`<${lang}>`, '').replace(`</${lang}>`, '');

      localTextResult[lang] = text;
    }
  }

  return localTextResult as LocalText;
};

const parseDPTableItem = (input: string): DirectProofsTableItem => {
  const value = input.replace(XMLTag.TItemOpen, '').replace(XMLTag.TItemClose, '');

  try {
    const idMatch = value.match(new RegExp(XMLTag.IdOpen + '.*' + XMLTag.IdClose, 'i'))![0];
    const stepMatch = value.match(new RegExp(XMLTag.StepOpen + '.*' + XMLTag.StepClose, 'i'))![0];
    const rawInputMatch = value.match(new RegExp(XMLTag.RInputOpen + '.*' + XMLTag.RInputClose, 'i'))![0];
    const expressionMatch = value.match(new RegExp(XMLTag.PExpressionOpen + '.*' + XMLTag.PExpressionClose, 'i'))![0];
    const commentMatch = value.match(new RegExp(XMLTag.CommentOpen + '.*' + XMLTag.CommentClose, 'i'))![0];

    const id = parseId(idMatch);
    const step = parseStep(stepMatch);
    const rawInput = parseRawInput(rawInputMatch);
    const expression = parsePropositionalExpression(expressionMatch);
    const comment = parseComment(commentMatch);
    const formula = converter.convertExpressionToFormula(expression);
    const friendlyExpression = converter.convertFormulaToUserFriendlyExpression(formula);

    return {
      id,
      step,
      rawInput,
      expression,
      comment,
      formula,
      friendlyExpression,
      dependentOn: null,
    };
  } catch (error: unknown) {
    console.error(error);
    throw new PropositionalError('Cannot convert the table item from XML.', errorsTexts.semanticError);
  }
};

const parseNPTableItem = (input: string): NaturalProofsTableItem => {
  const value = input.replace(XMLTag.TItemOpen, '').replace(XMLTag.TItemClose, '');

  try {
    const idMatch = value.match(new RegExp(XMLTag.IdOpen + '.*' + XMLTag.IdClose, 'i'))![0];
    const stepMatch = value.match(new RegExp(XMLTag.StepOpen + '.*' + XMLTag.StepClose, 'i'))![0];
    const rawInputMatch = value.match(new RegExp(XMLTag.RInputOpen + '.*' + XMLTag.RInputClose, 'i'))![0];
    const expressionMatch = value.match(new RegExp(XMLTag.PExpressionOpen + '.*' + XMLTag.PExpressionClose, 'i'))![0];
    const commentMatch = value.match(new RegExp(XMLTag.CommentOpen + '.*' + XMLTag.CommentClose, 'i'))![0];
    const levelMatch = value.match(new RegExp(XMLTag.LevelOpen + '.*' + XMLTag.LevelClose, 'i'))![0];
    const formulaBaseMatch = value.match(new RegExp(XMLTag.FBaseOpen + '.*' + XMLTag.FBaseClose, 'i'))![0];
    const assumptionIdMatch = value.match(new RegExp(XMLTag.AIDOpen + '.*' + XMLTag.AIDClose, 'i'))![0];

    const id = parseId(idMatch);
    const step = parseStep(stepMatch);
    const rawInput = parseRawInput(rawInputMatch);
    const expression = parsePropositionalExpression(expressionMatch);
    const comment = parseComment(commentMatch);
    const level = parseLevel(levelMatch);
    const formulaBase = parseFormulaBase(formulaBaseMatch);
    const assumptionId = parseAssumptionId(assumptionIdMatch);
    const formula = converter.convertExpressionToFormula(expression);
    const friendlyExpression = converter.convertFormulaToUserFriendlyExpression(formula);

    return {
      id,
      step,
      rawInput,
      expression,
      comment,
      formula,
      friendlyExpression,
      level,
      formulaBase,
      assumptionId,
      dependentOn: null,
    };
  } catch (error: unknown) {
    console.error(error);
    throw new PropositionalError('Cannot convert the table item from XML.', errorsTexts.semanticError);
  }
};

const xmlToDPTableData = (input: string): DirectProofsTableItem[] => {
  const withoutDeclaration = removeDeclaration(input).trim();
  const withoutDPTag = withoutDeclaration.replace(XMLTag.DPOpen, '').replace(XMLTag.DPClose, '');

  const tableItems = withoutDPTag.split(new RegExp('(?=' + XMLTag.TItemOpen + ')', 'g'));
  console.log('tableItems', tableItems);

  return tableItems.map((item) => parseDPTableItem(item));
};

const xmlToNPTableData = (input: string): NaturalProofsTableItem[] => {
  const withoutDeclaration = removeDeclaration(input).trim();
  const withoutDPTag = withoutDeclaration.replace(XMLTag.DPOpen, '').replace(XMLTag.DPClose, '');

  const tableItems = withoutDPTag.split(new RegExp('(?=' + XMLTag.TItemOpen + ')', 'g'));

  return tableItems.map((item) => parseNPTableItem(item));
};

const parserXMLtoJS = {
  xmlToDPTableData,
  xmlToNPTableData,
};

export default Object.freeze(parserXMLtoJS);