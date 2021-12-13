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
import imageToRender from '../../../assets/images/pastel.jpeg';


export default function Login(props) {
    const dispatch = useDispatch();
    const [state, setState] = useState({ "Username": "", "Password": "" });

    function onClick() { 
        dispatch(getUserDetails(state)) 
        if(state.Username !== "" && state.Password !== "")
        props.history.push('/landing')
    }

    function onKeyPress(e)
    {
        if(e.key == "Enter") 
        onClick();
    }

    function onChange(e) {
        const { name, value } = e.target
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <div className="outer" style={{background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),url(" + imageToRender + ")"}}>
            <Header heading={loginPage.heading} />
            <Container className="login" fluid="md">
                <Row md="1">
                    <Col md="12" className="justify-content-md-center">
                        <Input fieldName={loginPage.userNamePrompt} type="text" onChange={onChange} onKeyPress={onKeyPress} />
                        <Input fieldName={loginPage.userPasswordPrompt} type="password" onChange={onChange} onKeyPress={onKeyPress} />
                        <Button text={loginPage.login} onClick={onClick} />
                        <Link text={loginPage.signup} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}