import React from "react";
import  ReactDOM, {render} from "react-dom";
import '../../assets/styles/login.less'

export default function Login() {
    const login = {
        color: "blue"
        }
    return(
        <div className="login">
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