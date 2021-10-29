import React from "react";
import  ReactDOM, {render} from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import { loginPage } from "../../../constants/app.constants";
import '../../../assets/styles/login.less'
import Header from "../../blocks/Header/Header.jsx";
import Button from "../../blocks/Button/Button.jsx";
import Link from "../../blocks/Link/Link.jsx";
import Input from "../../blocks/Input/Input.jsx";

export default function Login() {
    return(
<Container className="justify-content-md-center login" fluid="md">
    <Header heading={loginPage.heading}/>
    <Input fieldName={loginPage.userNamePrompt} type="text" />
    <Input fieldName={loginPage.userPasswordPrompt} type="password" />
    <Button text={loginPage.login} />
    <Link text={loginPage.signup} />     
</Container>
    ); 
}