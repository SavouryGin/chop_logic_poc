import converterXML from 'logic/propositions/converter-xml';
import { DirectProofsTableItem } from '../interfaces';
import { SagaIterator } from 'redux-saga';
import { propositionsDPActions as actions } from 'store/propositions/direct-proofs/slice';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { createAndSaveXMLFile } from 'helpers/files/create-and-save-xml-file';
import { errorsTexts } from 'texts';
import { propositionsDPSelectors as selectors } from 'store/propositions/direct-proofs/selectors';

export function* exportDPToXMLWatcher(): Generator {
  yield takeEvery(actions.exportToXML, exportDPToXMLSaga);
}

export function* exportDPToXMLSaga(action: { payload: string | undefined }): SagaIterator {
  try {
    const fileName = action.payload;

    if (!fileName) {
      yield put(actions.setUpFlag({ flag: 'isNameInputPopupVisible', value: true }));

      return;
    }

    const tableData: DirectProofsTableItem[] = yield select(selectors.getTableData);
    const fileData = converterXML.dpToXML(tableData);

    yield call(createAndSaveXMLFile, fileData, fileName);
  } catch (error: unknown) {
    console.log(error);
    yield put(actions.setError(errorsTexts.generalError));
  }
}
