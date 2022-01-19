import React, { Suspense } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { useFragment } from 'react-relay';

const UserQuery = graphql`
  query FragmentExampleQuery {
    user(login: "sindresorhus") {
      ...FragmentExample
      organizations(first: 5) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`;

const FragmentParent = () => {
  const data = useLazyLoadQuery(UserQuery);

  return <FragmentExample user={data.user} />;
};

const FragmentExample = ({ user }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Fragments</h4>
        <p>The user belongs to {user.organizations.totalCount} organizations</p>
        <FragmentDisplay fragmentData={user} />
      </div>
    </div>
  );
};

const FragmentDisplay = ({ fragmentData }) => {
  const userFragment = graphql`
    fragment FragmentExample on User {
      name
      email
    }
  `;

  const fragment = useFragment(userFragment, fragmentData);

  return (
    <ul>
      <li>Name: {fragment.name}</li>
      <li>Email: {fragment.email}</li>
    </ul>
  );
};

const FragmentWrapper = () => (
  <Suspense fallback="Loading">
    <FragmentParent />
  </Suspense>
);

export default FragmentWrapper;
