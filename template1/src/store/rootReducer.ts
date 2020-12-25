import AsyncStorage from '@react-native-community/async-storage';
import { getType } from 'deox';
import { Action, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { resetStore } from '../modules/app/actions';
import { RootState } from '../types';

// TODO: Remove examples this after setting up first module

/* EXAMPLE:
import { someModuleReducer } from '~/modules/someModule/reducer';
 */
import { errorsReducer } from '../modules/errors/reducer';
import { exampleReducer } from '../modules/example/reducer';

// TODO: Set up blacklist or whitelist and other configs if needed
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const projectReducer = combineReducers<RootState>({
  /* EXAMPLE:
  someModule: someModuleReducer,
   */
  example: exampleReducer,
  errors: errorsReducer,
});

const rootReducer = (
  state: RootState | undefined,
  action: Action,
): ReturnType<typeof projectReducer> => {
  if (action.type === getType(resetStore)) {
    state = undefined;
  }
  return projectReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
