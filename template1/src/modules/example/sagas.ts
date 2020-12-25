import { ActionType, getType } from 'deox';
import { SagaIterator } from 'redux-saga';
import { put, takeLatest } from 'typed-redux-saga';

import { changeLastName } from './actions';

function* changeLastNameSaga({ payload }: ActionType<typeof changeLastName.request>): SagaIterator {
  yield* put(changeLastName.success(payload));
}

export function* watchExample(): SagaIterator {
  yield* takeLatest(getType(changeLastName.request), changeLastNameSaga);
}
