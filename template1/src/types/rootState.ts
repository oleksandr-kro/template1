import { ExampleTypes } from 'modules/example/types';
import { ErrorsTypes } from 'modules/errors/types';

export interface RootState {
  example: ExampleTypes;
  errors: ErrorsTypes;
}
