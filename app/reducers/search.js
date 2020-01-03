// @flow
import { SET_SEARCH_PARAM, SET_RETURNED_SEARCH_DATA } from '../actions/search';
import type { Action, State } from './types';

export function searchName(state: string = '', action: Action) {
  switch (action.type) {
    case SET_SEARCH_PARAM:
      return action.payload;
    default:
      return state;
  }
}

export function searchData(state: State = [], action: Action) {
  switch (action.type) {
    case SET_RETURNED_SEARCH_DATA:
      return action.payload;
    default:
      return state;
  }
}
