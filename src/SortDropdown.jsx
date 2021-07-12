import React from 'react';
import PropTypes from 'prop-types';

const SortDropdown = ({ handleChange }) => (
  <div className="sort-dropdown">
    <select
      id="order"
      name="order"
      defaultValue={'DEFAULT'}
      onChange={handleChange('sort')}
    >
      <option value="DEFAULT" disabled>
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
