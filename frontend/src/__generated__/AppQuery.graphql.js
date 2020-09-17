/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +getUsers: ?$ReadOnlyArray<?{|
    +username: string
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  getUsers {
    username
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "getUsers",
        "plural": true,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "getUsers",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a8dc94746e2472722d32240e0ca07ebf",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  getUsers {\n    username\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '99497b90156fe21b20bb88169220982e';

module.exports = node;
