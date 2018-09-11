/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from 'components/Logo';

import Wrapper from './styled/Wrapper';
import LogoH1 from './styled/LogoH1';
import LogoLink from './styled/LogoLink';

function Header() {
  return (
    <Wrapper>
      <LogoLink to="/">
        <LogoH1>
          <Logo />
        </LogoH1>
      </LogoLink>
    </Wrapper>
  );
}

Header.propTypes = {};

export default Header;
