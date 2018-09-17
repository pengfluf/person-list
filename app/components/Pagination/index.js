/**
 *
 * Pagination
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';

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
        <Button
          text="Back"
          onClick={() => props.getPersons(start - limit)}
        />
      )}
      {moreItems && (
        <Button
          text="Next"
          onClick={() => props.getPersons(nextStart)}
        />
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
