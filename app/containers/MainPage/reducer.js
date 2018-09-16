/*
 *
 * MainPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  START_FETCHING,
  STOP_FETCHING,
  RECEIVE_ERROR,
  RECEIVE_PERSONS,
  SHOW_MODAL,
  HIDE_MODAL,
  SELECT_PERSON,
  MOVE_PERSON_ITEM,
  UPDATE_PAGINATION,
  UPDATE_SEARCH_FILTER,
} from './constants';

export const initialState = fromJS({
  persons: [],
  selectedPerson: {},
  fetching: false,
  error: null,
  modalShown: false,
  pagination: {},
  searchFilter: '',
});

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING:
      return state.set('error', null).set('fetching', true);
    case STOP_FETCHING:
      return state.set('fetching', false);
    case RECEIVE_ERROR:
      return state.set('error', action.error);
    case RECEIVE_PERSONS:
      return state.set('persons', fromJS(action.persons));
    case SHOW_MODAL:
      return state.set('modalShown', true);
    case HIDE_MODAL:
      return state.set('modalShown', false);
    case SELECT_PERSON:
      return state.set(
        'selectedPerson',
        state.getIn(['persons', action.index]),
      );
    case MOVE_PERSON_ITEM:
      return state.set(
        'persons',
        state
          .get('persons')
          .delete(action.dragIndex)
          .insert(action.hoverIndex, action.person),
      );
    case UPDATE_PAGINATION:
      return state.set('pagination', action.pagination);
    case UPDATE_SEARCH_FILTER:
      return state.set('searchFilter', action.query);
    default:
      return state;
  }
}

export default mainPageReducer;
