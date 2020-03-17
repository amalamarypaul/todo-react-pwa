import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './home.css';
import { Layout, Card } from 'components';

const Home = ({ name, todos }) => {
  return (
    <Layout>
      <h1>{name}</h1>
      {todos.map(item => {
        const { id, title, addedDate, isDone } = item;
        if (name === 'Active') {
          return (
            !isDone && (
              <Card title={title} addedDate={addedDate} key={id} id={id} />
            )
          );
        } else if (name === 'Completed') {
          return (
            isDone && (
              <Card
                title={title}
                addedDate={addedDate}
                key={id}
                id={id}
                isDone
              />
            )
          );
        } else {
          return (
            <Card
              title={title}
              addedDate={addedDate}
              key={id}
              id={id}
              isDone={isDone}
            />
          );
        }
      })}
      <Link to="/create">
        <button className="add-button">
          <p>Add</p>
        </button>
      </Link>
    </Layout>
  );
};

Home.propTypes = {
  name: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      addedDate: PropTypes.string,
      isDone: PropTypes.bool
    })
  )
};

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(mapStateToProps)(Home);
