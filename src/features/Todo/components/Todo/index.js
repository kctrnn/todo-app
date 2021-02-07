import React from 'react';
import PropTypes from 'prop-types';

import './Todo.scss';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

function Todo({ onClick, text, completed, filter, onDeleteClick }) {
  const IconImage = completed ? (
    <CheckBoxIcon style={{ color: '#2F80ED' }} />
  ) : (
    <CheckBoxOutlineBlankIcon />
  );

  return (
    <li
      className='todo-item'
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      <span className='icon' onClick={onClick}>
        {IconImage}
      </span>

      <span className='text'>{text}</span>

      <span className='icon'>
        {filter === 'SHOW_COMPLETED' && (
          <DeleteOutlineIcon onClick={onDeleteClick} />
        )}
      </span>
    </li>
  );
}

export default Todo;
