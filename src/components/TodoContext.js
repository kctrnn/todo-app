import React, { useState, useEffect } from 'react';
const LOCAL_STORAGE_KEY = 'todo-app-local-storage';

export const TodoContext = React.createContext();

export function TodoProvider(props) {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );
  const [todo, setTodo] = useState('');

  // when todos[] is changed
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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

  function markChecked(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          console.log(id);
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
        markChecked,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
