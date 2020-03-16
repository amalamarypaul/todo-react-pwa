import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, addedDate }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{addedDate}</p>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  addedDate: PropTypes.string
};

export default Card;
