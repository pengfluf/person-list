/**
 *
 * Overlay
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

import OverlayWrapper from './styled/OverlayWrapper';

export function Overlay({ hideModal, historyPush, children }) {
  return (
    <OverlayWrapper
      onClick={e => {
        if (e.target.className.includes('OverlayWrapper')) {
          hideModal();
          historyPush('/');
        }
      }}
    >
      {...children}
    </OverlayWrapper>
  );
}

Overlay.propTypes = {
  hideModal: PropTypes.func,
  historyPush: PropTypes.func,
  children: PropTypes.object,
};

export default Overlay;
