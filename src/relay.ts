import { Environment, FetchFunction, Network, RecordSource, Store } from 'relay-runtime';

const fetchQuery: FetchFunction = async (operation, variables) => {
  const body = JSON.stringify({ query: operation.text, variables });
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });

  return response.json();
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
