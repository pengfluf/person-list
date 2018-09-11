/**
 *
 * PersonModal
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PersonModal({ hideModal }) {
  return (
    <div>
      <h2>Person information</h2>
      <div>Avatar</div>
      <button onClick={hideModal}>Close</button>
    </div>
  );
}

PersonModal.propTypes = {};

export default PersonModal;
