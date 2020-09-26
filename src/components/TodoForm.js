import React, { useContext } from 'react';

import { Form, Button, Col } from 'react-bootstrap';
import { TodoContext } from './TodoContext';

export default function TodoForm() {
  const { handleInputChange, addTodo, todo } = useContext(TodoContext);
  return (
    <div className='TodoForm my-3'>
      <Form onSubmit={addTodo}>
        <Form.Row>
          <Col sm={9}>
            <Form.Control
              onChange={handleInputChange}
              type='text'
              value={todo}
              required
              placeholder='Add details'
            />
          </Col>
          <Col sm={3}>
            <Button type='submit' variant='info' block>
              Add
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
}
