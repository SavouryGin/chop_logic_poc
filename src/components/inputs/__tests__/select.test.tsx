import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { combineReducers } from '@reduxjs/toolkit';
import { settingsInitialState, settingsSlice } from 'store/settings/slice';
import { SelectEntity } from 'types';
import renderWithRedux from 'helpers/test-utils/render-with-redux';

import Select from '../select';

const testSelectOptions: SelectEntity[] = [
  { option: 'One', value: 1, add: 123 },
  { option: 'Two', value: 2, asdf: 'asdf' },
  { option: 'Three', value: 3, asdf: {} },
];

const testProps = {
  name: 'test input',
  label: 'test label',
  id: 'test-id',
  options: testSelectOptions,
};

const mockedReducer = combineReducers({
  settings: settingsSlice.reducer,
});

const mockedState = {
  settings: settingsInitialState,
};

describe('Select component:', () => {
  it('renders the select element with default props', () => {
    renderWithRedux(<Select {...testProps} />, mockedReducer, mockedState);
    screen.debug();
    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('select__field');
    expect(input).toBeEnabled();
    expect(input).toHaveValue(testSelectOptions[0].value.toString());
  });

  it('the select has a label', () => {
    renderWithRedux(<Select {...testProps} />, mockedReducer, mockedState);
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('the select element contains all the options', () => {
    renderWithRedux(<Select {...testProps} />, mockedReducer, mockedState);
    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(testSelectOptions.length);
    for (let i = 0; i < testSelectOptions.length; i++) {
      expect(options[i]).toHaveTextContent(testSelectOptions[i].option);
    }
  });

  it('can be disabled', () => {
    renderWithRedux(<Select {...testProps} isDisabled />, mockedReducer, mockedState);
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('receives the passed default value', () => {
    renderWithRedux(<Select {...testProps} defaultOption={testSelectOptions[2]} />, mockedReducer, mockedState);
    expect(screen.getByRole('combobox')).toHaveValue(testSelectOptions[2].value.toString());
  });

  it('allows the user to select an option', () => {
    renderWithRedux(<Select {...testProps} />, mockedReducer, mockedState);
    const input = screen.getByRole('combobox');
    userEvent.selectOptions(input, testSelectOptions[1].option);
    expect(input).toHaveValue(testSelectOptions[1].value.toString());
  });

  it('fires the passed onChange handler', () => {
    const mockChange = jest.fn();
    renderWithRedux(<Select {...testProps} onChange={mockChange} />, mockedReducer, mockedState);
    const input = screen.getByRole('combobox');
    userEvent.selectOptions(input, testSelectOptions[1].option);
    expect(mockChange).toHaveBeenCalledTimes(1);
  });

  it('gets focus on tab press', () => {
    renderWithRedux(<Select {...testProps} />, mockedReducer, mockedState);
    const input = screen.getByRole('combobox');
    expect(input).not.toHaveFocus();
    userEvent.tab();
    expect(input).toHaveFocus();
  });

  it('fires the onBlur handler', () => {
    const mockBlur = jest.fn();
    renderWithRedux(<Select {...testProps} onBlur={mockBlur} />, mockedReducer, mockedState);
    userEvent.tab();
    userEvent.tab();
    expect(mockBlur).toHaveBeenCalledTimes(1);
  });
});
