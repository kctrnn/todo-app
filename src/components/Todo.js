import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Todo({ todo, completed, id }) {
  return <ListGroup.Item>{todo}</ListGroup.Item>;
}
