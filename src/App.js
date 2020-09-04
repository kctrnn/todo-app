import React from 'react';
import './App.css';

import TodoItems from './components/TodoItems'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ title: 'Hanhiu', isCompleted: false }],
      currentItem: ''
    }

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(event) {
    this.setState({
      currentItem: event.target.value
    })
  }

  addItem(event) {
    event.preventDefault();
    const newItem = this.state.currentItem;

    if (newItem !== '') {
      this.setState({
        currentItem: '',
        items: [...this.state.items, { title: newItem, isCompleted: false }]
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className='App__header'>
          <h1 className='App__title'>Hanhiu's Todo List</h1>
          <form className='App__form' onSubmit={this.addItem}>
            <input type='text' placeholder='Add a new item' onChange={this.handleInput} value={this.state.currentItem}/>
            <button type='submit'>Add</button>
          </form>
        </header>

        <TodoItems items={this.state.items}></TodoItems>
      </div>
    );
  }
}

export default App;
