import React, { useContext } from 'react';

import { Form, Button, Col } from 'react-bootstrap';
import { TodoContext } from './TodoContext';

export default function TodoForm() {
  const { handleInputChange, addTodo, todo } = useContext(TodoContext);
  return (
    <Form className='mb-4' onSubmit={addTodo}>
      <Form.Row>
        <Col xs={9}>
          <Form.Control
            onChange={handleInputChange}
            type='text'
            value={todo}
            required
            placeholder='add details'
          />
        </Col>
        <Col xs={3}>
          <Button type='submit' variant='primary' block>
            Add
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}
