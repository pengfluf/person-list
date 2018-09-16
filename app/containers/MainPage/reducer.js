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
  RECEIVE_NEW_PERSON,
  DELETE_PERSON_LOCALLY,
  TOGGLE_INFO_MODAL,
  TOGGLE_ADD_MODAL,
  SELECT_PERSON,
  MOVE_PERSON_ITEM,
  UPDATE_PAGINATION,
  UPDATE_SEARCH_FILTER,
  UPDATE_NAME,
} from './constants';

export const initialState = fromJS({
  persons: [],
  selectedPerson: {},
  fetching: false,
  error: null,
  modals: {
    info: false,
    add: false,
  },
  pagination: {},
  searchFilter: '',
  name: '',
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
    case RECEIVE_NEW_PERSON:
      return state.set(
        'persons',
        state.get('persons').unshift(action.person),
      );
    case DELETE_PERSON_LOCALLY:
      return state.set(
        'persons',
        state.get('persons').splice(action.index, 1),
      );
    case TOGGLE_INFO_MODAL:
      return state.setIn(
        ['modals', 'info'],
        !state.getIn(['modals', 'info']),
      );
    case TOGGLE_ADD_MODAL:
      return state.setIn(
        ['modals', 'add'],
        !state.getIn(['modals', 'add']),
      );
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
    case UPDATE_NAME:
      return state.set('name', action.name);
    default:
      return state;
  }
}

export default mainPageReducer;
