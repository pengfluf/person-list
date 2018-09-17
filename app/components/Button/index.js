/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styled/Wrapper';

function Button({ onClick, text, context }) {
  return (
    <Wrapper context={context} onClick={onClick}>
      {text}
    </Wrapper>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  context: PropTypes.string,
};

export default Button;
