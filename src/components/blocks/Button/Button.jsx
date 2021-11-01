import React from "react";
import  ReactDOM, {render} from "react-dom";
import { Row, Col } from "react-bootstrap";
import '../../../assets/styles/login.less'


export default function Button({...props}) {
    return(
        <Row className="justify-content-center">
        <Col md={6} className="text-md-left">
        <button className="button-style">{props.text}</button></Col>
        </Row>
    )}
