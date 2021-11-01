import React from "react";
import  ReactDOM, {render} from "react-dom";
import { Container } from "react-bootstrap";
import '../../../assets/styles/login.less'

export default function ContainerBox({...props}) {
    return(
        <Container className="justify-content-md-center login" fluid="md">
            Hello
        </Container>
    )}