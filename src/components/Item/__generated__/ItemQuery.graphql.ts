/**
 * @generated SignedSource<<0d8724d9a14d350981dead6f3bf28db9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemQuery$variables = {
  name: string;
};
export type ItemQuery$data = {
  readonly item: {
    readonly id: string;
    readonly myths: boolean;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"ItemCombinationListComponent_item" | "ItemCreationListComponent_item">;
  } | null;
};
export type ItemQuery = {
  response: ItemQuery$data;
  variables: ItemQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "myths",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v6 = [
  (v4/*: any*/),
  (v2/*: any*/)
],
v7 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ItemCombinationEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ItemCombination",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "source",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "target",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemCombinationListComponent_item"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemCreationListComponent_item"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "ItemCombinationConnection",
            "kind": "LinkedField",
            "name": "combinations",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": "combinations(first:3)"
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "ItemCombinationList_item_combinations",
            "kind": "LinkedHandle",
            "name": "combinations"
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "ItemCombinationConnection",
            "kind": "LinkedField",
            "name": "creates",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": "creates(first:3)"
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "ItemCreationList_item_creates",
            "kind": "LinkedHandle",
            "name": "creates"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "35070be729181671d058ba93e1401ede",
    "id": null,
    "metadata": {},
    "name": "ItemQuery",
    "operationKind": "query",
    "text": "query ItemQuery(\n  $name: String!\n) {\n  item(name: $name) {\n    name\n    myths\n    id\n    ...ItemCombinationListComponent_item\n    ...ItemCreationListComponent_item\n  }\n}\n\nfragment ItemCombinationListComponent_item on Item {\n  combinations(first: 3) {\n    edges {\n      node {\n        source {\n          id\n          name\n        }\n        target {\n          id\n          name\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ItemCreationListComponent_item on Item {\n  creates(first: 3) {\n    edges {\n      node {\n        source {\n          id\n          name\n        }\n        target {\n          id\n          name\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "29ffa047612fa68c8caa8b574619233e";

export default node;
