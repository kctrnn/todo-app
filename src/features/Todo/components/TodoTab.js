import React from 'react';
import PropTypes from 'prop-types';

TodoTab.propTypes = {};

function TodoTab({ filter, onFilterClick }) {
  return (
    <div className='todo-tab'>
      <a onClick={() => onFilterClick('SHOW_ALL')}>All</a>
      <a onClick={() => onFilterClick('SHOW_ACTIVE')}>Active</a>
      <a onClick={() => onFilterClick('SHOW_COMPLETED')}>Completed</a>
    </div>
  );
}

export default TodoTab;
