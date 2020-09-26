import React, { useState } from 'react';

export const TodoContext = React.createContext();

export function TodoProvider(props) {
  const [todos, setTodos] = useState([
    { todo: 'Hanhiu', completed: false, id: 0 },
    { todo: 'Hoian', completed: true, id: 1 },
    { todo: 'Kimchan', completed: false, id: 2 },
  ]);
  const [todo, setTodo] = useState('');

  function handleInputChange(event) {
    setTodo(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    setTodos((todos) => [
      ...todos,
      { todo, completed: false, id: todos.length },
    ]);
    setTodo('');
  }

  function markCompleted(id) {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        todo,
        handleInputChange,
        addTodo,
        deleteTodo,
        markCompleted,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
