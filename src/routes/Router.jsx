import React from "react";
import  ReactDOM, {render} from "react-dom";
import Landing from '../components/Landing/Landing.jsx'
import Login from '../components/Login/Login.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


export default function Routes() {
return(
    <BrowserRouter>
    <Switch>
    <Route path='/'>
        <Login/>
    </Route>
    </Switch>
    </BrowserRouter>
)
}