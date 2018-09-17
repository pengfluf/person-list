/**
 *
 * PersonItem
 *
 */

import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash.flow';

import Avatar from 'components/Avatar';

import Wrapper from './styled/Wrapper';
import Name from './styled/Name';
import Organization from './styled/Organization';

const personItemSource = {
  beginDrag({ id, index }) {
    return {
      id,
      index,
    };
  },
};

const personItemTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    /* eslint-disable-next-line */
    const hoverBoundingRect = findDOMNode(
      component,
    ).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY =
      (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.movePersonItem(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    /* eslint-disable-next-line */
    monitor.getItem().index = hoverIndex;
  },
};

function PersonItem({
  connectDragSource,
  connectDropTarget,
  isDragging,
  id,
  index,
  name,
  orgName,
  pictureId,
  selectPerson,
  toggleModal,
  deletePerson,
}) {
  return (
    connectDragSource &&
    connectDropTarget &&
    connectDragSource(
      connectDropTarget(
        <div style={{ opacity: isDragging ? 0 : 1 }}>
          <Wrapper
            to={`/person/${id}`}
            onClick={() => {
              selectPerson(index);
              toggleModal();
            }}
          >
            <div>
              <Name>{name}</Name>
              <Organization>{orgName}</Organization>
            </div>

            <Avatar pictureId={pictureId} name={name} />
          </Wrapper>
          <button onClick={() => deletePerson(id)}>Delete</button>
        </div>,
      ),
    )
  );
}

PersonItem.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number,
  name: PropTypes.string,
  orgName: PropTypes.string,
  pictureId: PropTypes.number,
  selectPerson: PropTypes.func,
  toggleModal: PropTypes.func,
};

export default flow(
  DragSource('PersonItem', personItemSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })),
  DropTarget('PersonItem', personItemTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
  })),
)(PersonItem);
