/**
 *
 * Overlay
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

import OverlayWrapper from './styled/OverlayWrapper';

export function Overlay({ toggleModal, historyPush, children }) {
  return (
    <OverlayWrapper
      onClick={e => {
        if (e.target.className.includes('OverlayWrapper')) {
          toggleModal();
          historyPush('/');
        }
      }}
    >
      {children}
    </OverlayWrapper>
  );
}

Overlay.propTypes = {
  toggleModal: PropTypes.func,
  historyPush: PropTypes.func,
  children: PropTypes.object,
};

export default Overlay;
