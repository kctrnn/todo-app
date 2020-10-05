import React, { useContext } from 'react';
import { ListGroup, Row, Col, Form, Button } from 'react-bootstrap';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { TodoContext } from './TodoContext';

export default function Todo({ todo, completed, id }) {
  const { markChecked, deleteTodo } = useContext(TodoContext);
  return (
    <ListGroup.Item className='px-0'>
      <Row>
        <Col xs={11}>
          <Form.Check className='d-flex align-items-center'>
            <Form.Check.Input
              className='mt-0'
              onChange={() => markChecked(id)}
              checked={completed}
            />
            <Form.Check.Label
              className='ml-3'
              style={{
                textDecoration: completed ? 'line-through' : 'none',
                color: completed ? '#333' : '#000',
              }}
            >
              {todo}
            </Form.Check.Label>
          </Form.Check>
        </Col>

        <Col xs={1} className='px-0'>
          <Button variant='link' onClick={() => deleteTodo(id)}>
            <DeleteOutlineIcon />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
