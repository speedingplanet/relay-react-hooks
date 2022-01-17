import graphql from 'babel-plugin-relay/macro';

const ExternalQuery = graphql`
  query ExternalQuery {
    user(login: "sindresorhus") {
      name
      email
    }
  }
`;

export default ExternalQuery;
