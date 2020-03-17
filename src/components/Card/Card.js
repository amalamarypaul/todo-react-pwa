import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { deleteTodo, updateTodo } from 'store/todos';
import './card.css';
import { CheckBox } from 'components';

const Card = ({ title, addedDate, id, deleteTodo, updateTodo, isDone }) => {
  function onDelete() {
    deleteTodo(id);
  }
  function markAsDone() {
    updateTodo(id);
  }
  return (
    <div className="card-container">
      <p id="card-todo">{title}</p>
      <CheckBox
        onClick={markAsDone}
        checked={isDone}
        className="card-checkbox"
      />
      <FontAwesomeIcon id="card-trash" icon={faTrash} onClick={onDelete} />
      <p id="card-date">{addedDate}</p>
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
