/**
 * @generated SignedSource<<625a27ca8bd5ee968ec3bb0d9d610a7e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemCombinationCardComponent_itemCombination$data = {
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
  readonly " $fragmentType": "ItemCombinationCardComponent_itemCombination";
};
export type ItemCombinationCardComponent_itemCombination$key = {
  readonly " $data"?: ItemCombinationCardComponent_itemCombination$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemCombinationCardComponent_itemCombination">;
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
  "name": "ItemCombinationCardComponent_itemCombination",
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

(node as any).hash = "60b095a19a90dc45e3284a4be434ceb1";

export default node;
