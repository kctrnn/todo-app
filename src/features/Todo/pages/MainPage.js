import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo, deleteTodo, toggleTodo } from '../todoSlice';
import { setVisibilityFilter } from '../../../app/filterSlice';
import TodoTab from '../components/TodoTab';

import TodoFilters from '../../../constants/TodoFilters';

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  const visibleTodos = getVisibleTodos(todos, filter);

  function getVisibleTodos(todos, filter) {
    switch (filter) {
      case TodoFilters.SHOW_ALL:
        return todos;
      case TodoFilters.SHOW_ACTIVE:
        return todos.filter((todo) => !todo.completed);
      case TodoFilters.SHOW_COMPLETED:
        return todos.filter((todo) => todo.completed);
    }
  }

  function handleTodoClick(id) {
    dispatch(toggleTodo(id));
  }

  function handleTodoAddClick(text) {
    dispatch(addTodo(text));
  }

  function handleTodoDeleteClick(id) {
    dispatch(deleteTodo(id));
  }

  function handleFilterClick(filter) {
    dispatch(setVisibilityFilter(filter));
  }

  return (
    <div className='todo-main'>
      <h1>#Todos</h1>

      <TodoTab filter={filter} onFilterClick={handleFilterClick} />

      <TodoForm
        onTodoAddClick={handleTodoAddClick}
        onTodoDeleteClick={handleTodoDeleteClick}
      />

      <TodoList todoList={visibleTodos} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default MainPage;
