import React from 'react';

import MenuItem from './MenuItem';

import './menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <MenuItem icon="All" text="All" />
      <MenuItem icon="Active" text="Active" />
      <MenuItem icon="Completed" text="Completed" />
    </div>
  );
};

export default Menu;
