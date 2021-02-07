import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './TodoForm.scss';

TodoForm.propTypes = {
  onTodoAddClick: PropTypes.func.isRequired,
};

function TodoForm({ onTodoAddClick }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onTodoAddClick(text);
    setText('');
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleChange}
        required
        placeholder='add details'
      />

      <button type='submit'>Add</button>
    </form>
  );
}

export default TodoForm;
