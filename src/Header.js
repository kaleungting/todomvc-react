import React from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

const Header = ({ addTodo }) => {
  const handleSave = (text, priority) => {
    if (text.length !== 0) {
      addTodo(text, priority);
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        newTodo
        onSave={handleSave}
        placeholder="What needs to be done?"
      />
    </header>
  );
};

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Header;
