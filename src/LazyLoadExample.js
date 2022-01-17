import React, { Suspense } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';

const LazyLoadExampleQuery = graphql`
  query LazyLoadExampleQuery {
    organization(login: "atlassian") {
      name
      email
    }
  }
`;

const LazyLoadExample = () => {
  const data = useLazyLoadQuery(LazyLoadExampleQuery);

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Lazy Loading a query</h4>
        <div>
          <ul>
            <li>Name: {data.organization?.name}</li>
            <li>Email: {data.organization?.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const LazyLoadWrapper = () => (
  <Suspense fallback="Loading...">
    <LazyLoadExample />
  </Suspense>
);

export default LazyLoadWrapper;
