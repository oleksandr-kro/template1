import { createReducer } from 'deox';

import { changeError, resetErrors, setErrors } from './actions';
import { ErrorsTypes } from './types';

const initialState: ErrorsTypes = {
  example: {},
};

export const errorsReducer = createReducer(initialState, handleAction => [
  handleAction(
    changeError,
    (state, { payload }): ErrorsTypes => ({
      ...state,
      [payload.module]: {
        ...state[payload.module],
        [payload.field]: payload.value || '',
      },
    }),
  ),
  handleAction(
    setErrors,
    (state, { payload }): ErrorsTypes => ({
      ...state,
      [payload.module]: payload.errors,
    }),
  ),

  handleAction(resetErrors, (): ErrorsTypes => initialState),
]);
