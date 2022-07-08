import React, { Children, Component } from "react";
import Slider from "react-slick";
import {ReactComponent as NextArrow} from '../svgs/caret-right.svg'
import {ReactComponent as PrevArrow} from '../svgs/caret-left.svg'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <NextArrow onClick={onClick} className="caret-icon next-arrow"/>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <PrevArrow onClick={onClick} className='caret-icon prev-arrow'/>
    );
}

const SimpleSlider = (props) => {
    const settings = {
        adaptiveHeight:true,
        autoplay:true,
        autoplaySpeed:2500,
        dots: true,
        infinite: true,
        speed:  700,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>,
        appendDots: dots => (
            <div
              style={{
                backgroundColor: "#ddd",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
        customPaging: i => (
            <div
            className="slick-btn"
              style={{
                width: "15px",
                height:"15px",
                backgroundColor:'black',
                borderRadius:'100%',
                padding:'5px',
              }}
              
            >
            </div>
          )
    }

    return (
        <Slider {...settings} >
            {props.children}
        </Slider>
    )
}

export default SimpleSlider