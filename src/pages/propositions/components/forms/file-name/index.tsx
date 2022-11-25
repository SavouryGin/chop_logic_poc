import Form from 'components/controls/form';
import React, { memo, useState } from 'react';
import TextInput from 'components/controls/text-input';
import { ButtonID, InputID } from 'enums';
import { FormValues } from 'types';
import { propositionsDPActions } from 'store/propositions/direct-proofs/slice';
import { useAppDispatch } from 'hooks';
import './styles.scss';

const FileNameForm = () => {
  const dispatch = useAppDispatch();
  const fileNameInitialValue = { fileName: '' };
  const [formValue, setFormValue] = useState(fileNameInitialValue);

  const isFormInvalid = !formValue.fileName.trim();
  const formContent = (
    <>
      <TextInput name='comment' inputId={InputID.Comment} className='file-name-form__input' isRequired maxLength={50} />
    </>
  );

  const takeValues = (values: FormValues) => setFormValue(values as typeof fileNameInitialValue);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(propositionsDPActions.setUpFlag({ flag: 'isNameInputPopupVisible', value: false }));
  };

  return (
    <div className='file-name-form'>
      <Form
        onSubmit={onSubmit}
        initialValues={fileNameInitialValue}
        inputs={formContent}
        submitButtonId={ButtonID.Apply}
        passValues={takeValues}
        isSubmitDisabled={isFormInvalid}
      />
    </div>
  );
};

export default memo(FileNameForm);
