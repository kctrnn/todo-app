import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './TodoTab.scss';

TodoTab.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

function TodoTab({ filter, onFilterClick }) {
  return (
    <div className='todo-tab'>
      <a
        className={filter === 'SHOW_ALL' ? 'active' : 'inactive'}
        href='#'
        onClick={() => onFilterClick('SHOW_ALL')}
      >
        All
      </a>
      <a
        className={filter === 'SHOW_ACTIVE' ? 'active' : 'inactive'}
        href='#'
        onClick={() => onFilterClick('SHOW_ACTIVE')}
      >
        Active
      </a>
      <a
        className={filter === 'SHOW_COMPLETED' ? 'active' : 'inactive'}
        href='#'
        onClick={() => onFilterClick('SHOW_COMPLETED')}
      >
        Completed
      </a>
    </div>
  );
}

export default TodoTab;
