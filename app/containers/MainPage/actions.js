/*
 *
 * MainPage actions
 *
 */

import {
  START_FETCHING,
  STOP_FETCHING,
  RECEIVE_ERROR,
  GET_PERSONS,
  ADD_PERSON,
  DELETE_PERSON,
  SEARCH_PERSON,
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

/* BASIC FETCHING */

export function startFetching() {
  return {
    type: START_FETCHING,
  };
}

export function stopFetching() {
  return {
    type: STOP_FETCHING,
  };
}

export function receiveError(error) {
  return {
    type: RECEIVE_ERROR,
    error,
  };
}

/* REMOTE CHANGES */

export function getPersons(startIndex) {
  return {
    type: GET_PERSONS,
    startIndex,
  };
}

export function addPerson(info) {
  return {
    type: ADD_PERSON,
    info,
  };
}

export function deletePerson(id, index) {
  return {
    type: DELETE_PERSON,
    id,
    index,
  };
}

export function searchPerson(query) {
  return {
    type: SEARCH_PERSON,
    query,
  };
}

/* LOCAL CHANGES */

export function receivePersons(persons) {
  return {
    type: RECEIVE_PERSONS,
    persons,
  };
}

export function receiveNewPerson(person) {
  return {
    type: RECEIVE_NEW_PERSON,
    person,
  };
}

export function deletePersonLocally(index) {
  return {
    type: DELETE_PERSON_LOCALLY,
    index,
  };
}

/* INTERFACE SPECIFIC AND OTHER CHANGES */

export function toggleInfoModal() {
  return {
    type: TOGGLE_INFO_MODAL,
  };
}

export function toggleAddModal() {
  return {
    type: TOGGLE_ADD_MODAL,
  };
}

export function selectPerson(index) {
  return {
    type: SELECT_PERSON,
    index,
  };
}

export function movePersonItem(dragIndex, hoverIndex, person) {
  return {
    type: MOVE_PERSON_ITEM,
    dragIndex,
    hoverIndex,
    person,
  };
}

export function updatePagination(pagination) {
  return {
    type: UPDATE_PAGINATION,
    pagination,
  };
}

export function updateSearchFilter(query) {
  return {
    type: UPDATE_SEARCH_FILTER,
    query,
  };
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    name,
  };
}
