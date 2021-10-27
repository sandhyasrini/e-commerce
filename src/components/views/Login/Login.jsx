import React from "react";
import  ReactDOM, {render} from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import { loginPage } from "../../../constants/app.constants";
import '../../../assets/styles/login.less'
import Header from "../../blocks/Header/Header.jsx";

export default function Login() {
    return(
<Container className="justify-content-md-center login" fluid="md">
    <Header />
                <Row md={5}>
                <Col md={2} className="text-md-right">
                {loginPage.userNamePrompt}</Col>
                <Col md={3} className="text-md-left">
                <input type="text"/></Col>
                
                </Row>
                <Row>
                <Col md={2} className="text-md-right">
                {loginPage.userPasswordPrompt} </Col>
                <Col md={3} className="text-md-left">
                <input type="password"/></Col></Row>
                <Row>
                <Col md={1} className="text-md-left">
                <button>{loginPage.login}</button></Col>
                </Row>
                <Row>
                    <button className="button-link">New here? Click to sign up!</button>
                </Row>
        
</Container>
    ); 
}