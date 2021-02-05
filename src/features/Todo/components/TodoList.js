import React from 'react';
import Todo from './Todo';

TodoList.propTypes = {};

function TodoList({ todoList, onTodoClick }) {
  function handleClick(id) {
    if (onTodoClick) {
      onTodoClick(id);
    }
  }

  return (
    <ul>
      {todoList.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => handleClick(todo.id)} />
      ))}
    </ul>
  );
}

export default TodoList;
