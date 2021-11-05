import React from "react";
import  ReactDOM, {render} from "react-dom";
import { Row, Col } from "react-bootstrap";
import '../../../assets/styles/login.less'


export default function Button({...props}) {
    return(
        <Row className="justify-content-center button-style">
        <Col md={12} className="text-md-left">
        <button>{props.text}</button></Col>
        </Row>
    )}
