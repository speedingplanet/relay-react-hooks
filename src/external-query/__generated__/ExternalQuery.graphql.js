/**
 * @generated SignedSource<<acfe7c7ec1644cc4fe8d5800106c62d3>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type ExternalQuery$variables = {||};
export type ExternalQueryVariables = ExternalQuery$variables;
export type ExternalQuery$data = {|
  +user: ?{|
    +name: ?string,
    +email: string,
  |},
|};
export type ExternalQueryResponse = ExternalQuery$data;
export type ExternalQuery = {|
  variables: ExternalQueryVariables,
  response: ExternalQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "sindresorhus"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ExternalQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": "user(login:\"sindresorhus\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ExternalQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "user(login:\"sindresorhus\")"
      }
    ]
  },
  "params": {
    "cacheID": "7dfa26f46a1ab9ee9f43cf516fb7bc65",
    "id": null,
    "metadata": {},
    "name": "ExternalQuery",
    "operationKind": "query",
    "text": "query ExternalQuery {\n  user(login: \"sindresorhus\") {\n    name\n    email\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "20b26692783b8bfb5eb674d8b1cc02ba";

module.exports = ((node/*: any*/)/*: Query<
  ExternalQuery$variables,
  ExternalQuery$data,
>*/);
