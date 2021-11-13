import React from "react";
import  ReactDOM, {render} from "react-dom";


export default function Landing(props) {
   function onClick() {
    props.history.push('/')
    }
    return(
        <div>
            <h1>This is the Landing Page!</h1>
            <button onClick={onClick}> hello</button>
        </div>
    ); 
}