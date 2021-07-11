import React, { Component } from 'react';
import Header from './Header';
import MainSection from './MainSection';
import SearchBox from './SearchBox.jsx';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      searchField: '',
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  addTodo = (text, priority) => {
    const todos = [
      {
        id:
          this.state.todos.reduce(
            (maxId, todo) => Math.max(todo.id, maxId),
            -1
          ) + 1,
        completed: false,
        text: text,
        priority: priority,
      },
      ...this.state.todos,
    ];
    this.setState({ todos });
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  };

  editTodo = (id, text, priority) => {
    const todos = this.state.todos.map(
      todo => (todo.id === id ? { ...todo, text, priority } : todo)
    );
    this.setState({ todos });
  };

  completeTodo = id => {
    const todos = this.state.todos.map(
      todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
    this.setState({ todos });
  };

  completeAll = () => {
    const areAllMarked = this.state.todos.every(todo => todo.completed);
    const todos = this.state.todos.map(todo => {
      return { ...todo, completed: !areAllMarked };
    });
    this.setState({ todos });
  };

  clearCompleted = () => {
    const todos = this.state.todos.filter(todo => todo.completed === false);
    this.setState({ todos });
  };

  actions = {
    addTodo: this.addTodo,
    deleteTodo: this.deleteTodo,
    editTodo: this.editTodo,
    completeTodo: this.completeTodo,
    completeAll: this.completeAll,
    clearCompleted: this.clearCompleted,
  };

  render() {
    const { todos, searchField } = this.state;
    const filteredtodos = todos.filter(todo =>
      todo.text.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <Header addTodo={this.actions.addTodo} />
        <SearchBox
          placeholder="search to dos"
          handleChange={this.handleChange}
        />
        <MainSection todos={filteredtodos} actions={this.actions} />
        <div className="creator">by Ken T.</div>
      </div>
    );
  }
}

export default App;
