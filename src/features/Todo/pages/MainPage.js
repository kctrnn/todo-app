import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoFilters from '../../../constants/TodoFilters';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoTab from '../components/TodoTab';

import { addTodo, deleteTodo, toggleTodo } from '../todoSlice';
import { setVisibilityFilter } from '../../../app/filterSlice';

function MainPage() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
      <div className='container'>
        <h1 className='todo-title'>#Todos</h1>

        <TodoTab filter={filter} onFilterClick={handleFilterClick} />

        {filter !== 'SHOW_COMPLETED' && (
          <TodoForm onTodoAddClick={handleTodoAddClick} />
        )}

        <TodoList
          todoList={visibleTodos}
          filter={filter}
          onTodoClick={handleTodoClick}
          onTodoDeleteClick={handleTodoDeleteClick}
        />
      </div>
    </div>
  );
}

export default MainPage;
