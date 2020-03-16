import React from 'react';
import { faBars, faArchive, faClock } from '@fortawesome/free-solid-svg-icons';

import MenuItem from './MenuItem';

import './menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <MenuItem icon={faBars} text="All" to="/" />
      <MenuItem icon={faClock} text="Active" to="/active" />
      <MenuItem icon={faArchive} text="Completed" to="/completed" />
    </div>
  );
};

export default Menu;
