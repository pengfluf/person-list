/**
 *
 * Pagination
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
  const {
    start,
    limit,
    next_start: nextStart,
    more_items_in_collection: moreItems,
  } = props.pagination;
  return (
    <div>
      {start > 0 && (
        <button onClick={() => props.getPersons(start - limit)}>
          Back
        </button>
      )}
      {moreItems && (
        <button onClick={() => props.getPersons(nextStart)}>
          Next
        </button>
      )}
    </div>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.shape({
    start: PropTypes.number,
    limit: PropTypes.number,
    next_start: PropTypes.number,
    more_items_in_collection: PropTypes.bool,
  }),
  getPersons: PropTypes.func,
};

export default Pagination;
