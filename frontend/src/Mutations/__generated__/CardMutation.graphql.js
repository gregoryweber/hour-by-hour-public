/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CardInput = {|
  title: string,
  time: string,
  realTime: string,
  length: number,
  color: string,
|};
export type CardMutationVariables = {|
  userId: string,
  cards: $ReadOnlyArray<?CardInput>,
|};
export type CardMutationResponse = {|
  +updateCards: {|
    +cards: $ReadOnlyArray<?{|
      +title: string,
      +time: string,
      +realTime: string,
      +length: number,
      +color: string,
    |}>
  |}
|};
export type CardMutation = {|
  variables: CardMutationVariables,
  response: CardMutationResponse,
|};
*/


/*
mutation CardMutation(
  $userId: ID!
  $cards: [CardInput]!
) {
  updateCards(userId: $userId, cards: $cards) {
    cards {
      title
      time
      realTime
      length
      color
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cards"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "cards",
    "variableName": "cards"
  },
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "userId"
  }
],
v3 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CardMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "updateCards",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CardMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "updateCards",
        "plural": false,
        "selections": [
          (v3/*: any*/),
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
    "cacheID": "6b944e97621d7e659fa315e242234f79",
    "id": null,
    "metadata": {},
    "name": "CardMutation",
    "operationKind": "mutation",
    "text": "mutation CardMutation(\n  $userId: ID!\n  $cards: [CardInput]!\n) {\n  updateCards(userId: $userId, cards: $cards) {\n    cards {\n      title\n      time\n      realTime\n      length\n      color\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c17506c288cbd7bb8b01af0cfd831717';

module.exports = node;
