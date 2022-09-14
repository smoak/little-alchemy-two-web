import { Environment, FetchFunction, Network, RecordSource, Store } from 'relay-runtime';

const fetchQuery: FetchFunction = async (operation, variables) => {
  if (!process.env.REACT_APP_GRAPHQL_ENDPOINT) {
    throw new Error('REACT_APP_GRAPHQL_ENDPOINT is not configured!');
  }

  const body = JSON.stringify({ query: operation.text, variables });
  console.log(body);
  const response = await fetch(process.env.REACT_APP_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  console.log(response);

  return response.json();
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
