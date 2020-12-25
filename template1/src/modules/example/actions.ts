import { createAction } from 'deox';

export const changeFirstName = createAction(
  'example/CHANGE_FIRST_NAME',
  resolve => (payload: string) => resolve(payload),
);

export const changeLastName = {
  request: createAction('example/CHANGE_LAST_NAME', resolve => (payload: string) =>
    resolve(payload),
  ),
  success: createAction('example/CHANGE_LAST_NAME_SUCCESS', resolve => (payload: string) =>
    resolve(payload),
  ),
  fail: createAction('example/CHANGE_LAST_NAME_FAIL'),
};
