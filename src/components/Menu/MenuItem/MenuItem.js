import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './item.css';

const MenuItem = ({ icon, text }) => {
  return (
    <div className="item">
      <FontAwesomeIcon icon={icon} />
      <p className="itemText">{text}</p>
    </div>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string
};

export default MenuItem;
