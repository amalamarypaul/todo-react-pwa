import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { deleteTodo, updateTodo } from 'store/todos';

const Card = ({ title, addedDate, id, deleteTodo, updateTodo, isDone }) => {
  function onDelete() {
    deleteTodo(id);
  }
  function markAsDone() {
    updateTodo(id);
  }
  return (
    <div>
      <h3>{title}</h3>
      <p>{addedDate}</p>
      {!isDone && <input type="checkbox" onClick={markAsDone} />}
      <FontAwesomeIcon icon={faTrash} onClick={onDelete} />
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  addedDate: PropTypes.string,
  id: PropTypes.string,
  deleteTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  isDone: PropTypes.bool
};

export default connect(null, { deleteTodo, updateTodo })(Card);
