// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(text, variables) {
  const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
  if (!REACT_APP_GITHUB_AUTH_TOKEN) {
    console.error(
      'No GitHub auth token found. Follow the directions here: https://relay.dev/docs/getting-started/step-by-step-guide/#21-github-graphql-authentication'
    );
  }

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;