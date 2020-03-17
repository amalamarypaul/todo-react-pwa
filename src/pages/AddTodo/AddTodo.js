import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import './addTodo.css';
import { Layout } from 'components';
import { addTodos } from 'store/todos';

const AddTodo = ({ addTodos }) => {
  let history = useHistory();
  const [todo, updateTodo] = useState('');
  function handleChange(e) {
    updateTodo(e.target.value);
  }
  function onSubmit() {
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'short' });
    const addedDate = `${today.getDate()} ${month} ${today.getFullYear()}`;
    addTodos({
      id: Math.random()
        .toString(36)
        .substring(2, 15),
      title: todo,
      addedDate,
      isDone: false
    });
    history.push('/');
  }
  return (
    <Layout>
      <input
        type="text"
        placeholder="Type your todo here"
        className="input"
        value={todo}
        onChange={handleChange}
        maxLength={80}
      />
      <button className="submit-button" onClick={onSubmit}>
        Add Todo
      </button>
    </Layout>
  );
};

AddTodo.propTypes = {
  addTodos: PropTypes.func
};
export default connect(null, { addTodos })(AddTodo);
