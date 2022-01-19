/**
 * @generated SignedSource<<9a07b33accc93aa7fc77e05a8c714f47>>
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
      +totalCount: number,
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
  "name": "totalCount",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Organization",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v3/*: any*/)
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
          (v3/*: any*/),
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Organization",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "organizations(first:5)"
          },
          (v4/*: any*/)
        ],
        "storageKey": "user(login:\"sindresorhus\")"
      }
    ]
  },
  "params": {
    "cacheID": "0e8fddff1baeb10bcdaf32f3ba2af4fe",
    "id": null,
    "metadata": {},
    "name": "FragmentExampleQuery",
    "operationKind": "query",
    "text": "query FragmentExampleQuery {\n  user(login: \"sindresorhus\") {\n    ...FragmentExample\n    organizations(first: 5) {\n      totalCount\n      nodes {\n        name\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment FragmentExample on User {\n  name\n  email\n}\n"
  }
};
})();

(node/*: any*/).hash = "ff4df05f09dd6ee83099f27205ff0801";

module.exports = ((node/*: any*/)/*: Query<
  FragmentExampleQuery$variables,
  FragmentExampleQuery$data,
>*/);
