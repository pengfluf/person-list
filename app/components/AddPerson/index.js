/**
 *
 * AddPerson
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import capitalize from 'helpers/capitalize';

import Button from 'components/Button';
import InputField from 'components/InputField';
import Modal from 'components/Modal';

function AddPerson({
  name,
  addPerson,
  toggleModal,
  historyPush,
  updateName,
}) {
  return (
    <Modal
      title="Add New Person"
      toggleModal={toggleModal}
      historyPush={historyPush}
    >
      <Fragment>
        <InputField
          value={name}
          type="text"
          placeholder="Name"
          onChange={e => updateName(e.target.value)}
        />
        <Button
          text="Add"
          context="AddPerson"
          onClick={() => {
            if (name.length > 1) {
              addPerson({
                name: name
                  .split(' ')
                  .map(word => capitalize(word))
                  .join(' '),
              });
              toggleModal();
              updateName('');
            } else {
              alert('Name must have at least 2 characters.');
            }
          }}
        />
      </Fragment>
    </Modal>
  );
}

AddPerson.propTypes = {
  name: PropTypes.string,
  addPerson: PropTypes.func,
  toggleModal: PropTypes.func,
  updateName: PropTypes.func,
};

export default AddPerson;
