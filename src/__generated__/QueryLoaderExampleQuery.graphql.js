/**
 * @generated SignedSource<<a92e9f26939d42b7ea4c99810f44b385>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type QueryLoaderExampleQuery$variables = {||};
export type QueryLoaderExampleQueryVariables = QueryLoaderExampleQuery$variables;
export type QueryLoaderExampleQuery$data = {|
  +viewer: {|
    +login: string,
    +name: ?string,
    +email: string,
  |},
|};
export type QueryLoaderExampleQueryResponse = QueryLoaderExampleQuery$data;
export type QueryLoaderExampleQuery = {|
  variables: QueryLoaderExampleQueryVariables,
  response: QueryLoaderExampleQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
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
    "name": "QueryLoaderExampleQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QueryLoaderExampleQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cfb0be60309171b6e86782301d798f23",
    "id": null,
    "metadata": {},
    "name": "QueryLoaderExampleQuery",
    "operationKind": "query",
    "text": "query QueryLoaderExampleQuery {\n  viewer {\n    login\n    name\n    email\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "9423000c2bb9b15cb4c5f3ab921a437a";

module.exports = ((node/*: any*/)/*: Query<
  QueryLoaderExampleQuery$variables,
  QueryLoaderExampleQuery$data,
>*/);
