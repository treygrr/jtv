// @flow
export const SET_SEARCH_PARAM = 'SET_SEARCH_PARAM';
export const SET_RETURNED_SEARCH_DATA = 'SET_RETURNED_SEARCH_DATA';

export function setSearchParam(payload: string) {
  return {
    type: SET_SEARCH_PARAM,
    payload
  };
}

export function setReturnedSearchData(payload: string) {
  return {
    type: SET_RETURNED_SEARCH_DATA,
    payload
  };
}
