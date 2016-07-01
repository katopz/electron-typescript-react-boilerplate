import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const increment = createAction(INCREMENT_COUNTER);

export const decrement = createAction(DECREMENT_COUNTER);

export function incrementIfOdd() {
  return (dispatch:Function, getState:Function) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return (dispatch:Function) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
