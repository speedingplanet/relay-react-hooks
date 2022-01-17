/**
 * @generated SignedSource<<0deb5511b03aa8f2d5287f9bdec55a4a>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type VariablesExampleQuery$variables = {|
  username: string,
|};
export type VariablesExampleQueryVariables = VariablesExampleQuery$variables;
export type VariablesExampleQuery$data = {|
  +user: ?{|
    +name: ?string,
    +email: string,
    +organizations: {|
      +nodes: ?$ReadOnlyArray<?{|
        +name: ?string,
      |}>,
    |},
  |},
|};
export type VariablesExampleQueryResponse = VariablesExampleQuery$data;
export type VariablesExampleQuery = {|
  variables: VariablesExampleQueryVariables,
  response: VariablesExampleQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "username"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "username"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "VariablesExampleQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "OrganizationConnection",
            "kind": "LinkedField",
            "name": "organizations",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Organization",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "organizations(first:5)"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "VariablesExampleQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "OrganizationConnection",
            "kind": "LinkedField",
            "name": "organizations",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Organization",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "organizations(first:5)"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5d7ee2c87bf6bd0ef6319e2683b87bf3",
    "id": null,
    "metadata": {},
    "name": "VariablesExampleQuery",
    "operationKind": "query",
    "text": "query VariablesExampleQuery(\n  $username: String!\n) {\n  user(login: $username) {\n    name\n    email\n    organizations(first: 5) {\n      nodes {\n        name\n        id\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "ae510cb8927c8502c32b47a14a1d4425";

module.exports = ((node/*: any*/)/*: Query<
  VariablesExampleQuery$variables,
  VariablesExampleQuery$data,
>*/);
