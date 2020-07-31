/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemSearchRefetchQueryVariables = {
    query: string;
};
export type ItemSearchRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"ItemSearch_search">;
};
export type ItemSearchRefetchQuery = {
    readonly response: ItemSearchRefetchQueryResponse;
    readonly variables: ItemSearchRefetchQueryVariables;
};



/*
query ItemSearchRefetchQuery(
  $query: String!
) {
  ...ItemSearch_search
}

fragment ItemSearch_search on Query {
  search(query: $query) {
    __typename
    ... on ItemSearchResults {
      items(first: 5) {
        edges {
          node {
            id
            name
            myths
          }
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemSearchRefetchQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ItemSearch_search"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ItemSearchRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "query",
            "variableName": "query"
          }
        ],
        "concreteType": null,
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 5
                  }
                ],
                "concreteType": "ItemConnection",
                "kind": "LinkedField",
                "name": "items",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Item",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "myths",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "items(first:5)"
              }
            ],
            "type": "ItemSearchResults",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "210be2135816f9897b4350d449a1e13e",
    "id": null,
    "metadata": {},
    "name": "ItemSearchRefetchQuery",
    "operationKind": "query",
    "text": "query ItemSearchRefetchQuery(\n  $query: String!\n) {\n  ...ItemSearch_search\n}\n\nfragment ItemSearch_search on Query {\n  search(query: $query) {\n    __typename\n    ... on ItemSearchResults {\n      items(first: 5) {\n        edges {\n          node {\n            id\n            name\n            myths\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'be0575cf72dca8276a0a0809c6e0d04d';
export default node;
