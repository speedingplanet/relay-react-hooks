/**
 * @generated SignedSource<<580071d2cd9b9d86939ae533f1ce2f5f>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type FragmentExample$fragmentType: FragmentType;
export type FragmentExample$ref = FragmentExample$fragmentType;
export type FragmentExample$data = {|
  +name: ?string,
  +email: string,
  +$fragmentType: FragmentExample$fragmentType,
|};
export type FragmentExample = FragmentExample$data;
export type FragmentExample$key = {
  +$data?: FragmentExample$data,
  +$fragmentSpreads: FragmentExample$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FragmentExample",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node/*: any*/).hash = "4cb118da5d77f27b2a384848d166eace";

module.exports = ((node/*: any*/)/*: Fragment<
  FragmentExample$fragmentType,
  FragmentExample$data,
>*/);
