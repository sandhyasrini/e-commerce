import React from "react";
import  ReactDOM, {render} from "react-dom";
import { Row, Col } from "react-bootstrap";
import '../../../assets/styles/login.less'


export default function Link({...props}) {
    return(
        <Row>
        <button className="button-link">{props.text}</button>
    </Row>
    )}
