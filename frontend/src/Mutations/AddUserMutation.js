import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
    mutation AddUserMutation(
        $username: String!
        $email: String!
        $password: String!
    ) {
        addUser(
            userInput: {
                username: $username
                email: $email
                password: $password
            }
        ) {
            id
        }
    }
`;

function commit(environment, username, email, password) {
    // Now we just call commitMutation with the appropriate parameters
    return commitMutation(environment, {
        mutation,
        variables: {
            username: username,
            email: email,
            password: password,
        },
    });
}

export default { commit };
