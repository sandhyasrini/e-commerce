import React from "react";
import ReactDOM, { render } from "react-dom";
import { Row, Col, FloatingLabel, Form } from "react-bootstrap";
import '../../../assets/styles/login.less'


export default function Input({ ...props }) {
    return (
        <Row className="justify-content-center form-style">
            <Col md={12} className="text-md-left">
                <FloatingLabel
                    controlId="floatingInput"
                    label={props.fieldName}
                    className="mb-3"
                >
                    <Form.Control type={props.type} name={props.fieldName} placeholder="name@example.com" value={props.value} onChange={props.onChange} />
                </FloatingLabel>
            </Col>
        </Row>
    )
}
