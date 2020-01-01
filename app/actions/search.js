// @flow
export const SET_SEARCH_PARAM = 'SET_SEARCH_PARAM';

export function setSearchParam(payload: string) {
  return {
    type: SET_SEARCH_PARAM,
    payload
  };
}
