import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
  };

  state = {
    editing: false,
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id, text, priority) => {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text, priority);
    }
    this.setState({ editing: false });
  };

  render() {
    const { todo, completeTodo, deleteTodo } = this.props;
    const buttonClass = classnames('priority', todo.priority.toLowerCase());
    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          priority={todo.priority}
          editing={this.state.editing}
          onSave={(text, priority) => this.handleSave(todo.id, text, priority)}
        />
      );
    } else {
      element = (
        <div className="view">
          <div className="todo-item">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => completeTodo(todo.id)}
            />
            <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
            <div className={buttonClass}>{todo.priority}</div>
            <button className="destroy" onClick={() => deleteTodo(todo.id)} />
          </div>
        </div>
      );
    }

    return (
      <li
        className={classnames({
          completed: todo.completed,
          editing: this.state.editing,
        })}
      >
        {element}
      </li>
    );
  }
}
