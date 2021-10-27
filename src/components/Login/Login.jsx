import React from "react";
import  ReactDOM, {render} from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import { loginPage } from "../../constants/app.constants";
import '../../assets/styles/login.less'

export default function Login() {
    console.warn(loginPage);
    const login = {
        color: "blue"
        }
    return(
<Container className="justify-content-md-center login">
        <Row>
                <Col>{loginPage.heading}</Col>
                <Col>
                {loginPage.userNamePrompt}
                <input type="text"/>
                </Col>
                <Col>
                {loginPage.userPasswordPrompt}
                <input type="password"/></Col>
                <Col>
                <button>{loginPage.login}</button>
                <button>{loginPage.signup}</button></Col>
        </Row>
</Container>
    ); 
}