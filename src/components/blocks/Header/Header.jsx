import React from "react";
import  ReactDOM, {render} from "react-dom";
import { Row, Col } from "react-bootstrap";
import '../../../assets/styles/style.less'

export default function Header({...props}) {
    return(
        <Row className="heading">
        <Col md="1">{props.heading}</Col>
        </Row>
    )}