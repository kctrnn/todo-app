import React from 'react';

import { TodoProvider } from './components/TodoContext';
import TodoApp from './components/TodoApp';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <div className='App'>
      <TodoProvider>
        <Container>
          <h1 className='title text-center'>#todo</h1>
          <TodoApp />
        </Container>
      </TodoProvider>
    </div>
  );
}
