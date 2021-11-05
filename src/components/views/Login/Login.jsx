import React from "react";
import  ReactDOM, {render} from "react-dom";
import { Container, Col, Row } from "react-bootstrap";
import { loginPage } from "../../../constants/app.constants";
import '../../../assets/styles/login.less'
import Header from "../../blocks/Header/Header.jsx";
import Button from "../../blocks/Button/Button.jsx";
import Link from "../../blocks/Link/Link.jsx";
import Input from "../../blocks/Input/Input.jsx";
import ContainerBox from "../../blocks/Container/Container.jsx";

export default function Login() {
    return(
<div className="outer">
    <Header heading={loginPage.heading}/>
    <Container className="login" fluid="md">
        <Row md="1">
        <Col md="12" className="justify-content-md-center">
        <Input fieldName={loginPage.userNamePrompt} type="text" />
        <Input fieldName={loginPage.userPasswordPrompt} type="password" />
        <Button text={loginPage.login} />
        <Link text={loginPage.signup} />   
        </Col> 
        </Row> 
    </Container>
</div>
    ); 
}