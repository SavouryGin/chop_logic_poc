import { SagaIterator } from 'redux-saga';
import { propositionsDPActions as actions } from 'store/propositions/direct-proofs/slice';
import { errorsTexts } from 'texts';
import { put, takeEvery } from 'redux-saga/effects';

export function* cutSubProofDPWatcher(): Generator {
  yield takeEvery(actions.cutSubProof, cutSubProofDPSaga);
}

export function* cutSubProofDPSaga(): SagaIterator {
  yield put(actions.setUpFlag({ flag: 'isLoading', value: true }));
  try {
    console.log('cut saga');
  } catch (error: unknown) {
    yield put(actions.setError(errorsTexts.generalError));
  }
}
