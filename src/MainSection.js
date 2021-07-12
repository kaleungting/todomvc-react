import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import Footer from './Footer';
import SearchBox from './SearchBox.jsx';
import SortDropdown from './SortDropdown.jsx';

const TODO_FILTERS = {
  SHOW_ALL: () => true,
  SHOW_ACTIVE: todo => !todo.completed,
  SHOW_COMPLETED: todo => todo.completed,
};

const PRIORITY_KEY = {
  High: 3,
  Medium: 2,
  Low: 1,
};

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      filter: 'SHOW_ALL',
      searchField: '',
      sort: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleClearCompleted = () => {
    this.props.actions.clearCompleted();
  };

  handleShow = filter => {
    this.setState({ filter });
  };

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props;
    if (todos.length > 0) {
      return (
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todos.length}
          onChange={actions.completeAll}
        />
      );
    }
  }

  renderFooter(completedCount) {
    const { todos } = this.props;
    const { filter } = this.state;
    const activeCount = todos.length - completedCount;

    if (todos.length) {
      return (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={this.handleClearCompleted.bind(this)}
          onShow={this.handleShow.bind(this)}
        />
      );
    }
  }

  render() {
    const { todos, actions } = this.props;
    const { filter, searchField, sort } = this.state;

    let filteredTodos = todos
      .filter(todo =>
        todo.text.toLowerCase().includes(searchField.toLowerCase())
      )
      .filter(TODO_FILTERS[filter]);

    if (sort) {
      switch (this.state.sort) {
        case 'ascending':
          filteredTodos = filteredTodos.sort(
            (a, b) =>
              (PRIORITY_KEY[a.priority] > PRIORITY_KEY[b.priority] && 1) || -1
          );
          break;
        case 'descending':
          filteredTodos = filteredTodos.sort(
            (a, b) =>
              (PRIORITY_KEY[a.priority] < PRIORITY_KEY[b.priority] && 1) || -1
          );
          break;
      }
    }

    const completedCount = todos.reduce((count, todo) => {
      return todo.completed ? count + 1 : count;
    }, 0);

    return (
      <div>
        <div className="action-bar">
          <SearchBox
            placeholder="search to dos"
            handleChange={this.handleChange}
          />
          <SortDropdown handleChange={this.handleChange} />
        </div>
        <section className="main">
          {this.renderToggleAll(completedCount)}
          <ul className="todo-list">
            {filteredTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} {...actions} />
            ))}
          </ul>
          {this.renderFooter(completedCount)}
        </section>
      </div>
    );
  }
}
