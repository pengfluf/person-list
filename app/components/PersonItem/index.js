/**
 *
 * PersonItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'components/Avatar';

import Wrapper from './styled/Wrapper';
import Name from './styled/Name';
import Organization from './styled/Organization';

function PersonItem({
  id,
  index,
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
        selectPerson(index);
        showModal();
      }}
    >
      <div>
        <Name>{name}</Name>
        <Organization>{orgName}</Organization>
      </div>

      <Avatar pictureId={pictureId} name={name} />
    </Wrapper>
  );
}

PersonItem.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number,
  name: PropTypes.string,
  orgName: PropTypes.string,
  pictureId: PropTypes.number,
  selectPerson: PropTypes.func,
  showModal: PropTypes.func,
};

export default PersonItem;
