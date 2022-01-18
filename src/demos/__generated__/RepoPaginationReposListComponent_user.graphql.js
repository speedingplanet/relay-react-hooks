/**
 * @generated SignedSource<<5eeb3697596b1a88ed454187a9910113>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type RepoPaginationReposListComponent_user$fragmentType: FragmentType;
export type RepoPaginationReposListComponent_user$ref = RepoPaginationReposListComponent_user$fragmentType;
type ReposListPaginationQuery$variables = any;
export type RepoPaginationReposListComponent_user$data = {|
  +name: ?string,
  +repositories: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
      |},
    |}>,
  |},
  +id: string,
  +$fragmentType: RepoPaginationReposListComponent_user$fragmentType,
|};
export type RepoPaginationReposListComponent_user = RepoPaginationReposListComponent_user$data;
export type RepoPaginationReposListComponent_user$key = {
  +$data?: RepoPaginationReposListComponent_user$data,
  +$fragmentSpreads: RepoPaginationReposListComponent_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = [
  "repositories"
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
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count"
    },
    {
      "kind": "RootArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./ReposListPaginationQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "RepoPaginationReposListComponent_user",
  "selections": [
    (v1/*: any*/),
    {
      "alias": "repositories",
      "args": null,
      "concreteType": "RepositoryConnection",
      "kind": "LinkedField",
      "name": "__ReposList_user__repositories_connection",
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
                (v2/*: any*/),
                (v1/*: any*/),
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
    (v2/*: any*/)
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node/*: any*/).hash = "bf7878440abfffa5556b4b81ec4b48fb";

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  RepoPaginationReposListComponent_user$fragmentType,
  RepoPaginationReposListComponent_user$data,
  ReposListPaginationQuery$variables,
>*/);
