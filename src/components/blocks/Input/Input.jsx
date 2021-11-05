import React from "react";
import  ReactDOM, {render} from "react-dom";
import { Row, Col } from "react-bootstrap";
import '../../../assets/styles/login.less'


export default function Input({...props}) {
    return(
        <Row className="justify-content-center form-style">
            <Col md={12} className="text-md-left">
                <input type={props.type}/></Col> 
        </Row>
    )}
