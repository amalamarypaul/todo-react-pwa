import React from 'react';
import PropTypes from 'prop-types';

import './home.css';
import { Layout, Card } from 'components';

const todos = [
  {
    id: 1,
    title: 'Activity number 1',
    addedDate: '16 Mar 2020',
    isDone: false
  },
  {
    id: 2,
    title: 'Purchase vegetables',
    addedDate: '16 Mar 2020',
    isDone: false
  },
  {
    id: 3,
    title: 'Evening walk for 2 hrs',
    addedDate: '16 Mar 2020',
    isDone: true
  }
];

const Home = ({ name }) => {
  return (
    <Layout>
      <h1>{name}</h1>
      {todos.map(item => {
        const { id, title, addedDate, isDone } = item;
        if (name === 'Active') {
          return (
            !isDone && <Card title={title} addedDate={addedDate} key={id} />
          );
        } else if (name === 'Completed') {
          return (
            isDone && <Card title={title} addedDate={addedDate} key={id} />
          );
        } else {
          return <Card title={title} addedDate={addedDate} key={id} />;
        }
      })}
    </Layout>
  );
};

Home.propTypes = {
  name: PropTypes.string
};
export default Home;
