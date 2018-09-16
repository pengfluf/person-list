/**
 *
 * AddPerson
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import capitalize from 'helpers/capitalize';

function AddPerson({ name, addPerson, toggleModal, updateName }) {
  return (
    <div>
      <h3>Add person</h3>
      <input
        value={name}
        type="text"
        placeholder="Name"
        onChange={e => updateName(e.target.value)}
      />
      <button
        onClick={() => {
          if (name.length > 1) {
            addPerson({
              name: name
                .split(' ')
                .map(word => capitalize(word))
                .join(' '),
            });
            toggleModal();
          } else {
            alert('Name must have at least 2 characters.');
          }
        }}
      >
        Add
      </button>
    </div>
  );
}

AddPerson.propTypes = {
  name: PropTypes.string,
  addPerson: PropTypes.func,
  toggleModal: PropTypes.func,
  updateName: PropTypes.func,
};

export default AddPerson;
