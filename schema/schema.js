import graphql from "graphql";
/*
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
} = graphql;

const cardType = new GraphQLObjectType({
    name: "Card",
    fields: {
        id: {
            type: GraphQLID,
            resolve() {
                return "lol";
            },
        },
        title: {
            type: GraphQLString,
            resolve() {
                return "lol";
            },
        },
        time: {
            type: GraphQLString,
            resolve() {
                return "lol";
            },
        },
        realTime: {
            type: GraphQLString,
            resolve() {
                return "lol";
            },
        },
        length: {
            type: GraphQLInt,
            resolve() {
                return 101;
            },
        },
        color: {
            type: GraphQLString,
            resolve() {
                return "lol";
            },
        },
    },
});

const userType = new GraphQLObjectType({
    name: "User",
    fields: {
        id: {
            type: GraphQLID,
            resolve() {
                return "lol";
            },
        },
        email: {
            type: GraphQLString,
            resolve() {
                return "lol";
            },
        },
        password: {
            type: GraphQLString,
            resolve() {
                return "lol";
            },
        },
        username: {
            type: GraphQLString,
            resolve() {
                return "lol";
            },
        },
        cards: {
            type: [cardType],
            resolve() {
                return [];
            },
        },
    },
});

const authType = new GraphQLObjectType({
    name: "AuthData",
    fields: {
        user: {
            type: userType,
            resolve() {
                return {};
            },
        },
        token: {
            type: GraphQLString,
            resolve() {
                return "lol";
            },
        },
        tokenExpiration: {
            type: GraphQLInt,
            resolve() {
                return 101;
            },
        },
    },
});
const queryType = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        hello: {
            type: GraphQLString,
            resolve() {
                return ["world"];
            },
        },
    },
});

var schema = new GraphQLSchema({
    query: queryType,
});

export default schema;*/

export default graphql.buildSchema(`
    type User {
        id: ID!
        email: String!
        password: String!
        username: String!
        cards: [Card]!
    }
    type Card {
        title: String!
        time: String!
        realTime: String!
        length: Int!
        color: String!
    }
    type AuthData {
        user: User!
        token: String!
        tokenExpiration: Int!
    }
    input UserInput {
        email: String!
        password: String!
        username: String!
    }
    input CardInput {
        title: String!
        time: String!
        realTime: String!
        length: Int!
        color: String!
    }
    type RootQuery {
        getUsers: [User]
        login(email: String!, password: String!): AuthData!
        decodeToken(token: String!): AuthData!
    }
    type RootMutation {
        addUser(userInput: UserInput!): User!
        updateCards(userId: ID!, cards: [CardInput]!): User!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
