/**
 * @generated SignedSource<<f66fe33b6e8ea0cfe53703b62988c23b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemCombinationListComponent_item$data = {
  readonly combinations: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly source: {
          readonly id: string;
          readonly imageUrl: string;
          readonly myths: boolean;
          readonly name: string;
        };
        readonly target: {
          readonly id: string;
          readonly imageUrl: string;
          readonly myths: boolean;
          readonly name: string;
        };
      };
    } | null> | null;
  };
  readonly id: string;
  readonly " $fragmentType": "ItemCombinationListComponent_item";
};
export type ItemCombinationListComponent_item$key = {
  readonly " $data"?: ItemCombinationListComponent_item$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemCombinationListComponent_item">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "combinations"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  (v1/*: any*/),
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
    "name": "imageUrl",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "myths",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 5,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./ItemCombinationListPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "ItemCombinationListComponent_item",
  "selections": [
    {
      "alias": "combinations",
      "args": null,
      "concreteType": "ItemCombinationConnection",
      "kind": "LinkedField",
      "name": "__ItemCombinationList_item_combinations_connection",
      "plural": false,
      "selections": [
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
                  "selections": (v2/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Item",
                  "kind": "LinkedField",
                  "name": "target",
                  "plural": false,
                  "selections": (v2/*: any*/),
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
      ],
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "Item",
  "abstractKey": null
};
})();

(node as any).hash = "2ba5c169c7eee447f9f0725e70996114";

export default node;
