import React from "react";
import ReactDOM, { render } from "react-dom";
import Header from "../../blocks/Header/Header.jsx";
import { landingPage } from "../../../constants/app.constants";


export default function Landing(props) {
    function onClick() {
        props.history.push('/')
    }
    return (
        <div className="outer">
            <Header heading={landingPage.heading} />
            <h1>This is the Landing Page!</h1>
            <button onClick={onClick}> hello</button>
        </div>
    );
}