import React, { Suspense } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useQueryLoader } from 'react-relay';
import { usePreloadedQuery } from 'react-relay';
import usePaginationFragment from 'react-relay/lib/relay-hooks/usePaginationFragment';

// Parent query
const UserReposQuery = graphql`
  query RepoPaginationQuery($cursor: String, $count: Int!) {
    user(login: "sindresorhus") {
      id
      ...RepoPaginationReposListComponent_user
    }
  }
`;

// Fragment with the connection
const UserFragment = graphql`
  fragment RepoPaginationReposListComponent_user on User
  @refetchable(queryName: "ReposListPaginationQuery") {
    name
    repositories(first: $count, after: $cursor)
      @connection(key: "ReposList_user__repositories") {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

// Top-level component
const RepoPagination = () => {
  const [queryRef, loadQuery] = useQueryLoader(UserReposQuery);
  return (
    <div className="card">
      <h3 className="card-title">Pagination</h3>
      <div className="card-body">
        <button
          className="btn btn-primary"
          onClick={() => loadQuery({ count: 2 })}
        >
          Load Repos
        </button>
      </div>
      {queryRef !== null ? (
        <Suspense fallback="Loading...">
          <RepoCardBody queryRef={queryRef} />
        </Suspense>
      ) : (
        ''
      )}
    </div>
  );
};

// Level 2, displays non-paging data
const RepoCardBody = ({ queryRef }) => {
  const data = usePreloadedQuery(UserReposQuery, queryRef);
  console.log('data:', data);
  return (
    <>
      <div className="card-body">
        <p>ID: {data.user.id}</p>
        <ReposListComponent user={data.user} />
      </div>
    </>
  );
};

// Level three, this is what we should page within
// i.e., not multiple ReposListComponents, but multiple RepoLists
const ReposListComponent = ({ user }) => {
  const { data, loadNext } = usePaginationFragment(UserFragment, user);

  return (
    <div>
      {data.name !== null ? <p>Repos of {data.name}</p> : null}
      <ul>
        {(data.repositories?.edges ?? []).map((edge) => {
          // console.log('edge:', edge);
          const node = edge.node;
          return (
            <Suspense fallback="Loading..." key={node.id}>
              <RepoName repo={node} />
            </Suspense>
          );
        })}
      </ul>
      <div>
        {/* loadNext($count) -> repositories(first:$count, after:"[stored interally by Relay]") */}
        <button className="btn btn-secondary" onClick={() => loadNext(2)}>
          Load more repos!
        </button>
      </div>
    </div>
  );
};

const RepoName = ({ repo }) => {
  // console.log('repoNode: ', repo);
  return <li>Name: {repo.name}</li>;
};

export default RepoPagination;
