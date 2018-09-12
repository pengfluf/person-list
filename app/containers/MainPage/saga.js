import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { API_KEY, BASE_URL, GET_PERSONS } from './constants';

import {
  startFetching,
  stopFetching,
  receivePersons,
  receiveError,
  updatePagination,
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

export default function* watcher() {
  yield [takeLatest(GET_PERSONS, fetchPersons)];
}
