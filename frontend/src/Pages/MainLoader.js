// query renderer for main page. if user token exists in localstorage, get the data so they dont have to relog

import React from "react";

import { QueryRenderer } from "react-relay";
import environment from "../relayEnvToken";
import graphql from "babel-plugin-relay/macro";

import Main from "./Main";

function MainLoader(appProps) {
    return localStorage.getItem("token") != null ? (
        <QueryRenderer
            environment={environment}
            query={graphql`
                query MainLoaderQuery($token: String!) {
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
            `}
            variables={{
                token: localStorage.getItem("token"),
            }}
            render={({ error, props }) => {
                if (error) {
                    return (
                        <Main
                            userId={appProps.userId}
                            cards={appProps.cards}
                            updateCards={appProps.updateCards}
                        />
                    );
                }
                if (!props) {
                    return (
                        <div
                            style={{
                                width: "100vw",
                                height: "100vh",
                                color: "gray",
                            }}
                        ></div>
                    );
                }
                appProps.setData(props.decodeToken);
                return (
                    <Main
                        userId={props.decodeToken.user.id}
                        cards={props.decodeToken.user.cards}
                        updateCards={appProps.updateCards}
                    />
                );
            }}
        />
    ) : (
        <Main
            userId={appProps.userId}
            cards={appProps.cards}
            updateCards={appProps.updateCards}
        />
    );
}

export default MainLoader;
