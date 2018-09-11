/**
 *
 * Overlay
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

import OverlayWrapper from './styled/OverlayWrapper';

export function Overlay({ onClick, children }) {
  return (
    <OverlayWrapper
      onClick={e =>
        e.target.className.includes('OverlayWrapper') && onClick()
      }
    >
      {...children}
    </OverlayWrapper>
  );
}

Overlay.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.object,
};

export default Overlay;
