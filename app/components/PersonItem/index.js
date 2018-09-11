/**
 *
 * PersonItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styled/Wrapper';

function PersonItem({
  id,
  name,
  orgName,
  pictureId,
  selectPerson,
  showModal,
}) {
  return (
    <Wrapper
      to={`/person/${id}`}
      onClick={() => {
        selectPerson(id);
        showModal();
      }}
      style={{ marginTop: '20px' }}
    >
      <p>{name}</p>
      <p>{orgName}</p>
      <div>
        {!pictureId &&
          name
            .split(' ')
            .map(word => word[0])
            .join('')}
      </div>
    </Wrapper>
  );
}

PersonItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  orgName: PropTypes.string,
  pictureId: PropTypes.number,
  selectPerson: PropTypes.func,
  showModal: PropTypes.func,
};

export default PersonItem;
