/**
 *
 * Avatar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styled/Wrapper';

function Avatar({ size, pictureId, name }) {
  return (
    <Wrapper size={size}>
      {!pictureId &&
        name
          .split(' ')
          .map(word => word[0])
          .join('')}
    </Wrapper>
  );
}

Avatar.propTypes = {
  size: PropTypes.number,
  pictureId: PropTypes.number,
  name: PropTypes.string,
};

export default Avatar;
