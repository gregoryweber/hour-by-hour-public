/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MainLoaderQueryVariables = {|
  token: string
|};
export type MainLoaderQueryResponse = {|
  +decodeToken: {|
    +user: {|
      +id: string,
      +username: string,
      +cards: $ReadOnlyArray<?{|
        +title: string,
        +time: string,
        +realTime: string,
        +length: number,
        +color: string,
      |}>,
    |},
    +token: string,
    +tokenExpiration: number,
  |}
|};
export type MainLoaderQuery = {|
  variables: MainLoaderQueryVariables,
  response: MainLoaderQueryResponse,
|};
*/


/*
query MainLoaderQuery(
  $token: String!
) {
  decodeToken(token: $token) {
    user {
      id
      username
      cards {
        title
        time
        realTime
        length
        color
      }
    }
    token
    tokenExpiration
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "token"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "token",
        "variableName": "token"
      }
    ],
    "concreteType": "AuthData",
    "kind": "LinkedField",
    "name": "decodeToken",
    "plural": false,
    "selections": [
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
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Card",
            "kind": "LinkedField",
            "name": "cards",
            "plural": true,
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
                "args": null,
                "kind": "ScalarField",
                "name": "time",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "realTime",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "length",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "color",
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
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "tokenExpiration",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MainLoaderQuery",
    "selections": (v1/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MainLoaderQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d83c17e33b7e84be950015682f4514a5",
    "id": null,
    "metadata": {},
    "name": "MainLoaderQuery",
    "operationKind": "query",
    "text": "query MainLoaderQuery(\n  $token: String!\n) {\n  decodeToken(token: $token) {\n    user {\n      id\n      username\n      cards {\n        title\n        time\n        realTime\n        length\n        color\n      }\n    }\n    token\n    tokenExpiration\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'de8c6dd7907cb3ec0d4f3a947b2532e1';

module.exports = node;
