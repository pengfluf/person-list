/**
 *
 * SearchFilter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function SearchFilter({ searchFilter, updateSearchFilter }) {
  return (
    <input
      type="text"
      value={searchFilter}
      onChange={e => updateSearchFilter(e.target.value)}
      placeholder="Search by filter"
    />
  );
}

SearchFilter.propTypes = {
  searchFilter: PropTypes.string,
  updateSearchFilter: PropTypes.func,
};

export default SearchFilter;
