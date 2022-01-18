/**
 * @generated SignedSource<<4f0554680796b218e0e681762853113c>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
type RefreshingFragmentsReactionsFragment$fragmentType = any;
export type ReactionsFragmentRefreshQuery$variables = {|
  id: string,
|};
export type ReactionsFragmentRefreshQueryVariables = ReactionsFragmentRefreshQuery$variables;
export type ReactionsFragmentRefreshQuery$data = {|
  +node: ?{|
    +$fragmentSpreads: RefreshingFragmentsReactionsFragment$fragmentType,
  |},
|};
export type ReactionsFragmentRefreshQueryResponse = ReactionsFragmentRefreshQuery$data;
export type ReactionsFragmentRefreshQuery = {|
  variables: ReactionsFragmentRefreshQueryVariables,
  response: ReactionsFragmentRefreshQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
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
    "name": "ReactionsFragmentRefreshQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReactionsFragmentRefreshQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "title",
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10
                  }
                ],
                "concreteType": "ReactionConnection",
                "kind": "LinkedField",
                "name": "reactions",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Reaction",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
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
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          (v2/*: any*/)
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
            "type": "Issue",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "139f758dc7ab222857f7f4cf5bcfb8cc",
    "id": null,
    "metadata": {},
    "name": "ReactionsFragmentRefreshQuery",
    "operationKind": "query",
    "text": "query ReactionsFragmentRefreshQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...RefreshingFragmentsReactionsFragment\n    id\n  }\n}\n\nfragment RefreshingFragmentsReactionsFragment on Issue {\n  id\n  title\n  reactions(first: 10) {\n    totalCount\n    nodes {\n      id\n      content\n      user {\n        name\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "76cede68644a0d171746c7383d7c9bb9";

module.exports = ((node/*: any*/)/*: Query<
  ReactionsFragmentRefreshQuery$variables,
  ReactionsFragmentRefreshQuery$data,
>*/);
