/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ItemCombinationListComponent_item = {
    readonly combinations: {
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
    readonly " $refType": "ItemCombinationListComponent_item";
};
export type ItemCombinationListComponent_item$data = ItemCombinationListComponent_item;
export type ItemCombinationListComponent_item$key = {
    readonly " $data"?: ItemCombinationListComponent_item$data;
    readonly " $fragmentRefs": FragmentRefs<"ItemCombinationListComponent_item">;
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
      "operation": require('./ItemCombinationListPaginationQuery.graphql.ts'),
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
(node as any).hash = 'eca672ea8b79ae80201f492d2237a055';
export default node;
