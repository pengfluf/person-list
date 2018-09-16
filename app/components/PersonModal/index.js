/**
 *
 * PersonModal
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import getGroupName from 'helpers/getGroupName';

import Avatar from 'components/Avatar';
import Line from 'components/Line';

import Wrapper from './styled/Wrapper';
import Pane from './styled/Pane';
import Title from './styled/Title';
import Info from './styled/Info';
import Name from './styled/Name';
import Phone from './styled/Phone';
import Stats from './styled/Stats';
import StatCategory from './styled/StatCategory';
import StatValue from './styled/StatValue';
import Close from './styled/Close';
import Back from './styled/Back';

function PersonModal({ person, toggleModal, historyPush }) {
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
        <Title>Person Information</Title>
        <Close
          onClick={() => {
            toggleModal();
            historyPush('/');
          }}
        />
      </Pane>

      <Info>
        <Avatar size={80} pirctureId={pictureId} name={name} />
        <Name>{name}</Name>
        <Phone>{phone[0].value}</Phone>

        <Line context="PersonModal" />

        <Stats>
          <div>
            <StatCategory>Email:</StatCategory>
            <StatCategory>Organization:</StatCategory>
            <StatCategory>Groups:</StatCategory>
            <StatCategory>Location:</StatCategory>
          </div>
          <div>
            <StatValue>{email[0].value}</StatValue>
            <StatValue>{orgId && orgId.name}</StatValue>
            <StatValue>{groups && getGroupName(groups)}</StatValue>
            <StatValue>{location}</StatValue>
          </div>
        </Stats>
      </Info>

      <Pane position="bottom">
        <Back
          onClick={() => {
            toggleModal();
            historyPush('/');
          }}
        >
          Back
        </Back>
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
  toggleModal: PropTypes.func,
  historyPush: PropTypes.func,
};

export default PersonModal;
