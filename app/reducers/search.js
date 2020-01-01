// @flow
import { SET_SEARCH_PARAM } from '../actions/search';
import type { Action } from './types';

export default function search(state: string = '', action: Action) {
  switch (action.type) {
    case SET_SEARCH_PARAM:
      return action.payload;
    default:
      return state;
  }
}
