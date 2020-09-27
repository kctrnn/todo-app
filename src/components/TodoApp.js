import React from 'react';

import { Tabs, Tab } from 'react-bootstrap';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoActive from './TodoActive';
import TodoCompleted from './TodoCompleted';

export default function TodoApp() {
  return (
    <div className='TodoApp mt-5'>
      <Tabs defaultActiveKey='all' className='d-flex'>
        <Tab eventKey='all' title='All'>
          <TodoForm />
          <TodoList />
        </Tab>
        <Tab eventKey='active' title='Active'>
          <TodoForm />
          <TodoActive />
        </Tab>
        <Tab eventKey='completed' title='Completed'>
          <TodoCompleted />
        </Tab>
      </Tabs>
    </div>
  );
}
