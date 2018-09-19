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
import PersonItem from 'components/PersonItem';

import SearchFilter from 'components/01-ui/SearchFilter';
import Line from 'components/01-ui/Line';
import Button from 'components/01-ui/Button';
import Loading from 'components/01-ui/Loading';
import NoData from 'components/01-ui/NoData';

import Wrapper from './styled/Wrapper';
import Title from './styled/Title';
import Controls from './styled/Controls';
import ControlsRight from './styled/ControlsRight';

function PersonList({
  fetching,
  persons,
  selectPerson,
  toggleInfoModal,
  toggleAddModal,
  movePersonItem,
  pagination,
  getPersons,
  searchFilter,
  updateSearchFilter,
  searchPerson,
}) {
  // Specifying the filters.
  const filterValues = ['name', 'org_name'];
  return (
    <Wrapper>
      <Title>People{"'"}s List</Title>
      <Controls>
        <div>
          <Pagination
            pagination={pagination}
            getPersons={getPersons}
          />
        </div>
        <ControlsRight>
          <Button text="Add new person..." onClick={toggleAddModal} />
          <div>
            <SearchFilter
              searchFilter={searchFilter}
              updateSearchFilter={updateSearchFilter}
              searchPerson={searchPerson}
            />
            <Button
              onClick={searchPerson}
              text="Search in database"
              context="PersonList"
            />
          </div>
        </ControlsRight>
      </Controls>
      <Line context="PersonList" />{' '}
      {/* eslint-disable prettier/prettier */}
      {persons.length
        ? persons
          .filter(person =>
            filterValues.some(
              value =>
                person[value] !== null &&
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
                toggleModal={toggleInfoModal}
                movePersonItem={movePersonItem}
              />
            ),
          )
        : !fetching && <NoData>Nothing was found.</NoData>}
      {/* eslint-enable */}
      {fetching && <Loading />}
    </Wrapper>
  );
}

PersonList.propTypes = {
  fetching: PropTypes.bool,
  persons: PropTypes.array,
  selectPerson: PropTypes.func,
  toggleInfoModal: PropTypes.func,
  toggleAddModal: PropTypes.func,
  movePersonItem: PropTypes.func,
  pagination: PropTypes.object,
  getPersons: PropTypes.func,
  searchFilter: PropTypes.string,
  updateSearchFilter: PropTypes.func,
  searchPerson: PropTypes.func,
};

export default DragDropContext(HTML5Backend)(PersonList);
