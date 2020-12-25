import { SagaIterator } from 'redux-saga';
import { all, EffectReturnType, fork } from 'typed-redux-saga';

// TODO: Remove examples this after setting up first module

/* EXAMPLE:
import { watchSomeModule } from '~/modules/user/sagas';
 */
import { watchExample } from '../modules/example/sagas';
import { watchErrors } from '../modules/errors/sagas';

export default function* rootSaga(): Generator<EffectReturnType<SagaIterator>> {
  yield* all([
    /* EXAMPLE:
    fork(watchSomeModule),
    */
    fork(watchExample),
    fork(watchErrors),
  ]);
}
