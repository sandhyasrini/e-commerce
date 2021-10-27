import React from "react";
import  ReactDOM, {render} from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import '../../assets/styles/login.less'

export default function Login() {
    const login = {
        color: "blue"
        }
    return(
<Container className="justify-content-md-center login">
        <Row>
                <Col>E-commerce</Col>
                <Col>
                username/e-mail
                <input type="text"/>
                </Col>
                <Col>
                password
                <input type="password"/></Col>
                <Col>
                <button>Login</button>
                <button>Signup</button></Col>
        </Row>
</Container>
    ); 
}