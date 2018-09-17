/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import LogoSvg from 'components/LogoSvg';

import Wrapper from './styled/Wrapper';
import LogoH1 from './styled/LogoH1';
import LogoLink from './styled/LogoLink';

function Header({ getPersons, historyPush }) {
  return (
    <Wrapper>
      <LogoLink
        onClick={() => {
          historyPush('/');
          getPersons(0);
        }}
      >
        <LogoH1>
          <LogoSvg />
        </LogoH1>
      </LogoLink>
    </Wrapper>
  );
}

Header.propTypes = {
  getPersons: PropTypes.func,
  paginationStart: PropTypes.number,
  historyPush: PropTypes.func,
};

export default Header;
