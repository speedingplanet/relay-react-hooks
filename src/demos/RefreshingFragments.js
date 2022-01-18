import React, { Suspense, useState, useCallback } from 'react';
import graphql from 'babel-plugin-relay/macro';
import {
  useQueryLoader,
  usePreloadedQuery,
  useRefetchableFragment,
} from 'react-relay';

const RepoWithReactions = graphql`
  query RefreshingFragmentsQuery($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      name
      owner {
        login
      }
      issues(first: 10) {
        totalCount
        nodes {
          ...RefreshingFragmentsReactionsFragment
        }
      }
    }
  }
`;

const IssuesFragment = graphql`
  fragment RefreshingFragmentsReactionsFragment on Issue
  @refetchable(queryName: "ReactionsFragmentRefreshQuery") {
    id
    title
    reactions(first: 10) {
      totalCount
      nodes {
        id
        content
        user {
          name
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

  return (
    <div className="card">
      <h4 className="card-header">Refreshing Fragments</h4>
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
          <DisplayQuery queryRef={queryRef} />
        </Suspense>
      ) : (
        ''
      )}
    </div>
  );
};

const DisplayQuery = ({ queryRef }) => {
  const { repository } = usePreloadedQuery(RepoWithReactions, queryRef);
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <span>
          Repository: {repository.owner.login}/{repository.name}
        </span>
      </li>
      <li className="list-group-item">
        Issue count: {repository.issues.totalCount}
      </li>
      {repository.issues.nodes.map((i) => (
        <ShowIssue issue={i} key={i.__id} />
      ))}
    </ul>
  );
};

const ShowIssue = ({ issue }) => {
  let [i, refetch] = useRefetchableFragment(IssuesFragment, issue);
  const refresh = useCallback(() => {
    console.log('Running refresh():', Date.now());
    refetch({}, { fetchPolicy: 'network-only' });
  }, [refetch]);

  return (
    <li className="list-group-item">
      <span>
        {i.title} ({i.reactions.totalCount} reactions)
      </span>
      &nbsp;
      <button onClick={refresh} className="btn btn-sm btn-warning">
        Refresh
      </button>
      <ul>
        {i.reactions.nodes.map((r) => {
          return (
            <li key={r.id}>
              {r.user.name}: {r.content}
            </li>
          );
        })}
      </ul>
    </li>
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
