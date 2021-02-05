import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {};

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
    <form onSubmit={handleSubmit}>
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
