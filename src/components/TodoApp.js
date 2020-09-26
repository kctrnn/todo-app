import React from 'react';

import { Tabs, Tab } from 'react-bootstrap';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoActive from './TodoActive';
import TodoCompleted from './TodoCompleted';

export default function TodoApp() {
  return (
    <Tabs defaultActiveKey='all'>
      <Tab eventKey='all' title='All'>
        <TodoForm />
        <TodoList />
      </Tab>
      <Tab eventKey='active' title='Active'>
        <TodoActive />
      </Tab>
      <Tab eventKey='completed' title='Completed'>
        <TodoCompleted />
      </Tab>
    </Tabs>
  );
}
