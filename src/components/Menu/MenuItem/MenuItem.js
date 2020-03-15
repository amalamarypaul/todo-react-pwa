import React from 'react';
import PropTypes from 'prop-types';

import './item.css';

const MenuItem = ({ icon, text }) => {
  return (
    <div className="item">
      <p>{icon}</p>
      <p className="itemText">{text}</p>
    </div>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string
};

export default MenuItem;
