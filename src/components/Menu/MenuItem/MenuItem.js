import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import './item.css';

const MenuItem = ({ icon, text, to }) => {
  return (
    <Link to={to} className="link">
      <div className="item">
        <FontAwesomeIcon icon={icon} />
        <p className="item-text">{text}</p>
      </div>
    </Link>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.object, //eslint-disable-line
  text: PropTypes.string,
  to: PropTypes.string
};

export default MenuItem;
