/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddUserMutationVariables = {|
  username: string,
  email: string,
  password: string,
|};
export type AddUserMutationResponse = {|
  +addUser: {|
    +id: string
  |}
|};
export type AddUserMutation = {|
  variables: AddUserMutationVariables,
  response: AddUserMutationResponse,
|};
*/


/*
mutation AddUserMutation(
  $username: String!
  $email: String!
  $password: String!
) {
  addUser(userInput: {username: $username, email: $email, password: $password}) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          },
          {
            "kind": "Variable",
            "name": "username",
            "variableName": "username"
          }
        ],
        "kind": "ObjectValue",
        "name": "userInput"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "addUser",
    "plural": false,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddUserMutation",
    "selections": (v3/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddUserMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "4855900892ac9736850d8b4b4ac75706",
    "id": null,
    "metadata": {},
    "name": "AddUserMutation",
    "operationKind": "mutation",
    "text": "mutation AddUserMutation(\n  $username: String!\n  $email: String!\n  $password: String!\n) {\n  addUser(userInput: {username: $username, email: $email, password: $password}) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0b948a9e8917ecb26353caf347978e28';

module.exports = node;
