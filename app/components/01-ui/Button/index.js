/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styled/Wrapper';

function Button({ onClick, text, context, type }) {
  return (
    <Wrapper context={context} onClick={onClick} type={type}>
      {text}
    </Wrapper>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  context: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
