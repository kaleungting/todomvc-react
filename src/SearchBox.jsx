import React from 'react';
import PropTypes from 'prop-types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBox = ({ placeholder, handleChange }) => (
  <div className="searchbox-container">
    <FontAwesomeIcon className="search" icon={faSearch} />
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBox;
