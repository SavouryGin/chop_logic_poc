import Button from 'components/controls/button';
import React from 'react';
import { ButtonID } from 'enums';
import { propositionsNaturalProofsActions as actions } from 'store/propositions/natural-proofs/slice';
import { propositionsNaturalProofsSelectors as selectors } from 'store/propositions/natural-proofs/selectors';
import { soundPlayer } from 'helpers/sounds';
import { useAppDispatch, useAppSelector, usePremiseEnabling } from 'hooks';

const NaturalProofsEditorToolbar = () => {
  const dispatch = useAppDispatch();
  const isPremiseDisabled = !usePremiseEnabling();
  const selectedIds = useAppSelector(selectors.getSelectedIds);
  const isReiterationDisabled = selectedIds.length !== 1;
  const isDeleteDisabled = selectedIds.length === 0;

  const openPremise = () => {
    dispatch(actions.setUpFlag({ flag: 'isPremiseOpened', value: true }));
  };

  const openAssumption = () => {
    dispatch(actions.setUpFlag({ flag: 'isAssumptionOpened', value: true }));
  };

  const deleteSteps = () => {
    dispatch(actions.deleteSteps());
  };

  return (
    <div className='natural-proofs-editor__toolbar'>
      <Button buttonId={ButtonID.Premise} sound={soundPlayer.keyboard} size='large' onClick={openPremise} isDisabled={isPremiseDisabled} />
      <Button buttonId={ButtonID.Reiteration} sound={soundPlayer.keyboard} size='large' isDisabled={isReiterationDisabled} />
      <Button buttonId={ButtonID.Replace} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.NotIntroduction} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.AndIntroduction} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.OrIntroduction} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.ImpliesIntroduction} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.EquivIntroduction} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.Assumption} sound={soundPlayer.keyboard} size='large' onClick={openAssumption} />
      <Button buttonId={ButtonID.Delete} sound={soundPlayer.keyboard} size='large' onClick={deleteSteps} isDisabled={isDeleteDisabled} />
      <Button buttonId={ButtonID.Shortcut} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.NotElimination} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.AndElimination} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.OrElimination} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.ImpliesElimination} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.EquivElimination} sound={soundPlayer.keyboard} size='large' />
    </div>
  );
};

export default NaturalProofsEditorToolbar;
