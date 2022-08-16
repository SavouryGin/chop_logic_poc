import React, { memo, useMemo } from 'react';
import formatClassName from 'helpers/formatters/format-class-name';
import { CommonSymbolHexCode } from 'enums';
import { FormulaProps } from 'types';
import { getPreformattedSymbol } from './helpers';
import { settingsSelectors } from 'store/settings/selectors';
import { useAppSelector } from 'hooks';
import './styles.scss';

function Formula({ content, className, level }: FormulaProps): React.ReactElement {
  const isDarkMode = useAppSelector(settingsSelectors.getIsDarkMode);
  const classNames = formatClassName(['formula', className, { formula_dark: isDarkMode }]);

  const formula = useMemo(
    () => <pre className={classNames}>{content.map((item, index) => getPreformattedSymbol(item, index))}</pre>,
    [content.length],
  );

  const indentation = useMemo(
    () =>
      [...Array(level)].map((_i: any, index: number) => (
        <div className='formula__indentation' key={`indentation-${index}`}>{`${CommonSymbolHexCode.Space}`}</div>
      )),
    [level],
  );

  return level ? (
    <div className='formula__wrapper'>
      {indentation}
      {formula}
    </div>
  ) : (
    formula
  );
}

export default memo(Formula);
