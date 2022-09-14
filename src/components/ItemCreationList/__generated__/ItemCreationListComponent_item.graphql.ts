/**
 * @generated SignedSource<<5d05ae9af009213a68082670a7347b61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemCreationListComponent_item$data = {
  readonly creates: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly source: {
          readonly id: string;
          readonly name: string;
        };
        readonly target: {
          readonly id: string;
          readonly name: string;
        };
      };
    } | null> | null;
  };
  readonly id: string;
  readonly " $fragmentType": "ItemCreationListComponent_item";
};
export type ItemCreationListComponent_item$key = {
  readonly " $data"?: ItemCreationListComponent_item$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemCreationListComponent_item">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "creates"
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
  }
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 3,
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
      "operation": require('./ItemCreationListPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "ItemCreationListComponent_item",
  "selections": [
    {
      "alias": "creates",
      "args": null,
      "concreteType": "ItemCombinationConnection",
      "kind": "LinkedField",
      "name": "__ItemCreationList_item_creates_connection",
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

(node as any).hash = "8bedf4071be3ea3ee525049fc26c8d0e";

export default node;
