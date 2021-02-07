import React from 'react';
import Todo from '../Todo';
import PropTypes from 'prop-types';

import './TodoList.scss';

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

function TodoList({ todoList, onTodoClick, filter, onTodoDeleteClick }) {
  function handleClick(id) {
    if (onTodoClick) {
      onTodoClick(id);
    }
  }

  function handleDeleteClick(id) {
    if (onTodoDeleteClick) {
      onTodoDeleteClick(id);
    }
  }

  return (
    <ul className='todo-list'>
      {todoList.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => handleClick(todo.id)}
          onDeleteClick={() => handleDeleteClick(todo.id)}
          filter={filter}
        />
      ))}
    </ul>
  );
}

export default TodoList;
