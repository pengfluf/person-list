/**
 *
 * PersonModal
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import getGroupName from 'helpers/getGroupName';

import Avatar from 'components/Avatar';
import Line from 'components/Line';
import Modal from 'components/Modal';

import Name from './styled/Name';
import Phone from './styled/Phone';
import Stats from './styled/Stats';
import StatCategory from './styled/StatCategory';
import StatValue from './styled/StatValue';

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

  const missingStatMsg = 'Not specified';

  return (
    <Modal
      title="Person Information"
      toggleModal={toggleModal}
      historyPush={historyPush}
    >
      <Fragment>
        <Avatar size={80} pirctureId={pictureId} name={name} />
        <Name>{name}</Name>
        <Phone>
          {phone[0].value || "Phone number isn't specified"}
        </Phone>

        <Line context="PersonModal" />

        <Stats>
          <div>
            <StatCategory>Email:</StatCategory>
            <StatCategory>Organization:</StatCategory>
            <StatCategory>Groups:</StatCategory>
            <StatCategory>Location:</StatCategory>
          </div>
          <div>
            <StatValue>{email[0].value || missingStatMsg}</StatValue>
            <StatValue>
              {(orgId && orgId.name) || missingStatMsg}
            </StatValue>
            <StatValue>
              {(groups && getGroupName(groups)) || missingStatMsg}
            </StatValue>
            <StatValue>{location || missingStatMsg}</StatValue>
          </div>
        </Stats>
      </Fragment>
    </Modal>
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
