import Formula from 'components/controls/formula';
import Label from 'components/controls/label';
import React from 'react';
import converter from 'logic/propositions/converter';
import formatClassName from 'helpers/formatters/format-class-name';
import { FormulaPreviewProps } from 'types';
import { InputID } from 'enums';
import { inputTexts } from 'texts';
import { isLocalText } from 'helpers/checkers/is-local-text';
import { settingsSelectors } from 'store/settings/selectors';
import { useAppSelector } from 'hooks';
import './styles.scss';

function FormulaPreview({ text, className }: FormulaPreviewProps): React.ReactElement {
  const isDarkMode = useAppSelector(settingsSelectors.getIsDarkMode);
  const language = useAppSelector(settingsSelectors.getLanguage);
  const classNames = formatClassName(['formula-preview', className, { 'formula-preview_dark': isDarkMode }]);
  const labelText = inputTexts[InputID.Preview].label[language];
  const convertedInput = converter.convertStringToFormulaPreview(text);

  return (
    <div className={classNames}>
      <Label id='formula-preview' text={labelText} isDarkMode={isDarkMode} />
      {isLocalText(convertedInput) ? (
        <p className='formula-preview__error'>{convertedInput[language]}</p>
      ) : (
        <Formula id='formula-preview' content={convertedInput} className='formula-preview__formula' />
      )}
    </div>
  );
}

export default FormulaPreview;
