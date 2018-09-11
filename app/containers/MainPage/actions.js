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
  RECEIVE_PERSONS,
  SHOW_MODAL,
  HIDE_MODAL,
  SELECT_PERSON,
} from './constants';

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

export function getPersons(page) {
  return {
    type: GET_PERSONS,
    page,
  };
}

export function receivePersons(persons) {
  return {
    type: RECEIVE_PERSONS,
    persons,
  };
}

export function showModal() {
  return {
    type: SHOW_MODAL,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}

export function selectPerson(index) {
  return {
    type: SELECT_PERSON,
    index,
  };
}
