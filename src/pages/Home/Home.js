import React from 'react';
import PropTypes from 'prop-types';

import './home.css';
import Layout from 'pages/Layout';

const Home = ({ name }) => {
  return (
    <Layout>
      <h1>{name}</h1>
    </Layout>
  );
};

Home.propTypes = {
  name: PropTypes.string
};
export default Home;
