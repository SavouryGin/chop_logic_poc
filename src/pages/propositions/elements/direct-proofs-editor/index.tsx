import DirectProofsEditorTable from 'components/propositions/direct-proofs-editor-table';
import DirectProofsEditorToolbar from 'components/propositions/direct-proofs-editor-toolbar';
import ImplicationCreationForm from 'components/propositions/implication-creation-form';
import ImplicationDistributionForm from 'components/propositions/implication-distribution-form';
import ModalWindow from 'components/modal-window';
import PremiseForm from 'components/propositions/premise-form';
import React from 'react';
import { PropositionsFlag } from 'store/propositions/interfaces';
import { propositionsActions as actions } from 'store/propositions/slice';
import { propositionsSelectors as selectors } from 'store/propositions/selectors';
import { settingsSelectors } from 'store/settings/selectors';
import { uiElementTexts } from 'texts/ui-elements';
import { useAppDispatch, useAppSelector } from 'hooks';
import './styles.scss';

const DirectProofsEditor = () => {
  const dispatch = useAppDispatch();
  const isPremiseOpened = useAppSelector(selectors.getIsPremiseOpened);
  const isImplicationCreationOpened = useAppSelector(selectors.getIsImplicationCreationOpened);
  const isImplicationDistributionOpened = useAppSelector(selectors.getIsImplicationDistributionOpened);
  const language = useAppSelector(settingsSelectors.getLanguage);

  const closePopupByFlag = (flag: PropositionsFlag) => {
    dispatch(actions.setUpFlag({ flag, value: false }));
  };

  return (
    <div className='direct-proofs-editor'>
      <DirectProofsEditorTable />
      <DirectProofsEditorToolbar />
      <ModalWindow
        isOpened={isPremiseOpened}
        onClose={() => closePopupByFlag('isPremiseOpened')}
        title={uiElementTexts.premise[language]}
        content={<PremiseForm />}
      />
      <ModalWindow
        isOpened={isImplicationCreationOpened}
        onClose={() => closePopupByFlag('isImplicationCreationOpened')}
        title={uiElementTexts.implicationCreation[language]}
        content={<ImplicationCreationForm />}
      />
      <ModalWindow
        isOpened={isImplicationDistributionOpened}
        onClose={() => closePopupByFlag('isImplicationDistributionOpened')}
        title={uiElementTexts.implicationDistribution[language]}
        content={<ImplicationDistributionForm />}
      />
    </div>
  );
};

export default DirectProofsEditor;
