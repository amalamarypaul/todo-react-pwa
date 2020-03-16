import React from 'react';
import PropTypes from 'prop-types';

import { Menu } from 'components';

import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Menu />
      <div className="sub-container">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default Layout;
