/**
 * @generated SignedSource<<95bc38fa1013d0bffbeae5f689535c3a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemCreationCardComponent_itemCombination$data = {
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
  readonly " $fragmentType": "ItemCreationCardComponent_itemCombination";
};
export type ItemCreationCardComponent_itemCombination$key = {
  readonly " $data"?: ItemCreationCardComponent_itemCombination$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemCreationCardComponent_itemCombination">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemCreationCardComponent_itemCombination",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "source",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Item",
      "kind": "LinkedField",
      "name": "target",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "ItemCombination",
  "abstractKey": null
};
})();

(node as any).hash = "4888440aecea9562e448bf75e00d4c58";

export default node;
