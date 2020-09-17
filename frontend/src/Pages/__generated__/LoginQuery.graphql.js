/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginQueryVariables = {|
  email: string,
  password: string,
|};
export type LoginQueryResponse = {|
  +login: {|
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
export type LoginQuery = {|
  variables: LoginQueryVariables,
  response: LoginQueryResponse,
|};
*/


/*
query LoginQuery(
  $email: String!
  $password: String!
) {
  login(email: $email, password: $password) {
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
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "AuthData",
    "kind": "LinkedField",
    "name": "login",
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
    "name": "LoginQuery",
    "selections": (v1/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "15d0aa5fcb3588b19a13e8bae9db8318",
    "id": null,
    "metadata": {},
    "name": "LoginQuery",
    "operationKind": "query",
    "text": "query LoginQuery(\n  $email: String!\n  $password: String!\n) {\n  login(email: $email, password: $password) {\n    user {\n      id\n      username\n      cards {\n        title\n        time\n        realTime\n        length\n        color\n      }\n    }\n    token\n    tokenExpiration\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f1175c96e878981e5e84352e2f620db';

module.exports = node;
