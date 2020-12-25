/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import { createAction } from 'deox';
import { ResponseErrors } from 'types';

import { ErrorsTypes } from './types';

export const processRequestError = createAction(
  'errors/PROCESS_REQUEST_ERROR',
  resolve => (payload: {
    other?: any;
    error: AxiosError;
    failAction: any;
    module?: keyof ErrorsTypes;
  }) => resolve(payload),
);

export const setErrors = createAction(
  'errors/SET_ERROR',
  resolve => (payload: { module: keyof ErrorsTypes; errors: ResponseErrors }) => resolve(payload),
);
export const changeError = createAction(
  'errors/CHANGE_ERROR',
  resolve => (payload: { module: keyof ErrorsTypes; field: string; value?: string }) =>
    resolve(payload),
);
export const resetErrors = createAction('errors/RESET_ERRORS');
