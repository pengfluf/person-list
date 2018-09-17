/**
 *
 * Overlay
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

import Wrapper from './styled/Wrapper';
import Pane from './styled/Pane';
import Title from './styled/Title';
import Close from './styled/Close';
import Info from './styled/Info';

export function Modal({ title, toggleModal, historyPush, children }) {
  return (
    <Wrapper>
      <Pane position="top">
        <Title>{title}</Title>
        <Close
          onClick={() => {
            toggleModal();
            historyPush('/');
          }}
        />
      </Pane>
      <Info>{...children}</Info>
      <Pane position="bottom">
        <Button
          text="Back"
          onClick={() => {
            toggleModal();
            historyPush('/');
          }}
        />
      </Pane>
    </Wrapper>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  toggleModal: PropTypes.func,
  historyPush: PropTypes.func,
  chidlren: PropTypes.object,
};

export default Modal;
