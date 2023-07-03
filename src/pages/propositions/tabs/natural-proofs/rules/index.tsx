import NPRulesEn from 'texts/propositions/en/np-rules-en';
import NPRulesRu from 'texts/propositions/ru/np-rules-ru';
import React from 'react';
import formatClass from 'utils/formatters/format-class-name';
import { settingsSelectors } from 'store/settings/selectors';
import { useAppSelector } from 'hooks';
import './styles.scss';

const RulesOfInference = (): React.ReactElement | null => {
  const language = useAppSelector(settingsSelectors.language);
  const isDarkMode = useAppSelector(settingsSelectors.isDarkMode);
  const className = formatClass(['natural-proofs-rules', { 'natural-proofs-rules__dark': isDarkMode }]);

  switch (language) {
    case 'ru': {
      return <NPRulesRu className={className} />;
    }
    case 'en': {
      return <NPRulesEn className={className} />;
    }
    default:
      return null;
  }
};

export default RulesOfInference;
