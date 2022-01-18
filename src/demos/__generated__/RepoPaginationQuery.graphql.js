/**
 * @generated SignedSource<<7c656d00831ae55151232a6a5d80cbf0>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type RepoPaginationReposListComponent_user$fragmentType = any;
export type RepoPaginationQuery$variables = {|
  cursor?: ?string,
  count: number,
|};
export type RepoPaginationQueryVariables = RepoPaginationQuery$variables;
export type RepoPaginationQuery$data = {|
  +user: ?{|
    +id: string,
    +$fragmentSpreads: RepoPaginationReposListComponent_user$fragmentType,
  |},
|};
export type RepoPaginationQueryResponse = RepoPaginationQuery$data;
export type RepoPaginationQuery = {|
  variables: RepoPaginationQueryVariables,
  response: RepoPaginationQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "count"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v2 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "sindresorhus"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepoPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RepoPaginationReposListComponent_user"
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "RepoPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RepositoryEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Repository",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
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
          {
            "alias": null,
            "args": (v5/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "ReposList_user__repositories",
            "kind": "LinkedHandle",
            "name": "repositories"
          }
        ],
        "storageKey": "user(login:\"sindresorhus\")"
      }
    ]
  },
  "params": {
    "cacheID": "a0308fb1cc780a98d49086cd733614d8",
    "id": null,
    "metadata": {},
    "name": "RepoPaginationQuery",
    "operationKind": "query",
    "text": "query RepoPaginationQuery(\n  $cursor: String\n  $count: Int!\n) {\n  user(login: \"sindresorhus\") {\n    id\n    ...RepoPaginationReposListComponent_user\n  }\n}\n\nfragment RepoPaginationReposListComponent_user on User {\n  name\n  repositories(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();

(node/*: any*/).hash = "2741c4c649aa06e7594ef8095cae1f07";

module.exports = ((node/*: any*/)/*: Query<
  RepoPaginationQuery$variables,
  RepoPaginationQuery$data,
>*/);
