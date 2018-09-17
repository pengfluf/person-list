/**
 *
 * PersonInfo
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

function PersonInfo({
  person,
  toggleModal,
  historyPush,
  deletePerson,
}) {
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
  const statCategories = [
    'Email',
    'Organization',
    'Groups',
    'Location',
  ];
  const statValues = [
    email && email[0].value,
    orgId && orgId.name,
    groups && getGroupName(groups),
    location,
  ];

  return (
    <Modal
      title="Person Information"
      toggleModal={toggleModal}
      historyPush={historyPush}
      context="PersonInfo"
      deletePerson={deletePerson}
      personId={person.id}
    >
      <Fragment>
        <Avatar size={80} pirctureId={pictureId} name={name} />
        <Name>{name}</Name>
        <Phone>
          {(phone && phone[0].value) ||
            "Phone number isn't specified"}
        </Phone>

        <Line context="PersonInfo" />

        <Stats>
          <div>
            {statCategories.map(category => (
              <StatCategory key={category}>{category}:</StatCategory>
            ))}
          </div>
          <div>
            {/* eslint-disable react/no-array-index-key */}
            {statValues.map((value, index) => (
              <StatValue
                key={value ? `${value.slice(0, 4)}${index}` : index}
              >
                {value || missingStatMsg}
              </StatValue>
            ))}
            {/* eslint-enable */}
          </div>
        </Stats>
      </Fragment>
    </Modal>
  );
}

PersonInfo.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
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

export default PersonInfo;
