import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import Todo from './Todo';
import { ListGroup } from 'react-bootstrap';

export default function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <ListGroup>
      {todos.map((todo) => (
        <Todo
          todo={todo.todo}
          completed={todo.completed}
          id={todo.id}
          key={todo.id}
        />
      ))}
    </ListGroup>
  );
}
