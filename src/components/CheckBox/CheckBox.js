import React from 'react';
import PropTypes from 'prop-types';

import './checkBox.css';

const CheckBox = ({ onClick, checked, className }) => {
  return (
    <div className={`checkbox-container ${className}`} onClick={onClick}>
      <input type="checkbox" checked={checked} onChange={() => {}} />
      <span className="checkmark"></span>
    </div>
  );
};

CheckBox.propTypes = {
  onClick: PropTypes.func,
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string
};

export default CheckBox;
