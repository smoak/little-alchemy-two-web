/**
 * @generated SignedSource<<9c72f9238b0d3bee9eef21eae41b2d31>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemQuery$variables = {
  count?: number | null;
  cursor?: string | null;
  name: string;
};
export type ItemQuery$data = {
  readonly item: {
    readonly id: string;
    readonly imageUrl: string;
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "count"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v3 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "myths",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "imageUrl",
  "storageKey": null
},
v8 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v9 = [
  (v6/*: any*/),
  (v4/*: any*/),
  (v7/*: any*/),
  (v5/*: any*/)
],
v10 = [
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
            "selections": (v9/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Item",
            "kind": "LinkedField",
            "name": "target",
            "plural": false,
            "selections": (v9/*: any*/),
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
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
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "ItemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Item",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "ItemCombinationConnection",
            "kind": "LinkedField",
            "name": "combinations",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "ItemCombinationList_item_combinations",
            "kind": "LinkedHandle",
            "name": "combinations"
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "ItemCombinationConnection",
            "kind": "LinkedField",
            "name": "creates",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
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
    "cacheID": "f839e077f1f55861da8c383646bb66dd",
    "id": null,
    "metadata": {},
    "name": "ItemQuery",
    "operationKind": "query",
    "text": "query ItemQuery(\n  $name: String!\n  $count: Int\n  $cursor: String\n) {\n  item(name: $name) {\n    name\n    myths\n    id\n    imageUrl\n    ...ItemCombinationListComponent_item\n    ...ItemCreationListComponent_item\n  }\n}\n\nfragment ItemCombinationCardComponent_itemCombination on ItemCombination {\n  source {\n    id\n    name\n    imageUrl\n    myths\n  }\n  target {\n    id\n    name\n    imageUrl\n    myths\n  }\n}\n\nfragment ItemCombinationListComponent_item on Item {\n  name\n  combinations(after: $cursor, first: $count) {\n    edges {\n      node {\n        ...ItemCombinationCardComponent_itemCombination\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ItemCreationCardComponent_itemCombination on ItemCombination {\n  source {\n    id\n    name\n    imageUrl\n    myths\n  }\n  target {\n    id\n    name\n    imageUrl\n    myths\n  }\n}\n\nfragment ItemCreationListComponent_item on Item {\n  name\n  imageUrl\n  creates(after: $cursor, first: $count) {\n    edges {\n      node {\n        ...ItemCreationCardComponent_itemCombination\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();

(node as any).hash = "80f2bdf009602822cabaa5307b299685";

export default node;
