import React, { Suspense, useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';

const UserForm = ({ searchUser }) => {
  const [username, setUsername] = useState('');
  return (
    <>
      <div>
        <label htmlFor="user-name" className="form-label">
          User name:
        </label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          className="form-control"
          id="user-name"
        />
      </div>
      <div className="mt-2">
        <button
          onClick={() => searchUser(username)}
          type="button"
          className="btn btn-primary"
        >
          Search
        </button>
      </div>
    </>
  );
};

const VariablesExample = () => {
  const [username, setUsername] = useState('');
  const handleSearchUser = (username) => {
    setUsername(username);
  };
  return (
    <div>
      <UserForm searchUser={handleSearchUser} />
      {username ? (
        <Suspense fallback="Loading...">
          <VariablesExampleInner username={username} />
        </Suspense>
      ) : (
        <p>No user to search on</p>
      )}
    </div>
  );
};

const VariablesExampleInner = ({ username }) => {
  const variablesQuery = graphql`
    query VariablesExampleQuery($username: String!) {
      user(login: $username) {
        name
        email
        organizations(first: 5) {
          nodes {
            name
          }
        }
      }
    }
  `;

  const data = useLazyLoadQuery(variablesQuery, { username });

  return (
    <div className="card mt-2">
      <div className="card-body">
        <h4 className="card-title">User Details</h4>
        <ul>
          <li>Name: {data.user.name}</li>
          <li>Email: {data.user.email}</li>
        </ul>
      </div>
    </div>
  );
};

export default VariablesExample;
