import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import MainLoader from "./Pages/MainLoader";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import TitleScreen from "./Pages/TitleScreen";
import { useState } from "react";

function App() {
    const [userId, setId] = useState();
    const [username, setUsername] = useState();
    const [cards, setCards] = useState();

    const [token, setToken] = useState();
    // const [tokenExpiration, setTokenExpiration] = useState();

    const setData = (data) => {
        setId(data.user.id);
        setCards(data.user.cards);
        setToken(data.token);
        // setTokenExpiration(data.tokenExpiration);
        setUsername(data.user.username);
    };

    const updateCards = (dataCards) => {
        setCards(dataCards);
    };

    const signOut = () => {
        setId(null);
        setCards(null);
        setToken(null);
        // setTokenExpiration(null);
        setUsername(null);
        localStorage.setItem("token", null);
    };

    return (
        <BrowserRouter>
            <React.Fragment>
                <Navbar token={token} username={username} signOut={signOut} />
                <Switch>
                    {token && <Redirect from='/login' to='/main' exact />}
                    {token && <Redirect from='/signup' to='/main' exact />}
                    {token && <Redirect from='/' to='/main' exact />}
                    <Route path='/' exact>
                        <TitleScreen />
                    </Route>
                    <Route path='/main'>
                        <MainLoader
                            userId={userId}
                            cards={cards}
                            updateCards={updateCards}
                            setData={setData}
                            token={token}
                        />
                    </Route>
                    <Route path='/signup' component={SignUp} />
                    <Route path='/login' exact>
                        <Login setData={setData} />
                    </Route>
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
