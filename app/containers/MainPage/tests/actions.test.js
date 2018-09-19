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
} from '../constants';

import {
  startFetching,
  stopFetching,
  receiveError,
  getPersons,
  addPerson,
  deletePerson,
  searchPerson,
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

describe('MainPage actions', () => {
  describe('startFetching action', () => {
    it('Returns the correct type and passed arguments', () => {
      const expected = {
        type: START_FETCHING,
      };
      expect(startFetching()).toEqual(expected);
    });
  });

  describe('stopFetching action', () => {
    it('Returns the correct type and passed arguments', () => {
      const expected = {
        type: STOP_FETCHING,
      };
      expect(stopFetching()).toEqual(expected);
    });
  });

  describe('receiveError action', () => {
    it('Returns the correct type and passed arguments', () => {
      const error = {
        message: 'test',
      };
      const expected = {
        type: RECEIVE_ERROR,
        error,
      };
      expect(receiveError(error)).toEqual(expected);
    });
  });

  describe('getPersons action', () => {
    it('Returns the correct type and passed arguments', () => {
      const startIndex = 0;
      const expected = {
        type: GET_PERSONS,
        startIndex,
      };
      expect(getPersons(startIndex)).toEqual(expected);
    });
  });

  describe('addPerson action', () => {
    it('Returns the correct type and passed arguments', () => {
      const info = { name: 'test' };
      const expected = {
        type: ADD_PERSON,
        info,
      };
      expect(addPerson(info)).toEqual(expected);
    });
  });

  describe('deletePerson action', () => {
    it('Returns the correct type and passed arguments', () => {
      const id = 1;
      const index = 0;
      const expected = {
        type: DELETE_PERSON,
        id,
        index,
      };
      expect(deletePerson(id, index)).toEqual(expected);
    });
  });

  describe('searchPerson action', () => {
    it('Returns the correct type and passed arguments', () => {
      const query = 'test';
      const expected = {
        type: SEARCH_PERSON,
        query,
      };
      expect(searchPerson(query)).toEqual(expected);
    });
  });

  describe('receivePersons action', () => {
    it('Returns the correct type and passed arguments', () => {
      const persons = [{ id: 1 }, { id: 2 }];
      const expected = {
        type: RECEIVE_PERSONS,
        persons,
      };
      expect(receivePersons(persons)).toEqual(expected);
    });
  });

  describe('receiveNewPerson action', () => {
    it('Returns the correct type and passed arguments', () => {
      const person = {
        name: 'test',
      };
      const expected = {
        type: RECEIVE_NEW_PERSON,
        person,
      };
      expect(receiveNewPerson(person)).toEqual(expected);
    });
  });

  describe('deletePersonLocally action', () => {
    it('Returns the correct type and passed arguments', () => {
      const index = 0;
      const expected = {
        type: DELETE_PERSON_LOCALLY,
        index,
      };
      expect(deletePersonLocally(index)).toEqual(expected);
    });
  });

  describe('toggleInfoModal action', () => {
    it('Returns the correct type and passed arguments', () => {
      const expected = {
        type: TOGGLE_INFO_MODAL,
      };
      expect(toggleInfoModal()).toEqual(expected);
    });
  });

  describe('toggleAddModal action', () => {
    it('Returns the correct type and passed arguments', () => {
      const expected = {
        type: TOGGLE_ADD_MODAL,
      };
      expect(toggleAddModal()).toEqual(expected);
    });
  });

  describe('selectPerson action', () => {
    it('Returns the correct type and passed arguments', () => {
      const index = 0;
      const expected = {
        type: SELECT_PERSON,
        index,
      };
      expect(selectPerson(index)).toEqual(expected);
    });
  });

  describe('movePersonItem action', () => {
    it('Returns the correct type and passed arguments', () => {
      const dragIndex = 0;
      const hoverIndex = 1;
      const person = {
        name: 'test',
      };
      const expected = {
        type: MOVE_PERSON_ITEM,
        dragIndex,
        hoverIndex,
        person,
      };
      expect(movePersonItem(dragIndex, hoverIndex, person)).toEqual(
        expected,
      );
    });
  });

  describe('updatePagination action', () => {
    it('Returns the correct type and passed arguments', () => {
      const pagination = {
        start: 0,
      };
      const expected = {
        type: UPDATE_PAGINATION,
        pagination,
      };
      expect(updatePagination(pagination)).toEqual(expected);
    });
  });

  describe('updateSearchFilter action', () => {
    it('Returns the correct type and passed arguments', () => {
      const query = 'test';
      const expected = {
        type: UPDATE_SEARCH_FILTER,
        query,
      };
      expect(updateSearchFilter(query)).toEqual(expected);
    });
  });

  describe('updateName action', () => {
    it('Returns the correct type and passed arguments', () => {
      const name = 'test';
      const expected = {
        type: UPDATE_NAME,
        name,
      };
      expect(updateName(name)).toEqual(expected);
    });
  });
});
