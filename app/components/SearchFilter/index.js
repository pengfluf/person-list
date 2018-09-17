/**
 *
 * SearchFilter
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import InputField from 'components/InputField';

function SearchFilter({
  searchFilter,
  updateSearchFilter,
  searchPerson,
}) {
  return (
    <InputField
      type="text"
      value={searchFilter}
      onChange={e => {
        updateSearchFilter(e.target.value);
      }}
      onKeyUp={e => {
        if (e.key === 'Enter') {
          searchPerson();
        }
      }}
      placeholder="Search in the list or..."
    />
  );
}

SearchFilter.propTypes = {
  searchFilter: PropTypes.string,
  updateSearchFilter: PropTypes.func,
  searchPerson: PropTypes.func,
};

export default SearchFilter;
