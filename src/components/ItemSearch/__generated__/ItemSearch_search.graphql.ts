/**
 * @generated SignedSource<<0825a2c690633faf2562e555ac818d4b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemSearch_search$data = {
  readonly search: {
    readonly items?: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly myths: boolean;
          readonly name: string;
        };
      } | null> | null;
    };
  };
  readonly " $fragmentType": "ItemSearch_search";
};
export type ItemSearch_search$key = {
  readonly " $data"?: ItemSearch_search$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemSearch_search">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "query"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [],
      "operation": require('./ItemSearchRefetchQuery.graphql')
    }
  },
  "name": "ItemSearch_search",
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
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "be0575cf72dca8276a0a0809c6e0d04d";

export default node;
