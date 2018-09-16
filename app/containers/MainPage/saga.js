import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  API_KEY,
  BASE_URL,
  GET_PERSONS,
  ADD_PERSON,
  DELETE_PERSON,
} from './constants';

import {
  startFetching,
  stopFetching,
  receiveError,
  receivePersons,
  updatePagination,
  receiveNewPerson,
  deletePersonLocally,
} from './actions';

export function* fetchPersons(action) {
  try {
    yield put(startFetching());
    const persons = yield call(
      axios.get,
      `${BASE_URL}/persons?api_token=${API_KEY}&start=${
        action.startIndex
      }&limit=10`,
    );
    yield put(stopFetching());
    yield put(
      updatePagination(persons.data.additional_data.pagination),
    );
    yield put(receivePersons(persons.data.data));
  } catch (error) {
    yield put(stopFetching());
    yield put(receiveError(error));
  }
}

export function* createPerson(action) {
  try {
    yield put(startFetching());
    const person = yield call(
      axios.post,
      `${BASE_URL}/persons?api_token=${API_KEY}`,
      {
        ...action.info,
      },
    );
    yield put(stopFetching());
    yield put(receiveNewPerson(person.data.data));
  } catch (error) {
    yield put(stopFetching());
    yield put(receiveError(error));
  }
}

export function* removePerson(action) {
  try {
    yield put(startFetching());
    const response = yield call(
      axios.delete,
      `${BASE_URL}/persons/${action.id}?api_token=${API_KEY}`,
    );
    yield put(stopFetching());
    if (response.success) {
      yield put(deletePersonLocally(action.id));
    }
  } catch (error) {
    yield put(stopFetching());
    yield put(receiveError(error));
  }
}

export default function* watcher() {
  yield [
    takeLatest(GET_PERSONS, fetchPersons),
    takeLatest(ADD_PERSON, createPerson),
    takeLatest(DELETE_PERSON, removePerson),
  ];
}
