import React from "react";
import  ReactDOM, {render} from "react-dom";
import { Carousel } from "react-bootstrap";
import imageToRender from '../../../assets/images/bw.png';


export default function MyCarousel({...props})
{
    props.items.forEach((item) => console.log());
    return (
        <Carousel className="carousel">
            {
                props.items.map((item, i) => (
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={item.image}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>{item.header}</h3>
                        <p>{item.content}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                ))
            }
                </Carousel>
    )
}