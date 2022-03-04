import React from "react";
import ReactDOM, { render } from "react-dom";
import Header from "../../blocks/Header/Header.jsx";
import MyCarousel from "../../blocks/Carousel/Carousel.jsx";
import { landingPage } from "../../../constants/app.constants";
import { Container, Col, Row } from "react-bootstrap";
import imageToRender from '../../../assets/images/1.png';
import '../../../assets/styles/landing.less'


export default function Landing(props) {
    function onClick() {
        props.history.push('/')
    }

    const items = [
        {
            header: "nordik",
            image: imageToRender,
            content: "my paragraph"
        },
        {
            header: "nordik",
            image: imageToRender,
            content: "my paragraph"
        },
        {
            header: "nordik",
            image: imageToRender,
            content: "my paragraph"
        }
    ]

    
    return (
        <div className="outer">
            <Header heading={landingPage.heading} />
            <Row md="12" className="justify-content-md-center">
                <MyCarousel items={items}> </MyCarousel>
            </Row>
        </div>
    );
}