import { fromJS } from 'immutable';
import mainPageReducer from '../reducer';

import {
  startFetching,
  stopFetching,
  receiveError,
  receivePersons,
  receiveNewPerson,
  deletePersonLocally,
  toggleInfoModal,
  toggleAddModal,
  selectPerson,
  movePersonItem,
  updatePagination,
  updateSearchFilter,
  updateName,
} from '../actions';

describe('mainPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
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
  });

  it('Returns the initial state', () => {
    const expected = state;
    expect(mainPageReducer(undefined, {})).toEqual(expected);
  });

  it('Handles the startFetching correctly', () => {
    const expected = state.set('error', null).set('fetching', true);
    expect(mainPageReducer(state, startFetching())).toEqual(expected);
  });

  it('Handles the stopFetching correctly', () => {
    const expected = state.set('fetching', false);
    expect(mainPageReducer(state, stopFetching())).toEqual(expected);
  });

  it('Handles the receiveError correctly', () => {
    const error = {
      message: 'test',
    };
    const expected = state.set('error', error);
    expect(mainPageReducer(state, receiveError(error))).toEqual(
      expected,
    );
  });

  it('Handles the receivePersons correctly', () => {
    const persons = [{ id: 1 }, { id: 2 }];
    const expected = state.set('persons', fromJS(persons));
    expect(mainPageReducer(state, receivePersons(persons))).toEqual(
      expected,
    );
  });

  it('Handles the receiveNewPerson correctly', () => {
    const person = {
      name: 'test',
    };
    const expected = state.set(
      'persons',
      state.get('persons').unshift(person),
    );
    expect(mainPageReducer(state, receiveNewPerson(person))).toEqual(
      expected,
    );
  });

  it('Handles the deletePersonLocally correctly', () => {
    const index = 0;
    const expected = state.set(
      'persons',
      state.get('persons').splice(index, 1),
    );
    expect(
      mainPageReducer(state, deletePersonLocally(index)),
    ).toEqual(expected);
  });

  it('Handles the toggleInfoModal correctly', () => {
    const expected = state.setIn(
      ['modals', 'info'],
      !state.getIn(['modals', 'info']),
    );
    expect(mainPageReducer(state, toggleInfoModal())).toEqual(
      expected,
    );
  });

  it('Handles the toggleAddModal correctly', () => {
    const expected = state.setIn(
      ['modals', 'add'],
      !state.getIn(['modals', 'add']),
    );
    expect(mainPageReducer(state, toggleAddModal())).toEqual(
      expected,
    );
  });

  it('Handles the selectPerson correctly', () => {
    const index = 0;
    const expected = state.set(
      'selectedPerson',
      state.getIn(['persons', index]),
    );
    expect(mainPageReducer(state, selectPerson(index))).toEqual(
      expected,
    );
  });

  it('Handles the movePersonItem correctly', () => {
    const dragIndex = 0;
    const hoverIndex = 1;
    const person = {
      name: 'test',
    };
    const expected = state.set(
      'persons',
      state
        .get('persons')
        .delete(dragIndex)
        .insert(hoverIndex, person),
    );
    expect(
      mainPageReducer(
        state,
        movePersonItem(dragIndex, hoverIndex, person),
      ),
    ).toEqual(expected);
  });

  it('Handles the updatePagination correctly', () => {
    const pagination = {
      start: 0,
    };
    const expected = state.set('pagination', pagination);
    expect(
      mainPageReducer(state, updatePagination(pagination)),
    ).toEqual(expected);
  });

  it('Handles the updateSearchFilter correctly', () => {
    const query = 'test';
    const expected = state.set('searchFilter', query);
    expect(mainPageReducer(state, updateSearchFilter(query))).toEqual(
      expected,
    );
  });

  it('Handles the updateName correctly', () => {
    const name = 'test';
    const expected = state.set('name', name);
    expect(mainPageReducer(state, updateName(name))).toEqual(
      expected,
    );
  });
});
