import React, { Suspense, useState, useCallback } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useQueryLoader, usePreloadedQuery } from 'react-relay';

const RepoWithReactions = graphql`
  query RefreshingQueriesQuery($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      name
      owner {
        login
      }
      issues(first: 10) {
        totalCount
        nodes {
          id
          title
          reactions(first: 10) {
            totalCount
            nodes {
              content
            }
          }
        }
      }
    }
  }
`;

const RefreshingQueries = () => {
  const [queryRef, loadQuery] = useQueryLoader(RepoWithReactions);
  const [repoQuery, setRepoQuery] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = Object.fromEntries(new FormData(event.target).entries());
    loadQuery({ name: formData.repoName, owner: formData.repoOwner });
    setRepoQuery(formData);
  };

  const refresh = useCallback(() => {
    console.log('Running refresh():', Date.now());
    loadQuery(
      { name: repoQuery.repoName, owner: repoQuery.repoOwner },
      { fetchPolicy: 'network-only' }
    );
  }, [loadQuery, repoQuery]);

  return (
    <div className="card">
      <h4 className="card-header">Refreshing Queries</h4>
      <div className="card-body">
        <PreviousValues query={repoQuery} />
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <label htmlFor="repo-owner" className="form-label">
              Repository Owner:
            </label>
            <input
              type="text"
              name="repoOwner"
              id="repo-owner"
              className="form-control"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="repo-name" className="form-label">
              Repository Name:
            </label>
            <input
              type="text"
              name="repoName"
              id="repo-name"
              className="form-control"
            />
          </div>
          <div className="mt-2">
            <button type="submit" className="btn btn-info">
              Search
            </button>
          </div>
        </form>
      </div>
      {queryRef != null ? (
        <Suspense fallback="Loading...">
          <DisplayQuery queryRef={queryRef} refresh={refresh} />
        </Suspense>
      ) : (
        ''
      )}
    </div>
  );
};

const DisplayQuery = ({ refresh, queryRef }) => {
  const { repository } = usePreloadedQuery(RepoWithReactions, queryRef);
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <span>
          Repository: {repository.owner.login}/{repository.name}
        </span>
        &nbsp;
        <button onClick={refresh} className="btn btn-sm btn-warning">
          Refresh
        </button>
      </li>
      <li className="list-group-item">
        Issue count: {repository.issues.totalCount}
      </li>
      {repository.issues.nodes.map((i) => (
        <li className="list-group-item" key={i.id}>
          {i.title} ({i.reactions.totalCount} reactions)
        </li>
      ))}
    </ul>
  );
};

const PreviousValues = ({ query }) => {
  if (!query) {
    return <p>No previous values</p>;
  }

  return (
    <div>
      <span>Previous values:</span>
      <ul className="list-inline">
        {Object.entries(query).map(([key, value]) => (
          <li key={key} className="list-inline-item">
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RefreshingQueries;
