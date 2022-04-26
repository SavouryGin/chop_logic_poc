import React from 'react';
import Button from 'components/button';
import { ButtonID } from 'enums';
import { soundPlayer } from 'helpers/sounds';
import { useAppDispatch } from 'hooks';
import { propositionsActions as actions } from 'store/propositions/slice';

function DirectProofsEditorToolbar(): React.ReactElement {
  const dispatch = useAppDispatch();

  const openPremise = () => {
    dispatch(actions.setUpFlag({ flag: 'isPremiseOpened', value: true }));
  };

  return (
    <div className='direct-proofs-editor__toolbar'>
      <Button buttonId={ButtonID.Premise} sound={soundPlayer.keyboard} size='large' onClick={openPremise} />
      <Button buttonId={ButtonID.Reiteration} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.Replace} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.Delete} sound={soundPlayer.keyboard} size='large' />
      <Button buttonId={ButtonID.ImplicationCreation} sound={soundPlayer.slideClick} size='large' />
      <Button buttonId={ButtonID.ImplicationDistribution} sound={soundPlayer.slideClick} size='large' />
      <Button buttonId={ButtonID.ImplicationReversal} sound={soundPlayer.slideClick} size='large' />
      <Button buttonId={ButtonID.ImplicationElimination} sound={soundPlayer.slideClick} size='large' />
    </div>
  );
}

export default DirectProofsEditorToolbar;