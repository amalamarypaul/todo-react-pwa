import React from 'react';
import { faBars, faArchive, faClock } from '@fortawesome/free-solid-svg-icons';

import MenuItem from './MenuItem';

import './menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <MenuItem icon={faBars} text="All" />
      <MenuItem icon={faClock} text="Active" />
      <MenuItem icon={faArchive} text="Completed" />
    </div>
  );
};

export default Menu;
