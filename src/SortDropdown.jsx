import React from 'react';
import PropTypes from 'prop-types';

const SortDropdown = ({ handleChange }) => (
  <div className="sort-dropdown">
    <select id="order" name="order" onChange={handleChange('sort')}>
      <option value="" selected disabled hidden>
        Sort By Priority
      </option>
      <option value="descending">Descending</option>
      <option value="ascending">Ascending</option>
    </select>
  </div>
);

SortDropdown.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default SortDropdown;
