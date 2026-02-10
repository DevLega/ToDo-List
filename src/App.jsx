import { Component } from 'react'
import initialTodos from './data/todo.json'
import Filter from './components/Filter'
import TodoList from './components/TodoList'
import Info from './components/Info'
import TodoEditor from './components/TodoEditor'

class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  }

  applyFilter = (value) => {
    this.setState({ filter: value })
  }

  handleDelete = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((task) => task.id !== id)
    }))
  }

  handleCheck = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    }))
  }

  addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false }

    this.setState((prev) => ({
      todos: [...prev.todos, newTask]
    }))
  }

  render() {
    return (
      <main>
        <Info tasks={this.state.todos}></Info>
        <TodoEditor addTask={this.addTask} />
        <Filter onChange={this.applyFilter} />
        <TodoList tasks={this.state.todos} filter={this.state.filter} handleCheck={this.handleCheck} handleDelete={this.handleDelete} />
      </main>
    )
  }
}

export default App
