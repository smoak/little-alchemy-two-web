/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ItemQueryVariables = {
    name: string;
};
export type ItemQueryResponse = {
    readonly item: {
        readonly name: string;
        readonly myths: boolean;
        readonly id: string;
    } | null;
};
export type ItemQuery = {
    readonly response: ItemQueryResponse;
    readonly variables: ItemQueryVariables;
};



/*
query ItemQuery(
  $name: String!
) {
  item(name: $name) {
    name
    myths
    id
  }
}
*/

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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "Item",
    "kind": "LinkedField",
    "name": "item",
    "plural": false,
    "selections": [
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ItemQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6e60466449920f3c013253cce0b5441a",
    "id": null,
    "metadata": {},
    "name": "ItemQuery",
    "operationKind": "query",
    "text": "query ItemQuery(\n  $name: String!\n) {\n  item(name: $name) {\n    name\n    myths\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '858677ba6964d1ee67ca83aa79aab1c6';
export default node;
