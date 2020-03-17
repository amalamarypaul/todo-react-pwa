import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { deleteTodo } from 'store/todos';

const Card = ({ title, addedDate, id, deleteTodo }) => {
  function onDelete() {
    deleteTodo(id);
  }
  return (
    <div>
      <h3>{title}</h3>
      <p>{addedDate}</p>
      <FontAwesomeIcon icon={faTrash} onClick={onDelete} />
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  addedDate: PropTypes.string,
  id: PropTypes.string,
  deleteTodo: PropTypes.func
};

export default connect(null, { deleteTodo })(Card);
