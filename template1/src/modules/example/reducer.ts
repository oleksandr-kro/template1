import { createReducer } from 'deox';
import { produce } from 'immer';

import { changeFirstName, changeLastName } from './actions';
import { ExampleTypes } from './types';

const initialState: ExampleTypes = {
  lastName: '',
  firstName: '',
};

export const exampleReducer = createReducer(initialState, handleAction => [
  handleAction(changeFirstName, (state, { payload }) =>
    produce(state, draft => {
      draft.firstName = payload;
    }),
  ),
  handleAction(changeLastName.success, (state, { payload }) =>
    produce(state, draft => {
      draft.lastName = payload;
    }),
  ),
]);
