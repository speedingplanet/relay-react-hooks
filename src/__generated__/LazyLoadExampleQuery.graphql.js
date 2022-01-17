/**
 * @generated SignedSource<<fcd1d2cd2120ef9ecb46e157180317f2>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type LazyLoadExampleQuery$variables = {||};
export type LazyLoadExampleQueryVariables = LazyLoadExampleQuery$variables;
export type LazyLoadExampleQuery$data = {|
  +organization: ?{|
    +name: ?string,
    +email: ?string,
  |},
|};
export type LazyLoadExampleQueryResponse = LazyLoadExampleQuery$data;
export type LazyLoadExampleQuery = {|
  variables: LazyLoadExampleQueryVariables,
  response: LazyLoadExampleQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "login",
    "value": "atlassian"
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
    "name": "LazyLoadExampleQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Organization",
        "kind": "LinkedField",
        "name": "organization",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": "organization(login:\"atlassian\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LazyLoadExampleQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Organization",
        "kind": "LinkedField",
        "name": "organization",
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
        "storageKey": "organization(login:\"atlassian\")"
      }
    ]
  },
  "params": {
    "cacheID": "0fbf75197ce52a90081a4a2fc0efb8bf",
    "id": null,
    "metadata": {},
    "name": "LazyLoadExampleQuery",
    "operationKind": "query",
    "text": "query LazyLoadExampleQuery {\n  organization(login: \"atlassian\") {\n    name\n    email\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "0de056dd4f7d2e28625e622db6c8b5d1";

module.exports = ((node/*: any*/)/*: Query<
  LazyLoadExampleQuery$variables,
  LazyLoadExampleQuery$data,
>*/);
