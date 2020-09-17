import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

// We start by defining our mutation from above using `graphql`
const mutation = graphql`
    mutation CardMutation($userId: ID!, $cards: [CardInput]!) {
        updateCards(userId: $userId, cards: $cards) {
            cards {
                title
                time
                realTime
                length
                color
            }
        }
    }
`;

function commit(environment, variables) {
    // Now we just call commitMutation with the appropriate parameters
    return commitMutation(environment, {
        mutation,
        variables: variables,
    });
}

export default { commit };
