import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    priority: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text || '',
      priority: this.props.priority || '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const { text, priority } = this.state;
    this.props.onSave(text, priority);
    if (this.props.newTodo) {
      this.setState({ text: '', priority: '' });
    }
  };

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={classnames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo,
          })}
          type="text"
          placeholder={this.props.placeholder}
          autoFocus={true}
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange('text')}
        />
        <div className="form-bottom">
          <div className="radio-btns">
            <input
              type="radio"
              value="High"
              name="priority"
              onChange={this.handleChange('priority')}
              checked={this.state.priority == 'High'}
            />{' '}
            High
            <input
              type="radio"
              value="Medium"
              name="priority"
              onChange={this.handleChange('priority')}
              checked={this.state.priority == 'Medium'}
            />{' '}
            Medium
            <input
              type="radio"
              value="Low"
              name="priority"
              onChange={this.handleChange('priority')}
              checked={this.state.priority == 'Low'}
            />{' '}
            Low
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
