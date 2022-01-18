/**
 * @generated SignedSource<<a7eca76dc68516b21dd80b5848d8cb5f>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
type RefreshingFragmentsReactionsFragment$fragmentType = any;
export type RefreshingFragmentsQuery$variables = {|
  name: string,
  owner: string,
|};
export type RefreshingFragmentsQueryVariables = RefreshingFragmentsQuery$variables;
export type RefreshingFragmentsQuery$data = {|
  +repository: ?{|
    +name: string,
    +owner: {|
      +login: string,
    |},
    +issues: {|
      +totalCount: number,
      +nodes: ?$ReadOnlyArray<?{|
        +$fragmentSpreads: RefreshingFragmentsReactionsFragment$fragmentType,
      |}>,
    |},
  |},
|};
export type RefreshingFragmentsQueryResponse = RefreshingFragmentsQuery$data;
export type RefreshingFragmentsQuery = {|
  variables: RefreshingFragmentsQueryVariables,
  response: RefreshingFragmentsQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "owner"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  },
  {
    "kind": "Variable",
    "name": "owner",
    "variableName": "owner"
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
  "name": "login",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v6 = {
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
    "name": "RefreshingFragmentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "IssueConnection",
            "kind": "LinkedField",
            "name": "issues",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Issue",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "RefreshingFragmentsReactionsFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "issues(first:10)"
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
    "name": "RefreshingFragmentsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v3/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "IssueConnection",
            "kind": "LinkedField",
            "name": "issues",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Issue",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v6/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": (v4/*: any*/),
                    "concreteType": "ReactionConnection",
                    "kind": "LinkedField",
                    "name": "reactions",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Reaction",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "content",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "User",
                            "kind": "LinkedField",
                            "name": "user",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "reactions(first:10)"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "issues(first:10)"
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3678885b570b49ce1119399391d3ee1d",
    "id": null,
    "metadata": {},
    "name": "RefreshingFragmentsQuery",
    "operationKind": "query",
    "text": "query RefreshingFragmentsQuery(\n  $name: String!\n  $owner: String!\n) {\n  repository(name: $name, owner: $owner) {\n    name\n    owner {\n      __typename\n      login\n      id\n    }\n    issues(first: 10) {\n      totalCount\n      nodes {\n        ...RefreshingFragmentsReactionsFragment\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment RefreshingFragmentsReactionsFragment on Issue {\n  id\n  title\n  reactions(first: 10) {\n    totalCount\n    nodes {\n      id\n      content\n      user {\n        name\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "2e1dc7bbd80158a00c83ec9970514700";

module.exports = ((node/*: any*/)/*: Query<
  RefreshingFragmentsQuery$variables,
  RefreshingFragmentsQuery$data,
>*/);
