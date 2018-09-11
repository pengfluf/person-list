/**
 *
 * PersonModal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import getGroupName from 'helpers/getGroupName';

import Avatar from 'components/Avatar';

import Wrapper from './styled/Wrapper';
import Pane from './styled/Pane';
import Info from './styled/Info';

function PersonModal({ person, hideModal, historyPush }) {
  const {
    name,
    picture_id: pictureId,
    phone,
    email,
    org_id: orgId,
    f552b684eef72ff3610c41a6a0ecceab66f9feb7: groups,
    '2b1bf3af9318071c1782df548748170642ec799a': location,
  } = person;
  return (
    <Wrapper>
      <Pane position="top">
        <h2>Person Information</h2>
        <button
          onClick={() => {
            hideModal();
            historyPush('/');
          }}
        >
          [x]
        </button>
      </Pane>

      <Info>
        <Avatar size={80} pirctureId={pictureId} name={name} />
        <p>{name}</p>
        <p>{phone[0].value}</p>
        <p>Email: {email[0].value}</p>
        <p>Organization: {orgId.name}</p>
        <p>Groups: {getGroupName(groups)}</p>
        <p>Location: {location}</p>
      </Info>

      <Pane position="bottom">
        <button
          onClick={() => {
            hideModal();
            historyPush('/');
          }}
        >
          Back
        </button>
      </Pane>
    </Wrapper>
  );
}

PersonModal.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.array,
    email: PropTypes.array,
    org_id: PropTypes.shape({
      name: PropTypes.string,
    }),
    groups: PropTypes.number,
    location: PropTypes.string,
  }),
  hideModal: PropTypes.func,
  historyPush: PropTypes.func,
};

export default PersonModal;
