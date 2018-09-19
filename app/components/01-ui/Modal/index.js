/**
 *
 * Overlay
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/01-ui/Button';
import Overlay from 'components/01-ui/Overlay';

import Wrapper from './styled/Wrapper';
import Pane from './styled/Pane';
import Title from './styled/Title';
import Close from './styled/Close';
import Info from './styled/Info';

export function Modal({
  title,
  toggleModal,
  historyPush,
  deletePerson,
  personId,
  context,
  children,
}) {
  return (
    <Overlay toggleModal={toggleModal} historyPush={historyPush}>
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
        <Info context={context}>{...children}</Info>
        <Pane position="bottom">
          {deletePerson && (
            <Button
              text="Delete Person"
              type="delete"
              onClick={() => {
                deletePerson(personId);
              }}
            />
          )}
          <Button
            text="Back"
            onClick={() => {
              toggleModal();
              historyPush('/');
            }}
          />
        </Pane>
      </Wrapper>
    </Overlay>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  toggleModal: PropTypes.func,
  historyPush: PropTypes.func,
  deletePerson: PropTypes.func,
  personId: PropTypes.number,
  context: PropTypes.string,
  children: PropTypes.object,
};

export default Modal;
