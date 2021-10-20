import React from "react";
import  ReactDOM, {render} from "react-dom";
import './login.less'

export default function Login() {
    return(
        <div>
            E-commerce
            <div className="login">
            username/e-mail
            <input type="text"/>
            password
            <input type="password"/>
            <button>Login</button>
            <button>Signup</button>
            </div>
        </div>
    ); 
}