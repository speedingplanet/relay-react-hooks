import React, { Suspense } from 'react';
import { useLazyLoadQuery } from 'react-relay';
import ExternalQueryGQL from './ExternalQuery.graphql';

const ExternalQuery = () => {
  const data = useLazyLoadQuery(ExternalQueryGQL);

  return (
    <div className="card">
      <div className="card-body">
        <div>
          <h4 className="card-title">External Query</h4>
          <p>That is, the query lives in a separate file</p>
        </div>
        <div>
          <ul>
            <li>Name: {data.user?.name}</li>
            <li>Email: {data.user?.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ExternalQueryWrapper = () => (
  <Suspense fallback="Loading...">
    <ExternalQuery />
  </Suspense>
);

export default ExternalQueryWrapper;
