import React, { Suspense } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { useFragment } from 'react-relay';

const FragmentWrapper = () => (
  <Suspense fallback="Loading">
    <FragmentParent />
  </Suspense>
);

const FragmentParent = () => {
  const UserQuery = graphql`
    query FragmentExampleQuery {
      user(login: "sindresorhus") {
        ...FragmentExample
        organizations(first: 5) {
          nodes {
            name
          }
        }
      }
    }
  `;

  const data = useLazyLoadQuery(UserQuery);

  return <FragmentExample user={data.user} />;
};

const FragmentExample = (props) => {
  const userFragment = graphql`
    fragment FragmentExample on User {
      name
      email
    }
  `;

  const fragment = useFragment(userFragment, props.user);

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Fragments</h4>
        <ul>
          <li>Name: {fragment.name}</li>
          <li>Email: {fragment.email}</li>
        </ul>
      </div>
    </div>
  );
};

export default FragmentWrapper;
