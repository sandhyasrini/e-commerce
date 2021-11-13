import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import { Container, Col, Row } from "react-bootstrap";
import { loginPage } from "../../../constants/app.constants";
import '../../../assets/styles/login.less'
import Header from "../../blocks/Header/Header.jsx";
import Button from "../../blocks/Button/Button.jsx";
import Link from "../../blocks/Link/Link.jsx";
import Input from "../../blocks/Input/Input.jsx";
import { onClick, onChange } from './index';
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../../store/slices"

export default function Login(props) {
    const dispatch = useDispatch();
    const [state, setState] = useState({ "Username": "", "Password": "" });

    function onClick() { 
        dispatch(getUserDetails(state)) 
        if(state.Username !== "" && state.Password !== "")
        props.history.push('/landing')
    }

    function onChange(e) {
        const { name, value } = e.target
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <div className="outer">
            <Header heading={loginPage.heading} />
            <Container className="login" fluid="md">
                <Row md="1">
                    <Col md="12" className="justify-content-md-center">
                        <Input fieldName={loginPage.userNamePrompt} type="text" onChange={onChange} />
                        <Input fieldName={loginPage.userPasswordPrompt} type="password" onChange={onChange} />
                        <Button text={loginPage.login} onClick={onClick} />
                        <Link text={loginPage.signup} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}