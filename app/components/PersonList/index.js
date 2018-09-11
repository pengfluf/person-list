/**
 *
 * PersonList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import PersonItem from 'components/PersonItem';

function PersonList({ persons, selectPerson, showModal }) {
  return (
    <div>
      <h2>People{"'"}s List</h2>
      {persons.map(
        ({ id, name, org_name: orgName, picture_id: pictureId }) => (
          <PersonItem
            key={id}
            id={id}
            name={name}
            orgName={orgName}
            pictureId={pictureId}
            selectPerson={selectPerson}
            showModal={showModal}
          />
        ),
      )}
    </div>
  );
}

PersonList.propTypes = {
  persons: PropTypes.array,
  selectPerson: PropTypes.func,
};

export default PersonList;
