/**
 *
 * PersonList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Pagination from 'components/Pagination';
import SearchFilter from 'components/SearchFilter';
import PersonItem from 'components/PersonItem';
import Line from 'components/Line';

import Wrapper from './styled/Wrapper';
import Title from './styled/Title';

function PersonList({
  persons,
  selectPerson,
  showModal,
  movePersonItem,
  pagination,
  getPersons,
  searchFilter,
  updateSearchFilter,
}) {
  /* eslint-disable prettier/prettier */
  const filterValues = ['name', 'org_name'];
  return (
    <Wrapper>
      <Title>People{"'"}s List</Title>
      <Pagination pagination={pagination} getPersons={getPersons} />
      <SearchFilter
        searchFilter={searchFilter}
        updateSearchFilter={updateSearchFilter}
      />
      <Line context="PersonList" />
      {persons
        .filter(person =>
          filterValues.some(value =>
            person[value]
              .toLowerCase()
              .includes(searchFilter.toLowerCase()),
          ),
        )
        .map(
          (
            {
              id,
              name,
              org_name: orgName,
              picture_id: pictureId,
            },
            index,
          ) => (
            <PersonItem
              key={id}
              index={index}
              id={id}
              name={name}
              orgName={orgName}
              pictureId={pictureId}
              selectPerson={selectPerson}
              showModal={showModal}
              movePersonItem={movePersonItem}
            />
          ),
        )}
    </Wrapper>
  );
}

PersonList.propTypes = {
  persons: PropTypes.array,
  selectPerson: PropTypes.func,
  showModal: PropTypes.func,
  movePersonItem: PropTypes.func,
  pagination: PropTypes.object,
  getPersons: PropTypes.func,
  searchFilter: PropTypes.string,
  updateSearchFilter: PropTypes.func,
};

export default DragDropContext(HTML5Backend)(PersonList);
