/**
 *
 * PersonList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import PersonItem from 'components/PersonItem';

import Wrapper from './styled/Wrapper';
import Title from './styled/Title';
import Line from './styled/Line';

function PersonList({ persons, selectPerson, showModal }) {
  return (
    <Wrapper>
      <Title>People{"'"}s List</Title>
      <Line />
      {persons.map(
        (
          { id, name, org_name: orgName, picture_id: pictureId },
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
};

export default PersonList;
