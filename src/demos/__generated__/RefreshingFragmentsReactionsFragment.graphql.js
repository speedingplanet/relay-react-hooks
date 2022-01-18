/**
 * @generated SignedSource<<6b4a35dad2561904f75d7fea0a53b9ce>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
export type ReactionContent = "THUMBS_UP" | "THUMBS_DOWN" | "LAUGH" | "HOORAY" | "CONFUSED" | "HEART" | "ROCKET" | "EYES" | "%future added value";
import type { FragmentType } from "relay-runtime";
declare export opaque type RefreshingFragmentsReactionsFragment$fragmentType: FragmentType;
export type RefreshingFragmentsReactionsFragment$ref = RefreshingFragmentsReactionsFragment$fragmentType;
type ReactionsFragmentRefreshQuery$variables = any;
export type RefreshingFragmentsReactionsFragment$data = {|
  +id: string,
  +title: string,
  +reactions: {|
    +totalCount: number,
    +nodes: ?$ReadOnlyArray<?{|
      +id: string,
      +content: ReactionContent,
      +user: ?{|
        +name: ?string,
      |},
    |}>,
  |},
  +$fragmentType: RefreshingFragmentsReactionsFragment$fragmentType,
|};
export type RefreshingFragmentsReactionsFragment = RefreshingFragmentsReactionsFragment$data;
export type RefreshingFragmentsReactionsFragment$key = {
  +$data?: RefreshingFragmentsReactionsFragment$data,
  +$fragmentSpreads: RefreshingFragmentsReactionsFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./ReactionsFragmentRefreshQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "RefreshingFragmentsReactionsFragment",
  "selections": [
    (v0/*: any*/),
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
            (v0/*: any*/),
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
                }
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
};
})();

(node/*: any*/).hash = "76cede68644a0d171746c7383d7c9bb9";

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  RefreshingFragmentsReactionsFragment$fragmentType,
  RefreshingFragmentsReactionsFragment$data,
  ReactionsFragmentRefreshQuery$variables,
>*/);
