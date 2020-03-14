import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <h3 className="item">All</h3>
      <h3 className="item">Active</h3>
      <h3 className="item">Completed</h3>
    </div>
  );
};

export default Menu;
