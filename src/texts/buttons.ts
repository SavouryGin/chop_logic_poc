import { ButtonID, LogicalSymbolHexCode } from 'enums';
import { ButtonText } from 'types';

export const buttonTexts: ButtonText = {
  [ButtonID.Cancel]: {
    title: { en: 'Cancel', ru: 'Отмена' },
  },
  [ButtonID.Navigation]: {
    title: { en: 'Navigation', ru: 'Навигация' },
  },
  [ButtonID.ColorTheme]: {
    title: { en: 'Color Theme', ru: 'Цветовая тема' },
  },
  [ButtonID.Sounds]: {
    title: { en: 'Sounds', ru: 'Звуки' },
  },
  [ButtonID.Settings]: {
    title: { en: 'Settings', ru: 'Настройки' },
  },
  [ButtonID.FullScreen]: {
    title: { en: 'Full Screen', ru: 'Полный экран' },
  },
  [ButtonID.Tools]: {
    title: { en: 'Tools', ru: 'Инструменты' },
  },
  [ButtonID.Apply]: {
    title: { en: 'Apply', ru: 'Применить' },
    innerText: { en: 'Apply', ru: 'Применить' },
  },
  [ButtonID.Premise]: {
    title: { en: 'Enter premise', ru: 'Ввести посылку' },
    innerText: { en: 'Premise', ru: 'Посылка' },
  },
  [ButtonID.Reiteration]: {
    title: { en: 'Reiterate proof step', ru: 'Повторить шаг доказательства' },
    innerText: { en: 'Reiteration', ru: 'Повтор' },
  },
  [ButtonID.Replace]: {
    title: { en: 'Replace symbol', ru: 'Заменить символ' },
    innerText: { en: 'Replace', ru: 'Заменить' },
  },
  [ButtonID.Delete]: {
    title: { en: 'Delete proof step', ru: 'Удалить шаг доказательства' },
    innerText: { en: 'Delete', ru: 'Удалить' },
  },
  [ButtonID.ImplicationCreation]: {
    title: { en: 'Implication Creation', ru: 'Введение импликации' },
    innerText: { en: 'Implication Creation', ru: 'Введение импликации' },
  },
  [ButtonID.ImplicationDistribution]: {
    title: { en: 'Implication Distribution', ru: 'Дистрибуция импликации' },
    innerText: { en: 'Implication Distribution', ru: 'Дистрибуция импликации' },
  },
  [ButtonID.ContradictionRealization]: {
    title: { en: 'Contradiction Realization', ru: 'Создание противоречия' },
    innerText: { en: 'Contradiction Realization', ru: 'Создание противоречия' },
  },
  [ButtonID.ImplicationElimination]: {
    title: { en: 'Implication Elimination', ru: 'Удаление импликации' },
    innerText: { en: 'Implication Elimination', ru: 'Удаление импликации' },
  },
  [ButtonID.Assumption]: {
    title: { en: 'Assumption', ru: 'Гипотеза' },
    innerText: { en: 'Assumption', ru: 'Гипотеза' },
  },
  [ButtonID.NotIntroduction]: {
    title: { en: 'Negation Introduction', ru: 'Введение отрицания' },
    innerText: { en: `${LogicalSymbolHexCode.Negation} I`, ru: `В ${LogicalSymbolHexCode.Negation}` },
  },
  [ButtonID.NotElimination]: {
    title: { en: 'Negation Elimination', ru: 'Удаление отрицания' },
    innerText: { en: `${LogicalSymbolHexCode.Negation} E`, ru: `У ${LogicalSymbolHexCode.Negation}` },
  },
  [ButtonID.AndIntroduction]: {
    title: { en: 'Conjunction Introduction', ru: 'Введение конъюнкции' },
    innerText: { en: `${LogicalSymbolHexCode.Conjunction} I`, ru: `В ${LogicalSymbolHexCode.Conjunction}` },
  },
  [ButtonID.AndElimination]: {
    title: { en: 'Conjunction Elimination', ru: 'Удаление конъюнкции' },
    innerText: { en: `${LogicalSymbolHexCode.Conjunction} E`, ru: `У ${LogicalSymbolHexCode.Conjunction}` },
  },
  [ButtonID.OrIntroduction]: {
    title: { en: 'Disjunction Introduction', ru: 'Введение дизъюнкции' },
    innerText: { en: `${LogicalSymbolHexCode.Disjunction} I`, ru: `В ${LogicalSymbolHexCode.Disjunction}` },
  },
  [ButtonID.OrElimination]: {
    title: { en: 'Disjunction Elimination', ru: 'Удаление дизъюнкции' },
    innerText: { en: `${LogicalSymbolHexCode.Disjunction} E`, ru: `У ${LogicalSymbolHexCode.Disjunction}` },
  },
  [ButtonID.ImpliesIntroduction]: {
    title: { en: 'Implication Introduction', ru: 'Введение импликации' },
    innerText: { en: `${LogicalSymbolHexCode.Implication} I`, ru: `В ${LogicalSymbolHexCode.Implication}` },
  },
  [ButtonID.ImpliesElimination]: {
    title: { en: 'Implication Elimination', ru: 'Удаление импликации' },
    innerText: { en: `${LogicalSymbolHexCode.Implication} E`, ru: `У ${LogicalSymbolHexCode.Implication}` },
  },
  [ButtonID.EquivIntroduction]: {
    title: { en: 'Equivalence Introduction', ru: 'Введение эквивалентности' },
    innerText: { en: `${LogicalSymbolHexCode.Equivalence} I`, ru: `В ${LogicalSymbolHexCode.Equivalence}` },
  },
  [ButtonID.EquivElimination]: {
    title: { en: 'Equivalence Elimination', ru: 'Удаление эквивалентности' },
    innerText: { en: `${LogicalSymbolHexCode.Equivalence} E`, ru: `У ${LogicalSymbolHexCode.Equivalence}` },
  },
  [ButtonID.Shortcut]: {
    title: { en: 'Shortcut', ru: 'Краткий вывод' },
    innerText: { en: 'Shortcut', ru: 'Кр. вывод' },
  },
};
