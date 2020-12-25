import { ActionType, getType } from 'deox';
import { SagaIterator } from 'redux-saga';
import { put, takeEvery } from 'typed-redux-saga';
import { ResponseErrors } from '../../types';
import { snakeToCamelCase } from '../../utils';

import { processRequestError, setErrors } from './actions';

const globalErrorName = 'otherError';

function* processRequestErrorSaga({
  payload: { error, failAction, module, other },
}: ActionType<typeof processRequestError>): SagaIterator {
  const errors: ResponseErrors = {};

  if (error.response) {
    switch (error.response.status) {
      case 400: {
        const { data } = error.response;
        if ('detail' in data) {
          // error structure data.detail: { key: ['message'], key: ['message'] }
          Object.keys(data.detail).forEach(key => {
            errors[snakeToCamelCase(key)] = data.detail[key][0];
          });
        }
        break;
      }
      case 401:
        // yield put(signOut());
        return;
      default:
        // 500, 502
        errors[globalErrorName] = 'Server error';
        break;
    }
  } else if (error.request) {
    if (error.request.status === 0) {
      errors[globalErrorName] = 'Network error';
    }
  } else {
    errors[globalErrorName] = 'Something went wrong';
  }

  if (module) {
    yield* put(setErrors({ module, errors }));
  }
  yield* put(failAction({ module, other }));
}

export function* watchErrors(): SagaIterator {
  yield* takeEvery(getType(processRequestError), processRequestErrorSaga);
}
