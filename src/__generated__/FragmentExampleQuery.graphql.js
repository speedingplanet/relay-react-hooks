/**
 * @generated SignedSource<<b1538ddafaa1ef22af0d1fd6217e83db>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type FragmentExample$fragmentType = any;
export type FragmentExampleQuery$variables = {||};
export type FragmentExampleQueryVariables = FragmentExampleQuery$variables;
export type FragmentExampleQuery$data = {|
  +user: ?{|
    +organizations: {|
      +nodes: ?$ReadOnlyArray<?{|
        +name: ?string,
      |}>,
    |},
    +$fragmentSpreads: FragmentExample$fragmentType,
  |},
|};
export type FragmentExampleQueryResponse = FragmentExampleQuery$data;
export type FragmentExampleQuery = {|
  variables: FragmentExampleQueryVariables,
  response: FragmentExampleQuery$data,
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
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FragmentExampleQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FragmentExample"
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
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
    "name": "FragmentExampleQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v1/*: any*/),
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
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "organizations(first:5)"
          },
          (v3/*: any*/)
        ],
        "storageKey": "user(login:\"sindresorhus\")"
      }
    ]
  },
  "params": {
    "cacheID": "2e0192e8d48d2471aff79a122fdfac3c",
    "id": null,
    "metadata": {},
    "name": "FragmentExampleQuery",
    "operationKind": "query",
    "text": "query FragmentExampleQuery {\n  user(login: \"sindresorhus\") {\n    ...FragmentExample\n    organizations(first: 5) {\n      nodes {\n        name\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment FragmentExample on User {\n  name\n  email\n}\n"
  }
};
})();

(node/*: any*/).hash = "696a6099ae238340edaefa55bffcb552";

module.exports = ((node/*: any*/)/*: Query<
  FragmentExampleQuery$variables,
  FragmentExampleQuery$data,
>*/);
