/**
 *
 * SearchFilter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import InputField from 'components/InputField';

function SearchFilter({ searchFilter, updateSearchFilter }) {
  return (
    <InputField
      type="text"
      value={searchFilter}
      onChange={e => updateSearchFilter(e.target.value)}
      placeholder="Search in the current list"
    />
  );
}

SearchFilter.propTypes = {
  searchFilter: PropTypes.string,
  updateSearchFilter: PropTypes.func,
};

export default SearchFilter;
