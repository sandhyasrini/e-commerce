import React from "react";
import  ReactDOM, {render} from "react-dom";
import Login from '../components/views/Login'
import Landing from '../components/views/Landing'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default function Routes() {
return(
    <BrowserRouter history={history}>
    <Switch>
    <Route path={"/landing"} component={withRouter(Landing)}/>
    <Route path={"/"} component={withRouter(Login)} />
    </Switch>
    </BrowserRouter>
)
}