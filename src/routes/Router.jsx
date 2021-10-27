import React from "react";
import  ReactDOM, {render} from "react-dom";
import Login from '../components/views/Login/Login.jsx'
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