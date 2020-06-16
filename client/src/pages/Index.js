import React from "react";

import { Route, Switch } from "react-router-dom";
import { Col } from "react-bootstrap";
//Pages
import Landing from "./Index/Landing";
import Login from "./Index/Login";
import Users from "./Index/Users";
import RegisterNewUser from "./Index/RegisterNewUser";
import Register from "./Index/Register";
import NoMatch from "./Index/NoMatch";


// import API from "../utils/API";
import NotSignedInNav from "../components/Nav/NotSignedIn";
const Index = ({match}) => (
    <main>
        <NotSignedInNav />
        <br />
        <div className='container page jumbotron-codelines'>
            <div className='main-page p-responsive position-relative container-lg'>
                <div className='d-md-flex flex-items-center gutter-md-spacious'>
                    <Col>
                        <div className="container">
                            <h1 className="display-4">What's For Dinner</h1>
                            <p className="lead">Description</p>
                            <hr className="my-4"/>

                            <a href="https://github.com/DVasquez4155/">
                            <img src="https://avatars0.githubusercontent.com/u/22107830?v=4" alt='Daniel Vasquez Talavera' width="50"/>
                            <span> Daniel Vasquez Talavera</span>
                            </a>
                            <br/>
                            <br/>
                            <a href="https://github.com/krease23">
                            <img src="https://avatars0.githubusercontent.com/u/58020708?v=4" alt='Kermit Bonner' width="50"/>
                            <span> Kermit Bonner</span>
                            </a>
                            <br/>
                            <br/>
                            <a href="https://github.com/ConradRodgers">
                            <img src="https://avatars0.githubusercontent.com/u/58347782?v=4" alt='Conrad' width="50"/>
                            <span> Conrad</span>
                            </a>
                            <br/>
                            <br/>
                            <a href="https://github.com/David-Pendley">
                            <img src="https://avatars0.githubusercontent.com/u/57915196?v=4" alt='David Pendley' width="50"/>
                            <span> David Pendley</span>
                            </a>
                            <br/>
                            <br/>
                            <div className='d-flex justify-content-between align-items-center btn-group'>
                            <a className="col btn btn-sm btn-outline-secondary" href="https://github.com/DVasquez4155/Group-Project-3">View on GitHub&nbsp;<i className="fa fa-github"></i>&nbsp;</a>
                            <a className="col btn btn-sm btn-outline-secondary" href="/app">View&nbsp;<i className="fa fa-github"></i>&nbsp;</a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Switch>
                            <Route exact={true} path={["/"]} component={Landing} />
                            <Route exact={true} path={["/login"]} component={Login} />
                            <Route exact={true} path={["/group/:group?"]} component={Users} />
                            <Route exact={true} path={["/group/:group?/register"]} component={RegisterNewUser} />
                            <Route exact={true} path={["/register"]} component={Register} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Col>
                </div>
            </div>
        </div>
    </main>
)

export default Index;