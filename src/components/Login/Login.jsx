import React from "react";
import  ReactDOM, {render} from "react-dom";
import '../../assets/styles/login.less'
import { Layout, Card } from "antd";

export default function Login() {
    const login = {
        color: "blue"
        }
    return(
<Layout>
    <Card>
            E-commerce
            <div className="login">
                <div>
            username/e-mail
            <input type="text"/></div>
            <div>
            password
            <input type="password"/></div>
            <div>
            <button>Login</button>
            <button>Signup</button></div>
            </div>
            </Card>
</Layout>
    ); 
}