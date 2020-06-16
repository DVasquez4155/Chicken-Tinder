import React, { useState, useEffect } from "react";

import {Route, Switch } from "react-router-dom";

import { Row } from "react-bootstrap";

//App
import Index from "./App/Index";
// import Matches from "./pages/Matches";
//Navigations
import Nav from "../components/Nav";
import MobileNav from "../components/Nav/mobile";

import API from "../utils/API";

function App ({ match }) {
    const [user, setUser] = useState({});
    function loadUser() {
        API.getUser(match.params.user)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    }
    useEffect(loadUser, [])

    const [group, setGroup] = useState({});
    function loadGroup() {
        API.getGroup(match.params.user)
        .then((res) => setGroup(res.data))
        .catch((err) => console.log(err));
    }
    useEffect(loadGroup, [])
    return(
        <div className='container page'>
            <Row>
                <MobileNav />
            </Row>
            <Row className='main-page'>
                <div className='sidebar col-lg-3 col-md-4 col-xs-12 navigation d-none d-md-block'>
                    <Nav user={user} group={group}/>
                </div>
                <div className='col-lg-9 col-md-8 col-xs-12'>
                    <Switch>
                        <Route path={match.path} render={() => <Index functions={ {loadGroup, loadUser} } match={match} user={user} group={group} />}/>
                    </Switch>
                </div>
            </Row>
        </div>
    )
}

export default App;