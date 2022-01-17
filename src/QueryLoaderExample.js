import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useQueryLoader, usePreloadedQuery } from 'react-relay/hooks';

const QueryLoaderExample = graphql`
  query QueryLoaderExampleQuery {
    viewer {
      login
      name
      email
    }
  }
`;

const QueryLoaderExampleFetcher = (props) => {
  const [queryReference, loadQuery, disposeQuery] =
    useQueryLoader(QueryLoaderExample);

  let button = (
    <button onClick={() => loadQuery({})} className="btn btn-danger">
      Show query results
    </button>
  );

  let body = null;
  if (queryReference != null) {
    body = (
      <React.Suspense fallback="Loading">
        <QueryLoaderDisplay queryReference={queryReference} />
      </React.Suspense>
    );

    button = (
      <button onClick={disposeQuery} className="btn btn-danger">
        Hide query results
      </button>
    );
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Query Loader Example</h4>
        {body}
        <div className="text-center">
          <div className="text-center">{button}</div>
        </div>
      </div>
    </div>
  );
};

const QueryLoaderDisplay = ({ queryReference }) => {
  const data = usePreloadedQuery(QueryLoaderExample, queryReference);

  return (
    <ul>
      <li>Login: {data.viewer.login}</li>
      <li>Name: {data.viewer.name}</li>
      <li>Email: {data.viewer.email}</li>
    </ul>
  );
};

export default QueryLoaderExampleFetcher;
