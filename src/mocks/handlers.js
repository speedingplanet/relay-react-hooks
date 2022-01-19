import { graphql } from 'msw';

export const handlers = [
  graphql.query('QueryLoaderExampleQuery', (request, response, context) => {
    return response(
      context.data({
        viewer: {
          login: 'johnpaxton',
          name: 'John Paxton',
          email: '',
          id: 'johnpaxton-unique-id==',
        },
      })
    );
  }),
];

/*
  query QueryLoaderExampleQuery {
    viewer {
      login
      name
      email
    }
  }
*/
