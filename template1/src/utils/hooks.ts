import { Action } from 'deox';
import { useEffect, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreator, bindActionCreators } from 'redux';

export const useAction = <T extends ActionCreator<Action<string>>>(action: T): T => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(action, dispatch), [dispatch]);
};

export const usePrevious = <T>(value: T): T | void => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
